import { useEffect, useState } from 'react';
import AddForm from './AddForm/AddForm';
import { AptList } from './AptList/AptList';

import { GlobalStyle } from './GlobalStyles';

import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { Section } from './App.styled';

export function App() {
  const [apt, setApt] = useState(() => {
    return (
      JSON.parse(
        localStorage.getItem('apt'),
      ) ?? [
        { id: '100', name: 'Market square apertments', beds: '1', days: '2', price: '110' },
        { id: '101', name: 'Sun Hotel', beds: '1', days: '1', price: '100' },
        { id: '102', name: 'Cozy Room', beds: '1', days: '1', price: '200' },
      ]
    );
  });

  const [rentApts, setRentApts] = useState(
    () => {
      return (
        JSON.parse(
          localStorage.getItem('rentApts'),
        ) ?? [
          { id: '101', name: 'Sun Hotel', beds: '1', days: '1', price: '100' },
        ]
      );
    },
  );

  const [sortDir, setSortDir] = useState('highest');
  const deleteApt = aptId => {
    setApt(apt.filter(item => item.id !== aptId));
  };


  const cancelRent = aptId => {
    setRentApts(rentApts.filter(item => item.id !== aptId));
  };

  const addRent = ({ id, name, beds, days, price }) => {
    const rentApt = {
      id,
      name,
      beds,
      days,
      price,
    };

    if (rentApts.find(apt => apt.id === id)) {
      Report.info(name, 'is already rent', 'Okay');
    } else {
      setRentApts([rentApt, ...rentApts]);

    }
  };

  const newRent = ({ name, beds, days, price }) => {
    const newApt = {
      id: nanoid(4),
      name,
      beds,
      days,
      price,
    };
    setApt([newApt, ...apt]);
  };

  const getSortedApt = () => {
    if (sortDir === 'highest') {
      return [...apt].sort((a, b) => b.price * b.days - a.price * a.days);
    } else {
      return [...apt].sort((a, b) => a.price * a.days - b.price * b.days);
    }
  };


  useEffect(() => {
    window.localStorage.setItem('apt', JSON.stringify(apt));
    window.localStorage.setItem('rentApts', JSON.stringify(rentApts));
  }, [apt, rentApts]);


  return (
    <Section>
      <AddForm onSubmit={newRent} />
      <AptList onRent={addRent} onDelete={deleteApt} onCancel={cancelRent} apts={getSortedApt()} setSortDir={setSortDir}
               rentApts={rentApts} />
      <GlobalStyle />
    </Section>
  );
}
