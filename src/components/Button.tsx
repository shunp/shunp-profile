
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

export default withStyles(theme => ({
    root: {
        border: '1px solid',
        borderRadius: 0,
        fontWeight: theme.typography.fontWeightMedium,
        padding: theme.spacing(2, 4),
        fontSize: theme.typography.pxToRem(14),
        boxShadow: 'none',
        '&:active, &:focus': {
            boxShadow: 'none',
        },
    },
}))(Button)