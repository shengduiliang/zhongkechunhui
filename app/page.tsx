'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import ContentWrapper from "@/components/ui/content-wrapper";
import { Separator } from "@radix-ui/react-separator";

const BannerContent = () => {
  const imgList = [
    '/home/carousel-0.jpg',
    '/home/carousel-1.jpg',
    '/home/carousel-2.jpg',
    '/home/carousel-3.jpg',
  ]
  return (
    <Carousel className="w-full" plugins={[Autoplay({ delay: 5000})]} opts={{ loop: true}}>
      <CarouselContent>
        {
          imgList.map((img, index) => (
            <CarouselItem key={index}>
              <div className="w-full h-[709px] relative">
                <Image src={img} fill alt="banner" className="object-cover object-center" />
              </div>
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

const BrandConceptContent = () => {
  return (
    <ContentWrapper className="mt-16">
      <div className="text-3xl font-bold text-black ml-4">品牌理念</div>
      <Separator className="my-6 bg-black h-[1px]" />
      <div className="flex">
        <div className="text-lg">
          <div className="text-green-800 text-4xl font-black">中科态好乐</div>
          <div className="text-lime-600 text-3xl font-black mt-7 ml-5">“每日一杯肽，焕您好状态”</div>
          <div className="text-xl mt-7">
            态好乐牌成立于2024年，为广东中科春晖<br/>健康科技有限公司,与中国农科院农产品研究<br/>所联合研发品牌,主打特殊膳食胶原蛋白肽、<br/>药食同源等产品。
          </div>
          <div className="text-xl mt-7">
            态好乐主要产品为胶原蛋白肽、护肝、心脑<br/>血管等一系列大健康特殊膳食产品，由中国<br/>农科院张春晖博士团队经过20年研发打造中<br/>国唯一国家队品牌。
          </div>
          <div className="text-xl mt-7">
            态好乐产品覆盖儿童、中年、老人群体，针<br/>对骨骼、美容、免疫力、肝肾以及心脑血管<br/>养护等方面，致力于全方位解决国民健康问<br/>题，为国民健康保驾护航。
          </div>
        </div>
        <div className="flex-1 relative ml-16 aspect-800/571">
          <Image src={'/home/brand-concept.png'} fill alt="banner" />
        </div>
      </div>
    </ContentWrapper>
  )
}

const IndividualContent = () => {
  return (
    <ContentWrapper className="mt-20">
      <div className="text-3xl font-bold text-black ml-4">研发团队</div>
      <Separator className="my-6 bg-black h-[1px]" />
      <div className="flex mx-4">
        <div className="w-[400px] relative">
          <Image src='/home/boss-photo.png' fill alt="banner" />
        </div>
        <div className="flex-1 ml-4">
          <div className="justify-between flex items-center">
              <div>
                <div className="text-green-800">
                  <span className="text-4xl font-black">张春晖</span><span className="ml-4 text-2xl font-black">博士</span>
                </div>
                <div className="mt-4 leading-7 text-lg text-black">
                  全国唯一研发肽的国家队<br />
                  以及肽的标准制定者
                </div>
              </div>
              <Image src={'/home/patent.png'} width={120} height={120} alt="banner" />
          </div>
          <div className="mt-6 ">
            <div className="font-bold text-lime-600 text-2xl">学术职称荣誉</div>
            <div className="mt-3 text-sm text-black">
              <span className="font-black">国家农业科研杰出人才：</span>
              <span>科技部中青年科技创新领军人才，享受国务院政府特殊津贴专家</span>
            </div>
            <div className="mt-1 text-sm text-black">
              <span className="font-bold text-small">国家级团队首席科学家：</span>
              <span>牵头国家农产品加工领域重点研发计划，主持国家级课题20余项</span>
            </div>
            <div className="mt-1 text-sm text-black">
              <span className="font-black text-small">行业标准制定者：</span>
              <span>主导起草《胶原蛋白肽行业标准》等5项国家标准，推动产业规范化发展</span>
            </div>
            <div className="mt-1 text-sm text-black">
              <span className="font-bold text-small">国际学术影响力：</span>
              <span>发表SCI论文130余篇，H指数32，获授权发明专利80项（含美，日等国际专利18项）</span>
            </div>
          </div>
          <div className="flex my-6 w-full">
            <div className="h-[260px] w-[320px] relative">
              <Image src='/home/patent-left.png' fill alt="banner"/>
            </div>
            <div className="flex-1 relative">
              <Image src='/home/patent-right.png' fill alt="banner"/>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[744px]">
        <Image src="/home/研发团队底图.png" className="absolute -z-10" width={1200} height={744} alt="研发团队底图"/>
        <div className="pt-8" />
        <Image src="/home/态好乐品牌团队介绍.png" width={550} height={60} className="h-[60px] -ml-2" alt="态好乐品牌团队介绍"/>
        <div className="flex justify-between">
          <div className="mt-8 flex flex-col items-start flex-1">
            <div className="ml-7 rounded-3xl bg-sky-800 text-white px-4 py-1 text-lg">1.国家级研发团队</div>
            <div className="text-green-800 font-bold ml-14 mt-9">中国农业科学院</div>
            <div className="ml-14 mt-2 leading-6">
            是国务院批准成立的三大科学院之一，是全国规模最大<br/>学科最全、综合实力最强的一个国家级农业科研机构。<br/>担负着全国农业重大的基础研究，重大的应用研究和高<br/>新技术产业开发研究的一个任务，
            </div>
          </div>
          <div className="mt-8 flex flex-col items-start flex-1">
            <div className="ml-7 rounded-3xl bg-sky-800 text-white px-4 py-1 text-lg">2.研发团队组成</div>
            <div className="flex mt-4 justify-between w-full px-8">
              <Image src="/home/团队标签1.png" width={289} height={381} alt="团队标签1" className="w-[150px]" />
              <Image src="/home/团队标签2.png" width={289} height={381} alt="团队标签2" className="w-[150px]" />
              <Image src="/home/团队标签3.png" width={289} height={381} alt="团队标签3" className="w-[150px]" />
            </div>
          </div>
        </div>
        <Image src="/home/研发团队专利.png" width={2266} height={593} className="w-full" alt="研发团队专利" />
      </div>
    </ContentWrapper>
  )
}

const CoreTechnologyContent = () => {
  return (
    <ContentWrapper className="mt-20">
      <div className="text-3xl font-bold text-black ml-4">核心技术</div>
      <Separator className="my-6 bg-black h-[1px]" />
      <div className="my-12 flex pl-2 pr-20 items-start">
        <div className="pr-32">
          <div className="text-green-800 text-2xl font-bold">特殊膳食骨胶原蛋白活性肽</div>
          <div className="text-lg mt-6">
            中科活性肽产品属于特殊膳食，<br/>
            国内以活性肽技术为核心的健康产品行业的先驱<br/>
            与引领者。<br/>
            我们始终秉持 科技赋能，肽启健康” 的核心<br/>
            研发理念，依托前沿生物科技，不断探索活性肽<br/>
            在健康领域的无限可能。
          </div>
          <div className="text-lg mt-8">
            肽能促进营养吸收排出代谢废物，改善细胞新陈<br/>
            代谢：肽能激活细胞活性，抑制细胞病病变<br/>
            提高免疫力：肽能修复变性或受损细胞，清除体<br/>
            内自由基：肽对人的细胞活性，功能活动，生命<br/>
            存在来讲，具有不可替代的重要性。
          </div>
        </div>
        <Image src='/home/core-technology.png' width={600} height={709} alt="banner" className="flex-1" />
      </div>
      <div className="flex justify-end">
        <div className="cursor-pointer flex items-center">
          <Image src='/home/arrow-right.png' width={40} height={40} alt="banner" />
          <div className="ml-2 pr-20">探索更多</div>
        </div>
      </div>
    </ContentWrapper>
  )
}

const HotSalesContent = () => {
  const hotSalesList = [
    { img: '/home/hot-sales-0.png', title: '治疗骨质疏松', desc: '骨胶原蛋白肽·特殊膳食', type: '专业版', effect: '健骨+强骨+壮骨'},
    { img: '/home/hot-sales-1.png', title: '抗衰抗美颜', desc: '骨胶原蛋白肽·特殊膳食', type: '红粉版', effect: '抗衰老+产后修复'},
    { img: '/home/hot-sales-2.png', title: '增强免疫力', desc: '骨胶原蛋白肽·特殊膳食', type: '白金版', effect: '激发肌体活力+提高免疫力'},
    { img: '/home/hot-sales-3.png', title: '儿童生长发育', desc: '骨胶原蛋白肽·特殊膳食', type: '草莓味', effect: '补钙助发育'},
    { img: '/home/hot-sales-4.png', title: '改善心脑血管', desc: '运动营养食品·瑙芯舒', type: '', effect: '活血化瘀+化痰祛湿+平肝通络'},
    { img: '/home/hot-sales-5.png', title: '养肝护肝', desc: '运动营养食品·护苷清', type: '', effect: '解酒护肝+脂肪肝+高血脂'},
  ]
  return (
    <ContentWrapper className="mt-20">
      <div className="text-3xl font-bold text-black ml-4">热门产品</div>
      <Separator className="mt-6 bg-black h-[1px]" />
      <div className="flex flex-wrap justify-around">
        {
          hotSalesList.map((item, index) => (
            <div className="col-4 px-8" key={index}>
              <Image src={item.img} width={300} height={300} alt="banner" />
              <Separator className="mt-2 bg-black h-[2px]" />
              <div className="flex justify-between mt-2">
                <div className="text-sm tracking-widest">{item.desc}</div>
                <div className="text-sm tracking-widest">{item.type}</div>
              </div>
              <div className="text-sm tracking-widest mt-1">{item.effect}</div>
              <div className="text-2xl font-bold text-black mt-4">{item.title}</div>
            </div>
          ))
        }
      </div>
    </ContentWrapper>
  )
}

const HotSalesOfflineContent = () => {
  const hotSalesOfflineList = [
    { img: '/home/hot-sales-offline-0.png', title: '治疗骨质疏松', desc: '“鱼类”胶原蛋白肽·特殊膳食', type: '专业版', effect: '健骨+强骨+壮骨'},
    { img: '/home/hot-sales-offline-1.png', title: '抗衰抗美颜', desc: '“鱼类”胶原蛋白肽·特殊膳食', type: '红粉版', effect: '抗衰老+产后修复'},
    { img: '/home/hot-sales-offline-2.png', title: '增强免疫力', desc: '骨胶原蛋白肽·特殊膳食', type: '白金版', effect: '激发肌体活力+提高免疫力'},
    { img: '/home/hot-sales-offline-3.png', title: '改善睡眠', desc: '骨胶原蛋白肽·特殊膳食', type: '白金版', effect: '提高肌体耐力+生理代谢'},
    { img: '/home/hot-sales-offline-4.png', title: '改善心脑血管', desc: '运动营养食品·瑙芯舒', type: '', effect: '活血化瘀+化痰祛湿+平肝通络'},
    { img: '/home/hot-sales-offline-5.png', title: '养肝护肝', desc: '运动营养食品·护苷清', type: '', effect: '解酒护肝+脂肪肝+高血脂'},
  ]
  return (
    <ContentWrapper className="my-20">
      <div className="text-3xl font-bold text-black ml-4">热门线下款</div>
      <Separator className="mt-6 bg-black h-[1px]" />
      <div className="flex flex-wrap justify-around">
        {
          hotSalesOfflineList.map((item, index) => (
            <div className="col-4 px-8" key={index}>
              <Image src={item.img} width={300} height={300} alt="banner" />
              <Separator className="mt-2 bg-black h-[2px]" />
              <div className="flex justify-between mt-2">
                <div className="text-sm tracking-widest">{item.desc}</div>
                <div className="text-sm tracking-widest">{item.type}</div>
              </div>
              <div className="text-sm tracking-widest mt-1">{item.effect}</div>
              <div className="text-2xl font-bold text-black mt-4">{item.title}</div>
            </div>
          ))
        }
      </div>
    </ContentWrapper>
  )
}

export default function HomePage() {
  return (
    <div className="home-page">
      <BannerContent />
      <BrandConceptContent />
      <IndividualContent />
      <CoreTechnologyContent />
      <HotSalesContent />
      <HotSalesOfflineContent />
    </div>
  );
}
