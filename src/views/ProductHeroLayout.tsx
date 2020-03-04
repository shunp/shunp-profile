import React from 'react'
import { withStyles } from '@material-ui/styles'
import clsx from 'clsx'
import { Container } from '@material-ui/core'

const styles = theme => ({
    backdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.5,
        zIndex: -1,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -2,
    }
})

function ProductHeroLayout(props) {
    const { backgroundClassName, children, classes } = props
    return (
        <section>
            <Container>
                {children}
                <div className={classes.backdrop} />
                <div className={clsx(classes.background, backgroundClassName)} />
            </Container>
        </section>
    )
}

export default withStyles(styles)(ProductHeroLayout)