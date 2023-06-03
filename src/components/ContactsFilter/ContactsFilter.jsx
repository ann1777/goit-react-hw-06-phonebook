import React from 'react';
import { Input, FilterWrapper } from './ContactsFilter.styled';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/phonebook/phonebook-actions';
import PropTypes from 'prop-types';

function ContactsFilter () {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onFilterChange = e => {
    dispatch(actions.onFilter(e.target.value));
  };

  return (
    <FilterWrapper>
    <Input
      type='text'
      name="search"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value={filter}
      onChange={onFilterChange}
      placeholder='Find contacts by name'
    />
  </FilterWrapper>
  );
}


ContactsFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default ContactsFilter;
