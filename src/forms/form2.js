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

const PaymentDetails = ({handleNext}) => {
    const classes = useStyles();

    return (
        <Formik
            initialValues={{ email: '', price: 0, item: '' }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                price: Yup.number()
                    .max(10000, 'must be less than 10000')
                    .required('Required'),
                item: Yup.string()
                    .oneOf(
                    ['jacket', 'shirt', 'shoes', 'socks'],
                    'Invalid Job Type'
                    )
                    .required('Required'), 
            })}
            onSubmit={(values) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values));
                    handleNext();
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
                                id="email"
                                label="Email"
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                {...formik.getFieldProps('email')}
                            />

                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null}

                            <TextField
                                id="price"
                                label="Price"
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                {...formik.getFieldProps('price')}
                            />
                            
                            {formik.touched.price && formik.errors.price ? (
                                <div>{formik.errors.price}</div>
                            ) : null}                    
                            <TextField
                                id="item"
                                select
                                label="Select"
                                fullWidth
                                helperText="Please select your Item"
                                {...formik.getFieldProps('item')}
                            >
                            <MenuItem value="jacket">
                                    Jacket
                                </MenuItem>
                                <MenuItem value="shirt">
                                    Shirt
                                </MenuItem>
                                <MenuItem value="shoes">
                                    Shoes
                                </MenuItem>
                                <MenuItem value="socks">
                                    Socks
                                </MenuItem>
                                <MenuItem value="others">
                                    Others
                                </MenuItem>
        
                            </TextField>
                            {formik.touched.item && formik.errors.item ? (
                                <div>{formik.errors.item}</div>
                            ) : null}                    
                           <Button variant="outlined" color="secondary" type="submit">Next</Button>
                        </form>
                    </Grid>
                    <Grid xs={3} item price xm={4}>

                    </Grid>
                </Grid>

            )}

        </Formik>
    );
}

export default PaymentDetails;