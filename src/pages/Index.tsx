"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios"; // Importa axios para las peticiones HTTP

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProductCard } from "@/components/ui/product-card";
import { CategoryCard } from "@/components/ui/category-card";
import { Button } from "@/components/ui/button";
import { Star, Truck, Shield, CreditCard } from "lucide-react";

// Nota: Las imágenes locales (cap1, capF1, rolexWatch) seguirán siendo usadas
// en las categorías, pero los datos de productos destacados se obtendrán del backend.
import cap1 from "@/assets/cap-1.jpg";
import capF1 from "@/assets/cap-f1.jpg";
import rolexWatch from "@/assets/rolex-watch.jpg";


const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    const fetchContent = async () => {
      try {
        // Petición al endpoint de productos destacados del backend
        const productsResponse = await axios.get("http://localhost:3000/api/products/featured");
        setFeaturedProducts(productsResponse.data);

        // Petición al endpoint de categorías del backend
        const categoriesResponse = await axios.get("http://localhost:3000/api/categories");
        setCategories(categoriesResponse.data);
      } catch (err) {
        console.error("Error al obtener los datos del backend:", err);
        setError("No se pudieron cargar los datos. Inténtalo de nuevo más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 text-white mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p>Cargando contenido...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center p-6 bg-gray-800 rounded-lg shadow-xl">
          <p className="text-xl font-bold mb-2">Error de Conexión</p>
          <p className="text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <Header />
      <HeroSection />

      {/* Features */}
      <section className="py-12 bg-gray-800/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: "Envío Gratis", subtitle: "En compras +$200", color: "blue-500" },
              { icon: Shield, title: "Garantía", subtitle: "2 años oficial", color: "purple-500" },
              { icon: CreditCard, title: "Pago Seguro", subtitle: "Todas las tarjetas", color: "blue-500" },
              { icon: Star, title: "Calidad Premium", subtitle: "Solo originales", color: "purple-500" }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center transform transition-all hover:scale-110 hover:-translate-y-2"
                data-aos="zoom-in"
                data-aos-delay={idx * 200}
              >
                <div className={`h-14 w-14 bg-${feature.color}/20 rounded-full flex items-center justify-center mb-3 shadow-lg`}>
                  <feature.icon className={`h-7 w-7 text-${feature.color}`} />
                </div>
                <p className="font-medium text-sm">{feature.title}</p>
                <p className="text-xs text-gray-300">{feature.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Explora por Categorías</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Desde gorras icónicas hasta relojes de lujo, encuentra exactamente lo que buscas en nuestras colecciones curadas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {categories.map((category, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                {/* Asumiendo que el backend devuelve un objeto de categoría con 'title', 'description', 'image' y 'count' */}
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-800/40 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-600/30 rounded-full blur-3xl animate-bounce"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between mb-12" data-aos="fade-right">
            <div>
              <h2 className="text-4xl font-extrabold text-white mb-2">Productos Destacados</h2>
              <p className="text-gray-300">Los favoritos de nuestros clientes</p>
            </div>
            <Button variant="outline" className="hidden sm:flex hover:scale-110 transition-transform">
              Ver Todos
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, idx) => (
              <div key={product.id} data-aos="zoom-in" data-aos-delay={idx * 200}>
                {/* Los datos de `product` deben coincidir con las props de ProductCard */}
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div
            className="bg-gradient-to-r from-blue-600 via-blue-400 to-black rounded-3xl p-10 lg:p-16 text-center text-white shadow-xl relative overflow-hidden"
            data-aos="fade-up"
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
            <h3 className="text-4xl font-extrabold mb-6 relative z-10">Mantente al día</h3>
            <p className="text-white/80 mb-8 max-w-lg mx-auto relative z-10">
              Suscríbete para recibir ofertas exclusivas, nuevos lanzamientos y contenido premium
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <Button className="bg-gradient-to-r from-blue-600 via-blue-400 to-black text-white hover:scale-110 shadow-lg px-8">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-900 py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-600/20 rounded-full blur-2xl animate-bounce"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div data-aos="fade-up">
              <div className="flex items-center space-x-2 mb-6">
                { /* <div className="h-10 w-10 bg-gradient-to-r from-blue-600 via-blue-400 to-black rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">M</span>
                </div> */}
                <span className="text-xl font-bold text-white">MAROS</span>
              </div>
              <p className="text-gray-400 text-sm">
                Tu destino para gorras premium y relojes de lujo. Calidad garantizada desde 2025.
              </p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="font-semibold text-white mb-4">Productos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Gorras New Era</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">F1 Merchandise</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Relojes Rolex</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Ofertas</a></li>
              </ul>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="font-semibold text-white mb-4">Soporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Envíos y Devoluciones</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Garantías</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="300">
              <h4 className="font-semibold text-white mb-4">Síguenos</h4>
              <div className="flex space-x-3">
                {["f","ig","tw"].map((icon, idx) => (
                  <div
                    key={idx}
                    className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all cursor-pointer shadow-md"
                  >
                    <span className="text-sm font-bold">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t mt-10 pt-8 text-center text-sm text-gray-400" data-aos="fade-up">
            &copy; 2025 MAROS. Hecho con pasión y estilo para los amantes de las gorras y relojes de lujo.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;