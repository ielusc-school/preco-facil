import React, { useState, useEffect } from 'react';
import { PageArea, SearchArea } from  './styled';
import { PageContainer } from '../../components/MainComponents';
import useApi from '../../helpers/GoodPriceAPI';

const Page = () => {
  const api = useApi();
  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getStates = async () => {
      const sList = await api.getStates();
      setStateList(sList);
    }
    getStates();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const cats = await api.getCategories();
      setStateList(cats);
    }
    getCategories();
  }, []);


  return (
    <>
      <SearchArea> 
        <PageContainer>
           <div className="searchBox">
              <form method="GET" action="/ads">
              <input 
                type="text" 
                name="q" 
                placeholder="Qual item, está precisando?"/>

                <select name="state" id=""></select>
                <button>Buscar</button>
              </form>
           </div>
           <div className="categoryList">

           </div>
        </PageContainer>
      </SearchArea>
      <PageContainer>
        <PageArea> 
         Page Home
        </PageArea>
    </PageContainer>
    </>
  );
}

export default Page;