import React, {useState, useEffect} from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NewRegistrationBtn from '../component/NewRegistrationBtn.tsx';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    tableHeader: {
        backgroundColor: '#dee7ed', // change this to your preferred color
    },
    tableCell: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        borderRight: '1px solid #fff', // add a right border to all cells
    },
    tableCell1: {
        borderRight: '1px solid #d3d3d3', // add a right border to all cells
    }
  }));

export const Dashboard = (props) => {
    const location = useLocation();
    const formValues = location.state?.formValues;
    console.log("hey", formValues);
    type DataType = {
        rollNo: string;
        name: string;
        branch: string;
        semester: string;
        verification: string;
        comment: string;
        
      }[];
      const logOut = () => {
          window.localStorage.clear();
          window.location.href = "./sign-in";
        };
    const classes = useStyles();
    var data = [
        { rollNo: '20BCS057', name: 'Sahil Lagwal', branch: 'Computer Science & Engineering', semester: '8', verification: 'Pending', comment: 'Income Certificate is not valid' },
        { rollNo: '20BCS057', name: 'Sahil Lagwal', branch: 'Computer Science & Engineering', semester: '7', verification: 'Verified', comment: 'No comment' },
        { rollNo: '20BCS057', name: 'Sahil Lagwal', branch: 'Computer Science & Engineering', semester: '6', verification: 'Verified', comment: 'No comment' },
    ];
    if(formValues){
        const newEntry = { rollNo: formValues.rollno, name: formValues.firstName + " " + formValues.lastName, branch: 'Computer Science & Engineering', semester: formValues.semesterNumber, verification: 'Pending', comment: 'No comment' };
        data.push(newEntry);
    }
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h1>Dashboard</h1>
                <div style={{gap: '1rem'}}>
                <NewRegistrationBtn />
                <div onClick={logOut} className="btn btn-primary" style={{
                    backgroundColor: '#303f9f',
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
                }}>
                    Log Out
                </div>
                {/* <LogoutBtn /> */}
                </div>

            </div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead className={classes.tableHeader}>
                        <TableRow>
                            <TableCell className={classes.tableCell}>Roll No.</TableCell>
                            <TableCell className={classes.tableCell}>Name</TableCell>
                            <TableCell className={classes.tableCell}>Branch</TableCell>
                            <TableCell className={classes.tableCell}>Semester</TableCell>
                            <TableCell className={classes.tableCell}>Verification</TableCell>
                            <TableCell className={classes.tableCell}>Comment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className={classes.tableCell1}>{item.rollNo}</TableCell>
                                <TableCell className={classes.tableCell1}>{item.name}</TableCell>
                                <TableCell className={classes.tableCell1}>{item.branch}</TableCell>
                                <TableCell className={classes.tableCell1}>{item.semester}</TableCell>
                                <TableCell className={classes.tableCell1}>{item.verification}</TableCell>
                                <TableCell className={classes.tableCell1}>{item.comment}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}