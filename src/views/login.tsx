import React from 'react';
import { useForm } from 'react-hook-form';
import welcome from '@assets/welcomeLoginText.svg';
// import userCard from '@assets/Usercard.svg';
import welcome2 from '@assets/welcomeText2.svg';
import EmailInput from '@components/formInput/emailInput';
import PswdInput from '@components/formInput/pswdInput';

function Login(): JSX.Element {
  const { register } = useForm();
  return (
    <>
      <div className="md:flex align-center mt-40 ml-10">
        <div className="flex-1 p-7">
          <img className="mb-5" src={welcome} alt="logo-stack" />
          <img className="" src={welcome2} alt="logo-stack" />
        </div>
        <div className="flex-1 mt-5 p-7">
          {/* <div className="">
          //! todo : put image behind form
            <img className="" src={userCard} alt="logo-stack" />
          </div> */}
          <div className="block p-7 rounded-lg bg-darkGray max-w-sm shadow-purple">
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
                className="mt-8 bg-purple rounded-lg w-full text-white px-5 py-2 shadow-inner-lg"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div>

        <div className="text-center mt-10 space-y-8">
        </div>
      </div>
      <div className="text-center mt-36 space-y-8">
        <div className="w-screen h-screen bg-darkBlue z-50 p-5">
          <div className="text-center max-w-md">

          </div>
        </div>
      </div> */}
    </>
  );
}

export default Login;
