import { Button, createStyles, Grid, withStyles, WithStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import React, { Component } from 'react'
import Database from '../molecules/Database';

export interface IDeletarState {
    produto: Promise<unknown>
    id: number | undefined
}
interface Ipush {
    push(link: any): void
}
export interface IDeletarLocation {
    state: IDeletarState
}
export interface DeletarProps extends WithStyles<typeof styles> {
    location: IDeletarLocation
    history: Ipush
}

export interface DeletarState {

}
const styles = (theme: any) => createStyles({
    btnDeletarStyle: {
        marginRight: '2rem'
    },
    deletarTituloStyle: {
        marginTop: '4rem',
        marginBottom: '3rem',
        textAlign: 'center'
    },
    gridContainerStyle: {
        marginBottom: '23rem'
    }
})
class Deletar extends React.Component<DeletarProps, DeletarState> {

    constructor(props: DeletarProps) {
        super(props);
    }
    private ClicarDeletar() {
        const { id } = this.props.location.state;
        Database.deletarProduto(id as number).then(() =>{
            this.props.history.push({
                pathname: '/',
                state: {tipoAviso: 1, msg: "Produto deletado com sucesso"}
            });
        })
        .catch(() => {
            this.props.history.push({
                pathname: '/',
                state: {tipoAviso: 0, msg: "Ocorreu um erro ao deletar o produto"}
            });
        });
    }
    render(): JSX.Element {
        const { id } = this.props.location.state;
        const { classes } = this.props;
        if (id !== undefined) return (<Grid container className={classes.gridContainerStyle} alignItems="center" direction="column">
            <Grid item><Typography variant="h3" className={classes.deletarTituloStyle}>Você tem certeza que deseja deletar este produto?</Typography></Grid>
            <Grid item><Button className={classes.btnDeletarStyle} variant="contained" color="secondary" onClick={() => {
                this.ClicarDeletar();
            }}>Sim</Button>
                <Button variant="contained" color="primary" onClick={() => {
                    this.props.history.push('/');
                }}>Não</Button></Grid>
        </Grid>);
        else {
            return (<>{window.location.href = "http://localhost:8080/"}</>)
        }
    }
}

export default withStyles(styles)(Deletar);