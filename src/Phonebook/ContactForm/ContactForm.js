import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/contacts/operations';
import { getContacts } from '../../redux/contacts/selectors';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts!`);
    } else if (contacts.find(contact => contact.phone === number)) {
      return alert(`${number} is already in contacts!`);
    }
    dispatch(operations.addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setNumber('');
    setName('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>Name</label>
      <input
        className={s.input}
        type="text"
        value={name}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleChange}
      />
      <label className={s.label}>Number</label>
      <input
        className={s.input}
        type="tel"
        value={number}
        name="number"
        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
        required
        onChange={handleChange}
      />
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
