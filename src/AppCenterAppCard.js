import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

const styles = {
  card: {
  },
  media: {
    height: 100,
  },
  link: {
    textDecoration: 'none'
  }
};

const AppCenterAppCard = ({ LogoUrl, ApplicationName, PartnerName, AppSeoName, classes }) => {
  return (
    <Link to={`${PartnerName}/${AppSeoName}`} className={classes.link}>
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
    </Link>
  );
};

export default withStyles(styles)(AppCenterAppCard);
