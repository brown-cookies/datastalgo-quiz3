import { useEffect } from "react";

import Cookies from "js-cookie";
const AuthLayout = (props) => {
  const token = Cookies.get("access");

  useEffect(() => {
    if (token === undefined || token === null) {
      window.location.href = "/login";
    }
  });

  return <>{props.children}</>;
};

export default AuthLayout;
