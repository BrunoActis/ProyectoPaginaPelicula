
const g1 = document.getElementById ("g1");
const g2 = document.createElement ("div");

for(const pelicula of peliculas){
    if (pelicula.ID == 1) {
        g2.className =("row")
        g2.innerHTML=`
        <div id="contImagen" class="col-4 m-3 pl-3">
            <img src="../assets/${pelicula.imagen}" class="img-fluid" alt="img">
        </div>
        <div id="continfo" class="description col-4  w-50">
            <h1 class="fs-1">${pelicula.titulo}</h5>
            <p class="">${pelicula.descripcion}</p
            <a href="#" class="btn btn-primary">VER ONLINE</a>
        </div>

    `        
    g1.appendChild(g2);
}}

