import React from 'react';
import { HiOutlineHome, HiOutlineUsers } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';
import { IoStatsChartSharp } from 'react-icons/io5';
import { BsKanban, BsCartDash} from 'react-icons/bs';

export const Menu2 = [
    {
        id: 1,
        title: "Home",
        name: "",
        icon: <HiOutlineHome className='icon' />,
    },
    {
        id: 2,
        title: "Employees",
        name: "employees",
        icon: <FaUsers className='icon' />,
    },
    {
        id: 3,
        title: "Customers",
        name: "customers",
        icon: <HiOutlineUsers className='icon' />,
    },
    {
        id: 4,
        title: "Kanban",
        name: "kanban",
        icon: <BsKanban className='icon' />,
    },
    {
        id: 5,
        title: "Orders",
        name: "orders",
        icon: <BsCartDash className='icon' />,
    },
    {
        id:6,
        title: "Charts",
        name: "charts",
        icon: <IoStatsChartSharp className='icon' />,
    },
]