import style from './Contact.module.css';
import { BsPersonFill, BsTelephoneFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from '../../redux/contactsSlice.js';

export default function Contact({ id }) {
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.phonebook.contacts.items.find(contact => contact.id === id));

    if (!contact) {
        return null;
    }

    const { name, number } = contact;

    const handleDelete = () => {
        dispatch(deleteContact(id));
    };

    return (
        <div className={style.container}>
            <div className={style.info_container_container}>
                <div className={style.info_container}>
                    <BsPersonFill className={style.svg} size={18} />
                    <p className={style.info_text}>{name}</p>
                </div>
                <div className={style.info_container}>
                    <BsTelephoneFill className={style.svg} size={16} />
                    <p className={style.info_text}>{number}</p>
                </div>
            </div>
            <button 
                className={style.delete_button} 
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    );
}