"use server"

import { revalidatePath } from "next/cache";
const pathnames = ["/about", "/conditions", "/contacts", "/criteria-diler", "/criteria-instructor", "/dilers-form", "/galery", "/instructors", "/instructors-form", "/profile", "/cart", "/dealers", "/faq", "/quick-order", "/shop/feeto-care", "/shop/professional-feet"]
export async function revalidatePages() {
  pathnames.forEach(path => revalidatePath(path));

  console.log('Revalidated paths on locale change');
}
