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
import { BookOpen, PlayCircle, Trophy, Star, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SeekerLearning() {
  const { t } = useTranslation();

  const courses = [
    {
      title: "AI Data Analysis Practical Course",
      provider: "Coursera",
      duration: "4 weeks",
      level: "Intermediate",
      rating: 4.8,
      matchBoost: "+15% match rate for AI roles",
      image: "https://picsum.photos/seed/data/400/200",
    },
    {
      title: "Machine Learning for Frontend Developers",
      provider: "Udacity",
      duration: "6 weeks",
      level: "Advanced",
      rating: 4.9,
      matchBoost: "+20% match rate for AI Engineer roles",
      image: "https://picsum.photos/seed/ml/400/200",
    },
  ];

  const projects = [
    {
      title: "Build an AI-powered Dashboard",
      difficulty: "Medium",
      timeEstimate: "1 week",
      skills: ["React", "OpenAI API", "Tailwind CSS"],
      description:
        "Create a dashboard that analyzes user data and provides AI-generated insights in real-time.",
    },
    {
      title: "Optimize Video Content with AI",
      difficulty: "Hard",
      timeEstimate: "2 weeks",
      skills: ["Python", "Computer Vision", "FFmpeg"],
      description:
        "Develop a script that automatically highlights the best moments in a promotional video using AI.",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('nav_learning')}</h1>
        <p className="text-muted-foreground mt-2">
          {t('learning_desc')}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-primary" /> {t('recommended_courses')}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course, i) => (
            <Card key={i} className="overflow-hidden flex flex-col">
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{course.provider}</Badge>
                  <div className="flex items-center text-sm font-medium text-amber-500">
                    <Star className="w-4 h-4 mr-1 fill-current" />{" "}
                    {course.rating}
                  </div>
                </div>
                <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 mt-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {course.duration}
                  </span>
                  <span>•</span>
                  <span>{course.level}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="bg-green-50 text-green-700 text-sm p-2 rounded-md font-medium flex items-center gap-2">
                  <Trophy className="w-4 h-4" /> {course.matchBoost}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <PlayCircle className="w-4 h-4 mr-2" /> {t('start_learning')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="pt-8 border-t">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Trophy className="w-6 h-6 text-primary" /> {t('practical_projects')}
        </h2>
        <p className="text-muted-foreground mb-6">
          {t('practical_projects_desc')}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    variant={
                      project.difficulty === "Hard" ? "destructive" : "default"
                    }
                  >
                    {project.difficulty}
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {project.timeEstimate}
                  </span>
                </div>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    {t('skills_gained')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  {t('view_project_details')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
