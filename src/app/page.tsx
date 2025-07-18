import Link from "next/link";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            <Link href="/">LINE活用サービス</Link>
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
      <CTASection        buttonText="まずは初回IT戦略コンサルティングに申し込む（無料）"        description="体験学習で終わらせない！
既習者も初心者も満足させる最新LINE活用型教えます
プログラミング教室の入会率・継続率を劇的にアップさせる
ITのプロによるLINE公式アカウント構築サービス"        link="#contact"        note="90分 20,000円（税込み）。ご満足いただけなければ全額返金。"      />

      {/* Problems Section (お悩み) */}
      <section id="problems" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-12">こんなお悩みありませんか？</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">体験後の入会率が低い…</h4>
              <p className="text-gray-600">
                体験教室は多いのに、なかなか入会に繋がらない。既習者へのアプローチ方法に悩んでいる。
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">既習者への連絡が大変…</h4>
              <p className="text-gray-600">
                授業連絡、資料配布の調整、イベント案内など、既習者との連絡業務に時間がかかりすぎている。
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">他の教室との差別化が難しい…</h4>
              <p className="text-gray-600">
                競合が増える中で、自社の強みやユニークさを効果的に伝えられず、選ばれる理由が作れない。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section (解決策) */}
      <section id="solution" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-12">そのお悩み、ITのプロがまとめて解決します！</h3>
          <p className="text-lg text-gray-700 mb-8">
            私たちは単なるLINE屋さんではありません。WordPress構築からサーバー管理、IT戦略コンサルティングまで、
            Web戦略全体を担当するITのプロが、あなたの教室の「売上を最大化する」ための最適なLINE活用法を設計・構築します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <h4 className="text-xl font-semibold mb-4">既習者との信頼関係を深める自動化</h4>
              <p className="text-gray-600">
                体験後のフォローアップ、学習進捗の定期情報共有、イベント案内などをLINEで自動化。
                既習者との密なコミュニケーションで信頼関係を構築し、入会の継続を保証します。
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <h4 className="text-xl font-semibold mb-4">教室運営を効率化するLINE連携</h4>
              <p className="text-gray-600">
                授業・資料連絡の自動化、受講管理、アンケート実施などをLINEで統合。
                煩雑なメールでのやり取りを削減し、入会者の満足を向上します。
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
              <h4 className="text-xl font-semibold mb-4">視野が広い</h4>
              <p className="text-gray-600">
                LINE単体ではなく、Webサイトや顧客管理、CRMなど、教室運営全体のIT戦略を背景とした設計が可能です。
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">技術力が高い</h4>
              <p className="text-gray-600">
                サーバーやデータベースの知識があるため、生徒の情報システムや学習管理システムとの
                複雑な連携も実現できます。
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">ビジネス視点がある</h4>
              <p className="text-gray-600">
                「どうすれば来校者数が増え、継続率が上がるか」を軸に考え、
                費用対効果の高いLINE活用法をご提案します。
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
            まずは初回IT戦略コンサルティングにて、詳細をお聞かせください。
          </p>
          {/* ここに料金プランの具体的な内容が入ります */}
        </div>
      </section>

      {/* Contact Section (お問い合わせ) */}
      <CTASection
        buttonText="初回IT戦略コンサルティングに申し込む（無料）"
        description="まずはITのプロにお気軽にご相談ください
あなたの教室の課題をヒアリングし、売上アップに繋がる具体的なLINE活用戦略をご提案します。"
        link="#contact"
        note="90分 20,000円（税込み）。ご満足いただけなければ全額返金。"
      />

      <p className="mt-8 text-lg">
        <a href="#" className="underline hover:no-underline">サービス資料をダウンロードする（無料）</a>
      </p>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}