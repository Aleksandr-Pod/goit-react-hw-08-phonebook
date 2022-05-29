import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { getCurrent } from 'API/authOperations';

export function Phonebook() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  console.log('token:', token);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  
  // dispatch(getCurrent()); // проверка юзера

  const { data } = useGetContactsQuery();

  const contacts = data ?? [];
  const [myFilter, setMyFilter] = useState('');

  const normalizedFilter = myFilter.toLowerCase();
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  return (
    <PhonebookBox>
      <InputFormBox>
        <h1>Phonebook</h1>
        <InputForm contacts={contacts}/>
      </InputFormBox>
      <ContactListBox>
        <Filter filter={myFilter} setFilter={setMyFilter}/>
        <ContactList contacts={filteredContacts.reverse()}/>
      </ContactListBox>
    </PhonebookBox>
  );
}