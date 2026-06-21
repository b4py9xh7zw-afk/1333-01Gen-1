import { useState } from 'react';
import { Eye, EyeOff, RefreshCw, Lock, Smartphone } from 'lucide-react';
import type { UserRole } from './RoleTabs';

interface LoginFormProps {
  role: UserRole;
  onSubmit: (data: { username: string; password: string; captcha: string }) => void;
}

const placeholders: Record<UserRole, { username: string; password: string }> = {
  personal: {
    username: '请输入用户名/手机号/银行卡号',
    password: '请输入登录密码',
  },
  enterprise: {
    username: '请输入企业操作员账号',
    password: '请输入登录密码',
  },
  sme: {
    username: '请输入法人账号/手机号',
    password: '请输入登录密码',
  },
};

export default function LoginForm({ role, onSubmit }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [captchaCode, setCaptchaCode] = useState('A7K2');

  const placeholder = placeholders[role];

  const refreshCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < 4; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ username, password, captcha });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          {role === 'enterprise' ? '操作员账号' : '账号'}
        </label>
        <div className="relative">
          {role === 'personal' || role === 'sme' ? (
            <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          ) : (
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          )}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={placeholder.username}
            className="input-field pl-12"
            autoComplete="username"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">登录密码</label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={placeholder.password}
            className="input-field pl-12 pr-12"
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-bank-gold transition-colors"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">验证码</label>
        <div className="flex gap-3">
          <input
            type="text"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value.toUpperCase())}
            placeholder="请输入验证码"
            className="input-field flex-1"
            maxLength={4}
          />
          <button
            type="button"
            onClick={refreshCaptcha}
            className="px-4 py-3 bg-gray-100 rounded-lg font-mono text-lg tracking-widest font-bold text-bank-navy hover:bg-gray-200 transition-colors min-w-[100px] flex items-center justify-center gap-2"
            title="点击刷新验证码"
          >
            <span className="select-none">{captchaCode}</span>
            <RefreshCw className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 text-bank-gold focus:ring-bank-gold"
          />
          <span className="text-gray-600">记住账号</span>
        </label>
        <a href="#" className="text-bank-gold hover:text-bank-goldDark transition-colors">
          忘记密码？
        </a>
      </div>

      <button type="submit" className="btn-primary text-base font-semibold mt-2">
        安全登录
      </button>

      <div className="text-center text-xs text-gray-500 pt-2">
        首次登录请先 <a href="#" className="text-bank-gold hover:underline">自助注册</a>
      </div>
    </form>
  );
}
