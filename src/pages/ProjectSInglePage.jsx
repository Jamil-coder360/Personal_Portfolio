import { useEffect, useState } from "react";
import Section from "../components/Section/Section";
import Container from "../components/Section/Container";
import Portfolio from "../components/Portfolio";

import medoveImage from "../assets/image_med.png";
import { allProjects } from "../project"; // ← import here
import { useParams } from "react-router";


const ImagePlaceholder = ({ image, className = "" }) => (
  <div className={`bg-stone-200 rounded-xl overflow-hidden ${className}`}>
    <img src={image} alt="" className="w-full h-full object-cover" />
  </div>
);

const FontCard = ({ label, mono = false }) => (
  <div className="bg-stone-100 rounded-2xl p-5">
    <div className={`text-5xl font-medium text-stone-800 leading-none ${mono ? "font-mono" : ""}`}>
      Aa
    </div>
    <div className="text-[10px] uppercase tracking-widest text-stone-400 mt-2 mb-2">
      {label}
    </div>
    <div className={`text-xs text-stone-500 leading-relaxed ${mono ? "font-mono" : ""}`}>
      ABCDEFGHIJKLM<br />
      NOPQRSTUVWXYZ<br />
      0123456789
    </div>
  </div>
);

const ProjectSinglePage = () => {
    const { slug } = useParams();

  const project = allProjects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <h1>Project not found</h1>;
  return (
    <Section>
      <Container>
        <div className="bg-[#F8F6F1] font-sans">
          {/* Header */}
          <div className="mb-10">
            <p className="text-[11px] uppercase tracking-widest text-stone-400 mb-3">
              {project.category} &nbsp;·&nbsp; {project.date}
            </p>
            <h1 className="text-4xl font-medium text-stone-900 leading-tight mb-8">
              {project.title}
              <br />
              {project.subtitle}
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-6 mb-10">
              {[
                { label: "Client", value: project.client },
                { label: "Category", value: project.category },
                { label: "Tools", value: project.tools.join(", ") },
                { label: "" },
                { label: "Start date", value: project.startDate },
                { label: "End date", value: project.endDate },
              ].map((item, i) => (
                <div key={i}>
                  {item.label && (
                    <>
                      <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-stone-800">
                        {item.value}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>

            <ImagePlaceholder 
              className="w-full aspect-video" 
              image={project.heroImage} 
            />
          </div>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-xl font-medium text-stone-900 mb-4">Overview</h2>
            {project.overview.description.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-stone-500 mb-3">
                {para}
              </p>
            ))}
            <ul className="text-sm text-stone-500 space-y-1 pl-4">
              {project.overview.highlights.map((item, i) => (
                <li key={i} className="list-disc">{item}</li>
              ))}
            </ul>
          </section>

          {/* Typography */}
          <section className="mb-12">
            <h2 className="text-xl font-medium text-stone-900 mb-4">Typography</h2>
            <p className="text-sm leading-relaxed text-stone-500 mb-5">
              {project.typography.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-5">
              {project.typography.fonts.map((font, i) => (
                <FontCard 
                  key={i} 
                  label={font.label} 
                  mono={font.isMono} 
                />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {project.typography.images.map((img, i) => (
                <ImagePlaceholder 
                  key={i} 
                  className="w-full aspect-[4/3]" 
                  image={img.src} 
                />
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-xl font-medium text-stone-900 mb-4">Conclusion</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.conclusion.description.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-stone-500">
                  {para}
                </p>
              ))}
            </div>
          </section>

          <Portfolio />
        </div>
      </Container>
    </Section>
  );
};

export default ProjectSinglePage;