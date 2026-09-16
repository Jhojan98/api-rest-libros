require("dotenv").config();
const express = require("express");
const librosRoutes = require("./routes/libros.routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar cuerpos de petición en formato JSON.
app.use(express.json());

// Se conecta el conjunto de rutas de libros bajo el prefijo /libros.
app.use("/libros", librosRoutes);

// Ruta raíz de verificación (health check).
app.get("/", (req, res) => {
  res.status(200).json({ mensaje: "API de catálogo de libros activa" });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});