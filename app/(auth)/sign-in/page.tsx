import React from 'react'
import AuthForm from '@/components/ui/AuthForm'
const SignIn = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
        <AuthForm type="signIn"/>
    </section>
  )
}

export default SignIn