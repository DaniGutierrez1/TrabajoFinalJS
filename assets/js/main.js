//La idea es que se muestren las marcas para que el usuario seleccione
// una de ellas y que a partir de ese evento se filtre la marca y empiece a mostrar los diferentes modelos para que despues se seleccione y de ahi se lleve el precio para poder cotizar el seguro

let ford = document.querySelector('.marcas__ford')
let audi = document.querySelector('.marcas__audi')
let chevrolet = document.querySelector('.marcas__chevrolet') 
let resultado = document.querySelector('.resultado')
let btn = document.querySelector(".btn")


/* document.addEventListener('DOMContentLoaded',()=>{
    segurosCarrito=JSON.parse(localStorage.getItem('carrito'))||[];
    
}) */

/* listaProductos.addEventListener('click',agregarSeguro) */

ford.addEventListener('click', () =>{
    console.log("Ingresaste en Ford")

    fetch("data.json")
    .then((respuesta)=>{
        return respuesta.json()
    })
    .then((data)=>{
        let marca = 'Ford'
        renderArray(data , marca)
    })
    .catch((error)=>{
        Swal.fire({
            title: 'Catastrofe',
            text:'Ha ocurrido un error',
            icon:'error',
            confirmButtonText:'OK',
        })
        console.log(error)
    })

})

audi.addEventListener('click', () =>{
    console.log("Ingresaste en Audi")

    fetch("data.json")
    .then((respuesta)=>{
        return respuesta.json()
    })
    .then((data)=>{
        let marca = 'Audi'
        renderArray(data , marca)
    })
    .catch((error)=>{
        Swal.fire({
            title: 'Catastrofe',
            text:'Ha ocurrido un error',
            icon:'error',
            confirmButtonText:'OK',
        })
        console.log(error)
    })
})

chevrolet.addEventListener('click', () =>{
    console.log("Ingresaste en Chevrolet")
    
    fetch("data.json")
    .then((respuesta)=>{
        return respuesta.json()
    })
    .then((data)=>{
        let marca = 'Chevrolet'
        renderArray(data , marca)
    })
    .catch((error)=>{
        Swal.fire({
            title: 'Catastrofe',
            text:'Ha ocurrido un error',
            icon:'error',
            confirmButtonText:'OK',
        })
        console.log(error)
    })

})

function renderArray(autos , marca){
    
    const contenido = document.querySelector("#lista_productos")
    const busqueda = autos.filter(a=> a.marca === marca)
    let html ="";

    busqueda.forEach(({modelo,img,valor})=>{
        html +=`
        <div class="card" style="width: 18rem;">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${modelo}</h5>
                <p class="card-text">${valor}</p>
                <a href="#" class="btn btn-primary">Seleccionar</a>
            </div>
        </div>
        `

        btn.addEventListener('click',()=>{
            Swal.fire({
                title:'modelo',
                text:'valor',
                imageUrl:'img',
                imageWidth:400,
                imageHeight: 200,
            })
        })

    })

    contenido.innerHTML=html
    
}

/* btn.addEventListener('click',()=>{
    Swal.fire({
        title:'',
        text:'',
        imgURL:'',
        imageWidth:400,
        imageHeight: 200,
    })
}) */



/* function agregarSeguro(evt){
    evt.preventDefault()

    if(evt.target.classList.contains('agregar-carrito')){
        const seguro = evt.target.parentElement.parentElement;
        leerDatosSeguro(seguro)
    }
}

function leerDatosSeguro(seguro){

    const infoSeguro={
        imagen: seguro.querySelector('img').src,
        titulo: seguro.querySelector('h4').textContent,
    }
}  */








