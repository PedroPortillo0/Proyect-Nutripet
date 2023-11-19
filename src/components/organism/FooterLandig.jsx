import GroupIcon from "../molecules/GroupIcon";


export default function FooterLandig({scrollY}) {
  return (
    <footer className={`w-full bg-[#FFD25C] py-3 px-5 ${scrollY >= 910 ? "slide-in-blurred-left visible" : " opacity-0"}`}>
      <h1 className="w-1/2 mb-4 text-3xl font-bold text-yellow-200">Nutri<span className="text-black ">Pet</span></h1>
      <GroupIcon/>
      <p className="w-1/2 mt-4 text-left">"¡En el corazón de nuestra misión está la innovación en la industria avícola! 
        Estamos comprometidos en transformar la crianza de pollos con un enfoque revolucionario: 
        un sistema de alimentación automatizada que garantiza un crecimiento óptimo y una nutrición de primera calidad 
        para nuestras aves. En un mundo que demanda soluciones sostenibles para 
        la producción de alimentos, ¡nuestro proyecto es la respuesta! 🐔✨ #InnovaciónAvícola #Sostenibilidad #AlimentaciónDeCalidad</p>
    </footer>
  )
}
