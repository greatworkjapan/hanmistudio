export default function HomePage() {
  return (
    <main className="container py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-babyPink-dark">
        韓国コスメポータル
      </h1>
      <p className="mt-3 text-gray-700">
        新商品速報・比較・検索をワンストップで。
      </p>

      <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article className="rounded-xl p-5 bg-babyPink-light border border-babyPink/30 shadow-sm">
          <h2 className="font-semibold text-babyPink-dark">新商品ニュース</h2>
          <p className="mt-2 text-sm text-gray-700">
            韓国コスメの新製品をいち早くチェック。
          </p>
        </article>

        <article className="rounded-xl p-5 bg-lavender-light border border-lavender/30 shadow-sm">
          <h2 className="font-semibold text-lavender-dark">製品比較</h2>
          <p className="mt-2 text-sm text-gray-700">
            価格・成分・テクスチャを横並び比較。
          </p>
        </article>

        <article className="rounded-xl p-5 bg-mint-light border border-mint/30 shadow-sm">
          <h2 className="font-semibold text-mint-dark">豊富な検索</h2>
          <p className="mt-2 text-sm text-gray-700">
            ブランド／成分／悩み別など多軸で検索。
          </p>
        </article>
      </section>
    </main>
  );
}
