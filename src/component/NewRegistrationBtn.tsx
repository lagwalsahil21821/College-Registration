import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  newRegistrationBtn: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '4px',
    display: 'inline-block',
    transition: 'all 0.3s ease 0s',
    marginTop: '10px',
    marginBottom: '20px',
    alignContent: 'center',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const DashboardButton = () => {
  const classes = useStyles();
  return (
    <Link to="/registration" className={classes.newRegistrationBtn}>New Registration</Link>
  );
};
export default DashboardButton;