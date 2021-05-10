import Movies from "../Components/Data/MovieLibrary.json";

export const Identifier = (match) => {
  console.log(match.match.parms.id);
  console.log(Movies[match.match.params.id]);
  let A = Movies[match.match.params.id];
  return A;
};

/*export const Identifier = (match) => {
  console.log(match.match.parms.id);
  return console.log(Movies[match.match.params.id]);
};*/
