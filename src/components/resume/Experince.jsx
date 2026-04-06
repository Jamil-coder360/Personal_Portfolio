import React from 'react'
import ExperienceCard from './ExperienceCard';
const experincelist = [
  {
    id: 1,
    company: "Google",
    title: "Senior Product Designer",
    date: "2018 - Present",
  },
  {
    id: 2,
    company: "Facebook",
    title: "Product Designer",
    date: "2015 - 2018",
  },
  {
    id: 3,
    company: "Apple",
    title: "Junior Product Designer",
    date: "2012 - 2015",
  },
  {
    id: 4,
    company: "Microsoft",
    title: "Intern Product Designer",
    date: "2010 - 2012",
  }
];  

const Experince = () => {
  return (
    <div>
      <h1>Experience</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2  gap-6 pt-10'>
        {experincelist.map((exp) => (
          <ExperienceCard
            key={exp.id}
            company={exp.company}
            title={exp.title}
            date={exp.date}
          />
        ))}
      </div>
    </div>
  )
}

export default Experince;