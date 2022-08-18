
/* CREANDO CARDS */

CREARCARDS();

function CREARCARDS() {
    let cartas=document.getElementById("cartas");
        for(const pelicula of peliculas){
            let carta=document.createElement("div");
            carta.className="col-md-3";
            carta.innerHTML=`
            <div class="card">
                <h3> ID: ${pelicula.ID} </h3>
                <img src="./assets/${pelicula.imagen}" class="img-fluid card-img-top" alt="img">
                <div id ="allcard" class="card-body">
                    <h5 class="card-title">${pelicula.titulo}</h5>
                    <p class="card-text">${pelicula.genero}</p>
                    <a href="#" id="btn${pelicula.ID}" class="btn btn-primary">VER PELI</a>
                </div>
                <div class="description">
                    <p></p>
                    <p>donde solo ella puede salvar lo que es importante para ella al conectarse […]</p>
                    <p></p>
                </div>
            </div>`;
            cartas.append(carta);
        }
        //evento de boton
        peliculas.forEach(pelicula => {
            //evento individual de cada boton
            document.getElementById(`btn${pelicula.ID}`).addEventListener("click", function(){
                console.table(pelicula);
                
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



