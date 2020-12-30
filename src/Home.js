import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import TwitterEmbed from "./TwitterEmbed";
import Loading from "./Loading";

const Home = (props) => {
  const [loading, setloading] = useState(true);
  const signedin = useSelector((state) => state.userSignin);
  const { userData } = signedin;

  if (!userData) {
    props.history.push("/signin");
  }
  useEffect(() => {
    setloading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="home">
          <Sidebar />
          <Posts />
          <TwitterEmbed />
        </div>
      )}
    </div>
  );
};

export default Home;
