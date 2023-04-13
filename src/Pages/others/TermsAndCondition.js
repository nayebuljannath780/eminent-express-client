import React from "react";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div>
      <h2>This is Terms and Condition page</h2>
      <>
        Go back to <Link to="/register">Register</Link>
      </>
    </div>
  );
};

export default TermsAndCondition;
