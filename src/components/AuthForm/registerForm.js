import { Formik } from "formik";
import { Input, FormBox } from "components/AuthForm/authForm.styled";
import { Home } from "components/Greetings/greetings.styled";
import { useSelector, useDispatch } from "react-redux";
import { changeLoading, changeError } from "Redux/authSlice";
import { register } from "API/authOperations";
import { Error } from "components/ErrorMessage/errormessage";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isLogged, error } = useSelector(store => store.auth);

  useEffect(() => {
    if (isLogged) navigate('/phonebook', {replace: true}); // если залогинен - идём в тел. книгу
  }, [isLogged, navigate])

  const handleSubmit = (value, action) => {
    dispatch(changeError(null)); // обнуляем ошибки
    dispatch(changeLoading(true)); 
    dispatch(register(value)); // запрос на регистрацию
    // action.resetForm(); // лучше не очищать форму
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