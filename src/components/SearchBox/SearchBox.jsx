import style from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice.js';

export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filters.name);

    const handleFilterChange = (evt) => {
        dispatch(changeFilter(evt.target.value));
    };

    return (
        <div className={style.container}>
            <p className={style.label}>Find contacts by name</p>
            <input
                type="text"
                value={filter}
                onChange={handleFilterChange} 
                className={style.input}
            />
        </div>
    );
}