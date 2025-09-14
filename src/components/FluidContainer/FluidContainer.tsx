import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react'

interface FluidContainerProps{
children: ReactNode;
className?: string
}

export const FluidContainer = ({children, className}:FluidContainerProps) => {
  return (
    <div className={cn('max-w-[1350px] px-3 mx-auto', className)}>{children}</div>
  )
}
