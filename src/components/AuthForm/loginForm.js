import { Formik } from "formik";
import { Input, FormBox } from "components/AuthForm/authForm.styled";
import { Home } from "components/Greetings/greetings.styled";
import { useDispatch } from 'react-redux';
import { toggleLogin } from 'Redux/authSlice';
export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (value, action) => {
    dispatch(toggleLogin);
    action.resetForm();
  }
  return (
    <Home>
      <h2>Login Form</h2>
      <Formik 
      initialValues={{email: "", password: "" }}
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