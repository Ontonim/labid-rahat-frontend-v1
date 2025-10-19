"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image: string;
}

interface TeamCardProps {
  member: TeamMember;
  isSelected: boolean;
  onSelect: () => void;
}

export default function TeamCard({
  member,
  isSelected,
  onSelect,
}: TeamCardProps) {
  return (
    <Card
      onClick={onSelect}
      className={`overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${
        isSelected ? "ring-2 ring-primary shadow-lg" : ""
      }`}
    >
      {/* Image Container */}
      <div className="relative h-64 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-1">
          {member.name}
        </h3>
        <p className="text-primary font-semibold mb-3">{member.role}</p>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {member.bio}
        </p>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2">
          {member.expertise.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>

        {/* Expanded Content */}
        {isSelected && (
          <div className="mt-4 pt-4 border-t border-border animate-in fade-in">
            <p className="text-sm text-foreground leading-relaxed">
              {member.bio}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
