"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const ProjectList = dynamic(
  () => import('@/components/projects/project-list').then(mod => mod.ProjectList),
  {
    loading: () => <div className="h-[500px] animate-pulse bg-muted rounded-lg" />
  }
);

const ProjectStats = dynamic(
  () => import('@/components/projects/project-stats').then(mod => mod.ProjectStats),
  {
    loading: () => <div className="h-[200px] animate-pulse bg-muted rounded-lg" />
  }
);

const ProjectFilters = dynamic(
  () => import('@/components/projects/project-filters').then(mod => mod.ProjectFilters),
  {
    loading: () => <div className="h-[50px] w-[300px] animate-pulse bg-muted rounded-lg" />
  }
);

export default function ProjectsPage() {
  return (
    <div className="h-full flex-1 flex flex-col gap-8 p-8">
      <div className="container max-w-[1200px] mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
            <p className="text-muted-foreground">
              Manage and track your project portfolio
            </p>
          </div>
          <Suspense fallback={<div className="h-[50px] w-[300px] animate-pulse bg-muted rounded-lg" />}>
            <ProjectFilters />
          </Suspense>
        </div>

        <Suspense fallback={<div className="h-[200px] animate-pulse bg-muted rounded-lg" />}>
          <ProjectStats />
        </Suspense>

        <Suspense fallback={<div className="h-[500px] animate-pulse bg-muted rounded-lg" />}>
          <ProjectList />
        </Suspense>
      </div>
    </div>
  );
}