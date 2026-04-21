import { Platform } from "@/data/platforms";
import { Badge } from "@/components/ui/badge";
import { Star, Headphones, Download, Apple, Smartphone, Gift, Wallet, ShieldCheck, QrCode } from "lucide-react";

const accentMap: Record<Platform["accent"], string> = {
  violet: "from-violet-500 to-fuchsia-500",
  rose: "from-rose-500 to-pink-500",
  amber: "from-amber-500 to-orange-500",
  blue: "from-blue-500 to-indigo-500",
  emerald: "from-emerald-500 to-teal-500",
  sky: "from-sky-500 to-cyan-500",
  fuchsia: "from-fuchsia-500 to-purple-500",
  orange: "from-orange-500 to-red-500",
};

const PlatformCard = ({ p }: { p: Platform }) => {
  const grad = accentMap[p.accent];
  return (
    <article className="group relative bg-card/95 backdrop-blur rounded-2xl shadow-card border ring-1 ring-white/40 overflow-hidden hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300">
      {/* subtle top sheen */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* 左侧 logo / badge */}
        <div className="lg:col-span-3 relative p-6 flex flex-col items-center justify-center bg-gradient-to-br from-secondary via-background to-secondary/40 border-b lg:border-b-0 lg:border-r overflow-hidden">
          <div className={`absolute -top-10 -left-10 h-32 w-32 rounded-full bg-gradient-to-br ${grad} opacity-20 blur-2xl`} />
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-gradient-blue text-primary-foreground text-xs font-bold px-2 py-1 rounded shadow-card">
            👍 {p.badge}
          </span>
          <div className={`relative h-28 w-28 rounded-2xl bg-gradient-to-br ${grad} flex items-center justify-center shadow-card mb-3 ring-4 ring-white/60`}>
            <span className="text-primary-foreground text-3xl font-extrabold tracking-wider drop-shadow-md">{p.logoText}</span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/30 via-transparent to-transparent" />
          </div>
          <span className="absolute bottom-3 right-3 rotate-12 bg-gradient-gold text-gold-foreground text-[10px] font-bold px-2 py-0.5 rounded shadow-card">
            ✓ 已认证
          </span>
          <div className="mt-2 flex flex-wrap gap-1 justify-center">
            {["品牌认证", "官网认证", "知名团队", "强力推荐"].map((t) => (
              <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary ring-1 ring-primary/20">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 中间内容 */}
        <div className="lg:col-span-6 p-5 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              {p.group} · {p.name}
              <span className="text-muted-foreground text-sm ml-2">({p.year})</span>
            </h3>
            <div className="flex gap-1">
              <Badge variant="outline" className="text-accent border-accent">优惠</Badge>
              <Badge variant="outline" className="text-primary border-primary">返利</Badge>
              <Badge variant="outline" className="text-emerald-600 border-emerald-600">保障</Badge>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{p.intro}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground shrink-0">官方网址①：</span>
              <a href={p.url1} className="text-primary hover:underline truncate">{p.url1}</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground shrink-0">官方网址②：</span>
              <a href={p.url2} className="text-primary hover:underline truncate">{p.url2}</a>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <a href={p.reg1} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-blue text-primary-foreground text-sm font-semibold shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all">
              <Gift className="h-4 w-4" /> 访问入口 ①
            </a>
            <a href={p.reg2} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-blue text-primary-foreground text-sm font-semibold shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all">
              <Gift className="h-4 w-4" /> 访问入口 ②
            </a>
            <a href={p.service} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-semibold shadow-card hover:opacity-90 hover:-translate-y-0.5 transition-all">
              <Headphones className="h-4 w-4" /> 在线客服
            </a>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-secondary/80 to-secondary/40 p-3 space-y-1.5 text-xs ring-1 ring-border">
            <div className="font-bold text-foreground">★ 品牌亮点</div>
            <div className="text-muted-foreground">完整产品矩阵，覆盖桌面端 / 移动端 / Web 多平台</div>
            <div className="text-muted-foreground">支持免费试用 7 天，按月 / 按年灵活订阅</div>
            <div className="text-muted-foreground">提供企业级 SLA 与本地化部署方案</div>
            <a href={p.software} className="inline-flex items-center gap-1 text-accent font-semibold hover:underline">
              <Download className="h-3 w-3" /> 客户端及配套工具下载
            </a>
          </div>
        </div>

        {/* 右侧 评级 / 下载 */}
        <div className="lg:col-span-3 p-5 bg-gradient-to-br from-secondary/60 to-background border-t lg:border-t-0 lg:border-l space-y-3 text-sm">
          <div className="space-y-1.5">
            <Row label="品质评级">
              <Stars n={p.rating} />
            </Row>
            <Row label="响应速度">
              <Stars n={p.rating} />
            </Row>
            <Row label="人气指数">
              <Stars n={p.rating} />
            </Row>
          </div>
          <Row label="客户端">
            <span className="text-xs text-muted-foreground">电脑 · 安卓 · 苹果</span>
          </Row>
          <Row label="付费方式">
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Wallet className="h-3 w-3" /> 信用卡 / 微信 / 支付宝
            </span>
          </Row>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <a href={p.iosUrl} className="group/btn flex flex-col items-center gap-1 p-2 rounded-lg bg-foreground text-background hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-card">
              <div className="h-12 w-12 bg-background rounded-md flex items-center justify-center text-foreground">
                <QrCode className="h-9 w-9" strokeWidth={1.2} />
              </div>
              <span className="text-xs font-semibold inline-flex items-center gap-1"><Apple className="h-3 w-3" /> 苹果下载</span>
            </a>
            <a href={p.androidUrl} className="group/btn flex flex-col items-center gap-1 p-2 rounded-lg bg-emerald-600 text-white hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-card">
              <div className="h-12 w-12 bg-white rounded-md flex items-center justify-center text-emerald-700">
                <QrCode className="h-9 w-9" strokeWidth={1.2} />
              </div>
              <span className="text-xs font-semibold inline-flex items-center gap-1"><Smartphone className="h-3 w-3" /> 安卓下载</span>
            </a>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-muted-foreground justify-center">
            <ShieldCheck className="h-3 w-3 text-emerald-600" /> 编辑团队人工复核
          </div>
        </div>
      </div>
    </article>
  );
};

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex items-center justify-between gap-2">
    <span className="text-xs text-muted-foreground shrink-0">{label}：</span>
    <span className="flex items-center">{children}</span>
  </div>
);

const Stars = ({ n }: { n: number }) => (
  <span className="inline-flex">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-3.5 w-3.5 ${i < n ? "fill-gold text-gold" : "text-muted-foreground/30"}`} />
    ))}
  </span>
);

export default PlatformCard;