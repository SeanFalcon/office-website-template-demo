import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-24 pb-16">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1
            className="text-9xl font-bold text-gray-900 mb-4 animate-fade-in"
            style={{ animationDuration: '600ms' }}
          >
            404
          </h1>
          <h2
            className="text-3xl font-semibold text-gray-800 mb-6 animate-fade-in"
            style={{ animationDuration: '800ms', animationDelay: '200ms' }}
          >
            页面未找到
          </h2>
          <p
            className="text-gray-600 mb-8 animate-fade-in"
            style={{ animationDuration: '800ms', animationDelay: '400ms' }}
          >
            抱歉，您访问的页面不存在或已被移除。请检查您的URL是否正确，或返回首页继续浏览。
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDuration: '800ms', animationDelay: '600ms' }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
              <Link href="/">返回首页</Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact">联系我们</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}