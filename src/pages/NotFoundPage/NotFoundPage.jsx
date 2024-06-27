import { Link } from "react-router-dom";
import noResults from "../../img/noResults.gif";
import css from "./NotFoundPage.module.css";
import { Container } from "../../components";

const NotFoundPage = () => {
  return (
    <Container>
      <Link className={css.goBack} to="/">
        Go Home
      </Link>
      <div className={css.imgWrap}>
        <img className={css.notFoundImg} src={noResults} alt=""></img>
        <p>Page Not Found</p>
      </div>
    </Container>
  );
};

export default NotFoundPage;
