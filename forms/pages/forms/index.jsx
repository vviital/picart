import React from "react";
import Link from "next/link";

const Index = props => {
  console.log("props", props);
  return (
    <div>
      <Link href="/forms/about">
        <button>Go to about page</button>
      </Link>
      <p>Hello Next.js</p>
    </div>
  );
};

export default Index;
