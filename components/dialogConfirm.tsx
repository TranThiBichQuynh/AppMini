import * as React from 'react';
import Button from '@mui/material/Button';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {Chat} from "./chat/[id]/chat";
import Link from "next/link";
export function DialogConfirm() {
    const [open, setOpen] = React.useState(false);
    const [ok, setOk] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOk = (props: any) => {
        //this.history.push('/chat')
    }
    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                相談する
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                {/*<DialogTitle id="responsive-dialog-title">*/}
                {/*    {""}*/}
                {/*</DialogTitle>*/}
                <DialogContent>
                    <DialogContentText>
                        相談を開始しますか？
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        No
                    </Button>
                    <Button autoFocus>
                        <Link href={`/chat`}>Yes</Link>
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}