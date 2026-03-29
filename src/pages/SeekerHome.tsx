import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  FileText,
  Target,
  BookOpen,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Send,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function SeekerHome() {
  const { t } = useTranslation();

  const talentData = [
    { subject: t('skill_frontend'), score: 95, fullMark: 100 },
    { subject: t('skill_react'), score: 90, fullMark: 100 },
    { subject: t('skill_ui_ux'), score: 75, fullMark: 100 },
    { subject: t('skill_sys_design'), score: 70, fullMark: 100 },
    { subject: t('skill_ai'), score: 60, fullMark: 100 },
    { subject: t('skill_performance'), score: 85, fullMark: 100 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {t('seeker_welcome')}
          </h1>
          <p className="text-muted-foreground mt-2">
            {t('seeker_hub_desc')}
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <BrainCircuit className="w-4 h-4" /> {t('optimize_resume')}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>{t('ai_talent_profile')}</CardTitle>
            <CardDescription>
              {t('ai_talent_profile_desc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 w-full h-[250px] md:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={talentData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'currentColor', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name={t('ai_talent_profile')}
                      dataKey="score"
                      stroke="#2563eb"
                      fill="#3b82f6"
                      fillOpacity={0.5}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 bg-primary/5 p-4 rounded-lg border border-primary/10 w-full">
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4 text-primary" /> {t('ai_insights')}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('ai_insights_desc')}
                </p>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link to="/seeker/learning">{t('view_recommended_courses')}</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('application_status')}</CardTitle>
            <CardDescription>{t('recent_activity')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium">TechCorp Inc.</p>
                <p className="text-xs text-muted-foreground">{t('resume_reviewed')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium">Innovate AI</p>
                <p className="text-xs text-muted-foreground">
                  {t('interview_scheduled')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                <Send className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium">DataSystems</p>
                <p className="text-xs text-muted-foreground">
                  {t('applied_days_ago')}
                </p>
              </div>
            </div>
            <Button variant="ghost" className="w-full mt-2" asChild>
              <Link to="/seeker/applications">
                {t('view_all')} <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              {t('recommended_jobs')}
            </CardTitle>
            <CardDescription>{t('recommended_jobs_desc')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                title: "Senior React Developer",
                company: "TechCorp Inc.",
                match: 98,
                location: "Remote",
              },
              {
                title: "Frontend Engineer (AI Tools)",
                company: "Innovate AI",
                match: 92,
                location: "New York, NY",
              },
              {
                title: "UI Developer",
                company: "DesignStudio",
                match: 88,
                location: "Remote",
              },
            ].map((job, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border rounded-lg hover:border-primary/50 transition-colors cursor-pointer"
              >
                <div>
                  <h4 className="font-semibold">{job.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {job.company} • {job.location}
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-200">
                  {job.match}% {t('match')}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              {t('skill_enhancement')}
            </CardTitle>
            <CardDescription>
              {t('skill_enhancement_desc')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                title: "AI Data Analysis Practical Course",
                type: "Course",
                duration: "4 weeks",
                boost: "+15% match rate for AI roles",
              },
              {
                title: "Build an AI-powered Dashboard",
                type: "Project",
                duration: "1 week",
                boost: "+10% match rate for Frontend roles",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col p-4 border rounded-lg gap-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{item.title}</h4>
                  <Badge variant="outline">{item.type}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.duration}</p>
                <div className="flex items-center gap-2 mt-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-medium text-green-600">
                    {item.boost}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
