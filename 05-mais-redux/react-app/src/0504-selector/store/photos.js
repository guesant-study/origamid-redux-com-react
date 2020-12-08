import { createAsyncSlice } from "./helper/createAsyncSlice";

const slice = createAsyncSlice({
  name: "photos",
  initialState: {
    cache: 5000,
  },
  fetchConfig: () => {
    return {
      url:
        "https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=10&_user=0",
      options: {
        method: "GET",
        cache: "no-store",
      },
    };
  },
});

export const getOverFiveKG = (state) => {
  const { data } = state.photos;
  return data?.filter(({ peso }) => peso >= 5);
};

export const fetchPhotos = slice.asyncAction;

export default slice.reducer;
