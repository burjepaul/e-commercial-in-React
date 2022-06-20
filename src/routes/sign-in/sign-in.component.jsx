import { singInWithGoogePopup, createUserDocumentFromAuth } from "../../utiles/firebase/firebase.utiles";


const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await singInWithGoogePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in With Google Popup</button>
    </div>
  );
};

export default SignIn;
