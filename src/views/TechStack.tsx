import React from 'react'
import Container from '@material-ui/core/Container'
import ButtonBase from '@material-ui/core/ButtonBase'
import { withStyles } from '@material-ui/core/styles'
import Typography from '../components/Typography'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'

import BaseScene from '../three/BaseScene'
import BlockchainAnimationScene from '../three/BlockchainAnimationScene'

const styles = theme => ({
    root: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
    },
    images: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexWrap: 'wrap',
    },
    imageWrapper: {
        position: 'relative',
        display: 'block',
        padding: 0,
        borderRadius: 0,
        height: '40vh',
        [theme.breakpoints.down('sm')]: {
            width: '100% !important',
            height: 100,
        },
        '&:hover': {
            zIndex: 1,
        },
        '&:hover $imageBackdrop': {
            opacity: 0.15,
        },
        '&:hover $imageMarked': {
            opacity: 0,
        },
        '&:hover $imageTitle': {
            border: '4px solid currentColor',
        },
    },
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: theme.palette.common.black,
        opacity: 0.5,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
})

interface TechCatalog {
    seq: number,
    imageUrl?: string,
    title: string,
    width: string
}

const newTechCatalog = (url) => {
    const techCatalogs: TechCatalog[] = [
        {
            seq: 0,
            imageUrl: url.blockchain.childImageSharp.fixed.src,
            title: 'Blockchain',
            width: '50%',
        },
        {
            seq: 1,
            imageUrl: url.cg.childImageSharp.fixed.src,
            title: '3D Graphics',
            width: '50%',
        },
        {
            seq: 2,
            imageUrl: url.web.childImageSharp.fixed.src,
            title: 'Web Development',
            width: '50%',
        },
        {
            seq: 3,
            imageUrl: url.ml.childImageSharp.fixed.src,
            title: 'Machine Learning',
            width: '50%',
        },
        {
            seq: 4,
            imageUrl: url.cloud.childImageSharp.fixed.src,
            title: 'System Architecture',
            width: '50%',
        },
        {
            seq: 5,
            imageUrl: url.processing.childImageSharp.fixed.src,
            title: 'Processing',
            width: '50%',
        },
        {
            seq: 6,
            imageUrl: url.ar.childImageSharp.fixed.src,
            title: 'AR / VR',
            width: '50%',
        },
        {
            seq: 7,
            imageUrl: url.document.childImageSharp.fixed.src,
            title: 'CV',
            width: '50%',
        }
    ]
    return techCatalogs
}

// TODO: devide
const TechStack = (props) => {
    const { classes, url } = props
    const [drawer, setDrawer] = React.useState(false)
    const [index, setIndex] = React.useState(0)
    const techCatalogs = newTechCatalog(url)
    const [catalogs, setCatalogs] = React.useState<TechCatalog[]>(techCatalogs)
    // setCatalogs(techCatalogs)
    console.log(catalogs[0])
    const toggleDrawer = (open: boolean, index?: number) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return
        }
        setDrawer(open)
        console.log(index)
        if (index !== undefined) {
            setIndex(index)
        }
    }

    // TODO: devide
    const drawerContent = () => {
        if (index == 0) {
            return (
                <div onClick={toggleDrawer(false)}>
                    <Typography
                        component="h3"
                        variant="h4"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        Blockchain Development
                        </Typography>
                    <Typography
                        component="h3"
                        variant="h6"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        Will support developing smart contracts on the blockchain.
                        </Typography>
                    <Typography
                        component="h3"
                        variant="h6"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        Will design the whole architecture how to build your system with blockchain.
                        </Typography>
                    <Divider />
                    <BlockchainAnimationScene />
                </div>
            )
        } else {
            return (
                <div onClick={toggleDrawer(false)}>
                    XXX
                    {index}
                    {catalogs[index].title}
                    <Divider />
                    <BaseScene />
                </div>
            )
        }
    }


    const Blockchain = (props) => {
        const { classes, catalogs } = props
        return (
            <ButtonBase
                key={catalogs[0].title}
                className={classes.imageWrapper}
                style={{
                    width: catalogs[0].width,
                }}
                onClick={toggleDrawer(true, 0)}
            >
                <div
                    className={classes.imageSrc}
                    style={{
                        backgroundImage: `url(${catalogs[0].imageUrl})`,
                    }}
                />
                <div className={classes.imageBackdrop} />
                <div className={classes.imageButton}>
                    <Typography
                        component="h3"
                        variant="h6"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        {catalogs[0].title}
                        <div className={classes.imageMarked} />
                    </Typography>
                </div>
            </ButtonBase>
        )
    }

    const Graphics = (props) => {
        const { classes, catalogs } = props
        return (
            <ButtonBase
                key={catalogs[1].title}
                className={classes.imageWrapper}
                style={{
                    width: catalogs[1].width,
                }}
                onClick={toggleDrawer(true, 1)}
            >
                <div
                    className={classes.imageSrc}
                    style={{
                        backgroundImage: `url(${catalogs[1].imageUrl})`,
                    }}
                />
                <div className={classes.imageBackdrop} />
                <div className={classes.imageButton}>
                    <Typography
                        component="h3"
                        variant="h6"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        {catalogs[1].title}
                        <div className={classes.imageMarked} />
                    </Typography>
                </div>
            </ButtonBase>
        )
    }

    return (
        <Container className={classes.root} component="section">
            <div className={classes.images}>
                <Blockchain classes={classes} catalogs={catalogs} />
                <Graphics classes={classes} catalogs={catalogs} />
            </div>
            <Drawer anchor="bottom" open={drawer} onClose={toggleDrawer(false)}>
                {drawerContent()}
            </Drawer>
        </Container>
    )
}
export default withStyles(styles)(TechStack)
