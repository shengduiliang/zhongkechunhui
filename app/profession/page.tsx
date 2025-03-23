import { Button } from "@/components/ui/button"
import ContentWrapper from "@/components/ui/content-wrapper"
import Image from "next/image"

const ProductContent = () => {
  return (
    <div className="product-content flex">
      <div className="flex-1 h-[600px] relative">
        <Image src='/profession/product.jpg' className="object-right object-cover" alt="中科活性肽（专业版）图片" fill />
      </div>
      <div className="flex-1 bg-profession flex items-center justify-center flex-col">
        <div className="text-stone-700 text-2xl font-bold">中科活性肽</div>
        <div className="text-stone-700 text-2xl font-bold mt-2">胶原蛋白肽（专业版）</div>
        <div className="text-stone-700 my-8 text-xl">全龄骨骼健康新守护</div>
        <Button className="rounded-none px-7 py-4 bg-stone-700 mt-6">
          <div className="text-sm font-normal">立即购买</div>
        </Button>
      </div>
    </div>
  )
}

const TechnologyContent = () => {
  return (
    <div className="technology-content mt-28">
      <div className="text-center">
        <span className="text-4xl font-bold leading-6">专 利 原 料 × 科 研 创 享</span>
      </div>
      <ContentWrapper className="flex mt-16">
        <div className="flex-1 h-[400px] relative">
          <Image src='/profession/technology-0.jpg' className="object-cover" alt="中科活性肽（专业版）图片" fill />
        </div>
        <div className="flex-1 bg-profession">
          <div className="ml-30 mt-30">
            <div className="text-stone-700 text-2xl font-bold">八 大 专 利 注 入</div>
            <div className="text-stone-700 mt-8 text-xl">源自天然牛骨精华提取</div>
            <div className="text-stone-700 mt-3 text-xl">维生素D，钙吸收的黄金搭档</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1 h-[400px] relative">
          <Image src='/profession/technology-1.jpg' className="object-cover" alt="中科活性肽（专业版）图片" fill />
        </div>
        <div className="flex-1 bg-profession">
          <div className="ml-30 mt-30">
            <div className="text-stone-700 text-2xl font-bold">八 大 专 利 注 入</div>
            <div className="text-stone-700 mt-8 text-xl">源自天然牛骨精华提取</div>
            <div className="text-stone-700 mt-3 text-xl">维生素D，钙吸收的黄金搭档</div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

const NutritionContent = () => {
  return (
    <div className="nutrition-content mt-28">
      <div className="text-center">
        <span className="text-4xl font-bold leading-6">白金版核心</span>
      </div>
      <ContentWrapper className="flex mt-16">
        <div className="flex-1 h-[400px] relative">
          <Image src='/profession/nutrition-0.jpg' className="object-cover" alt="源自天然，牛骨精华馈赠" fill />
        </div>
        <div className="flex-1 bg-profession">
          <div className="mx-30 mt-30">
            <div className="text-stone-700 text-2xl font-bold">源自天然，牛骨精华馈赠</div>
            <div className="text-stone-700 mt-8 text-base text-justify">精选高原黄牛骨髓，新鲜提取骨胶质蛋白。这种天然成分极易被人体消化吸收，能有效补充蛋白质，显著增加骨骼韧性 。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1 h-[400px] relative">
          <Image src='/profession/nutrition-1.jpg' className="object-cover" alt="充足钙源，强健骨骼根基" fill />
        </div>
        <div className="flex-1 bg-profession">
          <div className="mx-30 mt-30">
            <div className="text-stone-700 text-2xl font-bold">充足钙源，强健骨骼根基</div>
            <div className="text-stone-700 mt-8 text-base text-justify">人体仅从食物中摄取钙远远不足，中科活性肽专业版富含乳酸钙，为骨骼发育提供充足钙源，是维持骨骼健康的关键 。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex">
        <div className="flex-1 h-[400px] relative">
          <Image src='/profession/nutrition-2.jpg' className="object-cover" alt="维生素D，钙吸收的黄金搭档" fill />
        </div>
        <div className="flex-1 bg-profession">
          <div className="mx-30 mt-30">
            <div className="text-stone-700 text-2xl font-bold">维生素D，钙吸收的黄金搭档</div>
            <div className="text-stone-700 mt-8 text-base text-justify">维生素D能助力钙转换为活性形式，在补钙过程中，合理补充维生素D必不可少，它是骨骼健康的重要保障 。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1 h-[400px] relative">
          <Image src='/profession/nutrition-3.jpg' className="object-cover" alt="健康的关键纽带" fill />
        </div>
        <div className="flex-1 bg-profession">
          <div className="mx-30 mt-30">
            <div className="text-stone-700 text-2xl font-bold">健康的关键纽带</div>
            <div className="text-stone-700 mt-8 text-base text-justify">活性肽由氨基酸通过肽键连接而成，这种独特结构赋予其特殊的生物学活性。它在人体中发挥着关键作用，是实现产品功效的核心要素 。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex">
        <div className="flex-1 h-[400px] relative">
          <Image src='/profession/nutrition-4.jpg' className="object-cover" alt="中科活性肽（专业版）图片" fill />
        </div>
        <div className="flex-1 bg-profession">
          <div className="mx-30 mt-30">
            <div className="text-stone-700 text-2xl font-bold">守护骨骼健康</div>
            <div className="text-stone-700 mt-8 text-base text-justify">为身体持续提供营养支持，增强骨骼强度，预防骨骼疾病，是日常养生的理想选择 。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1 h-[400px] relative">
          <Image src='/profession/nutrition-5.jpg' className="object-cover" alt="中科活性肽（专业版）图片" fill />
        </div>
        <div className="flex-1 bg-profession">
          <div className="mx-30 mt-30">
            <div className="text-stone-700 text-2xl font-bold">助力生长，守护骨骼发育全程</div>
            <div className="text-stone-700 mt-8 text-base text-justify">富含的乳酸钙和维生素D协同作用，维持骨骼的正常生长与发育，无论是青少年的成长还是成年人的骨骼保养都适用 。</div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

const ProductDetail = () => {
  return (
    <div className="product-detail my-28 relative">
      <div className="bg-profession absolute left-0 right-0 h-[300px] -z-10" />
      <ContentWrapper className="pt-20">
        <Image src='/profession/product-detail.jpg' height={582} width={1200} alt="产品详情"/>
      </ContentWrapper>

    </div>
  )
}

export default function ProfessionPage() {
  return (
    <div className="profession-page">
      <ProductContent />
      <TechnologyContent />
      <NutritionContent />
      <ProductDetail />
    </div>
  )
}