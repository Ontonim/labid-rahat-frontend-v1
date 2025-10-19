export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Labid Rahat",
    role: "Founder & Content Creator",
    bio: "Passionate historian and geographer dedicated to bringing world history to life through engaging video content. Specializes in ancient civilizations and geopolitical analysis.",
    expertise: ["History", "Geography", "Storytelling", "Research"],
    image:
      "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/491951044_9584903638262196_3082184153067498058_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=for2DcV909oQ7kNvwE8Od60&_nc_oc=AdnkGhigFhgkYLDDH4-J3iZwXJdOddTi0gofj_xcgaZV21DtYOfMHtmMmtn5WLY0Tjs&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=QkAF3L97Un8tDCCHaLCMWg&oh=00_Afe-3XDnePFI5mJ8F9w5K52JIbaja41-lS2bd1y1CI3osg&oe=68FB043C",
  },
  {
    id: "2",
    name: "Sarah Ahmed",
    role: "Research Director",
    bio: "Expert in historical research and geographical data analysis. Ensures accuracy and depth in all content production with meticulous attention to detail.",
    expertise: ["Research", "Data Analysis", "Geography", "Documentation"],
    image:
      "https://templeofunderstanding.org/wp-content/uploads/2019/10/sarah.jpg",
  },
  {
    id: "3",
    name: "Marcus Chen",
    role: "Video Producer",
    bio: "Creative video production specialist with expertise in documentary-style content. Transforms historical narratives into visually compelling stories.",
    expertise: ["Video Production", "Editing", "Cinematography", "Animation"],
    image: "https://professionalwoundspecialists.com/wp-content/uploads/2025/02/MC-Bio-photo.jpg",
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    role: "Graphics & Animation",
    bio: "Talented animator and graphic designer creating stunning visual representations of historical events and geographical concepts.",
    expertise: [
      "Animation",
      "Graphics Design",
      "Visual Effects",
      "Motion Design",
    ],
    image: "https://templeofunderstanding.org/wp-content/uploads/2019/10/sarah.jpg",
  },
  {
    id: "5",
    name: "James Wilson",
    role: "Sound & Music Director",
    bio: "Audio specialist crafting immersive soundscapes and original compositions that enhance the storytelling experience.",
    expertise: [
      "Sound Design",
      "Music Composition",
      "Audio Engineering",
      "Mixing",
    ],
    image: "https://professionalwoundspecialists.com/wp-content/uploads/2025/02/MC-Bio-photo.jpg",
  },
  {
    id: "6",
    name: "Priya Patel",
    role: "Community Manager",
    bio: "Engaged community leader fostering meaningful discussions and connections with our global audience of history and geography enthusiasts.",
    expertise: [
      "Community Management",
      "Social Media",
      "Engagement",
      "Content Strategy",
    ],
    image: "https://media.licdn.com/dms/image/v2/D5603AQGN_Iin7DWg6A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723770817833?e=2147483647&v=beta&t=9ZNcbGON0vbA3YqPqkPYyxO2fcwzcGz680zZZgzyGdc",
  },
];
