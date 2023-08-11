import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import Slidebar from "../components/Slidebar";
import { getHomePageVideos } from "../store/reducers/GetHomePageVideos";
import { useAppDispatch, useAppSelector } from "../store/reducers/hooks";

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  useEffect(() => {
    return () => {
      dispatch(getHomePageVideos(false));
    };
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "8.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Slidebar />
      </div>
    </div>
  );
}
