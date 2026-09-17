# api-rest-libros

Ejercicio de IngWebBackend: API REST de catálogo de libros con Node.js, Express y persistencia
en memoria.

**Autores:** Jhojan Stiven Aragón Ramírez, Yader, Kevin Emmanuel Tovar Lizarazo

## Estructura

```
catalogo-libros-api/
├── src/
│   ├── data/libros.js          # datos en memoria
│   ├── routes/libros.routes.js # endpoints /libros
│   └── server.js               # punto de entrada
├── postman/                    # colección y environment para Postman
├── .env.example
└── package.json
```

## Uso rápido

```bash
cd catalogo-libros-api
npm install
cp .env.example .env
npm run dev
```

Servidor en `http://localhost:3000`.

## Endpoints

| Método | Ruta          | Descripción                                   |
|--------|---------------|------------------------------------------------|
| GET    | `/libros`     | Lista libros, admite `?autor=`, `?genero=`, `?disponible=` |
| GET    | `/libros/:id` | Obtiene un libro por id                        |
| POST   | `/libros`     | Crea un libro (`titulo` y `autor` obligatorios)|
| PUT    | `/libros/:id` | Actualiza un libro existente                   |
| DELETE | `/libros/:id` | Elimina un libro                               |

## Probar

Importa `postman/catalogo-libros-api.postman_collection.json` y el environment en Postman,
o usa los comandos `curl` de la guía del ejercicio.
