import styled from 'styled-components';

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 5px;
  margin: 10px auto;
  width: 80%;
  
  div.incrementAndDecrement {
    display: flex;
    flex-direction: column;
    
    width: 60%;
  }

  div.simpleHandleCounter {
    display: flex;
    flex-direction: row;
    aling-items: center;
    justify-content: center;
  }

  div.highHandleCounter {
    display: flex;
    flex-direction: column;
    aling-items: center;
    justify-content: center;

    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #000;
    margin-top: 10px;
  }

  div.highHandleCounter input {
    font-size: 20px;
    width: 50%;
    padding: 5px 0 5px 20px;
    border: 1px solid #000;
    border-radius: 3px;
  }

  div.InputHandleCounter {
    display: flex;
    flex-direction: row;
    aling-items: center;
    justify-content: center;

    margin: 10px;
  }

  div.InputOptionCounter {
    display: flex;
    aling-items: center;
    justify-content: center;

    font-weight: bold;
  }

  div.InputOptionCounter input[type="radio"] {
    margin: 0 10px 0 10px;
    width: 10px;
    height: 10px;
  }

  button {
    cursor: pointer;
    font-size: 15px;
    color: #fff;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: tomato;
  }
`;

export default Counter;