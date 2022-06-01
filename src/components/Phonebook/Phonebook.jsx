// import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
// components
import { InputForm } from '../InputForm/InputForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
// styled components
import { PhonebookBox } from './Phonebook.styled';
import { InputFormBox } from '../InputForm/InputForm.styled';
import { ContactListBox } from '../ContactItem/ContactItem.styled';

import { useGetContactsQuery } from 'API/contactsAPI';

export function Phonebook() {
  const { token, filter } = useSelector(state => state.auth);
  console.log('filter', filter);
  console.log('token', token);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;

  const { data } = useGetContactsQuery();
  const contacts = data ?? [];
  // const [myFilter, setMyFilter] = useState('');
  // const myFilter = useSelector(state => state.auth.filter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  return (
    <PhonebookBox>
      <InputFormBox>
        <h1>Phonebook</h1>
        <InputForm contacts={contacts}/>
      </InputFormBox>
      <ContactListBox>
        <Filter/>
        <ContactList contacts={filteredContacts.reverse()}/>
      </ContactListBox>
    </PhonebookBox>
  );
}