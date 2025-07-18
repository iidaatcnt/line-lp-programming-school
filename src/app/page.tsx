import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            <Link href="/">LINE構築代行サービス</Link>
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-gray-600 hover:text-green-600">特徴</a></li>
              <li><a href="#problems" className="text-gray-600 hover:text-green-600">お悩み</a></li>
              <li><a href="#solution" className="text-gray-600 hover:text-green-600">解決策</a></li>
              <li><a href="#price" className="text-gray-600 hover:text-green-600">料金</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-green-600">お問い合わせ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section (ファーストビュー) */}
      <section className="bg-green-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            プログラミング教室の集客と運営を劇的に変える！<br />
            LINE公式アカウント構築代行サービス
          </h2>
          <p className="text-xl mb-8">
            生徒獲得から顧客管理まで、ITのプロがあなたの教室に最適なLINE戦略を設計・構築します。
          </p>
          <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300">
            まずは初回無料コンサルティングに申し込む
          </button>
          <p className="mt-4 text-sm">90分 20,000円相当。ご満足いただけなければ全額返金。</p>
        </div>
      </section>

      {/* Problems Section (お悩み) */}
      <section id="problems" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-12">こんなお悩みありませんか？</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">体験後の入会率が伸び悩んでいる…</h4>
              <p className="text-gray-600">
                体験教室は開催しているものの、その後のフォローアップが手薄で、入会に繋がらない。
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">生徒との連絡業務が煩雑…</h4>
              <p className="text-gray-600">
                授業連絡、資料配布、イベント案内など、生徒や保護者との連絡に多くの時間と手間がかかっている。
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">競合との差別化が難しい…</h4>
              <p className="text-gray-600">
                プログラミング教室が増える中で、自社の強みを効果的にアピールできず、選ばれる理由が作れない。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section (解決策) */}
      <section id="solution" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-12">そのお悩み、LINE公式アカウントで解決します！</h3>
          <p className="text-lg text-gray-700 mb-8">
            私たちは単なるLINE構築業者ではありません。Webサイト制作、サーバー管理、IT戦略コンサルティングまで、
            Web戦略全体を熟知したITのプロが、あなたの教室の「集客と運営を最大化する」ための最適なLINE戦略を設計・構築します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <h4 className="text-xl font-semibold mb-4">自動化された顧客フォローで入会率アップ</h4>
              <p className="text-gray-600">
                体験後の自動メッセージ配信、学習進捗の定期通知、イベント案内などをLINEで自動化。
                見込み客や既存生徒との関係を強化し、入会率・継続率向上に貢献します。
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <h4 className="text-xl font-semibold mb-4">効率的な運営で業務負担を軽減</h4>
              <p className="text-gray-600">
                授業・資料連絡の自動化、受講管理、アンケート実施などをLINEで一元管理。
                煩雑な手作業を削減し、教室運営の効率化と生徒満足度向上を実現します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section (弊社が選ばれる理由) */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-12">なぜITのプロに頼むと効果が出るのか？</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">広範なIT戦略の視点</h4>
              <p className="text-gray-600">
                LINE単体ではなく、Webサイト、CRM、広告運用など、教室運営全体のIT戦略を考慮した最適なLINE活用法をご提案します。
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">高い技術力と柔軟な対応</h4>
              <p className="text-gray-600">
                サーバーやデータベースの知識も豊富で、生徒情報システムや学習管理システムとの複雑な連携も実現可能です。
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">ビジネス成果にコミット</h4>
              <p className="text-gray-600">
                「どうすれば集客が増え、生徒の満足度が向上するか」を常に考え、費用対効果の高いLINE戦略をご提案し、成果に繋げます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section (料金プラン) */}
      <section id="price" className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-800 mb-12">サービス・料金プラン</h3>
          <p className="text-lg text-gray-700">
            お客様の教室の規模や課題に合わせて、最適なプランをご提案します。<br />
            まずは初回無料コンサルティングにて、詳細をお聞かせください。
          </p>
          {/* ここに料金プランの具体的な内容が入ります */}
        </div>
      </section>

      {/* Contact Section (お問い合わせ) */}
      <section id="contact" className="py-16 bg-green-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8">まずはITのプロにお気軽にご相談ください</h3>
          <p className="text-xl mb-8">
            あなたの教室の課題をヒアリングし、集客と運営を劇的に変える具体的なLINE戦略をご提案します。
          </p>
          <button className="bg-white text-green-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300">
            初回無料コンサルティングに申し込む
          </button>
          <p className="mt-4 text-sm">90分 20,000円相当。ご満足いただけなければ全額返金。</p>
          <p className="mt-8 text-lg">
            <a href="#" className="underline hover:no-underline">サービス資料をダウンロードする（無料）</a>
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}