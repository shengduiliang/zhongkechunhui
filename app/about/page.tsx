import ContentWrapper from "@/components/ui/content-wrapper";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="about-us-page">
      <ContentWrapper className="my-8">
        <Image src="/home/boss-photo.png" width={734} height={1062} alt="boss-photo" className="w-[225px] mx-auto" />
        <div className="text-3xl font-bold text-black text-center mt-4">品牌介绍</div>
        <div className="mx-10 text-base leading-9 mt-6">
          广东中科春晖健康科技有限公司成立于2023年，由中国农业科学院专家张春晖博士联合创立，是国家级健康科技转化平台。品牌以“健康中国，利国利民”为使命，专注肽相关产品研发，获农业农村部“十大科技新产品”认证，主导制定6项国家行业标准，授权专利83项。旗下“中科活性肽”系列（专业版、白金版、红粉版、儿童版）及药食同源产品（护肝清、瑙芯舒），覆盖骨骼、关节、肌肤、免疫、心脑、护肝等多维健康场景，以天然成分与尖端科技融合，为全年龄段人群提供精准解决方案。
        </div>
        <div className="flex mt-8">
          <div className="flex-1 px-10">
            <div className="text-3xl font-bold text-black text-center mt-4">品牌使命</div>
            <div className="text-base leading-9 mt-6 text-justify">
              以国家级科研技术赋能全民健康，通过小分子肽与药食同源创新，为骨骼、美容、免疫、儿童成长、护肝及心脑血管健康提供精准干预方案，让科技成为国民健康的坚实屏障。
            </div>
          </div>
          <div className="flex-1 px-10">
            <div className="text-3xl font-bold text-black text-center mt-4">品牌愿景</div>
            <div className="text-base leading-9 mt-6 text-justify">
              成为全球健康领域的引领者，以“每日一杯肽，焕您好状态”为信念，构建覆盖全生命周期的健康管理生态。
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}