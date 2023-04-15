//La idea es que se muestren las marcas para que el usuario seleccione
// una de ellas y que a partir de ese evento se filtre la marca y empiece a mostrar los diferentes modelos para que despues se seleccione y de ahi se lleve el precio para poder cotizar el seguro

let ford = document.querySelector('.marcas__ford')
let audi = document.querySelector('.marcas__audi')
let chevrolet = document.querySelector('.marcas__chevrolet')
let bmw = document.querySelector('.marcas__bmw')
let fiat = document.querySelector('.marcas__fiat') 
let resultado = document.querySelector('.resultado')
let btn = document.querySelector(".btn")


ford.addEventListener('click', () =>{


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

bmw.addEventListener('click', () =>{

    fetch("data.json")
    .then((respuesta)=>{
        return respuesta.json()
    })
    .then((data)=>{
        let marca = 'BMW'
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

fiat.addEventListener('click', () =>{

    fetch("data.json")
    .then((respuesta)=>{
        return respuesta.json()
    })
    .then((data)=>{
        let marca = 'Fiat'
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
                <p class="card-text">$${valor}</p>
                <a href="#" class="btn btn-primary">Solicitar informacion</a>
            </div>
        </div>
        `
        btn.addEventListener('click',()=>{
            const { value: email } = Swal.fire({
                title: 'Ingrese su mail',
                input: 'email',
                inputLabel: 'Le enviaremos mayor informacion a su mail',
                inputPlaceholder: 'mail'
            })
            
            if (email) {
                Swal.fire(`Entered email: ${email}`)
            }
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










