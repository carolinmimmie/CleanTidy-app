import { Auth, onAuthStateChanged, signOut, User } from "@firebase/auth";
import { Button, Typography } from "@mui/material";
import { auto, right } from "@popperjs/core";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { auth } from "../../firebase.config";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState<User | null>(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  //   const userSignOut = () => {
  //     signOut(auth)
  //       .then(() => {
  //         console.log("Utloggning lyckad");
  //       })
  //       .catch((error) => console.log(error));
  //   };

  //   const userFirstName = authUser.email.slice(0, 5);
  const dot = authUser?.email?.indexOf(".");
  const dot1 = `${authUser?.email?.slice(0, 1)}${authUser?.email}`.indexOf(".");
  const dot2 = `${authUser?.email?.slice(0, 2)}${authUser?.email}`.indexOf(".");
  const at = authUser?.email?.indexOf("@");
  console.log(authUser)
  const userFirstName = `${authUser?.email
    ?.slice(0, 1)
    .toUpperCase()}${authUser?.email?.slice(1, dot)}`;
    const userLastName = `${authUser?.email?.slice(dot1, dot2).toUpperCase()}${authUser?.email?.slice(dot2, at)}`;

  return (
    <div>
      {authUser ? (
        <div>
          <Typography
            variant="h5"
            sx={{ mb: 4 }}
            // className="kund"
          >
            {/* {`Välkommen ${authUser.email}`} */}
            {`Välkommen ${userFirstName} ${userLastName}`}
          </Typography>
          {/* <Button
            onClick={userSignOut}
            sx={{
              bgcolor: " rgba(000000, 0, 0, 0.8);",
              ":hover": { bgcolor: "black ;" },
              mb: 5,
            }}
            variant="contained"
          >
            Logga ut
          </Button> */}
        </div>
      ) : (
        <p>Utloggad</p>
      )}
    </div>
  );
};

export default AuthDetails;
