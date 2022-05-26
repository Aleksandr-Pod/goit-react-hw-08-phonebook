import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormBox = styled(Form)`
  margin: 10px auto;
  padding: 20px;
  width: 240px;
  background-color: pink;
`
export const Input = styled(Field)`
  display: flex;
  justyfy-content: space-between;
`