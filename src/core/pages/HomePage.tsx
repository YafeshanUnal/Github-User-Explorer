import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HipoLogoIcon } from "../icons/HipoLogoIcon";
import ErrorAlert from "../components/ErrorAlert";
import axios from "axios";
import { setLoading, setRepos, setUser } from "@/store/slice";
import { useAppDispatch, useAppSelector } from "@/store";
import { useGetReposQuery, useGetUserQuery } from "../service";
import Link from "next/link";
import Popup from "../components/Popup";
export const HomePage = () => {
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();
  const repos = useAppSelector((state) => state.repo.repos);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {
    data: reposInfo,
    isLoading: reposLoading,
    error: reposError,
    status,
  } = useGetReposQuery({
    name: username,
  });
  const {
    data: userInfo,
    isLoading: userLoading,
    error: userError,
  } = useGetUserQuery({
    name: username,
  });

  console.log("s", status.toString());

  useEffect(() => {
    setLoading(reposLoading || userLoading);
    if (reposInfo && userInfo) {
      dispatch(setRepos(reposInfo));
      dispatch(setUser(userInfo));
    }
    if (reposError || userError || reposInfo?.length === 0 || userInfo === null) {
      setError(true);
    } else {
      setError(false);
    }
  }, [reposInfo, userInfo, reposLoading, userLoading]);

  // if (isLoading) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100vh",
  //         backgroundColor: "white",
  //       }}
  //     >
  //       Loading...
  //     </div>
  //   );
  // }

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;
    setUsername(username);
  };

  return (
    <div className="outer-container">
      {loading && (
        <div className="">
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt="loading"
          />
        </div>
      )}
      {repos.length === 0 && (
        <div className="no-result">
          <span>There are no results!</span>
        </div>
      )}
      <div className="inner-container">
        <HipoLogoIcon />
        <h1>Github Profile Explorer</h1>
        <ul>
          {repos?.slice(0, 3).map((repo) => (
            <li key={repo.name}>
              <a href={repo.html_url}>{repo.name}</a>
            </li>
          ))}
        </ul>
        <input type="text" placeholder="Type username" onChange={handleSearch} />
        <Link href={`/result?username=${username}`} className="link">
          Show User
        </Link>
      </div>
      <div className="error-box mobile">
        {error && (
          <ErrorAlert
            message={
              status.toString() &&
              "API rate limit exceeded.(But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)"
            }
          />
        )}
      </div>
    </div>
  );
};
