import styled from 'styled-components';

export const Box = styled.div`
align-items: flex-start;
  width: 100%;
`
export const Form = styled.form`
  border-radius: 5px;

  display: flex;
  flex-direction: row;

  //width: 100%;
  background-color: #e8eaed;

  padding:  20px;
`;

export const Label = styled.label`
  transform: translate(-30px, 14px) scale(0.75);

  height: 0;
`;

export const Input = styled.input`
  display: block;
  width: 382px;
  margin: 10px ;
  padding: 10px;
  padding-top: 20px;


  border-radius: 10px;
  border: 1px solid #eee;
  transition: 0.3s border-color;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;

  //appearance: none;
  //-webkit-appearance: none;
  /* usual styles */
  padding: 10px;

  border: none;
  background-color: #00be97;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;

  cursor: pointer;
  min-width: 100px;

  
  //width: 100%;
`;

export const H2 = styled.h2`
  text-align: left;
  justify-content: left;
  display: flex;
  margin-left: 0;
  align-items: flex-start;
`
