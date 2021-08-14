import React, { useState } from 'react';
import PersonalDetails from './form1';
import { Typography, Button, Step, StepLabel, Stepper } from '@material-ui/core';
import PaymentDetails from './form2';
import ContactDetails from './form3';

function getSteps() {
    return ['Personal Details', 'Payment Details', 'Contact Details'];
}

function getStepContent(stepIndex, handleNext) {
    switch (stepIndex) {
        case 0:
            return <PersonalDetails handleNext={handleNext} />
        case 1:
            return <PaymentDetails handleNext={handleNext} />;
        case 2:
            return <ContactDetails handleNext={handleNext} />;
        default:
            return 'Unknown stepIndex';
    }
}

const StepperComponent = () => {

    const [activeStep, setActiveStep] = useState(0);

    const steps = getSteps();

    const handleNext = () => {
        console.log("Clicking Next")
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        < >  
            <div style={{ textAlign: "center" }}>
                <Typography variant="h3" gutterBottom>Multi Page Sign Up Form</Typography>
                <Typography variant="overline" gutterBottom>Using ReactJs, Material Ui, Formik and Yup</Typography>
            </div>
            <div style={{ textAlign: "center" }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            </div>
            <div style={{ textAlign: "center" }}>
                {activeStep == steps.length ? (
                <div>
                    <Typography variant="h4">All steps Completed</Typography>
                    <Button variant="outline" color="secondary" onClick={handleReset} >Reset</Button>
                </div>
                ) : (
                <Typography style={{ textAlign: "center" }}>{getStepContent(activeStep, handleNext)}</Typography>
                )}
            </div>
        </>
    )
}
export default StepperComponent;