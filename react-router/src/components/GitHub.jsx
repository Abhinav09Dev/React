import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const GitHub = () => {

  const data = useLoaderData();

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Abhinav09Dev")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl">
      GitHub Followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
};

export default GitHub;

export const gitHubInfo = async () => {
  const respone = await fetch("https://api.github.com/users/Abhinav09Dev");
  return respone.json();
};
