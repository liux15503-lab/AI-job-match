import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Megaphone, Send, Newspaper } from "lucide-react";

export default function CompanyNews() {
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const newsList = [
    {
      id: 1,
      title: "TechCorp Integrates Generative AI into Core Product",
      date: "2026-03-28",
      content: "We are thrilled to announce that our flagship product now features generative AI capabilities, allowing our users to 10x their productivity. We're looking for talented AI engineers to join us on this journey!",
    },
    {
      id: 2,
      title: "How We Use AI to Enhance Developer Experience",
      date: "2026-03-15",
      content: "At TechCorp, AI isn't just a buzzword. We've integrated AI coding assistants into our daily workflows. Read more about our engineering culture and how we empower our developers to focus on creative problem-solving.",
    },
    {
      id: 3,
      title: "TechCorp Named Top Place to Work for AI Talent",
      date: "2026-02-20",
      content: "We are honored to be recognized for our commitment to fostering a culture of innovation and continuous learning. Our AI research lab is expanding, and we are actively hiring for multiple roles.",
    }
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('nav_news')}</h1>
        <p className="text-muted-foreground mt-2">{t('news_desc')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {newsList.map((news) => (
            <Card key={news.id} className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Newspaper className="w-4 h-4" />
                  <span>{t('published_on')} {news.date}</span>
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

        <div className="space-y-6">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Megaphone className="w-5 h-5 text-primary" />
                {t('publish_news')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('news_title')}</label>
                <Input
                  placeholder={t('news_title')}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('news_content')}</label>
                <Textarea
                  placeholder={t('news_placeholder')}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[200px] resize-none"
                />
              </div>
              <Button className="w-full" disabled={!title.trim() || !content.trim()}>
                <Send className="w-4 h-4 mr-2" />
                {t('publish_news')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
