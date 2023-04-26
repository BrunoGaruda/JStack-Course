import { Link } from 'react-router-dom';

import { useEffect } from 'react';
import {
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
  Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  useEffect(() => {
    // Criando o parse das requisições no formato JS
    fetch('http://localhost:3001/contacts')
      .then(async (response) => {
        const json = await response.json();
        console.log('response', response);
        // console.log('json', json);
        json.forEach((contact) => {
          console.log(contact.name);
        });
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sortButton">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Bruno Almeida</strong>
            <small>instagram</small>
          </div>
          <span>bruno@gmail.com </span>
          <span>(84) 99999-9999 </span>
        </div>
        <div className="actions">
          <Link to="/edit/123">
            <img src={edit} alt="Edit" />
          </Link>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>

    </Container>
  );
}

// SOP -> Same Origin Policy -> Política de mesma origem
// CORS -> Cross-Origin Resource Sharing -> Compartilhamento de recursos entre origens diferentes
// Origem: protocolo://domínio:porta

//   Saída: http://localhost:3000
// Destino: http://localhost:3000

// Preflight -> Pré-voô
// OPTIONS: http://localhost:3000/contacts
