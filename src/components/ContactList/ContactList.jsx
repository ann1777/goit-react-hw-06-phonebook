import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { List, ContactItem, DeleteButton } from './ContactList.styled';
import { remove } from 'redux/phonebook/phonebook-reducer';

function ContactList () {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();
  const onDelete = id => dispatch(remove(id));

  return (
    <List>
      {contacts
      .filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      }).map(({ name, number, id }) => {
        return (
          <ContactItem key={id}>
          <span>{name} :</span>
          <span>{number}</span>
          <DeleteButton 
          type='button' 
          onClick={() => onDelete(id)}>
            Remove
          </DeleteButton>
        </ContactItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;