import React, { useRef, MutableRefObject, FormEvent, useContext, useEffect } from 'react';
import './login.css';
import useForm from '../../hooks/useForm';
import { post } from '../../services/http';
import { AppContext } from '../../contexts/app.context';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const appContext = useContext(AppContext);
  const formRef: MutableRefObject<HTMLFormElement|null> = useRef(null);
  const {form, updateForm} = useForm({});

  useEffect(() => {
    if (appContext.user) {
      history.push('/doctors');
    }
  }, []);

  const register = (event: FormEvent) => {
    event.preventDefault();

    const formElement = formRef.current;
    if (formElement && formElement.checkValidity()) {
      post('register', {...form}).then((res: {}) => {
        appContext.update('user', res);
        const user = btoa(JSON.stringify(res));
        localStorage.setItem('user', user);
        history.push('/doctors');
      });
    } else {
      alert('Please fill all the fields correctly.')
    }
  };

  return <div className="main">
      <p className="sign">LOGIN</p>
      <form ref={formRef} className="form1">
          <input onInput={updateForm} className="tb" type="text" name="firstName"  placeholder="Name" />
          <input onInput={updateForm} className="tb" type="text"  name="email"  placeholder="Email" />
          <input onInput={updateForm} className="tb" type="password"  name="password"  placeholder="Password" />
          <a onClick={register} className="submit">Login</a>
      </form>
    </div>
};

export default Login;
