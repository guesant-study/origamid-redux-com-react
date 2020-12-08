import React from "react";
import { useDispatch } from "react-redux";
import { loadNewPhotos } from "../store/photos";
import PhotosContent from "./PhotosContent";
import PhotosLoadMore from "./PhotosLoadMore";

const Photos = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadNewPhotos(1));
  }, [dispatch]);
  return (
    <div>
      <PhotosContent />
      <PhotosLoadMore />
    </div>
  );
};

export default Photos;
