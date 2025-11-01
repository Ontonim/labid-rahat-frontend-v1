import TeamCard from "./TeamCard";
import DevelopedBy from "./OntonimTeam";
import Background from "@/components/common/Background";
import { getTeamMembers } from "@/actions/team/getTeamMembers";

export default async function TeamSection() {
  const members = await getTeamMembers();
  const teamMembers = members?.data;
  return (
    <section className="relative z-10 mt-10 lg:mt-20">
      <Background />
      <section className="relative w-full py-20 px-4 z-10">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Meet Our Team
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Dedicated creators exploring the world&apos;s history and
              geography through compelling video content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {teamMembers.map((member) => (
              <TeamCard key={member._id} member={member} />
            ))}
          </div>
        </div>
      </section>
      <div className="relative z-10">
        <DevelopedBy />
      </div>
    </section>
  );
}
