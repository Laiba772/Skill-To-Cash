import { NextResponse } from "next/server";
import dummyData from "@/data/dummydata";

// ⏰ Simple in-memory store (DB na ho to temporary)
const userLimits: Record<string, { lastGenerated: string; count: number; plan: "free" | "premium"; premiumStart?: Date }> = {};

export async function POST(req: Request) {
  try {
    const { userId, skill } = await req.json();

    if (!userId || !skill) {
      return NextResponse.json({ error: "Missing userId or skill" }, { status: 400 });
    }

    const normalizedSkill = skill.trim().toLowerCase();
    const roadmap = dummyData[normalizedSkill];

    if (!roadmap) {
      return NextResponse.json({ error: "❌ Roadmap not available for this skill yet." }, { status: 404 });
    }

    // ✅ User limit logic
    const today = new Date().toDateString();
    if (!userLimits[userId]) {
      userLimits[userId] = { lastGenerated: today, count: 0, plan: "free" }; // default free
    }

    const userData = userLimits[userId];

    // Free plan → only 1 per day
    if (userData.plan === "free") {
      if (userData.lastGenerated === today && userData.count >= 1) {
        return NextResponse.json({
          error: "⚠️ Free plan users can only generate 1 idea per day. Upgrade to Premium 🚀",
        });
      }

      if (userData.lastGenerated !== today) {
        userData.lastGenerated = today;
        userData.count = 0;
      }
    }

    // Premium expiry check → 30 days
    if (userData.plan === "premium" && userData.premiumStart) {
      const expiry = new Date(userData.premiumStart);
      expiry.setDate(expiry.getDate() + 30);
      if (new Date() > expiry) {
        userData.plan = "free"; // expire
      }
    }

    // ✅ Select random idea from roadmap projects
    const randomIdea =
      roadmap.projects.beginner[0] ||
      roadmap.projects.intermediate[0] ||
      roadmap.projects.advanced[0];

    // Update counter
    userData.count++;

    return NextResponse.json({
      idea: `For ${skill}, start with: ${randomIdea}`,
      roadmap,
    });
  } catch (error) {
    console.error("Error in generate API:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
