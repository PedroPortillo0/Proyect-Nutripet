import React, { useState } from 'react';
import logo from "../../assets/img/imagenes/Dashboard-Layout.png"
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium bg-[#FFB900] flex items-center w-[12rem]  text-center rounded-xl"
          onClick={toggleDropdown}
        >
            <img src={logo} alt="" />
            <p className='w-full text-center text-[1.1rem]'>Panel</p>
        </button>
      </div>
    
        <div className={`flex flex-col items-center justify-end w-full h-64 ${(isOpen) ? "dropdown-abrir" : "dropdown-cerrar absolute"} `}>
            {/*pedro si vez el comentario en esta parte del codigo dentro del contenedor puedes poner que quieres que se despliegue*/}
           <Link to = {"/"} className='px-4 py-2 text-sm font-medium bg-[#FFB900]  w-[12rem]  rounded-xl text-center z-20'>Salir</Link>
        </div>
  
    </div>
  );
};

export default DropdownMenu;
