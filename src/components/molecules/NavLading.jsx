import GroupEnlaces from "./GroupEnlaces";

function NavLading() {
  return (
    <div className="fixed z-30 flex items-center justify-between w-full px-5 py-3 pr-12 bg-transparent">
         <h1 className="text-3xl font-bold text-yellow-200">Nutri<span className="text-black">Pet</span></h1>
        <GroupEnlaces/>
    </div>
  )
}

export default NavLading;