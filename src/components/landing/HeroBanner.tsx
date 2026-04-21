import banner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section
      className="relative w-full h-[300px] md:h-[480px] bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(268_60%_15%/0.55)] via-transparent to-[hsl(320_60%_20%/0.55)]" />
      <div className="container relative h-full flex flex-col items-center justify-center text-center">
        <p className="text-primary-foreground/95 text-sm md:text-base tracking-[0.4em] mb-3 drop-shadow-lg">
          臻选品质 · 优雅之选
        </p>
        <h2 className="text-3xl md:text-6xl font-extrabold text-primary-foreground drop-shadow-2xl leading-tight">
          全网{" "}
          <span className="bg-gradient-gold bg-clip-text text-transparent drop-shadow-[0_2px_8px_hsl(48_95%_60%/0.5)]">优质臻选</span>{" "}
          品牌
        </h2>
        <p className="mt-4 text-lg md:text-2xl text-primary-foreground font-bold tracking-widest drop-shadow-lg">
          <span className="text-gold">VIP</span> 的确与众不同
        </p>
        <div className="mt-6 px-4 md:px-8 py-2 rounded-full bg-gradient-hero shadow-glow text-primary-foreground text-xs md:text-sm font-medium ring-1 ring-white/20 backdrop-blur">
          年度优质品牌精选推荐
        </div>
        <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3 text-primary-foreground text-sm">
          {["品质保障", "专业评测", "全天服务", "口碑至上"].map((t) => (
            <div key={t} className="flex items-center gap-2 bg-background/10 backdrop-blur-md px-3 py-1.5 rounded-full ring-1 ring-white/20">
              <span className="h-5 w-5 rounded-full bg-gradient-gold text-gold-foreground text-xs flex items-center justify-center">✓</span>
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;