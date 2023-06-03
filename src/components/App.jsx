import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Section } from './Section/Section';
import { Title } from './Title/Title';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import ContactList from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from './ThemeProvider/ThemeProvider';
import { theme } from './theme';

function App() {
const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Section>
          <Title title="Phonebook" />
          <ContactsForm/>
          <Title title="Contacts" />
          <ContactsFilter/>
          <ContactList/>
        </Section>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
export default App;
