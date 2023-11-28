import styled from "styled-components";
import Button from "../atoms/Button";
import "../../pages/Register";
import Titulo from "../atoms/Titulo";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import React, { useRef } from 'react';
import Swal from 'sweetalert2';


import pollitoRegister from "../../assets/img/imagenes/pollito-registro.svg"
import Input from "../atoms/Input";


const StyledContainer = styled.div` 
  display: flex;
  width: 100vw;
  height: 82vh;

  @media (min-width: 1024px) { //para compu
    /* border: 1px solid red ; */
    display: flex;
    width: 100%;
    height: 99vh;
  }

`;
const StyledContainerForm = styled.div` 
  @media (min-width: 1024px) {
    width: 45%;
    height: 95vh; 
  }
`;
const StyledContainRegit = styled.div` //movil
  padding: 0;
  width:100%;
  height: auto;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 80px 30px;
    width: 50%;
    height: 100%;

  }
`;
const StyledContaincolor = styled.div`
  padding: 0;
  width: 100%;
  height: 95vh;
  border-radius: 4%;
  background-color: #FCF332;
`;
const StyledContainBotonRegist = styled.div`
    /* border: 1px solid; */
    display: flex;
    align-items: end;
    justify-content: center;
    padding: 0;
    width: 100%;
    height: 40%;
`;
const StyledContainImagen = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 0;
  width: 97%;
  height: 60%;
`;
const StyledContainImagenVirculo = styled.div`
  padding: 0;
  width: 65%;
  height: 90%;
  border-radius: 500px;
