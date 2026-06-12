<p align="center">
  <img src=".github/logo.svg" alt="awesome-geo" width="128">
</p>

# Awesome GEO [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[English](README.md) | [한국어](README.ko.md) | [中文](README.zh.md) | **日本語** | [Español](README.es.md) | [Français](README.fr.md)

本ドキュメントは英語版 [README](README.md) の日本語訳です。内容に食い違いがある場合は、英語の原文を基準とします。

> **生成エンジン最適化（Generative Engine Optimization, GEO）**、回答エンジン最適化（Answer Engine Optimization, AEO）、そして AI 検索を扱う、出典優先（source-first）のマップです。ベンダーの宣伝ではなく、各エンジンが公開している公式ドキュメントに基づいて整理しています。

**このリストの居心地の悪い中心的主張：** 検索エンジン自身が公開している公式ドキュメントだけを見ると、GEO/AEO は新しく登場した秘密の最適化分野ではありません。Google Search にとっては、AI Overviews や AI Mode といった新しい回答面に適用される基本的な SEO にすぎません。ChatGPT、Perplexity、Claude といった他の AI 検索エンジンも、公式には同じ土台——クロール可能・インデックス可能・信頼できる・最新——を共有しており、「AI 向けにコンテンツを書き直せ」といった別個のガイドは**一切**公開していません。公式に明確に異なる立場を取っている唯一のエンジンは Microsoft Bing/Copilot です。エンジン間の本当の違いは*どう書くか*ではなく、各エンジンが読み込む**検索バックエンド（retrieval backend）**にあります。

本ドキュメントのすべての主張は一次情報源にリンクしています。マーケティングのブログ記事は明示的に区別した二次セクションにのみ置き、決して事実へと格上げしません。

## 目次

