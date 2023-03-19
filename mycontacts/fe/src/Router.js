// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, BrowserRouter as Routes } from 'react-router-dom';

import Home from './pages/Home';
import NewContact from './pages/NewContact';
import EditContact from './pages/EditContact';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
}

// V5 to V6
// Switch agora é Routes. Necessário renomear o Hook com (BrowserRouter as Routes)
// Component agora é element. Ao invés da função, agora enviar o elemento (componente)
// Não precisa mais do "exact" as rotas
