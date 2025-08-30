import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      
      {/* Video de fondo con gradiente */}
      <div className="absolute inset-0">
        <video
          src="/assets/hero-caps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>
      
      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          
          {/* Badge de nueva colección */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-blue-600/30 backdrop-blur-sm rounded-full text-blue-400 font-medium text-sm border border-blue-500/30">
              Nueva Colección 2025
            </span>
          </div>
          
          {/* Título principal */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Gorras & Relojes{" "}
            <span className="block bg-gradient-to-r from-blue-500 via-blue-400 to-black bg-clip-text text-transparent">
              Premium
            </span>
          </h1>
          
          {/* Descripción */}
          <p className="text-xl text-white/80 mb-8 max-w-lg">
            Descubre nuestra exclusiva colección de gorras New Era, merchandise oficial de F1 
            y relojes Rolex. Calidad y estilo sin compromisos.
          </p>
          
          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 via-blue-400 to-black text-white hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Ver Colección
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
