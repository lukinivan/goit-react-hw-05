import img from "../../img/noResults.gif";

export const ErrorMessage = () => {
  return (
    <div>
      <img src={img} alt="No Request Found" width="300" height="200" />
      <h2>No request found</h2>
      <p>We couldn`t find what you searched for</p>
      <p>Try another word</p>
    </div>
  );
};
