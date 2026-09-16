import { personalInfo, introduction } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/** Domaines mis en avant sous le titre, dans l'ordre du positionnement. */
const focusAreas = ["DevOps & Cloud", "Machine Learning", "Java · Python", "CI/CD"];

export default function HeroSection() {
  const baseUrl = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

  const contactLinks = [
    { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Github, label: "GitHub", href: personalInfo.github, external: true },
    { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin, external: true },
  ];

  return (
    <section className="pt-24 pb-10 md:pt-28 md:pb-12">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <motion.div
          className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-3xl md:text-5xl font-semibold tracking-tight"
              variants={childVariants}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              className="mt-3 text-lg md:text-xl text-brand font-medium"
              variants={childVariants}
            >
              {personalInfo.title}
            </motion.p>

            <motion.ul
              className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start"
              variants={childVariants}
            >
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-brand-border bg-brand-muted px-3 py-1 text-xs font-medium"
                >
                  {area}
                </li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 justify-center md:justify-start text-sm text-muted-foreground"
              variants={childVariants}
            >
              <span className="flex items-center">
                <MapPin className="h-4 w-4 mr-1.5" aria-hidden="true" />
                {personalInfo.location}
              </span>
              {contactLinks.map(({ icon: Icon, label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-center hover:text-brand transition-colors"
                >
                  <Icon className="h-4 w-4 mr-1.5" aria-hidden="true" />
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div className="flex justify-center shrink-0" variants={childVariants}>
            <picture>
              <source srcSet={`${normalizedBase}profile.webp`} type="image/webp" />
              <img
                src={`${normalizedBase}profile.jpg`}
                alt="Portrait de Jordan Tatue"
                width={480}
                height={525}
                className="w-40 md:w-52 h-auto rounded-2xl object-cover ring-1 ring-brand-border"
              />
            </picture>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 border-l-2 border-brand pl-6 space-y-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {introduction.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="text-sm md:text-base text-muted-foreground leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
