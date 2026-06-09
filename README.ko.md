# Awesome GEO [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[English](README.md) | **한국어**

이 문서는 [English README](README.md)의 한국어 번역입니다. 내용이 어긋나면 영어 원문을 기준으로 합니다.

> **생성형 엔진 최적화(Generative Engine Optimization, GEO)**, 답변 엔진 최적화(Answer Engine Optimization, AEO), AI 검색을 위한 엄선된 출처 우선(source-first) 지도입니다. 벤더의 과장 마케팅이 아니라 공식 엔진 문서를 기준으로 정리합니다.

**이 목록의 불편한 핵심 주장:** 검색 엔진의 *공식 문서만 놓고 보면* GEO/AEO는 비밀스러운 새 최적화 분야가 아닙니다. Google Search에서는 AI Overviews, AI Mode 같은 새 답변 표면에 적용되는 기본 SEO입니다. 대부분의 다른 AI 검색 엔진(ChatGPT, Perplexity, Claude)도 공식적으로는 같은 기반을 공유합니다. 즉 크롤링 가능하고, 색인 가능하며, 신뢰할 수 있고, 최신 상태인 콘텐츠입니다. 이들은 별도의 "AI용 콘텐츠 재작성" 가이드를 공개하지 않았습니다. 공식적으로 눈에 띄게 다른 입장을 내는 엔진은 Microsoft Bing/Copilot입니다. 엔진별 진짜 차이는 *글을 어떻게 쓰느냐*보다 각 엔진이 읽는 **검색/검색증강 백엔드**에 있습니다.

여기의 모든 주장은 1차 출처에 연결됩니다. 마케팅 블로그 글은 명확히 표시한 2차 섹션에만 두며, 사실로 승격하지 않습니다.

## 목차

