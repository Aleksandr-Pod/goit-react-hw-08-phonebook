import { ListItem, NumByOrder, TelNum, DelBtn } from "./ContactItem.styled";
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from "API/contactsAPI";

export function ContactItem({ contact, idx }) {
    const [deleteContact] = useDeleteContactMutation()
    return (
        <ListItem>
            <NumByOrder>{idx + 1}</NumByOrder>
            {contact.name}: <TelNum>{contact.phone}</TelNum>
            <DelBtn type="button" onClick={() => deleteContact(contact.id)}>Delete</DelBtn>
        </ListItem>
    )
}
ContactItem.propTypes = {
  contact: PropTypes.object,
  idx: PropTypes.number,
}
