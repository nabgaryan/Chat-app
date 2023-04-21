import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../App";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return <button onClick={signInWithGoogle}>Sign In With Google</button>;
};

export default SignIn;
