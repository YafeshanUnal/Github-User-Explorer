import Link from "next/link";
import { LinkIcon } from "../icons/LinkIcon";
import Image from "next/image";
import { useAppSelector } from "@/store";
import { useState } from "react";

export const ResultPage = () => {
  const user = useAppSelector((state) => state.repo.user);
  const repos = useAppSelector((state) => state.repo.repos);
  const loading = useAppSelector((state) => state.repo.loading);
  console.log(repos);
  console.log("link", user.html_url);

  const [numReposToShow, setNumReposToShow] = useState(2);

  const handleLoadMore = () => {
    setNumReposToShow(numReposToShow + 2);
  };

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
              <Link href={user.html_url} className="link">
                View on Github
                <LinkIcon />
              </Link>
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
