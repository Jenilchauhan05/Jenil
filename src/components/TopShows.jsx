import ListPage from "./ListPage";

function TopShows() {
  // The props now correctly point to TV shows data
  return <ListPage title="Top 250 TV Shows" apiEndpoint="tv/top_rated" mediaType="tv" />;
}

export default TopShows;