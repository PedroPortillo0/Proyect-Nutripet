import Enlaces from "../atoms/Enlaces";


export default function GroupEnlaces() {
  return (
    <div className="flex gap-x-12">
      <Enlaces texto={"Inicio"}/>
      <Enlaces texto={"Acerca de nosotros"}/>
      <Enlaces texto={"Contacto"}/>
    </div>
  )
}
