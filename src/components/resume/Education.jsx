import React from "react";
import ExperienceCard from "./ExperienceCard";
const experincelist = [
  {
    id: 1,
    institute: "Google",
    title: "Senior Product Designer",
    date: "2018 - Present",
  },
  {
    id: 2,
    institute: "Axtra Inco.",
    title: "BA Business Management",
    date: "03/2008 – 07/2011",
  },
  {
    id: 3,
    institute: "Axtra Inco.",
    title: "BA Business Management",
    date: "03/2008 – 07/2011",
  },
  {
    id: 4,
    institute: "Axtra Inco.",
    title: "BA Business Management",
    date: "03/2008 – 07/2011",
  }
]; 

const Education = () => {
  return (
    <div>
      <h1>Education</h1>

      <div className="grid grid-cols-1 gap-6 pt-10">
  {experincelist.map((item)=>(
    <ExperienceCard 
    key={item.id}
     company={item.institute}
            title={item.title}
            date={item.date}
            type={true}
            className="w-full"
    />

  ) )}
  
      </div>
    </div>
  );          
};

export default Education;