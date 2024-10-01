"use client"
import {useFormStatus} from "react-dom"
const SubmitButton = () => {
    const { pending } = useFormStatus();
    console.log("pending",pending);
  return (
    <button type="submit">{pending?"loading...":"send data"}</button>
  )
}
export default SubmitButton