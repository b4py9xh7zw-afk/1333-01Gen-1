import { KeyRound, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface CertificateStatusProps {
  status: 'valid' | 'expired' | 'missing';
  onFix: () => void;
}

const statusConfig = {
  valid: {
    icon: CheckCircle,
    color: 'text-bank-success',
    bgColor: 'bg-bank-success/10',
    label: '证书状态正常',
    description: '您的数字证书已正确安装，可以安全登录',
    buttonText: '查看详情',
  },
  expired: {
    icon: AlertTriangle,
    color: 'text-bank-warning',
    bgColor: 'bg-bank-warning/10',
    label: '证书即将过期',
    description: '您的数字证书将在15天后过期，请及时更新',
    buttonText: '立即更新',
  },
  missing: {
    icon: XCircle,
    color: 'text-bank-danger',
    bgColor: 'bg-bank-danger/10',
    label: '未检测到证书',
    description: '未检测到有效的数字证书，请先安装证书',
    buttonText: '安装证书',
  },
};

export default function CertificateStatus({ status, onFix }: CertificateStatusProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
      <div className="flex items-start gap-4">
        <div className={`p-3 ${config.bgColor} rounded-xl`}>
          <KeyRound className={`w-5 h-5 ${config.color}`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-white font-semibold">{config.label}</h3>
            <Icon className={`w-4 h-4 ${config.color}`} />
          </div>
          <p className="text-white/60 text-sm mb-3">{config.description}</p>
          <button
            onClick={onFix}
            className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 min-h-[40px] ${
              status === 'valid'
                ? 'bg-white/10 text-white hover:bg-white/20'
                : 'bg-bank-gold text-bank-navy hover:bg-bank-goldLight'
            }`}
          >
            {config.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
