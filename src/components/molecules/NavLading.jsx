import Titulo from "../atoms/Titulo";


import GroupEnlaces from "./GroupEnlaces";
export default function NavLading() {
  return (
    <div className="bg-[#FFD25C] items-center justify-between w-full px-5 py-3 pr-12 flex">
         <h1 className="text-3xl font-bold text-yellow-200">Nutri<span className="text-black">Pet</span></h1>
        <GroupEnlaces/>
    </div>
  )
}
