import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Mic,
  Video,
  MessageSquare,
  BrainCircuit,
  PlayCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SeekerTraining() {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {t('nav_training')}
        </h1>
        <p className="text-muted-foreground mt-2">
          {t('training_desc')}
        </p>
      </div>

      <Card className="border-primary/50 shadow-md bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            {t('upcoming_interview_prep')}
          </CardTitle>
          <CardDescription>
            Frontend Engineer (AI Tools) - Technical Round
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-4">
            {t('upcoming_interview_prep_desc')}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm font-medium bg-white px-3 py-1.5 rounded-md border">
              <Mic className="w-4 h-4 text-blue-500" /> {t('voice_analysis')}
            </div>
            <div className="flex items-center gap-2 text-sm font-medium bg-white px-3 py-1.5 rounded-md border">
              <Video className="w-4 h-4 text-green-500" /> {t('expression_tracking')}
            </div>
            <div className="flex items-center gap-2 text-sm font-medium bg-white px-3 py-1.5 rounded-md border">
              <BrainCircuit className="w-4 h-4 text-purple-500" /> {t('real_time_feedback')}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button size="lg" className="w-full sm:w-auto">
            <PlayCircle className="w-5 h-5 mr-2" /> {t('start_mock_interview')}
          </Button>
        </CardFooter>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4">{t('training_modules')}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                <MessageSquare className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg">{t('behavioral_questions')}</CardTitle>
              <CardDescription>{t('practice_star_method')}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {t('behavioral_questions_desc')}
              </p>
              <Badge variant="secondary">15 Scenarios</Badge>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                {t('practice')}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-2">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg">{t('technical_deep_dive')}</CardTitle>
              <CardDescription>Frontend & React</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {t('technical_deep_dive_desc')}
              </p>
              <Badge variant="secondary">50+ Questions</Badge>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                {t('practice')}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mb-2">
                <Target className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg">{t('company_specific')}</CardTitle>
              <CardDescription>{t('tailored_to_target_companies')}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {t('company_specific_desc')}
              </p>
              <Badge variant="secondary">Custom</Badge>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                {t('configure')}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
