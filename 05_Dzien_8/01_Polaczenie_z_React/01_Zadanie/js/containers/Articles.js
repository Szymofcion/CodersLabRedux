import { connect } from "react-redux";
import Articles from "../components/Articles";
import { addArticle } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    users: state.users,
    articles: state.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (article) => dispatch(addArticle(article)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
