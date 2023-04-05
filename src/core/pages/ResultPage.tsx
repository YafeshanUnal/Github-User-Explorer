import Link from "next/link";
import { LinkIcon } from "../icons/LinkIcon";
import Image from "next/image";
export const ResultPage = () => {
  const avatar_url = "https://avatars.githubusercontent.com/u/1?v=4";
  const avatar_name = "John Doe";
  const user_name = "octotat";
  const loading = false;
  return (
    <div className="container">
      <div className="result-box">
        <div className="user-card">
          <div className="row-1">
            <div className="profile">
              <img src={avatar_url} alt="avatar" width={200} height={200} />
              <span className="avatar-name">{avatar_name}</span>
              <span className="user-name">{user_name}</span>
            </div>
            <Link href={""} className="link">
              View on Github
              <LinkIcon />
            </Link>
          </div>
          <div className="row-2">
            <div className="info-box">
              <span>8</span>
              <p>Repositories</p>
            </div>
            <div className="info-box">
              <span>9</span>
              <p>Following</p>
            </div>
            <div className="info-box">
              <span>5.1 K</span>
              <p>Followers</p>
            </div>
          </div>
        </div>
        <div className="repositories">
          <span className="title">Repositories</span>
          <div className="row">
            <div className="repo-box">
              <div className="box-row-1">
                <span className="name">Repo Name</span>
                <span className="stars-number">10.906</span>
              </div>
              <div className="box-row-2">
                <span className="description">This repo is for demo purposes.</span>
                <span className="stars">Stars</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="repo-box">
              <div className="box-row-1">
                <span className="name">Linguist</span>
                <span className="stars-number">10.906</span>
              </div>
              <div className="box-row-2">
                <span className="description">This repo is for demo purposes.</span>
                <span className="stars">Stars</span>
              </div>
            </div>
          </div>
        </div>
        <button>{loading ? "Loading..." : "Load More"}</button>
      </div>
    </div>
  );
};
