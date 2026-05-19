import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [num, setNum] = useState ( 0 ); 

    // Función para generar un número aleatorio
    const  randomNumberInRange = ( min, max ) => { 
        return  Math . floor ( Math . random () * (max - min + 1 )) + min; 
    }; 
    // Botón para mostrar el siguiente tip
    const  handleClick = ( ) => { 
      let nuevoNum = randomNumberInRange(0, 9); // Calculamos un número inicial
      while (nuevoNum === num) { // Si el número nuevo es igual al actual, seguimos calculando otros
          nuevoNum = randomNumberInRange(0, 9);
      }
      setNum(nuevoNum); // Cuando sale uno distinto, actualizamos el estado
    };
    // Botón para votar el tip actual
    const handleVoto = () => {
      const updatedTips = [...tips]; // Copiamos el array
      // Reemplazamos el objeto en la posición 'num' con una copia nueva que tenga todas las propiedades anteriores, pero con los votos actualizados.
      updatedTips[num] = {
          ...updatedTips[num],
          votos: updatedTips[num].votos + 1
      };
      setTips(updatedTips); // Guardamos en el estado
    };
    const handleReset = () => {
    // Forzamos la propiedad 'votos' a 0 de todos los tips.
    const tipsReiniciados = tips.map(tip => ({
        ...tip,
        votos: 0
    }));
    setTips(tipsReiniciados);
    };

    // Array con los tips de productividad y sus votos
    const [tips, setTips] = useState([
    {id:1, tip:'Si una tarea lleva menos de dos minutos, hacela en el momento sin postergarla.', votos:0 },
    {id:2, tip:'Dividí tu trabajo en bloques de 25 minutos con descansos breves para mantener el enfoque.', votos:0 },
    {id:3, tip:'Realizá la tarea más difícil o importante a primera hora de la mañana para liberar carga mental.', votos:0 },
    {id:4, tip:'Asigná horarios específicos en tu calendario para cada actividad en lugar de usar listas infinitas.', votos:0 },
    {id:5, tip:'Agrupá tareas similares, como responder mensajes o correos, en un solo momento del día.', votos:0 },
    {id:6, tip:'Mantené el celular en silencio y fuera de la vista durante tus periodos de mayor concentración.', votos:0 },
    {id:7, tip:'Dejá anotadas las tres prioridades del día siguiente antes de terminar tu jornada actual.', votos:0 },
    {id:8, tip:'Aprendé a decir que no a compromisos que no se alinean con tus objetivos principales.', votos:0 },
    {id:9, tip:'Tomate cinco minutos para ordenar tu espacio de trabajo antes de empezar una sesión nueva.', votos:0 },
    {id:10, tip:'Salí a caminar o estirate durante los descansos para oxigenar el cerebro y recuperar energía.', votos:0 }
    ])

    // Función para encontrar el tip más votado
    const masVotado = tips.reduce((max, tip) => tip.votos > max.votos ? tip : max, tips[0]);

    return (
      <>
      <h1>Tips de Productividad</h1>
      <p>{tips[num].tip}</p>
      <div className="botones">
      <button onClick={handleVoto}>👍 Votar ({tips[num].votos})</button>
      <button onClick={handleClick}>Siguiente Tip</button>
      </div>
      {masVotado.votos === 0 ? (
          <p>Todavía no hay votos.</p>
      ) : (
        <>
          <h2>Más votado ({masVotado.votos} votos)</h2>
          <p>{masVotado.tip}</p>
        </>
      )}
      <div className="reset-container">
          <button className="btn-reset" onClick={handleReset}>
            🔄 Reiniciar Votos
          </button>
      </div>
      </>
    )
  }

export default App
