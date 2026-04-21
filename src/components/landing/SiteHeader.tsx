const SiteHeader = () => {
  return (
    <header className="bg-gradient-to-r from-background via-secondary to-background border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-3">
          <div className="relative h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-card ring-2 ring-gold/30">
            <span className="font-serif text-2xl font-bold text-gold-foreground">N</span>
            <span className="absolute -inset-1 rounded-full bg-gradient-gold opacity-30 blur-md -z-10" />
          </div>
          <div className="leading-tight">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-foreground">
              精选品牌导航
            </h1>
            <p className="text-xs text-muted-foreground mt-0.5">
              优质品牌精选推荐站 · WWW.EXAMPLE.COM
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">相信</span>
          <span className="px-1.5 py-0.5 bg-accent text-accent-foreground font-bold rounded">品</span>
          <span className="px-1.5 py-0.5 bg-accent text-accent-foreground font-bold rounded">质</span>
          <span className="text-muted-foreground">的力量</span>
          <span className="mx-2 h-4 w-px bg-border" />
          <span className="text-foreground font-semibold">优中选优</span>
          <span className="text-accent font-semibold">体验为王</span>
        </div>

        <a
          href="#platforms"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-blue text-primary-foreground shadow-card hover:shadow-glow transition-all hover:-translate-y-0.5"
        >
          <span className="text-2xl">✨</span>
          <div className="leading-tight text-left">
            <div className="font-bold">找品牌</div>
            <div className="text-[10px] opacity-90">品质至上</div>
          </div>
        </a>
      </div>
    </header>
  );
};

export default SiteHeader;