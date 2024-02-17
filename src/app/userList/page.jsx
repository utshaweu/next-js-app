import React from "react";

const page = () => {
  return (
    <div>
      <p>This is user list page:</p>
      <li>user 1</li>
      <li>user 2</li>
      <li>user 3</li>
      <li>user 4</li>
      <li>user 5</li>
      <li>user 6</li>
    </div>
  );
};

export default page;

export function generateMetadata() {
  return {
    title: "User List",
    description: "This is user list page",
  };
}
