import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { YoutubePlayer } from "reactjs-media";

/*const Player = () => {
  return (
    <div className="flex justify-center mt-20">
      <YoutubePlayer
        src="https://www.themoviedb.org/movie/527774-raya-and-the-last-dragon#play=3UFWsEY8Hdc" // Reqiured
        width={1280}
        height={720}
      />
    </div>
  );
};

export default Player;*/

const queryClient = new QueryClient();

function Player(match) {
  return (
    <div className="bg-gray-700">
      <QueryClientProvider client={queryClient}>
        <div className="flex justify-center mt-20">
          <YoutubePlayer
            src={YoutubeUrl({
              Id: match.match.params.id,
              type: match.match.params.type,
            })} // Reqiured
            width={1280}
            height={720}
          />
        </div>
      </QueryClientProvider>
    </div>
  );
}

function YoutubeUrl(props: { Id: any; type: any }) {
  const { isLoading, error, data } = useQuery(
    ["movieSearch", props.Id],
    () =>
      fetch(
        `
        https://api.themoviedb.org/3/${props.type}/${props.Id}/videos?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US`
      ).then((res) => res.json()),
    {}
  );

  if (isLoading) return <div></div>;

  if (error) return <div> {JSON.stringify(error)} </div>;

  return `https://youtu.be/${data.results[0].key}`;
}

export default Player;
