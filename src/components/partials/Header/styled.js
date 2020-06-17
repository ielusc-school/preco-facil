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