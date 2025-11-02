"use server";

import { z, ZodError } from "zod";

const messageSchema = z.object({
  name: z.string().min(1, "Name is required").max(20, "Name is too long"),
  email: z.string().email("Invalid email address"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(200, "Subject is too long"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(2000, "Message is too long"),
});

export const sendMessage = async (formData: FormData) => {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const subject = formData.get("subject") as string | null;
  const message = formData.get("message") as string | null;

  try {
    const data = messageSchema.parse({
      name,
      email,
      subject,
      message,
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to send message");
    }

    const result = await res.json();
    return { success: true, message: "Message sent successfully", result };
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
