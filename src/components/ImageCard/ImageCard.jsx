import css from "./ImageCard.module.css";

export const ImageCard = ({ regular, small, description, openModal }) => {
  return (
    <div className={css.imageCard}>
      <img
        src={small}
        alt={description}
        onClick={() => openModal({ regular, description })}
      />
    </div>
  );
};
