import Link from "next/link";
import { LinkIcon } from "../icons/LinkIcon";
import Image from "next/image";
import { useAppSelector } from "@/store";
import { useEffect, useState } from "react";
import { useGetReposQuery, useGetUserQuery } from "../service";
import { setLoading, setRepos, setUser } from "@/store/slice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

export const ResultPage = () => {
  const dispatch = useDispatch();
  const loading = useAppSelector((state) => state.repo.loading);
  const repos = useAppSelector((state) => state.repo.repos);
  const user = useAppSelector((state) => state.repo.user);
  const router = useRouter();
  const { username } = router.query;
  console.log(username);
  const {
    data: reposInfo,
    isLoading: reposLoading,
    error: reposError,
    currentData,
  } = useGetReposQuery({
    name: username as string,
  });
  const {
    data: userInfo,
    isLoading: userLoading,
    error: userError,
  } = useGetUserQuery({
    name: username as string,
  });
  const [numReposToShow, setNumReposToShow] = useState(2);
  useEffect(() => {
    setLoading(reposLoading || userLoading);
    if (reposInfo && userInfo) {
      dispatch(setRepos(reposInfo));
      dispatch(setUser(userInfo));
    }
  }, [reposInfo, userInfo, reposLoading, userLoading]);

  const handleLoadMore = () => {
    setNumReposToShow(numReposToShow + 2);
  };

  console.log("Error", userError);

  // if user reload the page we redirect to home page

  return (
    <div className="container">
      <div className="result-box">
        <div className="user-card">
          <div className="row-1">
            {/* {repos?.map((repo) => ( */}
            <>
              <div className="profile">
                <img src={user.avatar_url} alt="avatar" width={200} height={200} />
                <span className="avatar-name">{user.name}</span>
                <span className="user-name">@{user.login}</span>
              </div>
              <span
                onClick={() => {
                  window.open(user.html_url, "_blank");
                }}
                className="link"
              >
                View on Github
                <LinkIcon />
              </span>
            </>
            {/* ))} */}
          </div>

          <div className="row-2">
            <div className="info-box">
              <span>{user.public_repos}</span>
              <p>Repositories</p>
            </div>
            <div className="info-box">
              <span>{user.following}</span>
              <p>Following</p>
            </div>
            <div className="info-box">
              <span>{user.followers}</span>
              <p>Followers</p>
            </div>
          </div>
        </div>
        <div className="repositories">
          <span className="title">Repositories</span>
          {repos?.slice(0, numReposToShow).map((repo) => (
            <>
              <div
                className="row"
                key={repo.id}
                onClick={() => {
                  window.open(repo.html_url, "_blank");
                }}
              >
                <div className="repo-box">
                  <div className="box-row-1">
                    <span className="name">{repo.name}</span>
                    <span className="stars-number">{repo.stargazers_count}</span>
                  </div>
                  <div className="box-row-2">
                    <span className="description">
                      {repo.description === null
                        ? "This repo is not having a description."
                        : repo.description}
                    </span>
                    <span className="stars">Stars</span>
                  </div>
                </div>
              </div>
              {/* <div className="row">
                <div className="repo-box">
                  <div className="box-row-1">
                    <span className="name">{repo.name}</span>
                    <span className="stars-number">10.906</span>
                  </div>
                  <div className="box-row-2">
                    <span className="description">This repo is for demo purposes.</span>
                    <span className="stars">Stars</span>
                  </div>
                </div>
              </div> */}
            </>
          ))}
        </div>
        <button
          onClick={() => {
            handleLoadMore();
          }}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};
