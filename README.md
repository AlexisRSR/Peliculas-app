# Películas App

enlace de video en como funciona la app: https://youtu.be/LfbzLWlGk0g

## Descripción

Una aplicación web para buscar películas usando la API de TMDb, ver detalles y marcar películas como favoritas.

## Estructura del Proyecto

- **frontend/**: Código fuente del frontend desarrollado en React.
- **backend/**: Código fuente del backend desarrollado en Node.js con Express.

## Requisitos

- [Node.js](https://nodejs.org) (v14 o superior)
- [MongoDB](https://www.mongodb.com) (para la base de datos)

## Instalación

### Frontend

1. Navega al directorio `frontend/`:
   ```bash
   cd frontend

# Navega al directorio backend/
cd backend

# Instala las dependencias
npm install

# Ejecuta el backend
npm start

# Crea una rama para tus cambios
git checkout -b nombre-de-la-rama

# Realiza tus cambios y haz commit
git add .
git commit -m "Descripción de los cambios"

# Envía tus cambios a GitHub
git push origin nombre-de-la-rama

# Crea un Pull Request en GitHub

Este proyecto está bajo la Licencia MIT.


### 5. **Guardar el Archivo**

- Después de añadir el contenido, guarda el archivo:
  - Presiona `Ctrl + S` (o `Cmd + S` en macOS) para guardar los cambios.

### 6. **Verificar la Estructura**

API-main/
├── frontend/             # Código fuente del frontend (React)
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
├── backend/              # Código fuente del backend (Node.js/Express)
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   └── index.js
├── .gitignore
└── README.md


//Para que Puedas ver las peliculas favoritas debes de conectar la base de datos en mongo db puedes hacerlo importando la carpeta que de llama "compass-connectios.json"

## Importación Manual de Datos en MongoDB

1. **Abrir MongoDB Compass:**
   - Inicia MongoDB Compass y conecta a tu servidor MongoDB usando la URI `mongodb://localhost:27017`.

2. **Crear la Base de Datos:**
   - En la esquina superior izquierda, haz clic en "Create Database".
   - Introduce `mongodb` como nombre de la base de datos.

3. **Importar los Datos:**
   - Navega hasta la base de datos `mongodb`.
   - Haz clic en "Import Data" y selecciona la colección en la que deseas importar los datos.
   - Selecciona el archivo JSON que exportaste desde MongoDB Compass (`C:\Users\ALEXIS SANDOVAL\OneDrive\Documentos\API-main\API-main\mongodb`).
   - Asegúrate de que el formato de archivo esté configurado como JSON y haz clic en "Import".

4. **Verifica la Importación:**
   - Después de la importación, revisa que los datos se hayan importado correctamente.


