'use client';
import React from 'react';
import Image from 'next/image';
import { cardData, CardDataType } from '@/app/utils/cardsdata';

const SelectCard = () => {
  const [cards, setCardData] = React.useState<CardDataType[]>(cardData);

  const handleCheckboxChange = (id: string): void => {
    setCardData((prevCardData) =>
      prevCardData.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  return (
    <>
      {cards.map((card) => (
        <div
          className={`flex justify-between sm:grid sm:gap-3 sm:place-items-center grid-cols-2 gap-1 sm:grid-cols-3 border-b ${card.selected ? 'sm:border-custom-blue' : 'sm:border-gray-300'} sm:border-[1px] px-5 sm:rounded-[20px] sm:py-5 py-3 h-auto`}
        >
          <Image
            src={`${card.image}`}
            width='0'
            height='0'
            sizes='100vw'
            className='sm:w-full hidden sm:block   sm:h-auto h-20 w-20 '
            alt='funnel-image'
          />
          <div className='sm:text-wrapper  w-full flex sm:items-center sm:justify-center sm:text-[18px] text-[15px]'>
            {card.text}
          </div>
          <input
            type='checkbox'
            checked={card.selected}
            onChange={() => handleCheckboxChange(card.id)}
            className='sm:h-7 sm:w-7 h-5 w-5 py-2 cursor-pointer '
          />
        </div>
      ))}
    </>
  );
};

export default SelectCard;
