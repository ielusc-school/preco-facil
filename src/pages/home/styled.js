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

