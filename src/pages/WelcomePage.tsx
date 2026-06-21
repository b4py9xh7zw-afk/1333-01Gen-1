import { useState, useEffect } from 'react';
import { Shield, Lock, Globe } from 'lucide-react';
import RoleTabs, { type UserRole } from '@/components/RoleTabs';
import LoginForm from '@/components/LoginForm';
import SecurityPanel from '@/components/SecurityPanel';
import NoticeBar from '@/components/NoticeBar';
import HelpLine from '@/components/HelpLine';
import CertificateStatus from '@/components/CertificateStatus';

export default function WelcomePage() {
  const [activeRole, setActiveRole] = useState<UserRole>('personal');
  const [certStatus, setCertStatus] = useState<'valid' | 'expired' | 'missing'>('valid');

  useEffect(() => {
    if (activeRole === 'enterprise') {
      setCertStatus('expired');
    } else if (activeRole === 'sme') {
      setCertStatus('missing');
    } else {
      setCertStatus('valid');
    }
  }, [activeRole]);

  const handleLogin = (data: { username: string; password: string; captcha: string }) => {
    console.log('Login attempt:', { role: activeRole, ...data });
    alert(`登录信息已提交\n角色：${activeRole}\n账号：${data.username}`);
  };

  const handleDownload = (os: 'windows' | 'mac') => {
    alert(`正在下载 ${os} 版本安全控件...`);
  };

  const handleCertFix = () => {
    if (certStatus === 'valid') {
      alert('证书详情页面');
    } else if (certStatus === 'expired') {
      alert('正在跳转到证书更新页面...');
    } else {
      alert('正在跳转到证书安装向导...');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-grid">
      <div className="gradient-mesh -top-40 -left-40 opacity-60" />
      <div className="gradient-mesh -bottom-40 -right-40 opacity-40" />

      <header className="relative z-10 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-10 h-10 bg-gradient-to-br from-bank-gold to-bank-goldDark rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-bank-navy" />
            </div>
            <div>
              <h1 className="font-display text-xl md:text-2xl font-semibold text-white tracking-wide">
                华瑞银行
              </h1>
              <p className="text-white/50 text-xs hidden md:block">HUARUI BANK</p>
            </div>
          </div>

          <nav className="flex items-center gap-2 md:gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors hidden md:block">
              电子银行
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors hidden md:block">
              网点查询
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors hidden md:block">
              下载中心
            </a>
            <a href="#" className="flex items-center gap-1.5 text-bank-gold hover:text-bank-goldLight text-sm transition-colors">
              <Lock className="w-4 h-4" />
              <span>安全中心</span>
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-6 md:py-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="font-display text-2xl md:text-4xl font-semibold text-white mb-2">
              欢迎使用 <span className="text-bank-gold">网上银行</span>
            </h2>
            <p className="text-white/60 text-sm md:text-base">
              安全、便捷、专业的一站式金融服务平台
            </p>
          </div>

          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            <RoleTabs activeRole={activeRole} onRoleChange={setActiveRole} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
            <div className="lg:col-span-3 space-y-4 order-2 lg:order-1">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <HelpLine />
              </div>
              <CertificateStatus status={certStatus} onFix={handleCertFix} />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="card rounded-2xl p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-bank-navy">
                      {activeRole === 'personal' && '个人网银登录'}
                      {activeRole === 'enterprise' && '企业网银登录'}
                      {activeRole === 'sme' && '小微企业网银登录'}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      请输入您的账号信息进行安全登录
                    </p>
                  </div>
                  <div className="p-2 bg-bank-gold/10 rounded-lg">
                    <Shield className="w-6 h-6 text-bank-gold" />
                  </div>
                </div>

                <LoginForm role={activeRole} onSubmit={handleLogin} />
              </div>

              <div className="mt-4">
                <SecurityPanel onDownload={handleDownload} />
              </div>
            </div>

            <div className="lg:col-span-3 space-y-4 order-3">
              <NoticeBar />

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-white font-semibold mb-4">安全提示</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-white/70">
                    <span className="w-1.5 h-1.5 bg-bank-gold rounded-full mt-2 flex-shrink-0" />
                    <span>请认准官网域名 www.huaruibank.com</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/70">
                    <span className="w-1.5 h-1.5 bg-bank-gold rounded-full mt-2 flex-shrink-0" />
                    <span>切勿向他人泄露短信验证码</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/70">
                    <span className="w-1.5 h-1.5 bg-bank-gold rounded-full mt-2 flex-shrink-0" />
                    <span>请勿在公共网络环境下操作转账</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/70">
                    <span className="w-1.5 h-1.5 bg-bank-gold rounded-full mt-2 flex-shrink-0" />
                    <span>定期检查登录记录，确保账户安全</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.55s' }}>
                <h3 className="text-white font-semibold mb-3">快捷服务</h3>
                <div className="grid grid-cols-2 gap-2">
                  <a href="#" className="flex flex-col items-center gap-1.5 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-center min-h-[60px]">
                    <span className="text-bank-gold text-xl font-display">开户</span>
                    <span className="text-white/50 text-xs">在线开户</span>
                  </a>
                  <a href="#" className="flex flex-col items-center gap-1.5 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-center min-h-[60px]">
                    <span className="text-bank-gold text-xl font-display">挂失</span>
                    <span className="text-white/50 text-xs">紧急挂失</span>
                  </a>
                  <a href="#" className="flex flex-col items-center gap-1.5 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-center min-h-[60px]">
                    <span className="text-bank-gold text-xl font-display">理财</span>
                    <span className="text-white/50 text-xs">理财产品</span>
                  </a>
                  <a href="#" className="flex flex-col items-center gap-1.5 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-center min-h-[60px]">
                    <span className="text-bank-gold text-xl font-display">贷款</span>
                    <span className="text-white/50 text-xs">在线申贷</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/10 mt-12 md:mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#" className="hover:text-white/70 transition-colors">关于我行</a>
              <span>|</span>
              <a href="#" className="hover:text-white/70 transition-colors">隐私政策</a>
              <span>|</span>
              <a href="#" className="hover:text-white/70 transition-colors">服务条款</a>
              <span>|</span>
              <a href="#" className="hover:text-white/70 transition-colors">联系我们</a>
            </div>
            <p>© 2026 华瑞银行股份有限公司 版权所有 | 京ICP备00000000号</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
