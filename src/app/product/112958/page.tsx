
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
              <div className="bg-red-500 text-white p-3 mb-4 flex items-center">
                <span className="mr-2">⚡</span>
                <span>限時瘋搶，行有品活動時間有限，敬請把握！</span>
              </div>

              <div className="mb-4">
                <p className="text-red-500 text-sm">限時狂降+好禮多選1</p>
                <h1 className="text-2xl font-bold text-blue-500">Apple 蘋果 iPhone 16 Pro (128G)</h1>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-red-500 text-3xl font-bold">$34,990</span>
                  <span className="text-gray-400 line-through">$36,900</span>
                </div>
              </div>

              {/* 產品特點 */}
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>驚豔的鈦金屬設計</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>相機控制一把罩</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>A18 Pro 的強悍威力</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}