background: radial-gradient(89.08% 105.5% at 50% 20.25%, #FFD25C 0%, rgba(255, 210, 92, 0.01) 100%);  border-radius: 50%;
`;
const StyledContainImagenpollito = styled.div`
  /* border: 1px solid; */
  padding: 0;
  width: 38%;
  height: auto;
  position: absolute;
`;
const StyledContainTexto = styled.div`
  width: 60%;
  height: 50%;
  color: #FFF;
  text-align: center;
  font-family: Patua One;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const StyledContainLogo = styled.div`
  /* border: 1px solid; */
  display: flex;
  /* align-items: center; */
  justify-content: flex-end;
  width: 100%;
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
  width: 100%;
  height: 18%;
`;
const StyledContainInContra = styled.div`
  padding: 0;
  width:100%;
  height: auto;
  @media (min-width: 1024px) {
    /* border: 1px solid; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5%;
    .recuperar{
      color: #FFB900;
      text-align: right;
      font-family: Raleway;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration: none;
      padding-left: 1%;
    }
    .cuenta{
        color: #000;
        text-align: center;
        font-family: Raleway;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
  }
`;
const StyledContainButtonLogin = styled.div`
  // border: 1px solid red; 
  padding: 0;
  width:100%;
  height: auto;
  @media (min-width: 1024px) {
    /* border: 1px solid; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
    .button{
      /* border: 1px solid; */
      width: 40%;
      height: 50%;
    }
  }
`;
const StyledContainForm = styled.div`
  padding: 0;
  width:100%;
  height: auto;
  @media (min-width: 1024px) {
    /* border: 1px solid; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 55%;
    .nombre{
    //  border: solid 1px red; 
      display: flex;
      justify-content: center;
      justify-content: space-evenly;
      margin-bottom: 2%;
      width: 100%;
      height: 20%;
      .name{
        width: 240px;
        height: 60px;
        flex-shrink: 0;
        border-radius: 10px;
        border: 3px solid #D9D9D9;
        color: #898989;
        text-align: center;
        font-family: Raleway;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .apellido{
        width: 240px;
        height: 60px;
        flex-shrink: 0;
        border-radius: 10px;
        border: 3px solid #D9D9D9;
        color: #898989;
        text-align: center;
        font-family: Raleway;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      }
    .correo{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      align-content: space-around;
      /* border: 1px solid blue; */
      width: 100%;
      height: 80%;
      .apellido{
        width: 80%;
        height: 60px;
        flex-shrink: 0;
        border-radius: 10px;
        margin-bottom: 2%;
        border: 3px solid #D9D9D9;
        color: #898989;
        text-align: center;
        font-family: Raleway;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      } 
    }
    .form{
      width: 100%;
      height: 80%;
    }
  }
`;


function FromRegister() {
  const form = useRef();
  const navigate = useNavigate();

  const clickHandler = (e) => {
  e.preventDefault();
  const newForm = new FormData(form.current);

  if (
    newForm.get("name") === "" ||
    newForm.get("apellido") === "" ||
    newForm.get("correo") === "" ||
    newForm.get("usuario") === "" ||
    newForm.get("password") === "" ||
    newForm.get("confirmarPassword") === ""
  ) {
    // Mostrar SweetAlert si hay campos vacíos
    Swal.fire({
      title: 'Error',
      text: 'Por favor, completa todos los campos.',
      icon: 'error',
    });
  } else {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    var raw = JSON.stringify({
      name: newForm.get("name"),
      apellido: newForm.get("apellido"),
      correo: newForm.get("correo"),
      usuario: newForm.get("usuario"),
      password: newForm.get("password"),
      confirmarPassword: newForm.get("confirmarPassword"),
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://54.147.241.142:9000/api/create", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    Swal.fire({
      title: '¡Felicidades!',
      text: 'Registro exitoso.',
      icon: 'success',
    });

    navigate("/login");
  }
};

    return ( 
        <StyledContainer>
            <StyledContainRegit> 
          <StyledContaincolor>
            <StyledContainBotonRegist>
            <StyledContainTexto>
              <h1>¿Listo para empezar? Regístrate ahora.</h1>
            </StyledContainTexto>
            </StyledContainBotonRegist>
            <StyledContainImagen>
              <StyledContainImagenVirculo/>
              <StyledContainImagenpollito>
                <img src={pollitoRegister} alt="imagen de referencia " />
              </StyledContainImagenpollito>

            </StyledContainImagen>
          </StyledContaincolor>
        </StyledContainRegit>

        <StyledContainerForm>
          <StyledContainLogo>
            <h1 className="Nutri">Nutri</h1>
            <h1 className="Pet" >Pet</h1>
          </StyledContainLogo>
          <StyledContainTitulo>
            <Titulo msn={"Registrarse"}/>
          </StyledContainTitulo>
          <StyledContainInContra>
            <h4 className="cuenta"> Ya tienes cuenta?</h4>
            <Link className="recuperar" to={"/login"}>Iniciar sesion</Link>
          </StyledContainInContra>
          {/* el form aqui */}
          <StyledContainForm>
            <form className="form" ref={form}>
              <div className="nombre">
                <Input
                  className={"name"}
                  type={"text"}
                  placeholder={"nombre"}
                  nombre={"name "}
                />
                  <Input
                  className={"apellido"}
                  type={"text"}
                  placeholder={"apellido"}
                  nombre={"apellido"}
                />
              </div>
              <div className="correo">
              <Input
                  className={"apellido"}
                  type={"text"}
                  placeholder={"correo"}
                  nombre={"correo"}
                />
                <Input
                  className={"apellido"}
                  type={"text"}
                  placeholder={"usuario"}
                  nombre={"usuario"}
                />
                <Input
                  className={"apellido"}
                  type={"password"}
                  placeholder={"contraseña"}
                  nombre={"password"}
                />
                <Input
                  className={"apellido"}
                  type={"password"}
                  placeholder={"confirmar contraseña"}
                  nombre={"confirmarPassword"}
                />
              </div>
            </form>
          </StyledContainForm>
          <StyledContainButtonLogin>
            <div className="button">
              <Button
              name={"Registrarse"}
              funcion={clickHandler}
              />
            </div>

          </StyledContainButtonLogin>
        </StyledContainerForm>
      </StyledContainer>
         );
}

export default FromRegister;