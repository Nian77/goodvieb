
"use client"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"



export default function ProductCard() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* 左側產品圖片 */}
          <div className="relative">

            <Image
              src={"/S__34922502_0.jpg"}
              alt="iPhone 16 Pro"
              width={500}
              height={500}
              className="object-contain w-full h-auto"
            />
          </div>

          {/* 右側產品資訊 */}
          <div className="flex flex-col justify-between">
            {/* 產品標題與促銷資訊 */}
            <div>
              {/* <div className="bg-red-500 text-white p-3 mb-4 flex items-center">
                <span className="mr-2">⚡</span>
                <span>限時瘋搶，行有品活動時間有限，敬請把握！</span>
              </div> */}

              <div className="mb-4">
                <p className="text-red-500 text-sm">3公克X 176包</p>
                <h1 className="text-2xl font-bold text-blue-500">THE GOLDEN日本大麥若葉粉末</h1>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-red-500 text-3xl font-bold">$999</span>
                  {/* <span className="text-gray-400 line-through">$999</span> */}
                </div>
              </div>

              {/* 產品特點 */}
              {/* 日本製造業，來自天然原料
              無添加人工香料及人工色素
              每包5.68
              可加入溫冷水或太陽霧
              隨身攜帶，方便攜帶
              本產品請於藥局結帳，謝謝 */}
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>日本製造業，來自天然原料</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>無添加人工香料及人工色素</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>每包5.68</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>可加入溫冷水或太陽霧</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>隨身攜帶，方便攜帶</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>每包5.68</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}