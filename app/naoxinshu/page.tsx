import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import ContentWrapper from "@/components/ui/content-wrapper"
import Image from "next/image"

const ProductContent = () => {
  return (
    <div className="product-content flex">
      <div className="flex-1 h-[600px] relative">
        <Image src='/naoxinshu/product.jpg' className="object-right object-cover" alt="中科活性肽（专业版）图片" fill />
      </div>
      <div className="flex-1 bg-naoxinshu flex items-center justify-center flex-col">
        <div className="text-stone-700 text-2xl font-bold">中科态好乐</div>
        <div className="text-stone-700 text-2xl font-bold mt-2">纳豆地龙肽片·瑙芯舒</div>
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
        <span className="text-4xl font-bold leading-6">全维滋养力，精准护内衡</span>
      </div>
      <ContentWrapper className="flex mt-16 flex-row-reverse">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/naoxinshu/technology-0.jpg' fill className="w-full" alt="纳豆地龙肽片·瑙芯舒图片" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-naoxinshu flex items-center flex-col justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">双源活性肽矩阵，科学工艺赋能</div>
            <div className="text-stone-700 mt-8 text-lg">核心成分：地龙蛋白肽+纳豆冻干粉</div>
            <div className="text-stone-700 mt-1 text-lg leading-7">地龙蛋白经定向酶解技术制成小分子肽链，<br/>搭配纳豆冻干粉活性成分，<br/>诠释传统“以养代补”理念与现代生物技术的融合。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/naoxinshu/technology-1.jpg' fill className="w-full object-cover" alt="纳豆地龙肽片·瑙芯舒图片" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-naoxinshu flex items-center flex-col justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">植物精粹协同，自然平衡理念</div>
            <div className="text-stone-700 mt-8 text-lg">科学配伍：山楂黄酮+植物甾醇酯</div>
            <div className="text-stone-700 mt-1 text-lg leading-7">从山楂、玉米等天然植物中提取活性成分，<br/>通过技术提升稳定性，呼应“药食同源”的养生哲学。</div>
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
            <Image src='/naoxinshu/nutrition-0.jpg' fill className="w-full" alt="草本组方，古法新制升级" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-naoxinshu flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">草本组方，古法新制升级</div>
            <div className="text-stone-700 mt-8 text-lg">经典复配：蛹虫草多糖+灵芝三萜类</div>
            <div className="text-stone-700 mt-1 text-lg leading-7">遵循传统，结合现代细胞破壁技术，<br/>释放蛹虫草与灵芝孢子精华，传承东方滋补智慧。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/naoxinshu/nutrition-1.jpg' fill className="w-full" alt="心脑养护植萃群，跨维度支持" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-naoxinshu flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">心脑养护植萃群，跨维度支持</div>
            <div className="text-stone-700 mt-8 text-lg">天然矩阵：银杏黄酮+葛根异黄酮</div>
            <div className="text-stone-700 mt-1 text-lg leading-7">严选银杏叶与葛根活性成分，<br/>协同杜仲叶、桑叶等植萃物质，<br/>形成多维度营养支持网络。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/naoxinshu/nutrition-2.jpg' fill className="w-full" alt="y-氨基丁酸（GABA）" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-naoxinshu flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">温补元气经典组方，调和之道</div>
            <div className="text-stone-700 mt-8 text-lg">古方智慧：人参皂苷+肉桂多酚</div>
            <div className="text-stone-700 mt-1 text-lg leading-7">融合人参温补特性与肉桂暖身成分，<br/>通过超微粉碎工艺提升吸收效率。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/naoxinshu/nutrition-3.jpg' fill className="w-full" alt="海洋陆地共融，矿物营养补给" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-naoxinshu flex items-center justify-center">
        <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">海洋陆地共融，矿物营养补给</div>
            <div className="text-stone-700 mt-8 text-lg">生态馈赠：牡蛎锌肽+砂仁挥发油</div>
            <div className="text-stone-700 mt-1 text-lg leading-7">从海洋牡蛎提取天然锌元素，联合砂仁等陆地草本成分，<br/>构建海陆协同的矿物质补给体系。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/naoxinshu/nutrition-4.jpg' fill className="w-full" alt="全谱草本清润，温和防御体系" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-naoxinshu flex items-center justify-center">
          <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">全谱草本清润，温和防御体系</div>
            <div className="text-stone-700 mt-8 text-lg">协同滋养：菊花黄酮+黄芪皂苷</div>
            <div className="text-stone-700 mt-1 text-lg leading-7">通过菊花的清润特性与黄芪的固本成分，<br/>搭配姜黄素形成温和防御矩阵。</div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className="flex flex-row-reverse">
        <div className="flex-1">
          <AspectRatio className="relative" ratio={3 / 2}>
            <Image src='/naoxinshu/nutrition-5.jpg' fill className="w-full" alt="道地天麻赋能，古法炮制革新" />
          </AspectRatio>
        </div>
        <div className="flex-1 bg-naoxinshu flex items-center justify-center">
        <div className="mx-4">
            <div className="text-stone-700 text-2xl font-bold">道地天麻赋能，古法炮制革新</div>
            <div className="text-stone-700 mt-8 text-lg">生态馈赠：牡蛎锌肽+砂仁挥发油</div>
            <div className="text-stone-700 mt-1 text-lg leading-7">遵循古法，结合现代低温干燥工艺，<br/>保留天麻素活性成分</div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

const ProductDetail = () => {
  return (
    <div className="product-detail my-28 relative">
      <div className="bg-naoxinshu absolute left-0 right-0 h-[300px] -z-10" />
      <ContentWrapper className="pt-20">
        <Image src='/naoxinshu/product-detail.jpg' height={582} width={1200} alt="产品详情"/>
      </ContentWrapper>

    </div>
  )
}

export default function naoxinshuPage() {
  return (
    <div className="naoxinshu-page">
      <ProductContent />
      <TechnologyContent />
      <NutritionContent />
      <ProductDetail />
    </div>
  )
}