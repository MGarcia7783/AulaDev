# Instrucciones generales de desarrollo - AulaDev

## 1. Principios generales

El código de AulaDev debe ser sencillo, legible, comprensible y fácil de mantener.

Priorizar siempre soluciones claras y directas antes que implementaciones complejas.

El objetivo es desarrollar una aplicación profesional sin introducir complejidad innecesaria.

## 2. Legibilidad del código

- Utilizar nombres descriptivos para variables, métodos, clases y componentes.
- Mantener métodos pequeños y con responsabilidades bien definidas.
- Evitar anidamientos y condiciones innecesariamente complejas.
- Evitar duplicación de código.
- No utilizar soluciones sofisticadas cuando exista una alternativa más sencilla.
- Mantener una estructura consistente en todo el proyecto.

## 3. Comentarios y documentación

- Escribir comentarios en español.
- Documentar las clases, componentes, servicios y métodos cuando sea necesario.
- Explicar las responsabilidades de cada componente.
- Comentar las partes importantes de la lógica.
- Explicar decisiones técnicas que no sean evidentes.
- Mantener los comentarios actualizados cuando se modifique el código.

Los comentarios deben facilitar la comprensión del código, no repetir literalmente lo que este ya expresa.

## 4. Convenciones de nomenclatura

Utilizar inglés para:

- Carpetas y archivos.
- Componentes y clases.
- Interfaces y tipos.
- Variables y constantes.
- Métodos y funciones.
- Servicios y modelos.
- Rutas internas.

Aplicar las convenciones habituales de Angular y TypeScript:

- PascalCase para clases e interfaces.
- camelCase para variables, propiedades y métodos.
- kebab-case para nombres de archivos y carpetas.

Utilizar español para:

- Comentarios.
- Textos de la interfaz.
- Mensajes al usuario.
- Contenido académico.

## 5. Arquitectura y responsabilidades

- Mantener una separación clara de responsabilidades.
- Organizar el proyecto por funcionalidades.
- Aplicar principios de arquitectura limpia cuando aporten valor.
- Evitar capas, interfaces o abstracciones innecesarias.
- Favorecer la reutilización de componentes cuando esté justificada.
- Evitar componentes excesivamente grandes.
- Mantener una arquitectura proporcional a las necesidades reales del proyecto.

## 6. Uso de Angular y TypeScript

- Utilizar componentes standalone.
- Aplicar Angular Router para la navegación.
- Utilizar TypeScript con tipado adecuado.
- Preferir las funcionalidades modernas y estables de Angular.
- Evitar el uso de `any` cuando sea posible definir un tipo apropiado.
- Mantener separados los datos, la presentación y la lógica.
- Evitar incorporar dependencias externas sin justificación.

## 7. Forma de trabajo

- Analizar el código existente antes de modificarlo.
- No modificar archivos que no sean necesarios para la tarea.
- Explicar brevemente qué se pretende implementar antes de realizar cambios importantes.
- Trabajar progresivamente, por funcionalidades.
- No implementar funcionalidades que no hayan sido solicitadas.
- No introducir cambios arquitectónicos sin justificar su necesidad.
- Verificar que las modificaciones no provoquen errores de compilación.

## 8. Explicaciones durante el desarrollo

Cuando se implemente una funcionalidad:

1. Explicar brevemente qué se va a desarrollar.
2. Indicar qué archivos se crearán o modificarán.
3. Explicar la responsabilidad de cada archivo.
4. Implementar código sencillo y comentado.
5. Explicar las partes importantes de la implementación.
6. Indicar cómo comprobar que funciona correctamente.

## 9. Regla fundamental

Mantener estas instrucciones durante todo el desarrollo de AulaDev.

No sacrificar la legibilidad y facilidad de comprensión del código por reducir líneas, utilizar patrones innecesarios o implementar soluciones excesivamente complejas.

El código debe ser comprensible para otro desarrollador que necesite revisarlo, modificarlo o ampliarlo posteriormente.
