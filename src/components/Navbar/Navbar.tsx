"use client";

import Image from "next/image";


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { Bell, GalleryThumbnails, UserCog } from "lucide-react";
import { LightMode } from "./LightMode";


export function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-background/70 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-x-1">
        <span className="font-bold text-2xl">K</span>
        <div className=" flex items-center gap-x-1">
        <Image src={`https://avatar.vercel.sh/satori`} width={12} height={12} className=" h-7 w-7 rounded-full" alt="Profile_image"/>

        <div>
            <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuTrigger>JobApplicationExercise</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <div className="max-w-fit w-full">
                    <h3>Contents....</h3>
                    <NavigationMenuLink asChild > Contents...</NavigationMenuLink>
                    </div>
                </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>
        </div>

        </div>
        </div>

       

        <div className=" hidden md:flex items-center gap-x-3">
        <Link href={'#'} className=" flex items-center gap-x-1">
        <GalleryThumbnails  size={20}/>
        <span className=" text-sm">Gallery</span>
        </Link>

        <Link href={'#'} className="flex items-center gap-x-1">
        <UserCog size={20}/>
        <span className=" text-sm">Support</span>
        </Link>

        <Link href={'#'} className=" rounded-sm p-1 border flex items-center gap-x-1">
            <Bell size={18}/>
        </Link>
        
        <div className="cursor-pointer">
            <LightMode/>
        </div>

        <div>
                  <Image src={`https://avatar.vercel.sh/satori`} width={12} height={12} className=" h-7 w-7 rounded-full" alt="Profile_image"/>
        </div>



          {/* <Separator orientation="vertical" className="h-6 hidden sm:block" />
          <Button size="sm">Sign in</Button> */}
        </div>

        <div className=" md:hidden flex items-center gap-x-1">
          <Link href={'#'} className=" rounded-sm p-1 border flex items-center gap-x-1">
            <Bell size={18}/>
        </Link>
        
        <div className="cursor-pointer">
            <LightMode/>
        </div>
         <div>
          <Image src={`https://avatar.vercel.sh/satori`} width={12} height={12} className=" h-7 w-7 rounded-full" alt="Profile_image"/>
        </div>
        </div>
      </div>
    </header>
  );
}
