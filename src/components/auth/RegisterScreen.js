import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          type="text"
          name="name"
          placeholder="User Name"
          autoComplete="off"
          className="auth__input"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          autoComplete="off"
          className="auth__input"
        />
        <input
          type="password"
          name="password"
          placeholder="Pasword"
          autoComplete="off"
          className="auth__input"
        />
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          autoComplete="off"
          className="auth__input"
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        <Link className="link" to={"/auth/login"}>
          Already registered?
        </Link>
      </form>
    </>
  );
};
