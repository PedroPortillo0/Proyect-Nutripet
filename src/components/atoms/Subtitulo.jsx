import styled from 'styled-components';

const StyledTitulo = styled.h1`
    color: #000;
    font-family: Raleway;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

function SubTitulo({msn}) {
    return ( 
            <StyledTitulo>
                {msn}
            </StyledTitulo>
     );
}

export default SubTitulo;