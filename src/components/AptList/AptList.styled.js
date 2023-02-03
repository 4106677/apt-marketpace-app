import styled from 'styled-components';

export const Box = styled.ul`
  margin-top: 15px;
  padding: 0;

  width: 100%;

  //background-color: aliceblue;

  border-radius: 10px;
`;

export const Item = styled.li`
  &:not(:first-child) {
    //border-top: 1px solid gray;
    margin-top: 10px;
  }

  padding: 15px 15px 15px 20px;

  //width: 765px;

  display: flex;
  flex-direction: row;

  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #d7d9dc;

  min-height: 40px;

`;

export const Desc = styled.div`
  max-width: 460px;
  word-break: break-all;
`;
export const Btns = styled.div`
  display: block;
  margin: 0 0 0 auto;
  padding: 0;
  background-color: transparent;
  border: none;

`;
export const Button = styled.button`
  :first-child {
    margin-left: auto;
    background-color: #344ccf;
  }

  margin-right: 10px;
  padding: 10px;
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: #ff0034;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;

  cursor: pointer;
  min-width: 100px;
  height: 40px;
`;

