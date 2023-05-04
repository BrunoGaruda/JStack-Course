import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import {
  Container,
  InputSearchContainer,
  Header,
  ListHeader,
  Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');

  useEffect(() => {
    // Criando o parse das requisições no formato JS
    fetch('http://localhost:3001/contacts')
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  console.log(contacts);

  function handleToggleOrderBy() {
    const newOrder = orderBy === 'asc' ? 'desc' : 'asc';
    setOrderBy(newOrder);
  }

  // fetch('http://localhost:3001/contacts')
  //   .then(async (response) => {
  //     const json = await response.json();
  //     setContacts(json);
  //   })
  //   .catch((error) => {
  //     console.log('error', error);
  //   });

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

      <ListHeader>
        <button type="button" onClick={handleToggleOrderBy}>
          <span>Nome</span>
          <img src={arrow} alt="Arrow" />
        </button>
      </ListHeader>

      {contacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>

              {/* retirando a "bolinha" do contato caso n tenha category */}
              {contact.category_name && (
              <small>{contact.category_name}</small>
              )}
            </div>
            <span>
              {contact.email}
            </span>
            <span>
              {contact.phone}
            </span>
          </div>
          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
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
