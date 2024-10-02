"use client";
import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import Image from "next/image";
const FormState = ({ sendUserData }) => {
  const [state, formAction] = useFormState(sendUserData, {});
  const [imageUploaded, SetImageUploaded] = useState();
  const imageUploadedfunc = (e) => {
    const file = e.target.files[0];
    if (file) {
        let image = URL.createObjectURL(file)
        SetImageUploaded(image)
    }
  };
  return (
    <form action={formAction}>
      <input type="text" name="firstName" placeholder="first name" />
      <input type="text" name="lastName" placeholder="last name" />
      <input type="text" name="age" placeholder="age" />
      <input
        type="file"
        name="image"
        placeholder="image"
        onChange={(e) => imageUploadedfunc(e)}
      />
      {imageUploaded&&<Image src={imageUploaded} width="100" height="100"/>}
      <SubmitButton />
      {state.length > 0 && state.map((error) => <p key={error}>{error}</p>)}
    </form>
  );
};

export default FormState;
