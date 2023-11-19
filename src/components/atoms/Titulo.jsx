import styled from "styled-components";

const StyledTitulo = styled.div`
    color: #000;
    font-family: Patua One;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

function Titulo({msn}) {
    return (  
        <StyledTitulo>
         <h1>{msn}</h1>
        </StyledTitulo>
    );
}

export default Titulo;