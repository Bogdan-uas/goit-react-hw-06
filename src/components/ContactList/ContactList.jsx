import style from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';
import { useSelector } from "react-redux";

export default function ContactList() {
    const contacts = useSelector((state) => state.phonebook.contacts.items);
    const filter = useSelector((state) => state.filters.name);

    const filteredContacts = contacts.filter(
        (contact) => contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={style.list}>
            {filteredContacts.map((contact) => (
                <li className={style.item} key={contact.id}>
                    <Contact id={contact.id} />
                </li>
            ))}
        </ul>
    );
}

