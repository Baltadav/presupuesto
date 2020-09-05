import React, {useState,useEffect} from 'react';
import Pregunta from './componets/Pregunta';
import Formulario from './componets/Formulario';
import Listado from './componets/Listado';
import ControlPresupuesto from './componets/ControlPresupuesto';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [mostrarpregunta, setMostrarPregunta] = useState(true);
  const [gasto, setGasto] = useState({});
  const [creargasto, setCrearGasto] = useState(false)

  //UseEffect actualiza el restante

  useEffect(() => {

    //Agrega nuevo presupuesto
    if(creargasto){
      setGastos([...gastos, gasto]);
    }

    //Resta del presupuesto actual
    const presupuestoRestante = restante - gasto.cantidad;
    setRestante(presupuestoRestante);

    //resetear a false
    setCrearGasto(false);
    
  }, [gasto]);


  return (
   <div className="container">
     <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {mostrarpregunta ?
          (
            <Pregunta
            setPresupuesto = {setPresupuesto}
            setRestante = {setRestante}
            setMostrarPregunta ={setMostrarPregunta}
            />
          )
          :
          (
            <div className="row">
              <div className="one-half column">
                <Formulario
                setGasto={setGasto}
                setCrearGasto={setCrearGasto}
                />
              </div>

              <div className="one-half column">
                <Listado
                gastos = {gastos}
                />

                <ControlPresupuesto
                  presupuesto = {presupuesto}
                  restante = {restante}      
                />
              </div>
            </div>
            )
          }
        </div>
     </header>
     
   </div>
  );
}

export default App;
