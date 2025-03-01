import ProductCard from "./product-card";

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
      id: "KIRSH-004",
      name: "[KIRSH] 小櫻桃標準T恤 2PACK",
      price: 805,
      originalPrice: 937,
      imageUrl: "/placeholder.svg?height=400&width=300",
      rating: 5.0,
    },
    {
      id: "KIRSH-005",
      name: "[KIRSH] 櫻桃拼花logo半拉鍊(象牙色)",
      price: 1526,
      originalPrice: 1737,
      imageUrl: "/placeholder.svg?height=400&width=300",
      rating: 5.0,
    },
    {
      id: "KIRSH-006",
      name: "[KIRSH] 櫻桃夾棉冠軍款羽絨服(米色)",
      price: 2605,
      originalPrice: 2937,
      imageUrl: "/placeholder.svg?height=400&width=300",
      rating: 5.0,
      soldOut: true,
    },
    {
      id: "KIRSH-007",
      name: "[KIRSH] 櫻桃長棉墊(黑色)",
      price: 2967,
      imageUrl: "/placeholder.svg?height=400&width=300",
      rating: 5.0,
      soldOut: true,
    },
    {
      id: "KIRSH-008",
      name: "[KIRSH] Cherry NOMAD 連帽衫藍色(淺粉色)",
      price: 2844,
      imageUrl: "/placeholder.svg?height=400&width=300",
      rating: 5.0,
      soldOut: true,
    },
  ];

  const displayProducts = products.length > 0 ? products : sampleProducts;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
      {displayProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          originalPrice={product.originalPrice}
          imageUrl={product.imageUrl}
          rating={product.rating}
          soldOut={product.soldOut}
        />
      ))}
    </div>
  );
}
