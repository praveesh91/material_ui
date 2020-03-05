import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
  listGroup:{
    paddingTop: '0',
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.listGroup}>
    <MenuItem>
      <img src="https://via.placeholder.com/180x110" />
    </MenuItem>
    <MenuItem dense={true} disablePadding={true}>  
      <Typography gutterBottom variant="h6" component="h6">
      Jean Donas
    </Typography>
    </MenuItem>
    <MenuItem dense={true} disablePadding={true}>
    <Typography variant="subtitle1" color="textSecondary" component="p">
      Parking Solutions Admin
    </Typography>
    </MenuItem>
    <MenuItem dense={true} disablePadding={true}>
    <Typography variant="subtitle2" color="textSecondary" component="p">
      Robert Bosch Pvt Ltd
    </Typography>
    </MenuItem>
    <MenuItem dense={true} disablePadding={true}>
      <Button variant="contained" color="secondary">Logout</Button>
    </MenuItem>

    </div>
  );
}
