import React from 'react';
import { useForm } from 'react-hook-form';
import MailInput from '@components/formInput/MailInput';
import PasswordInput from '@components/formInput/PasswordInput';

function Login(): JSX.Element {
  const { register } = useForm();
  return (
    <div>
      <div className="md:flex align-center mt-40 ml-10">
        {/* <div className="flex-1 p-7">
        </div> */}
        <div className="flex-1 mt-2 p-7 ">
          <div className="block p-7 rounded-lg bg-darkGray max-w-sm shadow-purple border border-gray-600">
            <div className="text-center text-4xl font-extralight">Hi There</div>
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
              <button
                type="submit"
                className="rounded-lg w-full text-slate-800 px-5 py-3"
                style={{
                  background:
                    'linear-gradient(181.76deg, rgba(255, 255, 255, 0.4) -72.83%, #8560EE 98.51%)',
                }}
              >
                Login
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
    </div>
  );
}

export default Login;