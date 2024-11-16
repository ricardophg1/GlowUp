"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { month: "Jan", engagement: 75 },
  { month: "Feb", engagement: 80 },
  { month: "Mar", engagement: 85 },
  { month: "Apr", engagement: 82 },
  { month: "May", engagement: 90 },
  { month: "Jun", engagement: 88 },
  { month: "Jul", engagement: 92 },
];

interface XAxisProps {
  hide?: boolean;
  dataKey?: string;
  stroke?: string;
  fontSize?: number;
}

interface YAxisProps {
  hide?: boolean;
  stroke?: string;
  fontSize?: number;
  tickFormatter?: (value: number) => string;
}

const CustomXAxis = ({ hide = false, dataKey = "month", stroke = "#888888", fontSize = 12 }: XAxisProps) => (
  <XAxis 
    dataKey={dataKey}
    stroke={stroke}
    fontSize={fontSize}
    hide={hide}
    tickLine={false}
    axisLine={false}
  />
);

const CustomYAxis = ({ 
  hide = false, 
  stroke = "#888888", 
  fontSize = 12,
  tickFormatter = (value: number) => `${value}%`
}: YAxisProps) => (
  <YAxis
    stroke={stroke}
    fontSize={fontSize}
    hide={hide}
    tickLine={false}
    axisLine={false}
    tickFormatter={tickFormatter}
  />
);

export function EngagementChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Engagement</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
              <CustomXAxis />
              <CustomYAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="engagement"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}