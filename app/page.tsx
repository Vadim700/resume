import { AccordionGRoup } from '@/components/AccordionGroup';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <p className="mb-4">
        Опыт веб-разработки более трех лет. Самостоятельно разрабатываю
        компоненты и веб страницы любой сложности. Верстаю быстро, валидно,
        адаптивно, семантично и кроссбраузерно. В настоящее время готов перейти
        на проект в стеке React (Next.js). Жду интересных проектов и возможности
        профессионального роста и развития.
      </p>
      <h2 className="text-2xl font-semibold border-b pb-4">Опыт работы</h2>
      <div className="pt-2 flex justify-between ">
        <p className="font-semibold">Frontend разработчик </p>
        <span>нояб 2023 — наст. время</span>
      </div>
      <p className="italic mb-2">
        <Link
          href={'https://umasoft.pro/'}
          className="text-sky-800 hover:text-sky-500 "
        >
          UMA Soft
        </Link>
      </p>
      <p>
        Разработка и поддрежка инернет-магазина ювелирных изделий. Реализация
        задач под нужды бизнеса: лендинги, блоки авторизации, валидация форм,
        мессенджер, слайдеры, drag-end-drop сортировка, lazy loading и т.п.
        Оптимизация скорости загрузки страниц.
      </p>
      <div className="pt-4 flex justify-between ">
        <p className="font-semibold">Frontend разработчик / верстальщик </p>
        <span>дек 2022 — нояб 2023</span>
      </div>
      <p className="italic mb-2">
        Индивидуальное предпринимательство / частная практика / фриланс
      </p>
      <p>
        Семантическая, адаптивная, кроссбраузерная верстка. Разработка
        компонентов и страниц различной степени сложности на нативном js с
        применением библиотек и плагинов к ним. Разработка сложной анимации на
        js+css.
      </p>
      <h2 className="text-2xl font-semibold border-b pb-4 mt-4">Проекты</h2>
      <AccordionGRoup className="mb-4" />

      <h2 className="text-2xl font-semibold border-b pb-4">
        Образование и квалификации
      </h2>
      <div className="flex justify-between pt-2 mb-2">
        <p className="font-semibold">Неоконченное высшее</p>
        <span>сент 2019 - фев 2023</span>
      </div>
      <div className="italic">
        Озёрский технологический институт, (филиал)  &quot;НИЯУ МИФИ&quot;, Озерск
        (Челябинская область)
      </div>
      <div className="">
        Специальность:
        <span className="font-semibold">
          ТМ и МАХП, Технологические машины и оборудование
        </span>
      </div>
      <div className="flex justify-between pt-2 mb-2">
        <p className="font-semibold">Неоконченное высшее</p>
        <span>сент 2007 - май 2011</span>
      </div>
      <div className="italic">
        Филиал Южно-Уральского государственного университета (Национальный
        исследовательский университет), Озерск (Челябинская область)
      </div>
      <div className="mb-4">
        Специальность:
        <span className="font-semibold">
          Информационные технологии, Вычислительные машины, комплексы, системы и
          сети
        </span>
      </div>
      <h2 className="text-2xl font-semibold border-b pb-4">Курсы</h2>
      <div className="flex justify-between pt-2 mb-2">
        <p className="font-semibold">Курс по React</p>
        <span>авг 2023 - окт 2023</span>
      </div>
      <div className="italic">learn.javascript.ru, React</div>
      <div className="flex justify-between pt-2 mb-2">
        <p className="font-semibold">JavaScript/DOM/Интерфейсы</p>
        <span>июнь 2023 - июнь 2023</span>
      </div>
      <div className="italic">learn.javascript.ru, JavaScript</div>
      <div className="flex justify-between pt-2 mb-2">
        <p className="font-semibold">Курс по современной верстке</p>
        <span>фев 2023 - апр 2023</span>
      </div>
      <div className="italic mb-4">learn.javascript.ru, HTML - верстка</div>
      <h2 className="text-2xl font-semibold border-b pb-4">Навыки</h2>
      <div className="pt-2 flex items-center justify-between w-full">
        <span className="mr-20 whitespace-nowrap">HTML CSS JS PHP</span>
        <span className="border w-52 inline-block h-2 bg-sky-800 rounded-full"></span>
      </div>
      <div className="pt-2 flex items-center justify-between w-full">
        <span className="mr-20 whitespace-nowrap">
          SASS(SCSS) БЭМ style-module Tailwind MUI shadcn/ui
        </span>
        <span className="border w-52 inline-block h-2 bg-sky-800 rounded-full"></span>
      </div>
      <div className="pt-2 mb-4 flex items-center justify-between w-full">
        <span className="mr-20 whitespace-nowrap">React.js Next.js TS</span>
        <span className="border w-40 inline-block h-2 bg-sky-600 rounded-full"></span>
      </div>
      <h2 className="text-2xl font-semibold border-b pb-4">Достижения</h2>
      <div className="pt-2 pb-4">
        Разработал лендинги представляющие ювелирный завод на выставках в
        Петербурге JUNWEX Петербург 2023 и Шанхае China International Import
        Expo 2024
      </div>
    </main>
  );
}
