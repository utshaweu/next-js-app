import React from "react";

const page = ({params}) => {
  return (
    <div>
      <p>Details page : {params?.id}</p>
    </div>
  );
};

export default page;