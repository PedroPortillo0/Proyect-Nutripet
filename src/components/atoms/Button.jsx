import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const StyledButton = styled.button`

background: rgba(255, 185, 0, 1);
border-radius: 12px;
font-size: 20px;
font-family: patua one;
color: #fff;
font-weight: bold;
padding: 5% ;
border-radius: 16px ;
border: none;
width:60%;  //Cambio vigilado -Borrar en caso de ser necesario
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
.link{
    text-decoration: none;
    color: inherit; 
}

`;


function Button({name, estilo, link, funcion }) {
    return ( 
        <StyledContainer>
            <StyledButton type={"button"} estilo={estilo} onClick={funcion} > 
            
                <Link className="link" to={link}>{name}</Link>
                
            </StyledButton>
        </StyledContainer>
     );
}

export default Button;