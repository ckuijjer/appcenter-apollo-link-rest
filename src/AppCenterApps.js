import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Grid from 'material-ui/Grid';
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
        ApplicationName
        LogoUrl
      }
    }
  }
`;

const AppCenterApps = ({ data }) => {
  return (
    <React.Fragment>
      <div style={{ padding: 16, backgroundColor: '#eeeeee' }}>
        <Grid container spacing={16} alignItems="stretch">
          {data.apps.ApplicationList.map(app => (
            <Grid item sm={4} md={3} zeroMinWidth>
              <AppCenterAppCard {...app} />
            </Grid>
          ))}
        </Grid>
      </div>
      <Logger data={data} />
    </React.Fragment>
  );
};



export default graphql(QUERY)(handleLoadingAndErrors(AppCenterApps));
