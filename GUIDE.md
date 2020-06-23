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

## Criando nossa página de Login.

> Acesse o arquivo `src/Routes/`
1. Crie uma nova rota para referenciar a página Login
2. Crie um diretório novo em `src/pages/login`
3. Crie o arquivo e o style dele:
 - `src/pages/login/index.js`
 - `src/pages/login/styled.js`

 ```js
import React from 'react';
import  { Switch, Route } from 'react-router-dom';

import Home from './pages/home/index';
import About from './pages/about/index';
import NotFound from './pages/notfound/index';
import SigIn from './pages/signin/index';

export default () => {
  return  (
    <Switch>
      <Route exact path ='/'>
        <Home />
        </Route>
      <Route exact path ='/sobre'>
        <About />
      </Route>
      <Route exact path ='/signin'>
        <SigIn />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
 ```

 ```js
import React from 'react';
import  { Switch, Route } from 'react-router-dom';

import Home from './pages/home/index';
import About from './pages/about/index';
import NotFound from './pages/notfound/index';
import SigIn from './pages/signin/index';

export default () => {
  return  (
    <Switch>
      <Route exact path ='/'>
        <Home />
        </Route>
      <Route exact path ='/sobre'>
        <About />
      </Route>
      <Route exact path ='/signin'>
        <SigIn />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
 ```


 ```js
 // nosso index.js para sigin

import React from 'react';
import { PageArea } from  './styled';

import { PageContainer, PageTitle } from '../../components/MainComponents';

const Page = () => {
  return (
      <PageContainer>
        <PageTitle> Login</PageTitle>
        <PageArea> 
          <form>
            <label htmlFor="area" className="area">
                <div className="area--title">
                  E-mail:
                </div>
                <div className="area--input">
                  <input type="email"/>
                </div>
            </label>

            <label htmlFor="area" className="area">
                <div className="area--title">
                  Senha:
                </div>
                <div className="area--input">
                  <input type="password" />
                </div>
            </label>

            <label htmlFor="area" className="area">
                <div className="area--title">
                  Lembrar Senha:
                </div>
                <div className="area--input">
                  <input type="checkbox" />
                </div>
            </label>

            <label htmlFor="area" className="area">
                <div className="area--title"></div>
                <div className="area--input">
                  <button>Entrar</button>
                </div>
            </label>
          </form>
        </PageArea>
      </PageContainer>
  );
}

export default Page;

 ```


```js
// nosso css para sigin

import styled from 'styled-components';

export const PageArea =  styled.div`
  form {
    background: #fff;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0 0 3px #999;

    .area {
      display: flex;
      align-items: center;
      padding: 10px;
      max-width: 500px;

      .area--title {
        width: 200px;
        text-align: right;
        padding-right: 20px;
        font-weight: bold;
        font-size: 1em;
      }

      .area--input {
        flex: 1;

        input {
          width: 100%;
          font-size: 1em;
          padding: 5px;
          border: 0;
          border-bottom: 1px solid #ddd;
          outline: 0;
          background: transparent;
          transition: all ease .4s;

          &:focus {
            border-bottom: 1px solid #333;
            color: #333;
          }
        }
      }

        button {
          background: #0089FF;
          border: 0;
          outline: 0;
          padding: 5px 10px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1em;
          color: #fff;

          &:hover {
            background: #006fce;
          }
        }
      }
  }`;
```

4. Precisamos adicionar novos estilos para o `src/components/MainComponents.js` pois ele é o nosso componente padrào, no caso ficaria:

```js
import styled from 'styled-components';

export const Template = styled.div ``;

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const PageTitle = styled.h1`
  font-size: 2em;
`;

export const PageBody = styled.div``;

```

## Login comportamentos

> Agora precisamos começar a dar vida para a nossa tela de login, então primeiro passo é acessar:

1. `src/helpers/AuthHandler.js`

```js
import Cookies from 'js-cookie';

// checando se o user está logado
export const isLogged = () => {
  let token = Cookies.get('token');
  return (token) ? true : false;
}

// checando o token
export const doLogin = (token, rememberPassword) => {
  // se marcado o checkbox de lembrar senha
  if(rememberPassword) {
    // salva o token no cookie e expira depois de 30 dias
    Cookies.set('token', token, {expires: 30});
  } else {
    // fechado o browser limpa o cookie
    Cookies.set('token', token);
  }
}

```

2. Agora vamos criar um novo arquivo que vai ser responsável por consumir as requisições na nossa API.

2.1 Crie um novo arquivo `src/helpers/GoodPriceAPI.js`

