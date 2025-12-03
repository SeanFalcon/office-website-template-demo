"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const faqRef = useRef<HTMLDivElement>(null);

  // Mock FAQ data
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: '这个模板支持哪些框架？',
      answer: '我们的模板支持Next.js 14+（App Router）和Nuxt.js 3+，您可以根据自己的需求选择合适的框架。',
    },
    {
      id: 2,
      question: '如何自定义主题颜色？',
      answer: '您可以通过修改tailwind.config.ts文件中的主题配置来自定义颜色，或者直接在组件中使用Tailwind的颜色类进行覆盖。',
    },
    {
      id: 3,
      question: '模板是否支持响应式设计？',
      answer: '是的，我们的模板采用响应式设计，适配移动端、平板和桌面设备，确保在各种屏幕尺寸下都有良好的显示效果。',
    },
    {
      id: 4,
      question: '如何添加新的页面？',
      answer: '在Next.js中，您可以在app目录下创建新的文件夹和page.tsx文件来添加新页面；在Nuxt.js中，您可以在pages目录下创建新的.vue文件。',
    },
    {
      id: 5,
      question: '模板是否支持TypeScript？',
      answer: '是的，我们的模板默认支持TypeScript，提供类型安全，提升代码可维护性。',
    },
    {
      id: 6,
      question: '如何部署模板？',
      answer: '您可以使用Vercel、Netlify、AWS等平台部署模板，这些平台都支持Next.js和Nuxt.js应用的自动部署。',
    },
  ];

  const filteredFaqItems = faqItems.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={faqRef}
      className="py-20 bg-gray-50"
      id="faq"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            常见问题
          </h2>
          <p className="text-lg text-gray-600">
            以下是关于我们模板的常见问题，如果您有其他问题，请随时联系我们
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="搜索常见问题..."
              className="pl-10 py-6 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFaqItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={`item-${item.id}`}
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <AccordionTrigger
                  className="px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-all duration-300"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  className="px-6 pb-4 text-gray-600"
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredFaqItems.length === 0 && (
            <div className="text-center py-12 text-gray-600">
              <p>没有找到匹配的常见问题，请尝试其他搜索词</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}