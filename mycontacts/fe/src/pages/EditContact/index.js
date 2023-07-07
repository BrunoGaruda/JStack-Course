import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';

import Loader from '../../components/Loader';
import toast from '../../utils/toast';

export default function EditContact() {
  const [contact, setContact] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(
          id,
        );
        setContact(contactData);
        setIsLoading(false);
      } catch {
        // history.push() to navigate
        navigate('/');
        toast({
          type: 'danger',
          text: 'Contato não encontrado!',
        });
      }
    }

    loadContact();
  }, [id, navigate]);

  function handleSubmit() {
    //
  }

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader
        title="Bruno Almeida"
      />

      <ContactForm
        key={contact.id}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
        contact={contact}
      />
    </>
  );
}
