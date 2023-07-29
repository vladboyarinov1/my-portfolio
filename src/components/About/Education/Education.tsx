import * as React from 'react';
import {styled} from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import StepConnector, {stepConnectorClasses} from '@mui/material/StepConnector';
import {StepIconProps} from '@mui/material/StepIcon';
import * as dgram from 'dgram';
import {Step, StepContent, Typography} from '@mui/material';

const ColorlibConnector = styled(StepConnector)(({theme}) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage: `linear-gradient(95deg, #96bb7c, #6a8f51)`,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage: `linear-gradient(95deg, #96bb7c, #6a8f51)`,
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        minHeight: 50,
        maxWidth: 2,
        margin: 10,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean };
}>(({theme, ownerState}) => ({
    backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient(95deg, #96bb7c, #6a8f51)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient(95deg, #96bb7c, #6a8f51)',
    }),
}));

function ColorlibStepIcon(props: StepIconProps) {
    const {active, completed, className} = props;

    const icons: { [index: string]: React.ReactElement } = {
        1: <SchoolIcon/>,
        2: <PsychologyIcon/>
    };

    return (
        <ColorlibStepIconRoot
            ownerState={{completed, active}}
            className={className}
        >
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

interface StepType {
    label: string;
    description: string;
}

const steps: StepType[] = [
    {
        label: 'Belarusian National Technical University',
        description: `lalalkkkmmkkm`,

    },
    {
        label: 'IT-INCUBATOR',
        description: `lalal`,
    }
];

export function Education() {
    return (
        <Stack sx={{width: '100%'}} spacing={4}>
            <Stepper
                activeStep={1}
                connector={<ColorlibConnector/>}
                orientation="vertical"
            >
                {steps.map((label) => (
                    <Step key={label.label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                            {label.label}
                        </StepLabel>
                        <StepContent>
                            <Typography>{label.description}</Typography>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
}