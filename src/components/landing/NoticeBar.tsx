import { Megaphone } from "lucide-react";

const NoticeBar = () => {
  return (
    <div className="container mt-6">
      <div className="flex items-center gap-3 bg-foreground text-background rounded-lg px-4 py-3 overflow-hidden">
        <Megaphone className="h-5 w-5 text-gold shrink-0" />
        <div className="overflow-hidden flex-1">
          <div className="whitespace-nowrap animate-[marquee_30s_linear_infinite] text-gold font-bold text-sm md:text-base">
            温馨提醒：本站对入驻品牌进行严格审核与定期复评，只为您推荐最优质的合作品牌，提供真实用户口碑、专业评测与一站式访问入口。商务合作请通过官方渠道联系。
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default NoticeBar;