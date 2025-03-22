'use client';

import Image from "next/image";
import ContentWrapper from "../../components/ui/content-wrapper";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../../components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
                      <Link href={item.href} className={cn(isActive ? 'font-bold' : '', 'hover:font-bold')}>
                        {item.label}
                      </Link>
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
    label: "中科活性肽(专业版)",
    href: "#",
    match: (pathname: string) => pathname === '/profession'
  },
  {
    label: "中科活性肽(红粉版)",
    href: "#",
    match: (pathname: string) => pathname === '/pink'
  },
  {
    label: "更多产品",
    href: "#",
    match: (pathname: string) => pathname === '/platinum'
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