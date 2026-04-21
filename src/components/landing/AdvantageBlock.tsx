import { Shield, Award, Headphones, TrendingUp } from "lucide-react";

const items = [
  { icon: Shield, title: "保障", desc: "全程保障玩家资金安全，信誉可靠安心博弈。" },
  { icon: Award, title: "权威", desc: "入驻公司进行严格把关，只为您提供最优质公司。" },
  { icon: Headphones, title: "服务", desc: "从注册开始全程7×24小时为您服务，细致贴心。" },
  { icon: TrendingUp, title: "优势", desc: "权威的行业评级、客观的信誉点评、最前沿资讯数据。" },
];

const AdvantageBlock = () => {
  return (
    <section className="container -mt-8 md:-mt-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-5 rounded-2xl overflow-hidden shadow-card bg-card border">
        <div className="bg-gradient-blue p-6 md:p-8 text-primary-foreground flex flex-col justify-center">
          <div className="text-3xl md:text-4xl font-bold tracking-wider">信誉网</div>
          <p className="mt-2 text-sm opacity-90">信誉至上 · 投注无忧</p>
        </div>
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="p-5 border-l border-border/60 hover:bg-secondary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-foreground">{title}</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvantageBlock;