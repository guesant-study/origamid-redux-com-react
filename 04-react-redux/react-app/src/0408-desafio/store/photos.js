const { createAsyncSlice } = require("./helper/createAsyncSlice");

const photos = createAsyncSlice({
  name: "photos",
  initialState: {
    list: [],
    page: 0,
    infinity: true,
  },
  reducers: {
    addPhotos(state, action) {
      state.list.push(...action.payload);
      state.page++;
      if (action.payload.length === 0) {
        state.infinity = false;
      }
    },
    removePhotos(state) {
      state.pages = 0;
      state.infinity = true;
      state.list = [];
      state.data = null;
    },
  },
  fetchConfig: (page = 1) => ({
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
    options: {
      method: "GET",
      cache: "no-cache",
    },
  }),
});

export const { addPhotos, removePhotos } = photos.actions;
export const fetchPhotos = photos.asyncAction;

export const loadNewPhotos = (page = 1) => async (dispatch) => {
  const { payload } = await dispatch(fetchPhotos(page));
  await dispatch(addPhotos(payload));
};

export default photos.reducer;
