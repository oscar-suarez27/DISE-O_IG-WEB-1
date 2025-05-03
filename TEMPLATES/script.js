const restaurantes = [{
    nombre: "Pacifico Mar",
    direccion: "Av. 85 Nro. 45 - 85 Barranquilla",
    descripcion: "Deliciosa comida de mar",
    imagen_url: "image1.jpg"
},
{
    nombre: "Italiano 65",
    direccion: "Av. 45 Nro. 1 - 85 Medellín",
    descripcion: "Deliciosa comida italiana",
    imagen_url: "image2.jpg"
},
{
    nombre: "Fritos y Más",
    direccion: "Calle 45 Medellín",
    descripcion: "Comida rápida",
    imagen_url: "image3.jpg"
},
{
    nombre: "Pollo Frito",
    direccion: "Cr 32 # 56 - 89",
    descripcion: "Lo mejor del pollo frito",
    imagen_url: "image4.jpg"
}
];

function searchRestaurant() {
const searchTerm = document.getElementById("searchInput").value.toLowerCase();
const resultsContainer = document.getElementById("searchResults");
resultsContainer.innerHTML = "";

const results = restaurantes.filter(restaurante =>
    restaurante.nombre.toLowerCase().includes(searchTerm)
);

if (results.length > 0) {
    const restaurante = results[0];
    resultsContainer.innerHTML = `
        <div class="restaurant-image" style="background-image: url('${restaurante.imagen_url}');"></div>
        <div class="restaurant-details">
            <h2>${restaurante.nombre}</h2>
            <p>${restaurante.direccion}</p>
            <p>${restaurante.descripcion}</p>
        </div>
    `;
} else {
    resultsContainer.textContent = "No se encontraron resultados.";
}
}

function saveRestaurant() {
const nombre = document.getElementById("name").value;
const descripcion = document.getElementById("description").value;
const direccion = document.getElementById("address").value;
const imagen_url = document.getElementById("image_url").value;

console.log("Restaurante a guardar:", {
    nombre,
    descripcion,
    direccion,
    imagen_url
});
alert("Restaurante guardado (en la consola).");

document.getElementById("name").value = "";
document.getElementById("description").value = "";
document.getElementById("address").value = "";
document.getElementById("image_url").value = "";
}