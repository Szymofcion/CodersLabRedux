import { connect } from "react-redux";
import UserInput from "../components/UserInput";
import { addUser } from "../redux/actions";
const mapDispatchToProps = (dispatch) => {
  return {
    onUserAdd: (title) => dispatch(addUser(title)),
  };
};

export default connect(mapDispatchToProps)(UserInput);
