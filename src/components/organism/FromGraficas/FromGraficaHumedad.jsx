import {CartesianGrid} from "recharts";
import {LineChart,XAxis,YAxis,Tooltip,Legend,Line} from "recharts";
import React, { useState, useEffect } from "react";


function FromGraficaHumedad() {
    const [chartData, setChartData] = useState([]);  //!Estado que es un arreglo donde se guarda lo que viene de la API
    const [MediaValue, setMediaValue] = useState(0);

    //?Aca es el effect que hace la peticion a la API

    useEffect(() => {
        fetch('http://54.147.241.142:9000/api/GetAllDatos')
          .then(response => response.json())
          .then(data => {
            const temperatures = data.data.map(item => ({
              name: new Date(item.fecha).toLocaleTimeString(),
              Humedad: item.humedad
            }));
      
            temperatures.sort((a, b) => {
              return new Date(`2000-01-01T${a.name}`) - new Date(`2000-01-01T${b.name}`);
            });

            const media = data.mediaHumedad; // Obtener la media de los datos

          
            // Actualizar el estado con las nuevas temperaturas ordenadas y la media
            setChartData(temperatures);
            setMediaValue(media); // Asegúrate de que setMediaValue esté definido correctamente

          })
          .catch(error => console.error('Error al obtener datos:', error));
      }, []);
      
      
    return (  
        <div className="flex w-full h-screen pt-4">
            {/* en este contenedor iran las graficas */}
            <div className="w-full">
                <div className="linechart">
                    <LineChart 
                    data={chartData}
                    width={900}
                    height={300}
                    margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[16, 36]} ticks={[16, 20, 24, 28, 32, 36,42,54, 64]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Humedad" stroke="#FF0000" />
                    </LineChart>
                </div>
            </div>
        </div>
    );
}

export default FromGraficaHumedad;