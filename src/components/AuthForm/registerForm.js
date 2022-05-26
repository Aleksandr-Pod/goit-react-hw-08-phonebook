import { Formik } from "formik";
import { Input, FormBox } from "components/AuthForm/authForm.styled";
import { Home } from "components/Greetings/greetings.styled";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "Redux/authSlice";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  console.log('auth;', useSelector(store => store.auth));

  const handleSubmit = (value, action) => {
    dispatch(addUser(value));
    action.resetForm();
  }
  return (
    <Home>
      <h2>Register Form</h2>
      <Formik 
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit} >
        <FormBox>
          <label>Name:
            <Input type="text" name="name" required/>
          </label>
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