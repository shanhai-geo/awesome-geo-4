<p align="center">
  <img src=".github/logo.svg" alt="awesome-geo" width="128">
</p>

# Awesome GEO [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[English](README.md) | [한국어](README.ko.md) | **中文** | [日本語](README.ja.md) | [Español](README.es.md) | [Français](README.fr.md)

本文档是英文 [README](README.md) 的中文译本。若两者出现分歧，以英文原文为准。

> 一份以**生成式引擎优化（Generative Engine Optimization, GEO）**、答案引擎优化（Answer Engine Optimization, AEO）与 AI 搜索为主题的「来源优先（source-first）」地图。它建立在各引擎公开的官方文档之上，而非厂商的营销话术。

**这份清单令人不安的核心论点：** 只看搜索引擎自己公开的官方文档，GEO/AEO 并不是一门新出现的秘密优化学科。对 Google Search 而言，它只是把基础 SEO 应用到 AI Overviews、AI Mode 这些新的答案界面上。ChatGPT、Perplexity、Claude 等其他 AI 搜索引擎的官方立场也共享同一个基础——可被抓取、可被索引、可信、保持新鲜——并且都**没有**发布任何「为 AI 重写内容」的单独指南。唯一在官方层面明显持不同立场的引擎是 Microsoft Bing/Copilot。引擎之间真正的差异，不在于*你怎么写*，而在于每个引擎所读取的**检索后端（retrieval backend）**。

本文档中的每一项主张都链接到第一手来源。营销博客文章只放在明确标注的二级章节，绝不被提升为事实。

## 目录

