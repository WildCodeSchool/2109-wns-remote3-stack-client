import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
// import UserCard from '@assets/User_card.png';
import { useHistory } from 'react-router-dom';
import { LoginVariables, Login } from '@api/types/Login';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '@api/mutation/login';
import LoginInput from '@components/formInput/LoginInput';
import { useUserFromStore } from '@store/user.slice';
import LogContainer from '@components/LogContainer';

function LogIn(): JSX.Element {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { dispatchLogin } = useUserFromStore();
  // TODO: once the user is logged in, recover data and save it in store
  const [loginMutation, { loading, error }] = useMutation<
    Login,
    LoginVariables
  >(LOGIN_MUTATION, {
    onCompleted: (data: Login) => {
      dispatchLogin(data.login);
      history.push('/');
    },
  });

  function goToSignup() {
    history.push('/signup');
  }

  const onSubmit: SubmitHandler<LoginVariables> = (data: LoginVariables) => {
    loginMutation({
      variables: {
        ...data,
      },
    });
  };

  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }

  return (
    <LogContainer>
      <div className="justify-center mx-8">
        <div className="m-auto lg:m-0 block p-8 rounded-lg bg-darkGray shadow-purple border border-gray-600">
          <div className="text-center text-4xl mb-5 font-extralight drop-shadow-md">
            Hi There
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <button
              type="submit"
              className="rounded-lg w-full mt-5 text-slate-800 px-5 py-3"
              style={{
                background:
                  'linear-gradient(181.76deg, rgba(255, 255, 255, 0.4) -72.83%, #8560EE 98.51%)',
              }}
            >
              Login
            </button>
            <button
              type="submit"
              onClick={goToSignup}
              className="mt-4 ml-16  text-justify font-extralight drop-shadow-md"
              style={{ color: ' #8560EE' }}
            >
              No account? Register one
            </button>
          </form>
        </div>
      </div>
    </LogContainer>
  );
}

export default LogIn;
