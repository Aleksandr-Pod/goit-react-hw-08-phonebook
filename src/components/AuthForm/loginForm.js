import { Formik } from "formik";
import { Input, FormBox } from "components/AuthForm/authForm.styled";
import { Home } from "components/Greetings/greetings.styled";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "API/authOperations";
import { useNavigate } from "react-router";
import { useEffect } from "react";


export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.auth.isLogged);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) navigate('/phonebook');
  }, [isLogged, navigate])

  const onSubmit = (values, action) => {
    dispatch(login(values)); // запрос на сервер этого юзера
    action.resetForm();
  }
  return (
    <Home>
      <h2>Login Form</h2>
      <Formik initialValues={{email: "", password: "" }}
        onSubmit={onSubmit} >
      <FormBox>
        <label>E-mail:
          <Input type="email" name="email" required/>
        </label>
        <label>Password:
          <Input type="password" name="password" required/>
        </label>
        <button type="submit">Submit</button>
        </FormBox>
      </Formik>
    </Home>
  )
}