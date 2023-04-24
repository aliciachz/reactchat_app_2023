import React, { useState } from 'react'
import { authService } from 'fbase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import 'styles/Auth.scss';

function AuthForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(true); //true 회원가입, false 로그인
    const [error, setError] = useState('');

    const onChange = (e) => {
        console.log('e.target.name->', e.target.name);
        console.log(e);
        const {target:{name, value}} = e;
        if(name === 'email'){
          setEmail(value);
        }else if(name === 'password'){
          setPassword(value);
        }
      }

  const onSubmit = async(e) => {
    e.preventDefault();
    try {
      let data;
          if(newAccount){
          //회원가입
          data = await createUserWithEmailAndPassword(authService, email, password)
      }else{
        //로그인
        data = await signInWithEmailAndPassword(authService, email, password)
      }
      console.log(data);
    } catch (error) {
      console.log('error->',error);
      setError(error.message);
    }
  }

  const toggleAccount = () => setNewAccount(prev => !prev);

  return (
    <>
    <div className='login-box'>
    <h1 className='logo'><span></span></h1>
        <h2>WELCOME !</h2>
        <form onSubmit={onSubmit} className="auth-form">

        <div className='user-box'>
        <input
          name="email"
          type="email"
          required
          value={email}
          onChange={onChange}
          className="auth-input"
        />
        <label>Email</label>
        </div>

        <div className='user-box'>
        <input
          name="password"
          type="password"
          required
          value={password}
          onChange={onChange}
          className="auth-input"
        />
        <label>Password</label>
        </div>

        <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <input type="submit" value={newAccount ? 'Create Account' : 'Log In'} className="auth-submit" />
        </a>

        {error && <span className='authError'>{error}</span>}
        
      </form>
      <span onClick={toggleAccount} className="auth-toggle">
        {newAccount ? 'Sign In' : 'Create Account'}
      </span>
    </div>
    </>
  )
}
export default AuthForm