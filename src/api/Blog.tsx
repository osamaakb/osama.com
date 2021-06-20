const BLOGS_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@osamaakb";

export const getBlogs = () => {
  return fetch(BLOGS_URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((e) => e);
};
