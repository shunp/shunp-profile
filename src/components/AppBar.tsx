import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'

function AppBar(props: any) {
    return <MuiAppBar elevation={0} position="static" {...props} style={{ background: 'transparent' }} />;
}

export default AppBar