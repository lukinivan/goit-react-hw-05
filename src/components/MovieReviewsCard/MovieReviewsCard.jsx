export const MovieReviewsCard = ({ review }) => {
  const {
    author,
    author_details: { avatar_path },
    content,
    created_at,
  } = review;

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${avatar_path}`} alt=""></img>
      <h3>{author}</h3>
      <p>{created_at}</p>
      <p>{content}</p>
    </div>
  );
};