```js
const GoodPriceAPI = {
  login: async (email, password) => {
    // buscar as infos do webservice

    return {};
  }
};

// nossa fn vai retornar um obj
export default () => GoodPriceAPI;


3. Vamos mostrar uma mensagem de erro para o usuário:

```js
import styled from 'styled-components';

export const Template = styled.div ``;

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const PageTitle = styled.h1`
  font-size: 2em;
`;

export const PageBody = styled.div``;

export const ErrorMessage = styled.div`
  margin: 10px 0;
  padding: 10px;
  background: #e74c3c;
  color: #fff;
  border: 2px solid #c0392b;
`;
```


4. Agora vamos dar vida para o nosso componente login `src/pages/siginin/index.js`

```js

import React, { useState } from 'react';
import { PageArea } from  './styled';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
import useApi from '../../helpers/GoodPriceAPI';
import { doLogin } from '../../helpers/AuthHandler';

const Page = () => {
  //nossa regra de negócio

  const api = useApi();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  // criando nossa ação para validar o form antes de enviar
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);

    // validando se nosso login está correto
    const json = await api.login(email, password); 
 
    if(json.error) { // se login e passwd com erro
      setError(json.error);
    } else { // checar o nosso AuthHandler pega o token
      doLogin(json.token, rememberPassword);
      // faz um reload na tela
      window.location.href= '/'; 
    }
  }

  return (
      <PageContainer>
        <PageTitle> Login</PageTitle>
        <PageArea> 
          { error && 
            <ErrorMessage>Ops, ocorreu um erro.</ErrorMessage>
          }
          <form onSubmit={ handleSubmit }>
            <label htmlFor="email" className="area">
              <div className="area--title">E-mail:</div>
              <div className="area--input">
                <input 
                  type="email" 
                  disabled={disabled} 
                  value={email}
                  onChange={e => setEmail(e.target.value)} 
                  required />
              </div>
            </label>

            <label htmlFor="password" className="area">
              <div className="area--title">Senha:</div>
              <div className="area--input">
                <input 
                  type="password" 
                  disabled={disabled}
                  value={password}
                  onChange={e => setPassword(e.target.value)} 
                  required />
              </div>
            </label>

            <label htmlFor="rememberPassword" className="area">
              <div className="area--title">Lembrar Senha:</div>
              <div>
                <input 
                  id="rememberPassword"
                  type="checkbox" 
                  disabled={disabled}
                  checked={rememberPassword}
                  onChange={()=> setRememberPassword(!rememberPassword)} />
              </div>
            </label>

            <label htmlFor="area" className="area">
                <div className="area--title"></div>
                <div className="area--input">
                  <button disabled={disabled}>Entrar</button>
                </div>
            </label>
          </form>
        </PageArea>
      </PageContainer>
  );
}

export default Page;

```

## Criando nossa API.
 > Com acesso local pelo JSON-Server
 > Documentação: https://github.com/typicode/json-server

 1. Na raiz do projeto pelo terminal, instale a dependência:
 > npm i json-server -D   

 2. Crie um arquivo `src/db.json`
 3. Adicione a estrutura JSON da sua API.
 4. No `package.json` do seu projeto, adicione esse comando em `scripts`:
 ```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "api": "json-server --watch db.json --port 5000"
  },
 ```
5. Para testar sua api, execute o comando
> yarn api

6. Validando a API, acesse:
>  http://localhost:5000/{suaapi}

6.1 Como vamos lidar com token:
> npm install -D json-server-auth

7. Criando o comportamento de Login:

7.1 Instale a dependência `qs`:
> npm i qs --save 

8. Nosso arquivo src/helpers/GoodPriceApi.js

```js

import Cookies from 'js-cookie';
import qs from 'qs';

const BASEAPI = 'http://localhost:5000';

/*
email: jao@terra.com.br
12345
*/

function setCookie(body) {
  if(!body.token) {
    let token = Cookies.get('token');
    if(token) {
      body.token = token;
    }
  }
}

function notAllowed(json) {
  if(json.notallowed) {
    window.location.href = '/signin';
    return;
  }
}

