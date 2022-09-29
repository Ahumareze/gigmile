//import icons
import Home from '../assets/icons/Home.png';
import Users from '../assets/icons/Users.png';
import Paper from '../assets/icons/Paper.png';
import Work from '../assets/icons/Work.png';
import Graph from '../assets/icons/Graph.png';
import Chart from '../assets/icons/Chart.png';
import Setting from '../assets/icons/Setting.png';

const links = [
    {
        title: 'Dashboard',
        icon: Home,
        to: '/'
    },
    {
        title: 'Captains',
        icon: Users,
        to: '/captains'
    },
    {
        title: 'Service Requests',
        icon: Paper,
        to: '/',
        extraLinks: [
            {
                title: 'Service Requests',
                icon: Home,
                to: '/',
            },
            {
                title: 'Service Requests',
                icon: Home,
                to: '/',
            },
            {
                title: 'Service Requests',
                icon: Home,
                to: '/',
            }
            
        ]
    },
    {
        title: 'Service Partners',
        icon: Work,
        to: '/partners',
    },
    {
        title: 'Assets Metrics',
        icon: Graph,
        to: '/assets-metrics',
    },
    {
        title: 'Repayments',
        icon: Chart,
        to: '/',
    },
    {
        title: 'Settings',
        icon: Setting,
        to: '/',
    }
];

export default links