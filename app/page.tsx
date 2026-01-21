"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const clubs = [
    { name: "アミノin富山", leader: "田中寿美子", email: "makimam7788@yahoo.co.jp" },
    { name: "ありそR.C.", leader: "石倉 昌和", email: "pfbcs570@yahoo.co.jp" },
    { name: "射水マラソンクラブ", leader: "橋 貴正", email: "greenchem2000@yahoo.co.jp" },
    { name: "Y.G.R.C.", leader: "石倉 勝", email: "ishikura@asanokk.jp" },
    { name: "Now Style", leader: "今 正徳", email: "oct08masa@yahoo.co.jp" },
    { name: "アピアGRA", leader: "銅 幸一郎" },
    { name: "高岡ランニングクラブ", leader: "原井 拓実", email: "haraitakumi@yahoo.co.jp" },
    { name: "木曜練習会", leader: "中山 泰司", email: "nkymyss1013@gmail.com" },
    { name: "何米CLUB", leader: "清水 光", email: "shimikoushimikousumire@gmail.com" },
    { name: "YRC", leader: "高田 豊寛", email: "t.toyo.0126@gmail.com" },
    { name: "HAMIGAKI.R.C", leader: "山野本 陽平", email: "tomahawk.jam.y@gmail.com" },
    { name: "A.C.TOYAMA", leader: "宮前 仁", email: "miyamae.hitoshi-atj@pa2.so-net.ne.jp" },
    { name: "富山ランニングクラブ", leader: "東条 叙宏", email: "tojo4704@hb.tp1.jp" },
    { name: "万葉健友会", leader: "薮田 勇治", email: "yuji_b5@yahoo.co.jp" },
    { name: "フラットR.C.", leader: "宮脇 範純", email: "nnyt_miyawaki@ybb.ne.jp" },
    { name: "RUNRUN塾", leader: "伊藤 靖" },
    { name: "はしろっとA.C.", leader: "萩行 慎一", email: "toyama@imizu-plusone.com" },
    { name: "サウルス富山", leader: "中山 和哉" },
    { name: "MT.SUPOLA", leader: "間野 敏男", email: "mano@spo-uozu.com" },
    { name: "氷見浜友会", leader: "加野 邦彦" },
    { name: "NikoA'sRunning Family", leader: "磯野あずさ", email: "nik0nik0.running.6@gmail.com" },
    { name: "Team Hally", leader: "原井 拓実", email: "takaokarc2022@gmail.com" },
    { name: "CLUB MSR", leader: "石倉 勝", email: "ishikura@asanokk.jp" },
    { name: "SALLYS RUNNING CLUB", leader: "藤森 暁", email: "info@sallys.run" },
    { name: "TEAM AVANTE", leader: "宮田 真一", email: "info@t-avante.jp" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:toyamakenrun@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `お名前: ${formData.name}\nメールアドレス: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-20 py-6">
          <div className="flex items-center justify-between">
            <a href="#hero" className="text-lg font-serif tracking-wider text-gray-900 hover:text-gray-600 transition-colors">
              Toyama Running Club
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors tracking-wide">
                連絡会について
              </a>
              <a href="#activities" className="text-sm text-gray-600 hover:text-gray-900 transition-colors tracking-wide">
                主要活動
              </a>
              <a href="#events" className="text-sm text-gray-600 hover:text-gray-900 transition-colors tracking-wide">
                イベント
              </a>
              <a href="#schedule" className="text-sm text-gray-600 hover:text-gray-900 transition-colors tracking-wide">
                事業予定
              </a>
              <a href="#clubs" className="text-sm text-gray-600 hover:text-gray-900 transition-colors tracking-wide">
                加盟クラブ
              </a>
              <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors tracking-wide">
                お問い合わせ
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setModalImage(null)}
        >
          <div className="relative w-full max-w-5xl aspect-[4/3]">
            <Image
              src={modalImage}
              alt="拡大画像"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300 transition-colors"
              onClick={() => setModalImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
      {/* Hero Section - Minimalist Luxury */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 xl:px-32 pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white opacity-60"></div>
        <div className="relative max-w-[1400px] w-full grid lg:grid-cols-12 gap-12 lg:gap-20 items-center py-20">
          <div className="lg:col-span-5 space-y-12 animate-fadeIn">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-serif text-gray-900 tracking-[0.15em] leading-[1.1] font-light">
                Toyama<br />Running<br />Club
              </h1>
              <div className="flex items-center space-x-4 mt-8">
                <div className="h-px w-12 bg-gray-400"></div>
                <p className="text-base lg:text-lg text-gray-500 font-light tracking-[0.2em] uppercase">
                  Association
                </p>
              </div>
            </div>
            <p className="text-base lg:text-lg text-gray-700 leading-[1.9] font-light max-w-md tracking-wide">
              富山マラソン開催をきっかけに県内の市民ランナークラブが集まり結成。富山県内のランニング文化を醸成する為活動しています。
            </p>
          </div>
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[600px] aspect-[4/3] rounded-sm overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] cursor-pointer"
              onClick={() => setModalImage("/hero.jpg")}
            >
              <Image
                src="/hero.jpg"
                alt="富山ランニングクラブ"
                fill
                className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Pure White Space */}
      <section id="about" className="py-32 lg:py-40 bg-white px-6 lg:px-20">
        <div className="max-w-[900px] mx-auto text-center space-y-12">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-serif text-gray-900 tracking-[0.12em] font-light">
              富山県ランニングクラブ連絡会
            </h2>
            <div className="flex justify-center">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
          </div>
          <p className="text-base lg:text-lg text-gray-600 leading-[2] font-light tracking-wide">
            富山県内のランニング文化の醸成と、市民ランナーの技術向上を目指し、<br className="hidden lg:block" />
            各地域のランニングクラブが連携して活動を行っています。
          </p>
        </div>
      </section>

      {/* Activities Section - Grid System */}
      <section id="activities" className="py-32 lg:py-40 bg-gradient-to-b from-white to-gray-50 px-6 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20 lg:mb-28">
            <h2 className="text-3xl lg:text-5xl font-serif text-gray-900 tracking-[0.12em] font-light mb-6">
              主要活動
            </h2>
            <p className="text-sm lg:text-base text-gray-500 tracking-[0.15em] uppercase font-light">
              Main Activities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group bg-white p-10 lg:p-12 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500">
              <div
                className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-sm cursor-pointer"
                onClick={() => setModalImage("/a4.jpg")}
              >
                <Image
                  src="/a4.jpg"
                  alt="とやまマラソン練習会"
                  fill
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-xl lg:text-2xl font-serif text-gray-900 tracking-wide font-light">
                  とやまマラソン練習会
                </h3>
                <div className="h-px w-16 bg-gray-300"></div>
                <p className="text-sm lg:text-base text-gray-600 leading-[1.9] font-light">
                  定期的な練習会を通じて、参加者の技術向上とコミュニティ形成を支援します。
                </p>
              </div>
            </div>

            <div className="group bg-white p-10 lg:p-12 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500">
              <div
                className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-sm cursor-pointer"
                onClick={() => setModalImage("/a3.jpg")}
              >
                <Image
                  src="/a3.jpg"
                  alt="初心者講習会・練習会"
                  fill
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-xl lg:text-2xl font-serif text-gray-900 tracking-wide font-light">
                  初心者講習会・練習会
                </h3>
                <div className="h-px w-16 bg-gray-300"></div>
                <p className="text-sm lg:text-base text-gray-600 leading-[1.9] font-light">
                  ランニング初心者の方を対象とした基礎講習と実践的な練習会を開催しています。
                </p>
              </div>
            </div>

            <div className="group bg-white p-10 lg:p-12 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500">
              <div
                className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-sm cursor-pointer"
                onClick={() => setModalImage("/a5.jpg")}
              >
                <Image
                  src="/a5.jpg"
                  alt="富山マラソンペースランナー"
                  fill
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-xl lg:text-2xl font-serif text-gray-900 tracking-wide font-light">
                  富山マラソンペースランナー
                </h3>
                <div className="h-px w-16 bg-gray-300"></div>
                <p className="text-sm lg:text-base text-gray-600 leading-[1.9] font-light">
                  富山マラソンにおいて、参加者の目標達成をサポートするペースランナーを務めています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section - Asymmetric Layout */}
      <section id="events" className="py-32 lg:py-40 bg-white px-6 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20 lg:mb-28">
            <h2 className="text-3xl lg:text-5xl font-serif text-gray-900 tracking-[0.12em] font-light mb-6">
              イベント・活動報告
            </h2>
            <p className="text-sm lg:text-base text-gray-500 tracking-[0.15em] uppercase font-light">
              Events & Activities
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {/* Event 1 - 富山マラソン2025 */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <div
                  className="relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] cursor-pointer"
                  onClick={() => setModalImage("/a7.jpg")}
                >
                  <Image
                    src="/a7.jpg"
                    alt="富山マラソン2025"
                    fill
                    className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-4xl font-serif text-gray-900 tracking-wide font-light">
                    富山マラソン2025
                  </h3>
                  <div className="h-px w-20 bg-gray-300"></div>
                </div>
                <p className="text-base lg:text-lg text-gray-600 leading-[1.9] font-light">
                  富山マラソン2025が無事終了致しました。今回も3時間から6時間30分までの目標タイムを目指す参加者の方が1人でも多く達成できるよう、25名がペースランナーを務めさせていただきました。
                </p>
              </div>
            </div>

            {/* Event 2 - とやまクライムラン */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div
                  className="relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] cursor-pointer"
                  onClick={() => setModalImage("/a6.jpg")}
                >
                  <Image
                    src="/a6.jpg"
                    alt="とやまクライムラン"
                    fill
                    className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-4xl font-serif text-gray-900 tracking-wide font-light">
                    とやまクライムラン IN 牛岳温泉スキー場
                  </h3>
                  <div className="h-px w-20 bg-gray-300"></div>
                </div>
                <p className="text-base lg:text-lg text-gray-600 leading-[1.9] font-light">
                  牛岳温泉スキー場のゲレンデの特設コースを利用した片道約1.6km、標高差約300mを一気に駆け上がるクライムラン大会を9/21に開催いたしました。
                </p>
              </div>
            </div>

            {/* Event 3 - 雪上クライムラン */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <div
                  className="relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] cursor-pointer"
                  onClick={() => setModalImage("/a2.jpg")}
                >
                  <Image
                    src="/a2.jpg"
                    alt="雪上クライムラン"
                    fill
                    className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-4xl font-serif text-gray-900 tracking-wide font-light">
                    雪上クライムランIN牛岳温泉スキー場
                  </h3>
                  <p className="text-sm text-gray-500 tracking-wide">R7/2/1</p>
                  <div className="h-px w-20 bg-gray-300"></div>
                </div>
                <p className="text-base lg:text-lg text-gray-600 leading-[1.9] font-light">
                  当日は好天に恵まれ、参加者は快走（快歩）できました。（コース規制等完璧にして頂きました、スキー場管理事務所さんありがとうございました。）頂上からの眺望も最高でしたので、参加者の皆さんには、達成（充実）感を感じて頂けたと思っています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section - Elegant Table */}
      <section id="schedule" className="py-32 lg:py-40 bg-gradient-to-b from-gray-50 to-white px-6 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20 lg:mb-28">
            <h2 className="text-3xl lg:text-5xl font-serif text-gray-900 tracking-[0.12em] font-light mb-6">
              令和8年度 事業予定
            </h2>
            <p className="text-sm lg:text-base text-gray-500 tracking-[0.15em] uppercase font-light">
              Schedule 2026
            </p>
          </div>

          <div className="bg-white p-8 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)]">
            <div className="space-y-1">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-8 border-b border-gray-200">
                <div className="lg:col-span-1">
                  <p className="text-sm text-gray-500 font-light mb-2 tracking-wide">開催時期</p>
                  <p className="text-base lg:text-lg text-gray-900 font-light">2026年</p>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-500 font-light mb-2 tracking-wide">イベント内容</p>
                  <p className="text-base lg:text-lg text-gray-900 font-light leading-relaxed">
                    ペースランナー委嘱式&マラソン練習会<br />
                    <span className="text-sm text-gray-600">(20~25km目標)</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-8 border-b border-gray-200">
                <div className="lg:col-span-1">
                  <p className="text-sm text-gray-500 font-light mb-2 tracking-wide">開催時期</p>
                  <p className="text-base lg:text-lg text-gray-900 font-light">2026年</p>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-500 font-light mb-2 tracking-wide">イベント内容</p>
                  <p className="text-base lg:text-lg text-gray-900 font-light leading-relaxed">
                    マラソン練習会<br />
                    <span className="text-sm text-gray-600">(30km目標)</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-8">
                <div className="lg:col-span-1">
                  <p className="text-sm text-gray-500 font-light mb-2 tracking-wide">開催時期</p>
                  <p className="text-base lg:text-lg text-gray-900 font-light">2026年</p>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-500 font-light mb-2 tracking-wide">イベント内容</p>
                  <p className="text-base lg:text-lg text-gray-900 font-light leading-relaxed">
                    富山マラソン2026
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 font-light tracking-wide">
                ※会場：※以外は全て富山県総合運動公園
              </p>
            </div>
          </div>

          <div className="mt-16 text-center space-y-8">
            <p className="text-base lg:text-lg text-gray-600 font-light tracking-wide">
              開催予定のイベント情報
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://moshicom.com/user/674270"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-gray-900 text-white text-sm tracking-wider hover:bg-gray-700 transition-colors duration-300 font-light"
              >
                各イベントのお申し込みはこちら
              </a>
              <a
                href="https://moshicom.com/login/?url=personal%2Fmessage%2Fentry%2F674270"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 border border-gray-900 text-gray-900 text-sm tracking-wider hover:bg-gray-50 transition-colors duration-300 font-light"
              >
                主催者へのお問い合わせ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs Section - Minimalist Grid */}
      <section id="clubs" className="py-32 lg:py-40 bg-white px-6 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20 lg:mb-28">
            <h2 className="text-3xl lg:text-5xl font-serif text-gray-900 tracking-[0.12em] font-light mb-6">
              加盟クラブ一覧
            </h2>
            <p className="text-sm lg:text-base text-gray-500 tracking-[0.15em] uppercase font-light">
              Member Clubs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {clubs.map((club, index) => (
              <div
                key={index}
                className="bg-white p-8 lg:p-10 hover:bg-gray-50 transition-colors duration-300 group"
              >
                <div className="space-y-3">
                  <h3 className="text-base lg:text-lg font-light text-gray-900 tracking-wide group-hover:text-gray-700 transition-colors">
                    {club.name}
                  </h3>
                  <div className="h-px w-8 bg-gray-300 group-hover:w-12 transition-all duration-300"></div>
                  <p className="text-sm text-gray-600 font-light tracking-wide">
                    {club.leader}
                  </p>
                  {club.email && (
                    <a
                      href={`mailto:${club.email}`}
                      className="text-xs text-gray-500 hover:text-gray-900 font-light tracking-wide block break-all transition-colors"
                    >
                      {club.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Contact Form */}
      <section id="contact" className="py-32 lg:py-40 bg-gradient-to-b from-white to-gray-50 px-6 lg:px-20">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-20 lg:mb-28">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-5xl font-serif text-gray-900 tracking-[0.12em] font-light">
                お問い合わせ
              </h2>
              <div className="flex justify-center">
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              </div>
            </div>
            <p className="text-base lg:text-lg text-gray-600 leading-[2] font-light tracking-wide mt-12">
              富山県ランニングクラブ連絡会に関するお問い合わせは<br className="hidden lg:block" />
              以下のフォームよりお願い致します。
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] space-y-8">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm text-gray-700 font-light tracking-wide">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors font-light text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm text-gray-700 font-light tracking-wide">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors font-light text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm text-gray-700 font-light tracking-wide">
                件名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors font-light text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm text-gray-700 font-light tracking-wide">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors font-light text-gray-900 resize-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-10 py-4 bg-gray-900 text-white text-sm tracking-wider hover:bg-gray-700 transition-colors duration-300 font-light"
              >
                送信する
              </button>
            </div>
          </form>

          <div className="mt-16 text-center">
            <div className="inline-block bg-white px-12 py-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)]">
              <div className="space-y-4">
                <p className="text-sm text-gray-500 tracking-[0.15em] uppercase font-light">
                  Contact
                </p>
                <div className="h-px w-16 bg-gray-300 mx-auto"></div>
                <p className="text-base lg:text-lg text-gray-900 font-light tracking-wide">
                  富山県ランニングクラブ連絡会<br />
                  事務局（宮前）
                </p>
                <p className="text-sm text-gray-600 font-light">
                  toyamakenrun@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Subtle Branding */}
      <footer className="py-16 bg-white border-t border-gray-200 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-sm text-gray-500 font-light tracking-wide">
              © 2026 Toyama Running Club Association
            </p>
            <p className="text-xs text-gray-400 font-light tracking-wider uppercase">
              富山県ランニングクラブ連絡会
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
