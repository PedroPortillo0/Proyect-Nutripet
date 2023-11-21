import {CartesianGrid} from "recharts";
import {LineChart,XAxis,YAxis,Tooltip,Legend,Line} from "recharts";

import DropdownMenu from "../components/organism/MenuDropdown";

function VistaGraficas() {
    const DataTemperatiraHumedad=[
        {temperatura:25, humedad:45},
        {temperatura:31, humedad:28},
        {temperatura:28, humedad:36},
        {temperatura:38, humedad:48},
        {temperatura:22, humedad:31},
        {temperatura:36, humedad:55},
        {temperatura:23, humedad:52},
        {temperatura:30, humedad:48},
        {temperatura:39, humedad:58},
        {temperatura:27, humedad:39},
    ]

    return ( 
        <div className="flex w-full h-screen pt-4">
            {/*es este contendor div ira el aside*/}
      
          <div className="flex flex-col items-center w-1/4 bg-white rounded-sm shadow-sm shadow-black">
          <h1 className="w-1/2 mb-4 text-3xl font-bold text-yellow-200">Nutri<span className="text-black ">Pet</span></h1>
          <DropdownMenu/>
          </div>
          
           {/*en este contenedor iran las graficas*/}
           <div className="w-full">
           <div className="linechart">
                    <h1 >grafica de lienas</h1>
                    <LineChart 
                    data={DataTemperatiraHumedad}
                    width={500}
                    height={300}
                    margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="temperatura" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="temperatura" stroke="#8884d8" />
                    <Line type="monotone" dataKey="humedad" stroke="#82ca9d" />
                    </LineChart>
            </div>

            <div className="barchart">

            </div>

            <div className="piechart">

            </div>
           </div>

        </div>
        
        
     );
}

export default VistaGraficas;