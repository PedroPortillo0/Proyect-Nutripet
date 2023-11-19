import styled from "styled-components";

const StyledContainer = styled.div` 
    /* border: 1px solid red; */
    display: flex;
    width: 100%;
    height: 95vh;
  @media (min-width: 1024px) { //para compu
    /* border: 1px solid; */
    /* display: flex; */
    width: 99%;
    height: 98vh;
  }
`;

function NoutFound() {
    return (
        <StyledContainer>
            
        </StyledContainer>

      );
}

export default NoutFound;