- [中心的な主張](#core-argument)
- [用語マップ](#terminology-map)
- [Google — 公式ドキュメント](#google-official-docs)
- [AI 検索パフォーマンスの計測](#measuring-ai-search-performance)
- [エンジン別の公式スタンス](#per-engine-official-stances)
- [llms.txt — 実際のところ何なのか](#llmstxt-what-it-actually-is)
- [ソーシャル / SNS の面](#social-sns-surfaces)
- [業界・学術リファレンス](#industry-academic-references)
- [無視してよいもの](#what-to-ignore)
- [コントリビュート](#contributing)

<a id="core-argument"></a>
## 中心的な主張

**AEO**（Answer Engine Optimization、回答エンジン最適化）と **GEO**（Generative Engine Optimization、生成エンジン最適化）は、ブランドやコンテンツを AI の回答に引用させること——AI Overviews、AI Mode、ChatGPT、Perplexity、音声検索などの面——を指す、実際に広く使われている業界用語です。とりわけ **GEO** は、2023 年の論文 [*GEO: Generative Engine Optimization*](https://arxiv.org/abs/2311.09735)（KDD 2024）によって学術的に定式化されました。

争点は用語が存在するかどうかではなく、それらが**独立した最適化体系**を指しているかどうかです。Google の[生成 AI 最適化ガイド](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)は、これらの用語が「オンラインでよく使われている」と認めたうえで、Google Search では基本的な SEO を適用し続ければよいと明言しています。AI Overviews / AI Mode のために、**特別なスキーマ、`llms.txt`、AI 専用の markdown、コンテンツのチャンク化、AI 専用の書き直しは、いずれも必要ありません。**

したがって本リストは GEO を**新しい回答面に適用される SEO の基本**として扱います。ただし、エンジン固有の例外は、でっち上げではなく一次情報源で確認できたものだけを記載します。

<a id="terminology-map"></a>
## 用語マップ

| 用語 | 正式名称 | 性質 | Google の公式見解 |
|---|---|---|---|
| **SEO** | Search Engine Optimization | 土台となる体系。エンジンがコンテンツを理解し、ユーザーが見つけられるよう助ける | 公式用語。Google Search Central ドキュメントの中核 |
| **AEO** | Answer Engine Optimization | AI・ダイレクト・音声の回答に引用されるための業界用語 | 「オンラインでよくある」用語として言及。Google の独立した体系ではない |
| **GEO** | Generative Engine Optimization | 生成的回答での露出・帰属のための業界・学術用語 | 「オンラインでよくある」として言及。Google Search では SEO ベースとして扱われる |
| **LLMO / AI SEO / AIO** | LLM Optimization など | マーケティングの造語 | Google の公式フレームワークではない——主張ごとに出典を検証すべき |

<a id="google-official-docs"></a>
## Google — 公式ドキュメント

ここが土台です。一つだけ読むなら、最初の行を読んでください。

| ドキュメント | リンク | 重要な理由 |
|---|---|---|
| Google Search の生成 AI 機能向けの最適化 | https://developers.google.com/search/docs/fundamentals/ai-optimization-guide | GEO/AEO の問いに対する Google の中核的な公式回答。Google Search では生成 AI 向けの最適化も依然として SEO であり、`llms.txt`・チャンク化・特別な AI マークアップは不要 |
| AI 機能とあなたのウェブサイト | https://developers.google.com/search/docs/appearance/ai-features | サイト所有者の視点から見た AI Overviews / AI Mode の仕組み。追加の技術要件はなく、インデックス可能でスニペット表示の対象になることが要点 |
| SEO スターターガイド | https://developers.google.com/search/docs/fundamentals/seo-starter-guide | 構造・コンテンツ・リンク・タイトル・スニペット・画像／動画・プロモーションといった基本 |
| Google Search Essentials | https://developers.google.com/search/docs/essentials | Google Search に表示されるための最低ライン。技術要件、スパムポリシー、主要なベストプラクティス |
| 技術要件 | https://developers.google.com/search/docs/crawling-indexing/technical-requirements | Google がページを取得・レンダリング・インデックスするための最低条件 |
| 構造化データの概要 | https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data | 構造化データの公式な役割はリッチリザルトの適格性であり、特別な「AI 検索」スキーマではない |
| スニペット / メタディスクリプション | https://developers.google.com/search/docs/appearance/snippet | スニペット表示の適格性は AI 機能の表示適格性につながる。プレビュー制御とメタディスクリプションを理解すること |
| Robots meta / nosnippet / max-snippet | https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag | Search と AI 機能に何を表示するかを制御：`nosnippet`、`data-nosnippet`、`max-snippet`、`noindex` |
| Google-Extended | https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended | Gemini/Vertex AI の学習・グラウンディングを制御する製品トークン。Google Search の掲載や順位には影響しない |

<a id="measuring-ai-search-performance"></a>
## AI 検索パフォーマンスの計測

| ドキュメント | リンク | 重要な理由 |
|---|---|---|
| Search Console の生成 AI パフォーマンスレポート | https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports | Search Console で生成 AI のパフォーマンスを報告する件の公式ブログ（2026-06-03 発表） |
| Search Console のクリック / 表示 / 掲載順位 | https://support.google.com/webmasters/answer/7042828 | AI Mode / AI Overviews でクリック・表示・掲載順位がどう集計されるかの説明 |
| AI Overviews（ユーザー向けヘルプ） | https://support.google.com/websearch/answer/14901683 | ユーザー向けの説明。中核機能であり完全には無効化できず、Web フィルターはテキストリンクのみを表示する |
| AI Mode（ユーザー向けヘルプ） | https://support.google.com/websearch/answer/16296315 | AI Mode / Search Labs / フォローアップ / agentic 機能の説明 |

<a id="per-engine-official-stances"></a>
## エンジン別の公式スタンス（Google 以外）

中心的な問いはこうです。*Google は GEO/AEO を SEO だと言う。では他の主要な AI エンジンは、自分のエンジンは違うと公式に主張しているのか？*

短い答えは、**ほとんどは Google と同じ土台**（クロール可能・インデックス可能・信頼できる・最新）を共有しており、公式な「秘密の最適化」を求めていない、というものです。明確に異なる公式スタンスを取っているのは **Microsoft Bing/Copilot** です。Bing はスキーママークアップが自社 LLM のコンテンツ理解を助けると述べ、最新性のために IndexNow を推奨しています。そしてエンジン間の本当の違いは書き方ではなく、**検索バックエンド**——自前のインデックスか、サードパーティの検索プロバイダーか——にあります。

| エンジン / 製品 | 検索バックエンド（公式） | 公式のパブリッシャー向け方針 | Google「SEO で十分」との比較 |
|---|---|---|---|
| Google AI Overviews / AI Mode | Google インデックス | Search Essentials + SEO の基本。特別なスキーマ／`llms.txt` なし | 基準 |
| ChatGPT search（OpenAI） | OAI-SearchBot のクロール + サードパーティ検索プロバイダー | robots.txt で `OAI-SearchBot` を許可、除外したければ `noindex`。**別個のコンテンツ最適化ガイドなし** | 実質的に同じ |
| Perplexity | PerplexityBot のインデックス + Perplexity-User のリアルタイム取得 | PerplexityBot と IP 範囲を許可。**技術的アクセスのみで、コンテンツ戦略はなし** | 実質的に同じ |
| Claude web search（Anthropic） | サードパーティ検索プロバイダー（報道では Brave）+ ClaudeBot | パブリッシャー向け最適化ドキュメントなし。インライン引用を提供し、一次・検証可能な情報源を好む | 実質的に同じ |
| Microsoft Bing / Copilot | Bing インデックス | **スキーマが自社 LLM に役立つと公式に言及** + IndexNow による最新性 + 明確な見出し／表／FAQ。Bing Webmaster Tools の AI Performance レポート | **異なる**——生成検索に特化したガイドを公開 |

プラットフォーム別の一次情報源：

- **OpenAI / ChatGPT** — [パブリッシャー・開発者向け FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)、[ChatGPT search](https://help.openai.com/en/articles/9237897-chatgpt-search)、[ボット・クローラー](https://developers.openai.com/api/docs/bots)。`OAI-SearchBot`（検索・製品）は `GPTBot`（学習）とは別物です。公式の案内は「ブロックするな、除外したいなら `noindex` を使え」であって、「AI 向けにコンテンツを書き直せ」ではありません。
- **Perplexity** — [クローラー](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)、[robots.txt ポリシー](https://www.perplexity.ai/help-center/en/articles/10354969-how-does-perplexity-follow-robots-txt)。PerplexityBot は検索露出用であり学習用ではなく、Perplexity-User はユーザーがトリガーする取得です。ドキュメントは技術的アクセスのみを扱います。「エンティティの明確さ」「要点を前に置く」「Reddit の引用が有利」といったヒントはサードパーティによるリバースエンジニアリングで、**公式の立場ではない**ため、ここでは事実に格上げしません。
- **Anthropic / Claude** — [web search tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool)、[web search の有効化と利用](https://support.claude.com/en/articles/10684626-enabling-and-using-web-search)。基盤となる検索はサードパーティのプロバイダー（報道では Brave Search）に依存し、回答にはインライン引用が付き、検証可能な一次情報源を保守的に好みます。「Claude に引用される」とは、結局「信頼できる一次情報源としてその検索プロバイダーのインデックスに入っている」ことに近い意味です。
- **Microsoft Bing / Copilot** — [Bing Webmaster Tools の AI Performance](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)、[Bing/Copilot が自社 LLM のためにスキーマを使うという報道](https://searchengineland.com/microsoft-bing-copilot-use-schema-for-its-llms-453455)。このリストの中で最も主張が明確です。ただし Microsoft の Fabrice Canel も依然として「less is more——量より正確さ」を強調しています。

<a id="llmstxt-what-it-actually-is"></a>
## llms.txt — 実際のところ何なのか

**起源：** **Jeremy Howard**（fast.ai / Answer.AI 共同創業者）が 2024-09-03 に answer.ai の記事と [`llmstxt.org`](https://llmstxt.org) 仕様を通じて提案しました。サイトルートの `/llms.txt` に置く、厳選された markdown のインデックスで、推論時に LLM がそのサイトを活用できるよう助けることを目的としています。schema.org のような検索コンソーシアムの標準ではなく、**個人主導のコミュニティ提案**であり、これが下記のサポート格差の根本原因です。

**サポート状況（2026 年 Q1 時点）：**

- **Google** — 公式には非対応。John Mueller（2025）と Gary Illyes（Search Central Live 2025-07）は、現在どの AI システムも `llms.txt` を使っておらず、Google にも予定はないと述べています。
- **OpenAI / その他** — GPTBot/ChatGPT が `llms.txt` をパースするという公式発表はありません。
- **「Anthropic／Perplexity がサポートを確認」** — 一部の SEO ブログはそう主張しますが、別の報道では主要プラットフォームはこれを無視しており、採用も停滞しているとされます。**一次的な確認がない → ここでは事実に格上げしません。** Anthropic が自社ドキュメントに `llms.txt` を*公開している*のはパブリッシャーとしての振る舞いであって、Claude が*あなたの* `llms.txt` を*消費する*という意味ではありません。

`llms.txt` は公式標準ではなく、コミュニティの慣習にとどまっています。

<a id="social-sns-surfaces"></a>
## ソーシャル / SNS の面

SNS は独立した「AEO/GEO 施策」というより、**Google Search にインデックスされる公開ウェブの面** + ブランド／プロフィールの結びつきシグナルに近いものです。

| ドキュメント | リンク | SNS との関係 |
|---|---|---|
| Organization 構造化データ | https://developers.google.com/search/docs/appearance/structured-data/organization | ホームページから `sameAs` で SNS／レビューのプロフィールを結びつける |
| ProfilePage 構造化データ | https://developers.google.com/search/docs/appearance/structured-data/profile-page | フォーラムやソーシャルサイトのユーザー／著者／概要プロフィールページ向け |
| DiscussionForumPosting / SocialMediaPosting | https://developers.google.com/search/docs/appearance/structured-data/discussion-forum | コミュニティ／フォーラム／ソーシャルの UGC 投稿向けマークアップ。パブリッシャーが書いた記事には使わない |
| Google Business Profile のソーシャルリンク | https://support.google.com/business/answer/3039617 | 一部アカウントでプラットフォームごとに 1 つリンクを追加可能（Facebook、Instagram、LinkedIn、Pinterest、TikTok、X、YouTube） |
| Search Console のソーシャルチャネル | https://developers.google.com/search/blog/2025/12/social-channels-search-console | サイトと一部ソーシャルチャネルの検索パフォーマンスを Search Console Insights で統合する実験（限定ロールアウト） |

<a id="industry-academic-references"></a>
## 業界・学術リファレンス（二次）

以下は用語が実在することを裏づける資料です。ただし Google のポリシーや順位の事実へは**格上げしません**。

| 出典 | リンク | 用途 |
|---|---|---|
| arXiv — GEO: Generative Engine Optimization | https://arxiv.org/abs/2311.09735 | 「GEO」を定式化した論文。KDD 2024 採択 |
| Semrush — Answer Engine Optimization | https://www.semrush.com/blog/answer-engine-optimization/ | AI 回答でのブランド露出のためのマーケティング実務として AEO を説明 |
| Ahrefs — Answer Engine Optimization | https://ahrefs.com/blog/answer-engine-optimization/ | ダイレクト回答面のための SEO の補完として AEO を説明 |
| Search Engine Journal — Google's guide calls AEO/GEO still SEO | https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/ | Google 公式ガイドに対する業界の読み解き。一次情報源は Google ドキュメントを使うこと |

<a id="what-to-ignore"></a>
## 無視してよいもの（過剰に煽られた主張）

Google の公式スタンスに照らして、以下は警告サインとみなしてください。

- 「Google Search には `llms.txt` が必要だ」
- 「AI 検索には特別／秘密のスキーマが要る」
- 「AI のためにコンテンツを細かく刻まねばならない」
- AI システムのためだけに不自然に書き直した文章
- 人工的な言及ファーミング（mention farming）
- 「AI Overview 1 位保証」のような営業文句

ChatGPT / Perplexity / Claude など複数のエンジンにわたって通用する安全な最大公約数：

- 公開アクセス可能な本文テキスト
- 明確な著者 / 組織 / 日付 / 根拠
- canonical で重複しない URL
- 信頼できる外部引用
- 最新の製品 / 価格 / ポリシー / FAQ 情報
- ブランドと主要エンティティ名の一貫性

<a id="contributing"></a>
## コントリビュート

コントリビュート歓迎です——ただしこのリストには一つだけ厳格なルールがあります。**一次情報源でなければ収録しません。**

- 公式のエンジン／標準ドキュメント → 主要セクション。
- ベンダーのブログ／分析記事 → *業界・学術リファレンス* セクションに、明示的にラベル付けして。決して事実として記述しません。
- 公式の確認がないリバースエンジニアリングの「順位要因」主張 → 却下します。

詳細は [contributing.md](contributing.md) を参照してください。PR や issue を歓迎します。

## ライセンス

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

法律が許す範囲で、著者は本作品に関するすべての著作権および関連する権利を放棄しています。
