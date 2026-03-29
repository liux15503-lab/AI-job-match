import React from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Newspaper, Building2 } from "lucide-react";

export default function SeekerNews() {
  const { t } = useTranslation();

  const newsList = [
    {
      id: 1,
      company: "TechCorp Inc.",
      title: "TechCorp Integrates Generative AI into Core Product",
      date: "2026-03-28",
      content: "We are thrilled to announce that our flagship product now features generative AI capabilities, allowing our users to 10x their productivity. We're looking for talented AI engineers to join us on this journey!",
    },
    {
      id: 2,
      company: "Innovate AI",
      title: "How We Use AI to Enhance Developer Experience",
      date: "2026-03-15",
      content: "At Innovate AI, AI isn't just a buzzword. We've integrated AI coding assistants into our daily workflows. Read more about our engineering culture and how we empower our developers to focus on creative problem-solving.",
    },
    {
      id: 3,
      company: "Global Systems",
      title: "Global Systems Named Top Place to Work for AI Talent",
      date: "2026-02-20",
      content: "We are honored to be recognized for our commitment to fostering a culture of innovation and continuous learning. Our AI research lab is expanding, and we are actively hiring for multiple roles.",
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('nav_news')}</h1>
        <p className="text-muted-foreground mt-2">{t('seeker_news_desc')}</p>
      </div>

      <div className="space-y-6">
        {newsList.map((news) => (
          <Card key={news.id} className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Building2 className="w-4 h-4" />
                  <span>{news.company}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Newspaper className="w-4 h-4" />
                  <span>{news.date}</span>
                </div>
              </div>
              <CardTitle className="text-xl">{news.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{news.content}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">{t('read_more')}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
