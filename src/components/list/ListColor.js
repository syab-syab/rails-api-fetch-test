import { useState } from "react";
import React from 'react';
import useFetch from "../../hooks/useFetch";
import Lists from "./Lists";

export default function ListColor() {
  const url = "http://localhost:3000/colors";

  const { data: colors, isLoaded, error } = useFetch(url)

  return (
    <>
      <h1>ListColor</h1>
      { error && <div>{error.message}</div> }
      { isLoaded && <div>loading</div> }
      { colors && <Lists values={colors}/>}
    </>
    
  )
}
