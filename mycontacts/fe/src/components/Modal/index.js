import { Overlay, Container, Footer } from './styles';

export default function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Título do Modal</h1>
        <p>Corpo do Modal</p>

        <Footer>Qualquer coisa</Footer>
      </Container>
    </Overlay>
  );
}
