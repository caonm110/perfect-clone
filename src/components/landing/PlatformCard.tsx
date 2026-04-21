import { Platform } from "@/data/platforms";
import { Badge } from "@/components/ui/badge";
import { Star, Headphones, Download, Apple, Smartphone, Gift, Wallet, ShieldCheck } from "lucide-react";

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
    <article className="bg-card rounded-2xl shadow-card border overflow-hidden hover:shadow-glow transition-shadow">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* 左侧 logo / badge */}
        <div className="lg:col-span-3 relative p-6 flex flex-col items-center justify-center bg-gradient-to-br from-secondary to-background border-b lg:border-b-0 lg:border-r">
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-gradient-blue text-primary-foreground text-xs font-bold px-2 py-1 rounded">
            👍 {p.badge}
          </span>
          <div className={`h-28 w-28 rounded-2xl bg-gradient-to-br ${grad} flex items-center justify-center shadow-card mb-3`}>
            <span className="text-primary-foreground text-3xl font-extrabold tracking-wider">{p.logoText}</span>
          </div>
          <span className="absolute bottom-3 right-3 rotate-12 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded">
            ✓ 已认证
          </span>
          <div className="mt-2 flex flex-wrap gap-1 justify-center">
            {["平台认证", "官网认证", "知名公司", "强力推荐"].map((t) => (
              <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary">
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
            <a href={p.reg1} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-blue text-primary-foreground text-sm font-semibold shadow-card hover:opacity-90">
              <Gift className="h-4 w-4" /> 注册地址 ①
            </a>
            <a href={p.reg2} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-blue text-primary-foreground text-sm font-semibold shadow-card hover:opacity-90">
              <Gift className="h-4 w-4" /> 注册地址 ②
            </a>
            <a href={p.service} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-semibold shadow-card hover:opacity-90">
              <Headphones className="h-4 w-4" /> 在线客服
            </a>
          </div>

          <div className="rounded-lg bg-secondary/60 p-3 space-y-1.5 text-xs">
            <div className="font-bold text-foreground">★ 平台亮点</div>
            <div className="text-muted-foreground">奇趣腾讯全系列彩种（1-2-3-4星，任选）</div>
            <div className="text-muted-foreground">最低投注金额 0.2 元，限制 90% 注数</div>
            <div className="text-muted-foreground">充值方式多样化，支持 2 元 / 1 元投注模式</div>
            <a href={p.software} className="inline-flex items-center gap-1 text-accent font-semibold hover:underline">
              <Download className="h-3 w-3" /> 平台辅助软件下载
            </a>
          </div>
        </div>

        {/* 右侧 评级 / 下载 */}
        <div className="lg:col-span-3 p-5 bg-secondary/40 border-t lg:border-t-0 lg:border-l space-y-3 text-sm">
          <div className="space-y-1.5">
            <Row label="信誉评级">
              <Stars n={p.rating} />
            </Row>
            <Row label="结算速度">
              <Stars n={p.rating} />
            </Row>
            <Row label="人气指数">
              <Stars n={p.rating} />
            </Row>
          </div>
          <Row label="客户端">
            <span className="text-xs text-muted-foreground">电脑 · 安卓 · 苹果</span>
          </Row>
          <Row label="充值支付">
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Wallet className="h-3 w-3" /> 银行卡 / 微信 / 支付宝
            </span>
          </Row>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <a href={p.iosUrl} className="flex flex-col items-center gap-1 p-2 rounded-lg bg-foreground text-background hover:opacity-90">
              <Apple className="h-5 w-5" />
              <span className="text-xs font-semibold">苹果下载</span>
            </a>
            <a href={p.androidUrl} className="flex flex-col items-center gap-1 p-2 rounded-lg bg-emerald-600 text-white hover:opacity-90">
              <Smartphone className="h-5 w-5" />
              <span className="text-xs font-semibold">安卓下载</span>
            </a>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-muted-foreground justify-center">
            <ShieldCheck className="h-3 w-3 text-emerald-600" /> 团队全程担保
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