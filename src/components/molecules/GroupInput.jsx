import styled from 'styled-components';


const StyledContainerInputs = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: 7%;
    font-family: Raleway;
    font-style: normal;
    font-weight: 400;
    line-height: 2%;
    text-align: justify;

    @media (min-width: 1024px){
    width:68%;
    }


`;
const StyledInput= styled.input`
    background: #EEF1F0;
    width:75%;
    height: 50px;
    padding: 0 11%;
    border-radius: 8px;
    border: none;
    outline: none;

    @media (min-width: 1024px){
        width:${props => props.tamanio ?  '72%' : '80%'};
        width:65%;

    }


`;
const StyledImg = styled.img`
    position: absolute;
    top: 11%;
    left: 13%;
    width: 6%;
    height: 70%;
    @media (min-width: 1024px){
        left: ${props => props.tamanioI ?  '9%' : '14%'};
    }

`;
// const StyledPass = styled.button`
//     position: absolute;
//     top: 11%;
//     left: 13%;
//     width: 6%;
//     height: 70%;
//     @media (min-width: 1024px){
//         left: ${props => props.tamanioII ?  '0%' : '85%'};
//     }
// `;
function GroupInput({src, tamanioI ,tamanio, type, placeholder, nombre,  }) {
    return ( 
        <StyledContainerInputs>
        <StyledImg tamanioI={tamanioI} src={src} />
    
        <StyledInput tamanio={tamanio} type={type} placeholder={placeholder} name={nombre}/>

        </StyledContainerInputs>
     );
}

export default GroupInput;