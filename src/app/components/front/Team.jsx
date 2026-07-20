"use client";

import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";

const team = [
  {
    name: "Marcelo Malveda",
    role: "Mechanical Engineer",
    bio: "From Tanauan City, Batangas. Graduated from Mapua Institute of Technology with a B.S. in Mechanical Engineering, giving him the skills to take a design from concept to finish.",
    image: "/images/testimonials/profile-2.avif",

  },
  {
    name: "Anna Cruz",
    role: "Lead Architect",
    bio: "From Lipa City, Batangas. Holds a B.S. in Architecture from the University of Santo Tomas, with a focus on blending traditional Filipino design with modern functionality.",
    image: "/images/testimonials/profile-3.avif",

  },
  {
    name: "Marco Villanueva",
    role: "Master Carpenter",
    bio: "From San Pablo, Laguna. Over 15 years on the tools, trained under his father in traditional woodworking before mastering modern joinery and finishing techniques.",
    image: "/images/testimonials/profile-4.avif",

  },
  {
    name: "Liza Fernandez",
    role: "Interior Designer",
    bio: "From Antipolo, Rizal. A graduate of the College of Saint Benilde's Interior Design program, she specializes in turning empty spaces into warm, livable homes.",
    image: "/images/testimonials/profile-1.avif",

  },
  {
    name: "Carlos Mendoza",
    role: "Site Supervisor",
    bio: "From Calamba, Laguna. Started as a laborer and worked his way up over a decade, now overseeing daily operations to keep every project safe and on schedule.",
    image: "/images/testimonials/profile-5.avif",

  },
  {
    name: "Sofia Ramos",
    role: "Client Relations Manager",
    bio: "From Batangas City. A communications graduate from De La Salle Lipa, she makes sure every client stays informed and confident from first call to final walkthrough.",
    image: "/images/testimonials/profile-6.avif",
  },
];
const Team = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <SectionHeader
          title="Meet Our Team"
          subtitle="The People Behind Every Build"
          textAlign="center"
        />

        <p className="text-dark/70 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto text-center -mt-6">
          Manacop Construction Services has an excellent in-house team with a
          wide variety of skills between us. All the members of our team are,
          first and foremost, good people, that we want to work with day in
          and day out. We have a positive attitude, we take our work
          seriously, and we love to build.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name + member.role}
              className="group rounded-lg overflow-hidden border border-secondary/30"
            >
              <div className="relative w-full aspect-4/5 max-h-87.5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                  <div className="flex gap-3">
                    
                     <a href="#"
                      aria-label="Facebook"
                      className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-primary hover:bg-white"
                    >
                      <FaFacebookF />
                    </a>
                    
                     <a href="#"
                      aria-label="LinkedIn"
                      className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-primary hover:bg-white"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-3 text-center">
                <h3 className="text-lg font-semibold text-dark">{member.name}</h3>
                <p className="text-sm text-primary mb-2 font-bold">{member.role}</p>
                <p className=" text-dark/60 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;