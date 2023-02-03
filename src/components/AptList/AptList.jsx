import { Box, Btns, Button, Desc, Item } from './AptList.styled';

export const AptList = ({ onRent, onDelete, onCancel, apts, rentApts }) => {

  return (
    <Box>
      <h2>🤩 You current rent {Object.keys(rentApts).length < 1 && '(no active leases)'}</h2>
      {rentApts.map(({ id, name, beds, days, price }) => (
        <Item key={id}>
          {name}/ {beds} bed{beds > 1 && 's'}/ {days} day{days > 1 && 's'}/ ${price * days}
          <Button style={{ backgroundColor: '#ff0034' }} type='button' onClick={() => onCancel(id)}>Cancel
            rent</Button>
        </Item>
      ))}


      <h2>🏠 Available Apartments ({Object.keys(apts).length})</h2>
      {apts.map(({ id, name, beds, days, price }) => (
        <Item key={id}>
          <Desc>    {name}/ {beds} bed{beds > 1 && 's'}/ {days} day{days > 1 && 's'}/ ${price * days}</Desc>
          <Btns>
            <Button type='button' onClick={() => onRent({ id, name, beds, days, price })}>Rent</Button>
            <Button type='button' onClick={() => onDelete(id)}>Delete</Button>
          </Btns>
        </Item>
      ))}
    </Box>
  );
};

