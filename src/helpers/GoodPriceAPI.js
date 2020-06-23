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
      '/login',
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

  getCategories: async () => {
    const json = await apiFetchGet(
    '/categories'
    );
    return json.states;
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