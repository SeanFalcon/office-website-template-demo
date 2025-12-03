"use client";

import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const title = 'AI 驱动的下一代官网开发模板';
  const subtitle = '开源、高性能、可复用且带优质动画效果，助力企业快速构建现代化官网';

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const parallaxElement = heroRef.current.querySelector('.parallax-bg') as HTMLElement | null;
      if (parallaxElement) {
        const translateY = Math.min(scrollY * 0.3, 100);
        parallaxElement.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
      style={{ backgroundColor: '#f8fafc' }}
    >
      <div
        className="parallax-bg absolute inset-0 z-0 opacity-20 transition-transform duration-300"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%239C92AC\" fill-opacity=\"0.4\" fill-rule=\"evenodd\"/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title.split('').map((char, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationDuration: '500ms',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in' : ''}`}
            style={{
              animationDelay: `${title.length * 50 + 200}ms`,
              animationDuration: '800ms',
            }}
          >
            {subtitle}
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isVisible ? 'animate-slide-up' : ''}`}
            style={{
              animationDelay: `${title.length * 50 + 600}ms`,
              animationDuration: '600ms',
            }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
            >
              开始使用模板
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
            >
              查看文档
            </Button>
          </div>

          <div
            className={`mt-16 grid grid-cols-3 gap-8 text-center ${isVisible ? 'animate-fade-in' : ''}`}
            style={{
              animationDelay: `${title.length * 50 + 1000}ms`,
              animationDuration: '800ms',
            }}
          >
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600 mt-2">开源免费</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600">60+</div>
              <div className="text-gray-600 mt-2">动画效果</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600">500ms</div>
              <div className="text-gray-600 mt-2">加载速度</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}