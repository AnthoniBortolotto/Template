import { createStyles, Typography, WithStyles, withStyles } from '@material-ui/core';
import React from 'react'

export interface Props extends WithStyles<typeof styles> {
    
}
 
export interface State {
    
}
const styles = (theme:any) => createStyles({})
class PaginaNaoEncontrada extends React.Component<Props, State> {
    constructor(props:Props){
        super(props);
    }
    render() { 
        const { classes } = this.props;
        if(window.location.pathname === '/AddEdit' || window.location.pathname === '/Deletar') return(<></>)
        return (  
             <Typography variant="h3">Você saiu do espaço tempo não há nada aqui</Typography>
        );
    }
}
 
export default withStyles(styles)(PaginaNaoEncontrada);