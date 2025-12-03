"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

export function Cases() {
  const [isVisible, setIsVisible] = useState(false);
  const casesRef = useRef<HTMLDivElement>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'AI 驱动的电商平台',
      description: '基于Next.js和AI技术构建的现代化电商平台，提供个性化推荐和智能搜索功能。',
      category: '电商',
      image: 'https://picsum.photos/id/1025/800/600',
    },
    {
      id: 2,
      title: '企业级CRM系统',
      description: '为企业量身定制的CRM系统，提升客户管理效率，优化销售流程。',
      category: '企业应用',
      image: 'https://picsum.photos/id/1040/800/600',
    },
    {
      id: 3,
      title: '金融科技平台',
      description: '安全可靠的金融科技平台，提供在线支付、理财和投资服务。',
      category: '金融科技',
      image: 'https://picsum.photos/id/1060/800/600',
    },
    {
      id: 4,
      title: '教育科技平台',
      description: '创新的教育科技平台，提供在线课程、学习管理和智能评估功能。',
      category: '教育科技',
      image: 'https://picsum.photos/id/1070/800/600',
    },
    {
      id: 5,
      title: '医疗健康平台',
      description: '现代化的医疗健康平台，提供在线问诊、健康管理和医疗资讯服务。',
      category: '医疗健康',
      image: 'https://picsum.photos/id/1080/800/600',
    },
    {
      id: 6,
      title: '智能物流系统',
      description: '基于AI和大数据的智能物流系统，优化物流配送流程，提升效率。',
      category: '物流',
      image: 'https://picsum.photos/id/1090/800/600',
    },
  ];

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

    if (casesRef.current) {
      observer.observe(casesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={casesRef}
      className="py-20 bg-gray-50"
      id="cases"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            成功案例
          </h2>
          <p className="text-lg text-gray-600">
            我们使用这套模板为众多企业构建了现代化官网，以下是部分成功案例
          </p>
        </div>

        <div className={`transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {caseStudies.map((caseStudy, index) => (
                <CarouselItem key={caseStudy.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card
                      className="h-full transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg"
                    >
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          className="w-full h-48 object-cover transition-all duration-500 hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {caseStudy.category}
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold">{caseStudy.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">
                          {caseStudy.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="ghost"
                          className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-300 group"
                        >
                          查看详情
                          <ExternalLink
                            className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1"
                          />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            查看全部案例
          </Button>
        </div>
      </div>
    </section>
  );
}