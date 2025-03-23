import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactForm from '../ContactForm/ContactForm.jsx';
import './App.css';

function App() {

  return (
    <div className='main-container'>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;