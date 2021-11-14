import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import action from '../../redux/contacts/action';
import { connect } from 'react-redux';
import s from './Filter.module.css';

const Filter = ({ value, changeFilter }) => {
  const inputFilterId = uuidv4();

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

const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: e => dispatch(action.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
