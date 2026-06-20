import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';
import { config } from '@/portfolio.config';
import { fadeUpVariants } from '@/lib/animation';

const fadeUp = fadeUpVariants(48, 0.8, 0.12);

const LEVEL_STYLE: Record<string, string> = {
  native: 'bg-primary text-primary-foreground border-primary',
  fluent: 'bg-primary/15 text-primary border-primary/30',
  conversational: 'bg-secondary text-foreground border-border',
  professional: 'bg-secondary text-foreground border-border',
  basic: 'bg-secondary/60 text-muted-foreground border-border',
  elementary: 'bg-secondary/60 text-muted-foreground border-border',
};

function levelStyle(level: string) {
  return (
    LEVEL_STYLE[level.toLowerCase()] ??
    'bg-secondary text-foreground border-border'
  );
}

export function About() {
  const ref = useRef<HTMLElement>(null);

  const hasLanguages = config.languages && config.languages.length > 0;

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="mx-auto max-w-4xl">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-primary mb-4 font-mono text-xs font-medium tracking-widest uppercase"
        >
          About Me
        </motion.p>
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="section-heading text-foreground mb-6 text-4xl leading-tight md:text-5xl"
        >
          The person behind
          <br />
          <em className="font-light not-italic">the keyboard.</em>
        </motion.h2>
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-8 h-px w-12"
          style={{
            background:
              'linear-gradient(90deg, hsl(var(--primary)), transparent)',
          }}
        />
        <motion.p
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-muted-foreground text-base leading-relaxed font-light whitespace-pre-line"
        >
          {config.about}
        </motion.p>

        {config.email && (
          <motion.a
            variants={fadeUp}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            href={`mailto:${config.email}`}
            className="text-primary mt-6 inline-flex items-center gap-2 text-sm font-medium hover:underline"
            data-testid="link-email"
          >
            <Mail size={14} />
            {config.email}
          </motion.a>
        )}

        {hasLanguages && (
          <motion.div
            variants={fadeUp}
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="border-border mt-8 border-t pt-6"
          >
            <div className="text-muted-foreground mb-3 flex items-center gap-1.5 font-mono text-xs font-medium tracking-widest uppercase">
              <Globe size={12} />
              Languages
            </div>
            <div className="flex flex-wrap gap-2">
              {config.languages.map((lang) => (
                <span
                  key={lang.name}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${levelStyle(lang.level)}`}
                >
                  {lang.name}
                  <span className="font-normal opacity-60">·</span>
                  <span className="font-normal opacity-75">
                    {lang.level}
                  </span>
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
