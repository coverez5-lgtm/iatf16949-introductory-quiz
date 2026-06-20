export type Choice = "A" | "B" | "C" | "D";

export interface Question {
  id: number;
  chapter: "basic" | "advanced";
  chapterLabel: string;
  difficulty: 1 | 2 | 3;
  text: string;
  choices: Record<Choice, string>;
  correctAnswer: Choice;
  explanation: string[];
}

export const chapters = [
  { id: "basic" as const, label: "第1章：基礎編", subtitle: "全10問", difficulty: "★☆☆" },
  { id: "advanced" as const, label: "第2章：応用編", subtitle: "全10問", difficulty: "★★☆" },
];

export const scoreLevels = [
  { min: 18, label: "基礎は十分。現場用語（APQP/PPAP/FMEA等）の実務学習へ" },
  { min: 14, label: "おおむね理解。間違えた章を復習" },
  { min: 10, label: "基礎編から再学習を推奨" },
  { min: 0, label: "IATF 16949の全体像（QMS・PDCA・監査）を先に整理" },
];

export const questions: Question[] = [
  {
    id: 1,
    chapter: "basic",
    chapterLabel: "基礎編",
    difficulty: 1,
    text: "IATF 16949 とは何の規格ですか？",
    choices: {
      A: "自動車の安全性能を試験する技術規格",
      B: "自動車部品メーカーなどが品質を管理するための「仕組みのルール」",
      C: "工場の環境（排ガス・騒音など）を管理する規格",
      D: "従業員の労働安全を定める規格",
    },
    correctAnswer: "B",
    explanation: [
      "IATF 16949 は、品質マネジメントシステム（QMS）の国際規格です。",
      "「部品の品質を安定させるために、会社全体でどんな仕組みを作り、運用するか」を定めたルールブックだと考えてください。",
      "製品そのものの設計値や安全基準を直接定める規格ではありません。",
    ],
  },
  {
    id: 2,
    chapter: "basic",
    chapterLabel: "基礎編",
    difficulty: 1,
    text: "IATF 16949 のもとになっている規格はどれですか？",
    choices: {
      A: "ISO 14001",
      B: "ISO 9001",
      C: "ISO 27001",
      D: "ISO 45001",
    },
    correctAnswer: "B",
    explanation: [
      "IATF 16949 は ISO 9001 をベースに、自動車産業向けの追加要求を載せた規格です。",
      "ISO 9001 は「どんな業界でも使える品質管理の基本ルール」、IATF 16949 は「自動車業界版の強化ルール」とイメージするとわかりやすいです。",
    ],
  },
  {
    id: 3,
    chapter: "basic",
    chapterLabel: "基礎編",
    difficulty: 1,
    text: "IATF 16949 認証を取得する主な対象はどれですか？",
    choices: {
      A: "自動車を販売するディーラー",
      B: "自動車部品を製造・供給するサプライヤー",
      C: "一般の飲食店",
      D: "個人のドライバー",
    },
    correctAnswer: "B",
    explanation: [
      "主な対象は自動車メーカー（OEM）のサプライチェーンに関わる組織です。",
      "部品メーカー、二次サプライヤー、関連サービスを提供する会社などが該当します。",
      "「自動車メーカーから部品やサービスを受注している会社」がイメージに近いです。",
    ],
  },
  {
    id: 4,
    chapter: "basic",
    chapterLabel: "基礎編",
    difficulty: 1,
    text: "「PDCAサイクル」とIATF 16949の関係として正しいものはどれですか？",
    choices: {
      A: "PDCAは品質管理と無関係な経営用語である",
      B: "計画→実行→確認→改善の繰り返しで品質を向上させる考え方が規格の根幹にある",
      C: "PDCAは監査時だけ使う一時的な手法である",
      D: "PDCAは設計部門だけが使う手法である",
    },
    correctAnswer: "B",
    explanation: [
      "PDCA（Plan→Do→Check→Act）は、品質を継続的に良くしていくための基本サイクルです。",
      "IATF 16949 も「一度作って終わり」ではなく、日常業務の中で改善を回し続けることを求めます。",
    ],
  },
  {
    id: 5,
    chapter: "basic",
    chapterLabel: "基礎編",
    difficulty: 1,
    text: "IATF 16949 でよく使われる「特殊特性（Special Characteristics）」とは何ですか？",
    choices: {
      A: "会社のロゴや社名などのブランド要素",
      B: "製品の安全・法規適合・機能に大きく影響する重要な特性",
      C: "営業担当者だけが知っている情報",
      D: "工場内の特殊な機械の名称",
    },
    correctAnswer: "B",
    explanation: [
      "特殊特性は、顧客や法規、安全面で特に重要な品質特性です。",
      "例：ブレーキ部品の寸法、溶接強度、電気特性など。",
      "現場では「ここを間違えると重大な問題になるポイント」として管理されます。",
    ],
  },
  {
    id: 6,
    chapter: "basic",
    chapterLabel: "基礎編",
    difficulty: 1,
    text: "「顧客特定要求（Customer-Specific Requirements：CSR）」の意味として正しいものは？",
    choices: {
      A: "すべての会社が同じ内容で守る共通ルール",
      B: "各自動車メーカー（顧客）が追加で定める独自の要求事項",
      C: "従業員個人の希望条件",
      D: "監査員個人の好み",
    },
    correctAnswer: "B",
    explanation: [
      "IATF 16949 本体に加えて、トヨタ、ホンダ、フォードなど各OEMが追加ルールを出している場合があります。",
      "認証取得企業は、IATF 16949 だけでなく、受注している顧客のCSRも満たす必要があります。",
    ],
  },
  {
    id: 7,
    chapter: "basic",
    chapterLabel: "基礎編",
    difficulty: 1,
    text: "内部監査（Internal Audit）の主な目的はどれですか？",
    choices: {
      A: "従業員の勤怠をチェックすること",
      B: "自社の品質マネジメントシステムが規格どおり運用されているか確認すること",
      C: "競合他社の製品を調査すること",
      D: "製品の販売価格を決めること",
    },
    correctAnswer: "B",
    explanation: [
      "内部監査は、自社の仕組みがルールどおり動いているかを点検する活動です。",
      "問題を外部監査前に見つけて改善する「健康診断」のような役割があります。",
    ],
  },
  {
    id: 8,
    chapter: "basic",
    chapterLabel: "基礎編",
    difficulty: 1,
    text: "「不適合（Nonconformity）」とは何ですか？",
    choices: {
      A: "会社の売上が計画より少ない状態",
      B: "要求（規格・仕様・手順など）を満たしていない状態",
      C: "従業員の出勤率が低い状態",
      D: "新製品のアイデアがまだない状態",
    },
    correctAnswer: "B",
    explanation: [
      "不適合は、決められた要求を満たしていないこと全般を指します。",
      "例：寸法不良、手順未遵守、記録漏れなど。",
      "重要なのは「見つけたら放置せず、原因対策と再発防止をする」ことです。",
    ],
  },
  {
    id: 9,
    chapter: "basic",
    chapterLabel: "基礎編",
    difficulty: 1,
    text: "IATF 16949 における「リスクベース思考（Risk-based thinking）」を初心者向けに説明すると？",
    choices: {
      A: "リスクは無視して速度優先で進める",
      B: "問題が起きる前に、起きやすい・影響が大きい点を先に考えて対策する",
      C: "問題が起きてから初めて対策を考える",
      D: "リスクは品質保証部門だけが考える",
    },
    correctAnswer: "B",
    explanation: [
      "リスクベース思考は、「何が起きたら困るか」を先読みして、先手を打つ考え方です。",
      "FMEA（後述）などの手法とセットで使われます。",
    ],
  },
  {
    id: 10,
    chapter: "basic",
    chapterLabel: "基礎編",
    difficulty: 1,
    text: "IATF 16949 認証の維持に関して正しいものはどれですか？",
    choices: {
      A: "一度取得すれば永久に有効",
      B: "定期的な監査（サーベイランス監査など）を受け、要求を継続的に満たす必要がある",
      C: "年1回、社内会議を開けば十分",
      D: "認証取得後は規格を守る必要がない",
    },
    correctAnswer: "B",
    explanation: [
      "認証は継続的な維持活動が必要です。",
      "通常、認証機関による定期監査があり、不適合があれば是正が求められます。",
    ],
  },
  {
    id: 11,
    chapter: "advanced",
    chapterLabel: "応用編",
    difficulty: 2,
    text: "自動車品質でよく使われる「コアツール（Core Tools）」に含まれないものはどれですか？",
    choices: {
      A: "APQP（先期品質企画）",
      B: "PPAP（量産部品承認）",
      C: "FMEA（故障モード影響解析）",
      D: "ERP（基幹業務システム）",
    },
    correctAnswer: "D",
    explanation: [
      "コアツール5つは APQP / PPAP / FMEA / MSA / SPC です。",
      "ERPは業務管理システムであり、コアツールそのものではありません（ただしデータ管理などで連携することはあります）。",
    ],
  },
  {
    id: 12,
    chapter: "advanced",
    chapterLabel: "応用編",
    difficulty: 2,
    text: "APQP（Advanced Product Quality Planning）の目的として最も適切なものは？",
    choices: {
      A: "製品が量産開始前から品質要求を満たせるよう計画・準備すること",
      B: "出荷後のクレーム対応だけを効率化すること",
      C: "会計処理を自動化すること",
      D: "従業員の評価制度を作ること",
    },
    correctAnswer: "A",
    explanation: [
      "APQPは「量産前に品質を作り込むための計画プロセス」です。",
      "設計、工程、試作、評価などを段階的に進め、量産移行時のトラブルを減らします。",
    ],
  },
  {
    id: 13,
    chapter: "advanced",
    chapterLabel: "応用編",
    difficulty: 2,
    text: "PPAP（Production Part Approval Process）で顧客が確認したいこととして最も近いものは？",
    choices: {
      A: "量産体制で要求品質を安定して作れるか",
      B: "会社の社史",
      C: "従業員の趣味",
      D: "工場の外観デザイン",
    },
    correctAnswer: "A",
    explanation: [
      "PPAPは量産部品の承認プロセスです。",
      "図面、工程能力、試験結果、管理計画などを提出し、顧客が「この部品を量産で使ってよい」と判断します。",
    ],
  },
  {
    id: 14,
    chapter: "advanced",
    chapterLabel: "応用編",
    difficulty: 2,
    text: "FMEA（Failure Mode and Effects Analysis）の基本的な考え方は？",
    choices: {
      A: "故障の起こり方と影響を洗い出し、重要なリスクから対策する",
      B: "故障は起きてから対応すれば十分",
      C: "故障は運だけで決まる",
      D: "故障分析は設計完了後に不要",
    },
    correctAnswer: "A",
    explanation: [
      "FMEAは「どんな不具合が起きうるか」「影響はどれくらい大きいか」を評価し、優先順位をつけて対策する手法です。",
      "設計FMEA（DFMEA）と工程FMEA（PFMEA）があります。",
    ],
  },
  {
    id: 15,
    chapter: "advanced",
    chapterLabel: "応用編",
    difficulty: 2,
    text: "MSA（Measurement System Analysis）が確認することは？",
    choices: {
      A: "測定器や測定方法が信頼できるか",
      B: "製品の色味が流行に合っているか",
      C: "営業目標が達成できるか",
      D: "工場の電気代",
    },
    correctAnswer: "A",
    explanation: [
      "MSAは「測る仕組み自体が正確・再現性があるか」を評価します。",
      "測定がブレていると、良い製品を不良と誤判定したり、その逆も起こります。",
    ],
  },
  {
    id: 16,
    chapter: "advanced",
    chapterLabel: "応用編",
    difficulty: 2,
    text: "SPC（Statistical Process Control）の目的として正しいものは？",
    choices: {
      A: "工程データを統計的に見て、異常の兆候を早期に発見する",
      B: "検査員の人数をゼロにする",
      C: "統計は監査時だけ使う",
      D: "不良品を出荷してから改善する",
    },
    correctAnswer: "A",
    explanation: [
      "SPCは管理図などを使い、工程の安定性を継続監視する手法です。",
      "「異常が起きる前のサイン」を捉えるのが重要です。",
    ],
  },
  {
    id: 17,
    chapter: "advanced",
    chapterLabel: "応用編",
    difficulty: 2,
    text: "「8D（Eight Disciplines）」は主に何のための手法ですか？",
    choices: {
      A: "問題を8段階で整理し、原因究明と再発防止を行う",
      B: "8時間以内に必ず出荷する",
      C: "8人のチームだけで会社を運営する",
      D: "8種類の部品しか作らない",
    },
    correctAnswer: "A",
    explanation: [
      "8Dはクレームや重大問題への対応フレームワークです。",
      "チーム編成、問題記述、恒久対策、水平展開などを段階的に進めます。",
    ],
  },
  {
    id: 18,
    chapter: "advanced",
    chapterLabel: "応用編",
    difficulty: 2,
    text: "「変化点管理（Change Management）」で管理すべき変化の例として適切なものは？",
    choices: {
      A: "人、機械、材料、方法、測定、環境などの変更",
      B: "従業員の昼食メニューの変更",
      C: "天気の変化",
      D: "競合他社の新製品発表",
    },
    correctAnswer: "A",
    explanation: [
      "変化点管理は、工程に影響する変更を見逃さず、品質リスクを評価・確認する仕組みです。",
      "例：作業者変更、設備修理、材料ロット変更、治具交換など。",
    ],
  },
  {
    id: 19,
    chapter: "advanced",
    chapterLabel: "応用編",
    difficulty: 2,
    text: "「標準作業（Standardized Work）」の意味として最も近いものは？",
    choices: {
      A: "誰がやっても同じ品質になるよう、最良の作業方法を定めて守る",
      B: "作業者ごとに自由なやり方でよい",
      C: "標準作業は新人だけが守ればよい",
      D: "標準作業は紙だけ作って現場では使わない",
    },
    correctAnswer: "A",
    explanation: [
      "標準作業は再現性のある品質を作るための「決められたやり方」です。",
      "現場で使われ、改善のたびに更新されることが重要です。",
    ],
  },
  {
    id: 20,
    chapter: "advanced",
    chapterLabel: "応用編",
    difficulty: 2,
    text: "外部監査（認証機関による監査）でよく確認される点として最も適切なものは？",
    choices: {
      A: "文書化された要求事項が実際の現場運用と一致しているか",
      B: "社長の出身地",
      C: "社内の噂話の真偽",
      D: "製品の広告コピーのセンス",
    },
    correctAnswer: "A",
    explanation: [
      "外部監査では「書いてあること（規定）と、実際にやっていること（運用）が一致しているか」が重要視されます。",
      "いわゆる「文書と現場の整合性（Say-Do Gap）」がポイントです。",
    ],
  },
];

export const keywords = [
  { term: "IATF 16949", desc: "自動車産業向けの品質マネジメント規格" },
  { term: "ISO 9001", desc: "品質管理の基本規格（IATFの土台）" },
  { term: "CSR", desc: "各自動車メーカーの追加要求" },
  { term: "特殊特性", desc: "安全・法規・機能に特に重要な品質項目" },
  { term: "APQP", desc: "量産前に品質を計画するプロセス" },
  { term: "PPAP", desc: "量産部品の承認プロセス" },
  { term: "FMEA", desc: "故障リスクを洗い出して対策する手法" },
  { term: "MSA", desc: "測定システムの信頼性評価" },
  { term: "SPC", desc: "統計的手法で工程を監視" },
  { term: "8D", desc: "問題解決と再発防止の8段階手法" },
  { term: "内部監査", desc: "自社のQMS運用を点検" },
  { term: "不適合", desc: "要求を満たしていない状態" },
];
