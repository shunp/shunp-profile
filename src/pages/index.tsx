import React from "react"
import Header from '../components/header'
import Container from '@material-ui/core/Container';
import TopCard from '../components/card'

export default () => (
    <>
        <Header />
        <Container maxWidth="md">
            <TopCard title="Processing" explain="AAA" to="/processing" />
            <TopCard title="CV" explain="BBB" to="/cv" />
        </Container>
    </>
)