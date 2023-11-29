import { useEffect, useState } from "react";
import pollito from "../../assets/img/imagenes/polloLanding.svg";

function Nosotros({ medida }) {
  const [shouldShowImage, setShouldShowImage] = useState(false);
  const [showText,setShowText] = useState(false);

  useEffect(() => {
    if (medida >= 400) {
      setShouldShowImage(true);
    } 
    if(medida >= 450){
        setShowText(true)
    }
    if(medida <= 262){
        setShouldShowImage(false);  
        setShowText(false)
    }
  }, [medida]);

  console.log(medida)

  return (
    <div className="flex items-center justify-center w-full h-screen gap-x-24" id="nosotros">
      {shouldShowImage && <img src={pollito} alt="" className="w-64 slide-in-left" />}
      {showText && (<div className="flex flex-col items-start fade-in"> 
      <h1 className="w-full mb-4 text-3xl font-bold text-center text-yellow-200">Nutri<span className="text-black ">Pet</span></h1>
      <p className=" w-96">es un proyecto comprometido con la innovación en la industria avícola. nuestra misión es revolucionar la
         forma en que se crían los pollos, garantizando un sistema de alimentación automatizada que no solo promueva un 
         crecimiento óptimo, sino que también asegure una nutrición de alta calidad para estas aves. En un mundo en constante evolución, 
         es esencial encontrar soluciones sostenibles y 
        eficientes para la producción de alimentos, y es precisamente en esta premisa que se fundamenta nuestro proyecto.</p>
      </div>)}
    </div>
  );
}

export default Nosotros;