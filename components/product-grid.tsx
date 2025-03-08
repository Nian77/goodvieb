// 讓點擊整個卡片時會跳轉
import ProductCard from "./product-card";
import Link from "next/link";
//商品內容 
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  rating: number;
  soldOut?: boolean;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products = [] }: ProductGridProps) {
  // Sample products if none provided
  const sampleProducts: Product[] = [
    {
      id: "567872",
      name: "THE GOLDEN日本大麥若葉粉末",
      price: 999,
      imageUrl: "/S__34922502_0.jpg",
      rating: 0,
    },
    {
      id: "112958",
      name: "I-MEI PUFF COMBO PACK義美小泡芙雙口味組合包",
      price: 329,
      imageUrl: "/S__34922504_0.jpg",

      rating: 5.0,
    },
    {
      id: "743354",
      name: "KIRKLAND SIGNATURE 科克蘭韓國鹽烤海苔",
      price: 395,
      imageUrl: "/S__34922506_0.jpg",
      rating: 5.0,
    },
    {
      id: "144120",
      name: "ORAL-B REPLACEMENT HEADS 歐樂B 電動牙刷刷頭 8入組",
      price: 899,
      imageUrl: "/S__34922507_0.jpg",
      rating: 5.0,
    },
    {
      id: "148930",
      name: "TESCOM HAIR DRYER負離子吹風機",
      price: 969,
      imageUrl: "/S__34922510_0.jpg",
      rating: 5.0,
    },
    {
      id: "150323",
      name: "FEBREZE CAR VENT CLIPS 汽車芳香劑 5 入",
      price: 419,
      imageUrl: "/S__34922515_0.jpg",
      rating: 5.0,
    },
    {
      id: "215928",
      name: "FEBREZE FABRIC REFRESHER風倍清織物除菌消臭噴霧",
      price: 449,
      imageUrl: "/S__34922516_0.jpg",
      rating: 5.0,
    },
    {
      id: "1713045",
      name: "KIRKLAND SIGNATURE捲筒衛生紙)",
      price: 539,
      imageUrl: "/S__34922519_0.jpg",
      rating: 5.0,
    },
    {
      id: "183928",
      name: "KLEENEX INTERFOLD TISSUE舒潔三層抽取式衛生紙",
      price: 419,
      imageUrl: "/S__34922524_0.jpg",
      rating: 5.0,
    },
    {
      id: "143950",
      name: "GLASSLOCK FOOD STORAGE冷凍冷藏玻璃保鮮盒",
      price: 999,
      imageUrl: "/S__34922526_0.jpg",
      rating: 5.0,
    },
    {
      id: "144051",
      name: "PQI 100W PD GAN CHARGER 100W 氮化鎵高速充電器",
      price: 999,
      imageUrl: "/S__34922530_0.jpg",
      rating: 5.0,
    },
    {
      id: "146915",
      name: "LOOPLOOP 磁吸式傳輸線兩入 MFI 認證充電兩人組",
      price: 699,
      imageUrl: "/S__34922532_0.jpg",
      rating: 5.0,
    },
    {
      id: "228788",
      name: "樂事北海道嫩煎干貝洋芋片",
      price: 229,
      imageUrl: "/S__34922536_0.jpg",
      rating: 5.0,
    },
    {
      id: "141219",
      name: "沃廚輕芯鈦瓷保冷保溫瓶",
      price: 929,
      imageUrl: "/S__34922539_0.jpg",
      rating: 5.0,
    },
    {
      id: "30991",
      name: "TREE TOP APPLE JUICE蘋果汁",
      price: 399,
      imageUrl: "/S__34922541_0.jpg",
      rating: 5.0,
    },
    {
      id: "108994",
      name: "TSENG NOODLES曾拌麵",
      price: 385,
      imageUrl: "/S__34922543_0.jpg",
      rating: 5.0,
    },
    {
      id: "477345",
      name: "KIRKLAND SIGNATURESTRETCH-TITE 保鮮膜",
      price: 499,
      imageUrl: "/S__34922546_0.jpg",
      rating: 5.0,
    },
    {
      id: "130494",
      name: "CAT'S BEST CAT LITTER 凱優強效凝結木屑砂黑標",
      price: 839,
      imageUrl: "/S__34922548_0.jpg",
      rating: 5.0,
    },
    {
      id: "1790216",
      name: "ARM & HAMMER CAT LITTER加強除臭貓砂",
      price: 525,
      imageUrl: "/S__34922550_0.jpg",
      rating: 5.0,
    },
    {
      id: "185392",
      name: "SCOTCH-BRITE SCRUB SPONGE百利爐具專用海綿菜瓜布組",
      price: 299,
      imageUrl: "/S__34922551_0.jpg",
      rating: 5.0,
    },
    {
      id: "139856",
      name: "ARM & HAMMER 強效濃縮洗衣精添加小蘇打 5.91L / 200 LOADS",
      price: 599,
      imageUrl: "/S__34922553_0.jpg",
      rating: 5.0,
    },
    {
      id: "117409",
      name: "CADINA CRISPY FRIES卡迪那 95°C 鮮脆薯條",
      price: 309,
      imageUrl: "/S__34922558_0.jpg",
      rating: 5.0,
    },
    {
      id: "123862",
      name: "KENJI SWEET POTATO CHIPS健司纖三薯脆片 400 公克",
      price: 279,
      imageUrl: "/S__34922559_0.jpg",
      rating: 5.0,
    },
    {
      id: "225718",
      name: "樂事美國進口原味洋芋片425.2 公克",
      price: 175,
      imageUrl: "/S__34922562_0.jpg",
      rating: 5.0,
    },
    {
      id: "56877",
      name: "西雅圖即品約克夏奶茶 25 公克 X 100 包",
      price: 519,
      imageUrl: "/S__34922563_0.jpg",
      rating: 5.0,
    },
    {
      id: "648080",
      name: "STARBUCKS VERANDA BLEND星巴克 Veranda 混合咖啡 黃金烘焙綜合咖啡豆 每包 1.13 公斤",
      price: 769,
      imageUrl: "/S__34922566_0.jpg",
      rating: 5.0,
    },
    {
      id: "614575",
      name: "STARBUCKS BREAKFAST BLEND早餐綜合咖啡豆 每包 1.13 公斤",
      price: 769,
      imageUrl: "/S__34922570_0.jpg",
      rating: 5.0,
    },
    {
      id: "104660",
      name: "STARBUCKS SPRING BLEND 春季限定咖啡豆 每包 1.13 公斤",
      price: 769,
      imageUrl: "/S__34922572_0.jpg",
      rating: 5.0,
    },
    {
      id: "294541",
      name: "O.S.F. 2-IN-1 COFFEE 老舊金山拿鐵二合一 20 公克 X 125 包",
      price: 699,
      imageUrl: "/S__34922573_0.jpg",
      rating: 5.0,
    },
    {
      id: "109999",
      name: "KIRKLAND SIGNATURE 三層抽取式衛生紙 120 抽 X 24 包",
      price: 369,
      imageUrl: "/S__34922578_0.jpg",
      rating: 5.0,
    },
    {
      id: "237700",
      name: "ARIEL 4D LAUNDRY PODS 4D 超強極淨洗衣膠囊 53 顆 X 2 袋入",
      price: 779,
      imageUrl: "/S__34922580_0.jpg",
      rating: 5.0,
    },
    {
      id: "493577",
      name: "PERSIL ADVANCED GEL寶瀅全效能新配方洗衣凝露 4 公升 / 100 蓋次",
      price: 699,
      imageUrl: "/S__34922582_0.jpg",
      rating: 5.0,
    },
  ];

  const displayProducts = products.length > 0 ? products : sampleProducts;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
      {displayProducts.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} passHref>
        <div className="cursor-pointer">
          <ProductCard
            id={product.id}
            name={product.name}
            price={product.price}
            originalPrice={product.originalPrice}
            imageUrl={product.imageUrl}
            rating={product.rating}
            soldOut={product.soldOut}
          />
        </div>
      </Link>
    ))}
  </div>
);
} 
