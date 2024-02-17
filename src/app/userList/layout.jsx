import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <b>This is layout page for common use.</b>
      {children}
    </div>
  );
};

export default layout;
