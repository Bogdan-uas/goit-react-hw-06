import { useState, useEffect } from 'react';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactForm from '../ContactForm/ContactForm.jsx';
import './App.css';

const LOCAL_STORAGE_KEY = 'contacts';

function App() {
  const [info, setInfo] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Sigma Bombaclat', number: '696-69-96' },
    ];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(info));
  }, [info]);

  const addInfo = (newInfo) => {
    setInfo((prevInfos) => [...prevInfos, newInfo]);
  };

  const visibleInfo = info.filter((infos) =>
    infos.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteInfo = (infoId) => {
    setInfo((prevInfos) => prevInfos.filter((info) => info.id !== infoId));
  };

  return (
    <div className='main-container'>
      <ContactForm onAdd={addInfo} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList info={visibleInfo} onDelete={deleteInfo} />
    </div>
  );
}

export default App;
