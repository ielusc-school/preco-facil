import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
  return (
    <div>
      <h1>Página de inicio</h1>
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

export default Page;