import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const AccordionGRoup: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="w-full pr-10 flex justify-between">
              <span className="inline-block mr-10 font-semibold">
                Коммерческий проект: MOISEIKIN
              </span>
              <Link
                href="https://moiseikin.com/"
                target="_blank"
                className="text-sky-800 hover:underline underline-offset-4"
              >
                https://moiseikin.com/
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
            <div className="w-full pr-10 flex justify-between">
              <span className="inline-block mr-10 font-semibold">
                Коммерческий проект: завод Сота
              </span>
              <Link
                href="https://shopsota.ru/"
                target="_blank"
                className="text-sky-800 hover:underline underline-offset-4"
              >
                https://shopsota.ru/
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
            <div className="w-full pr-10 flex justify-between">
              <span className="inline-block mr-10 font-semibold">
                Некоммерческий проект: Confident Pepper
              </span>
              <Link
                href="https://rt-pepper-v2.vercel.app/"
                target="_blank"
                className="text-sky-800 hover:underline underline-offset-4"
              >
                https://rt-pepper-v2.vercel.app/
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
            <div className="w-full pr-10 flex justify-between">
              <span className="inline-block mr-10 font-semibold">
                Коммерческий проект: Burmash
              </span>
              <Link
                href="https://vadim700.github.io/burmash-20230419/"
                target="_blank"
                className="text-sky-800 hover:underline underline-offset-4"
              >
                https://vadim700.github.io/burmash-20230419/
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
            <div className="w-full flex justify-between pr-10">
              <span className="inline-block mr-10 font-semibold">
                Некоммерческий проект: nc-task
              </span>
              <Link
                href="https://nc-test-task.vercel.app/2/notes"
                target="_blank"
                className="text-sky-800 hover:underline underline-offset-4"
              >
                https://nc-test-task.vercel.app/2/notes
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
