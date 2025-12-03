"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Layout, Zap, Shield, Users, Globe } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function Features() {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const featuresRef = useRef<HTMLDivElement>(null);

  const features: Feature[] = [
    {
      id: 1,
      icon: <Code className="h-10 w-10 text-blue-600" />,
      title: '开源免费',
      description: '基于Next.js 14+和Shadcn UI开发，完全开源免费，支持二次开发和定制。',
    },
    {
      id: 2,
      icon: <Layout className="h-10 w-10 text-blue-600" />,
      title: '现代化设计',
      description: '采用最新的设计趋势，响应式布局，适配各种设备尺寸，提供优秀的用户体验。',
    },
    {
      id: 3,
      icon: <Zap className="h-10 w-10 text-blue-600" />,
      title: '高性能',
      description: '优化的代码结构，SSG+SSR混合渲染，确保页面加载速度快，性能优秀。',
    },
    {
      id: 4,
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: '安全可靠',
      description: '使用TypeScript确保类型安全，遵循最佳实践，定期更新依赖，保障项目安全。',
    },
    {
      id: 5,
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: '易于使用',
      description: '清晰的文档结构，模块化设计，开发者可以快速上手，轻松定制自己的官网。',
    },
    {
      id: 6,
      icon: <Globe className="h-10 w-10 text-blue-600" />,
      title: 'SEO友好',
      description: '支持SSG和SSR，优化的Meta标签，语义化HTML，助力网站在搜索引擎中获得更好的排名。',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const featureId = parseInt(entry.target.id.split('-')[1]);
            setVisibleFeatures((prev) => [...prev, featureId]);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const featureElements = featuresRef.current?.querySelectorAll('.feature-card');
    featureElements?.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            核心特性
          </h2>
          <p className="text-lg text-gray-600">
            我们的官网模板具有以下核心特性，助力企业快速构建现代化官网
          </p>
        </div>

        <div
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={feature.id}
              id={`feature-${feature.id}`}
              className={`feature-card transition-all duration-600 ease-out ${visibleFeatures.includes(feature.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card
                className="h-full transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg inline-block transition-all duration-300 hover:bg-blue-100 hover:scale-110">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}