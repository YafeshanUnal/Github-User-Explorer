interface Repo {
  id: string;
  full_name: string;
  html_url: string;
  name: string;
  stargazers_count: number;
  description: string;
  owner: {
    login: string;
    id: string;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: false;
  };
}

interface User {
  name: string;
  avatar_url: string;
  following: number;
  followers: number;
  public_repos: number;
  html_url: string;
  login: string;
}

interface IconProps {
  className?: string;
}
