import ContactForm from './Phonebook/ContactForm/ContactForm';
import ContactsList from './Phonebook/ContactsList/ContactsList';
import Filter from './Phonebook/Filter/Filter';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
