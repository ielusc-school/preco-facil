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
    setError('');

    // validando se nosso login está correto
    const json = await api.login(email, password); 
 
    if(json.error) { // se login e passwd com erro
      setError(json.error);
    } else { // checar o nosso AuthHandler pega o token
      doLogin(json.token, rememberPassword);
      // faz um reload na tela
      window.location.href= '/'; 
    }

    setDisabled(false);
  }

  return (
      <PageContainer>
        <PageTitle> Login</PageTitle>
        <PageArea> 
          { error && 
            <ErrorMessage>{error}</ErrorMessage>
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