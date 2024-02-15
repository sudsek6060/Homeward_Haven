import { useSelector } from "react-redux";

const Profile = () => {
  const { currentuser } = useSelector((state) => state.user);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center font-bold text-2xl my-8">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-3"
          src={currentuser.avatar}
          alt="profile"
        />
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
        <span className="text-red-500">Delete account </span>
        <span className="text-purple-700">Sign out </span>
      </div>
    </div>
  );
};

export default Profile;
