import styled from 'styled-components';

export const Box = styled.div`

  width: 100%;
`
export const Form = styled.form`
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
  height: 100px;
  background-color: #e8eaed;

  padding:  20px;
`;

export const FormItem = styled.div`
  :first-child{
    width: 250px;
  }
:last-child{
  width: 80px;
}
    width: 110px;
  margin-right: 20px;
`
export const Label = styled.label`
  display: block;
  //transform: translate(-30px, 14px) scale(0.75);
margin-bottom: 5px;

  font-size: 14px;

`;

export const Input = styled.input`

  width: 100%;
  height: 40px;

  padding: 10px;
  //padding-top: 20px;

  border-radius: 5px;
  border: 1px solid #eee;
  transition: 0.3s border-color;
`;

export const Select = styled.select`
  height: 40px;

  display: block;
  padding: 10px;
  width: 100%;


  border-radius: 5px;
  border: 1px solid #eee;
  transition: 0.3s border-color;
`;

export const Button = styled.button`
  margin-right: 5px;
  padding: 10px;
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: #00be97;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;

  cursor: pointer;
  min-width: 100px;
height: 40px;

`;

export const H2 = styled.h2`
  text-align: left;
  justify-content: left;
  display: flex;
  margin-left: 0;
  align-items: flex-start;
`
