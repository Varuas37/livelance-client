import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = ({
    component: Component,
    //add back isAuthenticated
    auth: { loading, isAuthenticated },
    ...rest
}) => (
    <Route
        {...rest}
        render={(props) =>
            loading ? null : isAuthenticated ?(//add back : isAuthenticated ?
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
