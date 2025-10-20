import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    const topics = await Topic.find().maxTimeMS(5000);
    return NextResponse.json(topics, { status: 200 });
  } catch (error: any) {
    console.error("Error in GET /api/topics:", error);
    return NextResponse.json(
      { error: "Failed to load topics", details: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic created" }, { status: 201 });
  } catch (error: any) {
    console.error("Error in POST /api/topics:", error);
    return NextResponse.json(
      { error: "Failed to create topic" },
      { status: 500 }
    );
  }
}