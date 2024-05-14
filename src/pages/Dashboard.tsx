import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

export const Dashboard = () => {
    const classes = useStyles();
    const data = [
        { rollNo: 1, name: 'John Doe', branch: 'CS', semester: '8', verification: 'Verified', comment: 'No comment' },
        { rollNo: 2, name: 'Jane Doe', branch: 'IT', semester: '8', verification: 'Not Verified', comment: 'Income Certificate is not valid' },
        // Add more data as needed
    ];
    return (
        <div>
            <h1>Dashboard</h1>
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