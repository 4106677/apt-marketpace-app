import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Form, Input, Label, Button, H2, Select, FormItem } from './ContactForm.styled';
import { H1 } from '../App.styled';

export default function ContactForm({ onSubmit }) {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [days, setDays] = useState('');
  const [beds, setBeds] = useState('');
  const [price, setPrice] = useState('');

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      case 'name':
        setName(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const onChange = (e) => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'days':
        setDays(e.currentTarget.value);
        break;
      case  'beds':
        setBeds(e.currentTarget.value);
        break;
      case 'price':
        setPrice(e.currentTarget.value);
        break;

      default:
        return;
    }
  }

  const clickSubmit = (e) => {
    e.preventDefault();
    onSubmit({name, days, beds, price});
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ name, number });
    onSubmit({ name, number });
  };

  return (
    <Box>
      {/*<Form onSubmit={handleSubmit}>*/}
      {/*  <Label>Name</Label>*/}
      {/*  <Input*/}
      {/*    type="text"*/}
      {/*    name="name"*/}
      {/*    onChange={handleChange}*/}
      {/*    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"*/}
      {/*    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"*/}
      {/*    required*/}
      {/*  />*/}
      {/*  <Label>Number</Label>*/}
      {/*  <Input*/}
      {/*    type="tel"*/}
      {/*    name="number"*/}
      {/*    onChange={handleChange}*/}
      {/*    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"*/}
      {/*    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"*/}
      {/*    required*/}
      {/*  />*/}
      {/*  <Button type="submit">Add contact</Button>*/}
      {/*</Form>*/}
      <h1>Apartments Marketplace</h1>
      <H2>🤑 Create a new rent</H2>
      <Form onSubmit={clickSubmit}>
        <FormItem role='group'>
          <Label htmlFor='name'>Title</Label>
          <Input onChange={onChange} type="text" name="name" placeholder='Ex. Flat in the city center'/>
        </FormItem>
        <FormItem role='group'>
          <Label htmlFor='days'>Days</Label>
          <Input onChange={onChange} type="number" name="days" placeholder='4'/>
        </FormItem>
        <FormItem role='group'>
          <Label htmlFor='beds' htmlFor="cars">Beds</Label>
          <Select  onChange={onChange} id="beds" name="beds">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3+">3+</option>
          </Select>
        </FormItem>
        <FormItem role='group'>
          <Label htmlFor='price'>Rent Price</Label>
          <Input onChange={onChange} type="number" name="price" placeholder='99.00'/>
        </FormItem>
   <Button type="submit">Submit rent</Button>

      </Form>
    </Box>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
