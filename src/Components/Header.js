import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGS } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    //Toggle GPT search
    dispatch(toggleGptSearchView());
  };

  const handleLangChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  

  return (
    <div className="absolute px-4 py-1 bg-gradient-to-b from-black z-10 w-screen flex justify-between flex-col md:flex-row">
      <img className="w-40 mx-auto md:mx-0 " src={LOGO} alt="Logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch &&
          (<select className="p-2 h-10 rounded bg-gray-900 text-white mr-1" onChange={handleLangChange}>
            {SUPPORTED_LANGS.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>)}
          <button
            onClick={handleGptSearch}
            className="bg-purple-800 h-10 p-2 px-4  rounded md:mx-2  text-white"
          >
            {showGptSearch?"Home Page":"GPT Search"}
          </button>
          <img
            className="w-10 h-10 rounded mx-1 hidden md:block"
            src={user?.photoURL}
            alt="usericon"
          />
          <button onClick={handleSignOut} className="  text-white font-bold">
            (SignOut)
            </button>
          
          
        </div>
      )}
    </div>
  );
};
