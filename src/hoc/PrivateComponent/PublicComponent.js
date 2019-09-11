import {connect} from "react-redux";

import {isAuth} from "../../utility";

const PublicComponent = (props) => {
    return !isAuth(props.token) ? props.children : null;
};

export default connect((state) => ({
    token: state.auth.token
}))(PublicComponent);