- [핵심 주장](#core-argument)
- [용어 지도](#terminology-map)
- [Google - 공식 문서](#google-official-docs)
- [AI 검색 성과 측정](#measuring-ai-search-performance)
- [엔진별 공식 입장](#per-engine-official-stances)
- [llms.txt - 실제 의미](#llmstxt-what-it-actually-is)
- [소셜 / SNS 표면](#social-sns-surfaces)
- [업계 및 학술 참고자료](#industry-academic-references)
- [무시해도 되는 것](#what-to-ignore)
- [기여하기](#contributing)

<a id="core-argument"></a>
## 핵심 주장

**AEO**(Answer Engine Optimization, 답변 엔진 최적화)와 **GEO**(Generative Engine Optimization, 생성형 엔진 최적화)는 AI 답변에 브랜드나 콘텐츠가 인용되도록 하는 일을 가리키는 실제 업계 용어입니다. AI Overviews, AI Mode, ChatGPT, Perplexity, 음성 검색 같은 표면이 여기에 포함됩니다. **GEO**는 2023년 논문 [*GEO: Generative Engine Optimization*](https://arxiv.org/abs/2311.09735)(KDD 2024)에서 학술적으로 정식화되었습니다.

논쟁 지점은 이 용어가 존재하느냐가 아닙니다. 이들이 **별도의 최적화 시스템**을 설명하느냐입니다. Google의 [생성형 AI 최적화 가이드](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)는 이 용어들이 "온라인에서 흔히 쓰인다"고 인정한 뒤, Google Search에서는 기본 SEO를 계속 적용하면 된다고 분명히 말합니다. AI Overviews / AI Mode를 위해 **특수 스키마, `llms.txt`, AI 전용 마크다운, 콘텐츠 청킹, AI 전용 재작성은 필요하지 않습니다.**

따라서 이 목록은 GEO를 **새 답변 표면에 적용되는 SEO 기본기**로 다룹니다. 단, 엔진별 예외는 1차 출처로 확인된 것만 기록합니다.

<a id="terminology-map"></a>
## 용어 지도

| 용어 | 전체 이름 | 성격 | Google의 공식 입장 |
|---|---|---|---|
| **SEO** | Search Engine Optimization | 기본 시스템: 엔진이 콘텐츠를 이해하고 사용자가 찾도록 돕는 일 | 공식 용어. Google Search Central 문서의 핵심 |
| **AEO** | Answer Engine Optimization | AI/직접답변/음성 답변에 인용되기 위한 업계 용어 | "온라인에서 흔히 쓰이는" 용어로 언급. 별도 Google 시스템은 아님 |
| **GEO** | Generative Engine Optimization | 생성형 답변에서의 노출과 출처 표시를 위한 업계/학술 용어 | "온라인에서 흔히 쓰이는" 용어로 언급. Google Search에서는 SEO 기반으로 취급 |
| **LLMO / AI SEO / AIO** | LLM Optimization 등 | 마케팅 신조어 | Google의 공식 프레임워크가 아님. 각 주장을 출처별로 검증해야 함 |

<a id="google-official-docs"></a>
## Google - 공식 문서

기초입니다. 하나만 읽는다면 첫 번째 행을 읽으세요.

| 문서 | 링크 | 중요한 이유 |
|---|---|---|
| Google Search의 생성형 AI 기능 최적화 | https://developers.google.com/search/docs/fundamentals/ai-optimization-guide | GEO/AEO 질문에 대한 Google의 핵심 공식 답변입니다. Google Search에서 생성형 AI 최적화는 여전히 SEO입니다. `llms.txt`, 청킹, 특수 AI 마크업은 필요하지 않습니다 |
| AI 기능과 웹사이트 | https://developers.google.com/search/docs/appearance/ai-features | 사이트 소유자 관점에서 AI Overviews / AI Mode가 어떻게 작동하는지 설명합니다. 추가 기술 요구사항은 없으며, 색인 가능하고 스니펫 표시 대상이 되는 것이 핵심입니다 |
| SEO 기본 가이드 | https://developers.google.com/search/docs/fundamentals/seo-starter-guide | 구조, 콘텐츠, 링크, 제목, 스니펫, 이미지/동영상, 홍보 등 기본기를 설명합니다 |
| Google Search Essentials | https://developers.google.com/search/docs/essentials | Google Search에 표시되기 위한 최소 기준입니다. 기술 요구사항, 스팸 정책, 주요 권장사항을 포함합니다 |
| 기술 요구사항 | https://developers.google.com/search/docs/crawling-indexing/technical-requirements | Google이 페이지를 가져오고 렌더링하고 색인하기 위한 최소 조건입니다 |
| 구조화된 데이터 소개 | https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data | 구조화된 데이터의 공식 역할은 리치 결과 자격입니다. 특수한 "AI 검색" 스키마가 아닙니다 |
| 스니펫 / 메타 설명 | https://developers.google.com/search/docs/appearance/snippet | 스니펫 표시 자격은 AI 기능 표시 자격과 이어집니다. 미리보기 제어와 메타 설명을 이해해야 합니다 |
| Robots meta / nosnippet / max-snippet | https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag | Search와 AI 기능에 무엇이 표시될지 제어합니다. `nosnippet`, `data-nosnippet`, `max-snippet`, `noindex` |
| Google-Extended | https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended | Gemini/Vertex AI 학습 및 grounding을 제어하는 제품 토큰입니다. Google Search 포함 여부나 순위에는 영향을 주지 않습니다 |

<a id="measuring-ai-search-performance"></a>
## AI 검색 성과 측정

| 문서 | 링크 | 중요한 이유 |
|---|---|---|
| Search Console 생성형 AI 성과 보고서 | https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports | Search Console에서 생성형 AI 성과를 보고하는 공식 블로그입니다(2026-06-03 발표) |
| Search Console의 클릭 / 노출 / 게재순위 | https://support.google.com/webmasters/answer/7042828 | AI Mode / AI Overviews에서 클릭, 노출, 게재순위가 어떻게 집계되는지 설명합니다 |
| AI Overviews 사용자 도움말 | https://support.google.com/websearch/answer/14901683 | 사용자 대상 설명입니다. 핵심 기능이며 완전히 끌 수 있는 것은 아닙니다. Web 필터는 텍스트 링크만 보여줍니다 |
| AI Mode 사용자 도움말 | https://support.google.com/websearch/answer/16296315 | AI Mode / Search Labs / 후속 질문 / agentic 기능을 설명합니다 |

<a id="per-engine-official-stances"></a>
## 엔진별 공식 입장(Google 외)

핵심 질문: *Google은 GEO/AEO가 SEO라고 말합니다. 그렇다면 다른 주요 AI 엔진들은 자기 엔진이 다르다고 공식적으로 말할까요?*

짧은 답: **대부분은 Google과 같은 기반**(크롤링 가능 · 색인 가능 · 신뢰 가능 · 최신 상태)을 공유하며, 공식적인 "비밀 최적화"를 요구하지 않습니다. 분명히 다른 공식 입장을 내는 곳은 **Microsoft Bing/Copilot**입니다. Bing은 스키마 마크업이 자사의 LLM이 콘텐츠를 이해하는 데 도움이 된다고 말하며, 최신성 확보를 위해 IndexNow를 권장합니다. 그리고 엔진 간 진짜 차이는 글쓰기 방식이 아니라 **검색/검색증강 백엔드**입니다. 자체 색인인지, 제3자 검색 공급자인지가 갈립니다.

| 엔진 / 제품 | 검색/검색증강 백엔드(공식) | 공식 퍼블리셔 접근법 | Google의 "SEO면 충분" 입장과 비교 |
|---|---|---|---|
| Google AI Overviews / AI Mode | Google 색인 | Search Essentials + SEO 기본기. 특수 스키마 / `llms.txt` 없음 | 기준선 |
| ChatGPT search(OpenAI) | OAI-SearchBot 크롤링 + 제3자 검색 공급자 | robots.txt에서 `OAI-SearchBot` 허용. `noindex`로 opt out. **별도 콘텐츠 최적화 가이드 없음** | 사실상 동일 |
| Perplexity | PerplexityBot 색인 + Perplexity-User 실시간 fetch | PerplexityBot과 IP 범위 허용. **기술적 접근만 다루며 콘텐츠 전략 없음** | 사실상 동일 |
| Claude web search(Anthropic) | 제3자 검색 공급자(보도상 Brave) + ClaudeBot | 퍼블리셔 최적화 문서 없음. 인라인 인용을 제공하고 1차/검증 가능한 출처를 선호 | 사실상 동일 |
| Microsoft Bing / Copilot | Bing 색인 | **스키마가 자사 LLM에 도움이 된다고 공식 언급** + IndexNow 최신성 + 명확한 제목/표/FAQ. Bing Webmaster Tools의 AI Performance report | **다름** - 생성형 검색 특화 가이드를 공개 |

플랫폼별 1차 출처:

- **OpenAI / ChatGPT** - [퍼블리셔 및 개발자 FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq), [ChatGPT search](https://help.openai.com/en/articles/9237897-chatgpt-search), [봇 / 크롤러](https://developers.openai.com/api/docs/bots). `OAI-SearchBot`(검색/제품)은 `GPTBot`(학습)과 별개입니다. 공식 가이드는 "막지 말거나, 제외하려면 `noindex`를 쓰라"이지 "AI용으로 콘텐츠를 재작성하라"가 아닙니다.
- **Perplexity** - [크롤러](https://docs.perplexity.ai/docs/resources/perplexity-crawlers), [robots.txt 정책](https://www.perplexity.ai/help-center/en/articles/10354969-how-does-perplexity-follow-robots-txt). PerplexityBot은 검색 노출용이며 학습용이 아닙니다. Perplexity-User는 사용자 트리거 fetch입니다. 문서는 기술적 접근만 다룹니다. 엔티티 명확성, 앞부분 강조, Reddit 인용 팁 같은 내용은 제3자 역공학이며 **공식 입장이 아니므로** 여기서 사실로 승격하지 않습니다.
- **Anthropic / Claude** - [web search tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool), [web search 활성화 및 사용](https://support.claude.com/en/articles/10684626-enabling-and-using-web-search). 기반 검색은 제3자 공급자에 의존합니다(보도상 Brave Search). 응답에는 인라인 인용이 붙고, 검증 가능한 1차 출처를 보수적으로 선호합니다. "Claude에 잡힌다"는 것은 대체로 "신뢰할 수 있는 1차 출처로서 검색 공급자의 색인에 들어간다"는 뜻에 가깝습니다.
- **Microsoft Bing / Copilot** - [Bing Webmaster Tools의 AI Performance](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview), [Bing/Copilot이 LLM에 스키마를 활용한다는 보도](https://searchengineland.com/microsoft-bing-copilot-use-schema-for-its-llms-453455). 이 목록 중 가장 적극적인 입장입니다. 다만 Microsoft의 Fabrice Canel도 여전히 "less is more: 양보다 정확성"을 강조합니다.

<a id="llmstxt-what-it-actually-is"></a>
## llms.txt - 실제 의미

**기원:** **Jeremy Howard**(fast.ai / Answer.AI 공동창업자)가 2024-09-03 answer.ai 글과 [`llmstxt.org`](https://llmstxt.org) 사양을 통해 제안했습니다. 사이트 루트의 `/llms.txt`에 두는 선별된 마크다운 색인으로, 추론 시점에 LLM이 사이트를 활용하도록 돕기 위한 것입니다. schema.org 같은 검색 컨소시엄 표준이 아니라 **개인 주도의 커뮤니티 제안**입니다. 이것이 아래 지원 격차의 근본 원인입니다.

**지원 상태(2026년 1분기 기준):**

- **Google** - 공식 미지원. John Mueller(2025)와 Gary Illyes(Search Central Live 2025-07)는 현재 어떤 AI 시스템도 `llms.txt`를 사용하지 않으며 Google도 계획이 없다고 말했습니다.
- **OpenAI / 기타** - GPTBot/ChatGPT가 `llms.txt`를 파싱한다는 공식 발표가 없습니다.
- **"Anthropic/Perplexity 지원 확인"** - 일부 SEO 블로그가 이렇게 주장하지만, 다른 보도는 주요 플랫폼이 이를 무시하며 도입이 정체됐다고 말합니다. **1차 확인 없음 → 여기서는 사실로 승격하지 않습니다.** Anthropic이 자기 문서에 `llms.txt`를 *게시*했다는 것은 퍼블리셔 행동일 뿐, Claude가 여러분의 `llms.txt`를 *소비*한다는 뜻은 아닙니다.

`llms.txt`는 공식 표준이 아니라 커뮤니티 관습으로 남아 있습니다.

<a id="social-sns-surfaces"></a>
## 소셜 / SNS 표면

SNS는 별도의 "AEO/GEO 전략"이라기보다 **Google Search에 색인되는 공개 웹 표면** + 브랜드/프로필 연결 신호에 가깝습니다.

| 문서 | 링크 | SNS와의 관계 |
|---|---|---|
| Organization 구조화된 데이터 | https://developers.google.com/search/docs/appearance/structured-data/organization | 홈페이지에서 `sameAs`로 SNS/리뷰 프로필을 연결합니다 |
| ProfilePage 구조화된 데이터 | https://developers.google.com/search/docs/appearance/structured-data/profile-page | 포럼 및 소셜 사이트의 사용자/작성자/about 프로필 페이지용입니다 |
| DiscussionForumPosting / SocialMediaPosting | https://developers.google.com/search/docs/appearance/structured-data/discussion-forum | 커뮤니티/포럼/소셜 플랫폼의 UGC 게시물 마크업입니다. 퍼블리셔 작성 기사에는 쓰지 않습니다 |
| Google Business Profile 소셜 링크 | https://support.google.com/business/answer/3039617 | 일부 계정에서 Facebook, Instagram, LinkedIn, Pinterest, TikTok, X, YouTube 링크를 플랫폼별 하나씩 추가할 수 있습니다 |
| Search Console의 소셜 채널 | https://developers.google.com/search/blog/2025/12/social-channels-search-console | 사이트와 일부 소셜 채널의 검색 성과를 Search Console Insights에서 통합하는 실험입니다(제한적 rollout) |

<a id="industry-academic-references"></a>
## 업계 및 학술 참고자료(2차)

아래 자료들은 용어가 실제로 존재한다는 점을 보강합니다. 단, Google 정책이나 순위 사실로 승격하지 않습니다.

| 출처 | 링크 | 용도 |
|---|---|---|
| arXiv - GEO: Generative Engine Optimization | https://arxiv.org/abs/2311.09735 | "GEO"를 정식화한 논문입니다. KDD 2024 채택 |
| Semrush - Answer Engine Optimization | https://www.semrush.com/blog/answer-engine-optimization/ | AI 답변에서 브랜드 노출을 위한 마케팅 실무로 AEO를 설명합니다 |
| Ahrefs - Answer Engine Optimization | https://ahrefs.com/blog/answer-engine-optimization/ | 직접답변 표면을 위한 SEO 보완 개념으로 AEO를 설명합니다 |
| Search Engine Journal - Google's guide calls AEO/GEO still SEO | https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/ | Google 공식 가이드에 대한 업계 해석입니다. Google 문서를 1차 출처로 유지하세요 |

<a id="what-to-ignore"></a>
## 무시해도 되는 것(과장된 주장)

Google의 공식 입장에 따르면 아래는 경고 신호로 보세요.

- "Google Search에는 `llms.txt`가 필요하다"
- "AI 검색에는 특수/비밀 스키마가 필요하다"
- "AI를 위해 콘텐츠를 아주 작은 조각으로 쪼개야 한다"
- AI 시스템만을 위해 어색하게 재작성한 문장
- 인위적인 언급 농사
- "AI Overview 1위 보장" 영업 문구

ChatGPT / Perplexity / Claude / 기타 엔진 전반에서 통하는 안전한 공통분모:

- 공개적으로 접근 가능한 원문 텍스트
- 명확한 작성자 / 조직 / 날짜 / 근거
- canonical, 중복되지 않는 URL
- 신뢰할 수 있는 외부 인용
- 최신 제품 / 가격 / 정책 / FAQ 정보
- 브랜드와 핵심 엔티티 이름의 일관성

<a id="contributing"></a>
## 기여하기

기여를 환영합니다. 단, 이 목록에는 하나의 강한 규칙이 있습니다. **1차 출처가 아니면 들어가지 않습니다.**

- 공식 엔진/표준 문서 → 주요 섹션.
- 벤더 블로그 / 분석 글 → 명확히 표시한 *업계 및 학술 참고자료* 섹션. 사실로 서술하지 않습니다.
- 공식 확인 없는 역공학 "순위 요인" 주장 → 거절.

[contributing.md](contributing.md)를 참고하세요. PR이나 이슈를 열어주세요.

## 라이선스

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

법이 허용하는 범위에서 저자들은 이 작업물에 대한 모든 저작권 및 관련 권리를 포기했습니다.
