import React from "react"
import Header from '../components/header'
import Hero from '../views/Hero'
import Container from '@material-ui/core/Container'
import TopCard from '../components/card'
import { Toolbar, Link } from "@material-ui/core"
import TechCategories from '../views/TechCategories'
import AppAppBar from "../views/AppAppBar"

const styles = theme => ({
})


export default () => (
    <>
        {/* <Header /> */}
        <AppAppBar />
        <Hero />
        <TechCategories />
        <Container maxWidth="md">
            <TopCard title="Processing" explain="AAA" to="/processing" />
            <TopCard title="CV" explain="BBB" to="/cv" />
            <TopCard title="Landing" explain="CCC" to="/landing" />
        </Container>
    </>
)
