import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img from '../../public/dwlogo.png';
export default function Footer() {
  return (
    <div>
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-100">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <Image
              src={img}
              height={50}
              layout="fixed"
              width={50}
              alt="dwlogo"
              className="mr-3 h-8"
            />
          </Link>

            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-600">
              Shopfy
            </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-700">
            <li className="mr-4 hover:underline md:mr-6 ">
              <Link href="/shop" >
                Shop
              </Link>
            </li>
           
            <li className="hover:underline">
              <Link href="/" >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-700">
          © 2022{' '}
          <Link href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
