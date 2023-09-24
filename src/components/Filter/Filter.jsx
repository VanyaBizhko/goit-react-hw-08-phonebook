import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/auth/selectors';
import { setFilter } from 'redux/filter/filterSlice';
import styles from './Filter.module.css'

export default function Filter() {
    const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = event =>
    dispatch(setFilter(event.currentTarget.value.trim()));
    return (
        <div className={styles.section}>
            <h3>Find contacts by name</h3>
            <input type="text" value={filter} onChange={handleChange}/>
        </div>
    )
    }