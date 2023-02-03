import { Available, Box, Btns, Button, Desc, Item, SortBox } from './AptList.styled';
import { Select } from '../AddForm/AddForm.styled';


export const AptList = ({ onRent, onDelete, onCancel, apts, rentApts, setSortDir }) => {

  const onSorted = e => {
    e.preventDefault();
    setSortDir(e.currentTarget.elements.sort.value);
  };

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


      <Available>
        <p>
          🏠 Available Apartments ({Object.keys(apts).length})
        </p>
        <SortBox>
          <p>Sort to</p>
          <form onChange={onSorted}>
            <Select name='sort' required>
              <option value='highest'>Price: Highest First</option>
              <option value='lowest'>Price: Lowest First</option>
            </Select>
          </form>
        </SortBox>
      </Available>
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

