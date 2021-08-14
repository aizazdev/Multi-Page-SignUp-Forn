import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Typography, Button } from '@material-ui/core';
import { Formik, Form, useField, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            justifyContent: "center",
            alignItems: "center",

        },
    },
}));

const PersonalDetails = ({handleNext}) => {
    const classes = useStyles();

    return (
        <Formik
            initialValues={{ firstName: '', lastName: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values));
                    handleNext()
                }, 400);
            }}
        >
            {formik => (
                <Grid container spacing={3}>
                    <Grid xs={3} item xm={4}>

                    </Grid>
                    <Grid item xs={6} xm={8}>

                        <form className={classes.root} noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                            <TextField
                                id="firstName"
                                label="First Name"
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                {...formik.getFieldProps('firstName')}
                            />
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <div>{formik.errors.firstName}</div>
                            ) : null}
                            <TextField
                                id="lastName"
                                label="LastName"
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                {...formik.getFieldProps('lastName')}
                            />
                            {formik.touched.lastName && formik.errors.lastName ? (
                                <div>{formik.errors.lastName}</div>
                            ) : null}                    
                           <Button variant="outlined" color="secondary" type="submit">Next</Button>
                        </form>
                    </Grid>
                    <Grid xs={3} item xm={4}>

                    </Grid>
                </Grid>

            )}

        </Formik>
    );
}

export default PersonalDetails;