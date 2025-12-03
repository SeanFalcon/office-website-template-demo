import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', name: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', name: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', name: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', name: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">LemonCat Office</h3>
            <p className="text-gray-400 mb-6">
              开源、高性能、可复用且带优质动画效果的官网开发模板
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              {['首页', '关于我们', '特性', '案例', '团队'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item === '首页' ? '' : item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">资源</h4>
            <ul className="space-y-2">
              {['文档', '教程', 'API', '常见问题', '支持'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">订阅更新</h4>
            <p className="text-gray-400 mb-4">
              获取最新的模板更新和开发资讯
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="输入您的邮箱"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 transition-all duration-300"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 whitespace-nowrap">
                订阅
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} LemonCat Office. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
}