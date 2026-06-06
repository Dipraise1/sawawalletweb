"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamKeys = [
  {
    name: "Divine Raphael",
    role: "Founder & Engineering",
    image: "/images/team/divine.jpg",
    bio: "Builds the payment rails and wallet infrastructure behind Sawa.",
    socials: {
      email: "raphealdivine2@gmail.com",
      twitter: "https://x.com/Divinecodes11"
    }
  },
  {
    name: "Peter",
    role: "Co-Founder, Growth",
    image: "/images/team/peter.jpg",
    bio: "Leads brand and growth — getting Sawa into hands across the continent.",
    socials: {
      twitter: "https://x.com/thatcrypt00guy"
    }
  },
  {
    name: "Tyler",
    role: "Co-Founder, Finance",
    image: "/images/team/tyler.png",
    bio: "Heads finance and strategy, keeping Sawa sustainable and compliant."
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
            Leadership
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
            A small team building cross-border payments for Africa.
          </motion.p>
        </div>

        {/* Leadership Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teamKeys.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="h-full"
            >
              <div className="h-full bg-white border border-gray-100 rounded-3xl p-8 hover:border-forest-green/20 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">

                {/* Image */}
                <div className="relative w-24 h-24 mb-5 rounded-full overflow-hidden ring-1 ring-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-charcoal">{member.name}</h3>
                <span className="text-forest-green font-semibold uppercase tracking-wider text-[11px] mt-1 mb-3">
                  {member.role}
                </span>
                <p className="text-gray-500 leading-relaxed text-sm flex-grow">
                  {member.bio}
                </p>

                {/* Socials */}
                {member.socials && (
                  <div className="flex items-center justify-center gap-2.5 mt-5">
                    {member.socials.email && (
                      <a
                        href={`mailto:${member.socials.email}`}
                        className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-forest-green hover:text-white transition-colors"
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
                        className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-colors"
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

      </div>
    </section>
  );
};

export default TeamSection;
