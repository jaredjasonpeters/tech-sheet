import React from 'react'

export default function ErrorMessage({error}) {
   
        return (
          <h4
            style={{
              width: "100%",
              textAlign: "center",
              color: "red",
              fontFamily: "Nunito"
            }}
          >
            {error}
          </h4>
        );
  };

