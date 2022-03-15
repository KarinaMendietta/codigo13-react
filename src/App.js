// como crear un componente desde 0
//* desde la version 17 esta linea no hace falta
// import React from "react";
//El nombre de un componente siempre debe iniciar en mayuscula 
// el componente es una funcion, por ende podemos crearlo
// usando function o arrow function
const PrimerComponente = () => {
  // esta funcion lo que hara sera retornar una vista
//en react usamos return () para indicar que lo que este dentro de
//los parentesis sera el objeto visual que vamos a retornar
//importante react solo puede retornar un componente a la vez
// retorna solo un div a la vez

return (
  <div>
   <h1>Hola mundo</h1>
     <div>
       <h4>Hola</h4>
     </div>   
  </div>
);
};

//Luego de crear el componente debemos exportarlo
//Esto es como decir que este archvio unicamente esta exportando este componente
export default PrimerComponente;

