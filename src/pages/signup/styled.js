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

