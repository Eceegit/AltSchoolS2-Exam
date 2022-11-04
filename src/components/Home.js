import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Popup from "./Popup";
import {
  auth,
  provider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
} from "../config";

const Home = () => {
  //setting a state to initialize login
  const [loginPopup, setLoginPopup] = useState(false);
  //setting a logged in state
  const [loggedIn, setLoggedIn] = useState(false);
  //setting a state for current user
  const [user, setUser] =useState(null)

  // const [current, setCurrent] = useState(false)

  //using useEffect to setTimeout for login popup
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoginPopup(true);  
    }, 1000);
    return () => clearTimeout(timer)

  }, []);

  //login to firebase handler
  const login = (e) => {
    e.preventDefault();
    signInWithRedirect(auth, provider);
  };

  //setting it to retrieve the data
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        //getting the result
        if (result) {
          console.log(result.user);
          setLoggedIn(true);
          setLoginPopup(false)
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
      
  }, []);

  //check current logged in
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photURL, uid} = user
        setUser({ displayName, email, photURL, uid} )
        setUser(true)
      } else {
        // User is signed out
        setUser(null)
      }
    });
  }, []);
  return (
    <main>
      <Navigation />
      <div className="home-section">
        <div className="banner-text">
          <h1>Together, We can unite The People with Nature!</h1>
          <p>
            Join as a Nature lover today to help save endangered lands, waters
            and wild species and receive our picnic blanket thank-you gift seen
            on TV.
          </p>
          <button>Join Us</button>
        </div>

        <img
          src={require("../image/nature3.jpg")}
          className="banner-img"
          alt="banner"
        />
      </div>

      {/* setting a timed popup for google authentication */}
      {/* {loggedIn && (
        <Popup trigger={loggedIn} setTrigger={setLoggedIn}>
          <h3>Welcome Back!</h3>
        </Popup>
      )}  */}
      
                {/* <Popup trigger={loggedIn} setTrigger={setLoggedIn}>
                <h3>Welcome Back!</h3>
                <p>{user.displayName}</p>
              </Popup> */}
      {loginPopup ? (
          <Popup trigger={loginPopup} setTrigger={setLoginPopup}>
          <h3>Welcome to AfriNat</h3>
          <p>Please sign in with your google accout</p>
          <button onClick={login} className="login-btn">
            Google
          </button>
        </Popup>
        
      ) : ""}

    </main>
  );
};

export default Home;
