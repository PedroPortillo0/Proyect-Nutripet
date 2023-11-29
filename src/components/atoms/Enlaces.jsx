

function Enlaces({texto,lugar,callback}) {
    let hasFuction = callback;
    const handleClik = ()=>{

        if(hasFuction){
            callback();
        }
        
    }
  return (
    <a className="text-black" href={`#${lugar}`} onClick={handleClik}>
      {texto}
    </a>
  )
}

export default Enlaces;