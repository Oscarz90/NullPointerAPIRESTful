NullPointer App
===

Esta API REST
Está aplicación sirve de apoyo para documentar guías o tutoriales para implementar soluciones de diferentes tecnologías.

Definición de colecciones para la persistencia en MongoDB
---


### usuarios

| campo | tipo | descripcion | 
| :---: | :---: | :---: |
| usuario | String | Nickname o username del usuario |
| nombre | String
| apellidos | String
| password | String |
| email | String |
| informacion   | Object |


##### informacion

######usuario / { ... , informacion } 

| campo | tipo | descripcion | 
| :---: | :---: | :---: |
| telefono | String |
| biografia | String |
| sitioWeb | String |
| repositorioGithub | String |
| repositorioBitbucket | String |
| foto | String |
| facebook | String |
| twitter | String |


### tutoriales

| campo | tipo | descripcion | 
| :---: | :---: | :---: |
| titulo | String | |
| contenido | String | |
| categoriaTutorial | Enum | |
| categoriaTecnologia | String | |
| etiquetas | Array[Object] | |
| visibilidad | Enum |  |
| estatusPublicacion | Enum | |
| comentarios | Array[Object] | |
| estatus | Enum | |

##### etiquetas
######tutoriales / { ... , etiquetas } 

| campo | tipo | descripcion | 
| :---: | :---: | :---: |
| nombre | String |


##### comentarios
######tutoriales / { ... , comentarios } 

| campo | tipo | descripcion | 
| :---: | :---: | :---: |
| usuario | idMongoDB |
| comentario | String |
| respuestas | Array[Object] |
| estatus | Enum |

### series

| campo | tipo  | descripcion |
| :---: | :---: | :---: |
| nombre | String | |
| descripcion | String | |
| referencias | Array[String] | |
| contenido | Array[idTutoriales] |
| comentarios | Array[Object] | |
| estatus | Enum | |

### cursos

| campo | tipo  | descripcion |
| :---: | :---: | :---: |
| nombre | String | |
| descripcion | String | |
| referencias | Array[String] | |
| contenido | Array[idTutoriales] |
| comentarios | Array[Object] | 
| estatus | Enum | |


