import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '../components/Button'
import ProductHeroLayout from './HeroLayout'
import Typography from '../components/Typography';
import Person from '../images/person.png'

const backgroundImage =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg"

// const personImage = Person

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
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
  const { classes } = props
  console.log(classes)
  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography align="right" variant="h4" marked="center" className={classes.title}>
        Software Developer
      </Typography>
      <div className={classes.introduceBox}>
        <Typography align="right" variant="h6" marked="center" className={classes.title}>
          SHUN / 小池 駿平 
        </Typography>
        <Typography align="right" variant="h6" marked="center" className={classes.title}>
          shunpei42ba@gmail.com
        </Typography>
      </div>
      <img src={Person} alt="Logo" />;
    </ProductHeroLayout>
  )
}

export default withStyles(styles)(Hero)