import React from "react"
import { Link } from 'gatsby'
import { css } from "@emotion/core"
import Header from '../components/header'

const IndexPage = () => (
    <>
        <Header/>
        <h2 > SHUMPEI KOIKE</h2>
        <p>Welcome to my profile</p>
        <p>This site is updating now.</p>
        <p>Please wait until completing it.</p>
        <div css={css`
            color: ff0;
            font-size: 4em;
        `}>Hello world!</div>
        <p>
            <Link to="/cv">CV</Link>
        </p>
    </>
)

const LayoutIndexPage = () => (
    <>
        <IndexPage />
    </>
)
export default LayoutIndexPage
