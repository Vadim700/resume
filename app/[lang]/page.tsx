import { AccordionGRoup } from '@/components/AccordionGroup';
import { SheetGRoup } from '@/components/SheetGroup';
import Link from 'next/link';
import { getDictionary } from './dictionaries';
import { Resume } from '@/types';

type Params = Promise<{ lang: string }>;

export default async function Home({ params }: { params: Params }) {
  const { lang } = await params;
  const dict: Resume = await getDictionary(lang);

  return (
    <main className="max-[992px]:relative">
      <p className="mb-4">{dict.page.subtitle}</p>
      <section>
        <h2 className="text-2xl font-semibold border-b pb-4">
          {dict.page.experience.title}
        </h2>
        <article className="pt-4">
          <div className=" flex justify-between gap-2">
            <p className="font-semibold">{dict.page.experience.current.name}</p>
            <span className="max-[450px]:hidden">
              {dict.page.experience.current.date}
            </span>
            <span className="min-[450px]:hidden whitespace-nowrap min-[450px]:text-sm">
              08.2023 — наст. время
            </span>
          </div>
          <p className="italic mb-2">
            <Link
              href={'https://umasoft.pro/'}
              className="text-sky-800 hover:text-sky-500 "
            >
              UMA Soft
            </Link>
          </p>
          <p>{dict.page.experience.current.ditail}</p>
        </article>
        <article className="pt-4">
          <div className="flex justify-between gap-2">
            <p className="font-semibold">
              {dict.page.experience.previous.name}
            </p>
            <span className="max-[450px]:hidden">
              {dict.page.experience.previous.date}
            </span>
            <span className="min-[450px]:hidden min-[450px]:text-sm whitespace-nowrap">
              12.2022—08.2023
            </span>
          </div>
          <p className="italic mb-2">{dict.page.experience.previous.company}</p>
          <p>{dict.page.experience.previous.ditail}</p>
        </article>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold border-b pb-4 mt-4">
          {dict.page.projects.title}
        </h2>
        <AccordionGRoup dict={dict} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-4">
          {dict.page.education.title}
        </h2>
        <article className="max-[600px]:mb-2">
          <div className="flex justify-between pt-2 mb-2 gap-2">
            <p className="font-semibold">{dict.page.education.miphi.title}</p>
            <span className="max-[450px]:hidden">
              {dict.page.education.miphi.date}
            </span>
            <span className="min-[450px]:hidden min-[450px]:text-sm whitespace-nowrap">
              09.2019-02.2023
            </span>
          </div>
          <div className="italic max-[600px]:mb-2">
            {dict.page.education.miphi.name}
          </div>
          <div className="">
            {dict.page.education.miphi.specialization.name}:
            <span className="font-semibold">
              {dict.page.education.miphi.specialization.value}
            </span>
          </div>
        </article>
        <article>
          <div className="flex justify-between pt-2 mb-2 gap-2">
            <p className="font-semibold">{dict.page.education.susu.title}</p>
            <span className="max-[450px]:hidden">
              {dict.page.education.susu.date}
            </span>
            <span className="min-[450px]:hidden min-[450px]:text-sm whitespace-nowrap">
              09.2007-05.2011
            </span>
          </div>
          <div className="italic max-[600px]:mb-2">
            {dict.page.education.susu.name}
          </div>
          <div className="mb-4">
            {dict.page.education.susu.specialization.name}:
            <span className="font-semibold">
              {dict.page.education.susu.specialization.value}
            </span>
          </div>
        </article>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-4">
          {dict.page.courses.title}
        </h2>
        <article>
          <div className="flex justify-between pt-2 mb-2">
            <p className="font-semibold">{dict.page.courses.react.title}</p>
            <span className="max-[450px]:hidden">
              {dict.page.courses.react.date}
            </span>
            <span className="min-[450px]:hidden min-[450px]:text-sm whitespace-nowrap">
              08.2023-10.2023
            </span>
          </div>
          <div className="italic">learn.javascript.ru, React</div>
        </article>
        <article>
          <div className="flex justify-between pt-2 mb-2">
            <p className="font-semibold">{dict.page.courses.js.title}</p>
            <span className="max-[450px]:hidden">
              {dict.page.courses.js.date}
            </span>
            <span className="min-[450px]:hidden min-[450px]:text-sm whitespace-nowrap">
              06.2023-07.2023
            </span>
          </div>
          <div className="italic">learn.javascript.ru, JavaScript</div>
        </article>
        <article>
          <div className="flex justify-between pt-2 mb-2">
            <p className="font-semibold">{dict.page.courses.markup.title}</p>
            <span className="max-[450px]:hidden">
              {dict.page.courses.markup.date}
            </span>
            <span className="min-[450px]:hidden min-[450px]:text-sm whitespace-nowrap">
              02.2023-04.2023
            </span>
          </div>
          <div className="italic mb-4">{dict.page.courses.markup.name}</div>
        </article>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-4">
          {dict.page.skills.title}
        </h2>
        <article className="pt-2 flex items-center justify-between w-full">
          <span className="mr-20 whitespace-nowrap max-[478px]:text-sm  max-[478px]:mr-0">
            HTML CSS JS PHP
          </span>
          <span className="border w-full max-w-52 inline-block h-2 bg-sky-800 rounded-full max-[478px]:max-w-36 shrink-0"></span>
        </article>
        <article className="pt-2 flex items-center justify-between w-full">
          <span className="mr-20 max-[478px]:text-sm max-[478px]:mr-0">
            SASS(SCSS) БЭМ style-module Tailwind MUI shadcn/ui
          </span>
          <span className="border w-full max-w-52 shrink-0 inline-block h-2 bg-sky-800 rounded-full max-[478px]:max-w-36 shrink-0"></span>
        </article>
        <article className="pt-2 mb-4 flex items-center justify-between w-full">
          <span className="mr-20 whitespace-nowrap max-[478px]:text-sm max-[478px]:mr-0">
            React.js Next.js TS
          </span>
          <span className="border w-full max-w-40  inline-block h-2 bg-sky-600 rounded-full max-[478px]:max-w-28"></span>
        </article>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-4">
          {dict.page.achivments.title}
        </h2>
        <div className="pt-2 pb-4">{dict.page.achivments.value}</div>
      </section>

      <div className="hidden max-[992px]:block ">
        <SheetGRoup dict={dict} />
      </div>
    </main>
  );
}
