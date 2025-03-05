import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, Share2 } from "lucide-react";

const DevelopersSection: React.FC = () => {
  const developers = [
    {
      name: "Narayan Bhusal",
      role: "Senior Frontend Developer",
      description:
        "Specializes in frontend development and tools integrations.",
      image: "https://iili.io/2yBChFV.png",
      skills: ["Gemini", "React", "TypeScript"],
      gradient: "from-blue-500 to-indigo-600",
      links: ["github", "linkedin", "share", "external"],
      githubUsername: "naranbhusal02",
      linkedinUsername: "naranbhusal02",
      shareUsername: "naranbhusal02.xyz",
      externalLink: "https://naranbhusal.me",
      externalxyz: "https://naranbhusal.xyz",
    },
    {
      name: "Rabin Chudali",
      role: "UI/UX Designer & Developer",
      description:
        "Creates beautiful, intuitive interfaces with a focus on user experience. Designed the sleek, modern UI for our Gemini chatbot application.",
      image: "https://iili.io/2yt9vbs.jpg",
      skills: ["UI/UX", "Tailwind", "Framer Motion"],
      gradient: "from-emerald-500 to-teal-600",
      links: ["github", "linkedin"],
      githubUsername: "rabinchudali",
      linkedinUsername: "rabinchudali",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
      >
        Meet Our Developers
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {developers.map((dev, index) => (
          <motion.div
            key={dev.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="glass-morphism overflow-hidden"
          >
            <div className={`h-32 bg-gradient-to-r ${dev.gradient}`} />
            <div className="p-6 -mt-16 relative">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden p-0.5 bg-gradient-to-r from-indigo-500 to-purple-600">
                    <div className="w-full h-full rounded-xl overflow-hidden">
                      <img
                        src={dev.image}
                        alt={dev.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-100">
                      {dev.name}
                    </h3>
                    <p className="text-purple-300 text-sm">{dev.role}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {dev.links.includes("github") && (
                    <a
                      href={`https://github.com/${dev.githubUsername}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="p-2 glass-morphism rounded-lg hover:bg-white/10 transition-colors">
                        <Github className="w-4 h-4 text-purple-300" />
                      </button>
                    </a>
                  )}
                  {dev.links.includes("linkedin") && (
                    <a
                      href={`https://linkedin.com/in/${dev.linkedinUsername}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="p-2 glass-morphism rounded-lg hover:bg-white/10 transition-colors">
                        <Linkedin className="w-4 h-4 text-purple-300" />
                      </button>
                    </a>
                  )}
                  {dev.links.includes("share") && (
                    <a
                      href={`https://${dev.shareUsername}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="p-2 glass-morphism rounded-lg hover:bg-white/10 transition-colors">
                        <Share2 className="w-4 h-4 text-purple-300" />
                      </button>
                    </a>
                  )}
                  {dev.links.includes("external") && (
                    <a
                      href={dev.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="p-2 glass-morphism rounded-lg hover:bg-white/10 transition-colors">
                        <ExternalLink className="w-4 h-4 text-purple-300" />
                      </button>
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-4 text-purple-200 text-sm">{dev.description}</p>
              <div className="flex gap-2 mt-4">
                {dev.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs glass-morphism text-purple-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DevelopersSection;
