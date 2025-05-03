const restaurantes = [{
    nombre: "Pacifico Mar",
    direccion: "Av. 85 Nro. 45 - 85 Barranquilla",
    descripcion: "Deliciosa comida de mar",
    imagen_url: "STATIC/pacifico.jpg"
},
{
    nombre: "Italiano 65",
    direccion: "Av. 45 Nro. 1 - 85 Medellín",
    descripcion: "Deliciosa comida italiana",
    imagen_url: "STATIC/italiano.jpg"
},
{
    nombre: "Fritos y Más",
    direccion: "Calle 45 Medellín",
    descripcion: "Comida rápida",
    imagen_url: "STATIC/fritos.jpg"
},
{
    nombre: "Pollo Frito",
    direccion: "Cr 32 # 56 - 89",
    descripcion: "Lo mejor del pollo frito",
    imagen_url: "STATIC/pollo.jpg"
}
];

function searchRestaurant() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ""; // Limpiar los resultados anteriores

    const results = restaurantes.filter(restaurante =>
        restaurante.nombre.toLowerCase().includes(searchTerm)
    );

    if (results.length > 0) {
        results.forEach(restaurante => {
            const restaurantCard = document.createElement('div');
            restaurantCard.classList.add('restaurant-card');

            const imageDiv = document.createElement('div');
            imageDiv.classList.add('restaurant-image');
            const imgElement = document.createElement('img'); // Crear el elemento img
            imgElement.src = restaurante.imagen_url;
            imgElement.alt = restaurante.nombre;
            imageDiv.appendChild(imgElement); // Añadir la imagen al div

            const detailsDiv = document.createElement('div');
            detailsDiv.classList.add('restaurant-details');

            const title = document.createElement('h2');
            title.textContent = restaurante.nombre;

            const address = document.createElement('p');
            address.textContent = restaurante.direccion;

            const description = document.createElement('p');
            description.textContent = restaurante.descripcion;

            detailsDiv.appendChild(title);
            detailsDiv.appendChild(address);
            detailsDiv.appendChild(description);

            restaurantCard.appendChild(imageDiv);
            restaurantCard.appendChild(detailsDiv);

            resultsContainer.appendChild(restaurantCard);
        });
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