import style from './ContactList.module.css'
import Contact from '../Contact/Contact.jsx'

export default function ContactList({info, onDelete}) {
    return (
    <ul className={style.list}>
        {info.map((infos) => (
        <li className={style.item} key={infos.id}>
            <Contact information={infos} onDelete={onDelete}/>
        </li>
    ))}
    </ul>
    )
}

