import { Formik } from "formik";
import { Input, FormBox } from "components/AuthForm/authForm.styled";
import { Home } from "components/Greetings/greetings.styled";
import { useSelector, useDispatch } from "react-redux";
import { changeLoading, changeError } from "Redux/authSlice";
import { register } from "API/authOperations";
import { Error } from "components/ErrorMessage/errormessage";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  // console.log('auth:', useSelector(store => store.auth));
  const isLoading = useSelector(store => store.auth.isLoading);
  const error = useSelector(state => state.auth.error);

  const handleSubmit = (value, action) => {
    console.log('value:', value);
    dispatch(changeError(null)); // обнуляем ошибки
    dispatch(changeLoading(true)); 
    dispatch(register(value)); // запрос на регистрацию
    // action.resetForm();
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
      {isLoading && <h2>Is Loading ...</h2>}
      {error && <Error error={error}/>}
      </Home>
  )
}