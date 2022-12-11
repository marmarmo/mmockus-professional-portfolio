import {PodcastGrid} from "./PodcastGrid";

function PodcastEl() {
  return (
	<div className="PodcastEl">
	  <h1>Mornings with Marla</h1>
	<PodcastGrid
	rssfeed = "https://feeds.simplecast.com/tOjNXec5"
	height = "500px"
	width = "100%"
	></PodcastGrid>
	</div>
  );
}

export default PodcastEl;