# MELI FrontEnd Challenge

### Resumen
Consiste de una aplicación web que permite buscar items/productos y ver detalles de los mismos consumiendo la API de MercadoLibre.

## Tecnologías
##### Frontend:
- ReactJS (v17.0.2)
- Sass (6.0.1)
- HTML

##### Backend:
- NodeJS (v14.17.5)
- Express (v4.17.1)

##### [Postman Collection](https://www.getpostman.com/collections/065e4b96ff632ae3bcae)

### Despliegue
Backend:
```
cd meli-backend
npm install
npm start
```
Frontend:
```
cd meli-frontend
npm install
npm start
```

### Aspectos generales
* Se realizaron con Google Lighthouse Audit para verificar Performance, Best practices, Accessibility, SEO. Adentro de la carpeta "auditorias" se encuentran archivos resultados en PDF.
* Se consideraron aspectos de Clean code.

### Frontend
* Uso de Sass para definir estilos.
* Uso de URLs amigables.
* Uso de etiquetas "meta" para mejorar SEO.
* Uso de etiquetas "meta" de OpenGraph.
* Uso de breadcrumbs.
* Componente "Loading" para informar al usuario.
* Componente "Empty state" para informar al usuario.

### Backend
* Se disponibilizan servicios apoyados en REST 
* Se realizaron pruebas de integración con Postman