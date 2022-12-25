import { useAddress } from '@thirdweb-dev/react';
import React from 'react';

function buyProd(pid: number, address: string | undefined, isWallet: boolean) {
  console.log({ userID: address, productID: pid, isWallet: isWallet });

  fetch('/api/buy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userID: address,
      productID: pid,
      isWallet: isWallet,
    }),
  });
}

export default function BuyModal({
  onRequestClose,
  pid,
}: {
  onRequestClose: any;
  pid: number;
}) {
  const address = useAddress();

  return (
    <div className="">
      <div className="flex item-center">
        <p className="text-2xl mb-4 mt-4 mr-8">
          Are you Sure You want to buy ?
        </p>
        <svg
          onClick={() => onRequestClose()}
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-red-500 hover:scale-120 duration-200 ease-in-out cursor-pointer">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      {address && (
        <div className="bg-gray-200 p-4 rounded-lg">
          Wallet Connected - {address.slice(0, 10)}...
        </div>
      )}

      <button
        onClick={() => buyProd(pid, address, address !== '')}
        className=" mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-[#00564d] px-8 py-3 text-base font-medium text-gray-100 hover:scale-105 duration-200 ease-in-out hover:bg-[#769793] md:py-4 md:px-10 md:text-lg">
        Confirm
      </button>
    </div>
  );
}
