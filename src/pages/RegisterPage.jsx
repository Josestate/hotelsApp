import React from 'react'
import { useForm } from 'react-hook-form'
import useAUth from '../hooks/useAuth';

const RegisterPage = () => {

  const { register, handleSubmit, reset }  = useForm();

  const { registerUser } = useAUth()

  const submit = data => {
    registerUser(data)
    console.log(data)
    reset({
      firstName: '',
      lastName: '',
      email:'',
      password: '', 
      gender: 'unknown'
    })
  } 

  return (
    <section>
      <form onSubmit={handleSubmit(submit)}>
        <h2>Register</h2>
        <label>  
          <span>First Name</span>
          <input {...register('firstName')} type='text' />
        </label>
        <label>
          <span>Last Name</span>
          <input {...register('lastName')} type='text' />
        </label>
        <label>
          <span>Email</span>
          <input {...register('email')} type='text' />
        </label>
        <label>
          <span>Password</span>
          <input {...register('password')} type='text' />
        </label>
        <label>
          <span>Gender</span>
          <select {...register('gender')} >
            <option value='unknown'>Unknown</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='Other'>Other</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </section>
  )
}

export default RegisterPage