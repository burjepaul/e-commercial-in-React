import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";


import {
  singInWithGoogePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword
} from "../../utiles/firebase/firebase.utiles";

import {SignInContainer} from "./sign-in-form.styles.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };


  const signInWithGoogle = async () => {
    const { user } = await singInWithGoogePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthWithEmailAndPassword(email, password);
      resetFormField();
    } catch (error) {
      switch(error.code){
        case 'auth/wrong-password': 
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.log(error)
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">

        <Button type="submit">
          Sign In
        </Button>
        <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
          Google Sign in
        </Button>

        </div>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
