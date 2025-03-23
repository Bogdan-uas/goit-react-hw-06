import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactForm from '../ContactForm/ContactForm.jsx';

import { nanoid } from "nanoid";

import { addContact, deleteContact, setInitialContacts } from "../../redux/contactsSlice.js";
import { setFilter } from "../../redux/filtersSlice.js";

import './App.css';

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  { id: "id-5", name: "Sigma Bombaclat", number: "696-69-96" }
];

function App() {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.phonebook.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("users"));
    if (storedContacts && storedContacts.length > 0) {
      dispatch(setInitialContacts(storedContacts));
    } else {
      dispatch(setInitialContacts(initialContacts));
      localStorage.setItem("users", JSON.stringify(initialContacts));
    }
  }, [dispatch]);

  const addInfo = (newInfo) => {
    const finalUser = {
      ...newInfo,
      id: nanoid(),
    };
    dispatch(addContact(finalUser));
  };

  const deleteInfo = (infoId) => {
    dispatch(deleteContact(infoId));
  };

  const changeFilter = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name &&
      contact.name.toLowerCase().includes((filter || "").toLowerCase())
  );

  return (
    <div className='main-container'>
      <ContactForm onAdd={addInfo} />
      <SearchBox value={filter} onFilter={changeFilter} />
      <ContactList info={filteredContacts} onDelete={deleteInfo} />
    </div>
  );
}

export default App;
