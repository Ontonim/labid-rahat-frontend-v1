"use server";

import { z, ZodError } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const subscribeNewsletter = async (formData: FormData) => {
  const email = formData.get("email") as string | null;

  try {
    const data = newsletterSchema.parse({
      email,
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to subscribe");
    }

    const result = await res.json();
    return { success: true, message: "Subscribed successfully", result };
  } catch (err) {
    if (err instanceof ZodError) {
      const errors = err.issues.map((issue) => issue.message).join(", ");
      console.error("Validation failed:", errors);
      return { success: false, message: errors };
    }
    if (err instanceof Error) {
      console.error("Error:", err.message);
      return { success: false, message: err.message };
    }
    console.error("Unknown error:", err);
    return { success: false, message: "An unexpected error occurred" };
  }
};