import { Megaphone } from "lucide-react";

const NoticeBar = () => {
  return (
    <div className="container mt-6">
      <div className="flex items-center gap-3 bg-foreground text-background rounded-lg px-4 py-3 overflow-hidden">
        <Megaphone className="h-5 w-5 text-gold shrink-0" />
        <div className="overflow-hidden flex-1">
          <div className="whitespace-nowrap animate-[marquee_30s_linear_infinite] text-gold font-bold text-sm md:text-base">
            温馨提醒：官方团队入驻公司进行严格把关，只为您提供最优质公司，全程保障玩家资金安全，信誉可靠安心博弈。客服联系方式请通过官方渠道获取。
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