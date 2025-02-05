"use server"

import { signIn } from "@/auth"
import { signOut } from "@/auth"
import { AuthError } from "next-auth"
import { redirect } from "next/navigation"

export async function handleCredentialsLogin(formData: FormData) {
  try {
    await signIn("credentials", formData)
  } catch (error) {
    if (error instanceof AuthError) {
      return redirect(`/error?error=${error.type}`)
    }
    throw error
  }
}

export async function handleGoogleLogin() {
  try {
    await signIn("google", {
      redirectTo: "/dashboard",
    })
  } catch (error) {
    if (error instanceof AuthError) {
      return redirect(`/error?error=${error.type}`)
    }
    throw error
  }
}

export async function handleLogOut() {
  console.log("Logging out")
  try {
    await signOut({
      redirectTo: '/login',
      redirect: true
    })
  } catch (error) {
    if (error instanceof AuthError) {
      throw error
    }
  }
}