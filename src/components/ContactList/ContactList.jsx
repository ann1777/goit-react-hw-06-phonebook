import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ContactItem, DeleteButton } from './ContactList.styled';
import { remove } from 'redux/phonebook/phonebookSlice';

function ContactList() {
  const contacts = useSelector(state => state.contacts.data);
  const filter = useSelector(state => state.filter);
  const dispatcher = useDispatch();
  const onDelete = id => dispatcher(remove(id));

  return (
    <List>
      {contacts.filter(contact => {
           return contact.name === filter;
        })    
        .map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <span>{name} :</span>
              <span>{number}</span>
              <DeleteButton type="button" onClick={() => onDelete(id)}>
                Remove
              </DeleteButton>
            </ContactItem>
          );
        })}
    </List>
  );
}

export default ContactList;