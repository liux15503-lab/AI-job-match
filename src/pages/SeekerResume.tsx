import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BrainCircuit,
  Upload,
  FileText,
  Check,
  AlertTriangle,
} from "lucide-react";
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

export default function SeekerResume() {
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
            {t('resume_and_ai_profile')}
          </h1>
          <p className="text-muted-foreground mt-2">
            {t('resume_and_ai_profile_desc')}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" /> {t('upload_pdf')}
          </Button>
          <Button>
            <BrainCircuit className="w-4 h-4 mr-2" /> {t('ai_optimize')}
          </Button>
        </div>
      </div>

      <Tabs defaultValue="editor" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="editor">{t('resume_editor')}</TabsTrigger>
          <TabsTrigger value="analysis">{t('ai_analysis')}</TabsTrigger>
        </TabsList>
        <TabsContent value="editor" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('professional_summary')}</CardTitle>
              <CardDescription>
                {t('professional_summary_desc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                className="min-h-[150px]"
                defaultValue="Experienced Frontend Developer with 5+ years of expertise in building scalable web applications using React, TypeScript, and modern CSS frameworks. Passionate about creating intuitive user interfaces and integrating AI-driven features to enhance user experience."
              />
              <div className="mt-4 flex justify-end">
                <Button variant="secondary" size="sm">
                  <BrainCircuit className="w-4 h-4 mr-2" /> {t('suggest_improvements')}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>{t('experience')}</CardTitle>
              <CardDescription>{t('experience_desc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4 border p-4 rounded-lg relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"
                >
                  &times;
                </Button>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>{t('job_title')}</Label>
                    <Input defaultValue="Senior Frontend Developer" />
                  </div>
                  <div className="space-y-2">
                    <Label>{t('company')}</Label>
                    <Input defaultValue="Tech Solutions Inc." />
                  </div>
                  <div className="space-y-2">
                    <Label>{t('start_date')}</Label>
                    <Input type="month" defaultValue="2021-03" />
                  </div>
                  <div className="space-y-2">
                    <Label>{t('end_date')}</Label>
                    <Input type="month" defaultValue="2024-01" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>{t('description')}</Label>
                  <Textarea
                    className="min-h-[100px]"
                    defaultValue="- Led a team of 4 developers to rebuild the core customer portal using React and Next.js.
- Improved application performance by 40% through code splitting and lazy loading.
- Integrated OpenAI API to provide smart search capabilities within the platform."
                  />
                </div>
              </div>
              <Button variant="outline" className="w-full">
                {t('add_experience')}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="mt-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('ai_talent_profile')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[300px] flex items-center justify-center">
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
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  {t('strengths')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-green-50 border border-green-100 rounded-md text-sm text-green-800">
                  <strong className="block mb-1">
                    Strong React Ecosystem Knowledge
                  </strong>
                  Your experience clearly demonstrates deep expertise in React,
                  Next.js, and performance optimization.
                </div>
                <div className="p-3 bg-green-50 border border-green-100 rounded-md text-sm text-green-800">
                  <strong className="block mb-1">Leadership Experience</strong>
                  Mentioning "Led a team of 4 developers" is a strong signal for
                  senior roles.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  {t('areas_for_improvement')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-amber-50 border border-amber-100 rounded-md text-sm text-amber-800">
                  <strong className="block mb-1">Quantify Results More</strong>
                  While you mentioned a 40% performance improvement, try to
                  quantify the impact of the AI integration (e.g., "increased
                  search engagement by 25%").
                </div>
                <div className="p-3 bg-amber-50 border border-amber-100 rounded-md text-sm text-amber-800">
                  <strong className="block mb-1">
                    Missing Cloud Experience
                  </strong>
                  Many senior roles require basic cloud knowledge (AWS/GCP).
                  Consider adding relevant skills if you have them.
                </div>
                <Button className="w-full mt-2">
                  <BrainCircuit className="w-4 h-4 mr-2" /> {t('apply_ai_suggestions')}
                </Button>
              </CardContent>
            </Card>
          </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
