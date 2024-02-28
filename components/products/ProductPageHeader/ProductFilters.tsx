"use client"

import { Fragment, ReactNode, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface MenuItemProps {
  children: ReactNode;
}

export default function ProductFilters() {
  const [selectedOption, setSelectedOption] = useState("추천순");

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const optionItems = [
    { label: '추천순', value: '추천순' },
    { label: '낮은 가격순', value: '낮은 가격순' },
    { label: '높은 가격순', value: '높은 가격순' }
  ];

  return (
    <Menu as="div" className="relative inline-block mr-16 text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {selectedOption}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {optionItems.map(({ label, value }) => (
              <Menu.Item key={value}>
                {({ active }) => (
                  <a
                    href="#"
                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} ${selectedOption === value ? 'font-semibold' : ''}`}
                    onClick={() => handleOptionChange(value)}
                  >
                    {label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
