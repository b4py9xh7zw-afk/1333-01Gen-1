import { Bell } from 'lucide-react';
import { useState, useEffect } from 'react';

const notices = [
  '【重要公告】关于2026年端午节期间个人网银系统维护的通知',
  '【安全提示】警惕虚假钓鱼网站，保护您的账户安全',
  '【新品推荐】新客专享理财产品，预期年化收益率3.85%',
  '【服务升级】企业网银新版转账功能已上线，欢迎体验',
  '【活动通知】手机银行转账手续费全免优惠活动进行中',
];

export default function NoticeBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notices.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-bank-navyLight/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
      <div className="flex items-center gap-3">
        <div className="p-2 bg-bank-gold/20 rounded-lg flex-shrink-0">
          <Bell className="w-4 h-4 text-bank-gold animate-pulse-soft" />
        </div>
        <div className="flex-1 overflow-hidden relative h-6">
          {notices.map((notice, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <a href="#" className="text-white/80 text-sm hover:text-bank-gold transition-colors line-clamp-1">
                {notice}
              </a>
            </div>
          ))}
        </div>
        <a href="#" className="text-bank-gold text-sm hover:underline flex-shrink-0 whitespace-nowrap">
          更多公告 →
        </a>
      </div>
    </div>
  );
}
