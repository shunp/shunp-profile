import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import HeroLayout from './HeroLayout'
import Typography from '../components/Typography';
import { Grid } from '@material-ui/core';
import Button from '../components/Button'

const styles = theme => ({
  background: {
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 230,
    marginTop: '50px',
    color: 'white',
    borderColor: 'white',
  },
  title: {
    color: "white",
  },
  introduceBox: {
    color: "white",
    marginTop: "20px"

  }
})

const Hero = (props) => {
  const { classes, url } = props
  return (
    <HeroLayout backgroundClassName={classes.background} backgroundUrl={url.background.childImageSharp.fixed.src}>
      <Grid container>
        <Grid item xs={12}>
          <Typography align="center" variant="h4" marked="center" className={classes.title}>
            Software Developer
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img src={url.person.childImageSharp.fixed.src} alt="Logo" />
        </Grid>
        <Grid item xs={8}>
          <div className={classes.introduceBox}>
            <Typography align="right" variant="h5" marked="center" className={classes.title}>
              SHUN
            </Typography>
            <Typography align="right" variant="h6" marked="center" className={classes.title}>
              Shumpei Koike
            </Typography>
            <Typography align="right" variant="h6" marked="center" className={classes.title}>
              小池 駿平
            </Typography>
            <Typography align="right" variant="h6" marked="center" className={classes.title}>
              shunpei42ba@gmail.com
            </Typography>
          </div>
          <Button className={classes.button}>KNOW MORE</Button>
        </Grid>
      </Grid>
    </HeroLayout>
  )
}

export default withStyles(styles)(Hero)