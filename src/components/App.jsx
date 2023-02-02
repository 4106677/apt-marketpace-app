import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { GlobalStyle } from './GlobalStyles';

import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { Section, H1 } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });


  const [apt, setApt] = useState(()=> {
    return (
      JSON.parse(
        localStorage.getItem('apt')
      ) ?? [
        {id: '100', name: 'Market square apertments', beds: '1', days: '2', price: '110'},
        {id: '101', name: 'Sun Hotel', beds: '1', days: '1', price: '100'},
        {id: '102', name: 'Cozy Room', beds: '1', days: '1', price: '20'},
      ]
    )
  });

  const [filter, setFilter] = useState('');

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Report.info(name, ' is already in contacts.', 'Okay');
    } else {
      setContacts([contact, ...contacts]);
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const getApts = () => {
    return apt.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
  }

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Section>

      <ContactForm onSubmit={addContact} />
          <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={getFilteredContacts()} onDelete={deleteContact} apts={getApts()}/>
      <GlobalStyle />
    </Section>
  );
}
