import React, {useState} from 'react';
import { Formik, Form } from 'formik';
import {makeStyles} from '@material-ui/core/styles';
import * as Yup from 'yup';
import {
    Container,
    Grid,
    Typography
  } from '@material-ui/core';
import Textfield from '../component/FormsUI/Textfield';
import Select from '../component/FormsUI/Select';
import DateTimePicker from '../component/FormsUI/DataTimePicker';
import Checkbox from '../component/FormsUI/Checkbox';
import Button from '../component/FormsUI/Button';
import countries from '../data/countries.json';
import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
  
  const useStyles = makeStyles((theme) => ({
    formWrapper: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(8),
    },
  }));

  const INITIAL_FORM_STATE = {
    rollno: '',
    semesterNumber: '',
    department: '',
    programme: '',
    firstName: '',
    lastName: '',
    fatherName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    permaaddressLine1: '',
    permaaddressLine2: '',
    permacity: '',
    permastate: '',
    permacountry: '',
    sgpi: '',
    cgpi: '',
    courseCode: '',
    courseName: '',
    studentDeclaration: false,
    amount: '',
    transactionNumber: '',
    dateOfTransaction: '',
    termsOfService: false
  };
  
  const FORM_VALIDATION = Yup.object().shape({
    rollno: Yup.string()
        .required('Required'),
    semesterNumber: Yup.number()
        .required('Required'),
    department: Yup.string()
        .required('Required'),
    programme: Yup.string()
        .required('Required'),
    firstName: Yup.string()
      .required('Required'),
    lastName: Yup.string()
      .required('Required'),
    fatherName: Yup.string()
        .required('Required'),
    email: Yup.string()
      .email('Invalid email.')
      .required('Required'),
    phone: Yup.number()
      .integer()
      .typeError('Please enter a valid phone number')
      .required('Required'),
    addressLine1: Yup.string()
      .required('Required'),
    addressLine2: Yup.string(),
    city: Yup.string()
      .required('Required'),
    state: Yup.string()
      .required('Required'),
    country: Yup.string()
      .required('Required'),
    permaaddressLine1: Yup.string()
      .required('Required'),
    permaaddressLine2: Yup.string(),
    permacity: Yup.string()
      .required('Required'),
    permastate: Yup.string()
      .required('Required'),
    permacountry: Yup.string()
      .required('Required'),
    sgpi: Yup.number()
        .required('Required'),
    cgpi: Yup.number()
        .required('Required'),
    courseCode: Yup.string(),
    courseName: Yup.string(),
    studentDeclaration: Yup.boolean()
      .oneOf([true], 'The student declaration must be accepted.')
      .required('The student declaration must be accepted.'),
    amount: Yup.number()
        .required('Required'),
    transactionNumber: Yup.string()
        .required('Required'),
    dateOfTransaction: Yup.date()
      .required('Required'),
    termsOfService: Yup.boolean()
      .oneOf([true], 'The terms and conditions must be accepted.')
      .required('The terms and conditions must be accepted.'),
  });

