import { Shield, Award, Headphones, TrendingUp } from "lucide-react";

const items = [
  { icon: Shield, title: "保障", desc: "对入驻品牌进行严格审核与定期复评，仅推荐通过验证的优质合作方。" },
  { icon: Award, title: "权威", desc: "由资深行业团队主理，结合真实用户反馈给出客观推荐结果。" },
  { icon: Headphones, title: "服务", desc: "7×24 商务对接与售后协助，访问问题与品牌咨询及时响应。" },
  { icon: TrendingUp, title: "优势", desc: "权威的行业评级、客观的口碑点评、最前沿的品牌资讯与数据。" },
];

const AdvantageBlock = () => {
  return (
    <section className="container -mt-8 md:-mt-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-5 rounded-2xl overflow-hidden shadow-card bg-card/90 backdrop-blur border ring-1 ring-white/40">
        <div className="bg-gradient-blue p-6 md:p-8 text-primary-foreground flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
          <div className="text-3xl md:text-4xl font-bold tracking-wider">品质网</div>
          <p className="mt-2 text-sm opacity-90">品质至上 · 体验无忧</p>
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