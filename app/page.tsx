import { AccordionGRoup } from '@/components/AccordionGroup';
import { SheetGRoup } from '@/components/SheetGroup';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-[992px]:relative">
      <p className="mb-4">
        Опыт веб-разработки более трех лет. Самостоятельно разрабатываю
        компоненты и веб страницы любой сложности. Верстаю быстро, валидно,
        адаптивно, семантично и кроссбраузерно. В настоящее время готов перейти
        на проект в стеке React (Next.js). Жду интересных проектов и возможности
        профессионального роста и развития.
      </p>
      <section>
        <h2 className="text-2xl font-semibold border-b pb-4">Опыт работы</h2>
        <article className="pt-4">
          <div className=" flex justify-between ">
            <p className="font-semibold">Frontend разработчик </p>
            <span className='max-[450px]:text-sm'>нояб 2023 — наст. время</span>
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
            Разработка и поддрежка инернет-магазина ювелирных изделий.
            Реализация задач под нужды бизнеса: лендинги, блоки авторизации,
            валидация форм, мессенджер, слайдеры, drag-end-drop сортировка, lazy
            loading и т.п. Оптимизация скорости загрузки страниц.
          </p>
        </article>
        <article className="pt-4">
          <div className="flex justify-between ">
            <p className="font-semibold">Frontend разработчик / верстальщик </p>
            <span>дек 2022 — нояб 2023</span>
          </div>
          <p className="italic mb-2">
            Индивидуальное предпринимательство / частная практика / фриланс
          </p>
          <p>
            Семантическая, адаптивная, кроссбраузерная верстка. Разработка
            компонентов и страниц различной степени сложности на нативном js с
            применением библиотек и плагинов к ним. Разработка сложной анимации
            на js+css.
          </p>
        </article>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold border-b pb-4 mt-4">Проекты</h2>
        <AccordionGRoup />
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-4">
          Образование и квалификации
        </h2>
        <article className="max-[600px]:mb-2">
          <div className="flex justify-between pt-2 mb-2">
            <p className="font-semibold">Неоконченное высшее</p>
            <span>сент 2019 - фев 2023</span>
          </div>
          <div className="italic max-[600px]:mb-2">
            Озёрский технологический институт, (филиал) &quot;НИЯУ МИФИ&quot;,
            Озерск (Челябинская область)
          </div>
          <div className="">
            Специальность:
            <span className="font-semibold">
              ТМ и МАХП, Технологические машины и оборудование
            </span>
          </div>
        </article>
        <article>
          <div className="flex justify-between pt-2 mb-2">
            <p className="font-semibold">Неоконченное высшее</p>
            <span>сент 2007 - май 2011</span>
          </div>
          <div className="italic max-[600px]:mb-2">
            Филиал Южно-Уральского государственного университета (Национальный
            исследовательский университет), Озерск (Челябинская область)
          </div>
          <div className="mb-4">
            Специальность:
            <span className="font-semibold">
              Информационные технологии, Вычислительные машины, комплексы,
              системы и сети
            </span>
          </div>
        </article>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-4">Курсы</h2>
        <article>
          <div className="flex justify-between pt-2 mb-2">
            <p className="font-semibold">Курс по React</p>
            <span>авг 2023 - окт 2023</span>
          </div>
          <div className="italic">learn.javascript.ru, React</div>
        </article>
        <article>
          <div className="flex justify-between pt-2 mb-2">
            <p className="font-semibold">JavaScript/DOM/Интерфейсы</p>
            <span>июнь 2023 - июнь 2023</span>
          </div>
          <div className="italic">learn.javascript.ru, JavaScript</div>
        </article>
        <article>
          <div className="flex justify-between pt-2 mb-2">
            <p className="font-semibold">Курс по современной верстке</p>
            <span>фев 2023 - апр 2023</span>
          </div>
          <div className="italic mb-4">learn.javascript.ru, HTML - верстка</div>
        </article>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-4">Навыки</h2>
        <article className="pt-2 flex items-center justify-between w-full">
          <span className="mr-20 whitespace-nowrap max-[478px]:text-sm">
            HTML CSS JS PHP
          </span>
          <span className="border w-full max-w-52 inline-block h-2 bg-sky-800 rounded-full max-[478px]:max-w-36"></span>
        </article>
        <article className="pt-2 flex items-center justify-between w-full">
          <span className="mr-20 max-[478px]:text-sm">
            SASS(SCSS) БЭМ style-module Tailwind MUI shadcn/ui
          </span>
          <span className="border w-full max-w-52 shrink-0 inline-block h-2 bg-sky-800 rounded-full max-[478px]:max-w-36"></span>
        </article>
        <article className="pt-2 mb-4 flex items-center justify-between w-full">
          <span className="mr-20 whitespace-nowrap max-[478px]:text-sm">
            React.js Next.js TS
          </span>
          <span className="border w-full max-w-40  inline-block h-2 bg-sky-600 rounded-full max-[478px]:max-w-28"></span>
        </article>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-4">Достижения</h2>
        <div className="pt-2 pb-4">
          Разработал лендинги представляющие ювелирный завод на выставках в
          Петербурге JUNWEX Петербург 2023 и Шанхае China International Import
          Expo 2024
        </div>
      </section>

      <div className="hidden max-[992px]:block ">
        <SheetGRoup />
      </div>
    </main>
  );
}