- [核心论点](#core-argument)
- [术语地图](#terminology-map)
- [Google — 官方文档](#google-official-docs)
- [衡量 AI 搜索表现](#measuring-ai-search-performance)
- [各引擎的官方立场](#per-engine-official-stances)
- [llms.txt — 它到底是什么](#llmstxt-what-it-actually-is)
- [社交 / SNS 界面](#social-sns-surfaces)
- [行业与学术参考资料](#industry-academic-references)
- [可以忽略的内容](#what-to-ignore)
- [参与贡献](#contributing)

<a id="core-argument"></a>
## 核心论点

**AEO**（Answer Engine Optimization，答案引擎优化）与 **GEO**（Generative Engine Optimization，生成式引擎优化）是被广泛使用的真实行业术语，指的是让品牌或内容在 AI 答案中被引用——包括 AI Overviews、AI Mode、ChatGPT、Perplexity、语音搜索等界面。其中 **GEO** 由 2023 年的论文 [*GEO: Generative Engine Optimization*](https://arxiv.org/abs/2311.09735)（KDD 2024）在学术上加以正式化。

有争议的并不是这些术语是否存在，而是它们是否描述了一个**独立的优化体系**。Google 的[生成式 AI 优化指南](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)承认这些术语「在网上很常见」，但随即明确指出：对 Google Search 而言，你只需继续应用基础 SEO。为了 AI Overviews / AI Mode，**不需要任何特殊 schema、不需要 `llms.txt`、不需要 AI 专用 markdown、不需要内容分块、不需要为 AI 重写内容。**

因此本清单把 GEO 视为**应用于新答案界面的 SEO 基本功**——其中针对各引擎的例外，只记录有第一手来源确认的，绝不凭空臆造。

<a id="terminology-map"></a>
## 术语地图

| 术语 | 全称 | 性质 | Google 的官方立场 |
|---|---|---|---|
| **SEO** | Search Engine Optimization | 基础体系：帮助引擎理解内容、帮助用户找到内容 | 官方术语。Google Search Central 文档的核心 |
| **AEO** | Answer Engine Optimization | 用于在 AI／直接／语音答案中被引用的行业术语 | 作为「网上常见」的术语被提及。并非独立的 Google 体系 |
| **GEO** | Generative Engine Optimization | 用于在生成式答案中获得曝光与署名的行业／学术术语 | 作为「网上常见」被提及。在 Google Search 中按 SEO 基础对待 |
| **LLMO / AI SEO / AIO** | LLM Optimization 等 | 营销新造词 | 并非 Google 的官方框架——须按来源逐条核实 |

<a id="google-official-docs"></a>
## Google — 官方文档

这是基础。如果只读一行，请读第一行。

| 文档 | 链接 | 为何重要 |
|---|---|---|
| 针对 Google Search 生成式 AI 功能的优化 | https://developers.google.com/search/docs/fundamentals/ai-optimization-guide | Google 对 GEO/AEO 问题的核心官方回答。在 Google Search 中，针对生成式 AI 的优化仍然是 SEO；不需要 `llms.txt`、分块或特殊 AI 标记 |
| AI 功能与你的网站 | https://developers.google.com/search/docs/appearance/ai-features | 从站点所有者角度说明 AI Overviews / AI Mode 如何运作。没有额外技术要求，关键是可被索引并具备摘要展示资格 |
| SEO 入门指南 | https://developers.google.com/search/docs/fundamentals/seo-starter-guide | 基本功：结构、内容、链接、标题、摘要、图片／视频、推广 |
| Google Search Essentials | https://developers.google.com/search/docs/essentials | 出现在 Google Search 的最低门槛：技术要求、垃圾内容政策、关键最佳实践 |
| 技术要求 | https://developers.google.com/search/docs/crawling-indexing/technical-requirements | Google 抓取、渲染并索引页面的最低条件 |
| 结构化数据简介 | https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data | 结构化数据的官方作用是获得富结果资格——而非某种特殊的「AI 搜索」schema |
| 摘要 / meta description | https://developers.google.com/search/docs/appearance/snippet | 摘要展示资格关系到 AI 功能展示资格；需理解预览控制与 meta description |
| Robots meta / nosnippet / max-snippet | https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag | 控制在 Search 与 AI 功能中展示什么：`nosnippet`、`data-nosnippet`、`max-snippet`、`noindex` |
| Google-Extended | https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended | 用于控制 Gemini/Vertex AI 训练与 grounding 的产品令牌。不影响 Google Search 的收录或排名 |

<a id="measuring-ai-search-performance"></a>
## 衡量 AI 搜索表现

| 文档 | 链接 | 为何重要 |
|---|---|---|
| Search Console 生成式 AI 表现报告 | https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports | 关于在 Search Console 中报告生成式 AI 表现的官方博客（2026-06-03 发布） |
| Search Console 中的点击 / 展示 / 排名 | https://support.google.com/webmasters/answer/7042828 | 说明在 AI Mode / AI Overviews 中如何统计点击、展示与排名 |
| AI Overviews（用户帮助） | https://support.google.com/websearch/answer/14901683 | 面向用户的说明。属核心功能，无法完全关闭；Web 过滤器只显示文本链接 |
| AI Mode（用户帮助） | https://support.google.com/websearch/answer/16296315 | AI Mode / Search Labs / 追问 / agentic 能力的说明 |

<a id="per-engine-official-stances"></a>
## 各引擎的官方立场（Google 之外）

核心问题是：*Google 说 GEO/AEO 就是 SEO，那么其他主要 AI 引擎是否在官方层面声称自己不同？*

简短的答案是：**多数引擎共享 Google 的基础**（可抓取 · 可索引 · 可信 · 新鲜），不要求任何官方的「秘密优化」。唯一持明显不同官方立场的是 **Microsoft Bing/Copilot**：Bing 表示 schema 标记有助于其 LLM 理解内容，并推荐用 IndexNow 保持新鲜度。而引擎之间真正的差异在于**检索后端**——用自家索引，还是用第三方搜索供应商——而非写作方式。

| 引擎 / 产品 | 检索后端（官方） | 官方发布者建议 | 与 Google「SEO 就够了」对比 |
|---|---|---|---|
| Google AI Overviews / AI Mode | Google 索引 | Search Essentials + SEO 基本功。无特殊 schema／`llms.txt` | 基准线 |
| ChatGPT search（OpenAI） | OAI-SearchBot 抓取 + 第三方搜索供应商 | 在 robots.txt 中允许 `OAI-SearchBot`，要排除则用 `noindex`。**没有单独的内容优化指南** | 实际相同 |
| Perplexity | PerplexityBot 索引 + Perplexity-User 实时抓取 | 允许 PerplexityBot 与 IP 段。**只涉及技术访问，没有内容策略** | 实际相同 |
| Claude web search（Anthropic） | 第三方搜索供应商（据报道为 Brave）+ ClaudeBot | 没有发布者优化文档。提供内联引用，偏好第一手／可验证来源 | 实际相同 |
| Microsoft Bing / Copilot | Bing 索引 | **官方表示 schema 有助于其 LLM** + IndexNow 新鲜度 + 清晰的标题／表格／FAQ。Bing Webmaster Tools 中的 AI Performance 报告 | **不同**——发布了面向生成式搜索的专门指南 |

各平台的第一手来源：

- **OpenAI / ChatGPT** — [发布者与开发者 FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)、[ChatGPT search](https://help.openai.com/en/articles/9237897-chatgpt-search)、[bots / crawlers](https://developers.openai.com/api/docs/bots)。`OAI-SearchBot`（搜索／产品）与 `GPTBot`（训练）是分开的。官方建议是「不要屏蔽它，或用 `noindex` 来排除」，而不是「为 AI 重写内容」。
- **Perplexity** — [爬虫](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)、[robots.txt 政策](https://www.perplexity.ai/help-center/en/articles/10354969-how-does-perplexity-follow-robots-txt)。PerplexityBot 用于搜索曝光而非训练，Perplexity-User 是用户触发的抓取。文档只涉及技术访问。「实体清晰度」「把要点前置」「Reddit 引用更有利」等技巧是第三方逆向工程，**并非官方立场**，因此本文不将其提升为事实。
- **Anthropic / Claude** — [web search tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool)、[启用并使用 web search](https://support.claude.com/en/articles/10684626-enabling-and-using-web-search)。底层检索依赖第三方供应商（据报道为 Brave Search），回答附带内联引用，并保守地偏好可验证的第一手来源。「被 Claude 引用」基本上等同于「作为可信的第一手来源被收录进该检索供应商的索引」。
- **Microsoft Bing / Copilot** — [Bing Webmaster Tools 中的 AI Performance](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)、[关于 Bing/Copilot 为其 LLM 使用 schema 的报道](https://searchengineland.com/microsoft-bing-copilot-use-schema-for-its-llms-453455)。这是本清单中态度最鲜明的一个。不过 Microsoft 的 Fabrice Canel 仍然强调「less is more——重在精确，而非数量」。

<a id="llmstxt-what-it-actually-is"></a>
## llms.txt — 它到底是什么

**起源：** 由 **Jeremy Howard**（fast.ai / Answer.AI 联合创始人）于 2024-09-03 通过一篇 answer.ai 文章和 [`llmstxt.org`](https://llmstxt.org) 规范提出。它是放在站点根目录 `/llms.txt` 的一份经过筛选的 markdown 索引，意在帮助 LLM 在推理时利用该站点。它是**由个人主导的社区提案**，而非像 schema.org 那样的搜索联盟标准——这正是下文「支持缺口」的根本原因。

**支持现状（截至 2026 年第一季度）：**

- **Google** — 官方不支持。John Mueller（2025）与 Gary Illyes（Search Central Live 2025-07）表示，目前没有任何 AI 系统使用 `llms.txt`，Google 也没有相关计划。
- **OpenAI / 其他** — 没有官方公告表示 GPTBot/ChatGPT 会解析 `llms.txt`。
- **「Anthropic／Perplexity 已确认支持」** — 一些 SEO 博客如此声称，但其他报道指出主要平台对其视而不见，采用也已停滞。**没有第一手确认 → 本文不将其提升为事实。** Anthropic 在自家文档里*发布* `llms.txt`，这是发布者的行为，并不意味着 Claude 会*消费你的* `llms.txt`。

`llms.txt` 仍然是一种社区惯例，而非官方标准。

<a id="social-sns-surfaces"></a>
## 社交 / SNS 界面

与其说 SNS 是独立的「AEO/GEO 打法」，不如说它是**被 Google Search 索引的公开网页界面** + 品牌／资料关联信号。

| 文档 | 链接 | 与 SNS 的关系 |
|---|---|---|
| Organization 结构化数据 | https://developers.google.com/search/docs/appearance/structured-data/organization | 在主页通过 `sameAs` 关联 SNS／评价资料 |
| ProfilePage 结构化数据 | https://developers.google.com/search/docs/appearance/structured-data/profile-page | 用于论坛与社交站点的用户／作者／简介资料页 |
| DiscussionForumPosting / SocialMediaPosting | https://developers.google.com/search/docs/appearance/structured-data/discussion-forum | 社区／论坛／社交平台的 UGC 帖子标记。不用于发布者撰写的文章 |
| Google Business Profile 社交链接 | https://support.google.com/business/answer/3039617 | 部分账户可为每个平台添加一个链接（Facebook、Instagram、LinkedIn、Pinterest、TikTok、X、YouTube） |
| Search Console 中的社交渠道 | https://developers.google.com/search/blog/2025/12/social-channels-search-console | 在 Search Console Insights 中整合站点与部分社交渠道搜索表现的实验（有限推出） |

<a id="industry-academic-references"></a>
## 行业与学术参考资料（二级）

以下资料佐证这些术语确实存在；但它们**不会**被提升为 Google 政策或排名事实。

| 来源 | 链接 | 用途 |
|---|---|---|
| arXiv — GEO: Generative Engine Optimization | https://arxiv.org/abs/2311.09735 | 将「GEO」正式化的论文。被 KDD 2024 接收 |
| Semrush — Answer Engine Optimization | https://www.semrush.com/blog/answer-engine-optimization/ | 把 AEO 阐述为在 AI 答案中提升品牌曝光的营销实践 |
| Ahrefs — Answer Engine Optimization | https://ahrefs.com/blog/answer-engine-optimization/ | 把 AEO 阐述为面向直接答案界面的 SEO 补充 |
| Search Engine Journal — Google's guide calls AEO/GEO still SEO | https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/ | 业界对 Google 官方指南的解读。请把 Google 文档作为第一手来源 |

<a id="what-to-ignore"></a>
## 可以忽略的内容（被过度炒作的说法）

依据 Google 的官方立场，请把以下视为警示信号：

- 「Google Search 需要 `llms.txt`」
- 「AI 搜索需要某种特殊／秘密的 schema」
- 「必须把内容切成很碎的小块给 AI」
- 仅为 AI 系统而生硬重写的句子
- 人为的提及农场（mention farming）
- 「保证 AI Overview 排名第一」之类的销售话术

在 ChatGPT / Perplexity / Claude 等众多引擎间都通用的安全公约数：

- 可公开访问的原文文本
- 明确的作者 / 机构 / 日期 / 依据
- canonical、不重复的 URL
- 可信的外部引用
- 最新的产品 / 价格 / 政策 / FAQ 信息
- 品牌与关键实体名称的一致性

<a id="contributing"></a>
## 参与贡献

欢迎贡献——但本清单有一条硬性规则：**没有第一手来源就不收录。**

- 官方引擎／标准文档 → 主要章节。
- 厂商博客／分析文章 → *行业与学术参考资料* 章节，并明确标注，绝不当作事实陈述。
- 没有官方确认的逆向工程「排名因素」主张 → 拒收。

详见 [contributing.md](contributing.md)。欢迎提交 PR 或开 issue。

## 许可证

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

在法律允许的范围内，作者已放弃本作品的一切版权及相关权利。
