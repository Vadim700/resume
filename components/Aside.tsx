import React from 'react';
import Image from 'next/image';
import { cn } from '@/components/lib/utils';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const Aside: React.FC<Props> = ({className}) => {
  return (
    <aside className={cn(className, 'row-span-2  bg-[#406592]	text-white pb-6')}>
      <Image
        src="/hapy-men.jpeg"
        width={500}
        height={500}
        alt="Picture of the author"
        className="rounded-full p-12 aspect-square object-cover max-sm:p-10"
      />
      <section className={cn('info pl-6 mb-4')}>
        <article className="mt-2">
          <h3 className="pb-2 text-xl border-b font-semibold">Личные данные</h3>
          <h4 className="mt-2 font-semibold">Имя</h4>
          <span>Бекмансуров Вадим Владиславович</span>
        </article>

        <article className="mt-2">
          <h4 className="font-semibold">Номер телефона</h4>
          <Link href="tel:+79085728793" className="hover:underline">
            +7 908 572 87 93
          </Link>
        </article>

        <article className="mt-2">
          <h4 className="font-semibold">Email</h4>
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
          <h4 className="font-semibold">Дата рождения</h4>
          <p>08-11-1988</p>
        </article>

        <article className="mt-2">
          <h4 className="font-semibold">Место рождения</h4>
          <p>г. Челябинск</p>
        </article>
      </section>
      <section className={cn('info pl-6 mb-4')}>
        <h3 className="pb-2 text-xl border-b font-semibold">Интересы</h3>
        <ul>
          <li className="mt-2 font-semibold text-base/4">
            Эксперементы с новыми технологиями
          </li>
          <li className="font-semibold">Художественная литература</li>
          <li className="font-semibold">Веб-дизайн</li>
          <li className="font-semibold">3D визуализация</li>
        </ul>
      </section>
      <section className={cn('info pl-6')}>
        <h3 className="pb-2 text-xl border-b font-semibold">Языки</h3>
        <p className="mt-2 flex justify-between pr-6">
          <span className="font-semibold">Русский</span>
          <span>Родной язык</span>
        </p>
        <p className="flex justify-between pr-6">
          <span className="font-semibold">Английский</span>
          <span>Хорошо</span>
        </p>
      </section>
    </aside>
  );
};
