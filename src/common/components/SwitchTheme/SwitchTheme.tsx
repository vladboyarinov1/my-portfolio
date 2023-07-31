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
        <FormGroup style={{paddingTop: '10px', display: 'flex', alignItems: 'center'}}>
            <FormControlLabel
                control={<Switch color='success'  size="medium" defaultChecked={isDark}
                                 onChange={(e) => setDarkMode(e.currentTarget.checked)}/>}
                label={isDark ? < DarkModeIcon style={{display: 'flex', alignItems: 'center'}} fontSize={'small'}/> :
                    <LightModeIcon  style={{display: 'flex', alignItems: 'center'}} fontSize={'small'}/>}/>
        </FormGroup>
    );
};