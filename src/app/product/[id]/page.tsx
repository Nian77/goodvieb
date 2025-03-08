import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import Image from "next/image";
// 選單
import Link from "next/link"
import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
interface ProductPageProps {
  params: { id: string };
}

interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    imageUrl: string;
    rating: number;
    soldOut?: boolean;
    itemText: string;
    format: string;
  }
  
  interface ProductGridProps {
    products: Product[];
  }

const sampleProducts: Product[] = [
    {
      id: "567872",
      name: "THE GOLDEN日本大麥若葉粉末",
      price: 999,
      imageUrl: "/S__34922502_0.jpg",
      rating: 0,
      format:"3公克 X 176包",
      itemText: "日本製造來自天然原料,無添加人工香料和人工色素,可加入溫冷水或牛奶,隨身包裝方便攜帶,本產品請於藥房結帳，謝謝"
    },
    {
      id: "112958",
      name: "I-MEI PUFF COMBO PACK義美小泡芙雙口味組合包",
      price: 329,
      imageUrl: "/S__34922504_0.jpg",
      itemText:"I-MEI PUFF (CHOCO & MILK),含巧克力及牛奶兩種口味,口味升級,內餡增量20%,每包27.42 ",
      rating: 5.0,
      format:"64公克X12包",
    },
    {
      id: "743354",
      name: "KIRKLAND SIGNATURE 科克蘭韓國鹽烤海苔",
      price: 395,
      imageUrl: "/S__34922506_0.jpg",
      rating: 5.0,
      itemText:"選用冬天生長高品質海苔,天然海苔原味不過鹹,可直接食用或搭配其他食物,每袋10小包分裝",
      format:"每袋10盒/共170公克",
    },
    {
      id: "144120",
      name: "ORAL-B REPLACEMENT HEADS 歐樂B 電動牙刷刷頭 8入組",
      price: 899,
      imageUrl: "/S__34922507_0.jpg",
      rating: 5.0,
      format:"8人組",
      itemText:"刷頭磨圓不傷琺瑯質,杯型設計完全包裹牙齒,顯示性能刷毛及時提醒更換",
    },
    {
      id: "148930",
      name: "TESCOM HAIR DRYER負離子吹風機",
      price: 969,
      imageUrl: "/S__34922510_0.jpg",
      rating: 5.0,
      itemText:"大風量2.0立方公尺/分, 負離子平衡・消弱靜電, 三段風溫風量控制及冷風鍵, 可摺疊收納・輕巧攜帶",
      format:"重量：500克, 配件：雙氣流風嘴",
    },
    {
      id: "150323",
      name: "FEBREZE CAR VENT CLIPS 汽車芳香劑 5 入",
      price: 419,
      imageUrl: "/S__34922515_0.jpg",
      rating: 5.0,
      itemText:"可依個人喜好調節香味濃淡, 薄膜擴散技術緩慢釋香, 每顆2毫升X 5入, 輕鬆安裝於車內空調出風口, 能消除異味並散發香氣, 開封後最長可維持40天, 每個 83.80",
      format:"汽車芳香劑5入",
    },
    {
      id: "215928",
      name: "FEBREZE FABRIC REFRESHER風倍清織物除菌消臭噴霧",
      price: 449,
      imageUrl: "/S__34922516_0.jpg",
      rating: 5.0,
      itemText:"活動數量有限售完為止 至 2025/03/09",
      format:"70毫升+320毫升X 4",
    },
    {
      id: "1713045",
      name: "KIRKLAND SIGNATURE捲筒衛生紙)",
      price: 539,
      imageUrl: "/S__34922519_0.jpg",
      rating: 5.0,
      itemText:"每張尺寸11.4X10.1公分, 每六捲一包裝，方便儲存, 產地：日本, 每張 0.04, 環保林木 FSC 認證紙漿, 支持森林保護 守護地球",
      format:"425張X 30卷",
    },
    {
      id: "183928",
      name: "KLEENEX INTERFOLD TISSUE舒潔三層抽取式衛生紙",
      price: 419,
      imageUrl: "/S__34922524_0.jpg",
      rating: 5.0,
      itemText:"三層厚實 紙張柔軟細緻, 高效吸水減少用量, 環保水漂不添加螢光劑, 每張 0.17, 環保林木 FSC 認證紙漿, 支持森林保護 守護地球, 不含螢光劑",
      format:"100抽X 24包",
    },
    {
      id: "143950",
      name: "GLASSLOCK FOOD STORAGE冷凍冷藏玻璃保鮮盒",
      price: 999,
      imageUrl: "/S__34922526_0.jpg",
      rating: 5.0,
      itemText:"產地：韓國, 凹槽設計，堆疊不占空間, 透明設計，內容物一目了然, 五種容量，滿足各種需求, 適用於洗碗機・烤箱・微波, 適用於冰箱冷凍・冷藏",
      format:"含蓋20件組",
    },
    {
      id: "144051",
      name: "PQI 100W PD GAN CHARGER 100W 氮化鎵高速充電器",
      price: 999,
      imageUrl: "/S__34922530_0.jpg",
      rating: 5.0,
      format:"1年保固/重量250克USB-C 100W2 + 65W1",
      itemText:"獨立充電時最高輸出100W, USB-A 30W*1, 需搭配5A充電線材達100W, 可同時為四台設備充電",
    },
    {
      id: "146915",
      name: "LOOPLOOP 磁吸式傳輸線兩入 MFI 認證充電兩人組",
      price: 699,
      imageUrl: "/S__34922532_0.jpg",
      rating: 5.0,
      itemText:"磁吸收納傳輸充電線, MFI認證, 不打結，方便收納攜帶",
      format:"1年保固, LIGHTNING TO USB-C 200CM1, LIGHTNING TO USB-A 200CM1",
    },
    {
      id: "228788",
      name: "樂事北海道嫩煎干貝洋芋片",
      price: 229,
      imageUrl: "/S__34922536_0.jpg",
      rating: 5.0,
      itemText:"活動數量有限售完為止 至 2025/03/09",
      format:"580公克",
    },
    {
      id: "141219",
      name: "沃廚輕芯鈦瓷保冷保溫瓶",
      price: 929,
      imageUrl: "/S__34922539_0.jpg",
      rating: 5.0,
      itemText:"鈦陶瓷塗層，不易吸附異味, 保冷8時保溫8時, 杯身防冷凝，不結水珠, 每個 464.50, 翻蓋直飲或彈蓋吸管即飲, 底部防滑矽膠墊設計, 內含吸管四入，輕鬆飲用",
      format:"容量約780毫升2件組",
    },
    {
      id: "30991",
      name: "TREE TOP APPLE JUICE蘋果汁",
      price: 399,
      imageUrl: "/S__34922541_0.jpg",
      rating: 5.0,
      itemText:"露壓工法製成無任何添加物, 不含人工甜味及色素, 此商品開封後須冷藏保存, 每100毫升 4.99",
      format:"每瓶2公升X 4入",
    },
    {
      id: "108994",
      name: "TSENG NOODLES曾拌麵",
      price: 385,
      imageUrl: "/S__34922543_0.jpg",
      rating: 5.0,
      itemText:"",
      format:"116公克X 12包",
    },
    {
      id: "477345",
      name: "KIRKLAND SIGNATURESTRETCH-TITE 保鮮膜",
      price: 499,
      imageUrl: "/S__34922546_0.jpg",
      rating: 5.0,
      itemText:"特殊滑刀設計，方便裁切, 每公尺 1.08, PVC材質，不含塑化劑A, 耐熱溫度82度C",
      format:"2入, 每捲30公分X 231公尺",
    },
    {
      id: "130494",
      name: "CAT'S BEST CAT LITTER 凱優強效凝結木屑砂黑標",
      price: 839,
      imageUrl: "/S__34922548_0.jpg",
      rating: 5.0,
      itemText:"快速凝結，簡易清潔, 仿貓爪觸感，柔軟舒適, 凝結力強，超低粉塵, 全天然杉木纖維, 天然除臭綠球，強效除臭, 適用於單層貓砂盆",
      format:"2.5公斤X 4入",
    },
    {
      id: "1790216",
      name: "ARM & HAMMER CAT LITTER加強除臭貓砂",
      price: 525,
      imageUrl: "/S__34922550_0.jpg",
      rating: 5.0,
      itemText:"可消除排泄物及尿的臭味, 結塊易清除, 清新香味可中和貓砂盆味道, 每公斤 28.94, 添加小蘇打粉, 細緻顆粒清理時不易灑出",
      format:"18.14公斤",
    },
    {
      id: "185392",
      name: "SCOTCH-BRITE SCRUB SPONGE百利爐具專用海綿菜瓜布組",
      price: 299,
      imageUrl: "/S__34922551_0.jpg",
      rating: 5.0,
      itemText:"爐廚專用+細緻餐具鍋具, 海棉面柔軟，起泡力佳, 適用碗盤刀叉及茶杯的清洗, 每個 13.59, 綠色菜瓜布含強力金鋼砂, 可清洗鑄鐵、不鏽鋼油漬, 菜瓜布織維100%回收材料",
      format:"22片",
    },
    {
      id: "139856",
      name: "ARM & HAMMER 強效濃縮洗衣精添加小蘇打 5.91L / 200 LOADS",
      price: 599,
      imageUrl: "/S__34922553_0.jpg",
      rating: 5.0,
      itemText:"22%濃縮（環保新包裝）",
      format:"添加小蘇打5.91L/200LOADS",
    },
    {
      id: "117409",
      name: "CADINA CRISPY FRIES卡迪那 95°C 鮮脆薯條",
      price: 309,
      imageUrl: "/S__34922558_0.jpg",
      rating: 5.0,
      itemText:"採用整顆非基改馬鈴薯鮮切, 95°C低溫真空油炸製成, 搭配真空充氮包裝技術, 保留馬鈴薯鮮甜原味及脆度, 單包裝方便分享食用, 每包 30.90",
      format:"60公克X 10包",
    },
    {
      id: "123862",
      name: "KENJI SWEET POTATO CHIPS健司纖三薯脆片 400 公克",
      price: 279,
      imageUrl: "/S__34922559_0.jpg",
      rating: 5.0,
      itemText:"內含三種地瓜脆片, 台農57號黃地瓜, 台農66號紫地瓜, 每100公克 69.75, 成分單純, 無添加人工香料及味精, 採用低溫真空油炸",
      format:"400公克",
    },
    {
      id: "225718",
      name: "樂事美國進口原味洋芋片425.2 公克",
      price: 175,
      imageUrl: "/S__34922562_0.jpg",
      rating: 5.0,
      itemText:"美味經典配方薯片, 小包裝設計適合分享, 每100公克 41.16",
      format:"425.2公克",
    },
    {
      id: "56877",
      name: "西雅圖即品約克夏奶茶 25 公克 X 100 包",
      price: 519,
      imageUrl: "/S__34922563_0.jpg",
      rating: 5.0,
      itemText:"本產品所含奶精原產地：, 馬來西亞, 熱水沖泡即可享用一杯, 每包 5.19",
      format:"25公克X 100包",
    },
    {
      id: "648080",
      name: "STARBUCKS VERANDA BLEND星巴克 Veranda 混合咖啡 黃金烘焙綜合咖啡豆",
      price: 769,
      imageUrl: "/S__34922566_0.jpg",
      rating: 5.0,
      itemText:" 100%阿拉比卡咖啡豆, 烘焙：中低度烘焙, 帶有可可風味, 每100公克 68.05, 烘焙地：美國, 風味甘醇",
      format:"每包1.13公斤",
    },
    {
      id: "614575",
      name: "STARBUCKS BREAKFAST BLEND早餐綜合咖啡豆",
      price: 769,
      imageUrl: "/S__34922570_0.jpg",
      rating: 5.0,
      itemText:"100%阿拉比卡咖啡豆, 烘焙：中度烘焙, 口感明亮，風味溫和清爽, 每100公克 68.05, 烘焙地：美國",
      format:"每包 1.13 公斤",
    },
    {
      id: "104660",
      name: "STARBUCKS SPRING BLEND 春季限定咖啡豆",
      price: 769,
      imageUrl: "/S__34922572_0.jpg",
      rating: 5.0,
      itemText:"100%阿拉比卡咖啡豆, 中度烘焙, 帶有牛奶巧克力與甜橘香味, 每100公克 68.05, 烘焙地：拉丁美洲與東非",
      format:"每包 1.13 公斤",
    },
    {
      id: "294541",
      name: "O.S.F. 2-IN-1 COFFEE 老舊金山拿鐵二合一",
      price: 699,
      imageUrl: "/S__34922573_0.jpg",
      rating: 5.0,
      itemText:"",
      format:"20公克X 125包",
    },
    {
      id: "109999",
      name: "KIRKLAND SIGNATURE 三層抽取式衛生紙 120 抽 X 24 包",
      price: 369,
      imageUrl: "/S__34922578_0.jpg",
      rating: 5.0,
      itemText:"三層厚度紙質柔軟舒適, 獨特壓花設計高度舒適且細緻, 兼具柔軟與強韌的優越紙質, 每張 0.13, 環保林木 FSC 認證紙漿, 支持森林保護 守護地球, 不含螢光劑",
      format:"120抽X 24",
    },
    {
      id: "237700",
      name: "ARIEL 4D LAUNDRY PODS 4D 超強極淨洗衣膠囊 53 顆 X 2 袋入",
      price: 779,
      imageUrl: "/S__34922580_0.jpg",
      rating: 5.0,
      itemText:"限定最高量洗淨成分, 可除衣領黃漬、醬油泥巴漬, 長效抗臭, 每顆 7.35, 10倍極淨力清除隔夜污漬, 99% 抗菌，高效除螨, 洗衣槽防霉",
      format:"53顆X 2袋入",
    },
    {
      id: "493577",
      name: "PERSIL ADVANCED GEL寶瀅全效能新配方洗衣凝露 4 公升 / 100 蓋次",
      price: 699,
      imageUrl: "/S__34922582_0.jpg",
      rating: 5.0,
      itemText:"德國獨家酵素分解科技, 直達衣物深層纖維有效清潔, 有效去除殘留異味, 每蓋杯 6.99, 新配方有效除螨, 採用25%RPET環保瓶身, 洗衣同時洗淨洗衣機",
      format:"4公升/100蓋次",
    },
  ];

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  // 模擬獲取數據（這裡可以替換為真實 API 請求）
  const findProductById = (id: string) => {
    return sampleProducts.find(product => product.id === id);
  };

  const product = findProductById(id);

  if (!product) {
    return notFound(); // 如果找不到產品，則返回 404
  }

  return (
    <>
    <header className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* 行動版選單按鈕 */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>

          {/* Logo */}
          <Link href="http://localhost:3000/" className="text-xl font-bold">
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
          <Link href="http://localhost:3000/" className="text-muted-foreground hover:text-foreground">
            熱門商品
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
    <div className="max-w-4xl mx-auto p-4">
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* 左側產品圖片 */}
          <div className="relative">

            <Image
              src={product.imageUrl}
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
                <p className="text-red-500 text-sm">{product.format}</p>
                <h1 className="text-2xl font-bold text-blue-500">{product.name}</h1>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-red-500 text-3xl font-bold">${product.price}</span>
                  {/* <span className="text-gray-400 line-through">$999</span> */}
                </div>
              </div>
              {/* 產品特點 */}
                <span>{product.itemText}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
    </>
    
)
 
}
