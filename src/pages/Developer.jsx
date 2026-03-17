import React from "react";

const SectionBlock = ({ title, children }) => (
  <section>
    <h2 className="text-xl font-medium mb-4 tracking-wide">
      {title}
    </h2>
    <div className="text-white/60 leading-relaxed">
      {children}
    </div>
  </section>
);

const Developer = () => {

  // Gmail compose link with prewritten content
  const email = "tatendaajmakura@gmail.com";
  const subject = encodeURIComponent("Project Inquiry");
  const body = encodeURIComponent(
    `Hello Tatenda,

I found your portfolio/GitHub project and would like to connect.

Purpose of contact:
• Internship opportunity
• Collaboration
• Freelance project
• General inquiry

Project / Opportunity Details:
• Organization or company name:
• Description:
• Expected deliverables:
• Timeline:
• Budget (if applicable):

Additional links or references (optional):

Thank you, and I look forward to your response.

Kind regards,`
  );

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

  return (
    <section className="bg-neutral-950 text-white px-6 py-24">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <header className="mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Developer
          </h1>

          <p className="mt-6 text-white/60 text-lg max-w-3xl leading-relaxed">
            This project explores how immersive 3D product experiences can be
            designed, optimized, and integrated into modern web applications —
            inspired by cinematic product storytelling and real-time interaction.
          </p>
        </header>

        {/* GRID CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <SectionBlock title="Technology Stack">
            <ul className="space-y-2">
              <li>• React + Vite</li>
              <li>• Three.js & React Three Fiber</li>
              <li>• GSAP with ScrollTrigger</li>
              <li>• Optimized GLTF assets</li>
            </ul>
          </SectionBlock>

          <SectionBlock title="Performance-First Design">
            3D assets are compressed and optimized to ensure smooth
            interaction across devices. Animations are synchronized with
            scroll and user input to maintain responsiveness and visual clarity.
          </SectionBlock>

          <SectionBlock title="Interaction & Experience">
            The experience focuses on scroll-driven storytelling, cinematic
            transitions, and intuitive 3D controls that feel natural rather
            than technical.
          </SectionBlock>

          <SectionBlock title="Extensible Architecture">
            The architecture is designed to scale — allowing new products,
            scenes, and interactive features to be introduced without
            restructuring the application.
          </SectionBlock>

        </div>

        {/* DIVIDER */}
        <div className="my-24 border-t border-white/10" />

        {/* DEVELOPER INFO */}
        <section>
          <h2 className="text-xl font-medium mb-6 tracking-wide">
            About the Developer
          </h2>

          <p className="text-white/60 max-w-3xl leading-relaxed">
            This Apple-inspired 3D web experience was developed by{" "}
            <span className="text-white font-medium">
              Tatenda Ainos Junior Makura
            </span>{" "}
            as part of a hands-on learning journey into advanced 3D effects,
            real-time rendering, and integrating interactive 3D objects into
            modern web applications.
          </p>

          {/* CONTACT CARD */}
          <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <p className="text-sm text-white/70 mb-4 font-medium">
              Contact Information
            </p>

            <div className="space-y-2 text-white/60">
              <p>
                <span className="text-white">Email:</span> {email}
              </p>

              <p>
                <span className="text-white">Mobile:</span>{" "}
                +263 71 871 1250 / +263 78 566 9109
              </p>

              <p>
                <span className="text-white">Focus:</span>{" "}
                Web Development, 3D Experiences, Interactive UI
              </p>
            </div>

            {/* CONTACT BUTTON */}
            <div className="bg-gradient-to-bl from-blue to-purple-700 p-0.5 max-w-fit max-h-fit mt-6 rounded-xl hover:scale-105 animate-glow">
              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-black transition"
              >
                Contact Me
              </a>
            </div>

          </div>
        </section>

      </div>
    </section>
  );
};

export default Developer;
