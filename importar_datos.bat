@echo off
REM Define la URI de conexión y la base de datos destino
SET MONGO_URI="mongodb://localhost:27017"
SET DATABASE_NAME="mongodb"

REM Ruta del archivo JSON a importar
SET FILE_PATH="C:\Users\ALEXIS SANDOVAL\OneDrive\Documentos\API-main\API-main\mongodb\tmdb_favoritos.favoritos"

REM Comando para importar los datos
mongoimport --uri %MONGO_URI% --db %DATABASE_NAME% --file %FILE_PATH% --jsonArray

REM Pausar la ejecución para ver mensajes
pause
