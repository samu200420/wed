// Este array contiene los datos de nuestro equipo
const colaboradores = [
  {nombre: "María Pérez", correo: "maria@mundoescolar.com", tipo: "Administrativo", codigo: "001", puesto: "Gerente General", imagen: "imagenes/equipo/maria.jpg"},
  {nombre: "Luis Ramírez", correo: "luis@mundoescolar.com", tipo: "Ventas", codigo: "002", puesto: "Vendedor", imagen: "imagenes/equipo/luis.jpg"},
  {nombre: "Anna Torres", correo: "ana@mundoescolar.com", tipo: "Diseño", codigo: "003", puesto: "Diseñadora Gráfica", imagen: "imagenes/equipo/ana.jpg"},
  {nombre: "Carlos López", correo: "carlos@mundoescolar.com", tipo: "Logística", codigo: "004", puesto: "Encargado de Almacén", imagen: "imagenes/equipo/carlos.jpg"},
  {nombre: "Gabriela Ruíz", correo: "gabriela@mundoescolar.com", tipo: "Soporte", codigo: "005", puesto: "Técnica de Soporte", imagen: "imagenes/equipo/gabriela.jpg"},
  {nombre: "Pedro Soto", correo: "pedro@mundoescolar.com", tipo: "Ventas", codigo: "006", puesto: "Asesor Comercial", imagen: "imagenes/equipo/pedro.jpg"},
  {nombre: "Lucía Vélez", correo: "lucia@mundoescolar.com", tipo: "Marketing", codigo: "007", puesto: "Community Manager", imagen: "imagenes/equipo/lucia.jpg"},
  {nombre: "Jorge Paredes", correo: "jorge@mundoescolar.com", tipo: "Desarrollo", codigo: "008", puesto: "Web Developer", imagen: "imagenes/equipo/jorge.jpg"}
];

const contenedor = document.getElementById("equipo");

colaboradores.forEach((col, i) => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.animationDelay = `${i * 0.2}s`;
  card.innerHTML = `
    <img src="${col.imagen}" alt="Foto de ${col.nombre}">
    <h3>${col.nombre}</h3>
    <p><strong>Correo:</strong> ${col.correo}</p>
    <p><strong>Tipo:</strong> ${col.tipo}</p>
    <p><strong>Código:</strong> ${col.codigo}</p>
    <p><strong>Puesto:</strong> ${col.puesto}</p>
  `;
  contenedor.appendChild(card);
});

const titulo = document.querySelector(".titulo");
const texto = "NUESTRO EQUIPO";
let index = 0;

titulo.innerHTML = "";
function escribirTitulo() {
  if (index < texto.length) {
    titulo.innerHTML += texto.charAt(index);
    index++;
    setTimeout(escribirTitulo, 100);
  }
}
escribirTitulo();
