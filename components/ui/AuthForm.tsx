'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader2 } from 'lucide-react';
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';


const AuthForm = ({type}:{type:string}) => {
    const [user, setuser] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    const formSchema = authFormSchema(type)
      // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        email: "",
        password: ""
        },
    })
    
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setisLoading(true)
        console.log(values)
        setisLoading(false);
    }
    return (
      <section className="auth-form">
        <header className="flex flex-col gap-5 md:gap-8">
          <Link href="/" className=" flex  cursor-pointer item-center gap-1 ">
            <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Coinnect
            </h1>
          </Link>
          <div className="flex flex-col gap-1 md:gap-3">
            <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
              {user
                ? "Link Account"
                : type === "signIn"
                ? "Sign In"
                : "Sign Up"}
              <p className="text-16 font-noraml text-gray-600">
                {user
                  ? "Link your account to get started"
                  : "Please enter your details"}
              </p>
            </h1>
          </div>
        </header>
        {user ? (
          <div className="flex flex-col gap-4"></div>
        ) : (
          <>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {type === "signUp" && (
                  <>
                    <div className="flex gap-4">
                      <CustomInput
                        control={form.control}
                        name="firstName"
                        label="First Name"
                        placeholder="Enter your first name"
                      />
                      <CustomInput
                        control={form.control}
                        name="lastName"
                        label="Last Name"
                        placeholder="Enter your last name"
                      />
                    </div>
                    <CustomInput
                      control={form.control}
                      name="address1"
                      label="Address"
                      placeholder="Enter your address"
                    />
                    <div className="flex gap-4">
                      <CustomInput
                        control={form.control}
                        name="state"
                        label="State"
                        placeholder="ex: NY"
                      />
                      <CustomInput
                        control={form.control}
                        name="postalCode"
                        label="Postal Code"
                        placeholder="ex: 01101"
                      />
                    </div>
                    <div className="flex gap-4">
                      <CustomInput
                        control={form.control}
                        name="dateOfBirth"
                        label="Date of Birth"
                        placeholder="ex: yyyy-mm-dd"
                      />
                      <CustomInput
                        control={form.control}
                        name="ssn"
                        label="SSN"
                        placeholder="ex: 1234"
                      />
                    </div>
                  </>
                )}
                <CustomInput
                  control={form.control}
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                />
                <CustomInput
                  control={form.control}
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                />
                <div className="flex flex-col gap-4">
                  <Button
                    type="submit"
                    className="form-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        {" "}
                        <Loader2 size={20} className="animate-spin"></Loader2>
                        &nbsp;Loading...{" "}
                      </>
                    ) : type === "signIn" ? (
                      "Sign In"
                    ) : (
                      "Sign up"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
            <footer className="flex justift-center gap-1">
              <p className="text-14 font-normal text-gray-600">
                {type === "signIn"
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
              </p>
              <Link
                href={type === "signIn" ? "/sign-up" : "/sign-in"}
                className="form-link"
              >
                {type === "signIn" ? "Sign up" : "Sign in"}
              </Link>
            </footer>
          </>
        )}
      </section>
    );
}

export default AuthForm