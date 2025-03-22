import style from './SearchBox.module.css'

export default function SearchBox({ value, onFilter }) {
    return (
    <div className={style.container}>
    <p className={style.label}>Find contacts by name</p>
    <input
        type="text"
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
        className={style.input}
    />
    </div>
);
}