import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Briefcase,
  TrendingUp,
  ArrowRight,
  BrainCircuit,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CompanyHome() {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('nav_dashboard')}</h1>
        <p className="text-muted-foreground mt-2">
          {t('company_welcome')}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('active_jobs')}</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">{t('from_last_month')}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t('total_candidates')}
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">{t('this_week')}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('ai_match_rate')}</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">84%</div>
            <p className="text-xs text-muted-foreground">{t('improvement')}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>{t('recent_jobs')}</CardTitle>
            <CardDescription>{t('recent_jobs_desc')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                title: "Senior Frontend Developer",
                applicants: 45,
                status: "Active",
              },
              { title: "AI Data Analyst", applicants: 12, status: "Active" },
              { title: "Product Manager", applicants: 89, status: "Active" },
            ].map((job, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <h4 className="font-semibold">{job.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {job.applicants} {t('applicants')}
                  </p>
                </div>
                <Badge variant="outline">{job.status}</Badge>
              </div>
            ))}
            <Button asChild variant="outline" className="w-full">
              <Link to="/company/jobs">
                {t('view_all_jobs')} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-primary" />
              {t('ai_recommended')}
            </CardTitle>
            <CardDescription>{t('ai_recommended_desc')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                name: "Alex Chen",
                role: "Senior Frontend Developer",
                match: 98,
                skills: ["React", "TypeScript", "AI Integration"],
              },
              {
                name: "Sarah Johnson",
                role: "AI Data Analyst",
                match: 95,
                skills: ["Python", "Machine Learning", "SQL"],
              },
              {
                name: "Michael Wong",
                role: "Product Manager",
                match: 92,
                skills: ["Agile", "User Research", "Data Driven"],
              },
            ].map((candidate, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 p-4 border rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{candidate.name}</h4>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-200">
                    {candidate.match}% {t('match')}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('matched_for')} {candidate.role}
                </p>
                <div className="flex gap-2 mt-1">
                  {candidate.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
            <Button asChild variant="outline" className="w-full">
              <Link to="/company/candidates">
                {t('view_all_recommendations')} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
