# Tarea Desarrollar Monkey Web
Este repositorio contiene el código para un probador aleatorio desarrollado usando [Cypress](https://www.cypress.io/). Se incluye un archivo monkey_testing.cy.js que ejecuta el metodo randomEvent() para los siguientes eventos:
- Hacer click en un link al azar
- Llenar un campo de texto al azar
- Seleccionar un combo al azar
- Hacer click en un botón al azar

### Como ejecutar
Para utilizar la aplicacion, tendrá que seguir estos pasos:
- Descargar el archivo Zip y descomprimir la carpeta en su máquina 
- Asegurese de tener instalado cyprees correctameneyte y sus dependencias, sino es asi, seguir el tutorail contenido en la siguiente pagina https://thesoftwaredesignlab.github.io/AutTestingCodelabs/cypress-tutorial/index.html#0
- Asegurese que el archivo monkey_testing.cy.js es el unico en la carpeta desarrollo_monkey-master.zip\desarrollo_monkey-master\cypress\e2e
-  Ejecutar la aplicacion: El comando para ejecutar las pruebas deben ejecutarse desde la carpeta raíz desarrollo_monkey , así que no olvide cambiarse a este directorio . Ejecute el comando cypress run --headed si desea ver la prueba ejecutandose en el navegados o cypress run --headless si no lo desea. 

## The testers
Cypress es una aplicacion de pruebas E2E construido sobre JavaScript. Utiliza esta tecnología debido a la facilidad para la gestión de páginas web en una variedad de navegadores, incluyendo Chrome, Canarias, Edge, electrón, etc. y la funcionalidad de registro y reproducción. 

## Eventos
- Hacer click en un link al azar
- Llenar un campo de texto al azar
- Seleccionar un combo al azar
- Hacer click en un botón al azar

## Results
Cuando la prueba termine de ejecutarse, se generará un informe HTML y un video de la ejecución en un navegador en la carpeta de resultados.