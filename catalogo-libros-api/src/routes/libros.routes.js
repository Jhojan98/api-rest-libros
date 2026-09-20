const express = require("express");
const router = express.Router();
const libros = require("../data/libros");

// Variable auxiliar para generar nuevos identificadores.
let siguienteId = 4;

// ------------------------------------------------------------
// GET /libros
// Lista todos los libros. Admite parámetros de consulta (query params)
// opcionales para filtrar resultados: autor, genero, disponible.
// Ejemplo: GET /libros?autor=Orwell&disponible=true
// ------------------------------------------------------------
router.get("/", (req, res) => {
  const { autor, genero, disponible } = req.query;
  let resultado = libros;

  if (autor) {
    resultado = resultado.filter((libro) =>
      libro.autor.toLowerCase().includes(autor.toLowerCase())
    );
  }

  if (genero) {
    resultado = resultado.filter(
      (libro) => libro.genero.toLowerCase() === genero.toLowerCase()
    );
  }

  if (disponible !== undefined) {
    const esDisponible = disponible === "true";
    resultado = resultado.filter((libro) => libro.disponible === esDisponible);
  }

  res.status(200).json(resultado);
});

// ------------------------------------------------------------
// GET /libros/:id
// Obtiene un libro específico mediante un parámetro de ruta (path param).
// Ejemplo: GET /libros/2
// ------------------------------------------------------------
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const libro = libros.find((libro) => libro.id === id);

  if (!libro) {
    return res.status(404).json({ mensaje: "Libro no encontrado" });
  }

  res.status(200).json(libro);
});

// ------------------------------------------------------------
// POST /libros
// Crea un nuevo libro a partir del cuerpo (body) de la petición.
// ------------------------------------------------------------
router.post("/", (req, res) => {
  const { titulo, autor, genero, disponible } = req.body;

  if (!titulo || !autor) {
    return res
      .status(400)
      .json({ mensaje: "Los campos 'titulo' y 'autor' son obligatorios" });
  }

  const nuevoLibro = {
    id: siguienteId++,
    titulo,
    autor,
    genero: genero || "sin clasificar",
    disponible: disponible !== undefined ? disponible : true
  };

  libros.push(nuevoLibro);
  res.status(201).json(nuevoLibro);
});

// ------------------------------------------------------------
// PUT /libros/:id
// Actualiza un libro existente identificado por su id.
// ------------------------------------------------------------
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const libro = libros.find((libro) => libro.id === id);

  if (!libro) {
    return res.status(404).json({ mensaje: "Libro no encontrado" });
  }

  const { titulo, autor, genero, disponible } = req.body;

  if (titulo !== undefined) libro.titulo = titulo;
  if (autor !== undefined) libro.autor = autor;
  if (genero !== undefined) libro.genero = genero;
  if (disponible !== undefined) libro.disponible = disponible;

  res.status(200).json(libro);
});

// ------------------------------------------------------------
// DELETE /libros/:id
// Elimina un libro identificado por su id.
// ------------------------------------------------------------
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = libros.findIndex((libro) => libro.id === id);

  if (indice === -1) {
    return res.status(404).json({ mensaje: "Libro no encontrado" });
  }

  libros.splice(indice, 1);
  res.status(204).send();
});

module.exports = router;