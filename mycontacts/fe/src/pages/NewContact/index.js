import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

export default function NewContact() {
  function handleSubmit(formData) {
    console.log('NewContact -> handleSubmit', { formData });
  }

  return (
    <>
      <PageHeader
        title="Novo contato"
      />
      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
