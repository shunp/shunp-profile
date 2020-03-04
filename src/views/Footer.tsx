
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '../components/Typography'

const CopyRight = () => {
    return (
        <>
            {'© '}
            {new Date().getFullYear()}
        </>
    )
}

const useStyles = makeStyles(theme => ({

}))

const Footer = () => {
    const classes = useStyles()
    return (
        <Typography className={classes.root}>
            <Container>
                <Grid>
                    <CopyRight/>
                </Grid>
            </Container>
        </Typography>
    )
}

export default Footer