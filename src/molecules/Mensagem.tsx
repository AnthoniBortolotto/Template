import { Card, CardContent, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import TiposMensagem from '../atoms/TiposMensagem';

interface MensagemProps {
  tipoMensagem: TiposMensagem,
  msg: string
}
const useStyles = makeStyles({
  BlocoMensagemErroStyle: {
    position: 'absolute',
    bottom: '5rem',
    right: '1rem',
    backgroundColor: "#b71c1c"
  },
  BlocoMensagemDesapareceStyle: {
    display: 'none',
    position: 'absolute'
  },
  BlocoMensagemAcertoStyle: {
    position: 'absolute',
    bottom: '5rem',
    right: '1rem',
    backgroundColor: "#2196f3"
  },
  txtMensagemStyle: {
    textAlign: 'left',
    color: '#ffffff'
  }
});

function Mensagem(props: MensagemProps): JSX.Element {
  const classes = useStyles();
  let cor = classes.BlocoMensagemDesapareceStyle;
  if (props.tipoMensagem === 0) {
    cor = classes.BlocoMensagemErroStyle;
  }
  else if (props.tipoMensagem === 1) {
    cor = classes.BlocoMensagemAcertoStyle;
  }
  const [progresso, setProgresso] = useState(100);

  if (progresso >= 0) {
    useEffect(() => {
      const interval = setInterval(() => {
        setProgresso(progresso => progresso - 5);
      }, 250)
      return () => clearInterval(interval);
    });
    return (<Card className={cor}>
      <CardContent>
        <Typography className={classes.txtMensagemStyle}>{props.msg}</Typography>
      </CardContent>
      <LinearProgress variant="determinate" value={progresso} />
    </Card>);
  }
  else {
    useEffect(() => {
      const interval = setInterval(() => {
        setProgresso(progresso => progresso - 5);
      }, 250)
      return () => clearInterval(interval);
    });
    return (<></>);
  }

}

export default Mensagem;