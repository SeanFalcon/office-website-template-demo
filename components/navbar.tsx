import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Navbar() {
  const navItems = [
    { name: '首页', href: '/' },
    { name: '关于我们', href: '/about' },
    { name: '特性', href: '/features' },
    { name: '案例', href: '/cases' },
    { name: '团队', href: '/team' },
    { name: 'FAQ', href: '/faq' },
    { name: '联系我们', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 transition-all duration-300 hover:scale-105"
        >
          LemonCat Office
        </Link>

        {/* PC 端导航 */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:translate-y-[-2px]"
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            开始使用
          </Button>
        </nav>

        {/* 手机端导航 */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[350px] p-0">
            <div className="flex flex-col h-full bg-white">
              <SheetTitle className="sr-only">导航菜单</SheetTitle>

              {/* 导航菜单 */}
              <div className="px-6 py-4 border-b border-gray-100">
                <Link
                  href="/"
                  className="text-2xl font-bold text-gray-900"
                >
                  LemonCat Office
                </Link>
              </div>

              {/* 导航菜单项目 */}
              <nav className="flex flex-col flex-1 overflow-y-auto p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>

              {/* 导航菜单底部 */}
              <div className="px-6 py-4 border-t border-gray-100">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 py-6 text-lg">
                  开始使用
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}