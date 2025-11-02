"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Members } from "@/actions/team/getTeamMembers";

interface TeamCardProps {
  member: Members;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <Card>
      <div className="relative h-64 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-1">
          {member.name}
        </h3>
        <p className="text-primary font-semibold mb-3">{member.role}</p>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {member.bio}
        </p>

        <div className="flex flex-wrap gap-2">
          {member.expertise.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
