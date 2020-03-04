
import React from 'react'
import AppBar from '../components/AppBar'
import { Toolbar, Link } from "@material-ui/core"

const AppAppBar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Link
                    variant="h6"
                    underline="none"
                    color="inherit"
                >
                    {/* {'SHUN / Shumpei Koike / 小池 駿平'} */}
                </Link>
            </Toolbar>
        </AppBar>
    )
}
export default AppAppBar