import s from './ContactsList.module.css';
import { connect } from 'react-redux';
import action from '../../redux/contacts/action';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, handleDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li className={s.listItem} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={s.deleteButton}
            type="button"
            id={contact.id}
            onClick={handleDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const handleFilter = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => ({
  contacts: handleFilter(state.items, state.filter),
});

const mapDispatchToProps = dispatch => ({
  handleDelete: e => dispatch(action.handleDelete(e.target.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
