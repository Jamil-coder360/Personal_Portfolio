import { useState } from "react";

const ImagePlaceholder = ({ className = "" }) => (
  <div className={`bg-stone-200 rounded-xl ${className}`} />
);

const Badge = ({ children }) => (
  <span className="text-[10px] uppercase tracking-widest text-stone-400 border border-stone-300 rounded px-2 py-0.5">
    {children}
  </span>
);

const RelatedCard = ({ title }) => (
  <div className="bg-stone-100 rounded-2xl overflow-hidden group cursor-pointer">
    <ImagePlaceholder className="w-full aspect-video rounded-none" />
    <div className="px-4 py-3">
      <div className="flex gap-2 mb-2">
        <Badge>App</Badge>
        <Badge>Development</Badge>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-stone-800">{title}</span>
        <span className="text-stone-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-base">↗</span>
      </div>
    </div>
  </div>
);

const FontCard = ({ label, display, mono }) => (
  <div className="bg-stone-100 rounded-2xl p-5">
    <div className={`text-5xl font-medium text-stone-800 leading-none ${mono ? "font-mono" : ""}`}>
      Aa
    </div>
    <div className="text-[10px] uppercase tracking-widest text-stone-400 mt-2 mb-2">{label}</div>
    <div className={`text-xs text-stone-500 leading-relaxed ${mono ? "font-mono" : ""}`}>
      ABCDEFGHIJKLM<br />
      NOPQRSTUVWXYZ<br />
      0123456789
    </div>
  </div>
);

const ProjectSinglePage = () => {
  return (
    <div className="min-h-screen bg-[#F8F6F1] font-sans">
      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-widest text-stone-400 mb-3">
            UI Design &nbsp;·&nbsp; 15 May 2025
          </p>
          <h1 className="text-4xl font-medium text-stone-900 leading-tight mb-8">
            Mendero fintech<br />dashboard design
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-6 mb-10">
            {[
              { label: "Client", value: "Medharum" },
              { label: "Category", value: "User Experience" },
              { label: "Tools", value: "Figma, Webflow" },
              { label: "" },
              { label: "Start date", value: "09/01/2020" },
              { label: "End date", value: "09/01/2020" },
            ].map((item, i) => (
              <div key={i}>
                {item.label && (
                  <>
                    <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium text-stone-800">{item.value}</p>
                  </>
                )}
              </div>
            ))}
          </div>

          <ImagePlaceholder className="w-full aspect-video" />
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-stone-900 mb-4">Overview</h2>
          <p className="text-sm leading-relaxed text-stone-500 mb-3">
            Minimalism combined with elements of french typography and brutalism helped us to realise the site exactly as we imagined with this client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution.
          </p>
          <p className="text-sm leading-relaxed text-stone-500 mb-3">
            Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution client, and close collaboration.
          </p>
          <p className="text-sm leading-relaxed text-stone-500 mb-4">
            That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them want more.
          </p>
          <ul className="text-sm text-stone-500 space-y-1 pl-4">
            {["Advantage", "Accomplished", "Marketplace startups", "SaaS startups"].map((item) => (
              <li key={item} className="list-disc">{item}</li>
            ))}
          </ul>
        </section>

        {/* Typography */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-stone-900 mb-4">Typography</h2>
          <p className="text-sm leading-relaxed text-stone-500 mb-5">
            The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a futuristic tone, and a bold, masculine font synonymous with 'construction'. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky 'construction' vibe. We use Chonery for general display and when we want to drive attention to the content, and the technical and geometric Sans font for the body copy and paste overall hierarchy.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-5">
            <FontCard label="Chonery — Display" />
            <FontCard label="Sans — Body" mono />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ImagePlaceholder className="w-full aspect-[4/3]" />
            <ImagePlaceholder className="w-full aspect-[4/3]" />
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-stone-900 mb-4">Conclusion</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[0, 1].map((i) => (
              <p key={i} className="text-sm leading-relaxed text-stone-500">
                The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a futuristic tone, and a bold, masculine font synonymous with 'construction'. We came up with something in the middle, leaning towards lighter-weighted fonts. We use Chonery for general display and when we want to drive attention to the content, and the technical and geometric Sans font for the body copy and paste overall hierarchy.
              </p>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-stone-200 my-10" />

        {/* Related Work */}
        <section>
          <p className="text-[11px] uppercase tracking-widest text-amber-500 text-center mb-2">Portfolio</p>
          <h2 className="text-3xl font-medium text-stone-900 text-center mb-8">
            Related w<span className="text-amber-500 underline underline-offset-4">o</span>rk
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <RelatedCard title="Basinik Finance App" />
            <RelatedCard title="Oxilex Dashboard design" />
          </div>
        </section>

      </div>
    </div>
  );
}

export default ProjectSinglePage