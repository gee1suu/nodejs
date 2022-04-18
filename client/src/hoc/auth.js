import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_actions";
import { useNavigate } from "react-router-dom";

export default function (SpecificComponent, option, adminRoute = null) {
  // null: 아무나 출입 O
  // true: 로그인한 유저만 출입 O
  // false: 로그인한 유저는 출입 X

  function AuthenticationCheck() {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response);

        if (!response.payload.isAuth) {
          // 로그인하지 않은 상태
          if (option) {
            navigate("/login");
          }
        } else {
          // 로그인한 상태
          if (adminRoute && !response.payload.isAdmin) {
            navigate("/");
          } else {
            if (option === false) {
              navigate("/");
            }
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
