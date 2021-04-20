import React from "react";
import { Helmet } from "react-helmet";

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} - Items4U`}</title>
    </Helmet>
  );
};

export default MetaData;
