import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import ContentWrapper from "@/components/ui/content-wrapper"
import Image from "next/image"

const ProductContent = () => {
  return (
    <div className="product-content flex">
      <div className="flex-1 h-[600px] relative">
        <Image src='/huganqing/product.jpg' className="object-right object-cover" alt="中科活性肽（专业版）图片" fill />
      </div>
      <div className="flex-1 bg-huganqing flex items-center justify-center flex-col">
        <div className="text-stone-700 text-2xl font-bold">中科态好乐</div>
        <div className="text-stone-700 text-2xl font-bold mt-2">姜黄灵芝肽片·护苷清</div>
        <div className="text-stone-700 my-8 text-xl">草本精研力，守护内外平衡</div>
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
        <span className="text-4xl font-bold leading-6">本草智慧× 多维养护</span>
      </div>
      <ContentWrapper className="flex mt-16 flex-row-reverse">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/huganqing/technology-0.jpg' fill className="w-full" alt="纳豆地龙肽片·瑙芯舒图片" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-huganqing flex items-center flex-col justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">灵芝精华，传承东方养生智慧</div>
            <div className="text-stone-700 mt-8 text-lg">精选道地灵芝，古法工艺，保留三萜类活性物质，<br/>搭配现代低温破壁技术，释放灵芝孢子精华，<br/>延续传统滋补理念。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/huganqing/technology-1.jpg' fill className="w-full object-cover" alt="纳豆地龙肽片·瑙芯舒图片" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-huganqing flex items-center flex-col justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">姜黄素科学复配，激活内在保护力</div>
            <div className="text-stone-700 mt-8 text-lg">姜黄素科学处理，提升成分稳定性，<br/>支持活性成分更稳定释放，延续姜黄“行气通络”的传统价值。</div>
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
        <span className="text-4xl font-bold leading-6">核心成分</span>
      </div>
      <ContentWrapper className="flex mt-16">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/huganqing/nutrition-0.jpg' fill className="w-full" alt="葛根黄精黄金配比，双效协同调理" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-huganqing flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">葛根黄精黄金配比，双效协同调理</div>
            <div className="text-stone-700 mt-8 text-lg">黄金配伍：葛根异黄酮+黄精多糖</div>
            <div className="text-stone-700 mt-1 text-lg leading-7">融合葛根清润特性与黄精滋养成分，<br/>搭配山药、猴头菇等药食同源食材，<br/>形成温和调理的复合营养矩阵。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/huganqing/nutrition-1.jpg' fill className="w-full" alt="小分子活性肽，温和易吸收" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-huganqing flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">小分子活性肽，温和易吸收</div>
            <div className="text-stone-700 mt-8 text-lg">过酶解技术将大分子蛋白转化为小分子肽链，<br/>更易被人体温和吸收，<br/>契合现代营养学“轻补”理念。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/huganqing/nutrition-2.jpg' fill className="w-full" alt="药食同源组合，延续养胃传统" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-huganqing flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">药食同源组合，延续养胃传统</div>
            <div className="text-stone-700 mt-8 text-lg">古方智慧：猴头菇β-葡聚糖+山药粘液蛋白</div>
            <div className="text-stone-700 mt-1 text-lg leading-7">传承《食疗本草》养护理念，<br/>采用冻干破壁技术保留食材活性，<br/>支持现代饮食环境下的消化系统健康。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/huganqing/nutrition-3.jpg' fill className="w-full" alt="全谱维生素群，精准营养支持" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-huganqing flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">全谱维生素群，精准营养支持</div>
            <div className="text-stone-700 mt-8 text-lg">科学搭配：B族维生素+维生素C</div>
            <div className="text-stone-700 mt-1 text-lg leading-7">依据膳食营养指南，复合添加4种B族维生素及维生素C，<br/>协同牛磺酸构建能量代谢网络，<br/>满足现代快节奏生活的营养需求。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/huganqing/nutrition-4.jpg' fill className="w-full" alt="鸡内金消导系统，助力营养转化" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-huganqing flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">鸡内金消导系统，助力营养转化</div>
            <div className="text-stone-700 mt-8 text-lg leading-7">传承中医“消食化积”理论，<br/>结合现代生物发酵技术提取活性酶，<br/>辅助提升营养吸收效率，实现古法智慧的现代化表达。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/huganqing/nutrition-5.jpg' fill className="w-full" alt="三重抗氧化矩阵，抵御内外压力" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-huganqing flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">三重抗氧化矩阵，抵御内外压力</div>
            <div className="text-stone-700 mt-8 text-lg">天然防御体系：维生素C+烟酰胺+叶酸</div>
            <div className="text-stone-700 mt-1 text-lg leading-7">通过维生素C与烟酰胺的协同作用，<br/>联合叶酸构建细胞保护屏障，<br/>呼应国际营养学界“全谱抗氧化”的健康理念。</div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

const ProductDetail = () => {
  return (
    <div className="product-detail my-28 relative">
      <div className="bg-huganqing absolute left-0 right-0 h-[300px] -z-10" />
      <ContentWrapper className="pt-20">
        <Image src='/huganqing/product-detail.jpg' height={582} width={1200} alt="产品详情"/>
      </ContentWrapper>

    </div>
  )
}

export default function huganqingPage() {
  return (
    <div className="huganqing-page">
      <ProductContent />
      <TechnologyContent />
      <NutritionContent />
      <ProductDetail />
    </div>
  )
}