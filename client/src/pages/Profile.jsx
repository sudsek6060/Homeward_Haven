import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

// firebase storage
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read:if true;
//       allow write: if
//       request.resource.size < 2 * 1024 * 1024 &&
//       request.resource.contentType.matches('image/.*')
//     }
//   }
// }

const Profile = () => {
  const { currentuser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [imgPerc, setImagePerc] = useState(0);
  const [errorUpload, setErrorUpload] = useState(false);
  const [formData, setFormData] = useState({});
  const fileRef = useRef(null);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);
  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePerc(Math.round(progress));
      },
      (error) => {
        setErrorUpload(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setFormData({ ...formData, avatar: downloadUrl });
        });
      }
    );
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center font-bold text-2xl my-8">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-3"
          src={formData.avatar || currentuser.avatar}
          alt="profile"
        />
        <p className="mx-auto">
          {errorUpload ? (
            <span className="text-red-600">Error Image Upload</span>
          ) : imgPerc > 0 && imgPerc < 100 ? (
            <span className="text-slate-500">{`uploading...${imgPerc}`}</span>
          ) : imgPerc === 100 ? (
            <span className="text-green-600">Image uploade successfully</span>
          ) : (
            ""
          )}
        </p>

        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="User Name"
          id="username"
          value={currentuser.username}
        />
        <input
          className="border p-3 rounded-lg"
          type="email"
          placeholder="Email"
          id="email"
          value={currentuser.email}
        />
        <input
          className="border p-3 rounded-lg"
          type="password"
          placeholder="Password"
          id="password"
        />
        <button className="bg-stone-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {" "}
          Update User
        </button>
      </form>
      <div className="flex justify-between mt-2">
        <span className="text-red-500 cursor-pointer">Delete account </span>
        <span className="text-purple-700 cursor-pointer">Sign out </span>
      </div>
    </div>
  );
};

export default Profile;

584117;
