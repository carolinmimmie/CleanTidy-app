import { Auth, onAuthStateChanged, signOut, User } from "@firebase/auth";
import { Button, Typography } from "@mui/material";
import { auto } from "@popperjs/core";
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
  //   const userLastName = authUser.email.slice(6, 12);

  return (
    <div>
      {authUser ? (
        <div>
          <Typography
            variant="h5"
            sx={{ mb: 4 }}
            // className="kund"
          >
            {`Välkommen ${authUser.email}`}
            {/* {`Välkommen ${userFirstName}`} */}
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
