import * as Unicons from "@iconscout/react-unicons";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

export const SidebarData = [
  {
    id: "dashboard",
    icon: Unicons.UilEstate,
    heading: "Dashboard",
  },
  {
    id: "orders",
    icon: Unicons.UilClipboardAlt,
    heading: "Orders",
  },
  {
    id: "customers",
    icon: Unicons.UilUsersAlt,
    heading: "Customers",
  },
  {
    id: "products",
    icon: Unicons.UilPackage,
    heading: "Products",
  },
  {
    id: "analytics",
    icon: Unicons.UilChart,
    heading: "Analytics",
  },
];

const daysAgo = (days) => new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

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
    name: "Lasagna Chicken Fries",
    trackingId: 18908424,
    date: daysAgo(0),
    status: "Approved",
  },
  {
    name: "Big Bazaar Bag",
    trackingId: 18908425,
    date: daysAgo(1),
    status: "Pending",
  },
  {
    name: "Mint Freshener",
    trackingId: 18908426,
    date: daysAgo(2),
    status: "Approved",
  },
  {
    name: "Cupcake",
    trackingId: 18908427,
    date: daysAgo(3),
    status: "Delivered",
  },
];

export const CustomersData = [
  { name: "Andrew Thomas", email: "andrew@example.com", orders: 8, spent: "$1,240" },
  { name: "James Bond", email: "james@example.com", orders: 5, spent: "$890" },
  { name: "Iron Man", email: "tony@example.com", orders: 12, spent: "$2,410" },
];

export const ProductsData = [
  { name: "Apple Smart Watch", category: "Electronics", stock: 24, price: "$249" },
  { name: "Samsung Charger", category: "Accessories", stock: 8, price: "$39" },
  { name: "Cupcake", category: "Food", stock: 42, price: "$5" },
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
