import React, {useEffect, useState} from 'react';
import Box from "../../../../../reusable/cards/box/Box.jsx";
import {Link} from "react-router-dom";

const HubWalletTop = () => {
  return (
    <div className={'d-flex justify-content-between align-items-center'}>
      <h4 className='h4'>Wallet</h4>
      <Link to='/rank-ladder' className='text-alt-primary'>
        See my earnings
      </Link>
    </div>
  );
};

const walletItems = {
  diamonds: 1500,
  coins: 1500,
  energy: 500,
}

const HubWallet = () => {
  const [wallet, setWallet] = useState({})

  const getData = async () => {
    try {
      //TODO get data from api
      setWallet(walletItems)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Box
      topComponent={<HubWalletTop/>}
      className={'mt-3'}
      paddingMode='big'
    >
      <div className='d-flex'>
        <div className={'d-flex align-items-center me-7'}>
          <span className={'me-1'}>{wallet?.energy}</span>
          <img src="/images/hub/wallet/energy.svg" alt=""/>
        </div>
        <div className={'d-flex align-items-center me-7'}>
          <span className={'me-1'}>{wallet?.diamonds}</span>
          <img src="/images/hub/wallet/diamond.svg" alt=""/>
        </div>
        <div className={'d-flex align-items-center me-7'}>
          <span className={'me-1'}>{wallet?.coins}</span>
          <img src="/images/hub/wallet/coin.svg" alt=""/>
        </div>
      </div>
    </Box>
  );
};

export default HubWallet;