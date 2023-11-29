import Enlaces from "../atoms/Enlaces";


function GroupEnlaces() {
  return (
    <div className="flex gap-x-12">
      <Enlaces texto={"Inicio"} lugar={"inicio"}/>
      <Enlaces texto={"Acerca de nosotros"} lugar={"nosotros"}/>
      <Enlaces texto={"Contacto"} callback={()=>{window.scrollTo(0, 1045);}}/>
    </div>
  )
}

export default GroupEnlaces;