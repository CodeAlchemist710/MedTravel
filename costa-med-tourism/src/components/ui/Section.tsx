import React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  background?: 'white' | 'light' | 'primary' | 'accent';
  centered?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  className,
  children,
  fullWidth = false,
  background = 'white',
  centered = false,
}) => {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-neutral',
    primary: 'bg-primary text-white',
    accent: 'bg-accent-light',
  };

  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        bgClasses[background],
        className
      )}
    >
      <div className={cn(
        fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      )}>
        <div className={cn(
          'mb-12',
          centered && 'text-center'
        )}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl md:text-2xl max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;
