import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';

export default function EditContact() {
  const { id } = useParams();

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(
          id,
        );
        console.log({ contactData });
      } catch {}
    }

    loadContact();
  }, [id]);

  function handleSubmit() {
    //
  }

  return (
    <>
      <PageHeader
        title="Bruno Almeida"
      />

      <ContactForm
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
