import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import handleLoadingAndErrors from './handleLoadingAndErrors';
import Logger from './Logger';
import AppCenterAppCard from './AppCenterAppCard';

// const QUERY = gql`
//   query Apps {
//     apps @rest(path: "/Apps", type: "Apps") {
//       hasMore
//       startPageNo
//       finalPageNo
//       applicationList {
//         applicationDetailId
//         logoUrl
//       }
//     }
//   }
// `;

const QUERY = gql`
  query Apps {
    apps @rest(path: "/Apps", type: "Apps") {
      StartPageNo
      FinalPageNo
      ApplicationList {
        ApplicationDetailId
        LogoUrl
      }
    }
  }
`;

const AppCenterApps = ({ data }) => {
  return (
    <React.Fragment>
      {/* <div>
        {data.apps.ApplicationList.map(app => (
          <AppCenterAppCard {...app} />
        ))}
      </div> */}
      <Logger data={data} />
    </React.Fragment>
  );
};



export default graphql(QUERY)(handleLoadingAndErrors(AppCenterApps));
