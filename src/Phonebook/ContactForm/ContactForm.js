import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import action from '../../redux/contacts/action';
import { connect } from 'react-redux';

import s from './ContactForm.module.css';

const ContactForm = ({ addNewContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputNameId = uuidv4();
  const inputNumberId = uuidv4();

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
    addNewContact(name, number);
    resetForm();
  };

  const resetForm = () => {
    setNumber('');
    setName('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={inputNameId}>
        Name
      </label>
      <input
        className={s.input}
        type="text"
        value={name}
        id={inputNameId}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleChange}
      />
      <label className={s.label} htmlFor={inputNumberId}>
        Number
      </label>
      <input
        className={s.input}
        type="tel"
        value={number}
        id={inputNumberId}
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

const mapDispatchToProps = dispatch => ({
  addNewContact: (name, number) => dispatch(action.addNewContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
