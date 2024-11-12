import React from 'react';
import Image from 'next/image'
import { cn } from '@/components/lib/utils';

interface Props {
	className?: string;
}

export const Aside: React.FC<Props> = () => {
	return (
		<aside className='row-span-2  bg-[#406592]	text-white pb-6'>
			<Image
				src="/hapy-men.jpeg"
				width={500}
				height={500}
				alt="Picture of the author"
				className='rounded-full p-12 aspect-square object-cover'
			/>
			<div className={cn('info pl-6 mb-4')}>
				<h3 className='pb-2 text-xl border-b font-semibold'>Личные данные</h3>
				<h4 className='mt-2 font-semibold'>Имя</h4>
				<p>Бекмансуров Вадим Владиславович</p>
				<h4 className='mt-2 font-semibold'>Номер телефона</h4>
				<p><a href="tel:+79085728793" className='hover:underline'>+7 908 572 87 93</a></p>
				<h4 className='mt-2 font-semibold'>Email</h4>
				<p><a href="mailto:bekmansurov700@mail.ru" className='hover:underline'>bekmansurov700@mail.ru</a></p>
				<p><a href="mailto:bekmansurovvadim@gmail.com" className='hover:underline'>bekmansurovvadim@gmail.com</a></p>
				<h4 className='mt-2 font-semibold'>GitHub</h4>
				<p><a href="https://github.com/Vadim700" target='_blank' className='hover:underline'>https://github.com/Vadim700</a></p>
				<h4 className='mt-2 font-semibold'>LinkedIn</h4>
				<p><a href="http://linkedin.com/in/vadim-bekmansurov-220153328" target='_blank' className='hover:underline'>http://linkedin.com/in/vadim-bekmansurov-220153328</a></p>
				<h4 className='mt-2 font-semibold'>Дата рождения</h4>
				<p>08-11-1988</p>
				<h4 className='mt-2 font-semibold'>Место рождения</h4>
				<p>г. Челябинск</p>
			</div>
			<div className={cn('info pl-6 mb-4')}>
				<h3 className='pb-2 text-xl border-b font-semibold'>Интересы</h3>
				<h4 className='mt-2 font-semibold text-base/4'>Эксперементы с новыми технологиями</h4>
				<h4 className='font-semibold'>Художественная литература</h4>
				<h4 className='font-semibold'>Веб-дизайн</h4>
				<h4 className='font-semibold'>3D визуализация</h4>
			</div>
			<div className={cn('info pl-6')}>
				<h3 className='pb-2 text-xl border-b font-semibold'>Языки</h3>
				<p className='mt-2 flex justify-between pr-6'><span className='font-semibold'>Русский</span><span>Родной язык</span></p>
				<p className='flex justify-between pr-6'><span className='font-semibold'>Английский</span><span>Хорошо</span></p>
			</div>
		</aside>
	);
};