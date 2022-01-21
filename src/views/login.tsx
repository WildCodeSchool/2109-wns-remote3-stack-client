import React from 'react';
import welcome from '@assets/welcomeLoginText.svg';
import welcome2 from '@assets/welcomeText2.svg';
import EmailInput from '@components/formInput/emailInput';
import { useForm } from 'react-hook-form';
import PswdInput from '@components/formInput/pswdInput';
// import pswdInput from '../../components/formInput/pswdInput';

function Login(): JSX.Element {
  const { register } = useForm();
  return (
    // welcome text parts
    // TODO : Change Tailwind class for login page.
    <>
      <div className="text-center mt-36 space-y-8">
        <div className="w-screen h-screen bg-darkBlue z-50 p-5">
          <img className="w-90" src={welcome} alt="logo-stack" />
          <div className="text-center mt-10 space-y-8">
            <img className="h-20" src={welcome2} alt="logo-stack" />
          </div>
          <div className="text-center max-w-md">
            <form>
              <EmailInput
                label="enter an email"
                placeholder="email@gmail.com"
                register={register}
                email="email"
                required
                error=""
                id="id"
              />
              <PswdInput
                label="enter a password"
                placeholder="***********"
                register={register}
                password="password"
                required
                error=""
                id="id"
              />
              <button
                type="submit"
                className="mt-8 bg-purple rounded-md w-full text-white px-5 py-2 "
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
