import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, MapPin, Clock, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CompanyJobs() {
  const { t } = useTranslation();

  const jobs = [
    {
      title: "Senior Frontend Developer",
      type: "Full-time",
      location: "Remote",
      salary: "$120k - $160k",
      applicants: 45,
      posted: "2 days ago",
      aiMatch: 12,
    },
    {
      title: "AI Data Analyst",
      type: "Full-time",
      location: "New York, NY",
      salary: "$100k - $140k",
      applicants: 12,
      posted: "5 days ago",
      aiMatch: 5,
    },
    {
      title: "Product Manager",
      type: "Full-time",
      location: "San Francisco, CA",
      salary: "$130k - $180k",
      applicants: 89,
      posted: "1 week ago",
      aiMatch: 24,
    },
    {
      title: "UX/UI Designer",
      type: "Contract",
      location: "Remote",
      salary: "$80/hr",
      applicants: 34,
      posted: "2 weeks ago",
      aiMatch: 8,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('nav_jobs')}</h1>
          <p className="text-muted-foreground mt-2">
            {t('job_management_desc')}
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" /> {t('post_new_job')}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('active_postings')}</CardTitle>
          <CardDescription>
            {t('active_postings_desc')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder={t('search_jobs')} className="pl-8" />
            </div>
            <Button variant="outline">{t('filter')}</Button>
          </div>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-center justify-between p-6 border rounded-xl gap-4 hover:border-primary/50 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <Badge variant="secondary">{job.type}</Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" /> {job.salary}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {job.posted}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{job.applicants}</div>
                    <div className="text-xs text-muted-foreground">
                      {t('applicants')}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {job.aiMatch}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t('high_matches')}
                    </div>
                  </div>
                  <Button variant="outline">{t('manage')}</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
