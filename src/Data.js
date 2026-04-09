import { v4 as uuidv4 } from 'uuid';

import blog1 from "./assets/port-1.jpg";
import blog2 from "./assets/port-2.jpg";

export const blogData = [
  {
    id: uuidv4(),
    image: blog1,
    title: "Right-to-left behind development in mobile web design",
    category: "UI Design",
    date: "03 May 2019",
  },
  {
    id: uuidv4(),
    image: blog2,
    title: "How to build responsive layouts with Tailwind CSS",
    category: "Frontend",
    date: "10 June 2020",
  },
  {
    id: uuidv4(),
    image: blog1,
    title: "React performance optimization tips you should know",
    category: "React",
    date: "15 July 2021",
  },
  {
    id: uuidv4(),
    image: blog2,
    title: "React performance optimization tips you should know",
    category: "React",
    date: "15 July 2021",
  },
];


//pricing datalist

export const pricingData = [
  {
    id: 1,
    type: "Basic Plan",
    time: "1 Month",
    title: "Starter Package",
    subtitle: "Personal Website",
  },
  {
    id: 2,
    type: "Standard Plan",
    time: "3 Months",
    title: "Growth Package",
    subtitle: "Business Website",
  },
  {
    id: 3,
    type: "Premium Plan",
    time: "6 Months",
    title: "Pro Package",
    subtitle: "Full SaaS UI",
  },
  // {
  //   id: 4,
  //   type: "Enterprise Plan",
  //   time: "1 Year",
  //   title: "Ultimate Package",
  //   subtitle: "Custom Web App",
  // },
];