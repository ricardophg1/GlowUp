"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$28,000</div>
          <p className="text-sm text-muted-foreground mt-2">+20.1% from last month</p>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm font-medium">Customer Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+124</div>
          <p className="text-sm text-muted-foreground mt-2">New customers this month</p>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">98%</div>
          <p className="text-sm text-muted-foreground mt-2">Based on recent surveys</p>
        </CardContent>
      </Card>
    </div>
  );
}