 ## Passo a Passo

 
 1.  create-react-app preco-facil
 2.  cd preco-facil
 3.  yarn start
 4.  Primeiro arquivo que entra em execução é o `index.js` 
 4.1 Abra o arquivo `index.js`
 - Remova a chamada do serviceWorker
 5. Acesse o `src` e remova os sequintes arquivos: 
  5.1 - Remova o logo.svg
  5.2 - Remova o index.css
  5.3 - Remova o setupTests.js
  5.4 - Remova o App.test.js

  6. No arquivo App.js, vamos remover as chamadas do logo:
   - logo.svg
  
  7. Vamos instalar o redux e o reac-redux, isso é opcional:
  >  npm i redux react-redux -s

  8. Acesse o arquivo index.js e adicione

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; // adicionei o import
import { Provider } from 'react-redux'; // adicionei o import

import App from './App';
// adicionando nosso arquivo reducers
import Reducers from './Reducers';

// criando nossa store
const store = createStore(Reducers)

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
  document.getElementById('root')
);
```

9. Adicione um novo arquivo dentro `src/Reducers.js`

```js
import { combineReducers } from 'redux';
import  userReducer from './reducers/userReducer';

export default combineReducers({
  user: userReducer
});
```

10. Crie diretório dentro `src/reducers/userReducer.js`

```js
const initialState = {
  email: ''
};

export default (state = initialState, action) => {
  if(action.type === 'SET_EMAIL') {
    return { ...state, email: action.payload.email };
  }

  return state;
}
```

11. Acesse o arquivo `src/App.js` e vamos modifica-lo:



12. Vamos criar nossas rotas.

> npm i react-router-dom --save

12.1 Crie um arquivo `src/Routes.js`

```js
import React from 'react';
import  { Switch, Route } from 'react-router-dom';

import Home from './pages/home/index';
import About from './pages/about/index';

export default () => {
  return  (
    <Switch>
      <Route exact path ='/'>
        <Home />
        </Route>
      <Route exact path ='/sobre'>
        <About />
      </Route>
    </Switch>
  );
}
```

13. Crie dois components `src/pages/home` e `src/pages/about`

```js
import React from 'react';

const Page = () => {
  return (
    <div> Página de inicio</div>
  );
}

export default Page;

```

```js
import React from 'react';

const Page = () => {
  return (
    <div> Página sobre</div>
  );
}

export default Page;
```

14. Acessando nossa rota, acesse o arquivo `src/App.js`

```js

import React from 'react';
import { connect } from 'react-redux'; 
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

const Page = (props) => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return{};
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);


```

15. Linkando nossas páginas: 
```js
import React from 'react';
import { Link } from 'react-router-dom';


