# RickAndMortyApi
Repositorio Equipo 4

Backend Fundamentals
Marzo, 2021
Equipo 4

Proyecto API-Rick and Morty

Después de conversar como equipo, llegamos a la decisión de enfocar el proyecto hacia algo que nos gusta a los tres y es la serie Rick and Morty. El proyecto contará con dos tipos de usuarios: El administrador y el usuario general, cada uno con permisos y características diferentes.

El administrador tendrá las opciones de agregar, modificar, consultar y eliminar a los personajes de la serie. Por su parte, el usuario general, sólo podrá consultar a los personajes mediante diferentes tipos de campos, los cuales se especificarán a detalle en las siguientes historias de usuarios.

User Stories

User Story ID: 1
As a <type of user>: Administrador
I want to <perform some task>: Quiero poder agregar más personajes de la serie.
So that I can <achieve some goal>: Para tener actualizada la lista de los personajes de la serie.
User Story ID: 2
As a <type of user>: Administrador
I want to <perform some task>: Quiero poder actualizar el status de los personajes.
So that I can <achieve some goal>: Para tener actualizado el status de los personajes, por si alguno de ellos muere o ya no está activo en la serie.
User Story ID: 3
As a <type of user>: Administrador
I want to <perform some task>: Quiero poder eliminar algún personaje.
So that I can <achieve some goal>: Para eliminar un personaje que haya sido eliminado de la historia, ya sea por problemas legales o alguna pelea con los animadores o actores que prestan su voz.
User Story ID: 4
As a <type of user>: Usuario
I want to <perform some task>: Quiero consultar a los personajes por orden alfabético.
So that I can <achieve some goal>: Para poder buscar de manera más rápida a los personajes que empiecen con las mismas iniciales.
User Story ID: 5
As a <type of user>: Usuario
I want to <perform some task>: Quiero poder consultar a los personajes por sexo.
So that I can <achieve some goal>: Para saber cuántos hombres y mujeres existen en la serie.
User Story ID: 6
As a <type of user>: Usuario
I want to <perform some task>: Quiero poder consultar a los personajes por especie.
So that I can <achieve some goal>: Para poder saber cuántas especies diferentes existen en la serie (sean animales, extraterrestres, etc.)
User Story ID: 7
As a <type of user>: Usuario
I want to <perform some task>: Quiero poder consultar a los personajes por edad.
So that I can <achieve some goal>: Para poder saber si en la serie hay personajes jóvenes o longevos.
User Story ID: 8
As a <type of user>: Usuario
I want to <perform some task>: Quiero poder consultar a los personajes principales y secundarios.
So that I can <achieve some goal>: Para poder saber cuales son los personajes de mayor y menor importancia.


Cada personaje tendrá las siguientes características:

No. ID (int)
Name (varchar)
Status(vivo, muerto, desconocido) (varchar)
Species (varchar)
Gender (M/F) (varchar)
Origin name (varchar)
Location Name (varchar)

Funciones y Clases básicas definidas

De momento, tenemos establecidas las 4 funciones básicas con las que iniciaremos el proyecto, las cuales son:

function createCharacter{
	//esta función nos permitirá crear nuevos personajes (admin)
}

function getCharacter{
	//permite la consulta de los personajes previamente creados (admin & user)
}
function updateCharacter{
	//permitirá el modificar los datos de los personajes previamente creados (admin)
}
function deleteCharacter{
	//tiene como objetivo eliminar a un personaje en específico (admin)
}



Así como dos clases que por el momento tenemos definidas: 

Class UserController {
foo();
foo();
foo();
}

Class CharacterController{
foo();
foo();
foo();
}


1. ¿Cuáles son las ventajas de usar el modelo relacional en nuestro proyecto?
A comparación del modelo no relacional, el modelo relacional cuenta con estándares bien definidos, es decir que si queremos realizar una acción como por ejemplo crear tablas, insertar, eliminar o actualizar información, todo esto está regido por la misma sintaxis, ya que están basados en estándares SQL.

2. ¿Cuáles son las limitantes de usar el modelo relacional en nuestro proyecto?
En nuestro caso podría ocurrir que la serie dure muchos años como algunas otras series que duran entre 10 y 15 años, esto puede traer consigo un aumento en el número de personajes, que probablemente no sea un cifra exorbitante pero sí habría un problema en el almacenamiento de nuestra Base de Datos, y como consecuencia el costo mantenimiento de la misma sería muy elevado.

3. ¿Qué ventajas ofrece el modelo no relacional a nuestro proyecto?
Como mencionamos anteriormente si la Base de Datos llega a crecer el modelo NoSQL nos permitiría tener un mayor volumen de datos o nos daría la posibilidad de incluir cambios sobre la forma en la que ingresemos los datos sin necesidad de alterar la estructura de la misma, también nos permitiría adaptarla de forma rápida a un entorno de alto dinamismo. Y si hablamos del apartado económico, no se necesitan servidores con gran cantidad de recursos para operar. Esto nos permitiría empezar con bajos niveles de inversión en equipos e ir ampliando la capacidad a medida de que el proyecto vaya creciendo.

4. ¿Qué desventajas tiene el uso del modelo no relacional en nuestro proyecto?
La mayor desventaja que encontramos al querer implementar el modelo no relacional es que al ser una tecnología nueva por así decirlo, nos tomará más tiempo de lo debido en el desarrollo de la misma si esta llega a crecer. Por otro lado, por lo mismo que es una tecnología nueva, no existe todavía un estándar definido entre las diversas herramientas que actualmente existen, en el peor de los casos traería consigo un estancamiento al querer usar una herramienta diferente a la que se haya definido desde el principio.

5. ¿Qué implementación de base de datos de las que hicimos representa mejor las especificaciones de las entidades del proyecto y por qué?
Al final hemos decidido implementar el modelo no relacional, ya que estamos pensando a futuro, ya que si llega a aumentar el número de personajes en la serie sería mucho más fácil manipular los datos, ya que las bases de datos NoSQL, en comparación con las relacionales, son capaces de realizar más operaciones por segundo. Si al momento de implementar un proyecto como este, no contamos con los recursos necesarios ya sea hardware, procesamiento, etc. NoSQl es la mejor opción para un proyecto como el nuestro. 
Por último si llegaramos a requerir de una escalabilidad importante, NoSQL nos permitirá  realizar un escalado horizontal con el cual podremos distribuir la carga en todos los nodos, y así aumentar el rendimiento de nuestro sistema.
