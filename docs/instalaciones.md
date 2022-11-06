# Proyecto de react js con firebase

Este es un proyecto para el curso react js avanzado de Openbootcamp.
Creamos un create-react-app y lo vamos a gestionar con firebase.

1. Instalamos firebase en nuestro proyecto
npm install firebase

2. Instalamos tailwindcss
npm install - D tailwindcss postcss autoprefixer

- Luego lo inicializamos con
npx tailwindcss init -p

- En el fichero de configuración tailwind.config.js agregamos
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

- Y por último cambiamos el contenido de ./src/index.css por
@tailwind base;
@tailwind components;
@tailwind utilities;

3. Instalamos react-icons para usar iconos
npm install react-icons

4. Starteamos la app
npm start

5. Instalamos react-hot-toast para enviar toast al loguear
npm i react-hot-toast