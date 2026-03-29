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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, BrainCircuit, Download, Mail, Star } from "lucide-react";
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

export default function CompanyCandidates() {
  const { t } = useTranslation();

  const candidates = [
    {
      name: "Alex Chen",
      role: "Senior Frontend Developer",
      match: 98,
      skills: ["React", "TypeScript", "AI Integration", "Next.js"],
      experience: "5 years",
      education: "MS Computer Science",
      aiAnalysis:
        "Exceptional match for the Senior Frontend role. Strong background in React and recent projects show high proficiency in AI integration, which aligns perfectly with your requirements.",
      talentData: [
        { subject: t('skill_frontend'), score: 95, fullMark: 100 },
        { subject: t('skill_react'), score: 90, fullMark: 100 },
        { subject: t('skill_ui_ux'), score: 75, fullMark: 100 },
        { subject: t('skill_sys_design'), score: 70, fullMark: 100 },
        { subject: t('skill_ai'), score: 60, fullMark: 100 },
        { subject: t('skill_performance'), score: 85, fullMark: 100 },
      ],
    },
    {
      name: "Sarah Johnson",
      role: "AI Data Analyst",
      match: 95,
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      experience: "3 years",
      education: "BS Data Science",
      aiAnalysis:
        "Strong analytical skills with practical experience in machine learning models. Highly recommended for the data team.",
      talentData: [
        { subject: "Python", score: 95, fullMark: 100 },
        { subject: "Machine Learning", score: 90, fullMark: 100 },
        { subject: "SQL", score: 85, fullMark: 100 },
        { subject: "Data Viz", score: 80, fullMark: 100 },
        { subject: "Stats", score: 90, fullMark: 100 },
        { subject: "Deep Learning", score: 75, fullMark: 100 },
      ],
    },
    {
      name: "Michael Wong",
      role: "Product Manager",
      match: 92,
      skills: ["Agile", "User Research", "Data Driven", "Jira"],
      experience: "7 years",
      education: "MBA",
      aiAnalysis:
        "Solid track record of shipping products. Shows great potential for cross-functional leadership.",
      talentData: [
        { subject: "Agile", score: 90, fullMark: 100 },
        { subject: "User Research", score: 85, fullMark: 100 },
        { subject: "Data Analysis", score: 80, fullMark: 100 },
        { subject: "Strategy", score: 95, fullMark: 100 },
        { subject: "Communication", score: 90, fullMark: 100 },
        { subject: "Technical", score: 70, fullMark: 100 },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {t('candidate_recommendations')}
        </h1>
        <p className="text-muted-foreground mt-2">
          {t('candidate_recommendations_desc')}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('top_matches')}</CardTitle>
          <CardDescription>
            {t('top_matches_desc')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t('search_candidates')}
                className="pl-8"
              />
            </div>
            <Button variant="outline">{t('filter_by_job')}</Button>
          </div>

          <div className="space-y-6">
            {candidates.map((candidate, i) => (
              <div
                key={i}
                className="flex flex-col p-6 border rounded-xl gap-4 hover:border-primary/50 transition-colors bg-white"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={`https://i.pravatar.cc/150?u=${candidate.name}`}
                      />
                      <AvatarFallback>
                        {candidate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        {candidate.name}
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-200 ml-2">
                          {candidate.match}% {t('match')}
                        </Badge>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t('matched_for')}
                        <span className="font-medium text-foreground">
                          {candidate.role}
                        </span>
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>{candidate.experience} exp.</span>
                        <span>•</span>
                        <span>{candidate.education}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" /> {t('resume')}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4 mr-2" /> {t('contact')}
                    </Button>
                    <Button size="sm">
                      <Star className="w-4 h-4 mr-2" /> {t('shortlist')}
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                      <div className="flex items-center gap-2 mb-2">
                        <BrainCircuit className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-sm text-primary">
                          {t('ai_analysis')}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {candidate.aiAnalysis}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">{t('key_skills')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {candidate.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-[300px] h-[250px] bg-white rounded-lg border flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="65%" data={candidate.talentData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: 'currentColor', fontSize: 10 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar
                          name="Skills"
                          dataKey="score"
                          stroke="#2563eb"
                          fill="#3b82f6"
                          fillOpacity={0.5}
                        />
                        <Tooltip />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
