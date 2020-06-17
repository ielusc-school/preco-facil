import Cookies from 'js-cookie';

// checando se o user está logado
export const isLogged = () => {
  let token = Cookies.get('token');
  return (token) ? true : false;
}