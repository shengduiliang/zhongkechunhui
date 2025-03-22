import ContentWrapper from "@/components/ui/content-wrapper";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Footer() {
  return (
    <ContentWrapper>
      <Separator className="bg-black"/>
      <div className="flex justify-around py-12">
        <div className="flex items-center">
          <Image src='/brand.png' width={110} height={70} alt="logo" />
        </div>
        <div>
          <div className="product-list">
            <div className="text-lg font-bold">多维智研胶原肽</div>
            <div className="mt-1 text-sm">中科活性肽（白金版）</div>
            <div className="mt-1 text-sm">中科活性肽（专业版）</div>
            <div className="mt-1 text-sm">中科活性肽（粉红版）</div>
            <div className="mt-1 text-sm">中科活性肽罐装白金版</div>
          </div>
          <div className="text-lg font-bold mt-8">科研创新</div>
          <div className="text-lg font-bold mt-2">关于我们</div>
        </div>
        <div className="contract-list">
          <div className="text-lg font-bold">联系地址：</div>
          <div className="mt-1 text-sm">佛山市禅城区石湾镇街道</div>
          <div className="mt-1 text-sm">岭南大道北96号301房</div>
          <div className="text-lg font-bold mt-12">联系方式:</div>
          <div className="mt-1 text-sm">0757-83272776</div>
        </div>
        <div className="direct-sales">
          <div className="text-center">官方直营</div>
          <div className="text-center mt-2">——</div>
          <div className="flex gap-2 mt-3">
            <Image src='/tiktok.png' width={31} height={31} alt="抖音图标" className="w-[30px]" />
            <Image src='/taobao.png' width={31} height={31} alt="淘宝图标" className="w-[31px]" />
            <Image src='/miniprogram.png' width={31} height={31} alt="微信小程序图标" className="w-[31px]" />
          </div>
        </div>
        <div className="direct-sales">
          <div className="text-center">关注我们</div>
          <div className="text-center mt-2">——</div>
          <div className="flex gap-2 mt-3">
            <Image src='/tiktok.png' width={31} height={31} alt="抖音图标" className="w-[31px]" />
            <Image src='/weibo.png' width={31} height={31} alt="微信小程序图标" className="w-[31px]" />
            <Image src='/xiaohongshu.png' width={31} height={31} alt="淘宝图标" className="w-[31px]" />
            <Image src='/miniprogram.png' width={31} height={31} alt="微信小程序图标" className="w-[31px]" />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}