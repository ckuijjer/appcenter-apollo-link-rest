import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import handleLoadingAndErrors from './handleLoadingAndErrors';
import Logger from './Logger';

// https://apps.exactonline.com/nl/nl-NL/V2/Apps/App?applicationName=basecone&partnerName=basecone-n-v
const QUERY = gql`
  query App($applicationName: String!, $partnerName: String!) {
    app(applicationName: $applicationName, partnerName: $partnerName) @rest(path: "/Apps/App?applicationName=:applicationName&partnerName=:partnerName", type: "App") {
      Website
      Overview
      PartnerName
      LogoUrl
    }
  }
`;

const AppCenterAppDetails = ({ data, match }) => {
  return (
    <React.Fragment>
      <Logger data={data} />
    </React.Fragment>
  );
};

export default graphql(QUERY, {
  options: ({ match }) => ({ variables: { applicationName: match.params.applicationName, partnerName: match.params.partnerName } }),
})(handleLoadingAndErrors(AppCenterAppDetails));
