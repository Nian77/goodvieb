// 商品編號
// 商品名稱
// 商品價格
// 商品簡介
// 商品圖片
// 商品規格
// 商品庫存
// 更新時間

import ProductGrid from "../../components/product-grid";

export default function ProductPage() {
  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-xl font-bold mb-4">熱門商品</h1>
      <ProductGrid products={[]} />
    </div>
  );
}
