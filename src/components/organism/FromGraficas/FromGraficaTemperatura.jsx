import {CartesianGrid} from "recharts";
import {LineChart,XAxis,YAxis,Tooltip,Legend,Line} from "recharts";
import React, { useState, useEffect } from "react";

import DropdownMenu from "../../organism/MenuDropdown";
import FromGraficaHumedad from "./FromGraficaHumedad";


function FromGraficaTemperatura() {

    const [chartData, setChartData] = useState([]);  //!Estado que es un arreglo donde se guarda lo que viene de la API
    const [MediaValue, setMediaValue] = useState(0);
    const [MediaValue2, setMediaValue2] = useState(0);


    useEffect(() => {
        fetch('http://54.147.241.142:9000/api/GetAllDatos')
          .then(response => response.json())
          .then(data => {
            const temperatures = data.data.map(item => ({
              name: new Date(item.fecha).toLocaleTimeString(),
              Temperatura: item.temperatura
            }));
      
            temperatures.sort((a, b) => {
              return new Date(`2000-01-01T${a.name}`) - new Date(`2000-01-01T${b.name}`);
            });
      
            const media = data.mediaTemperatura; // Obtener la media de los datos
            const media2 = data.mediaHumedad; // Obtener la media de los datos
      
            // Actualizar el estado con las nuevas temperaturas ordenadas y la media
            setChartData(temperatures);
            setMediaValue(media); // Asegúrate de que setMediaValue esté definido correctamente
            setMediaValue2(media2); // Asegúrate de que setMediaValue esté definido correctamente

          })
          .catch(error => console.error('Error al obtener datos:', error));
      }, []);

    return ( 
        <div className="flex w-full h-screen pt-4">
            {/*es este contendor div ira el aside*/}
      
          <div className="flex flex-col items-center w-1/4 bg-white rounded-sm shadow-sm shadow-black">
          <h1 className="w-1/2 mb-4 text-3xl font-bold text-yellow-200">Nutri<span className="text-black ">Pet</span></h1>
          
          <DropdownMenu/>
          <div className="mb-4 w-55 h-40 flex flex-col items-center justify-center border border-solid border-gray-300 bg-yellow-200">
              <h1 className="text-4xl">{MediaValue}</h1>
            <h1 className="text-2xl">Media de temperatura</h1>
          </div>
          <div className="w-55 h-40 flex flex-col items-center justify-center border border-solid border-gray-300 bg-yellow-200">
            <h1 className="text-4xl">{MediaValue2}</h1>
            <h1 className="text-3xl">Media de Humedad</h1>
          </div>
          
          </div>
          
           {/* en este contenedor iran las graficas */}
           <div className="w-full">
            <div className="linechart  border border-solid border-gray-300">
                        <LineChart 
                        data={chartData}
                        width={900}
                        height={300}
                        margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[16, 36]} ticks={[16, 20, 24, 28, 32, 36]} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Temperatura" stroke="#8884d8" />
                        {/* <Line type="monotone" dataKey="humedad" stroke="#82ca9d" /> */}
                        </LineChart>
                </div>


                <div>
                    <FromGraficaHumedad/>
                </div>
           </div>

        </div>
     );
}

export default FromGraficaTemperatura;