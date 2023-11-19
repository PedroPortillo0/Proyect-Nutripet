import { useRef } from "react";
import Banner from "../components/molecules/Banner";
import NavLading from "../components/molecules/NavLading";
import Nosotros from "../components/organism/Nosotros";
import useScrollPosition from "../hooks/useScrollPosition";
import FooterLandig from "../components/organism/FooterLandig";



export default function Landing() {

  const scrollY = useScrollPosition();

  return (
    <div className="flex flex-col w-full overflow-y-auto">
       <NavLading/>
       <Banner/>
       <Nosotros medida={scrollY}/>

       {
      <FooterLandig scrollY={scrollY}/>
       }
       
    </div>
  )
}
