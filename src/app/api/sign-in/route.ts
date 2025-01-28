import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  try {
    const body = await request.json(); // Получаем данные из запроса
    console.log({ body });

    const response = await axios.post(
      'https://cloud.bazissoft.ru/api-cutting/client/login?lang=ru&md5Pass=false',
      { ...body, userId: 8782 },
      {
        headers: {
          'Content-Type': 'application/json',
          apiKey: '3fd17d434a4b4896a85fad96664f8056',
        },
      },
    );
    console.log({ response });
    // Возвращаем данные с сервера API
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Proxy error:', error.response?.data || error.message);

    return NextResponse.json(
      {
        error: 'Failed to make the request',
        details: error.response?.data || null,
      },
      { status: error.response?.status || 500 },
    );
  }
}
