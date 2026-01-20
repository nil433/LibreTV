// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000,  // 验证有效期（90天，约3个月）
    adminLocalStorageKey: 'adminPasswordVerified'  // 新增的管理员验证状态的键名
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
hongniu: {
api: 'http://hongniuzy2.com/api.php/provide/vod/from/hnm3u8',
name: '红牛資源',
},
liangzi: {
api: 'http://cj.lziapi.com/api.php/provide/vod/from/lzm3u8',
name: '量子資源',
},
shandian: {
api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
name: '閃電資源',
},
jinying: {
api: 'http://jyzyapi.com/provide/vod/from/jinyingm3u8',
name: '金鹰资源',
},
guangsu: {
api: 'http://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',
name: '光速资源',
},
aosika: {
api: 'http://aosikazy.com/api.php/provide/vod',
name: '奥斯卡资源网',
},
uku: {
api: 'http://api.ukuapi.com/api.php/provide/vod',
name: 'U酷资源',
},
niuniu: {
api: 'http://api.niuniuzy.me/api.php/provide/vod/',
name: '牛牛|点播',
},
yaya: {
api: 'http://cj.yayazy.net/api.php/provide/vod/',
name: '丫丫|点',
},
haohua: {
api: 'http://hhzyapi.com/api.php/provide/vod',
name: '豪华|点播',
},
suoni: {
api: 'http://suoniapi.com/api.php/provide/vod/',
name: '索尼|点播',
},
feifan: {
api: 'http://cj.ffzyapi.com/api.php/provide/vod/',
name: '非凡|点播',
},
huya: {
api: 'http://www.huyaapi.com/api.php/provide/vod/',
name: '虎牙|点播',
},
piaoling: {
api: 'http://p2100.net/api.php/provide/vod/',
name: '飘零|点播',
},
subo: {
api: 'http://subocaiji.com/api.php/provide/vod/',
name: '速博|点播',
},
xinlang: {
api: 'http://api.xinlangapi.com/xinlangapi.php/provide/vod/',
name: '新浪|点播',
},

dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com', 
    },
    ruyi: {
        api: 'http://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'http://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'http://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv', 
    },
    zy360: {
        api: 'http://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    wolong: {
        api: 'http://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    }, 
    dbzy: {
        api: 'http://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mdzy: {
        api: 'http://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    zuid: {
        api: 'http://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    yinghua: {
        api: 'http://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源'
    },
    baidu: {
        api: 'http://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源'
    },
    wujin: {
        api: 'http://api.wujinapi.com/api.php/provide/vod',
        name: '无尽资源'
    },
    wwzy: {
        api: 'http://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'http://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    },
    /*testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    },*/
    // 下面是一些成人内容的API源，默认隐藏，使用本项目浏览黄色内容违背项目初衷
    // 互联网上传播的色情内容将人彻底客体化、工具化，是性别解放和人类平等道路上的巨大障碍。
    // 这些黄色影片是资本主义父权制压迫的最恶毒体现，它将暴力和屈辱商品化，践踏人的尊严，对受害者造成无法弥愈的伤害，并毒害社会关系。
    // 资本为了利润，不惜将最卑劣的剥削（包括对受害者和表演者的剥削）和暴力商品化，
    // 把性别剥削塑造成“性享受”麻痹观众的意识，转移我们对现实生活中矛盾和压迫的注意力。
    // 这些影片和背后的产业已经使数百万男女“下海”，出卖自己的身体，甚至以此为生计。
    // 而作为观众无辜吗？毫无疑问，他们促成了黄色产业链的再生产。
    // 我们提供此警告，是希望您能认清这些内容的本质——它们是压迫和奴役的工具，而非娱乐。
    senlin: {
         api: 'http://slapibf.com/api.php/provide/vod',
         name: '森林资源',
    },
    aidan: {
         api: 'http://lovedan.net/api.php/provide/vod',
         name: '艾旦影视',
     },    
    ckzy: {
         api: 'http://www.ckzy1.com/api.php/provide/vod',
         name: 'CK资源',
         //adult: true
     },
     jkun: {
         api: 'http://jkunzyapi.com/api.php/provide/vod',
         name: 'jkun资源',
         //adult: true
     },
     r155: {
         api: 'http://155api.com/api.php/provide/vod',
         name: '155资源',
         //adult: true
     },
     lsb: {
         api: 'http://apilsbzy1.com/api.php/provide/vod',
         name: 'lsb资源',
         //adult: true
     },
     huangcang: {
         api: 'http://hsckzy.vip/api.php/provide/vod',
         name: '黄色仓库',
         //adult: true,
         //detail: 'https://hsckzy.vip'
     },
     yutu: {
         api: 'http://yutuzy10.com/api.php/provide/vod',
         name: '玉兔资源',
        //adult: true
     },   
};

// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
