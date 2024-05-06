# Urlshortener

Acortador de URL's, simple y rápido.

## Arquitectura del sistema

El sistema consta de un servicio web que provee una API REST encargada de:

- Acortar una URL larga.
- Redirigir a la URL original a partir de un código generado.
- Obtener las estadísticas de una URL acortada.
- Obtener las URL's acortadas.

La API REST está implementada con Kotlin y Spring Boot.
La base de datos utilizada es PostgreSQL.

Por otro lado existe una aplicación web desarrollado en React/Next.js que consume dicha API. La aplicación web permite:

- Acortar una URL larga.
- Redirigir a la URL original a partir de un código generado.

Los componentes del sistema se encuentran en contenedores Docker.

- App Frontend: PENDIENTE DE DOCKERIZAR
- Servicio Backend: DOCKERIZADO
- Base de datos: DOCKERIZADO

Todo el sistema se encuentra en un mono-repositorio, generado por Nx.

## Despliegue

La aplicación web se encuentra desplegada en Vercel, bajo el dominio [https://short.ar](shor.ar).
El backend se encuentra desplegado en Railway, al igual que la base de datos. Ambos componentes se encuentran en repositorios de docker hub, y son desplegados directamente desde allí.

PENDIENTE CI/CD

## Desarrollo

Se recomeinda utilizar el CLI de Nx para una experiencia de desarrollo más eficiente.

Para ejecutar el frontend en modo desarrollo (puerto 3000):

```
    npx nx run frontend:dev
```

Para ejecutar el backend en modo desarrollo (puerto 8080):

```
    npx nx run backend:run
```

Se recomeienda utilizar una base de datos en Docker para desarrollo.
No olvidar configurar el archivo `application.properties` con las credenciales de la base de datos.

Descargar la imagen de PostgreSQL:

```
    docker pull postgres:latest
```

Correr la imagen de PostgreSQL:

```
    docker run --name urlshortener-db -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres
```
