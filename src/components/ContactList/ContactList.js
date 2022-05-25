import { ContactItem } from "../ContactItem/ContactItem";
import PropTypes from 'prop-types';

export function ContactList({ contacts }) {
    return (
        <>
            <h2>Contact List</h2>
            {contacts.length ?
                <ul style={{margin: 0}}>
                    {contacts.map((contact, idx) => (
                        <ContactItem key={contact.id} contact={contact} idx={idx} />
                    ))}
                </ul>
                : <p>No any contacts</p>}
        </>
    )
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
}