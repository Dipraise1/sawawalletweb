"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamKeys = [
  {
    name: "Divine Raphael",
    role: "Founder & Engineering",
    image: "/images/team/divine.jpg",
    bio: "Architect of phone-first identity, Privy integration, Rust treasury rails & open-source toolkit for Solana grants.",
    socials: {
      email: "raphealdivine2@gmail.com",
      twitter: "https://x.com/Divinecodes11"
    }
  },
  {
    name: "Peter",
    role: "Co-Founder, Growth",
    image: "/images/team/peter.jpg",
    bio: "Drives user acquisition, community, and strategic partnerships across Africa.",
    socials: {
      twitter: "https://x.com/thatcrypt00guy"
    }
  },
  {
    name: "Tyler",
    role: "Co-Founder, Finance",
    image: "/images/team/tyler.png",
    bio: "Leads financial strategy, compliance (KYC/AML), and grant/fundraising efforts.",
  }
];


const TeamSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-sand/30">
      <div className="absolute inset-0 bg-grain opacity-[0.03]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-forest-green mb-4"
          >
            LEADERSHIP + QUIET CONTRIBUTORS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 mb-4"
          >
            The Team Behind Sawa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-gray-600 max-w-xl mx-auto"
          >
            A lean, battle-tested team. Three of us lead publicly; a wider group of engineers, designers, and operators contribute behind the scenes and are available for diligence upon request.
          </motion.p>
        </div>

        {/* Leadership Grid — with organic stagger and subtle hover depth */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teamKeys.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1 + Math.random() * 0.1, 
                duration: 0.7, 
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.02, 
                rotate: index % 2 === 0 ? 0.5 : -0.5,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="h-full group"
            >
              <div className="h-full bg-white border border-gray-100 rounded-3xl p-8 hover:border-forest-green/30 hover:shadow-[0_20px_50px_-15px_rgb(45,80,22,0.12)] transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden">

                {/* Image with subtle organic lift and grain */}
                <div className="relative w-24 h-24 mb-5 rounded-full overflow-hidden ring-1 ring-gray-100/80 group-hover:ring-luxury-gold/30 transition-all duration-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="96px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-charcoal group-hover:text-forest-green transition-colors">{member.name}</h3>
                <span className="text-forest-green font-semibold uppercase tracking-wider text-[11px] mt-1 mb-3">
                  {member.role}
                </span>
                <p className="text-gray-500 leading-relaxed text-sm flex-grow">
                  {member.bio}
                </p>

                {/* Socials with organic hover */}
                {member.socials && (
                  <div className="flex items-center justify-center gap-2.5 mt-5 opacity-70 group-hover:opacity-100 transition-all">
                    {member.socials.email && (
                      <a
                        href={`mailto:${member.socials.email}`}
                        className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-forest-green hover:text-white transition-all hover:scale-110 active:scale-95"
                        title="Email"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-all hover:scale-110 active:scale-95"
                        title="X (Twitter)"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Wider team — summarised by discipline, no names (contributors stay private) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 sm:p-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-forest-green mb-3">
              + The wider team
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Behind our public leadership is a tight group of contributors who prefer to stay
              off-stage. Together they cover the full stack of building a financial product —
              available for diligence on request.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {[
                "Backend & Infrastructure",
                "Mobile Engineering",
                "Product & Design",
                "Treasury & Rails",
                "Compliance (KYC/AML)",
                "Growth & Partnerships",
              ].map((discipline) => (
                <span
                  key={discipline}
                  className="text-sm font-medium text-charcoal bg-sand/60 border border-gray-200/70 px-4 py-2 rounded-full"
                >
                  {discipline}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TeamSection;
