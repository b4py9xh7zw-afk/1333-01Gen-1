import { User, Building2, Briefcase } from 'lucide-react';

export type UserRole = 'personal' | 'enterprise' | 'sme';

interface RoleTabsProps {
  activeRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

const roles = [
  {
    id: 'personal' as const,
    label: '个人网银',
    icon: User,
    description: '账户查询、转账汇款、投资理财',
  },
  {
    id: 'enterprise' as const,
    label: '企业网银',
    icon: Building2,
    description: '对公账户、批量支付、票据业务',
  },
  {
    id: 'sme' as const,
    label: '小微企业',
    icon: Briefcase,
    description: '小微贷款、结算管理、财务服务',
  },
];

export default function RoleTabs({ activeRole, onRoleChange }: RoleTabsProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-0">
        {roles.map((role, index) => {
          const Icon = role.icon;
          const isActive = activeRole === role.id;
          return (
            <button
              key={role.id}
              onClick={() => onRoleChange(role.id)}
              className={`
                relative flex items-center gap-3 px-5 md:px-8 py-4 md:py-5 rounded-xl md:rounded-none
                transition-all duration-300 transform
                ${isActive
                  ? 'bg-white text-bank-navy shadow-card md:shadow-none scale-105 md:scale-100'
                  : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white'
                }
                opacity-0 animate-fade-in-up
                md:min-h-[56px] md:min-w-[44px]
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon className={`w-5 h-5 md:w-6 md:h-6 ${isActive ? 'text-bank-gold' : ''}`} />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-sm md:text-base">{role.label}</span>
                <span className={`text-xs ${isActive ? 'text-gray-500' : 'text-white/50'} hidden md:block`}>
                  {role.description}
                </span>
              </div>
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-bank-gold rounded-full hidden md:block" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
