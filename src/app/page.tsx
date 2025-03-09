// 選單
import Link from "next/link"
// import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// 商品編號
// 商品名稱
// 商品價格
// 商品簡介
// 商品圖片
// 商品規格
// 商品庫存
// 更新時間

// import { Agent } from "http";
import ProductGrid from "../../components/product-grid";

// 商品
export default function ProductPage() {
  return (
    <>
    <header className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* 行動版選單按鈕 */}
          <Button variant="ghost" size="icon" className="md:hidden">
            {/* <Menu className="h-6 w-6" /> */}
          </Button>

          {/* Logo */}
          <Link href="https://goodvieb-nians-projects-a53712fd.vercel.app/" className="text-xl font-bold">
            GoodVibe商品評價網
          </Link>

          {/* 搜尋欄 */}
          {/* <div className="hidden md:flex items-center max-w-sm flex-1 mx-4">
            <div className="relative w-full">
              <Input placeholder="搜尋商品" className="pr-8" />
              <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
          </div> */}
        </div>

        {/* 分類選單 */}
        <div className="hidden md:flex items-center space-x-6 text-sm mt-2">
          <Link href="https://goodvieb-nians-projects-a53712fd.vercel.app/" className="text-muted-foreground hover:text-foreground">
            首頁
          </Link>
          {/* <Link href="#" className="text-muted-foreground hover:text-foreground">
            電腦筆電
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            家電用品
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            精品配件
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            限時特價
          </Link> */}
        </div>
      </div>
    </header>
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-xl font-bold mb-4">熱門商品</h1>
      <ProductGrid products={[]} />
    </div>
    </>
    
  );
}
