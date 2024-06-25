import css from "./LoadMore.module.css";

export const LoadMore = ({ onClick }) => {
  return (
    <button className={css.btn} type="button" onClick={onClick}>
      Load More
    </button>
  );
};
