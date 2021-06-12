import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { CastItem } from "../Components/Container/Cast/CastItem";

const queryClient = new QueryClient();

function CastItemPage(match) {
  return (
    <div className="bg-gray-700 p-4">
      <QueryClientProvider client={queryClient}>
        <CastItemQ Id={match.match.params.id} />
      </QueryClientProvider>
    </div>
  );
}

function CastItemQ(props: { Id: string }) {
  const { isLoading, error, data } = useQuery(
    ["CastItem", props.Id],
    () =>
      fetch(
        `https://api.themoviedb.org/3/person/${props.Id}?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US`
      ).then((res) => res.json()),
    {}
  );

  if (isLoading) return <div></div>;

  if (error) return <div>An error has occurred {JSON.stringify(error)} </div>;

  return (
    <div className="ml-20">
      <CastItem
        Id={props.Id}
        name={data.name || []}
        birthday={data.birthday || []}
        known_for_department={data.known_for_department || []}
        biography={data.biography || []}
        data={data}
      />
    </div>
  );
}

export default CastItemPage;
