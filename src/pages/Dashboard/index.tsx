import React from "react";
import { Title, Form, Repos } from "./styles";
import logo from "../../assets/logo.svg";
import {FiChevronRight} from "react-icons/fi";

export function Dashboard() {
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de repositórios do Github</Title>
      <Form>
        <input placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>
      <Repos>
        <a href="/repositories">
          <img src="https://avatars.githubusercontent.com/u/52256690?v=4" alt="Repositorio" />
          <div>
            <strong>riordansantos/gitcollection</strong>
          <p>Repositorio para projeto de dashboard de repositorios</p>
          </div>
          <FiChevronRight size={30}/>
        </a>
      </Repos>
    </>
  );
}
