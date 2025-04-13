'use client'

import { Carousel, CarouselApi, CarouselContent, CarouselItem, useCarousel } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import Image from "next/image"
import { useEffect, useState } from "react"

interface ImageCarouselProps {
  imgList: string[]
}

function ImageCarouselPrevious() {
  const { scrollPrev, canScrollPrev } = useCarousel()

  return (
    <div aria-disabled={!canScrollPrev} onClick={scrollPrev} className="text-white">
      <Image src="/icon/left.png" width={32} height={32} alt="left" className="cursor-pointer" />
    </div>
  )
}

function ImageCarouselNext() {
  const { scrollNext, canScrollNext } = useCarousel()

  return (
    <div aria-disabled={!canScrollNext} onClick={scrollNext} className="text-white">
      <Image src="/icon/right.png" width={32} height={32} alt="left" className="cursor-pointer" />
    </div>
  )
}

export default function ImageCarousel({ imgList }: ImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    if (!api) {
      return
    }
 
    setCurrent(api.selectedScrollSnap())
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])
  console.log(current);
  return (
    <Carousel className="w-full" plugins={[Autoplay({ delay: 5000})]} opts={{ loop: true}} setApi={setApi}>
      <CarouselContent>
        {
          imgList.map((img, index) => (
            <CarouselItem key={index}>
              <Image src={img} alt="img" width={1200} height={800} className="w-full" />
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <div className="absolute bottom-0 left-0 right-0 h-[116px] py-[10px] px-[20px] flex items-center" style={{background: 'rgba(0, 0, 0, 0.7)'}}>
        <ImageCarouselPrevious />
        <div className="flex-1 flex gap-2 justify-around">
          {
            imgList.map((img, index) => (
              <div key={index} className={current % imgList.length === index ? "" : "opacity-50"} onClick={() => api?.scrollTo(index)}>
                <Image src={img} alt="img" width={150} height={120} className="h-[80px] cursor-pointer" />
              </div>
            ))
          }
        </div>
        <ImageCarouselNext />
      </div>
    </Carousel>
  )
}