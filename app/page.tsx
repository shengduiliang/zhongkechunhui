'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import ContentWrapper from "@/components/ui/content-wrapper";

const Banner = () => {
  return (
    <Carousel className="w-full" plugins={[Autoplay({ delay: 5000})]} opts={{ loop: true}}>
      <CarouselContent>
        <CarouselItem>
          <div className="w-full h-[709px] relative">
            <Image src='/home/carousel-0.jpg' fill alt="banner" className="object-cover object-center" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="w-full h-[709px] relative">
            <Image src='/home/carousel-1.jpg' fill alt="banner" className="object-cover object-center" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="w-full h-[709px] relative">
            <Image src='/home/carousel-2.jpg' fill alt="banner" className="object-cover object-center" />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default function Home() {
  return (
    <div className="home-page">
      <Banner />
      <ContentWrapper className="mt-16">
        <Image src={'/home/home-1.jpg'} width={1200} height={709} alt="banner" />
      </ContentWrapper>
      <ContentWrapper className="mt-16">
        <Image src={'/home/home-2.jpg'} width={1200} height={709} alt="banner" />
      </ContentWrapper> 
      <ContentWrapper>
        <Image src={'/home/home-3.jpg'} width={1200} height={709} alt="banner" />
      </ContentWrapper>
      <ContentWrapper>
        <Image src={'/home/home-4.jpg'} width={1200} height={709} alt="banner" />
      </ContentWrapper>
    </div>
  );
}
