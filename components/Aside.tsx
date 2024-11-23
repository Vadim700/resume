import React from 'react';
import Image from 'next/image';
import { cn } from '@/components/lib/utils';
import Link from 'next/link';
import { TelegrammIcon } from './shared/TelegrammIcon';
import { WhatsAppIcon } from './shared/WhatsAppIcon';
import { Resume } from '@/types';

interface Props {
  className?: string;
  dict: Resume;
}

export const Aside: React.FC<Props> = ({ className, dict }) => {
  const personal = dict?.aside.personalData;

  return (
    <aside className={cn(className, 'row-span-2  bg-[#406592]	text-white pb-6')}>
      <Image
        src="/hapy-men.jpeg"
        width={500}
        height={500}
        alt="Picture of the author"
        className="rounded-full p-12 aspect-square object-cover max-sm:p-10"
      />
      <section className={cn('pl-6 mb-4')}>
        <article className="mt-2">
          <h3 className="pb-2 text-xl border-b font-semibold">
            {personal?.title}
          </h3>
          <h4 className="mt-2 font-semibold">{personal?.name.title}</h4>
          <span>{personal?.name.value}</span>
        </article>

        <article className="mt-2">
          <h4 className="font-semibold">{personal?.phone.title}</h4>
          <Link href="tel:+79085728793" className="hover:underline inline">
            +7 908 572 87 93
          </Link>
        </article>

        <article className="mt-2">
          <h4 className="font-semibold">{personal?.email.title}</h4>
          <Link
            href="mailto:bekmansurov700@mail.ru"
            className="hover:underline block"
          >
            bekmansurov700@mail.ru
          </Link>
          <Link
            href="mailto:bekmansurovvadim@gmail.com"
            className="hover:underline block"
          >
            bekmansurovvadim@gmail.com
          </Link>
        </article>

        <article className="mt-2">
          <h4 className="font-semibold">GitHub</h4>
          <Link
            href="https://github.com/Vadim700"
            target="_blank"
            className="hover:underline"
          >
            https://github.com/Vadim700
          </Link>
        </article>

        <article className="mt-2">
          <h4 className="font-semibold">LinkedIn</h4>
          <Link
            href="http://linkedin.com/in/vadim-bekmansurov-220153328"
            target="_blank"
            className="hover:underline"
          >
            http://linkedin.com/in/vadim-bekmansurov-220153328
          </Link>
        </article>

        <article className="mt-2">
          <h4 className="font-semibold">{personal?.dateOfBirth.title}</h4>
          <p>{personal?.dateOfBirth.value}</p>
        </article>

        <article className="mt-2">
          <h4 className="font-semibold">{personal?.PlaceOfBirth.title}</h4>
          <p>{personal?.PlaceOfBirth.value}</p>
        </article>
      </section>
      <section className={cn('pl-6 mb-4')}>
        <h3 className="pb-2 text-xl border-b font-semibold">
          {dict?.aside?.hobbies.title}
        </h3>
        <ul>
          <li className="mt-2 font-semibold text-base/4">
            {dict?.aside?.hobbies.first}
          </li>
          <li className="font-semibold">{dict?.aside?.hobbies.second}</li>
          <li className="font-semibold">{dict?.aside?.hobbies.third}</li>
          <li className="font-semibold">{dict?.aside?.hobbies.fourth}</li>
        </ul>
      </section>
      <section className={cn('pl-6 mb-4')}>
        <h3 className="pb-2 text-xl border-b font-semibold">
          {dict.aside.languages.title}
        </h3>
        <p className="mt-2 flex justify-between pr-6">
          <span className="font-semibold">
            {dict?.aside?.languages.main.lang.title}
          </span>
          <span>{dict?.aside?.languages.main.lang.value}</span>
        </p>
        <p className="flex justify-between pr-6">
          <span className="font-semibold">
            {dict?.aside?.languages.alt.lang.title}
          </span>
          <span>{dict?.aside?.languages.alt.lang.value}</span>
        </p>
      </section>
      <section className={cn('pl-6')}>
        <ul className="flex items-center gap-5 mt-8">
          <li className="hover:scale-105 transition-transform">
            <Link href={'https://t.me/Nikadim700'} aria-label='telegramm'>
              <TelegrammIcon size="50px" className="text-white" />
            </Link>
          </li>
          <li className="hover:scale-105 transition-transform">
            <Link href={'https://wa.me/89085728793'} aria-label='whatsApp'>
              <WhatsAppIcon size="50px" className="text-white" />
            </Link>
          </li>
        </ul>
      </section>
    </aside>
  );
};
