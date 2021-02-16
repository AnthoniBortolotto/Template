import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Rodape from '../organisms/Rodape';
import Cabecario from '../organisms/Cabecario';
import "../atoms/css/bootstrap.min.css";
import "../atoms/css/menu.css";
import "../atoms/css/tabela.css";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
const Tabela = lazy(() => import('../pages/Tabela'));
const Deletar = lazy(() => import('../pages/Deletar'));

const PaginaNaoEncontrada = lazy(() => import("../pages/PaginaNaoEncontrada"));
const AddEdit = lazy(() => import("../pages/AddEdit"));
const Sobre = lazy(() => import("../pages/Sobre"));
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2e7d32'
    },
    secondary: {
      main: '#00838f'
    }
  },
});
export const themeAdd = createMuiTheme({
  palette: {
    primary: {
      main: '#283593'
    },
    secondary: {
      main: '#c62828'
    }
  },
});
ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme} >

      <Cabecario />
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path='/' exact={true} component={Tabela} />
          <Route path='/Sobre' component={Sobre} />
          <ThemeProvider theme={themeAdd}>
            <Route path='/AddEdit' component={AddEdit} />
            <Route path='/Deletar' component={Deletar} />
            <Route component={PaginaNaoEncontrada} />
          </ThemeProvider>

        </Switch>
      </Suspense>

      <Rodape />
    </ThemeProvider>
  </BrowserRouter>
  ,
  document.getElementById('app')
);



