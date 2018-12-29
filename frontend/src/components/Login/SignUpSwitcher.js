import React from 'react'

export default function SignUpSwitcher({ toggle, signup }) {

        return (
          <h5
            onClick={toggle}
            style={{
              width: "100%",
              textAlign: "center",
              textDecoration: "underline",
              cursor: "pointer",
              fontFamily: "Nunito"
            }}
          >
            {signup
              ? "Already signed up click here to LOGIN"
              : "Don't have an account SIGNUP"}
          </h5>
        );
  };

