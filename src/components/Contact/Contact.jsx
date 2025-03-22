import style from './Contact.module.css';
import { BsPersonFill, BsTelephoneFill } from "react-icons/bs";

export default function Contact({information: {name, number, id}, onDelete }) {
    return (
        <>
            <div className={style.container}>
            <div className={style.info_container_container}>
                <div className={style.info_container}>
                <BsPersonFill className={style.svg} size={18} />
                <p className={style.info_text}>{name}</p>
                </div>
            <div className={style.info_container}>
                <BsTelephoneFill className={style.svg} size={16}/>
                <p className={style.info_text}>{number}</p>
            </div>
            </div>
            <button className={style.delete_button} onClick={() => onDelete(id)}>Delete</button>
        </div>
        </>
    )
}