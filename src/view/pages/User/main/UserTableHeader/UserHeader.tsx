import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';
import { Chip, Avatar, Button } from '@material-ui/core';
import FilterListIcon from '@mui/icons-material/FilterList';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            textAlign: 'center',
            justifyContent: 'center',
            color: theme.palette.text.secondary,
            padding: '15px 72.5px 0px 72.5px'
        },
    }),
);

export default function UserHeader() {
    const classes = useStyles();


    const saveUser = () => {

    }

    const updateUser = () => {

    }

    const deleteUser = () => {

    }
    return (
        <>
            <Grid
                className={classes.paper}
                container
                direction="row"
                justifyContent="space-between"
            >

                <Grid item xs={1}>
                    모든 캠페인
                </Grid>
                <Grid item xs={8}>

                </Grid>

                <Grid item xs={1}>
                    <Button variant="contained">생성</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained">수정</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained">삭제</Button>
                </Grid>

                <Grid item xs={1}>
                    <Chip color="primary" avatar={<Avatar>F</Avatar>} />
                </Grid>
                <Grid item xs={1}>
                    <Chip color="primary" avatar={<Avatar>F</Avatar>} />
                </Grid>
                <Grid item xs={1}>
                    <Chip color="primary" avatar={<Avatar>F</Avatar>} />
                </Grid>
                <Grid item xs={1}>
                    <Chip color="primary" avatar={<Avatar>F</Avatar>} />
                </Grid>

                <Grid item xs={7}>
                </Grid>

                <Grid item xs={1}>
                    <FilterListIcon />
                </Grid>
            </Grid>
        </>
    )
}