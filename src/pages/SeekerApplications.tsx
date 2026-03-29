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
  Building2,
  MapPin,
  Calendar,
  CheckCircle2,
  Clock,
  XCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SeekerApplications() {
  const { t } = useTranslation();

  const applications = [
    {
      company: "Innovate AI",
      role: "Frontend Engineer (AI Tools)",
      location: "New York, NY (Hybrid)",
      appliedDate: "Oct 24, 2023",
      status: "Interview Scheduled",
      statusColor: "text-blue-600",
      statusIcon: <Clock className="w-5 h-5 text-blue-600" />,
      nextStep: "Technical Interview on Nov 2nd",
    },
    {
      company: "TechCorp Inc.",
      role: "Senior React Developer",
      location: "Remote",
      appliedDate: "Oct 20, 2023",
      status: "Resume Reviewed",
      statusColor: "text-amber-600",
      statusIcon: <CheckCircle2 className="w-5 h-5 text-amber-600" />,
      nextStep: "Awaiting recruiter feedback",
    },
    {
      company: "DataSystems",
      role: "UI Developer",
      location: "San Francisco, CA",
      appliedDate: "Oct 15, 2023",
      status: "Applied",
      statusColor: "text-gray-600",
      statusIcon: <CheckCircle2 className="w-5 h-5 text-gray-600" />,
      nextStep: "Application under review",
    },
    {
      company: "Legacy Tech",
      role: "Web Developer",
      location: "Austin, TX",
      appliedDate: "Sep 30, 2023",
      status: "Rejected",
      statusColor: "text-red-600",
      statusIcon: <XCircle className="w-5 h-5 text-red-600" />,
      nextStep: "Position filled",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('nav_applications')}</h1>
        <p className="text-muted-foreground mt-2">
          {t('applications_desc')}
        </p>
      </div>

      <div className="space-y-4">
        {applications.map((app, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{app.role}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" /> {app.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {app.location}
                      </span>
                    </div>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {t('applied')} {app.appliedDate}
                  </Badge>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between border">
                  <div className="flex items-center gap-3">
                    {app.statusIcon}
                    <div>
                      <p className={`font-medium ${app.statusColor}`}>
                        {app.status}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {app.nextStep}
                      </p>
                    </div>
                  </div>
                  {app.status === "Interview Scheduled" && (
                    <Button size="sm">{t('prepare_with_ai')}</Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
