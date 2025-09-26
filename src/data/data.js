import * as Unicons from '@iconscout/react-unicons';

export const SidebarData = [
    {
        icon: Unicons.UilEstate,
        heading: 'Dashboard'  
    },
    {
        icon: Unicons.UilClipboardAlt,
        heading: 'Orders'  
    },
    {
        icon: Unicons.UilUsersAlt,
        heading: 'Customers'  
    },
    {
        icon: Unicons.UilPackage,
        heading: 'Products'  
    },
    {
        icon: Unicons.UilChart,
        heading: 'Analytics'  
    }
];

export const CardsData =[
    {
        title: 'Sales',
        color: {
            backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
            boxShadow: '0px 10px 20px 0px #e0c6f5'
        },
        barValue: 70,
        value: '25,000',
        png: Unicons.UilUsdSquare,
        series: [
            {
                name: 'Sales',
                data: [ 31, 40, 28, 51, 42, 109, 100]
            }
        ]

    },{
        title: 'Revenue',
        color: {
            backGround: 'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
            boxShadow: '0px 10px 20px 0px #FDC0C7'
        },
        barValue: 80,
        value: '14,000',
        png: Unicons.UilMoneyWithdrawal,
        series: [
            {
                name: 'Revenue',
                data: [ 31, 40, 28, 51, 42, 109, 100]
            }
        ]

    },{
        title: 'Expenses',
        color: {
            backGround: 'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)',
            boxShadow: '0px 10px 20px 0px #F9D59B'
        },
        barValue: 60,
        value: '4,000',
        png: Unicons.UilClipboardAlt,
        series: [
            {
                name: 'Expenses',
                data: [ 31, 40, 28, 51, 42, 109, 100]
            }
        ]

    }
]

import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];