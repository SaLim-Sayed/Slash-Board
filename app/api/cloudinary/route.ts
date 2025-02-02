import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = "114586812666373"; // Replace with your Cloudinary API key
  const apiSecret = "Kvh5HeGQBkW2X7WouJTyMLzMmZ8"; // Replace with your Cloudinary API secret
  const baseUrl = `https://api.cloudinary.com/v1_1/depx9sqyy/resources/image`;
  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

  let allResources: string[] = [];
  let nextCursor: string | null = null;

  try {
    do {
      const url: string = nextCursor
        ? `${baseUrl}?next_cursor=${nextCursor}`
        : baseUrl;

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
  } catch (error) {
    // Check if the error is an instance of Error and has a `message` property
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    // Handle cases where the error is not an Error object
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
