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