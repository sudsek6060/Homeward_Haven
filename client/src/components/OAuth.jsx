import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInScccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/Google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInScccess(data));
      navigate("/");
    } catch (error) {
      console.log("Could not sign in with google", error);
    }
  };
  return (
    <button
      onClick={handleGoogleAuth}
      type="button"
      className="bg-red-700 p-3 rounded-lg uppercase text-white font-semibold hover:opacity-80"
    >
      Continue with Google
    </button>
  );
};

export default OAuth;
