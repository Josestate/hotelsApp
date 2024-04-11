import {React, useState} from 'react'
import { useForm } from 'react-hook-form'
import useAUth from '../hooks/useAuth';
import UserLogged from '../components/loginPage/UserLogged';

const LoginPage = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const { register, handleSubmit, reset }  = useForm();

  const { loginUser } = useAUth();

  const submit = data => {
    loginUser(data)
    reset({
      email:'',
      password: '', 
    })
  }

  if(localStorage.getItem('token')){
    return <UserLogged user={user} setUser={setUser} />
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="">
          <span>Email</span>
          <input {...register('email')} type="email" />
        </label>
        <label htmlFor="">
          <span>Password</span>
          <input {...register('password')} type="password" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginPage