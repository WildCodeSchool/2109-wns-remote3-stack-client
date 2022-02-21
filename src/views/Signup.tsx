import React from 'react';
import { useForm } from 'react-hook-form';
import UserCard from '@assets/User_card.png';
import MailInput from '@components/formInput/MailInput';
import PasswordInput from '@components/formInput/PasswordInput';

function Signup(): JSX.Element {
  const { register } = useForm();
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="md:flex gap-20 w-10/12 lg:w-7/12">
        <div className="m-auto">
          <div className="text-7xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-5 drop-shadow-lg">
            Welcome to Stack.
          </div>
          <div className="text-justify bg-clip-text text-lightGray mw-sm">
            Get your work done. Stack helps you to manage your projects, create
            tasks, and many more.
          </div>
        </div>
        <div className="absolute z-0 right-10 hidden lg:flex">
          <img src={UserCard} alt="userCard" />
        </div>
        <div className="justify-center z-10">
          <div className="m-auto lg:m-0 block p-8 rounded-lg bg-darkGray w-96 shadow-purple border border-gray-600">
            <div className="text-center text-4xl font-extralight drop-shadow-md">
              Hi There
            </div>
            <form>
              <MailInput
                label=""
                placeholder="user@email.com"
                register={register}
                email="email"
                required
                error=""
                id="id"
              />
              <PasswordInput
                label=""
                placeholder="password"
                register={register}
                password="password"
                required
                error=""
                id="id"
              />
              <PasswordInput
                label=""
                placeholder="confirm password"
                register={register}
                password="password"
                required
                error=""
                id="id"
              />
              <button
                type="submit"
                className="rounded-lg w-full text-slate-800 px-5 py-3"
                style={{
                  background:
                    'linear-gradient(181.76deg, rgba(255, 255, 255, 0.4) -72.83%, #8560EE 98.51%)',
                }}
              >
                Signup
              </button>
              <div
                className="mt-4 text-center font-extralight drop-shadow-md"
                style={{ color: ' #8560EE' }}
              >
                Already have an account? Sign in
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
