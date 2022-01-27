import React from 'react';
import { FaCartPlus, FaEnvelopeOpenText } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { IoMdPeople, IoIosPaper, IoMdHelpCircle } from 'react-icons/io';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

export const data = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiFillHome />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    subnav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <IoIosPaper />,
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIosPaper />,
      },
    ],
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <AiFillHome />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    subnav: [
      {
        title: 'Reports-1',
        path: '/reports/reports1',
        icon: <IoIosPaper />,
      },
      {
        title: 'Reports-2',
        path: '/reports/reports2',
        icon: <IoIosPaper />,
      },
      {
        title: 'Reports-3',
        path: '/reports/reports3',
        icon: <IoIosPaper />,
      },
    ],
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaCartPlus />,
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoMdPeople />,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaEnvelopeOpenText />,

    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,

    subnav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <IoIosPaper />,
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIosPaper />,
      },
    ],
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoMdHelpCircle />,
  },
];
