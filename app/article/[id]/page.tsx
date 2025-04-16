import Image from "next/image"
import articleList from "@/constant/articleList"
import ContentWrapper from "@/components/ui/content-wrapper"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const { id } = await params
  const article = articleList[id - 1]
  return (
    <div className="article-page">
      <ContentWrapper className="my-20">
        <div className="mx-[200px]">
          <div className="flex justify-between">
            <div>
              <div className="text-3xl font-bold text-black">{article.title}</div>
              <div className="text-sm mt-2 flex">
                <div>发布时间 {article.date}</div>
                <div className="ml-[200px]">浏览量 {article.watch}</div>
              </div>
            </div>
            <Image src={'/home/patent.png'} width={100} height={120} alt="banner" />
          </div>
          <div className="leading-6 text-sm" dangerouslySetInnerHTML={{ __html: article.content }} />
          {/* <Separator className="bg-black mt-8"/> */}
          <Link className="mt-8 block" href={id > 1 ? `/article/${id - 1}` : "#"}>上一篇：{id > 1 ? articleList[id - 2].title : '无'}</Link>
          <Link className="mt-2 block" href={id < articleList.length? `/article/` + (Number(id) + 1) : "#"}>下一篇：{id < articleList.length ? articleList[id].title : '无'}</Link>
        </div>

      </ContentWrapper>
    </div>
  )
}