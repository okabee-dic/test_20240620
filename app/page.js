import NewsCard from "./_components/newscard"

export default function Home() {
    return  <main>
            <section id="mainvisual">
                <div className="bg-gray-300">
                    <div style={{ height: "300px"}}>mainvisual</div>
                </div>
            </section>
            <section id="news" className="p-4 pb-10">
                <h2 className="text-center text-xl p-2">News</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2">
                    <NewsCard className="grid-item" color="red" title="aaa">ほげほげ<br/>あひゃあひゃ</NewsCard>
                    <NewsCard className="grid-item" color="blue" title="bbb">まにまに</NewsCard>
                    <NewsCard className="grid-item" title="ccc">ねばねば</NewsCard>
                    <NewsCard className="grid-item" title="ddd">ぺんぺん</NewsCard>
                    <NewsCard className="grid-item" title="eee">ぱんぱん</NewsCard>
                </div>
            </section>
            </main>;
  }