const Page = () => {
  return (
    <div> 
      <h1> Sobre nós...</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Page;

```


16. Vamos criar nossos templates para isso vamos modificar o nosso `src/App.js`


```js
import React from 'react';
import { connect } from 'react-redux'; 
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

const Page = (props) => {
  return (
    <BrowserRouter>
    <Template>
      <Header />
        <Routes />
      <Footer />
    </Template>

    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return{};
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);

```

17. Vamos criar um diretório em `src/components`
17.1 Crie um arquivo `MainComponents.js`
17.2 Instale o `styled-components`
> npm i styled-components --save

17.3 Crie um diretório em `src/components/partials`
 - Header
 - Footer

```js
import React from 'react';
import { HeaderArea } from './styled';

const Header = () => {
  return (
    <HeaderArea>
      ...
    </HeaderArea>
  );
}

export default Header;
```

```css
import styled from 'styled-components';

export const HeaderArea = styled.div`
  height: 100px;
  background: #CCC;
`;
```


```js

import React from 'react';
import { FooterArea } from './styled';

const Footer = () => {
  return (
    <FooterArea>
      ...
    </FooterArea>
  );
}

export default Footer;
```

```css
import styled from 'styled-components';

export const FooterArea = styled.div`
  height: 100px;
  background: #CCC;
`;
```

18. Agora vamos adicionar nosso dois novos componentes em `src/App.js`

```js
import React from 'react';
import { connect } from 'react-redux'; 
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import { Template } from './components/MainComponents';
import Header from './components/partials/Header/index';
import Footer from './components/partials/Footer/index';


const Page = (props) => {
  return (
    <BrowserRouter>
    <Template>
      <Header />
      <Routes />
      <Footer />
    </Template>

    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return{};
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
```

## Criando nossos estilos globais de CSS.

1. Edite o arquivo `src/App.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300;1,600&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  background-color: #eee;
}

```

## Customizando o nosso Header `src/components/partials/Header`



```css

import styled from 'styled-components';

export const HeaderArea = styled.div`
 background: #fff;
 height: 60px;
 border-bottom: 1px solid #ccc;

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
}

a {
  text-decoration: none;
}

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;

    .brand {
      color: #9b59b6;
      font-weight: bold;
    }
  }

nav {
    padding: 10px 0 10px 0;

    ul, li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    ul {
      display: flex;
      align-items: center;
      height: 40px; 
    }

    li {
      margin: 0 20px 0 20px;

      a {
        color: #000;
        font-size: 1em;

        &:hover {
          color: #999;
        }

        &.btn__post {
          background: #f1c40f;
          color: #fff;
          padding: 10px;
          border-radius: 4px;
        }

        &.btn__post:hover {
         background: #e67e22; 
        }
      }
    }
  }
`;
```


```js
import React from 'react';
import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/"> 
            <span className="brand"> Preço Fácil
            </span>
          </Link>
        </div> 
        <nav>
          <ul>
            <li>
              <Link to="">Login</Link>
            </li>
            <li>
              <Link to="">Cadastrar</Link>
            </li>
            <li>
              <Link to="" className="btn__post">Criar meu anúncio</Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
}

export default Header;

```

## Nosso processo de Autenticação com Login/Token:

1. Vamos usar [cookie](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Cookies) para salvar as informações no Client.

```
Um cookie HTTP (um cookie web ou cookie de navegador) é um pequeno fragmento de dados que um servidor envia para o navegador do usuário. O navegador pode armazenar estes dados e enviá-los de volta na próxima requisição para o mesmo servidor. Normalmente é utilizado para identificar se duas requisições vieram do mesmo navegador — ao manter um usuário logado, por exemplo. Ele guarda informações dinâmicas para o protocolo HTTP sem estado.
```

2. Vamos instalar uma dependência para lidar com o cookie:
> npm i js-cookie --save

3. Crie um diretório novo `src/helpers`
 3.1 Crie um arquivo `AuthHandler.js`

 ```js
  import Cookies from 'js-cookie';

  // checando se o user está logado
  export const isLogged = () => {
    let token = Cookies.get('token');
    return (token) ? true : false;
  }
 ```

 3.2 Importe esse arquivo em `src/components/partials/Header/index.js`.
 3.3 Adicione uma validação para exibirmos o menu quando estamos autenticado.

 ```js
import React from 'react';
import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';
import { isLogged } from '../../../helpers/AuthHandler';

const Header = () => {
  let logged = isLogged();

  // simulando quando estiver autenticado
  // let logged = true; 

  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/"> 
            <span className="brand"> Preço Fácil
            </span>
          </Link>
        </div> 
        <nav>
          <ul> //add nosso condicional no template
            {logged && 
              <>
                 <li>
                  <Link to="/my-account">Minha Conta</Link>
                </li>
                 <li>
                   <Link to="/logout">Sair</Link>
                </li>
                <li>
                  <Link to="/post" className="btn__post">Criar meu anúncio</Link>
                </li>
              </>
            }
            {!logged &&
              <>
                <li>
                  <Link to="/signin">Login</Link>
                </li>
                 <li>
                   <Link to="/signup">Cadastrar</Link>
                </li>
                <li>
                  <Link to="/signin" className="btn__post">Criar meu anúncio</Link>
                </li>
              </>
            }
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
}

export default Header;

```

## Criando nossa Rota 404, página não encontrada.

1. Acesse nosso arquivo `src/Routes.js`

```js
import React from 'react';
import  { Switch, Route } from 'react-router-dom';

import Home from './pages/home/index';
import About from './pages/about/index';
import NotFound from './pages/notfound/index';

export default () => {
  return  (
    <Switch>
      <Route exact path ='/'>
        <Home />
        </Route>
      <Route exact path ='/sobre'>
        <About />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
```

2. Criando nosso template de Página Not Found.
2.1 Crie um diretório em src/pages/notfound
2.2 Crie um arquivo index.js

```js

import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <Link to="/">Retornar para Home</Link>
    </div>
  );
}

export default Page;
```


