"use client";
import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";
const FormState = ({ sendUserData }) => {
  const [state, formAction] = useFormState(sendUserData, {});
  console.log("state", state);
  return (
    <form action={formAction}>
      <input type="text" name="firstName" placeholder="first name" />
      <input type="text" name="lastName" placeholder="last name" />
      <input type="text" name="age" placeholder="age" />
      <input type="file" name="image" placeholder="image" />
      <SubmitButton />
      {state.length > 0 && state.map((error) => <p key={error}>{error}</p>)}
    </form>
  );
};

export default FormState;
