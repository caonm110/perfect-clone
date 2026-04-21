import { ShieldCheck, Award, Eye, Star, Headphones } from "lucide-react";

const features = [
  { icon: Award, text: "行业领先信誉导航" },
  { icon: ShieldCheck, text: "入驻把关优质精选" },
  { icon: Eye, text: "博彩协会监管监督" },
  { icon: Star, text: "权威评级口碑推荐" },
  { icon: Headphones, text: "7×24 专业客户服务" },
];

const SiteFooter = () => {
  return (
    <footer className="mt-16 bg-foreground text-background">
      <div className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {features.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm">
              <Icon className="h-5 w-5 text-gold" />
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-background/10 text-center space-y-2">
          <p className="text-gold font-bold tracking-widest">真实认证 · 信誉至上 · 优质服务</p>
          <p className="text-xs text-background/60">
            Copyright © {new Date().getFullYear()} 信誉团队担保网 · 版权所有
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;