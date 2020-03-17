import styled from 'styled-components';

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 5px;

  button {
    border-radius: 5px;
    border: 1px solid #red;
    background-color: tomato;
  }
`;

export default Counter;