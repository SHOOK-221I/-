import ProductCard from "./ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Placeholder product data
const products = [
  {
    id: 1,
    name: "زيت الأرغان المغربي الفاخر",
    price: "189",
    category: "زيوت",
    rating: 5,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
  },
  {
    id: 2,
    name: "كريم الجسم بزبدة الشيا",
    price: "129",
    category: "كريمات",
    rating: 5,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
  },
  {
    id: 3,
    name: "سكراب الجسم بالملح البحري",
    price: "99",
    category: "عناية",
    rating: 4,
    image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=800&q=80",
  },
  {
    id: 4,
    name: "لوشن الجسم بالأفوكادو",
    price: "149",
    category: "كريمات",
    rating: 5,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=800&q=80",
  },
  {
    id: 5,
    name: "زيت جوز الهند العضوي",
    price: "79",
    category: "زيوت",
    rating: 4,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&q=80",
  },
  {
    id: 6,
    name: "ماسك الطين المغربي",
    price: "119",
    category: "عناية",
    rating: 5,
    image: "https://images.unsplash.com/photo-1620756477961-b4c2024dd46d?w=800&q=80",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gradient-ocean">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            <span className="text-gradient-primary">منتجاتنا</span> المميزة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اختر من بين مجموعة واسعة من منتجات العناية الطبيعية الفاخرة
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full" dir="rtl">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="all">الكل</TabsTrigger>
            <TabsTrigger value="oils">زيوت</TabsTrigger>
            <TabsTrigger value="creams">كريمات</TabsTrigger>
            <TabsTrigger value="care">عناية</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="oils" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((p) => p.category === "زيوت")
                .map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="creams" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((p) => p.category === "كريمات")
                .map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="care" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((p) => p.category === "عناية")
                .map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Products;
