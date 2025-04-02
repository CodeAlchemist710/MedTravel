import React from 'react';
import Image from 'next/image';
import { cn } from '../../lib/utils';

interface CardProps {
  className?: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  className,
  title,
  description,
  imageSrc,
  imageAlt = 'Card image',
  footer,
  children,
}) => {
  return (
    <div className={cn(
      'bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1',
      className
    )}>
      {imageSrc && (
        <div className="relative h-48 w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-dark mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 bg-neutral border-t border-gray-100">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
