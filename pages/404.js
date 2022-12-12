import Link from "next/link";
import { useRouter } from "next/router";
import React, { use, useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div>
      Ư<h1>404</h1>
      <h2>The page not found</h2>
      <p>
        Going back the <Link href="/">Home page</Link> is in 3 seconds
      </p>
    </div>
  );
}
