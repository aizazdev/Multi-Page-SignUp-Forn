import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Typography, Button,MenuItem } from '@material-ui/core';
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

const ContactDetails = ({handleNext}) => {
    const classes = useStyles();

    return (
        <Formik
            initialValues={{ mobile: ''}}
            validationSchema={Yup.object({
               mobile: Yup.number()
                    .max(11, 'must be equal to 11')
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
                    <Grid xs={3} xm={4}>

                    </Grid>
                    <Grid xs={6} xm={8}>

                        <form className={
                            classes.root} noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                            
                            <TextField
                                id="mobile"
                                label="Mobile"
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                {...formik.getFieldProps('mobile')}
                            />
                            
                            {formik.touched.mobile && formik.errors.mobile ? (
                                <div>{formik.errors.mobile}</div>
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

export default ContactDetails;