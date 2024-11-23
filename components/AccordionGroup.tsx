import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { CircleDollarSign, GraduationCap } from 'lucide-react';
import { Resume } from '@/types';

interface Props {
  className?: string;
  dict: Resume;
}

export const AccordionGRoup: React.FC<Props> = ({ className, dict }) => {
  return (
    <div className={className}>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="w-full pr-10 flex justify-between max-[678px]:pr-6">
              <span className="inline-block mr-10 font-semibold">
                <span className="max-[678px]:hidden">
                  {dict.page.projects.moiseikin.name.comercial}: MOISEIKIN
                </span>
                <span
                  className="flex items-center gap-2 min-[678px]:hidden"
                  title="коммерческий проект"
                >
                  <CircleDollarSign />
                  MOISEIKIN
                </span>
              </span>
              <Link
                href="https://moiseikin.com/"
                target="_blank"
                className="text-sky-800 hover:underline underline-offset-4"
              >
                <span className="max-[540px]:hidden">
                  https://moiseikin.com/
                </span>
                <span className="min-[540px]:hidden underline">MOISEIKIN</span>
              </Link>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-4">
              <div className="italic">
                {dict.page.projects.moiseikin.steck.name}
              </div>
              <span className="mb-2">
                {dict.page.projects.moiseikin.steck.value}
              </span>
            </div>
            <p className="italic">
              {dict.page.projects.moiseikin.contribution.name}
            </p>
            <div>{dict.page.projects.moiseikin.contribution.value}</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="w-full pr-10 flex justify-between max-[678px]:pr-6">
              <span className="inline-block mr-10 font-semibold">
                <span className="max-[678px]:hidden">
                  {dict.page.projects.sota.name.comercial}:
                  {dict.page.projects.sota.name.companyName}
                </span>
                <span
                  className="flex items-center gap-2 min-[678px]:hidden"
                  title="коммерческий проект"
                >
                  <CircleDollarSign />
                  {dict.page.projects.sota.name.companyName}
                </span>
              </span>
              <Link
                href="https://shopsota.ru/"
                target="_blank"
                className="text-sky-800 hover:underline underline-offset-4"
              >
                <span className="max-[540px]:hidden">https://shopsota.ru/</span>
                <span className="min-[540px]:hidden underline">
                  {dict.page.projects.sota.name.companyName}
                </span>
              </Link>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-4">
              <p className="italic">{dict.page.projects.sota.steck.name}</p>
              <div className="mb-2">{dict.page.projects.sota.steck.value}</div>
            </div>
            <p className="italic">
              {dict.page.projects.sota.contribution.name}
            </p>
            <div>{dict.page.projects.sota.contribution.value}</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <div className="w-full pr-10 flex justify-between max-[678px]:pr-6">
              <span className="inline-block mr-10 font-semibold">
                <span className="max-[678px]:hidden">
                  {dict.page.projects.confidentPepper.name.comercial}:{' '}
                  {dict.page.projects.confidentPepper.name.companyName}
                </span>
                <span
                  className="flex items-center gap-2 min-[678px]:hidden"
                  title="коммерческий проект"
                >
                  <GraduationCap />
                  <span className="whitespace-nowrap">Confident Pepper</span>
                </span>
              </span>
              <Link
                href="https://rt-pepper-v2.vercel.app/"
                target="_blank"
                className="text-sky-800 hover:underline underline-offset-4"
              >
                <span className="max-[540px]:hidden">
                  https://rt-pepper-v2.vercel.app/
                </span>
                <span className="min-[540px]:hidden underline whitespace-nowrap">
                  Confident Pepper
                </span>
              </Link>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-4">
              <p className="italic">
                {dict.page.projects.confidentPepper.steck.name}
              </p>
              <div className="mb-2">
                {dict.page.projects.confidentPepper.steck.value}
              </div>
            </div>
            <p className="italic">
              {dict.page.projects.confidentPepper.contribution.name}
            </p>
            <div>{dict.page.projects.confidentPepper.contribution.value}</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <div className="w-full pr-10 flex justify-between max-[678px]:pr-6">
              <span className="inline-block mr-10 font-semibold">
                <span className="max-[678px]:hidden">
                  {dict.page.projects.burmash.name.comercial}: Burmash
                </span>
                <span
                  className="flex items-center gap-2 min-[678px]:hidden"
                  title="коммерческий проект"
                >
                  <CircleDollarSign />
                  Burmash
                </span>
              </span>
              <Link
                href="https://vadim700.github.io/burmash-20230419/"
                target="_blank"
                className="text-sky-800 hover:underline underline-offset-4"
              >
                <span className="max-[540px]:hidden">
                  https://vadim700.github.io/burmash-20230419/
                </span>
                <span className="min-[540px]:hidden underline">Burmash</span>
              </Link>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-4">
              <p className="italic"> {dict.page.projects.burmash.steck.name}</p>
              <div className="mb-2">gulp+webpack, scss, BEM, swiper.js</div>
            </div>
            <p className="italic">
              {dict.page.projects.burmash.contribution.name}
            </p>
            <div>{dict.page.projects.burmash.contribution.value}</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            <div className="w-full flex justify-between pr-10 max-[678px]:pr-6">
              <span className="inline-block mr-10 font-semibold">
                <span className="max-[678px]:hidden">
                  {dict.page.projects.ncTask.name.comercial}: nc-task
                </span>
                <span
                  className="flex items-center gap-2 min-[678px]:hidden"
                  title="коммерческий проект"
                >
                  <GraduationCap />
                  nc-task
                </span>
              </span>
              <Link
                href="https://nc-test-task.vercel.app/2/notes"
                target="_blank"
                className="text-sky-800 hover:underline underline-offset-4"
              >
                <span className="max-[540px]:hidden">
                  https://nc-test-task.vercel.app/2/notes
                </span>
                <span className="min-[540px]:hidden underline">nc-task</span>
              </Link>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-4">
              <p className="italic">{dict.page.projects.ncTask.steck.name}</p>
              <div className="mb-2">
                React.js, redux-toolkit, typeScript, Rest API, react-persist,
                react-router-dom v.6, style-module
              </div>
            </div>
            <p className="italic">
              {dict.page.projects.ncTask.contribution.name}
            </p>
            <div>{dict.page.projects.ncTask.contribution.value}</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
