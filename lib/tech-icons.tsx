"use client";

import React from "react";
import {
  SiPython,
  SiFastapi,
  SiNodedotjs,
  SiNestjs,
  SiTypescript,
  SiJavascript,
  SiDjango,
  SiPydantic,
  SiKubernetes,
  SiDocker,
  SiGooglecloud,
  SiGithubactions,
  SiLinux,
  SiGitlab,
  SiOpentelemetry,
  SiPostgresql,
  SiRedis,
  SiPandas,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiGit,
  SiPostman,
  SiPosthog,
  SiThreedotjs,
  SiVite,
  SiExpress,
  SiPrometheus,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import { TbVectorTriangle, TbScan, TbDatabaseCog, TbSql } from "react-icons/tb";
import { Layers } from "lucide-react";

export interface TechMeta {
  name: string;
  svg?: string;
  color: string;
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

const TECH_DATABASE: Record<string, TechMeta> = {
  // Languages & Core
  python: { name: "Python", svg: "/tech-icons/python.svg", color: "#3776AB", icon: SiPython },
  typescript: { name: "TypeScript", svg: "/tech-icons/typescript.svg", color: "#3178C6", icon: SiTypescript },
  javascript: { name: "JavaScript", svg: "/tech-icons/javascript.svg", color: "#F7DF1E", icon: SiJavascript },
  java: { name: "Java", svg: "/tech-icons/java.svg", color: "#ED8B00", icon: FaJava },
  html: { name: "HTML5", svg: "/tech-icons/html5.svg", color: "#E34F26", icon: SiHtml5 },
  sql: { name: "SQL", color: "#00BCF2", icon: TbSql },

  // Frameworks & Backend
  fastapi: { name: "FastAPI", svg: "/tech-icons/fastapi.svg", color: "#009688", icon: SiFastapi },
  "next.js": { name: "Next.js", svg: "/tech-icons/nextjs.svg", color: "#FFFFFF", icon: SiNextdotjs },
  react: { name: "React", svg: "/tech-icons/react.svg", color: "#61DAFB", icon: SiReact },
  nestjs: { name: "NestJS", svg: "/tech-icons/nestjs.svg", color: "#E0234E", icon: SiNestjs },
  "node.js": { name: "Node.js", svg: "/tech-icons/nodejs.svg", color: "#5FA04E", icon: SiNodedotjs },
  express: { name: "Express", svg: "/tech-icons/express.svg", color: "#FFFFFF", icon: SiExpress },
  django: { name: "Django", svg: "/tech-icons/django.svg", color: "#44B78B", icon: SiDjango },
  pydantic: { name: "Pydantic", color: "#E92063", icon: SiPydantic },
  vite: { name: "Vite", svg: "/tech-icons/vite.svg", color: "#646CFF", icon: SiVite },
  tailwindcss: { name: "Tailwind CSS", svg: "/tech-icons/tailwindcss.svg", color: "#06B6D4", icon: SiTailwindcss },
  "three.js": { name: "Three.js", svg: "/tech-icons/threejs.svg", color: "#FFFFFF", icon: SiThreedotjs },
  webgl: { name: "WebGL", color: "#990000", icon: Layers },

  // Cloud & DevOps
  kubernetes: { name: "Kubernetes", svg: "/tech-icons/kubernetes.svg", color: "#326CE5", icon: SiKubernetes },
  k3s: { name: "k3s ARM64", svg: "/tech-icons/kubernetes.svg", color: "#326CE5", icon: SiKubernetes },
  docker: { name: "Docker", svg: "/tech-icons/docker.svg", color: "#2496ED", icon: SiDocker },
  gcp: { name: "Google Cloud", svg: "/tech-icons/googlecloud.svg", color: "#4285F4", icon: SiGooglecloud },
  "google cloud": { name: "Google Cloud", svg: "/tech-icons/googlecloud.svg", color: "#4285F4", icon: SiGooglecloud },
  "cloud run": { name: "Cloud Run", svg: "/tech-icons/googlecloud.svg", color: "#4285F4", icon: SiGooglecloud },
  aws: { name: "AWS", svg: "/tech-icons/amazonwebservices.svg", color: "#FF9900", icon: FaAws },
  "aws s3": { name: "AWS S3", svg: "/tech-icons/amazonwebservices.svg", color: "#FF9900", icon: FaAws },
  argocd: { name: "ArgoCD", svg: "/tech-icons/argocd.svg", color: "#EF7B4D" },
  gitops: { name: "GitOps", svg: "/tech-icons/argocd.svg", color: "#EF7B4D" },
  "github actions": { name: "GitHub Actions", svg: "/tech-icons/githubactions.svg", color: "#2088FF", icon: SiGithubactions },
  gitlab: { name: "GitLab CI", svg: "/tech-icons/gitlab.svg", color: "#FC6D26", icon: SiGitlab },
  linux: { name: "Linux", svg: "/tech-icons/linux.svg", color: "#FCC624", icon: SiLinux },
  git: { name: "Git", svg: "/tech-icons/git.svg", color: "#F05032", icon: SiGit },

  // Data & AI
  postgresql: { name: "PostgreSQL", svg: "/tech-icons/postgresql.svg", color: "#336791", icon: SiPostgresql },
  pgvector: { name: "pgvector", color: "#A855F7", icon: TbVectorTriangle },
  redis: { name: "Redis", svg: "/tech-icons/redis.svg", color: "#DC382D", icon: SiRedis },
  openai: { name: "OpenAI", color: "#10A37F", icon: RiOpenaiFill },
  clip: { name: "CLIP ViT-B/32", color: "#38BDF8", icon: TbScan },
  pandas: { name: "Pandas", svg: "/tech-icons/pandas.svg", color: "#E70488", icon: SiPandas },
  alembic: { name: "Alembic", color: "#F59E0B", icon: TbDatabaseCog },
  opentelemetry: { name: "OpenTelemetry", svg: "/tech-icons/opentelemetry.svg", color: "#F5A800", icon: SiOpentelemetry },
  prometheus: { name: "Prometheus", svg: "/tech-icons/prometheus.svg", color: "#E75225", icon: SiPrometheus },
  posthog: { name: "PostHog", color: "#F54E00", icon: SiPosthog },
  postman: { name: "Postman", svg: "/tech-icons/postman.svg", color: "#FF6C37", icon: SiPostman },
};

export function getTechMeta(rawName: string): TechMeta {
  const normalized = rawName.toLowerCase().trim();

  // Check direct or partial keys
  for (const [key, meta] of Object.entries(TECH_DATABASE)) {
    if (normalized.includes(key)) {
      return { ...meta, name: rawName };
    }
  }

  // Fallback
  return {
    name: rawName,
    color: "#8750f7",
    icon: Layers,
  };
}

export function TechIcon({
  name,
  className = "w-4 h-4",
}: {
  name: string;
  className?: string;
}) {
  const meta = getTechMeta(name);

  if (meta.svg) {
    return (
      <img
        src={meta.svg}
        alt={meta.name}
        className={`${className} object-contain filter drop-shadow-sm shrink-0`}
        loading="lazy"
      />
    );
  }

  const Icon = meta.icon || Layers;
  return (
    <Icon
      className={`${className} shrink-0`}
      style={{ color: meta.color }}
    />
  );
}

export function TechPill({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const meta = getTechMeta(name);

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-dashed border-white/15 bg-white/[0.03] text-xs text-neutral-200 hover:border-[#8750f7]/40 hover:bg-white/[0.06] transition-all ${className}`}
    >
      <TechIcon name={name} className="w-3.5 h-3.5" />
      <span className="font-mono text-[11px] sm:text-xs text-neutral-200">{name}</span>
    </span>
  );
}
