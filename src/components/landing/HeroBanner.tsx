import banner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section
      className="relative w-full h-[280px] md:h-[460px] bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      <div className="container relative h-full flex flex-col items-center justify-center text-center">
        <p className="text-primary-foreground/90 text-sm md:text-base tracking-[0.4em] mb-3 drop-shadow-lg">
          专属服务 · 尊荣之旅
        </p>
        <h2 className="text-3xl md:text-6xl font-extrabold text-primary-foreground drop-shadow-2xl">
          全网{" "}
          <span className="bg-gradient-gold bg-clip-text text-transparent">最具信誉</span>{" "}
          平台
        </h2>
        <p className="mt-4 text-lg md:text-2xl text-primary-foreground font-bold tracking-widest drop-shadow-lg">
          <span className="text-gold">VIP</span> 的确与众不同
        </p>
        <div className="mt-6 px-4 md:px-8 py-2 rounded-full bg-gradient-hero shadow-glow text-primary-foreground text-xs md:text-sm font-medium">
          全网最高奖金投注平台
        </div>
        <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3 text-primary-foreground text-sm">
          {["团队理赔", "人工计划", "全天服务", "信誉至上"].map((t) => (
            <div key={t} className="flex items-center gap-2 bg-background/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
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