import { z } from "zod";

export const createPropertySchema = z.object({
  title: z.string().min(5),
  description: z.string().min(20),
  city: z.string().min(2),
  area: z.string().min(2),
  pincode: z.string().min(5),
  rent: z.coerce.number().min(1),
  deposit: z.coerce.number().min(0),
  bhkType: z.enum(["RK", "ONE_BHK", "TWO_BHK", "THREE_BHK", "FOUR_PLUS"]),
  propertyType: z.enum(["FLAT", "APARTMENT", "VILLA", "PG", "COMMERCIAL_OFFICE", "SHOP"]),
  furnishedType: z.enum(["UNFURNISHED", "SEMI_FURNISHED", "FULLY_FURNISHED"]),
  availableFrom: z.coerce.date()
});
