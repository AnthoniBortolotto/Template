import { AppBar, Button, colors, createMuiTheme, createStyles, Grid, makeStyles, withStyles, WithStyles,} from '@material-ui/core';
import React, { Component } from 'react';
import { Link} from 'react-router-dom';

export interface Props extends WithStyles<typeof styles> {

}

export interface State {

}
//@ts-ignore
import logo from "../atoms/img/logo.jpg";

const styles = (theme:any) => createStyles({
    linksBtnsCabecarioStyle:{
        '&:hover': {
            textDecoration: 'none'
        },
    }
})

class Cabecario extends React.Component<Props, State> {
    
    render() {
        const { classes } = this.props;
        return (
            <AppBar color="primary" variant="outlined" position="static">
                <Grid container direction="row" justify="space-between">
                    <Grid item> <img alt="Logo" src={logo} /> </Grid>
                    <Grid item className="navbar-dark nav menu">
                        <ul className="lista__menu">
                            <li className="lista__menu__item"><Link className={classes.linksBtnsCabecarioStyle} to="/"><Button variant="contained" color="secondary">Inicio</Button></Link></li>
                            <li className="lista__menu__item"><Link className={classes.linksBtnsCabecarioStyle} to="/Sobre"><Button variant="contained" color="secondary">Sobre-nos</Button></Link></li>
                        </ul>
                    </Grid>
                </Grid>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Cabecario);