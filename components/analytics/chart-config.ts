export const chartConfig = {
  defaultMargin: { top: 10, right: 30, left: 0, bottom: 0 },
  defaultHeight: 300,
  axis: {
    style: {
      fontSize: 12,
      stroke: "hsl(var(--muted-foreground))",
    },
    props: {
      tickLine: false,
      axisLine: false,
    },
  },
  tooltip: {
    style: "rounded-lg border bg-background p-2 shadow-sm",
    labelStyle: "text-[0.70rem] uppercase text-muted-foreground",
    valueStyle: "font-bold",
  },
} as const;