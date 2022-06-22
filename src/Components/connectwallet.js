import React from 'react';
import {useWallet, useConnection } from "@solana/wallet-adapter-react"
import {WalletMultiButton } from "@solana/wallet-adapter-react-ui"
function Alloutes() {
//   const { connection } = useConnection();
//   const {connected} = useWallet();
 const connected = false;
//   console.log(connected)
  return (
        <div className="h-[100vh] flex justify-center items-center bg-[#4d4d4d]">
           <div className="bg-white w-[30%] h-[40%] flex flex-col justify-center items-center rounded-xl p-5">
                <div className="font-bold text-xl">Connect Your Wallet</div>
                <div className="text-center mt-2 mb-12 text-[#b3b3b3]">Manage your account, check notifications and many more...</div>
                <WalletMultiButton />
           </div>
        </div>
  );
}

export default Alloutes;