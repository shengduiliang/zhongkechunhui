'use client';

import Image from "next/image";
import ContentWrapper from "@/components/ui/content-wrapper";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Navbar() {
  const pathname = usePathname()
  return (
    <div className="bg-white">
      <ContentWrapper>
        <NavigationMenu className="h-[92px]">
          <div className="flex-1">
            <NavigationMenuList className="justify-between">
              <NavigationMenuItem>
                <Image src='/brand.png' width={110} height={70} alt="logo" />
              </NavigationMenuItem>
              {
                INavbarItems.map((item, index) => {
                  const isActive = item.match(pathname)
                  return (
                    <NavigationMenuItem key={index} className="px-4">
                      {
                        item.subItemList ? <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className={cn(isActive ? 'font-bold' : '', 'hover:font-bold cursor-pointer')}>
                              { item.label }
                            </TooltipTrigger>
                            <TooltipContent className="bg-white mt-3 rounded-none">
                              <div className="flex flex-col gap-3">
                                {
                                  item.subItemList.map((subItem, index) => (
                                    <Link href={subItem.href} key={index} className={cn('hover:font-bold text-primary text-sm')}>
                                      {subItem.name}
                                    </Link>
                                  ))
                                }
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider> : <Link href={item.href} className={cn(isActive ? 'font-bold' : '', 'hover:font-bold')}>
                          {item.label}
                        </Link>
                      }
                      <div className={cn("bottom-[-10px] absolute justify-center left-0 right-0 hidden hover:flex", isActive ? 'flex' : '')}> 
                        <div className="w-[40px] h-[2px] bg-black" />
                      </div>
                    </NavigationMenuItem>
                  )
                })
              }
            </NavigationMenuList>
          </div>
        </NavigationMenu>
      </ContentWrapper>
    </div>
  );
}

const INavbarItems = [
  {
    label: "首 页",
    href: "/",
    match: (pathname: string) => pathname === '/'
  },
  {
    label: "骨胶原蛋白肽(专业版)",
    href: "/profession",
    match: (pathname: string) => pathname === '/profession'
  },
  {
    label: "鱼类骨原蛋白肽(红粉版)",
    href: "/pink",
    match: (pathname: string) => pathname === '/pink'
  },
  {
    label: "更多产品",
    href: "",
    subItemList: [
      { name: "骨胶原蛋白肽(白金版)", href: '/platinum' },
      { name: "骨胶原蛋白肽(草莓味)", href: '/strawberry' },
      { name: "运动营养食品(瑙芯舒)", href: '/naoxinshu' },
      { name: "运动营养食品(护苷清)", href: '/huganqing' }
    ],
    match: (pathname: string) => ['/platinum', '/strawberry', '/huganqing', '/naoxinshu'].includes(pathname)
  },
  {
    label: "科研创享",
    href: "#",
    match: (pathname: string) => pathname === '/scientific'
  },
  {
    label: "关于我们",
    href: "#",
    match: (pathname: string) => pathname === '/about'
  }
]