import React, {FC} from 'react';
import {FormControlLabel, FormGroup, Switch} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

type PropsSwitchThemeType = {
    setDarkMode: (theme: boolean) => void
    isDark: boolean
}

export const SwitchTheme: FC<PropsSwitchThemeType> = ({setDarkMode, isDark}) => {
    return (
        <FormGroup sx={{marginTop: '7px'}}>
            <FormControlLabel
                control={<Switch size="medium" defaultChecked={false}
                                 onChange={(e) => setDarkMode(e.currentTarget.checked)}/>}
                label={isDark ? < DarkModeIcon style={{display: 'flex', alignItems: 'center'}} fontSize={'medium'}/> :
                    <LightModeIcon style={{display: 'flex', alignItems: 'center'}} fontSize={'medium'}/>}/>
        </FormGroup>
    );
};