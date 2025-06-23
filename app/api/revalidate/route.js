import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

const pathnames = [
  "/about",
  "/conditions",
  "/contacts",
  "/criteria-diler",
  "/criteria-instructor",
  "/dilers-form",
  "/galery",
  "/instructors",
  "/instructors-form",
  "/profile",
  "/cart",
  "/dealers",
  "/faq",
  "/quick-order",
  "/shop/feeto-care",
  "/shop/professional-feet"
];

export async function POST() {
  try {
    await Promise.all(pathnames.map(path => revalidatePath(path)));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}