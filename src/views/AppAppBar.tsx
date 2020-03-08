
import React from 'react'
import AppBar from '../components/AppBar'
import { Toolbar, Link } from "@material-ui/core"

const AppAppBar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Link
                    variant="subtitle1"
                    underline="none"
                    color="secondary"
                >
                    Introduction
                </Link>
            </Toolbar>
        </AppBar>
    )
}
export default AppAppBar