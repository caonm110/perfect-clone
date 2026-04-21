export type Platform = {
  id: string;
  name: string;
  group: string;
  badge: "主推" | "次推" | "次打";
  year: string;
  intro: string;
  url1: string;
  url2: string;
  reg1: string;
  reg2: string;
  service: string;
  software: string;
  iosUrl: string;
  androidUrl: string;
  iosImg?: string;
  androidImg?: string;
  logoText: string; // 文字logo（占位）
  accent: "violet" | "rose" | "amber" | "blue" | "emerald" | "sky" | "fuchsia" | "orange";
  rating: number;
};

export const platforms: Platform[] = [
  {
    id: "yd",
    name: "Aurora Studio",
    group: "Nimbus Group",
    badge: "主推",
    year: "2014",
    intro:
      "【Nimbus · Aurora Studio】专注于品牌视觉与产品体验设计的创意工作室，10 年行业沉淀，服务超过 300 家品牌客户，提供从策略到落地的全链路解决方案。",
    url1: "https://example.com/yd-1",
    url2: "https://example.com/yd-2",
    reg1: "https://example.com/yd-reg-1",
    reg2: "https://example.com/yd-reg-2",
    service: "https://example.com/service",
    software: "https://example.com/yd-software",
    iosUrl: "https://example.com/yd-ios",
    androidUrl: "https://example.com/yd-android",
    logoText: "AS",
    accent: "violet",
    rating: 5,
  },
  {
    id: "hs",
    name: "Helios Cloud",
    group: "Vertex Labs",
    badge: "主推",
    year: "2016",
    intro:
      "【Vertex · Helios Cloud】面向中小企业的一站式云协作平台，集成项目管理、文档协同、自动化工作流，连续三年入选行业 SaaS 优选榜单。",
    url1: "https://example.com/hs-1",
    url2: "https://example.com/hs-2",
    reg1: "https://example.com/hs-reg-1",
    reg2: "https://example.com/hs-reg-2",
    service: "https://example.com/service",
    software: "https://example.com/hs-software",
    iosUrl: "https://example.com/hs-ios",
    androidUrl: "https://example.com/hs-android",
    logoText: "HC",
    accent: "rose",
    rating: 5,
  },
  {
    id: "hd",
    name: "Halcyon Music",
    group: "Nimbus Group",
    badge: "主推",
    year: "2018",
    intro:
      "【Nimbus · Halcyon Music】高品质独立音乐人内容平台，正版授权曲库覆盖全球 40+ 国家，支持 Hi-Res 无损流媒体与离线收藏。",
    url1: "https://example.com/hd-1",
    url2: "https://example.com/hd-2",
    reg1: "https://example.com/hd-reg-1",
    reg2: "https://example.com/hd-reg-2",
    service: "https://example.com/service",
    software: "https://example.com/hd-software",
    iosUrl: "https://example.com/hd-ios",
    androidUrl: "https://example.com/hd-android",
    logoText: "HM",
    accent: "amber",
    rating: 5,
  },
  {
    id: "xy",
    name: "星亿娱乐",
    group: "欧亿集团",
    badge: "次打",
    year: "1986",
    intro:
      "【欧亿9 星亿娱乐】欧亿集团旗下第九平台，拥有在线运营执照，8年信誉，品质坚若磐石，团队全程资金担保，安全无忧！",
    url1: "https://example.com/xy-1",
    url2: "https://example.com/xy-2",
    reg1: "https://example.com/xy-reg-1",
    reg2: "https://example.com/xy-reg-2",
    service: "https://example.com/service",
    software: "https://example.com/xy-software",
    iosUrl: "https://example.com/xy-ios",
    androidUrl: "https://example.com/xy-android",
    logoText: "XY",
    accent: "blue",
    rating: 4,
  },
  {
    id: "mt",
    name: "门徒娱乐",
    group: "拉菲集团",
    badge: "次推",
    year: "1990",
    intro:
      "【拉菲9 门徒娱乐】拉菲集团旗下第九平台，拥有在线运营执照，8年信誉，品质坚若磐石，团队全程资金担保，安全无忧！",
    url1: "https://example.com/mt-1",
    url2: "https://example.com/mt-2",
    reg1: "https://example.com/mt-reg-1",
    reg2: "https://example.com/mt-reg-2",
    service: "https://example.com/service",
    software: "https://example.com/mt-software",
    iosUrl: "https://example.com/mt-ios",
    androidUrl: "https://example.com/mt-android",
    logoText: "MT",
    accent: "emerald",
    rating: 4,
  },
  {
    id: "xo",
    name: "星欧娱乐",
    group: "欧亿集团",
    badge: "次推",
    year: "1998",
    intro:
      "【星欧娱乐】欧亿集团旗下第八平台，拥有在线运营执照，8年信誉，老牌欧亿，星欧品质，坚若磐石，团队全程资金担保，安全无忧！",
    url1: "https://example.com/xo-1",
    url2: "https://example.com/xo-2",
    reg1: "https://example.com/xo-reg-1",
    reg2: "https://example.com/xo-reg-2",
    service: "https://example.com/service",
    software: "https://example.com/xo-software",
    iosUrl: "https://example.com/xo-ios",
    androidUrl: "https://example.com/xo-android",
    logoText: "XO",
    accent: "sky",
    rating: 4,
  },
  {
    id: "jy",
    name: "极悦娱乐",
    group: "赢咖集团",
    badge: "次推",
    year: "1990",
    intro:
      "【赢咖7 极悦娱乐】赢咖集团旗下第七平台，拥有在线运营执照，8年信誉，老牌赢咖，品质坚若磐石，团队全程资金担保，安全无忧！",
    url1: "https://example.com/jy-1",
    url2: "https://example.com/jy-2",
    reg1: "https://example.com/jy-reg-1",
    reg2: "https://example.com/jy-reg-2",
    service: "https://example.com/service",
    software: "https://example.com/jy-software",
    iosUrl: "https://example.com/jy-ios",
    androidUrl: "https://example.com/jy-android",
    logoText: "JY",
    accent: "fuchsia",
    rating: 4,
  },
  {
    id: "ls",
    name: "蓝狮在线",
    group: "欧亿集团",
    badge: "次推",
    year: "1990",
    intro:
      "【欧亿6 蓝狮在线】欧亿集团旗下第六平台，拥有在线运营执照，行业信誉前列，欧亿品质，坚若磐石！",
    url1: "https://example.com/ls-1",
    url2: "https://example.com/ls-2",
    reg1: "https://example.com/ls-reg-1",
    reg2: "https://example.com/ls-reg-2",
    service: "https://example.com/service",
    software: "https://example.com/ls-software",
    iosUrl: "https://example.com/ls-ios",
    androidUrl: "https://example.com/ls-android",
    logoText: "LS",
    accent: "orange",
    rating: 4,
  },
];