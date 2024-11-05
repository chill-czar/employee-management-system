import React from 'react'
import { useState } from 'react'

const Login = ({ handleLogin }) => {
    


    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)

        setEmail('')
        setPassword('')
    }













    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} action="" className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        type="email"
                        placeholder='Enter your email'
                        className='text-white outline-none bg-transparent border-2 border-emerald-600  text-xl py-3 px-5 rounded-full placeholder:text-gray-400' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        type="password"
                        placeholder='Enter your password'
                        className='text-white outline-none bg-transparent border-2 border-emerald-600  text-xl py-3 px-5 rounded-full placeholder:text-gray-400' />
                    <button
                        className='mt-5 text-white  outline-none border-none bg-emerald-600  text-xl py-3 px-5 rounded-full placeholder:text-white'
                    >Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login