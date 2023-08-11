import { configureStore, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../Types";
import { getHomePageVideos } from "./reducers/GetHomePageVideos";

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideos: [],
};

const YoutubeSlise = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      // state.videos = action.payload.parseData;
      // state.nextPageToken = action.payload.nextPageToken;
    });
  },
});

export const store = configureStore({
  reducer: {
    youtubeApp: YoutubeSlise.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
