import React, { useEffect } from 'react';
import { authService } from 'fbase';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import 'styles/Auth.scss';
import AuthForm from 'components/AuthForm';

const Auth = () => {

  useEffect(() => {
    document.body.classList.add('auth-component-active');

    return () => {
      document.body.classList.remove('auth-component-active');
    };
  }, []);
  

  const onSocialClick = (e) => {
    console.log('e.target.name->', e.target.name);
    const { target: { name } } = e;
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }
    signInWithPopup(authService, provider);
  }

  return (
    <>
      <div className="auth-container">
        <video className="auth-background-video" autoPlay loop muted>
          <source src="video-background.mp4" type="video/mp4" />
        </video>
        <FontAwesomeIcon />
        <AuthForm />
        <div className="auth-social">
          <button onClick={onSocialClick} name="google" className="auth-social-button google">
            Continue with Google <FontAwesomeIcon icon={faGoogle} />
          </button>
          <button onClick={onSocialClick} name="github" className="auth-social-button github">
            Continue with Github <FontAwesomeIcon icon={faGithub} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Auth;
