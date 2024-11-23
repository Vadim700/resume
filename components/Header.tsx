import { cn } from '@/components/lib/utils';
import React from 'react';
import { SelectGroup } from './shared/SelectGroup';
import { Resume } from '@/types';

interface Props {
  className?: string;
  dict: Resume;
  lang: string;
}

export const Header: React.FC<Props> = ({ className, dict, lang }) => {
  return (
    <header
      className={cn(
        className,
        'border-b py-6 flex items-center justify-between',
      )}
    >
      <h1
        className={cn(
          className,
          'text-5xl font-semibold max-[600px]:text-3xl pr-4',
        )}
      >
        {dict.header}
      </h1>
      <SelectGroup lang={lang} className="self-end" />
    </header>
  );
};
