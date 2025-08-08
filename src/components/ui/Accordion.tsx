import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {items.map((item, index) => (
        <Disclosure key={index} as="div" className="transition-all duration-300">
          {({ open }) => (
            <div
              className={`rounded-2xl shadow-sm ${
                open
                  ? 'bg-blue-50 dark:bg-gray-800 border border-blue-200 dark:border-gray-700'
                  : 'bg-white dark:bg-gray-800'
              }`}
            >
              <Disclosure.Button className="flex justify-between items-center w-full px-6 py-4 text-left">
                <span className="font-semibold text-lg text-gray-800 dark:text-white">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-6 w-6 text-gray-500 dark:text-gray-400 transform transition-transform duration-300 ${
                    open ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </Disclosure.Button>

              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform -translate-y-2 opacity-0"
                enterTo="transform translate-y-0 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform translate-y-0 opacity-100"
                leaveTo="transform -translate-y-2 opacity-0"
              >
                <Disclosure.Panel className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                  {item.answer}
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
};