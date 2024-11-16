import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  "New customer onboarding: Tech Solutions Inc",
  "Project milestone achieved: Cloud Migration",
  "Customer feedback received: 5/5 stars",
  "Team training completed: Advanced Support",
];

export function ActivityTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, i) => (
            <div key={i} className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-2" />
              <p className="text-sm">{activity}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}