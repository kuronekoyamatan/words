'use strict';

{
  const btn = document.getElementById('btn');
  const text = document.getElementById('text');
  const words = [
    '「大きな目標を持ち、そして小さな努力を続けよう。」 — スティーブ・ジョブズ',
    '「自分にできることを最善を尽くしてやりなさい。それが成功への道。」 — アルベルト・アインシュタイン',
    '「あなたの未来は、今あなたが選ぶことによって作られる。」 — ルイーズ・L・ヘイ',
    '「夢を追い続ける限り、あなたは負けることはない。」 — ウォルト・ディズニー',
    '「諦めなければ、必ず成功する。」 — トーマス・エジソン',
    '「希望は、最も深い暗闇の中でも輝き続ける。」 — オスカー・ワイルド',
    '「毎日、少しずつでも前進しよう。」 — ヘレン・ケラー',
    '「どんなに暗い夜でも、必ず朝は来る。」 — ルビー・ブライアント',
    '「挑戦しないことが一番の失敗だ。」 — ウィンストン・チャーチル',
    '「人生は苦しい時期だけではない。最も苦しい時を乗り越えることで、新しい自分を発見できる。」 — ダライ・ラマ',
    '「痛みを感じることができるということは、生きている証拠。」 — トニー・モリソン',
    '「立ち止まっているだけでは何も始まらない。」 — ロバート・フロスト',
    '「最も強い人は、最も多くの試練を乗り越えてきた人だ。」 — シルヴァ・バーディン',
    '「全ての道が途絶えても、必ず新しい道が見つかる。」 — ラルフ・ワルド・エマーソン',
    '「一度やってみて、失敗してもそれが教訓になる。」 — フランクリン・D・ルーズベルト',
    '「立ち止まることなく進み続けることで、必ず道が開ける。」 — ニコラ・テスラ',
    '「どんな痛みでも、受け入れることで乗り越えられる。」 — ジャスティン・ビーバー',
    '「人生の困難を乗り越えることで、成長と力が得られる。」 — マヤ・アンジェロウ',
    '「希望を持ち続けることで、いつか必ず状況は変わる。」 — ウィンストン・チャーチル',
    '「暗いトンネルの先には必ず光が待っている。」 — ダライ・ラマ',
    '「すべては時間が解決する。」 — アリストテレス',
    '「今は辛い時期でも、必ず笑顔で過ごせる日が来る。」 — ダライ・ラマ',
    '「努力すれば、必ず報われる。」 — トーマス・エジソン',
    '「他人の道を歩まず、自分だけの足跡を残せ。」 — ＭＫ',
    '「どんな嵐でも、耐えて進み続けた先に晴れ渡る空が待っている。」 — ＭＫ',
    '「心の中の希望が、最も暗い道を照らし続ける。」 — ＭＫ',
    '「大切なのは結果じゃない、挑戦し続けるその姿勢だ。」 — ＭＫ',
    '「失敗を恐れないで。失敗こそ、次の成功への種だから。」 — ＭＫ',
    '「自分らしさを大切にして、他の誰かと比べずに前に進んでいこう。」 — ＭＫ',
  ];

  btn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWords = words[randomIndex];

    text.textContent = randomWords;
  });
}
