'use client';
import React from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePathname, useRouter } from 'next/navigation';

interface Props {
  className?: string;
  lang: string;
}

export const SelectGroup: React.FC<Props> = ({ className, lang }) => {
  const router = useRouter();
  const path = usePathname();

  const replacePath = (value: string) => {
    const languages: string[] = ['ru', 'en', 'nl'];
    const segments = path.split('/').filter(Boolean);

    if (languages.includes(segments[0])) {
      segments.shift();
    }
    segments.unshift(value);

    return '/' + segments.join('/');
  };

  const handleChange = (value: string) => {
    router.push(replacePath(value));
  };

  return (
    <div className={className}>
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-[80px] uppercase text-lg border-[#406592]">
          <SelectValue placeholder={lang} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="ru">RU</SelectItem>
          <SelectItem value="nl">NL</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
