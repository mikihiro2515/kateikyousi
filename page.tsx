import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const tutorImage =
  "https://files.oaiusercontent.com/file-3MMBtgr6e2uFa5AMK4aw2o?se=2025-02-05T11%3A10%3A15Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da33cf938-8c81-4b39-b7ca-c65e5195a31c.webp&sig=qBG47HR/O%2BGDuYK/axCGf3MPj9WoHZ6zmJtNXS2uOa4%3D"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800">
            お子さまの『わかった！』が未来を変える！
          </h1>
          <p className="text-xl mb-8 text-gray-600">経験豊富な家庭教師が、やさしく・楽しく・確実にサポートします。</p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
            無料体験授業に申し込む
          </Button>
          <div className="mt-12 relative">
            <Image
              src={tutorImage || "/placeholder.svg"}
              alt="子供と先生が一緒に勉強しているイラスト"
              width={800}
              height={500}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">家庭教師サービスの3つの特長</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "お子さまに合わせたオーダーメイド指導",
                description: "学習ペースや理解度に合わせた個別カリキュラム。",
              },
              {
                title: "厳選された優秀な講師陣",
                description: "教育経験豊富な講師が多数在籍。",
              },
              {
                title: "自信を育むサポート体制",
                description: "学習の習慣化とモチベーションアップに重点。",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center overflow-hidden">
                <Image
                  src={tutorImage || "/placeholder.svg"}
                  alt={feature.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results and Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">成績アップの実績・保護者の声</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">実績</h3>
                <div className="relative">
                  <Image
                    src={tutorImage || "/placeholder.svg"}
                    alt="成績アップのイメージ"
                    width={500}
                    height={300}
                    className="rounded-lg mx-auto"
                  />
                  <p className="mt-4 text-center text-xl font-bold text-blue-600">算数のテストが60点→90点に！</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex flex-col items-center">
                <Image
                  src={tutorImage || "/placeholder.svg"}
                  alt="保護者の声のイメージ"
                  width={200}
                  height={200}
                  className="rounded-full mb-4"
                />
                <div>
                  <p className="italic text-center">"子どもが自信を持って勉強に取り組むようになりました。"</p>
                  <p className="mt-2 font-semibold text-center">- 田中さま（小学4年生の母）</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">こんなお悩みありませんか？</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <ul className="list-disc list-inside text-xl space-y-4 max-w-xl">
              <li>勉強が苦手で、やる気が出ない</li>
              <li>集団塾ではついていけない</li>
              <li>家庭学習の習慣が身につかない</li>
            </ul>
            <Image
              src={tutorImage || "/placeholder.svg"}
              alt="学習のお悩みイメージ"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="text-2xl font-bold text-center mt-8 text-blue-600">→ すべて、私たちが解決します！</p>
        </div>
      </section>

      {/* Free Trial Lesson */}
      <section className="py-20 bg-yellow-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">無料体験授業のご案内</h2>
          <p className="text-xl mb-8 text-red-600 font-semibold">今なら初回の授業が無料！</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl font-semibold mb-4">体験授業の流れ</h3>
              <ol className="list-decimal list-inside text-left space-y-4">
                <li>お申し込み：下記フォームからお申し込みください。</li>
                <li>ご連絡：担当者からお電話で詳細をお伺いします。</li>
                <li>体験授業：お子さまに合わせた授業を行います。</li>
              </ol>
            </div>
            <Image
              src={tutorImage || "/placeholder.svg"}
              alt="無料体験授業イメージ"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <Button size="lg" className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white">
            無料体験授業に申し込む
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">よくある質問（FAQ）</h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>家庭教師はどのように選ばれますか？</AccordionTrigger>
              <AccordionContent>
                厳正な審査を経て、教育経験と人格に優れた講師を選抜しています。お子さまの学習スタイルや目標に合わせて最適な講師をマッチングいたします。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>1回の授業は何分ですか？</AccordionTrigger>
              <AccordionContent>
                標準的な授業時間は90分です。ただし、お子さまの集中力や学習内容に応じて、60分や120分のコースも選択可能です。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>オンライン対応は可能ですか？</AccordionTrigger>
              <AccordionContent>
                はい、オンライン授業も対応しております。専用のオンライン学習ツールを使用し、対面授業と変わらない質の高い指導を提供いたします。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">お問い合わせ・申し込みフォーム</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <form className="max-w-xl w-full space-y-6">
              <div>
                <Label htmlFor="grade">お子さまの学年</Label>
                <Input id="grade" placeholder="例：小学4年生" required />
              </div>
              <div>
                <Label htmlFor="parentName">保護者様のお名前</Label>
                <Input id="parentName" placeholder="例：山田 太郎" required />
              </div>
              <div>
                <Label htmlFor="contact">連絡先（電話番号またはメールアドレス）</Label>
                <Input id="contact" placeholder="例：090-1234-5678" required />
              </div>
              <div>
                <Label htmlFor="preferredTime">希望の曜日・時間帯</Label>
                <Textarea id="preferredTime" placeholder="例：平日の夕方、土曜日の午前中など" />
              </div>
              <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                今すぐ無料体験授業に申し込む
              </Button>
            </form>
            <Image
              src={tutorImage || "/placeholder.svg"}
              alt="申し込みイメージ"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">会社情報</h3>
              <p>サービス提供会社名：○○教育株式会社</p>
              <p>住所：東京都○○区○○町1-2-3</p>
              <p>連絡先：03-1234-5678</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">リンク</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    利用規約
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center">&copy; 2025 ○○教育株式会社 All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

