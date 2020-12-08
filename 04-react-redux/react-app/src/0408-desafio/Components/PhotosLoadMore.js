import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos } from "../store/photos";
import styles from "./PhotosLoadMore.module.css";

const PhotosLoadMore = () => {
  const { page, infinity, loading } = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(loadNewPhotos(page + 1));
  }

  // if (!infinity) return null;
  return (
    <div className={styles.buttonWrapper}>
      {infinity && (
        <button
          disabled={loading}
          onClick={handleClick}
          className={styles.button}
        >
          +
        </button>
      )}
    </div>
  );
};

export default PhotosLoadMore;
