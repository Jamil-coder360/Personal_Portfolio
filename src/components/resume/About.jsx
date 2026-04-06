import React from "react";

const About = () => {
  const aboutlist = [
    {
      id: 1,
      name: "Name",
      value: "Mark Henry",
    },
    {
      id: 2,
      name: "Nationality",
      value: "German",
    },
    {
      id: 3,
      name: "Phone",
      value: "+(2) 870 174 302",
    },
    {
      id: 4,
      name: "Experience",
      value: "12+ years",
    },
    {
      id: 5,
      name: "Email",
      value: "hello@henry.com",
    },
    {
      id: 6,
      name: "Address",
      value: "Berlin, Germany",
    },
    {
      id: 7,
      name: "Language",
      value: "English, German",
    },
    {
      id: 8,
      name: "LinkedIn",
      value: "linkedin.com/in/markhenry",
    },
  ];
  return (
    <div className="w-full">
      <h3 className="text-[#080808] text-[32px] leading-[1.3] font-bold pb-6">
        Product Designer
      </h3>
      <p className="flex flex-col text-[18px] leading-[1.5] text-[#080808]/60 font-normal">
        Mark Henry, Product Designer, based in German. That is where I come in.
        A lover of words, a wrangler of copy. Here to create copy that not only
        reflects who you are and what you stand for,
        <span className="pt-10">
          {" "}
          but words that truly land with those that read them, calling your
          audience in and making them want more.{" "}
        </span>
      </p>
      <div className="pt-14">
        <ul className="flex flex-col gap-3 max-w-full lg:max-w-[440px]">
          {aboutlist.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-10 text-[#080808] text-[18px] leading-[1.5] font-normal pt-4"
            >
              {item.name} <span className="font-bold">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
