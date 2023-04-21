import { auth } from "../App";
import { signOut } from "firebase/auth";

const SignOut = () => {
  return (
    auth.currentUser && <button onClick={() => signOut()}>Sign Out</button>
  );
};

export default SignOut;
