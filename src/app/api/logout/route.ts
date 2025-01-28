import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  try {
    const response = await axios.delete(
      'https://cloud.bazissoft.ru/api-cutting-public/client/logout',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return NextResponse.json({
      message: 'Logout successful',
      data: response.data,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: 'Failed to logout',
        details: error.response?.data || error.message,
      },
      { status: error.response?.status || 500 },
    );
  }
}
