import { z } from "zod";

export const campingSchema = z.object({
  title: z.string().min(2, "Title must be more than 2 character"),
  price: z.coerce.number(),
  description: z.string().max(1000, "Description must be less than 1000 character"),
  category: z.string(),
  lat:z.coerce.number(),
  lng:z.coerce.number(),
  image:z.any()
}); 
export const profileSchema = z.object({
  firstname: z.string().min(2, "Title must be more than 2 character").max(30,"firstname must be less than 30 character"),
  lastname: z.string().min(2, "Title must be more than 2 character").max(30,"firstname must be less than 30 character"),
  
});

