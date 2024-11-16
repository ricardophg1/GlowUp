"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Lazy load components with loading states
const CustomerMetrics = dynamic(
  () => import('@/components/analytics/customer-metrics').then(mod => mod.CustomerMetrics),
  {
    loading: () => <div className="h-[200px] animate-pulse bg-muted rounded-lg" />
  }
);

const RevenueChart = dynamic(
  () => import('@/components/analytics/revenue-chart').then(mod => mod.RevenueChart),
  {
    ssr: false,
    loading: () => <div className="h-[300px] animate-pulse bg-muted rounded-lg" />
  }
);

const EngagementChart = dynamic(
  () => import('@/components/analytics/engagement-chart').then(mod => mod.EngagementChart),
  {
    ssr: false,
    loading: () => <div className="h-[300px] animate-pulse bg-muted rounded-lg" />
  }
);

export default function AnalyticsPage() {
  return (
    <div className="h-full flex-1 flex flex-col gap-8 p-8">
      <div className="container max-w-[1200px] mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground">
              Track your business performance metrics
            </p>
          </div>
        </div>

        <Suspense fallback={<div className="h-[200px] animate-pulse bg-muted rounded-lg" />}>
          <CustomerMetrics />
        </Suspense>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Suspense fallback={<div className="h-[300px] animate-pulse bg-muted rounded-lg" />}>
            <RevenueChart />
          </Suspense>
          <Suspense fallback={<div className="h-[300px] animate-pulse bg-muted rounded-lg" />}>
            <EngagementChart />
          </Suspense>
        </div>
      </div>
    </div>
  );
}