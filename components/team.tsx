"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useEffect, useRef, useState } from 'react';

// Gitee 图标
function GiteeIcon() {
  return (
    <svg
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <circle cx="16" cy="16" fill="#c71d23" r="16" />
        <path
          d="m24.0987698 14.2225144h-9.0863697c-.4362899.000207-.7900048.3538292-.790326.7901191l-.0005173 1.9752185c-.0003277.4363707.353328.7902117.7896987.790326.0000712 0 .0001424 0 .0002135-.0002135l5.5317648-.0000461c.4363708-.0000102.7901221.3537352.7901257.790106 0 .0000022 0 .0000044-.0000066.0000066v.1975077.1975318c0 1.3091122-1.0612451 2.3703573-2.3703573 2.3703573h-7.5067195c-.4363081-.0000218-.790009-.353713-.7900429-.7900211l-.0002069-7.5059917c-.0001014-1.3091122 1.0611145-2.3703865 2.3702267-2.3704226.0000217 0 .0000435 0 .0000653.0000653h11.0602463c.4361793-.0004902.7898484-.35394.7906091-.79011894l.0012251-1.97521881c.0007606-.43637034-.3527683-.79033806-.7891389-.79060871-.0001634-.0000001-.0003268-.00000015-.0004901.00048976h-11.0617654c-3.27278051 0-5.92589329 2.65311278-5.92589329 5.9258933v11.0612755c0 .4363707.35374837.7901191.7901191.7901191h11.65447149c2.9454379 0 5.3331872-2.3877493 5.3331872-5.3331872v-4.5430682c0-.4363707-.3537484-.7901191-.7901191-.7901191z"
          fill="#fff"
        />
      </g>
    </svg>
  );
}

// GitHub 图标
function GithubIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z"
        fill="#000"
      />
    </svg>
  );
}

interface TeamMember {
  id: number;
  name: string;
  position: string;
  avatar: string;
  bio: string;
  socialLinks: {
    github?: string;
    gitee?: string;
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
        github: 'https://github.com/SeanFalcon/office-website-template-demo',
        gitee: 'https://gitee.com/lemoncatgit/office-website-template-demo',
      },
    },
    {
      id: 2,
      name: '李四',
      position: 'CTO & 技术总监',
      avatar: 'https://picsum.photos/id/1006/200/200',
      bio: '全栈开发专家，精通Next.js、Node.js和云原生技术，负责技术架构设计。',
      socialLinks: {
        github: 'https://github.com/SeanFalcon/office-website-template-demo',
        gitee: 'https://gitee.com/lemoncatgit/office-website-template-demo',
      },
    },
    {
      id: 3,
      name: '王五',
      position: 'UI/UX 设计总监',
      avatar: 'https://picsum.photos/id/1007/200/200',
      bio: '国际知名设计师，曾获得多项设计大奖，专注于用户体验和交互设计。',
      socialLinks: {
        github: 'https://github.com/SeanFalcon/office-website-template-demo',
        gitee: 'https://gitee.com/lemoncatgit/office-website-template-demo',
      },
    },
    {
      id: 4,
      name: '赵六',
      position: '前端开发主管',
      avatar: 'https://picsum.photos/id/1008/200/200',
      bio: '前端技术专家，精通React、Next.js和TypeScript，负责前端团队管理和核心功能开发。',
      socialLinks: {
        github: 'https://github.com/SeanFalcon/office-website-template-demo',
        gitee: 'https://gitee.com/lemoncatgit/office-website-template-demo',
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
                        <GithubIcon />
                      </a>
                    )}
                    {member.socialLinks.gitee && (
                      <a
                        href={member.socialLinks.gitee}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:scale-110"
                      >
                        <GiteeIcon />
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