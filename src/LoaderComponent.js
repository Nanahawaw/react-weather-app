import React from "react";
import { ColorRing } from "react-loader-spinner";

export default function LoaderComponent() {
  return (
    <ColorRing
      visible={true}
      height="800"
      width="800"
      ariaLabel="blocks-loading"
      wrapperStyle={{ margin: "0 auto" }}
      wrapperClass="blocks-wrapper"
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />
  );
}
