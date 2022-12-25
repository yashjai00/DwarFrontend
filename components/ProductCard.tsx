import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import BuyModal from './BuyModal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'white',
  },
};
export default function ProductCard({ card }: { card: any }) {
  const [pid, setPid] = React.useState(1001);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let subtitle: any;
  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <BuyModal onRequestClose={closeModal} pid={pid} />
      </Modal>
      <div className="max-w-sm bg-gray-200 bg-opacity-20 rounded overflow-hidden shadow-lg m-4 ">
        {/* <Image src={card.image} alt="product" height=/> */}
        <img
          className="w-full h-[400px] object-contain bg-white"
          src={card.image}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="flex justify-between">
            <span>Rs. {card.price}</span>
            <span className="text-[#00564d]">{card.rating.rate}</span>
          </div>
          <div className="font-bold text-xl mb-2">
            {card.title.slice(0, 30)}
            {card.title.length > 30 ? '...' : ''}
          </div>
          <p className="text-[#00897b]">{card.category}</p>
          <p>{card.warranty}</p>
          <p className="text-gray-600 text-base">
            {card.description.slice(0, 100)}...
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className=" mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-[#00564d] px-8 py-3 text-base font-medium text-gray-100 hover:scale-105 duration-200 ease-in-out hover:bg-[#00231f] md:py-4 md:px-10 md:text-lg">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
