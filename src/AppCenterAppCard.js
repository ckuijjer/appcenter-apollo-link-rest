import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
  },
  media: {
    height: 100,
  },
};

const AppCenterAppCard = ({ LogoUrl, ApplicationName, classes }) => {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={LogoUrl}
      />
      <CardContent>
        <Typography type="headline" component="h2">
          {ApplicationName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(AppCenterAppCard);
