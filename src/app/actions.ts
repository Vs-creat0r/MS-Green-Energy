"use server";

import { createServer } from "@/utils/supabase/server";
import { z } from "zod";

const LeadSchema = z.object({
  full_name: z
    .string()
    .min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number"),
  zip_code: z
    .string()
    .min(6, "Please enter a valid PIN code"),
  // Optional fields from detailed assessment
  monthly_bill: z.string().optional(),
  state: z.string().optional(),
  address: z.string().optional(),
  roof_type: z.string().optional(),
  roof_area: z.string().optional(),
  shading: z.string().optional(),
  monthly_units: z.string().optional(),
  usage_pattern: z.string().optional(),
  backup_need: z.string().optional(),
  primary_goal: z.string().optional(),
  budget_range: z.string().optional(),
  timeline: z.string().optional(),
  financing_preference: z.string().optional(),
  preferred_contact: z.string().optional(),
  best_time: z.string().optional(),
});

export async function submitLead(
  prevState: { success: boolean; message: string },
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  const raw = {
    full_name: formData.get("full_name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    zip_code: formData.get("zip_code") as string,
    // Optional assessment fields
    monthly_bill: formData.get("monthly_bill") as string || null,
    state: formData.get("state") as string || null,
    address: formData.get("address") as string || null,
    roof_type: formData.get("roof_type") as string || null,
    roof_area: formData.get("roof_area") as string || null,
    shading: formData.get("shading") as string || null,
    monthly_units: formData.get("monthly_units") as string || null,
    usage_pattern: formData.get("usage_pattern") as string || null,
    backup_need: formData.get("backup_need") as string || null,
    primary_goal: formData.get("primary_goal") as string || null,
    budget_range: formData.get("budget_range") as string || null,
    timeline: formData.get("timeline") as string || null,
    financing_preference: formData.get("financing_preference") as string || null,
    preferred_contact: formData.get("preferred_contact") as string || null,
    best_time: formData.get("best_time") as string || null,
  };

  const result = LeadSchema.safeParse(raw);
  if (!result.success) {
    const msg = result.error.errors.map(e => e.message).join(" ");
    return { success: false, message: msg };
  }

  const supabase = await createServer();
  
  // Create the lead data object, filtering out null values
  const leadData = Object.fromEntries(
    Object.entries(result.data).filter(([_, value]) => value !== null && value !== undefined)
  );

  const { error } = await supabase.from("Visitor_Leads").insert(leadData);

  if (error) {
    console.error("Supabase error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }

  return {
    success: true,
    message: "Thank you! Our solar expert will contact you within 24 hours with your personalized assessment.",
  };
}
