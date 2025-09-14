'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sun } from "lucide-react"
import { useTheme } from "next-themes"


export const LightMode = () => {
    const { setTheme } = useTheme()
  return (
    <DropdownMenu>
    <DropdownMenuTrigger className=" border rounded-sm p-1" asChild>
    <Sun size={27}/>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
    <DropdownMenuItem onClick={() => setTheme('light')}>
        Light
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme('dark')}>
        Dark
    </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>

  )
}
