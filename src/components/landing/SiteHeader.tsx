const SiteHeader = () => {
  return (
    <header className="bg-gradient-to-r from-background via-secondary to-background border-b">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-card">
            <span className="font-serif text-2xl font-bold text-gold-foreground">R</span>
          </div>
          <div className="leading-tight">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-foreground">
              官方团队导航
            </h1>
            <p className="text-xs text-muted-foreground mt-0.5">
              最权威的平台导航站 · WWW.EXAMPLE.COM
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">相信</span>
          <span className="px-1.5 py-0.5 bg-accent text-accent-foreground font-bold rounded">品</span>
          <span className="px-1.5 py-0.5 bg-accent text-accent-foreground font-bold rounded">牌</span>
          <span className="text-muted-foreground">的力量</span>
          <span className="mx-2 h-4 w-px bg-border" />
          <span className="text-foreground font-semibold">任何平台</span>
          <span className="text-accent font-semibold">安全为王</span>
        </div>

        <a
          href="#platforms"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-blue text-primary-foreground shadow-card hover:shadow-glow transition-shadow"
        >
          <span className="text-2xl">🎰</span>
          <div className="leading-tight text-left">
            <div className="font-bold">找平台</div>
            <div className="text-[10px] opacity-90">信誉至上</div>
          </div>
        </a>
      </div>
    </header>
  );
};

export default SiteHeader;