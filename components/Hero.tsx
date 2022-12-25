import Link from 'next/link';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAddress, useDisconnect } from '@thirdweb-dev/react';
import Image from 'next/image';
import img from '../public/dwlogo.png';

const navigation = [{ name: 'Store', href: '/store' }];

export default function Example() {
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <div className="relative overflow-hidden  bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10   bg-gray-100 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-black lg:block"
            fill="rgb(243 244 246 / 2)"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global">
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <span className="sr-only">Shopler</span>
                    <Link href="/">
                      <Image
                        src={img}
                        height={50}
                        layout="fixed"
                        width={50}
                        alt="dwlogo"
                        className="mr-3 h-8"
                      />
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md   bg-gray-100 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-500 hover:text-gray-400">
                      {item.name}
                    </Link>
                  ))}
                  {address ? (
                    <button
                      onClick={disconnect}
                      type="submit"
                      className="text-sm">
                      Log Out{' '}
                      <span className="text-red-500 mx-4">
                        {address.slice(0, 6)}...
                      </span>
                    </button>
                  ) : (
                    <Link
                      href="/login"
                      className="font-medium text-[#00564d] hover:text-indigo-500">
                      Log In
                    </Link>
                  )}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
                <div className="overflow-hidden rounded-lg   bg-gray-100 shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <Image
                        src={img}
                        width={50}
                        height={50}
                        layout="fixed"
                        alt="dwlogo"
                        className="mr-3 h-8"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md   bg-gray-100 p-2 text-gray-100 hover:bg-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/"
                    className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100">
                    Log in
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl md:text-6xl">
                <span className="block mb-4 text-gray-400">Shop anything</span>{' '}
                <span className="block text-[#00564D] xl:inline">
                  We got your Warranty Covered
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-800 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Block chain based Warranty for all your shopping.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/store">
                    <span className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#00564d] px-8 py-3 text-base font-medium text-gray-100 hover:bg-[#00564d] md:py-4 md:px-10 md:text-lg">
                      Store
                    </span>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/login">
                    <span className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#ade4de] px-8 py-3 text-base font-medium text-[#00564d] hover:bg-[#00897b] md:py-4 md:px-10 md:text-lg">
                      Login
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
