import { createStyles, Grid, Typography, withStyles, WithStyles } from '@material-ui/core';
import React, { Component } from 'react';
export interface SobreProps extends WithStyles<typeof styles> {

}

export interface SobreState {

}

const styles = (theme: any) => createStyles({
    sobreTituloStyle: {
        marginTop: '1rem',
        marginBottom: '2rem',
        textAlign: 'center'
    },
    sobreTextoStyle: {
        textAlign: 'justify',
        [theme.breakpoints.up('sm')]: {
            fontSize: '0.95rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem'
        },
    },
    sobreContentStyle: {
        width: '60%',
        margin: 'auto'
    }
})
class Sobre extends React.Component<SobreProps, SobreState> {
    constructor(props: SobreProps) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.sobreContentStyle}>
                <Typography variant="h3" className={classes.sobreTituloStyle}>Nossa história</Typography>
                <Typography className={classes.sobreTextoStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat accumsan nibh, sed vestibulum est dapibus vitae. Aliquam enim tortor, condimentum in feugiat blandit, varius ac elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc euismod luctus nibh. Suspendisse condimentum velit vitae eros dictum, at varius velit ullamcorper. Vestibulum nec tincidunt dui. In condimentum varius lectus, vitae ullamcorper ligula tincidunt sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse aliquam dui eu porta luctus. Proin id lectus non ante fringilla pharetra a placerat dui. Ut pellentesque tortor non tortor finibus, sit amet maximus velit tempor. Duis euismod odio ligula, ut sagittis quam hendrerit a. Nulla sollicitudin metus quis leo mollis, et cursus odio sodales. Donec ac porttitor lacus. Morbi dignissim risus non erat congue, eu porttitor sapien euismod.</Typography>
            </Grid>
        );
    }
}

export default withStyles(styles)(Sobre);