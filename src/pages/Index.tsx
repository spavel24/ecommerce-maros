import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProductCard } from "@/components/ui/product-card";
import { CategoryCard } from "@/components/ui/category-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Truck, Shield, CreditCard } from "lucide-react";

import cap1 from "@/assets/cap-1.jpg";
import capF1 from "@/assets/cap-f1.jpg";
import rolexWatch from "@/assets/rolex-watch.jpg";

const featuredProducts = [
  { id: "1", name: "Gorra New Era Classic", price: 89, originalPrice: 120, image: cap1, category: "New Era", isNew: true },
  { id: "2", name: "Ferrari F1 Team Cap 2025", price: 156, image: capF1, category: "F1 Official", isNew: true },
  { id: "3", name: "Rolex Submariner Gold", price: 45000, originalPrice: 52000, image: rolexWatch, category: "Rolex" },
  { id: "4", name: "Mercedes AMG F1 Cap", price: 145, image: capF1, category: "F1 Official" }
];

const categories = [
  { title: "Gorras Premium", description: "New Era, Barbas Hats y más", image: cap1, count: 45 },
  { title: "F1 Merchandise", description: "Oficial de todos los equipos", image: capF1, count: 28 },
  { title: "Relojes Rolex", description: "Lujo y precisión", image: rolexWatch, count: 12 }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <HeroSection />

      {/* Features */}
      <section className="py-12 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: "Envío Gratis", subtitle: "En compras +$200", color: "blue-500" },
              { icon: Shield, title: "Garantía", subtitle: "2 años oficial", color: "purple-500" },
              { icon: CreditCard, title: "Pago Seguro", subtitle: "Todas las tarjetas", color: "blue-500" },
              { icon: Star, title: "Calidad Premium", subtitle: "Solo originales", color: "purple-500" }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className={`h-12 w-12 bg-${feature.color}/20 rounded-full flex items-center justify-center mb-3 shadow-md`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                </div>
                <p className="font-medium text-sm">{feature.title}</p>
                <p className="text-xs text-gray-300">{feature.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Explora por Categorías</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Desde gorras icónicas hasta relojes de lujo, encuentra exactamente lo que buscas en nuestras colecciones curadas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Productos Destacados</h2>
              <p className="text-gray-300">Los favoritos de nuestros clientes</p>
            </div>
            <Button variant="outline" className="hidden sm:flex">
              Ver Todos
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 via-blue-400 to-black rounded-2xl p-8 lg:p-12 text-center text-white shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Mantente al día</h3>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Suscríbete para recibir ofertas exclusivas, nuevos lanzamientos y contenido premium
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <Button className="bg-gradient-to-r from-blue-600 via-blue-400 to-black text-white hover:scale-105 shadow-lg px-8">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-400 to-black shadow-lg">
            <img 
              src="/assets/logo.png" 
              alt="Logo Hat Crown" 
              className="h-6 w-6 object-contain"
            />
          </div>
          {/* <span className="text-xl font-bold text-white">Hat Crown</span> */}
        </div>
              <p className="text-gray-400 text-sm">
                Tu destino para gorras premium y relojes de lujo. Calidad garantizada desde 2025.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Productos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Gorras New Era</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">F1 Merchandise</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Relojes Rolex</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Ofertas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Soporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Envíos y Devoluciones</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Garantías</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Síguenos</h4>
              <div className="flex space-x-3">
                {["f","ig","tw"].map((icon, idx) => (
                  <div key={idx} className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all cursor-pointer shadow-md">
                    <span className="text-sm font-bold">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-400">
          &copy; 2025 MAROS. Hecho con pasión y estilo para los amantes de las gorras y relojes de lujo.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
