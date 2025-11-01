"use server";

export interface Members {
  _id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image: string;
}

interface TeamMembersResponse {
  success: boolean;
  data: {
    data: Members[];
  };
}

export async function getTeamMembers() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/members/public`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags: ["members"],
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: TeamMembersResponse = await response.json();
    return {
      success: true,
      data: data.data,
    };
  } catch (error) {
    console.error("Error fetching Team members:", error);
    return {
      success: false,
      data: [],
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
