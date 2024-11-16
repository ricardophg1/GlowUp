"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";

export function ProjectFilters() {
  return (
    <div className="flex items-center gap-4">
      <Input
        placeholder="Search projects..."
        className="w-[200px] lg:w-[300px]"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuCheckboxItem checked>
            Active Projects
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Completed</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Planning</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>At Risk</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button>New Project</Button>
    </div>
  );
}