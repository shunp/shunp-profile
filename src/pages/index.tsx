import React from "react"
import { Link } from 'gatsby'
import { css } from "@emotion/core"
import { baseStyle } from '../styles'
import styled from '@emotion/styled'
import Header from '../components/header'
// import { Paper } from '@material-ui/core'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const IndexPage = ({ className }) => (
    <>
        <Header />
        <Container maxWidth="md">
            <Paper variant="outlined">
            </Paper>
            <main className={className}>
                <h2> SHUMPEI KOIKE</h2>
                <p>Welcome to my profile</p>
                <p>This site is updating now.</p>
                <p>Please wait until completing it.</p>
                <p>
                    <Link to="/cv">CV</Link>
                </p>
            </main>
        </Container>


    </>
)

const LayoutIndexPage = styled(IndexPage)`
    ${baseStyle}
`

export default LayoutIndexPage
