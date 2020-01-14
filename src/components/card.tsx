import React from 'react'
import { Link } from "gatsby-theme-material-ui"
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

interface Props {
    title: string
    explain: string
    to: string
}

const TopCard = (props: Props) => {
    return (
        <Card>
            <Link to={props.to}>
                <CardActionArea>
                    <CardMedia
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.explain}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    )
}

export default TopCard