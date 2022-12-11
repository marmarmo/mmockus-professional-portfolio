import {PodcastGrid} from "./PodcastGrid";
import "./Podcast.css";

function PodcastEl() {
  return (
	<div className="PodcastEl">
	  <h1>Mornings with Marla</h1>
	<PodcastGrid
	rssfeed = "https://feeds.buzzsprout.com/1287095.rss"
	height = "500px"
	width = "100%"
	></PodcastGrid>
	</div>
  );
}

export default PodcastEl;