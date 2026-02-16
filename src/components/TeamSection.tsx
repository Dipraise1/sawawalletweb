"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamKeys = [
  {
    name: "Divine Raphael",
    role: "Founder",
    title: "Engineering Lead",
    image: "/images/team/divine.png",
    bio: "Building modern financial infrastructure that connects crypto with real-world payments across Africa. Expert in Node.js, secure API architectures, and blockchain integrations.",
    gradient: "from-purple-500/20 to-blue-500/20",
    socials: {
      email: "raphealdivine2@gmail.com",
      twitter: "https://x.com/divinecodes11?s=21"
    }
  },
  {
    name: "Peter",
    role: "Co-Founder",
    title: "Head of Marketing",
    image: "/images/team/peter.png",
    bio: "Driving growth and brand strategy. Expert in market planning, user acquisition, and crafting the Sawa narrative to reach millions across the continent.",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    name: "Tyler",
    role: "Co-Founder",
    title: "Financial Expert",
    image: "/images/team/tyler.png",
    bio: "Ensuring financial stability and strategic planning. bringing deep expertise in financial modeling, compliance, and economic sustainability to the Sawa ecosystem.",
    gradient: "from-emerald-500/20 to-teal-500/20"
  }
];

const TeamSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-sand/30">
      <div className="absolute inset-0 bg-grain opacity-[0.03]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 mb-4"
          >
            Meet The Leadership
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-gray-600 max-w-2xl mx-auto"
          >
            Visionaries building the future of African finance
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamKeys.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-full"
            >
              <div className="relative h-full bg-white border border-gray-100 rounded-[2.5rem] p-6 hover:shadow-xl hover:border-forest-green/20 transition-all duration-300 flex flex-col items-center text-center overflow-hidden">
                
                {/* Background Gradient Blob */}
                <div className={`absolute top-0 left-0 right-0 h-48 bg-gradient-to-b ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} />

                {/* Image */}
                <div className="relative w-48 h-48 mb-8 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-tr from-forest-green/10 to-luxury-gold/10 rounded-full blur-md transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-[1.02] transition-transform duration-300 ring-1 ring-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-charcoal mb-1">{member.name}</h3>
                  <div className="flex flex-col gap-1 mb-6">
                    <span className="text-forest-green font-bold uppercase tracking-wider text-xs">{member.role}</span>
                    <span className="text-gray-500 font-medium text-sm">{member.title}</span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm flex-grow mb-6">
                    {member.bio}
                  </p>

                  {/* Socials */}
                  {member.socials && (
                    <div className="flex items-center justify-center gap-4 mt-auto">
                      {member.socials.email && (
                        <a 
                          href={`mailto:${member.socials.email}`} 
                          className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-forest-green hover:text-white transition-all duration-300 hover:scale-110"
                          title="Email"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a 
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
                          title="X (Twitter)"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
