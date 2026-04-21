import { useState } from "react";
import { X, MessageCircle, Bell } from "lucide-react";

const SideContact = () => {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <aside className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-2 bg-card border rounded-xl shadow-card p-3 w-40">
      <button
        onClick={() => setOpen(false)}
        className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-foreground text-background flex items-center justify-center"
        aria-label="关闭"
      >
        <X className="h-3 w-3" />
      </button>
      <div className="h-14 w-14 rounded-full bg-gradient-blue flex items-center justify-center text-primary-foreground shadow-glow ring-2 ring-white/40">
        <MessageCircle className="h-7 w-7" />
      </div>
      <p className="text-sm font-bold">商务咨询</p>
      <div className="w-full text-xs text-center space-y-1">
        <p className="text-muted-foreground">联系方式：</p>
        <p className="text-accent font-semibold">官方渠道获取</p>
      </div>
      <div className="w-full pt-2 border-t space-y-1.5">
        <a href="#" className="block text-xs text-center text-primary hover:underline">品牌导航</a>
        <a href="#" className="block text-xs text-center text-primary hover:underline">行业资讯</a>
        <a href="#" className="block text-xs text-center text-primary hover:underline">入驻 / 登录</a>
      </div>
      <div className="flex gap-2 pt-2">
        <Bell className="h-4 w-4 text-accent" />
        <span className="text-[10px] text-muted-foreground">可信网站认证</span>
      </div>
    </aside>
  );
};

export default SideContact;