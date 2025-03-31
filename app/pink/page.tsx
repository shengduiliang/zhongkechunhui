import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import ContentWrapper from "@/components/ui/content-wrapper"
import Image from "next/image"

const ProductContent = () => {
  return (
    <div className="product-content flex">
      <div className="flex-1 h-[600px] relative">
        <Image src='/pink/product.jpg' className="object-right object-cover" alt="中科活性肽（专业版）图片" fill />
      </div>
      <div className="flex-1 bg-pink flex items-center justify-center flex-col">
        <div className="text-stone-700 text-2xl font-bold">中科态好乐</div>
        <div className="text-stone-700 text-2xl font-bold mt-2">骨胶原蛋白肽·特殊膳食 (红粉版）</div>
        <div className="text-stone-700 my-8 text-xl">专属 18 岁后的美肌</div>
        <Button className="rounded-none px-7 py-4 bg-stone-700 mt-6">
          <div className="text-sm font-normal">立即咨询</div>
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
          <Image src='/pink/technology-0.jpg' className="object-cover" alt="中科活性肽（专业版）图片" fill />
        </div>
        <div className="flex-1 bg-pink flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">专 利 注 入</div>
            <div className="text-stone-700 mt-8 text-xl">鱼类胶原蛋白肽</div>
            <div className="text-stone-700 mt-3 text-xl">专属 18 岁后的美肌</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1 h-[400px] relative">
          <Image src='/pink/technology-1.jpg' className="object-cover" alt="中科活性肽（专业版）图片" fill />
        </div>
        <div className="flex-1 bg-pink flex items-center flex-col justify-center">
          <div className="text-stone-700 text-lg">中科农科院农产品研究所研发</div>
          <div className="text-stone-700 mt-3 text-lg">国内第一个<span className="font-bold">“中字号”</span>的肽</div>
        </div>
      </ContentWrapper>
    </div>
  )
}

const NutritionContent = () => {
  return (
    <div className="nutrition-content mt-28">
      <div className="text-center">
        <span className="text-4xl font-bold leading-6">红粉版核心</span>
      </div>
      <ContentWrapper className="flex mt-16">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/pink/nutrition-0.jpg' fill className="w-full" alt="罗非鱼精华，美肌新动力" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-pink flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">罗非鱼精华，美肌新动力</div>
            <div className="text-stone-700 mt-8 text-base text-justify leading-7">胶原蛋白源自罗非鱼，<br/>是美容养颜的优质原料，<br/>能有效补充肌肤流失的胶原蛋白。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/pink/nutrition-1.jpg' fill className="w-full" alt="特殊膳食，营养健康之选" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-pink flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">特殊膳食，营养健康之选</div>
            <div className="text-stone-700 mt-8 text-base text-justify leading-7">特殊膳食，营养更健康，<br/>具有预防治疗功效，<br/>可用于临床治疗疾病。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/pink/nutrition-2.jpg' fill className="w-full" alt="小分子结构，吸收无阻" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-pink flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">小分子结构，吸收无阻</div>
            <div className="text-stone-700 mt-8 text-base text-justify leading-7">小分子特点，能快速溶解，<br/>被人体高效吸收，<br/>让肌肤迅速汲取营养。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/pink/nutrition-3.jpg' fill className="w-full" alt="日常抗衰，留住青春光" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-pink flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">日常抗衰，留住青春光</div>
            <div className="text-stone-700 mt-8 text-base text-justify leading-7">强大的抗氧化能力，有效抵抗衰老，<br/>让肌肤时刻保持年轻活力，<br/>是日常保养的理想选择。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/pink/nutrition-4.jpg' fill className="w-full" alt="产后新生，美肌焕新" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-pink flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">产后新生，美肌焕新</div>
            <div className="text-stone-700 mt-8 text-base text-justify leading-7">产后妈妈设计，助力肌肤修复，<br/>改善产后肌肤问题，<br/>让妈妈们重拾美丽自信。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/pink/nutrition-5.jpg' fill className="w-full" alt="美肌关键所在" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-pink flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">美肌关键所在</div>
            <div className="text-stone-700 mt-8 text-base text-justify leading-7">活性肽由氨基酸通过肽键连接而成，<br/>这种独特结构赋予其强大的生物活性，<br/>是实现美肌功效的核心</div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

const ProductDetail = () => {
  return (
    <div className="product-detail my-28 relative">
      <div className="bg-pink absolute left-0 right-0 h-[300px] -z-10" />
      <ContentWrapper className="pt-20">
        <Image src='/pink/product-detail.jpg' height={582} width={1200} alt="产品详情"/>
      </ContentWrapper>

    </div>
  )
}

export default function pinkPage() {
  return (
    <div className="pink-page">
      <ProductContent />
      <TechnologyContent />
      <NutritionContent />
      <ProductDetail />
    </div>
  )
}