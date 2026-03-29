import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const [messages, setMessages] = useState<{role: 'ai' | 'user', content: string}[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: 'ai', content: t('ai_chat_welcome') }]);
    }
  }, [t, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: t('ai_chat_reply_placeholder') 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-105 z-50",
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        )}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Chat Window */}
      <Card 
        className={cn(
          "fixed bottom-6 right-6 w-80 sm:w-96 shadow-2xl transition-all duration-300 transform origin-bottom-right z-50 flex flex-col",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        )}
        style={{ height: '500px', maxHeight: 'calc(100vh - 48px)' }}
      >
        <CardHeader className="p-4 border-b flex flex-row items-center justify-between space-y-0 bg-primary text-primary-foreground rounded-t-xl">
          <CardTitle className="text-lg flex items-center gap-2">
            <Bot className="w-5 h-5" />
            {t('ai_assistant')}
          </CardTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>
        <CardContent className="p-4 flex-1 overflow-y-auto space-y-4 bg-slate-50/50">
          {messages.map((msg, i) => (
            <div 
              key={i} 
              className={cn(
                "flex gap-3 max-w-[85%]",
                msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                msg.role === 'user' ? "bg-primary text-primary-foreground" : "bg-blue-100 text-blue-600"
              )}>
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={cn(
                "p-3 rounded-lg text-sm",
                msg.role === 'user' 
                  ? "bg-primary text-primary-foreground rounded-tr-none" 
                  : "bg-white border shadow-sm rounded-tl-none"
              )}>
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </CardContent>
        <CardFooter className="p-3 border-t bg-white rounded-b-xl">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex w-full gap-2"
          >
            <Input 
              placeholder={t('ai_chat_placeholder')} 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={!input.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </>
  );
}
