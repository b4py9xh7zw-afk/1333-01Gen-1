import { Phone, Clock, MessageCircle } from 'lucide-react';

export default function HelpLine() {
  return (
    <div className="bg-bank-navyLight/50 backdrop-blur-sm rounded-xl p-5 border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      <div className="flex items-start gap-4">
        <div className="p-3 bg-bank-gold/20 rounded-xl">
          <Phone className="w-6 h-6 text-bank-gold" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg mb-1">7×24小时服务热线</h3>
          <p className="text-bank-gold text-3xl font-display tracking-wider glow-text">
            95588
          </p>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1.5 text-white/60 text-sm">
              <Clock className="w-4 h-4" />
              <span>全天候服务</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/60 text-sm">
              <MessageCircle className="w-4 h-4" />
              <a href="#" className="hover:text-bank-gold transition-colors">在线客服</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
