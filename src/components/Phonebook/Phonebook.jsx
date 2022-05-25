import { useState } from 'react';
// components
import { InputForm } from '../InputForm/InputForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
// styled components
import { PhonebookBox } from './Phonebook.styled';
import { InputFormBox } from '../InputForm/InputForm.styled';
import { ContactListBox } from '../ContactItem/ContactItem.styled';

import { useGetContactsQuery } from 'ContactsAPI/contactsAPI';

export function Phonebook() {

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