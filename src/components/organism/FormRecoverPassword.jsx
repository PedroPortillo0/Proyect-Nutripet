import styled from "styled-components";
import Titulo from "../atoms/Titulo";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

import ImagenPollito from "../../assets/img/imagenes/pollito-recuperar.svg"


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
const StyledContaincolorIzquierdo = styled.div`
    /* border: 1px solid; */
    width: 90%;
    height: 95vh;

  @media (min-width: 1024px) {
    /* border: 1px solid; */
    padding: 0;
    width: 30%;
    height: 95vh;
    height: 99%;
    flex-shrink: 0;
    border-radius: 30px;
  } 
`;
const StyledContainLogo = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  width: 50%;
  height: 10%;
  .Nutri{
    color: #FCF332;
    font-family: Patua One;
    font-size: 40px;
    font-style: normal;
    line-height: normal;
  }
  .Pet{
    color: #000;
    font-family: Patua One;
    font-size: 40px;
    font-style: normal;
    line-height: normal;
  }

`;
const StyledContainFiguras = styled.div` 
    width: 100%;
    height: 95vh;
  @media (min-width: 1024px) { //para compu
    /* border: 1px solid; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    width: 66%;
    height: 30%;
    .div1{
      width: 150.39px;
      height: 50px;
      flex-shrink: 0;
      background: #FFB900;
    }
    .divpadre{
      display: flex;
      justify-content: flex-start;
      /* border:none; */
      width: 60%;
    }
    .div2{
      width: 100px;
      height: 50px;
      transform: rotate(-90deg);
      flex-shrink: 0;
      background: #FFB900;
    }
  }
`;
const StyledContainInput = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center ;
  position: absolute;
  top: 30%;
  left: 0%;
  width: 90%;
  height: 50%;
  flex-shrink: 0;
  background: #FFF;
  @media (min-width: 1024px) { //para compu
    /* border: 1px solid red; */
    display: flex;
    justify-content: center ;
    flex-direction: column;
    align-content: space-between;
    position: absolute;
    top: 25.5%;
    left: 11%;
    width: 1000px;
    height: 455px;
    flex-shrink: 0;
    background: #FFF;
    .Titulo{
      display: flex;
      justify-content: center;
      width: 90%;
      height: 40%;
    }
    .Inputs{
      display: flex;
      justify-content: center;
      flex-direction: column;
      justify-content: space-evenly;
      /* border: 1px solid green; */
      width: 90%;
      height: 70%;
      .pp{
        width: 86%;
        height: 50px;
        flex-shrink: 0;
        text-align: center;
        font-family: Raleway;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-radius: 10px;
        border: 3px solid #D9D9D9;
      }
    }
    .Buton{
      /* border: 1px solid blue; */
      display: flex;
      justify-content: center ;
      width: 80%;
      height: 40%;
      .Butonhijo{
        width: 445px;
        height: 60px;
        flex-shrink: 0;
      }
    }


  }

`;
const StyledContaincolor = styled.div`

  @media (min-width: 1024px) {
  padding: 0;
  width: 70%;
  height: 95vh;
  height: 99%;
  flex-shrink: 0;
  border-radius: 30px;
  background: #FCF332; 
  .Imagen{
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    position: absolute;
    top: 45%;
    left: 68%;
    width: 500px;
    height: 500px;
    flex-shrink: 0;
    .imagen{}
    .cuadrito3{
      position: absolute;
      top: 20%;
      left: 50%;
      background: #FFB900;
      width: 100px;
      height: 100px;
      flex-shrink: 0;
    }
    .cuadrito2{
      position: absolute;
      top: -10%;
      left: 70%;
      width: 50px;
      height: 50px;
      flex-shrink: 0;
      border: 3px solid #FFF;
    }
    .cuadrito1{
      position: absolute;
      top: -65%;
      left: 0%;
      width: 100px;
      height: 100px;
      flex-shrink: 0;
      background: #FFB900;
      filter: blur(10px);
    }
  }

  } 

`;



function FromRecoverPassword() {
    return (  
      <StyledContainer>
        <StyledContaincolorIzquierdo>
          <StyledContainLogo>
                <h1 className="Nutri">Nutri</h1>
                <h1 className="Pet" >Pet</h1>
          </StyledContainLogo>
          <StyledContainFiguras>
              <div className="div1"></div>
              <div className="divpadre"> 
                <div className="div2"></div>
              </div>
          </StyledContainFiguras>
          <StyledContainInput>
            <div className="Titulo">
              <Titulo msn={"Ingresa tu correo para recuperar tu contraseña"}/>
            </div>
            <div className="Inputs">
              <Input
                type={"text"}
                placeholder={"Ingresa tu correo aqui"}
                className={"pp"}
              />
              <Input
                type={"password"}
                placeholder={"ingresa la nueva contraseña"}
                className={"pp"}
              />
            </div>
            <div className="Buton">
              <div className="Butonhijo">
                  <Button
                  name={"Recuperar contraseña"}
                  estilo={true}
                  link={"/Register"}
                  />
              </div>
            </div>
          </StyledContainInput>
        </StyledContaincolorIzquierdo>
{/* ---------------------------------------------- */}
          <StyledContaincolor>
            <div className="Imagen">
            <div className="cuadrito1"/>
            <div className="cuadrito2"/>
            <div className="cuadrito3"/>
            <img className="imagen" src={ImagenPollito} alt="imagen de referencia" />
            </div>

          </StyledContaincolor>
      </StyledContainer>
    );
}

export default FromRecoverPassword;