import React from 'react';
import { useForm } from 'react-hook-form';
// import UserCard from '@assets/User_card.png';
import { useHistory } from 'react-router-dom';
import { SignupVariables, Signup } from '@api/types/Signup';
import { useMutation } from '@apollo/client';
import { SIGNUP_MUTATION } from '@api/mutation/signup';
import LoginInput from '@components/formInput/LoginInput';
import { useUserFromStore } from '@store/user.slice';
import LogContainer from '@components/LogContainer';

function SignUp(): JSX.Element {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { dispatchLogin } = useUserFromStore();
  const [signupMutation] = useMutation<Signup, SignupVariables>(
    SIGNUP_MUTATION,
    {
      onCompleted: (data) => {
        dispatchLogin(data.signup);
        history.push('/');
      },
    }
  );

  // check password + password confirm + mutation si OK
  const onSubmit = (data: SignupVariables & { confirm_password: string }) => {
    if (data.password === data.confirm_password) {
      signupMutation({
        variables: {
          ...data,
        },
      });
    }
    // TODO : add error notification or error state for inputs
  };

  function goToLogin() {
    history.push('/login');
  }

  return (
    <LogContainer>
      <div className="justify-center z-10">
        <div className="m-auto lg:m-0 block p-8 rounded-lg bg-darkGray w-96 shadow-purple border border-gray-600">
          <div className="text-center text-4xl mb-5 font-extralight drop-shadow-md">
            Hi There
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <LoginInput
              label=""
              placeholder="firstname"
              register={register}
              name="firstName"
              type="text"
              required
              error=""
              id="firstname"
            />
            <LoginInput
              label=""
              placeholder="lastname"
              register={register}
              name="lastName"
              type="text"
              required
              error=""
              id="lastName"
            />
            <LoginInput
              label=""
              placeholder="user@email.com"
              register={register}
              name="email"
              type="email"
              required
              error=""
              id="email"
            />
            <LoginInput
              label=""
              placeholder="password"
              register={register}
              name="password"
              type="password"
              required
              error=""
              id="password"
            />
            <LoginInput
              label=""
              placeholder="confirm password"
              register={register}
              name="confirm_password"
              type="password"
              required
              error=""
              id="confirm_password"
            />
            <button
              type="submit"
              className="rounded-lg w-full text-slate-800 px-5 mt-5 py-3"
              style={{
                background:
                  'linear-gradient(181.76deg, rgba(255, 255, 255, 0.4) -72.83%, #8560EE 98.51%)',
              }}
            >
              Signup
            </button>
            <button
              type="button"
              onClick={goToLogin}
              className="mt-4 ml-6 text-center font-extralight drop-shadow-md"
              style={{ color: ' #8560EE' }}
            >
              Already have an account? Login in
            </button>
          </form>
        </div>
      </div>
    </LogContainer>
  );
}

export default SignUp;
