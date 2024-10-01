import { redirect } from "next/navigation";
import FormState from "./FormAtoms/FormState";
const FormComp = () => {
  const sendUserData = async (prevData, data) => {
    "use server";
    let errors = [];
    let firstName = data.get("firstName");
    let lastName = data.get("lastName");
    let age = data.get("age");
    let image = data.get("image");
    const firstNameRegex = /^[a-zA-Z0-9]{3,15}$/;
    const lastNameRegex = /^[a-zA-Z0-9]{3,15}$/;
    if (!firstNameRegex.test(firstName)) {
      errors.push("firstName error");
    }
    if (!lastNameRegex.test(lastName)) {
      errors.push("lastName error");
    }
    if (!image || image.size == 0) {
      errors.push("image error");
    }
    if (errors.length > 0) {
      return errors;
    }
    console.log(firstName, lastName, age, image);
    redirect("/");
  };
  return (
    <>
      <div>FormComp</div>
      <FormState sendUserData={sendUserData} />
    </>
  );
};

export default FormComp;
