import React from "react";
import {Link} from "react-router-dom";
import { Title, Form, Repos, Error } from "./styles";
import logo from "../../assets/logo.svg";
import { FiChevronRight } from "react-icons/fi";
import { api } from "../../services/api";

interface GithubRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

function Dashboard() {
  const [repos, setRepos] = React.useState<GithubRepository[]>(() => {
    const storageRepos = localStorage.getItem("@gitCollection:repositories");
    if (storageRepos) {
      return JSON.parse(storageRepos);
    }
    return [];
  });
  const [newRepo, setNewRepo] = React.useState("");
  const [inputError, setInputError] = React.useState("");
  const formEl = React.useRef<HTMLFormElement | null>(null);

  React.useEffect(() => {
    localStorage.setItem("@gitCollection:repositories", JSON.stringify(repos));
  }, [repos]);
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setNewRepo(event.target.value);
  }
  async function handleAddRepo(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError("Informe o username/repositorio");
      return;
    }
    try {
      const response = await api.get<GithubRepository>(`/repos/${newRepo}`);
      const repository = response.data;
      setRepos([...repos, repository]);
      formEl.current?.reset();
      setNewRepo("");
      setInputError("");

    } catch {
      setInputError("Informe um username/repositorio válido");
    }
  }
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de repositórios do Github</Title>
      <Form ref={formEl} onSubmit={handleAddRepo} hasError={Boolean(inputError)}>
        <input
          placeholder="username/repository_name"
          onChange={handleInputChange}
        />
        <button type="submit">Buscar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repos>
        {repos.map((repository, index) => (
       
            <Link to={`/repositories/${repository.full_name}`} key={repository.full_name + index}>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight size={30} />
            </Link>
         
        ))}
      </Repos>
    </>
  );
}
 export default Dashboard;