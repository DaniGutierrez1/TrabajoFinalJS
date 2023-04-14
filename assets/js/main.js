//La idea es que se muestren las marcas para que el usuario seleccione
// una de ellas y que a partir de ese evento se filtre la marca y empiece a mostrar los diferentes modelos para que despues se seleccione y de ahi se lleve el precio para poder cotizar el seguro

let ford = document.querySelector('.marcas__ford')
let audi = document.querySelector('.marcas__audi')
let chevrolet = document.querySelector('.marcas__chevrolet') 
let resultado = document.querySelector('.resultado')

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
        //Colocar un sweet alert
        alert("Ocurrio una catastrofe " ,error)
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
        //Colocar un sweet alert
        alert("Ocurrio una catastrofe " ,error)
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
        //Colocar un sweet alert
        alert("Ocurrio una catastrofe " ,error)
    })

})

function renderArray(autos , marca){
    
    const contenido = document.querySelector("#lista_productos")
    const busqueda = autos.filter(a=> a.marca === marca)
    let html ="";

    busqueda.forEach(({modelo,img,valor})=>{
        html +=`
        <div class="card">
            <h3>${modelo}</h3>
            <img src="${img}" width=150px>
            <p>valor ${valor}</p>
        `
    })

    contenido.innerHTML=html
}


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








