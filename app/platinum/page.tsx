import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import ContentWrapper from "@/components/ui/content-wrapper"
import Image from "next/image"

const ProductContent = () => {
  return (
    <div className="product-content flex">
      <div className="flex-1 h-[600px] relative">
        <Image src='/platinum/product.jpg' className="object-right object-cover" alt="中科活性肽（专业版）图片" fill />
      </div>
      <div className="flex-1 bg-platinum flex items-center justify-center flex-col">
        <div className="text-stone-700 text-2xl font-bold">中科态好乐</div>
        <div className="text-stone-700 text-2xl font-bold mt-2">骨胶原蛋白肽·特殊膳食 (白金版）</div>
        <div className="text-stone-700 my-8 text-xl">补充营养，强健体魄</div>
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
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/platinum/patent.jpg' fill className="w-full" alt="中科活性肽（专业版）图片" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-platinum flex items-center flex-col justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">八 大 专 利 注 入</div>
            <div className="text-stone-700 mt-8 text-lg">源自天然牛骨精华提取</div>
            <div className="text-stone-700 mt-3 text-lg">维生素D，钙吸收的黄金搭档</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/platinum/technology-1.jpg' fill className="w-full object-cover" alt="中科活性肽（专业版）图片" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-platinum flex items-center flex-col justify-center">
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
        <span className="text-4xl font-bold leading-6">白金版核心</span>
      </div>
      <ContentWrapper className="flex mt-16">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/platinum/nutrition-0.jpg' fill className="w-full" alt="快速吸收，高效滋养" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-platinum flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">快速吸收，高效滋养</div>
            <div className="text-stone-700 mt-8 text-base text-justify leading-7">活性肽能直接被人体吸收，<br/>无需复杂消化，吸收速度大幅提升。<br/>其小分子结构可轻松穿过肠道屏障，快速进入血液循环。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/platinum/nutrition-1.jpg' fill className="w-full" alt="主动吸收，精准输送" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-platinum flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">主动吸收，精准输送</div>
            <div className="text-stone-700 mt-8 text-base text-justify leading-7">能主动、优先被人体吸收，<br/>凭借独特分子结构与细胞受体结合，<br/>将营养快速精准输送到细胞。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/platinum/nutrition-2.jpg' fill className="w-full" alt="强免疫，补能量" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-platinum flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">强免疫，补能量</div>
            <div className="text-stone-700 mt-8 text-base text-justify leading-7">提升免疫力，抵御病菌，<br/>同时补充能量，让人精力充沛。<br/>肽的分子结构调节免疫系统，为细胞代谢供能。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/platinum/nutrition-3.jpg' fill className="w-full" alt="细胞焕新，自愈重启" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-platinum flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">细胞焕新，自愈重启</div>
            <div className="text-stone-700 mt-8 text-base text-justify leading-7">深入细胞，激活沉睡细胞，修复受损细胞。<br/>肽凭借分子结构与细胞信号通路作用，<br/>激活细胞自我修复机制。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/platinum/nutrition-4.jpg' fill className="w-full" alt="抑变性，促代谢" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-platinum flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">抑变性，促代谢</div>
            <div className="text-stone-700 mt-8 text-base text-justify leading-7">抑制细胞变性，预防健康问题，促进新陈代谢，<br/>排出毒素。肽与细胞关键蛋白结合，<br/>调节细胞功能，加速代谢</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/platinum/nutrition-5.jpg' fill className="w-full" alt="纯净配方，安心之选" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-platinum flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">纯净配方，安心之选</div>
            <div className="text-stone-700 mt-8 text-base text-justify leading-7">坚持零添加、零脂肪，<br/>无有害化学物与多余脂肪，<br/>肽保持天然活性，健康无负担</div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

const ProductDetail = () => {
  return (
    <div className="product-detail my-28 relative">
      <div className="bg-platinum absolute left-0 right-0 h-[300px] -z-10" />
      <ContentWrapper className="pt-20">
        <Image src='/platinum/product-detail.jpg' height={582} width={1200} alt="产品详情"/>
      </ContentWrapper>

    </div>
  )
}

export default function platinumPage() {
  return (
    <div className="platinum-page">
      <ProductContent />
      <TechnologyContent />
      <NutritionContent />
      <ProductDetail />
    </div>
  )
}