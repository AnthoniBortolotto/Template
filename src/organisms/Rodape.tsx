import { Card, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import { createStyles, WithStyles, withStyles } from '@material-ui/styles';
import React, { Component } from 'react'
export interface Props extends WithStyles<typeof styles> {

}

export interface State {

}
const styles = (theme:any) => createStyles({
    rodapeStyle: {
        bottom: '0',
        color: 'rgba(59, 63, 63, 0.781)',
        marginTop: '0.5rem',
        position: 'absolute',
        width: '100%',
        [theme.breakpoints.up('xs')]: {
            display: 'none'
        },
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        },
    },
    textTypographyStyle: {
        borderTop: '1px solid #dee2e6',
        color: 'rgba(59, 63, 63, 0.781)',
        fontFamily: 'Arial, sans-serif',
        fontSize: '12pt',
        marginBottom: '1rem',
        paddingTop: '1rem',
        textAlign: 'center',
        width: '100%'
    },
});
class Rodape extends React.Component<Props, State> {

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.rodapeStyle}>
                <Typography className={classes.textTypographyStyle}>Loginha&trade; Todos os direitos reservados &copy; 2020</Typography>
            </Card>
        );
    }
}

export default withStyles(styles)(Rodape);