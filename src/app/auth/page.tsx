"use client"
import { useState } from "react"
import Login from "../components/auth/login"
import Register from "../components/auth/register"

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />
  )

}