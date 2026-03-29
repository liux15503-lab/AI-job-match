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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, Share2, TrendingUp, Send } from "lucide-react";

export default function SeekerCommunity() {
  const { t } = useTranslation();
  const [newPostContent, setNewPostContent] = useState("");

  const posts = [
    {
      id: 1,
      author: "Sarah Chen",
      avatar: "SC",
      role: "Frontend Developer",
      time: "2h ago",
      content: "Just finished my final round interview with a top tech company! The AI mock interview tool here really helped me prepare for the system design questions. Anyone else have experience with frontend system design rounds?",
      tags: [t('interview_experience'), "Frontend", "System Design"],
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      author: "Michael Rodriguez",
      avatar: "MR",
      role: "Data Scientist",
      time: "5h ago",
      content: "I've been struggling to get past the resume screening stage. Could someone take a look at my resume and give me some feedback? I'm transitioning from academia to industry.",
      tags: [t('resume_review'), "Data Science", "Career Transition"],
      likes: 15,
      comments: 12,
    },
    {
      id: 3,
      author: "Emily Taylor",
      avatar: "ET",
      role: "Product Manager",
      time: "1d ago",
      content: "What are the most important skills for a PM in 2026? I'm seeing a lot of demand for AI product management experience. How can I build this without a technical background?",
      tags: [t('career_advice'), "Product Management", "AI"],
      likes: 42,
      comments: 18,
    },
  ];

  const trendingTopics = [
    "#FrontendInterviews",
    "#ResumeTips",
    "#AIProductManagement",
    "#TechLayoffs2026",
    "#SalaryNegotiation",
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('nav_community')}</h1>
        <p className="text-muted-foreground mt-2">{t('community_desc')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* New Post Area */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-4">
                  <Textarea
                    placeholder={t('share_experience')}
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    className="min-h-[100px] resize-none"
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="text-xs">
                        {t('interview_experience')}
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        {t('resume_review')}
                      </Button>
                    </div>
                    <Button disabled={!newPostContent.trim()}>
                      <Send className="w-4 h-4 mr-2" />
                      {t('post')}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Posts Feed */}
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{post.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{post.author}</div>
                        <div className="text-xs text-muted-foreground">
                          {post.role} • {post.time}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <p className="text-sm leading-relaxed">{post.content}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-3 flex gap-4 text-muted-foreground">
                  <button className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors ml-auto">
                    <Share2 className="w-4 h-4" />
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="w-5 h-5 text-primary" />
                {t('trending_topics')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {trendingTopics.map((topic) => (
                  <Badge key={topic} variant="outline" className="cursor-pointer hover:bg-secondary">
                    {topic}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Community Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2 text-muted-foreground">
              <p>• Be respectful and supportive of others.</p>
              <p>• Share genuine experiences and constructive feedback.</p>
              <p>• Do not share confidential interview questions or company secrets.</p>
              <p>• Keep discussions relevant to career growth and job searching.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
