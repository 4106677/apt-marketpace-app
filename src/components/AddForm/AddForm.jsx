import { Box, Button, Form, FormItem, H2, Input, Label, Select } from './AddForm.styled';


export default function AddForm({ onSubmit }) {

  const clickSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const beds = form.elements.beds.value;
    const days = form.elements.days.value;
    const price = form.elements.price.value;

    onSubmit({ name, days, beds, price });
    form.reset();
  };

  return (
    <Box>
      <h1>Apartments Marketplace</h1>
      <H2>🤑 Create a new rent</H2>
      <Form onSubmit={clickSubmit} id='form'>
        <FormItem role='group'>
          <Label htmlFor='name'>Title</Label>
          <Input type='text' name='name' placeholder='Ex. Flat in the city center' required
                 autoFocus maxLength='99' />
        </FormItem>
        <FormItem role='group'>
          <Label htmlFor='days'>Days</Label>
          <Input type='number' name='days' placeholder='4' min='1' required />
        </FormItem>
        <FormItem>
          <Label htmlFor='beds' htmlFor='cars'>Beds</Label>
          <Select id='beds' name='beds' required form='form' placeholder='1'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3+</option>
          </Select>
        </FormItem>
        <FormItem role='group'>
          <Label htmlFor='price'>Rent Price</Label>
          <Input type='number' name='price' placeholder='99.00' required />
        </FormItem>
        <Button type='submit'>Submit rent</Button>
      </Form>
    </Box>
  );
}

