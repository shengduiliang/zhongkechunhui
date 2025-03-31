import ContentWrapper from "@/components/ui/content-wrapper";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";

const ProductContent = () => {
  const productList = [
    { name: "骨胶原蛋白肽·专业版", url: "/profession" },
    { name: "鱼类骨原蛋白肽·红粉版", url: "/pink"},
    { name: "骨胶原蛋白肽·白金版", url: "/platinum" },
    { name: "骨胶原蛋白肽·草莓味", url: "/strawberry" },
    { name: "运动营养食品·瑙芯舒", url: "/naoxinshu" },
    { name: "运动营养食品·护苷清", url: "/huganqing" }
  ]
  return (
    <div className="product-list">
      <div className="text-lg font-bold">产品介绍</div>
      {
        productList.map((item, index) => (
          <Link key={index} className="mt-1 text-sm block" href={item.url}>{item.name}</Link>
        ))
      }
    </div>
  )
}

const SocialContent = () => {
  const socialList = [
    {
      title: "官方直营",
      list: [
        { img: '/footer/tiktok.png', alt: "抖音", qrcode: '/footer/tiktok-qrcode.jpg' },
        { img: '/footer/taobao.png', alt: "淘宝", qrcode: '/footer/taobao-qrcode.png' },
        { img: '/footer/miniprogram.png', alt: "微信小程序", qrcode: '/footer/miniprogram-qrcode.png' },
      ]
    },
    {
      title: "关注我们",
      list: [
        { img: '/footer/tiktok.png', alt: "抖音", qrcode: '/footer/tiktok-qrcode.jpg' },
        { img: '/footer/weibo.png', alt: "微博" },
        { img: '/footer/xiaohongshu.png', alt: "小红书", qrcode: '/footer/xiaohongshu-qrcode.jpg' },
        { img: '/footer/miniprogram.png', alt: "微信", qrcode: '/footer/wechat-qrcode.jpg' },
      ]
    }
  ]
  return (
    <>
      {
        socialList.map((social) => (
          <div className="footer-social" key={social.title}>
            <div className="text-center">官方直营</div>
            <div className="text-center mt-2">——</div>
            <div className="flex gap-2 mt-3">
              {
                social.list.map((item, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger className="cursor-pointer">
                        <Image src={item.img} width={31} height={31} alt={item.alt} className="w-[30px]" />
                      </TooltipTrigger>
                      {
                        item.qrcode && (
                          <TooltipContent className="px-0 py-0 mb-1">
                            <Image src={item.qrcode} width={100} height={100} alt="二维码" />
                          </TooltipContent>
                        )
                      }
                    </Tooltip>
                  </TooltipProvider>
                ))
              }
            </div>
          </div>
        ))
      }
    </>
  )
}

export default function Footer() {
  return (
    <ContentWrapper>
      <Separator className="bg-black"/>
      <div className="flex flex-wrap justify-around py-12">
        <div className="footer-brand flex items-center">
          <Image src='/brand.png' width={110} height={70} alt="logo" />
        </div>
        <div className="footer-product">
          <ProductContent />
          <div className="text-lg font-bold mt-8">科研创新</div>
          <div className="text-lg font-bold mt-2">关于我们</div>
        </div>
        <div className="footer-contact">
          <div className="text-lg font-bold">联系地址：</div>
          <div className="mt-1 text-sm">佛山市禅城区石岭南大道北96号3楼</div>
          <div className="mt-1 text-sm">慈和医疗中心</div>
          <div className="text-lg font-bold mt-12">联系方式:</div>
          <div className="mt-1 text-sm">0757-83272776</div>
        </div>
        <SocialContent />
      </div>
    </ContentWrapper>
  );
}