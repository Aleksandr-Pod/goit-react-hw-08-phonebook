import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormBox = styled(Form)`
  margin: 10px auto;
  padding: 20px;
  width: 240px;
  background-color: pink;
  border-radius: 5px;

  animation-name: opacity2;
  animation-duration: 1000ms;

  @keyframes opacity2 {
    0% {opacity: 0}
    100% {opacity: 1}
  }
}
`
export const Input = styled(Field)`
  display: flex;
  justyfy-content: space-between;
`