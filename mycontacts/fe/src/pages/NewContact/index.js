import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';

export default function NewContact() {
  async function handleSubmit(formData) {
    const contact = {
      name: formData.contact.name,
      email: formData.contact.email,
      phone: formData.contact.phone,
      category_id: formData.contact.categoryId,
    };

    const response = await ContactsService.createContact(contact);

    console.log(response);
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
