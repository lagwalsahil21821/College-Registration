import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Dashboard} from '../pages/Dashboard.tsx';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  dashboardButton: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '4px',
    display: 'inline-block',
    transition: 'all 0.3s ease 0s',
    marginTop: '10px',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const DashboardButton = ({formValues}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/dashboard1', { state: { formValues } });
  };

  return (
    <div onClick={handleClick} className={classes.dashboardButton} style={{ backgroundColor: '#303f9f',
        color: 'white',
        padding: '8px 20px',
        textDecoration: 'none',
        borderRadius: '4px',
        display: 'inline-block',
        transition: 'all 0.3s ease 0s',
        marginTop: '14px',
        marginBottom: '20px',
        alignContent: 'center',
        marginLeft: '1rem',
        cursor: 'pointer'}}>Go to Dashboard</div>
    );
  };
export default DashboardButton;