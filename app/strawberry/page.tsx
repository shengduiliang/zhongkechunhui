import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import ContentWrapper from "@/components/ui/content-wrapper"
import Image from "next/image"

const ProductContent = () => {
  return (
    <div className="product-content flex">
      <div className="flex-1 h-[600px] relative">
        <Image src='/strawberry/product.jpg' className="object-right object-cover" alt="中科活性肽（专业版）图片" fill />
      </div>
      <div className="flex-1 bg-strawberry flex items-center justify-center flex-col">
        <div className="text-stone-700 text-2xl font-bold">中科态好乐</div>
        <div className="text-stone-700 text-2xl font-bold mt-2">骨胶原蛋白肽·特殊膳食（草莓味）</div>
        <div className="text-stone-700 my-8 text-xl">干预治疗骨质疏松，健，强，壮骨骼</div>
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
      <ContentWrapper className="flex mt-16 flex-row-reverse">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/strawberry/patent.jpg' fill className="w-full" alt="中科活性肽（专业版）图片" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-strawberry flex items-center flex-col justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">八 大 专 利 注 入</div>
            <div className="text-stone-700 mt-8 text-xl">源自天然牛骨精华提取</div>
            <div className="text-stone-700 mt-3 text-xl">维生素D，钙吸收的黄金搭档</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/strawberry/technology-1.jpg' fill className="w-full object-cover" alt="中科活性肽（专业版）图片" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-strawberry flex items-center flex-col justify-center">
          <div className="text-stone-700 text-xl">中科农科院农产品研究所研发</div>
          <div className="text-stone-700 mt-3 text-xl">国内第一个<span className="font-bold">“中字号”</span>的肽</div>
        </div>
      </ContentWrapper>
    </div>
  )
}

const NutritionContent = () => {
  return (
    <div className="nutrition-content mt-28">
      <div className="text-center">
        <span className="text-4xl font-bold leading-6">核心成分</span>
      </div>
      <ContentWrapper className="flex mt-16">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/strawberry/nutrition-0.jpg' fill className="w-full" alt="小分子胶原蛋白肽" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-strawberry flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">小分子胶原蛋白肽</div>
            <div className="text-sm mt-2">每盒添加9000mg</div>
            <div className="text-stone-700 mt-8 text-base text-justify leading-7">中科张春晖带领团队初探了胶原蛋自肽对骨骼的改善作用，<br/>助力6-12岁儿童生长发育<br/>生长疼痛、长高等，小分子量更易吸收。</div>
            <div className="text-sm mt-2">使用总平均分子量在1000-2000道尔顿的<br/>小分子低聚肽，每盒添加量9000mg</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/strawberry/nutrition-1.jpg' fill className="w-full" alt="靶向乳酸钙" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-strawberry flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">靶向乳酸钙</div>
            <div className="text-stone-700 mt-8 text-base text-justify leading-7">张春晖小分子技术，将钙缩小。<br/>黄金钙磷比1.5:1配方，让孩子骨骺线<br/>多开放2年，尤其适合爱吃零食<br/>骨龄偏大的儿童。<br/>每日2袋=喝1.5L牛奶的钙量</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/strawberry/nutrition-2.jpg' fill className="w-full" alt="y-氨基丁酸（GABA）" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-strawberry flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">y-氨基丁酸（GABA）</div>
            <div className="text-stone-700 mt-8 text-base text-justify leading-7">北京儿童医院监测显示孩子深度睡眠<br/>从1.2小时—3.3小时，夜间生长激素<br/>分泌量飙升。相当于每晚多长高1小时！<br/>特别针对作业多、睡前兴奋的学龄儿童<br/>生长激素火力全开</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/strawberry/nutrition-3.jpg' fill className="w-full" alt="复合促渗因子" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-strawberry flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">复合促渗因子</div>
            <div className="text-stone-700 mt-8 text-base text-justify leading-7">儿童爱喝奶茶、吃零食？糖分抢钙通道<br/>补的营养全浪费！维生素D3+维生素K2双通道<br/>可以阻断糖分干扰，偷吃甜食也不怕！<br/>锌离子激活骨骼合成，喝1袋抵3袋效果。</div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

const ProductDetail = () => {
  return (
    <div className="product-detail my-28 relative">
      <div className="bg-strawberry absolute left-0 right-0 h-[300px] -z-10" />
      <ContentWrapper className="pt-20">
        <Image src='/strawberry/product-detail.jpg' height={582} width={1200} alt="产品详情"/>
      </ContentWrapper>
    </div>
  )
}

export default function strawberryPage() {
  return (
    <div className="strawberry-page">
      <ProductContent />
      <TechnologyContent />
      <NutritionContent />
      <ProductDetail />
    </div>
  )
}