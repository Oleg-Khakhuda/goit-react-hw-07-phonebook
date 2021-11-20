import { changeFilter } from '../../redux/contacts/action';
import { getFilter } from '../../redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <form className={s.form}>
      <label className={s.label}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onChangeFilter}
      />
    </form>
  );
};

export default Filter;