export const Bachelor = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
    return (
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" style={{ marginTop: '50px' }}>Registration Form</Typography>
          </Grid>
          <Grid item xs={12}>
            <Container maxWidth="md">
              <div className={classes.formWrapper}>
    
                <Formik
                  initialValues={{
                    ...INITIAL_FORM_STATE
                  }}
                  validationSchema={FORM_VALIDATION}
                  onSubmit={(values, {resetForm}) => {
                    console.log(values);
                    resetForm();
                    setOpen(true);
                  }}
                >
                  <Form>
                    <Grid container spacing={2}>
    
                      <Grid item xs={12}>
                        <Typography style={{fontSize: '1.4rem'}}>
                          Your details
                        </Typography>
                      </Grid>

                      <Grid item xs={6}>
                        <Textfield
                          name="rollno"
                          label="Roll No."
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Select
                          name="semesterNumber"
                          label="Registration Semester Number"
                          options={[1,2,3,4,5,6,7,8,9,10]}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Select
                          name="department"
                          label="Department"
                          options={[
                            'Computer Science & Engineering',
                            'Civil Engineering',
                            'Chemical Engineering',
                            'Electronics & Communication Engineering', 
                            'Electrical Engineering', 
                            'Mathematics and Computational Engineering', 
                            'Material Science', 
                            'Mechanical Engineering', 
                            'Physics Engineering',
                            'Architecture & Planning',
                        ]}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Select
                          name="programme"
                          label="Programme"
                          options={[
                            'B.Tech',
                            'B.Arch',
                            'Dual Degree',
                        ]}
                        />
                      </Grid>
    
                      <Grid item xs={6}>
                        <Textfield
                          name="firstName"
                          label="First Name"
                        />
                      </Grid>
    
                      <Grid item xs={6}>
                        <Textfield
                          name="lastName"
                          label="Last Name"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Textfield
                          name="fatherName"
                          label="Father's Name"
                        />
                      </Grid>
    
                      <Grid item xs={12}>
                        <Textfield
                          name="email"
                          label="Email"
                        />
                      </Grid>
    
                      <Grid item xs={12}>
                        <Textfield
                          name="phone"
                          label="Phone"
                        />
                      </Grid>
    
                      <Grid item xs={12}>
                      <Typography style={{fontSize: '1.4rem'}}>
                          Address for Correspondence
                        </Typography>
                      </Grid>
    
                      <Grid item xs={12}>
                        <Textfield
                          name="addressLine1"
                          label="Address Line 1"
                        />
                      </Grid>
    
                      <Grid item xs={12}>
                        <Textfield
                          name="addressLine2"
                          label="Address Line 2"
                        />
                      </Grid>
    
                      <Grid item xs={6}>
                        <Textfield
                          name="city"
                          label="City"
                        />
                      </Grid>
    
                      <Grid item xs={6}>
                        <Textfield
                          name="state"
                          label="State"
                        />
                      </Grid>
    
                      <Grid item xs={12}>
                        <Select
                          name="country"
                          label="Country"
                          options={countries}
                        />
                      </Grid>

                      <Grid item xs={12}>
                      <Typography style={{fontSize: '1.4rem'}}>
                          Permanent Address
                        </Typography>
                      </Grid>
    
                      <Grid item xs={12}>
                        <Textfield
                          name="permaaddressLine1"
                          label="Address Line 1"
                        />
                      </Grid>
    
                      <Grid item xs={12}>
                        <Textfield
                          name="permaaddressLine2"
                          label="Address Line 2"
                        />
                      </Grid>
    
                      <Grid item xs={6}>
                        <Textfield
                          name="permacity"
                          label="City"
                        />
                      </Grid>
    
                      <Grid item xs={6}>
                        <Textfield
                          name="permastate"
                          label="State"
                        />
                      </Grid>
    
                      <Grid item xs={12}>
                        <Select
                          name="permacountry"
                          label="Country"
                          options={countries}
                        />
                      </Grid>
                      
                      <Grid item xs={12} style={{marginTop: '20px'}}>
                        <hr color='#d3d3d3'></hr>
                      </Grid>

                      <Grid item xs={12}>
                      <Typography style={{fontSize: '1.4rem'}}>
                          Result of Previous Semester
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={6}>
                        <Textfield
                          name="sgpi"
                          label="SGPI"
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Textfield
                          name="cgpi"
                          label="CGPI"
                        />
                      </Grid>

                      <Grid item xs={12}>
                      <Typography style={{fontSize: '1.4rem'}}>
                          Course(s) with F Grade, if any
                        </Typography>
                      </Grid>

                      <Grid item xs={4}>
                        <Textfield
                          name="courseCode"
                          label="Course Code"
                        />
                      </Grid>

                      <Grid item xs={8}>
                        <Textfield
                          name="courseName"
                          label="Course Name"
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <Textfield
                          name="courseCode"
                          label="Course Code"
                        />
                      </Grid>

                      <Grid item xs={8}>
                        <Textfield
                          name="courseName"
                          label="Course Name"
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <Textfield
                          name="courseCode"
                          label="Course Code"
                        />
                      </Grid>

                      <Grid item xs={8}>
                        <Textfield
                          name="courseName"
                          label="Course Name"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Typography variant="h5" align="center" style={{ marginTop: '20px' }}>Student Declaration</Typography>
                      </Grid>

                      <Grid item xs={12} style={{marginBottom: '20px'}}>
                        <Checkbox
                          name="studentDeclaration"
                          legend={""}
                          label="I hereby declare that the information furnished by me in this Registration Form is true and correct. I have not concealed any information. However, if any information furnished herein is incorrect or incomplete, I understand that I am liable to appropriate action and I also agree to forego my registration."
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <hr color='#d3d3d3'></hr>
                      </Grid>

                      <Grid item xs={12}>
                      <Typography style={{fontSize: '1.4rem'}}>
                          Semester registration fee details
                        </Typography>
                      </Grid>

                      <Grid item xs={6}>
                        <Textfield
                          name="amount"
                          label="Amount"
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Textfield
                          name="transactionNumber"
                          label="SBI Collect Transaction Number"
                        />
                      </Grid>
    
                      <Grid item xs={12}>
                        <DateTimePicker
                          name="dateOfTransaction"
                          label="Date of Transaction"
                        />
                      </Grid>
    
                      {/* <Grid item xs={12}>
                        <Textfield
                          name="message"
                          label="Message"
                          multiline={true}
                          rows={4}
                        />
                      </Grid> */}
    
                      <Grid item xs={12}>
                        <Typography variant="h5" align="center" style={{ marginTop: '20px' }}>Undertaking for Payment/Clearance of Dues</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Checkbox
                          name="termsOfService"
                          legend=""
                          label="I undertake to pay/clear the Dues, if any, found outstanding against my name at Library, Hostel, Accounts and any other Department/Section, as per the directions/notification of the authorities."
                        />
                      </Grid>
    
                      <Grid item xs={12} style={{marginTop: '20px'}}>
                        <Button >
                          Submit
                        </Button>
                      </Grid>
    
    
                    </Grid>
    
                  </Form>
                </Formik>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                    Form submitted! You can view the status in your dashboard.
                    </Alert>
                </Snackbar>
    
              </div>
            </Container>
          </Grid>
        </Grid>
      );

};