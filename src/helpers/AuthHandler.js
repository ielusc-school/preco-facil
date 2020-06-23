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

export const doLogout =() => {
  Cookies.remove('token');
}