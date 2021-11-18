import { v4 as uuidv4 } from 'uuid';
import action from '../../redux/contacts/action';
import { getFilter } from '../../redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';

const Filter = () => {
  const inputFilterId = uuidv4();

  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => dispatch(action.changeFilter(e.target.value));

  return (
    <form className={s.form}>
      <label className={s.label} htmlFor={inputFilterId}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        value={value}
        id={inputFilterId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={changeFilter}
      />
    </form>
  );
};

export default Filter;
