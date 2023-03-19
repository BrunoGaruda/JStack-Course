import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
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
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>

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
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>

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
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>
    </Container>
  );
}