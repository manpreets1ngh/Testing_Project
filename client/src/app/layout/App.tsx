import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import {useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from '../../features/about/AboutPage';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import HomePage from '../../features/home/HomePage';
import Header from './Header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ServerError from '../errors/Server Error';
import NotFound from '../errors/NotFound';
import BasketPage from '../../features/basket/BasketPage';
import { useStoreContext } from '../context/StoreContext';
import { getCookie } from '../util/util';
import agent from '../api/agent';
import Loading from './Loading';

function App() {

  const {setBasket} = useStoreContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie('buyerId');
    if(buyerId)
    {
      agent.Basket.get()
      .then(basket => setBasket(basket))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
    }
  }, [setBasket])

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette:{ 
      mode: paletteType,  
      background:{
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange()
  {
    setDarkMode(!darkMode);
  }

  if(loading)
  {
    return <Loading message='Initialising App...'/>
  }
  return (
    <ThemeProvider theme={theme}>   
    <ToastContainer position='bottom-right' hideProgressBar/>
      <CssBaseline/>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/catalog' component={Catalog}/>
              <Route path='/catalog/:id' component={ProductDetails}/>
              <Route path='/about' component={AboutPage}/>
              <Route path='/server-error' component={ServerError}/>
              <Route path='/basket' component={BasketPage}/>
              <Route component={NotFound}/>
            </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
