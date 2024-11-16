"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const projects = [
  {
    id: 1,
    name: "Cloud Migration",
    client: "Tech Solutions Inc",
    status: "In Progress",
    progress: 65,
    dueDate: "2024-04-15",
    team: [
      { name: "Alice Smith", image: "https://i.pravatar.cc/150?u=alice" },
      { name: "Bob Johnson", image: "https://i.pravatar.cc/150?u=bob" },
      { name: "Carol White", image: "https://i.pravatar.cc/150?u=carol" },
    ],
  },
  {
    id: 2,
    name: "Security Audit",
    client: "Global Innovations",
    status: "Planning",
    progress: 25,
    dueDate: "2024-05-01",
    team: [
      { name: "David Lee", image: "https://i.pravatar.cc/150?u=david" },
      { name: "Emma Davis", image: "https://i.pravatar.cc/150?u=emma" },
    ],
  },
  {
    id: 3,
    name: "Data Analytics Platform",
    client: "Digital Dynamics",
    status: "Completed",
    progress: 100,
    dueDate: "2024-03-30",
    team: [
      { name: "Frank Miller", image: "https://i.pravatar.cc/150?u=frank" },
      { name: "Grace Chen", image: "https://i.pravatar.cc/150?u=grace" },
      { name: "Henry Wilson", image: "https://i.pravatar.cc/150?u=henry" },
    ],
  },
];

export function ProjectList() {
  return (
    <div className="grid gap-4">
      {projects.map((project) => (
        <Card key={project.id} className="p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-sm text-muted-foreground">{project.client}</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hover:bg-muted p-2 rounded-full">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit Project</DropdownMenuItem>
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>Archive Project</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{project.progress}%</span>
              <Badge
                variant={
                  project.status === "Completed"
                    ? "default"
                    : project.status === "In Progress"
                    ? "secondary"
                    : "outline"
                }
              >
                {project.status}
              </Badge>
            </div>
            <Progress value={project.progress} className="h-2" />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex -space-x-2">
              {project.team.map((member, i) => (
                <Avatar key={i} className="border-2 border-background w-8 h-8">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                {new Date(project.dueDate).toLocaleDateString()}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}