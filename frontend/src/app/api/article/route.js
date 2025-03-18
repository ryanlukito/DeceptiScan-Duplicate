import { NextResponse } from "next/server";

/**
 * GET handler for fetching articles from the backend
 */
export async function GET() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`);
    }

    const articles = await response.json();
    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

/**
 * POST handler for creating a new article
 */
export async function POST(request) {
    try {
      // Parse the request body as JSON
      const body = await request.json();
  
      // Validate required fields
      if (!body.title || !body.summary || !body.imageLink) {
        return NextResponse.json(
          { error: "Missing required fields (title, summary, imageLink)" },
          { status: 400 }
        );
      }
      
      // Validate adminID
      if (!body.adminID || typeof body.adminID !== 'number') {
        return NextResponse.json(
          { error: "adminID must be a valid integer" },
          { status: 400 }
        );
      }
      
      console.log('Making request to backend with JSON data:', {
        adminID: body.adminID,
        title: body.title,
        summary: body.summary,
        link: body.link,
        imageLink: body.imageLink
      });
  
      // Make the request to the backend API using JSON
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles`, {
        method: 'POST',
        headers: {
          'Authorization': request.headers.get('authorization'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          adminID: body.adminID,
          title: body.title,
          summary: body.summary,
          link: body.link || "",
          imageLink: body.imageLink
        })
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        return NextResponse.json(
          { error: `Backend returned ${response.status}: ${errorText}` },
          { status: response.status }
        );
      }
  
      const savedArticle = await response.json();
      return NextResponse.json(savedArticle, { status: 201 });
    } catch (error) {
      console.error('Error creating article:', error);
      return NextResponse.json(
        { error: `Failed to create article: ${error.message}` },
        { status: 500 }
      );
    }
  }