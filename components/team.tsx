"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  avatar: string;
  bio: string;
  socialLinks: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export function Team() {
  const [visibleMembers, setVisibleMembers] = useState<number[]>([]);
  const teamRef = useRef<HTMLDivElement>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: '张三',
      position: 'CEO & 创始人',
      avatar: 'https://picsum.photos/id/1005/200/200',
      bio: '10年+互联网行业经验，专注于AI和前端技术，曾主导多个大型项目开发。',
      socialLinks: {
        github: 'https://github.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 2,
      name: '李四',
      position: 'CTO & 技术总监',
      avatar: 'https://picsum.photos/id/1006/200/200',
      bio: '全栈开发专家，精通Next.js、Node.js和云原生技术，负责技术架构设计。',
      socialLinks: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 3,
      name: '王五',
      position: 'UI/UX 设计总监',
      avatar: 'https://picsum.photos/id/1007/200/200',
      bio: '国际知名设计师，曾获得多项设计大奖，专注于用户体验和交互设计。',
      socialLinks: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 4,
      name: '赵六',
      position: '前端开发主管',
      avatar: 'https://picsum.photos/id/1008/200/200',
      bio: '前端技术专家，精通React、Next.js和TypeScript，负责前端团队管理和核心功能开发。',
      socialLinks: {
        github: 'https://github.com',
        twitter: 'https://twitter.com',
      },
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const memberId = parseInt(entry.target.id.split('-')[1]);
            setVisibleMembers((prev) => [...prev, memberId]);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const memberElements = teamRef.current?.querySelectorAll('.team-member-card');
    memberElements?.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            我们的团队
          </h2>
          <p className="text-lg text-gray-600">
            由一群充满激情和创造力的专业人士组成，致力于为客户提供优质的产品和服务
          </p>
        </div>

        <div
          ref={teamRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              id={`member-${member.id}`}
              className={`team-member-card transition-all duration-600 ease-out ${visibleMembers.includes(member.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card
                className="h-full transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg"
              >
                <CardHeader className="text-center pb-2">
                  <div className="relative inline-block mb-4">
                    <Avatar className="h-24 w-24 transition-all duration-500 hover:scale-110">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                  <p className="text-blue-600 font-medium text-sm">{member.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm text-center">
                    {member.bio}
                  </p>
                </CardContent>
                <CardFooter className="justify-center">
                  <div className="flex space-x-3">
                    {member.socialLinks.github && (
                      <a
                        href={member.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:scale-110"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a
                        href={member.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:scale-110"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:scale-110"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}