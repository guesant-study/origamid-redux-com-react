import React from "react";
import { useSelector } from "react-redux";
import styles from "./PhotosContent.module.css";

const PhotosContent = () => {
  const { list } = useSelector((state) => state.photos);

  return (
    <ul className={styles.list}>
      {list.map((photo, idx) => (
        <li key={[photo.id, idx].join("-")} className={styles.listItem}>
          <img src={photo.src} alt={photo.title} />
          <h2>{photo.title}</h2>
          <span>{photo.acessos}</span>
        </li>
      ))}
    </ul>
  );
};

export default PhotosContent;
