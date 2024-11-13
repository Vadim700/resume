import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { CircleDollarSign, GraduationCap } from 'lucide-react';

interface Props {
  className?: string;
}

export const AccordionGRoup: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="w-full pr-10 flex justify-between max-[678px]:pr-6">
              <span className="inline-block mr-10 font-semibold">
                <span className="max-[678px]:hidden">
                  Коммерческий проект: MOISEIKIN
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
              <div className="italic">Стек:</div>
              <span className="mb-2">
                1c-битрикс, php, javaScript, jQuery, sass(scss), БЭМ
              </span>
            </div>
            <p className="italic">Мой вклад в проект:</p>
            <div>
              Разработал мессенджер на чистом js с ленивой подгрузкой, поиском
              по сообщениям и названиям чатов, функционалом отправки чатов в
              архив и возможностью прикрепления файлов. Расширил функционал
              конструктора сайтов. Разработал функционал drag-end-drop
              сортировки в избранных товарах. Разработал функционал привизок
              продуктов для объединения в наборы. Произвел миграцию Google карты
              на современную библиотеку. Заменил устаревшие jQery библиотеки на
              современные плагины.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="w-full pr-10 flex justify-between max-[678px]:pr-6">
              <span className="inline-block mr-10 font-semibold">
                <span className="max-[678px]:hidden">
                  Коммерческий проект: завод Сота
                </span>
                <span
                  className="flex items-center gap-2 min-[678px]:hidden"
                  title="коммерческий проект"
                >
                  <CircleDollarSign />
                  завод Сота
                </span>
              </span>
              <Link
                href="https://shopsota.ru/"
                target="_blank"
                className="text-sky-800 hover:underline underline-offset-4"
              >
                <span className="max-[540px]:hidden">https://shopsota.ru/</span>
                <span className="min-[540px]:hidden underline">завод Сота</span>
              </Link>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-4">
              <p className="italic">Стек:</p>
              <div className="mb-2">1c-битрикс, php, javaScript, jQuery</div>
            </div>
            <p className="italic">Мой вклад в проект:</p>
            <div>
              Уменьшил скорость загрузки главной страницы и каточки товара путем
              миграции со slick-slider(jQuery) на swiper-slider(нативынй js).
              Разработал фронт таблицы-калькулятора подборки товара.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <div className="w-full pr-10 flex justify-between max-[678px]:pr-6">
              <span className="inline-block mr-10 font-semibold">
                <span className="max-[678px]:hidden">
                  Некоммерческий проект: Confident Pepper
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
              <p className="italic">Стек:</p>
              <div className="mb-2">
                React.js, redux-toolkit, typeScript, Rest API, react-persist,
                react-router-dom v.6, style-module
              </div>
            </div>
            <p className="italic">Мой вклад в проект:</p>
            <div>
              Разработал с нуля приложение для работы с данными, полеченными из
              API.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <div className="w-full pr-10 flex justify-between max-[678px]:pr-6">
              <span className="inline-block mr-10 font-semibold">
                <span className="max-[678px]:hidden">
                  Коммерческий проект: Burmash
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
              <p className="italic">Стек:</p>
              <div className="mb-2">gulp+webpack, scss, BEM, swiper.js</div>
            </div>
            <p className="italic">Мой вклад в проект:</p>
            <div>
              Сверстал многостраничный сайт придерживаясь адаптивной,
              семантической, кроссбраузервной верстки.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            <div className="w-full flex justify-between pr-10 max-[678px]:pr-6">
              <span className="inline-block mr-10 font-semibold">
                <span className="max-[678px]:hidden">
                  Некоммерческий проект: nc-task
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
              <p className="italic">Стек:</p>
              <div className="mb-2">
                React.js, redux-toolkit, typeScript, Rest API, react-persist,
                react-router-dom v.6, style-module
              </div>
            </div>
            <p className="italic">Мой вклад в проект:</p>
            <div>
              Разработал с нуля приложение для работы с анимацией в React и
              динамической сменой контента.
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