// criando nosso consumo via POST
const apiFetchPost =  async (endpoint, body ) => {
  setCookie(body);

  const res = await fetch(BASEAPI + endpoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const json = await res.json();
  notAllowed(json);
  return json;
}

// criando nosso consumo via GET
const apiFetchGet =  async (endpoint, body = []) => {
  setCookie(body); 

  const res = await fetch(`${BASEAPI + endpoint}?${qs.stringify(body)}`);
  const json = await  res.json();

  notAllowed(json);
  return json;
}

const GoodPriceAPI = {
  login: async (email, password) => {
    // buscar as infos do webservice
    const json = await apiFetchPost(
      '/user/signin',
      { email, password }
    );
    return json;
  }
};

// nossa fn vai retornar um obj
export default () => GoodPriceAPI;
```


9. Precisamos fazer o logout também: 

```js

import Cookies from 'js-cookie';

// checando se o user está logado
export const isLogged = () => {
  let token = Cookies.get('token');
  return (token) ? true : false;
}

// checando o token
export const doLogin = (token, rememberPassword) => {
  // se marcado o checkbox de lembrar senha
  if(rememberPassword) {
    // salva o token no cookie e expira depois de 30 dias
    Cookies.set('token', token, {expires: 30});
  } else {
    // fechado o browser limpa o cookie
    Cookies.set('token', token);
  }
}
// criando nosso metodo de logout
export const doLogout =() => {
  Cookies.remove('token')
}
```

10. Precisamos alterar o nosso Header pois não precisamos de uma rota `sair`;

```js
import React from 'react';
import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';
import { isLogged, doLogout } from '../../../helpers/AuthHandler';

const Header = () => {
  let logged = isLogged();

  // criando meu metodo de logout
  const handleLogout = () => {
    doLogout();
    window.location.href = '/';
  }

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
          <ul> 
            {logged && 
              <>
                 <li>
                  <Link to="/my-account">Minha Conta</Link>
                </li>
                 <li>
                  <button onClick={handleLogout}> Sair</button>
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
                  <Link to="/post" className="btn__post">Criar meu anúncio</Link>
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

11. Estilizando nosso botão sair para ficar igual um link:

```js

    li {
      margin: 0 20px 0 20px;

      a, button {
        color: #000;
        font-size: 1em;
        border: 0;
        background: 0;
        cursor: pointer;
        outline: 0;

        &:hover {
          color: #999;
        }
```

## Vamos agora manipular a rota Cadastrar:
1. Cria uma nova rota para lidar com views de Cadastro:
1.1 . Altere o arquivo  `src/Routes`
```js
import React from 'react';
import  { Switch, Route } from 'react-router-dom';

import Home from './pages/home/index';
import About from './pages/about/index';
import NotFound from './pages/notfound/index';
import SigIn from './pages/signin/index';
import SignUp from './pages/signup/index';

export default () => {
  return  (
    <Switch>
      <Route exact path ='/'>
        <Home />
        </Route>
      <Route exact path ='/sobre'>
        <About />
      </Route>
      <Route exact path ='/signin'>
        <SigIn />
      </Route>
      <Route exact path ='/signup'>
        <SignUp />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

```


2. Crie um novo diretório em `src/pages/sigup`

```js
import React, { useState, useEffect } from 'react';
import { PageArea } from  './styled';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
import useApi from '../../helpers/GoodPriceAPI';
import { doLogin } from '../../helpers/AuthHandler';

const Page = () => {
  //nossa regra de negócio

  const api = useApi();
  const [name, setName] = useState('');


  const [email, setEmail] = useState('');
  const [stateLoc, setStateLoc] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const [stateList, setStateList] = useState([]);

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getStates = async () => {
      const slist = await api.getStates();
      setStateList(slist);
    }
    getStates();
  }, []);

  // criando nossa ação para validar o form antes de enviar
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError('');

    if(password !== confirmPassword) {
      setError('Ops, as senhas não coincidem.');
       // freeze o form
       setDisabled(false);
      return;
    }

    // validando se nosso login está correto
    const json = await api.register(
      name, 
      email, 
      password, 
      stateLoc); 
 
    if(json.error) { // se login e passwd com erro
      setError(json.error);
    } else { // checar o nosso AuthHandler pega o token
      doLogin(json.token);
      // faz um reload na tela
      window.location.href= '/'; 
    }
    // freeze o form
    setDisabled(false); 
  }

  return (
      <PageContainer>
        <PageTitle> Cadastro</PageTitle>
        <PageArea> 
          { error && 
            <ErrorMessage>{error}</ErrorMessage>
          }
          <form onSubmit={ handleSubmit }>
          <label htmlFor="name" className="area">
              <div className="area--title">Nome:</div>
              <div className="area--input">
                <input 
                  id="name"
                  type="text" 
                  disabled={disabled}
                  value={name}
                  onChange={e => setName(e.target.value)} 
                  required />
              </div>
            </label>

            <label htmlFor="state" className="area">
              <div className="area--title">Estado:</div>
              <div className="area--input">
              <select 
                id="state"
                value={stateLoc} 
                onChange={ e => setStateLoc(e.target.value) }
                required>
                <option></option>
                {stateList.map((i,k) => 
                 <option 
                    key={k} 
                    value={i._id}> {i.name} 
                  </option> 
                )}
              </select>
              </div>
            </label>

            <label htmlFor="email" className="area">
              <div className="area--title">E-mail:</div>
              <div className="area--input">
                <input 
                  type="email" 
                  disabled={disabled} 
                  value={email}
                  onChange={e => setEmail(e.target.value)} 
                  required />
              </div>
            </label>

            <label htmlFor="password" className="area">
              <div className="area--title">Senha:</div>
              <div className="area--input">
                <input 
                  type="password" 
                  disabled={disabled}
                  value={password}
                  onChange={e => setPassword(e.target.value)} 
                  required />
              </div>
            </label>

            <label htmlFor="rememberPassword" className="area">
              <div className="area--title">Confirmar senha:</div>
              <div className="area--input">
                <input 
                  id="rememberPassword"
                  type="password" 
                  disabled={disabled}
                  value={confirmPassword}
                  onChange={e => setconfirmPassword(e.target.value)} 
                  required />
              </div>
            </label>

            <label htmlFor="area" className="area">
                <div className="area--title"></div>
                <div className="area--input">
                  <button disabled={disabled}>Cadastrar</button>
                </div>
            </label>
          </form>
        </PageArea>
      </PageContainer>
  );
}

export default Page;

```

3. Crie agora as regras necessárias na nossa API.

3.1. Acesse src/helpers/GoodPriceAPI.js
```js
import Cookies from 'js-cookie';
import qs from 'qs';

const BASEAPI = 'http://localhost:5000';

function setCookie(body) {
  if(!body.token) {
    let token = Cookies.get('token');
    if(token) {
      body.token = token;
    }
  }
}

function notAllowed(json) {
  if(json.notallowed) {
    window.location.href = '/signin';
    return;
  }
}

// criando nosso consumo via POST
const apiFetchPost =  async (endpoint, body ) => {
  setCookie(body);

  const res = await fetch(BASEAPI + endpoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const json = await res.json();
  notAllowed(json);
  return json;
}

// criando nosso consumo via GET
const apiFetchGet =  async (endpoint, body = []) => {
  setCookie(body); 

  const res = await fetch(`${BASEAPI + endpoint}?${qs.stringify(body)}`);
  const json = await  res.json();

  notAllowed(json);
  return json;
}

const GoodPriceAPI = {
  login: async (email, password) => {
    // buscar as infos do webservice
    const json = await apiFetchPost(
      '/user/signin',
      { email, password }
    );
    return json;
  },

  register: async (name, email, password, stateLoc) => {
    const json = await apiFetchPost(
      '/user/signup',
      {
        name, email, password, state: stateLoc
      }
    );
    return json;
  },

  getStates: async () => {
    const json = await apiFetchGet(
    '/states'
    );
    return json.states;
  }

};

// nossa fn vai retornar um obj
export default () => GoodPriceAPI;
```

## Vamos criar agora nossa home.

1. Acesse o diretório `src/pages/home/index.js`: 

```js
import React, { useState } from 'react';
import { PageArea, SearchArea } from  './styled';
import { PageContainer } from '../../components/MainComponents';
import useApi from '../../helpers/GoodPriceAPI';

const Page = () => {

  const api = useApi();
  return (
    <>
      <SearchArea> 
        <PageContainer>
           <div className="searchBox">
              <form method="GET" action="/ads">
              <input 
                type="text" 
                name="q" 
                placeholder="Qual item, está precisando?"/>

                <select name="state" id=""></select>
                <button>Buscar</button>
              </form>
           </div>
           <div className="categoryList">

           </div>
        </PageContainer>
      </SearchArea>
      <PageContainer>
        <PageArea> 
         Page Home
        </PageArea>
    </PageContainer>
    </>
  );
}

export default Page;

```


2. Vamos adicionar o nosso CSS `src/pages/home/styled.js`

```js
import styled from 'styled-components';

export const SearchArea =  styled.div`
  background: #ddd;
  padding: 20px 0;
  border: 1px solid #ccc;

  .searchBox {
    background: #673ab7;
    padding: 20px 15px;
    box-shadow: 1px 1px 1px .3px rgba(0,0,0, .2);
    display: flex;

    form {
      flex: 1;
      display: flex;
      
      input, select {
        height: 40px;
        border: 0;
        border-radius: 5px;
        outline: 0;
        font-size: 15px;
        color: #000;
        margin-right: 20px;
      }

      input {
        flex: 1;
        padding: 0 10px;
      }

      select {
        width: 100px;
      }

      button {
        background: #f1c40f;
        padding: 0 20px;
        width: 130px;
        height: 40px;
        border: 0;
        border-radius: 5px;
        color: #fff;
        font-size: 15px;
        cursor: pointer;
      }

    }
  }

`;
export const PageArea =  styled.div``;
```







