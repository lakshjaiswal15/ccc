import { Bell, User } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MobileNav } from "./MobileNav";

interface HeaderProps {
  activeView: string;
  setActiveView: (view: string) => void;
  notificationCount: number;
}

export function Header({ activeView, setActiveView, notificationCount }: HeaderProps) {
  return (
    <header className="glass-effect border-b border-card-border px-3 sm:px-4 py-3 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center space-x-3 sm:space-x-4">

<h1 
  className="font-bold text-xl sm:text-2xl tracking-widest text-cyan-400"
  style={{ textShadow: '0 0 8px rgba(56, 189, 248, 0.4)' }}
>
  Semita
</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          {[
            { id: 'dashboard', label: 'Dashboard' },
            { id: 'complaints', label: 'Complaints' },
            { id: 'insights', label: 'Insights' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`px-3 py-2 rounded-xl transition-all duration-300 transform ${
                activeView === item.id 
                  ? 'gradient-primary text-primary-foreground shadow-lg scale-105' 
                  : 'text-dark-title hover:text-dark-title hover:bg-white/10 hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setActiveView('notifications')}
            className="relative h-9 w-9 px-0 glass-effect hover:bg-white/20 transition-all duration-200 rounded-xl"
          >
            <Bell className="h-4 w-4" />
            {notificationCount > 0 && (
              <Badge 
                className="absolute -top-2 -right-2 h-5 w-5 text-xs p-0 flex items-center justify-center gradient-destructive animate-pulse rounded-lg"
              >
                {notificationCount}
              </Badge>
            )}
          </Button>
          <Button variant="outline" size="sm" className="h-9 w-9 px-0 glass-effect hover:bg-white/20 transition-all duration-200 rounded-xl">
            <User className="h-4 w-4" />
          </Button>
          <MobileNav 
            activeView={activeView}
            setActiveView={setActiveView}
            notificationCount={notificationCount}
          />
        </div>
      </div>
    </header>
  );
}