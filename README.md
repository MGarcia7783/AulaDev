# AulaDev

### Aprende. Practica. Desarrolla.

**AulaDev** es un portal académico orientado al aprendizaje de programación y desarrollo de software. Su propósito es proporcionar a los estudiantes un espacio centralizado donde puedan consultar documentación, contenidos teóricos, ejemplos de código, ejercicios prácticos y proyectos relacionados con las diferentes asignaturas de programación.

El proyecto busca facilitar el acceso al material educativo mediante una plataforma moderna, organizada, intuitiva y accesible desde diferentes dispositivos.

---

## 🎯 Objetivo

Construir un espacio de aprendizaje digital que permita organizar y compartir recursos académicos, facilitando el estudio autónomo y el fortalecimiento de las habilidades de programación de los estudiantes.

## 📚 Asignaturas

AulaDev contempla inicialmente las siguientes asignaturas:

| N.º | Asignatura |
|---|---|
| 1 | Introducción a la Programación |
| 2 | Programación Estructurada |
| 3 | Estructura de Datos |
| 4 | Base de Datos |
| 5 | Administración de Bases de Datos |
| 6 | Programación Orientada a Objetos |
| 7 | Backend - API RESTful |
| 8 | Desarrollo de Aplicaciones Móviles |
| 9 | Full Stack |

## 📖 Contenido académico

Cada asignatura contará con un espacio independiente para organizar sus materiales:

- **Contenido teórico:** conceptos y explicaciones de los temas.
- **Ejemplos de código:** demostraciones prácticas y explicadas.
- **Ejercicios:** actividades para reforzar el aprendizaje.
- **Proyectos:** propuestas de desarrollo para aplicar los conocimientos.
- **Material complementario:** recursos adicionales relacionados con la asignatura.

## 🛠️ Tecnologías

El proyecto utilizará las siguientes tecnologías:

- **Angular:** framework para el desarrollo de la interfaz web.
- **TypeScript:** lenguaje principal de desarrollo.
- **HTML5:** estructura de las páginas.
- **CSS:** diseño y presentación visual.
- **Angular Router:** navegación entre las diferentes secciones.
- **Tailwind CSS:** estilos y diseño adaptable.
- **Markdown:** organización futura del contenido académico.
- **Git y GitHub:** control de versiones y alojamiento del repositorio.

Las tecnologías de programación utilizadas en las asignaturas podrán incluir SQL Server, PostgreSQL, .NET/C#, NestJS, Angular, Java, PSeInt, Firebase y Flutter.

## 🏗️ Arquitectura inicial

AulaDev comenzará como una aplicación frontend estática desarrollada con Angular.

En esta primera etapa:

- No requiere backend.
- No requiere base de datos.
- No requiere autenticación.
- No requiere registro de usuarios.
- No requiere panel administrativo.

La estructura estará preparada para incorporar progresivamente contenido académico y nuevas funcionalidades sin tener que reconstruir el proyecto desde cero.

### Organización del código y contenido

- `src/app/core`: estructura común y configuración global de la interfaz.
- `src/app/shared`: componentes visuales de uso general.
- `src/app/features`: páginas y componentes agrupados por funcionalidad.
- `src/app/features/subjects/data/subjects.data.ts`: catálogo ordenado e índice de las materias.
- `public/content/subjects`: futuros materiales por materia, unidad y tema.
- `public/content/resources`: futuros materiales comunes a varias materias.

El catálogo permite registrar unidades y temas con título, identificador y ruta del Markdown.
Por ejemplo, un tema de la primera unidad de Introducción a la Programación podría guardarse en
`public/content/subjects/introduction-to-programming/unit-01/introduction.md`, con la ruta
`content/subjects/introduction-to-programming/unit-01/introduction.md` en el índice.
Los archivos de recursos generales se mantienen separados de los específicos de cada materia.
Actualmente las unidades están vacías y **todavía no se ha implementado el cargador ni el visor
Markdown**; esas funciones y su dependencia se evaluarán en una etapa posterior.

## 🚀 Características previstas

- Página principal con presentación de AulaDev.
- Catálogo de asignaturas.
- Página independiente para cada asignatura.
- Sección de recursos generales.
- Navegación intuitiva.
- Diseño adaptable a computadoras, tabletas y dispositivos móviles.
- Organización del contenido mediante Markdown.
- Buscador de contenidos.

## 🌐 Despliegue

Se contempla utilizar un servicio de alojamiento gratuito para sitios estáticos, como GitHub Pages o Cloudflare Pages.

El objetivo es mantener AulaDev disponible públicamente, procurando minimizar los costos de alojamiento y facilitar su mantenimiento a largo plazo.

Las rutas actuales usan `/subjects`, `/resources` y `/about`; las direcciones anteriores en
español redirigen desde la aplicación. Para abrirlas directamente o recargarlas, el alojamiento
debe servir la aplicación en las rutas de Angular. Esta configuración depende del proveedor:
GitHub Pages no ofrece una regla de fallback general como otros servicios. Además, si se publica
en un subdirectorio hay que ajustar la base de compilación y verificar las rutas de los recursos.
El despliegue y su fallback deben comprobarse en el proveedor elegido.

## 📌 Estado del proyecto

**En desarrollo - Primera etapa.**

Actualmente, el objetivo es construir la estructura visual, navegación y páginas principales del portal, sin incorporar todavía el contenido académico.

## 👨‍💻 Autor

Proyecto académico desarrollado para apoyar los procesos de enseñanza y aprendizaje en el área de programación y desarrollo de software.

---

**AulaDev — Aprende. Practica. Desarrolla.**
