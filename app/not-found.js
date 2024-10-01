"use client"

import { useRouter } from "next/navigation"
import {  useEffect } from "react"
const notFound = () => {
const router=useRouter();
useEffect(()=>{
    router.replace("/")
},[router])
return null
}

export default notFound