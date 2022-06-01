import { ErrorBox } from "./error.styled"

export const Error = ({ error }) => {
  return (
    <ErrorBox>
      {(typeof(error) === 'string') && <h3>{error}</h3>}
      {error.email && <h3>{error.email.message}</h3>}
      {error.password && <h3>{error.password.message}</h3>}
    </ErrorBox>
  )
}