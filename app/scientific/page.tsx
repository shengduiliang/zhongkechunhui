import ContentWrapper from "@/components/ui/content-wrapper";
import Image from "next/image";
import ImageCarousel from "./components/image-carousel";
import articleList from "@/constant/articleList";
import Link from "next/link";

const KeyTechnologyContent = () => {
  return (
    <ContentWrapper className="mt-16">
      <div className="px-[100px] flex justify-around">
        <div className="flex-1">
          <div className="w-[400px]">
            <div className="text-3xl font-bold text-black">掌握肽吸收关键技术</div>
            <Image src="/scientific/taihaole.png" width={75} height={25} className="w-[100px] my-4 -ml-3" alt="态好乐图标" />
            <div className="text-base leading-6 text-justify mr-7">
              态好乐牌成立于2024年，为广东中科春晖健康科技有限公司，与中国农科院农产品研究所联合研发品牌，主打特殊膳食胶原蛋白肽、药食同源等产品。
            </div>
            <div className="mt-5 text-base leading-6 text-justify mr-7">
              态好乐主要产品为胶原蛋白肽、护肝、心脑血管等一系列大健康特殊膳食产品，由中国农科院张春晖博士团队经过20年研发打造中国唯一国家队品牌。
            </div>
            <div className="mt-5 text-base leading-6 text-justify mr-7">
              态好乐产品覆盖儿童、中年、老人群体，针对骨骼、美容、免疫力、肝肾以及心脑血管养护等方面，致力于全方位解决国民健康问题，为国民健康保驾护航。
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image src={'/home/brand-concept.png'} className="w-[500px]" alt="banner" width={400} height={285} />
        </div>
      </div>

    </ContentWrapper>
  )
}

const ScientificContent = () => {
  return (
    <ContentWrapper className="mt-16">
      <div className="px-[100px] flex justify-around">
        <div className="flex-1">
          <Image src="/home/boss-photo.png" width={734} height={1062} alt="boss-photo" className="w-[225px] mx-auto" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-[400px]">
            <div className="text-3xl font-bold text-black text-center">科研为核 守护民族健康</div>
            <div className="text-lime-600 text-lg font-black mt-7 ml-5 text-center">“每日一杯肽，焕您好状态”</div>
            <div className="mt-5 text-base leading-8 text-justify">
              态好乐由张春晖博士领衔，依托中国农业科学院国家级科研团队，专注骨胶原肽研究近20年。团队主导制定6项国家行业标准，获农业农村部十大科技新产品认证，授权发明专利65项，联合国际顶尖高校推动技术全球应用，以科研硬实力定义行业标杆。以“健康中国，利国利民”为宗旨，打造特膳级产品。从骨骼、关节到肌肤，用尖端科技守护国民健康，构建全生命周期管理生态，让“一杯肽”成为民族强韧的基石。
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}

const CoreTechnologyContent = () => {
  return (
    <ContentWrapper className="mt-16">
       <div className="px-[100px]">
        <div className="text-3xl font-bold text-black">骨胶原蛋白肽技术核心</div>
        <div className="flex">
          <div className="flex-1">
            <div className="w-[400px]">
              <div className="text-lime-600 text-lg font-black mt-7">特殊膳食骨胶原蛋白活性肽</div>
              <div className="mt-4 text-base text-justify leading-7">态好乐活性肽产品属于特殊膳食<br />国内第一个国家队研发的特殊膳食、药食同源产品<br />以研发为核心，依托前沿生物技术，探索健康领域<br />的无限可能。</div>
              <div className="mt-4 text-base text-justify leading-7">肽是人体生命中的重要物质<br />促进营养吸收排出代谢废物，改善细胞新陈代谢：<br />肽能激活细胞活性，抑制细胞病病变提高免疫力：<br />肽能修复变性或受损细胞，清除体内自由基：</div>
            </div>
          </div>
          <div className="flex-1">
            <Image src="/scientific/core-technology.png" width={544} height={360} alt="boss-photo" className="w-[400px] mx-auto" />
          </div>
        </div>
       </div>

    </ContentWrapper>
  )
}

const InventionContent = () => {
  const imgList = [
    '/scientific/patent-0.jpg',
    '/scientific/patent-1.jpg',
    '/scientific/patent-2.jpg',
    '/scientific/patent-3.jpg',
    '/scientific/patent-4.jpg',
    '/scientific/patent-5.jpg',
    '/scientific/patent-6.jpg',
  ]
  return (
    <ContentWrapper className="my-16">
      <div className="mx-[100px]">
        <div className="text-3xl font-bold text-black mb-7">发明专利</div>
        <ImageCarousel imgList={imgList} />
      </div>
    </ContentWrapper>
  )
}

const ArticleListContent = () => {
  return (
    <ContentWrapper className="my-16">
      <div className="mx-[100px]">
        <div className="text-3xl font-bold text-black mb-7">相关科普</div>
        {
          articleList.sort((a, b) => a.level - b.level).map((article, index) => (
            <Link className="mt-4 flex justify-between" key={index} href={`/article/${index + 1}`}>
              <div>{article.title}</div>
              <div>{article.date}</div>
            </Link>
          ))
        }
      </div>
    </ContentWrapper>
  )
}

export default function ScientificPage() {
  return (
    <div className="about-us-page">
      <KeyTechnologyContent />
      <ScientificContent />
      <CoreTechnologyContent />
      <InventionContent />
      <ArticleListContent />
    </div>
  )
}