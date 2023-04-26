import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
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
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Criando o parse das requisições no formato JS
    fetch('http://localhost:3001/contacts')
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  console.log(contacts);

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>

      <Header>
        <strong>
          {contacts.length}
          {contacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
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

      {contacts.map((contact) => (
        <Card key={contact}>
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
      ))}
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
