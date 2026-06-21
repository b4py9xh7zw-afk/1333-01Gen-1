import { Shield, Download, Monitor, Apple } from 'lucide-react';

interface SecurityPanelProps {
  onDownload: (os: 'windows' | 'mac') => void;
}

export default function SecurityPanel({ onDownload }: SecurityPanelProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
      <div className="flex items-center gap-3 mb-4">
        <Shield className="w-5 h-5 text-bank-gold" />
        <h3 className="text-white font-semibold">安全控件下载</h3>
      </div>
      <p className="text-white/60 text-sm mb-4">
        为保障您的账户安全，请下载并安装网银安全控件，有效防范密码窃取风险。
      </p>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => onDownload('windows')}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-all duration-200 border border-white/10 hover:border-bank-gold/50 min-h-[44px]"
        >
          <Monitor className="w-4 h-4" />
          <span>Windows</span>
          <Download className="w-4 h-4 ml-1" />
        </button>
        <button
          onClick={() => onDownload('mac')}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-all duration-200 border border-white/10 hover:border-bank-gold/50 min-h-[44px]"
        >
          <Apple className="w-4 h-4" />
          <span>macOS</span>
          <Download className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
}
