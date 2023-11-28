

function Input({type, placeholder, className,nombre}) {
    return ( 
        <input className={className}type={type} placeholder={placeholder} name={nombre} />
     );
}

export default Input;