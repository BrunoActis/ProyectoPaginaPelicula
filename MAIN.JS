



/* sweet alert de Inicio */

preguntaEdad();

function preguntaEdad(){
    Swal.fire({
        title: 'How old are you?',
        icon: 'question',
        input: 'range',
        inputLabel: 'Your age',
        inputAttributes: {
          min: 8,
          max: 120,
          step: 1
        },
        inputValue: 25
      })
}
/* CREANDO CARDS */

CREARCARDS();

function CREARCARDS() {
    let cartas=document.getElementById("cartas");
        for(const pelicula of peliculas){
            let carta=document.createElement("div");
            carta.className="col-md-3";
            carta.innerHTML=`
            <div class="card border border-3 m-4">
                <h3 class="visually-hidden" > ID: ${pelicula.ID} </h3>
                <img src="./assets/${pelicula.imagen}" class="img-fluid card-img-top" alt="img">
                <div id ="allcard" class="card-body">
                    <h5 class="card-title">${pelicula.titulo}</h5>
                    <p class="card-text text-uppercase">${pelicula.genero}</p>
                    <button type="button" id="btn${pelicula.ID}" class="btn btn-outline-dark">VER PELI</button>
                </div>
                <div class="description1">
                    <p></p>
                    <p>${pelicula.descripcion}</p>
                    <p></p>
                </div>
            </div>`;
            cartas.append(carta);
        }

        //evento de Boton
        peliculas.forEach(pelicula => {
            //evento individual de cada boton
            document.getElementById(`btn${pelicula.ID}`).addEventListener("click", function(){
                if(`btn${pelicula.ID}` == `btn${pelicula.btn}`){

                    /* --- Se elimina todo el Contenido --- */

                    document.getElementById(eliminarLuego);
                    eliminarLuego.remove();
                      

                    /* --- Se crea Nuevo Contenido --- */
                    
                    /* --- Creamos un General en el body <div></div> --- */
                    const divnuevoGeneral = document.createElement("div"); 
                    divnuevoGeneral.className ="container"
                    divnuevoGeneral.id="conGeneral"

                    /* --- Creamos un div nuevo dentro de ese div General <div></div> --- */
                    const divnuevo = document.createElement("div"); 
                    divnuevo.id = "page";          
                    divnuevo.className = "row";   
                    
                    /* ---Inyectamos contenido --- */
                    divnuevo.innerHTML = `      
                        <div id="contImagen" class="col-4 m-3 pl-3">
                            <img src="../assets/${pelicula.imagen}" style="width:300px" class="img-fluid" alt="img">
                        </div>
                        <div id="continfo" class="description col-4  w-50">
                            <h1 class="fs-1">${pelicula.titulo}</h5>
                            <p class="">${pelicula.descripcion}</p
                        </div>
                        <div d-grid>
                        <button type="button" class="botonesdePag btn btn-dark">VER ONLINE</button>
                        <a href="INDEX2.html" class="botonesdePag btn btn-dark">VOLVER</a>
                        </div>
                        `;

                    document.body.appendChild(divnuevoGeneral);
                    divnuevoGeneral.appendChild(divnuevo);    

                }
             
                
            });

        })

}



//* BUSCADOR POR BOTON EN NAVBAR*//
const buscarPeli = document.querySelector("#buscarPeli");
const btn100 = document.querySelector ("#btn100");

const filtrar = () => {
    const texto = buscarPeli.value.toLowerCase();
    for (let pelicula of peliculas){
        let titulo = pelicula.titulo.toLowerCase();
        if (titulo.indexOf(texto) !== -1){
            console.table(pelicula);        

        }
    }
}
btn100.addEventListener("click" ,filtrar);



