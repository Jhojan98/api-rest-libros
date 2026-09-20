// Arreglo en memoria que simula una base de datos.
// Los datos se pierden cada vez que el servidor se reinicia.
// Más adelante en el curso lo reemplazaremos por persistencia real.

let libros = [
  {
    id: 1,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "novela",
    disponible: true
  },
  {
    id: 2,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    genero: "fábula",
    disponible: true
  },
  {
    id: 3,
    titulo: "1984",
    autor: "George Orwell",
    genero: "distopía",
    disponible: false
  }
];

module.exports = libros;