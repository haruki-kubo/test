import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=60&width=200" alt="すぅみーる　晴れやか" className="h-15" />
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#features" className="text-pink-600 hover:text-pink-800">特　徴</a></li>
              <li><a href="#hareyaka" className="text-pink-600 hover:text-pink-800">晴れやか</a></li>
              <li><a href="#greeting" className="text-pink-600 hover:text-pink-800">ご挨拶</a></li>
              <li><a href="#access" className="text-pink-600 hover:text-pink-800">アクセス</a></li>
              <li><a href="https://smilefarm.hp.peraichi.com" className="text-pink-600 hover:text-pink-800">腕まくり</a></li>
            </ul>
          </nav>
          <Button className="md:hidden">メニュー</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="hero" className="text-center mb-16">
          <h1 className="text-4xl font-bold text-pink-900 mb-4">特定非営利活動法人すぅみーる　晴れやか</h1>
          <p className="text-xl text-gray-700 mb-8">愛知県豊田市にある知的障がいのデイサービスです。</p>
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">お問い合わせ</Button>
        </section>

        <section id="features" className="mb-16">
          <h2 className="text-3xl font-semibold text-pink-800 mb-6 text-center">笑顔の３ステップ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['職員さんが、笑顔に。', '利用者さんが、笑顔に。', 'ご家族様が、笑顔へ。'].map((step, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">笑顔のStep.{index + 1}</h3>
                  <p className="text-gray-700">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="hareyaka" className="mb-16">
          <h2 className="text-3xl font-semibold text-pink-800 mb-6 text-center">晴れやか</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/placeholder.svg?height=300&width=400" alt="晴れやか" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">生活介護事業・日中一時支援事業</h3>
              <p className="text-gray-700 mb-4">
                サービス等利用計画を踏まえて個別支援計画の作成、
                この計画に基づいてサービスを提供します。
              </p>
            </div>
          </div>
        </section>

        <section id="activities" className="mb-16">
          <h2 className="text-3xl font-semibold text-pink-800 mb-6 text-center">活動内容</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['生産活動', '創作活動', '健康活動'].map((activity, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{activity}</h3>
                  <p className="text-gray-700">活動の詳細説明がここに入ります。</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-semibold text-pink-800 mb-6 text-center">よくある質問</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>お昼ご飯はありますか？</AccordionTrigger>
              <AccordionContent>
                3種類のお弁当から選ぶことができます。
                ① 日替わり弁当
                ② 麺弁当
                ③ 五穀米弁当
                ※ ご家族様の手作り弁当、持参可能です。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>送迎はありますか？</AccordionTrigger>
              <AccordionContent>
                豊田市内全域。他市町村であっても、片道３０分圏内まで送迎をすることが可能です。
                ※片道30分を超える場合は、ご相談ください。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section id="greeting" className="mb-16">
          <h2 className="text-3xl font-semibold text-pink-800 mb-6 text-center">代表から一言</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                "笑顔"
                ありきたりですが、一番ですね。
                そこに笑顔はあるのかい？
                笑顔のない支援に意味はあるのかい？
                私たちは、私たちのやり方で、
                利用者さんたちと笑顔いっぱい、
                楽しく活動していきます。
              </p>
              <p className="text-right">山田章貴</p>
            </CardContent>
          </Card>
        </section>

        <section id="access" className="mb-16">
          <h2 className="text-3xl font-semibold text-pink-800 mb-6 text-center">施設情報</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">晴　れ　や　か</h3>
              <p className="text-gray-700 mb-4">
                〒473-0901
                愛知県豊田市御幸本町3-79
                エルグランデ豊田1階
                TEL 0565-85-0330
              </p>
              <p className="text-gray-700">担当：櫻井</p>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <img src="/placeholder.svg?height=300&width=400" alt="地図" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-pink-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">すぅみーる　晴れやか</h4>
              <p>愛知県豊田市を中心に展開する自動車ディーラー</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">クイックリンク</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:underline">特　徴</a></li>
                <li><a href="#hareyaka" className="hover:underline">晴れやか</a></li>
                <li><a href="#greeting" className="hover:underline">ご挨拶</a></li>
                <li><a href="#access" className="hover:underline">アクセス</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">お問い合わせ</h4>
              <p>TEL: 0565-85-0330</p>
              <p>受付時間: 平日 10:00〜17:00</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-pink-800 text-center">
            <p>&copy; 2023 特定非営利活動法人　すぅみーる. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}