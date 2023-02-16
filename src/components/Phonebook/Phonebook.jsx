import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// components
import { InputForm } from '../InputForm/InputForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
// styled components
import { PhonebookBox } from './Phonebook.styled';
import { InputFormBox } from '../InputForm/InputForm.styled';
import { ContactListBox } from '../ContactItem/ContactItem.styled';
// others
import axios from 'axios';

export function Phonebook() {
  const { token, isLogged } = useSelector(state => state.auth);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  return (
  <>
    {(!isLogged) ? <Navigate to="/login" /> :
      <PhonebookBox>
        <InputFormBox>
          <h1>Phonebook</h1>
          <InputForm />
        </InputFormBox>
        <ContactListBox>
          <Filter />
          <ContactList />
        </ContactListBox>
      </PhonebookBox>
    }
  </>
  );
}