import React, { Fragment } from "react";
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { removeAlert } from "../../../application/redux/action/alert"
const Alert = ({ alerts, removeAlert }) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
  <Fragment>
    <div className="fixed flex items-end justify-center px-4 py-6 pointer-events-none inset-10 sm:p-6 sm:items-start sm:justify-end z-100">
      <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg pointer-events-auto bg-whitish dark:bg-gunMetal dark:text-white ring-1 ring-black ring-opacity-5">
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0" style={{ justifyContent: "center" }}>
              <i className={alert.icon} style={{ color: "red" }} />
              {console.log(alert.icon)}
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className={`text-sm font-medium text-${alert.alertType}-900`}>
                {alert.title}
              </p>
              <p className={`mt-1 text-sm text-${alert.alertType}-500`}>
                {alert.msg}
              </p>
            </div>
            <div className="flex flex-shrink-0 ml-4">
              <button className="inline-flex text-black rounded-md bg-whitish dark:bg-lightDarkCharcoal hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greenCharcoal" onClick={removeAlert}>
                <span className="sr-only">Close</span>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
  removeAlert: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  alerts: state.alert
})
export default connect(mapStateToProps, { removeAlert })(Alert);