import React from 'react';
import SizesTable from "./sizesTable/SizesTable.jsx";
import ColorsAndAssetsTable from "./colorsAndAssetsTable/ColorsAndAssetsTable.jsx";

const Typography = () => (
  <>
    <h2 className={'h2 mb-2'}>Font sizes</h2>
    <SizesTable/>
    <div className={'my-5'}></div>
    <h2 className={'h2 mb-2'}>Colors and other font styles</h2>
    <ColorsAndAssetsTable/>
  </>
)

export default Typography;