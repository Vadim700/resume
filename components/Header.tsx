import { cn } from '@/components/lib/utils';
import React from 'react';

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header>
			<h1 className={cn(className, 'border-b text-5xl py-6	font-semibold max-[600px]:text-3xl')}>
					Бекмансуров Вадим
			</h1>
		</header>
	);
};