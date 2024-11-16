'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Aside } from './Aside';

const SHEET_SIDES = ['left'] as const;

export function SheetGRoup() {
  return (
    <div className="">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="fixed bottom-[23%] left-0 bg-[#406592] text-white -rotate-90 translate-x-[-56px] rounded-tl-[0] rounded-tr-[0]"
            >
              Личные данные
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <Aside />
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
