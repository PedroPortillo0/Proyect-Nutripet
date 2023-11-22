import styled from "styled-components";
import Button from "../atoms/Button";
import "../../pages/Register";
import Titulo from "../atoms/Titulo";
import SubTitulo from "../atoms/Subtitulo";
import GroupInput from "../molecules/GroupInput";

import pollitoLogin from "../../assets/img/imagenes/pollito-login.svg"
import Email from "../../assets/img/icons/Email.png"
import Contrasenia from"../../assets/img/icons/Password.png"
import { Link } from "react-router-dom";


const StyledContainer = styled.div` 
  display: flex;
  width: 100vw;
  height: 82vh;

  @media (min-width: 1024px) { //para compu
    display: flex;
    width: 100%;
    height: 100vh;
  }

`;
const StyledContainerForm = styled.div` 
  @media (min-width: 1024px) {
   /* border: 1px solid;  */
    width: 45%;
    height: 95vh; 
  }
`;
const StyledContainRegit = styled.div` //movil
  padding: 0;
  width:100%;
  height: auto;
  @media (min-width: 1024px) {
      /* border: 1px solid; */
    display: flex;
    align-items: center;
    width: 50%;
    height: auto;
  }
`;
const StyledContaincolor = styled.div`
  /* border: 1px solid; */
  padding: 0;
  width: 100%;
  height: 95vh;
  border-radius: 4%;
  background-color: #FCF332;
`;
const StyledContainBotonRegist = styled.div`
/* border: 1px solid red; */
  display: flex;
  flex-direction: column ;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 30%;
`;
const StyledContainImagen = styled.div`
  /* border: 1px solid; */
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 0;
  width: 97%;
  height: 70%;
`;
const StyledContainImagenVirculo = styled.div`
  padding: 0;
  width: 75%;
  height: 90%;
  border-radius: 500px;
  background: radial-gradient(89.08% 105.5% at 50% 20.25%, #FFD25C 0%, rgba(255, 210, 92, 0.01) 100%);  
  border-radius: 50%;
`;
const StyledContainImagenpollito = styled.div`
/* border: 1px solid; */
  width: 50%;
  height: auto; 
  position: absolute;
  left: 48%;

`;
const StyledContainButton = styled.div`
/* border: 1px solid; */
  display: flex;
  align-items: center;
  padding: 0;
  width: 45%;
  height: 30%;
`;
const StyledContainTexto = styled.div`
  display: flex;
  align-items: end;
  width: 60%;
  height: 50%;
  color: #FFF;
  text-align: center;
  font-family: Patua One;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const StyledContainLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
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
const StyledContainTitulo = styled.div`
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: end;
  width: 40%;
  height: 18%;
`;
const StyledContainSubTitulo = styled.div`
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  /* align-items: end; */
  width: 80%;
  height: 15%;
`;
const StyledContainInput = styled.div`
  /* border: 1px solid red; */
  padding: 0;
  width:100%;
  height: auto;
  @media (min-width: 1024px) {
    width: 91%;
    height: 17%;
  }
`;
const StyledContainInContra = styled.div`
  /* border: 1px solid red; */
  padding: 0;
  width:100%;
  height: auto;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 58%;
    height: 8%;
    .recuperar{
      color: #FFB900;
      text-align: right;
      font-family: Raleway;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration: none;

    }
  }
`;
const StyledContainButtonLogin = styled.div`
  padding: 0;
  width:100%;
  height: auto;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 10%;
    .button{
      width: 60%;
      height: 50%;
    }
  }
`;

function FormLogin() {
    return ( 
        <StyledContainer>
          <StyledContainerForm>
            <StyledContainLogo>
              <h1 className="Nutri">Nutri</h1>
              <h1 className="Pet" >Pet</h1>
            </StyledContainLogo>
            <StyledContainTitulo>
              <Titulo msn={"Iniciar sesion"}/>
            </StyledContainTitulo>
            <StyledContainSubTitulo>
              <SubTitulo msn={"Ingresar para descubrir más."}/>
            </StyledContainSubTitulo>
            <StyledContainInput>
              <GroupInput
                src={Email}
                tamanioI={true}
                type={"text"}
                placeholder={"Correo"}
                nombre={"name_users"}
              />
              <GroupInput
                src={Contrasenia}
                tamanioI={true}
                type={"password"}
                placeholder={"Contraseña"}
                nombre={"contrasenia"}
              />
            </StyledContainInput>
            <StyledContainInContra>
            <Link className="recuperar" to={"/recuperar"}>¿Olvidaste tu contraseña?</Link>
            </StyledContainInContra>
            <StyledContainButtonLogin>
              <div className="button">
                <Button
                name={"Iniciar sesion"}
                link={"/graficas"}
                />
              </div>

            </StyledContainButtonLogin>
          </StyledContainerForm>
{/* ----------------------------------- */}
          <StyledContainRegit> 
            <StyledContaincolor>
              <StyledContainBotonRegist>
              <StyledContainTexto>
                <h1>Si aun no formas parte de nuestra famila que esperas</h1>
              </StyledContainTexto>
              <StyledContainButton>
                <Button
                  name={"Registrate"}
                  estilo={true}
                  link={"/Register"}
                />
                
              </StyledContainButton>
              </StyledContainBotonRegist>
{/* -----------------  parte de la foto del pollito   --------------------- */}
              <StyledContainImagen>
                <StyledContainImagenVirculo/>
                <StyledContainImagenpollito>
                  <img src={pollitoLogin} alt="imagen aqui " />
                </StyledContainImagenpollito>
              </StyledContainImagen>
            </StyledContaincolor>
          </StyledContainRegit>
        </StyledContainer>
    );
}

export default FormLogin;