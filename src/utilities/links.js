//import icons
import Paper from '../assets/icons/Paper.png';
import assets from '../assets/icons/assets.png';
import working from '../assets/icons/working.png';
import gift from '../assets/icons/gift.png';

//reacticons
import {GrHomeRounded} from 'react-icons/gr';
import {HiOutlineUsers} from 'react-icons/hi';
import {MdOutlineHomeRepairService} from 'react-icons/md';
import {AiOutlinePieChart} from 'react-icons/ai';
import {BiBarChartSquare} from 'react-icons/bi';
import {FiSettings, FiHome} from 'react-icons/fi';

const links = [
    {
        title: 'Dashboard',
        to: '/',
        icon: <FiHome />
    },
    {
        title: 'Captains',
        icon: <HiOutlineUsers />,
        to: '/'
    },
    {
        title: 'Service Requests',
        icon: Paper,
        to: '/',
        extraLinks: [
            {
                title: 'Assets Financing',
                icon: assets,
                to: '/',
            },
            {
                title: 'Working Capital',
                icon: working,
                to: '/',
            },
            {
                title: 'Ancilinary Services',
                icon: gift,
                to: '/',
            }
            
        ]
    },
    {
        title: 'Service Partners',
        icon: <MdOutlineHomeRepairService />,
        to: '/',
    },
    {
        title: 'Assets Metrics',
        icon: <AiOutlinePieChart />,
        to: '/',
    },
    {
        title: 'Repayments',
        icon: <BiBarChartSquare />,
        to: '/',
    },
    {
        title: 'Settings',
        icon: <FiSettings />,
        to: '/',
    }
];

export default links