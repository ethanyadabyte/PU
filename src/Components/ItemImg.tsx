interface II {
  Profile?: any;
  Poster?: any;
  Type?: any;
}

export const ItemImg = (Profile?: any, Poster?: any, Type?: any) => {
  let R = Poster;
  if (Type === "person") {
    R = Profile;
  }
  return R;
};
