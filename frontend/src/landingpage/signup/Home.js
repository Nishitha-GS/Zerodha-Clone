import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// import { CookiesProvider } from "react-cookie";
import "./style.css"



const Home = () => {
   console.log("HOME COMPONENT RENDERED");
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
      useEffect(() => {
      const verifyCookie = async () => {
        console.log("verifyCookie started");
        console.log("cookies:", cookies);

        if (!cookies.token) {
          console.log("No token cookie found");
          navigate("/login");
          return;
        }

        console.log("Token exists");

        const { data } = await axios.post(
          "http://localhost:3002",
          {},
          { withCredentials: true }
        );

        console.log("Response:", data);

        const { status, user } = data;

        setUsername(user);

        return status
          ? toast(`Hello ${user}`)
          : (removeCookie("token"), navigate("/login"));
      };

      verifyCookie();
    }, [cookies, navigate, removeCookie]);
    const Logout = () => {
      removeCookie("token");
      navigate("/signup");
    };
  return (
    <>
      <div className="home_page">
        <h4>
          {" "}
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;