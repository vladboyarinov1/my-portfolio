import React, {FC, useState} from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, {AlertProps} from '@mui/material/Alert'


type PropsType = {
    isOpen: boolean
    setStatus: (status: boolean) => void
}
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={20} ref={ref} variant="filled" {...props} />
})

export const ErrorSnackbar:FC <PropsType> = ({isOpen, setStatus}) => {
    // let error = useAppSelector<null | string>((state) => state.app.error)
    // const dispatch = useAppDispatch()
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        setStatus(false)
    }

    return (
        <>
            <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{width: '100%', backgroundColor: '#96bb7c'}}>
                    <span>Форма отправлена!</span>
                </Alert>
            </Snackbar></>
    )
}
