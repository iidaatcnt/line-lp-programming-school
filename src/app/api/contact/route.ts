import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // ここでメール送信などの処理を行います。
    // 現時点ではコンソールにログ出力するだけにします。
    console.log('お問い合わせを受信しました:', {
      name,
      email,
      message,
    });

    // 成功レスポンスを返す
    return NextResponse.json({ message: 'お問い合わせありがとうございます！' }, { status: 200 });
  } catch (error) {
    console.error('お問い合わせ処理中にエラーが発生しました:', error);
    return NextResponse.json(
      { message: 'お問い合わせの送信に失敗しました。' },
      { status: 500 }
    );
  }
}
