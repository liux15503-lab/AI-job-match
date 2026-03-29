import * as React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Briefcase,
  User,
  Home,
  FileText,
  BookOpen,
  Send,
  Target,
  Globe,
  Users,
  Newspaper,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import AIChatBot from "./AIChatBot";

export default function Layout() {
  const location = useLocation();
  const isCompany = location.pathname.startsWith("/company");
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 shrink-0">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight whitespace-nowrap">
              {t('app_name')}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-4 lg:gap-8 overflow-x-auto">
            {isCompany ? (
              <>
                <NavLink to="/company" icon={<Home className="w-4 h-4" />}>
                  {t('nav_dashboard')}
                </NavLink>
                <NavLink
                  to="/company/jobs"
                  icon={<Briefcase className="w-4 h-4" />}
                >
                  {t('nav_jobs')}
                </NavLink>
                <NavLink
                  to="/company/candidates"
                  icon={<User className="w-4 h-4" />}
                >
                  {t('nav_candidates')}
                </NavLink>
                <NavLink
                  to="/company/news"
                  icon={<Newspaper className="w-4 h-4" />}
                >
                  {t('nav_news')}
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/seeker" icon={<Home className="w-4 h-4" />}>
                  {t('nav_dashboard')}
                </NavLink>
                <NavLink
                  to="/seeker/resume"
                  icon={<FileText className="w-4 h-4" />}
                >
                  {t('nav_resume')}
                </NavLink>
                <NavLink
                  to="/seeker/applications"
                  icon={<Send className="w-4 h-4" />}
                >
                  {t('nav_applications')}
                </NavLink>
                <NavLink
                  to="/seeker/learning"
                  icon={<BookOpen className="w-4 h-4" />}
                >
                  {t('nav_learning')}
                </NavLink>
                <NavLink
                  to="/seeker/training"
                  icon={<Target className="w-4 h-4" />}
                >
                  {t('nav_training')}
                </NavLink>
                <NavLink
                  to="/seeker/community"
                  icon={<Users className="w-4 h-4" />}
                >
                  {t('nav_community')}
                </NavLink>
                <NavLink
                  to="/seeker/news"
                  icon={<Newspaper className="w-4 h-4" />}
                >
                  {t('nav_news')}
                </NavLink>
              </>
            )}
          </nav>

          <div className="flex items-center gap-4 shrink-0 ml-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              <Globe className="w-4 h-4" />
              {i18n.language === 'en' ? '中文' : 'EN'}
            </button>
            <div className="text-sm text-muted-foreground flex items-center gap-2 border rounded-full px-3 py-1 whitespace-nowrap">
              <span>{t('view_as')}</span>
              <Link
                to="/company"
                className={cn(
                  "hover:text-primary transition-colors",
                  isCompany && "text-primary font-medium",
                )}
              >
                {t('role_company')}
              </Link>
              <span>|</span>
              <Link
                to="/seeker"
                className={cn(
                  "hover:text-primary transition-colors",
                  !isCompany && "text-primary font-medium",
                )}
              >
                {t('role_seeker')}
              </Link>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
              {isCompany ? "C" : "S"}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <AIChatBot />
    </div>
  );
}

function NavLink({
  to,
  children,
  icon,
}: {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  const location = useLocation();
  const isActive =
    location.pathname === to ||
    (to !== "/company" && to !== "/seeker" && location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
        isActive ? "text-primary" : "text-muted-foreground",
      )}
    >
      {icon}
      {children}
    </Link>
  );
}
