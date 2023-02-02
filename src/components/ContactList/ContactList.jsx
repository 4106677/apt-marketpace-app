import { Box, Item, Button } from './ContactList.styled';

import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete, apts, rentApts }) => {

  return (
    <Box>
      {/*{contacts.map(({ id, name, number }) => (*/}
      {/*  <Contact key={id}>*/}
      {/*    {name}: {number}*/}
      {/*    <Button type="button" onClick={() => onDelete(id)}>*/}
      {/*      X*/}
      {/*    </Button>*/}
      {/*  </Contact>*/}
      {/*))}*/}


      <h2>🤩 You current rent</h2>
      {rentApts.map(({ id, name, beds, days, price }) => (
      <Item key={id}>
        {name}/ {beds} bed{beds > 1 && 's'}/ {days} day{days > 1 && 's'}/ ${price * days}
        <Button style={{  backgroundColor: '#ff0034'}} type='button'>Cancel rent</Button>
      </Item>
      ))}


      <h2>🏠 Avaliable Apartments ({Object.keys(apts).length})</h2>
      {apts.map(({ id, name, beds, days, price }) => (
        <Item key={id}>
          {name}/ {beds} bed{beds > 1 && 's'}/ {days} day{days > 1 && 's'}/ ${price * days}
          <Button type='button'>Rent</Button>
          <Button type='button'>Delete</Button>
        </Item>
      ))}
    </Box>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
