import { ContactItem } from "../ContactItem/ContactItem";
import { useGetContactsQuery } from 'API/contactsAPI';
import { useSelector } from "react-redux";

export function ContactList() {
  const { data } = useGetContactsQuery();
  const contacts = data ?? [];
  const { value: filter } = useSelector(state => state.filter);
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)).reverse();
  return (
    <>
      <h2>Contact List</h2>
      {filteredContacts.length ?
        <ul style={{margin: 0}}>
          {filteredContacts.map((contact, idx) => (
            <ContactItem key={contact.id} contact={contact} idx={idx} />
          ))}
        </ul>
        : <p>No any contacts</p>}
    </>
  )
}