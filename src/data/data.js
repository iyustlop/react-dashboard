import * as Unicons from "@iconscout/react-unicons";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

export const SidebarData = [
  {
    icon: Unicons.UilEstate,
    heading: "Dashboard",
  },
  {
    icon: Unicons.UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: Unicons.UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: Unicons.UilPackage,
    heading: "Products",
  },
  {
    icon: Unicons.UilChart,
    heading: "Analytics",
  },
];

export const CardsData = [
  {
    title: "Sales",
    color: {
      backGround: "var(--card-purple)",
      boxShadow: "var(--card-purple-shadow)",
    },
    barValue: 70,
    value: "25,000",
    png: Unicons.UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "var(--card-pink)",
      boxShadow: "var(--card-pink-shadow)",
    },
    barValue: 80,
    value: "14,000",
    png: Unicons.UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround: "var(--card-yellow)",
      boxShadow: "var(--card-yellow-shadow)",
    },
    barValue: 60,
    value: "4,000",
    png: Unicons.UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
];

export const TableData = [
  {
    name: "Lasania Chiken Fri",
    trackingId: 18908424,
    date: "2 March 2022",
    status: "Approved",
  },
  {
    name: "Big Baza Bang",
    trackingId: 18908424,
    date: "2 March 2022",
    status: "Pending",
  },
  {
    name: "Mouth Freshner",
    trackingId: 18908424,
    date: "2 March 2022",
    status: "Approved",
  },
  {
    name: "Cupcake",
    trackingId: 18908421,
    date: "2 March 2022",
    status: "Delivered",
  },
];

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
    noti: "has ordered Apple smart watch, samsung gear 2500mh battery.",
    time: "2 hours ago",
  },
];
