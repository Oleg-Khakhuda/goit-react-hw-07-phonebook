import s from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/selectors';
import action from '../../redux/contacts/action';

const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContacts = e => dispatch(action.handleDelete(e.target.id));
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li className={s.listItem} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={s.deleteButton}
            type="button"
            id={contact.id}
            onClick={onDeleteContacts}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
