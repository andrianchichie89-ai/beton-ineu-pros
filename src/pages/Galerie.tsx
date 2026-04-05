import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about-plant.jpg";
import fleetImg from "@/assets/fleet.jpg";
import pouringImg from "@/assets/pouring.jpg";
import concreteImg from "@/assets/concrete-texture.jpg";
import aggregatesImg from "@/assets/aggregates.jpg";

const images = [
  { src: heroBg, alt: "Vedere aeriană a stației de betoane" },
  { src: aboutImg, alt: "Silozuri și echipamente de producție" },
  { src: fleetImg, alt: "Flotă de autobetoniere" },
  { src: pouringImg, alt: "Pompare beton pe șantier" },
  { src: concreteImg, alt: "Beton proaspăt" },
  { src: aggregatesImg, alt: "Agregate de construcții" },
];

const Galerie = () => (
  <section className="section-padding bg-card">
    <div className="container">
      <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Galerie Foto</h1>
      <p className="text-muted-foreground max-w-2xl mb-10">
        Imagini din activitatea noastră: stația de betoane, flota, procesul de producție și turnări pe șantier.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img.alt} className="overflow-hidden rounded-lg group">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Galerie;
