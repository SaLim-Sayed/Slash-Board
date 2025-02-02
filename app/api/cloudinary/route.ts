import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const apiKey = "114586812666373"; // Replace with your Cloudinary API key
  const apiSecret = "Kvh5HeGQBkW2X7WouJTyMLzMmZ8"; // Replace with your Cloudinary API secret
  const baseUrl = `https://api.cloudinary.com/v1_1/depx9sqyy/resources/image`;
  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

  let allResources: any[] = [];
  let nextCursor: string | null = null;

  try {
    do {
      const url: string = nextCursor ? `${baseUrl}?next_cursor=${nextCursor}` : baseUrl;

      const response = await fetch(url, {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Cloudinary API error: ${response.statusText}`);
      }

      const data = await response.json();

      // Accumulate resources
      allResources = allResources.concat(data.resources);

      // Check for next_cursor to determine if there are more pages
      nextCursor = data.next_cursor || null;
    } while (nextCursor);

    return NextResponse.json(allResources);
  } catch (error: any) {
    console.error("Error fetching Cloudinary resources:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
