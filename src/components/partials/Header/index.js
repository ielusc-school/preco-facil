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
          <ul> 
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