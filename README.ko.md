# Awesome GEO [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[English](README.md) | **한국어**

영어 [README](README.md)를 한국어로 옮긴 문서입니다. 두 버전이 어긋날 때는 영어 원문이 기준입니다.

> **생성형 엔진 최적화(Generative Engine Optimization, GEO)**, 답변 엔진 최적화(Answer Engine Optimization, AEO), 그리고 AI 검색을 다루는 출처 우선(source-first) 지도입니다. 벤더 마케팅이 아니라 엔진들이 직접 낸 공식 문서만 깔고 갑니다.

**이 목록이 던지는 불편한 주장 하나.** 검색 엔진들이 *스스로* 내놓은 공식 문서만 읽어 보면, GEO/AEO는 따로 배워야 할 비밀 최적화 분야가 아닙니다. Google Search 입장에서는 그냥 기본 SEO를, AI Overviews나 AI Mode 같은 새 답변 화면에 적용하는 일일 뿐입니다. ChatGPT, Perplexity, Claude 같은 다른 AI 검색 엔진들도 공식 입장은 대체로 같습니다 — 크롤링되고, 색인되고, 믿을 만하고, 최신이면 됩니다. "AI용으로 글을 다시 써라"는 식의 별도 가이드는 어느 쪽도 내놓지 않았습니다. 눈에 띄게 다른 목소리를 내는 곳은 Microsoft Bing/Copilot 하나뿐입니다. 결국 엔진끼리 진짜 갈리는 지점은 *글을 어떻게 쓰느냐*가 아니라, 각 엔진이 무엇을 읽어 오는가 — 즉 **검색 백엔드**입니다.

여기 적힌 모든 주장에는 1차 출처 링크가 달려 있습니다. 마케팅 블로그 글은 따로 표시한 2차 섹션에만 모아 뒀고, 절대 사실로 끌어올리지 않습니다.

## 목차

- [핵심 주장](#core-argument)
- [용어 지도](#terminology-map)
- [Google — 공식 문서](#google-official-docs)
- [AI 검색 성과 측정](#measuring-ai-search-performance)
- [엔진별 공식 입장](#per-engine-official-stances)
- [llms.txt — 정체가 뭐냐](#llmstxt-what-it-actually-is)
- [소셜 / SNS 표면](#social-sns-surfaces)
- [업계 · 학술 참고자료](#industry-academic-references)
- [걸러도 되는 것](#what-to-ignore)
- [기여하기](#contributing)

<a id="core-argument"></a>
## 핵심 주장

**AEO**(Answer Engine Optimization, 답변 엔진 최적화)와 **GEO**(Generative Engine Optimization, 생성형 엔진 최적화)는 실제로 널리 쓰이는 업계 용어입니다. AI Overviews, AI Mode, ChatGPT, Perplexity, 음성 검색 같은 곳에서 브랜드나 콘텐츠가 인용되게 만드는 일을 가리키죠. 특히 **GEO**는 2023년 논문 [*GEO: Generative Engine Optimization*](https://arxiv.org/abs/2311.09735)(KDD 2024)으로 학계에서도 정식 이름을 얻었습니다.

다툼이 있는 건 용어의 존재 여부가 아닙니다. 이게 **별도의 최적화 체계**를 가리키느냐가 진짜 쟁점입니다. Google이 낸 [생성형 AI 최적화 가이드](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)는 이 용어들이 "온라인에서 흔히 쓰인다"고 인정하면서도, 결론은 단호합니다. Google Search에서는 기본 SEO를 그대로 하면 된다는 겁니다. AI Overviews나 AI Mode를 노린다고 **특수 스키마, `llms.txt`, AI 전용 마크다운, 콘텐츠 쪼개기, AI용 재작성 같은 건 하나도 필요 없다**고 못 박습니다.

그래서 이 목록은 GEO를 **새 답변 화면에 적용되는 SEO 기본기**로 봅니다. 엔진별 예외가 있긴 한데, 지어낸 게 아니라 1차 출처로 확인된 것만 적었습니다.

<a id="terminology-map"></a>
## 용어 지도

| 용어 | 풀네임 | 성격 | Google의 공식 입장 |
|---|---|---|---|
| **SEO** | Search Engine Optimization | 토대가 되는 체계. 엔진이 콘텐츠를 이해하고 사용자가 찾게 돕는 일 | 공식 용어. Google Search Central 문서의 중심 |
| **AEO** | Answer Engine Optimization | AI·직접답변·음성 답변에 인용되기 위한 업계 용어 | "온라인에서 흔한" 용어로 언급. Google의 별도 체계는 아님 |
| **GEO** | Generative Engine Optimization | 생성형 답변에서의 노출·출처 표시를 위한 업계·학술 용어 | "온라인에서 흔한" 용어로 언급. Google Search에선 SEO 기반으로 취급 |
| **LLMO / AI SEO / AIO** | LLM Optimization 등 | 마케팅 신조어 | Google의 공식 틀이 아님. 주장마다 출처를 따져 봐야 함 |

<a id="google-official-docs"></a>
## Google — 공식 문서

여기가 토대입니다. 딱 하나만 읽을 거면 첫 줄을 읽으세요.

| 문서 | 링크 | 왜 중요한가 |
|---|---|---|
| Google Search의 생성형 AI 기능 최적화 | https://developers.google.com/search/docs/fundamentals/ai-optimization-guide | GEO/AEO 질문에 대한 Google의 공식 정답. Google Search에서 생성형 AI 최적화는 여전히 SEO다. `llms.txt`도, 청킹도, 특수 AI 마크업도 필요 없다 |
| AI 기능과 당신의 웹사이트 | https://developers.google.com/search/docs/appearance/ai-features | 사이트 운영자 눈높이에서 본 AI Overviews / AI Mode 작동 방식. 추가 기술 요건은 없고, 색인되고 스니펫에 뜰 자격만 갖추면 된다 |
| SEO 기본 가이드 | https://developers.google.com/search/docs/fundamentals/seo-starter-guide | 구조·콘텐츠·링크·제목·스니펫·이미지/동영상·홍보까지 기본기 전부 |
| Google Search Essentials | https://developers.google.com/search/docs/essentials | Google Search에 뜨기 위한 최소 기준. 기술 요건, 스팸 정책, 핵심 권장사항 |
| 기술 요구사항 | https://developers.google.com/search/docs/crawling-indexing/technical-requirements | Google이 페이지를 가져오고 렌더링하고 색인하기 위한 최소 조건 |
| 구조화 데이터 소개 | https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data | 구조화 데이터의 공식 역할은 리치 결과 자격일 뿐, 특수한 "AI 검색" 스키마가 아니다 |
| 스니펫 / 메타 설명 | https://developers.google.com/search/docs/appearance/snippet | 스니펫에 뜰 자격이 AI 기능 노출로 이어진다. 미리보기 제어와 메타 설명을 알아 두자 |
| Robots meta / nosnippet / max-snippet | https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag | Search와 AI 기능에 무엇을 보여줄지 제어. `nosnippet`, `data-nosnippet`, `max-snippet`, `noindex` |
| Google-Extended | https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended | Gemini/Vertex AI 학습·grounding을 제어하는 제품 토큰. Google Search 포함 여부나 순위에는 영향 없음 |

<a id="measuring-ai-search-performance"></a>
## AI 검색 성과 측정

| 문서 | 링크 | 왜 중요한가 |
|---|---|---|
| Search Console 생성형 AI 성과 보고서 | https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports | Search Console에서 생성형 AI 성과를 보고하는 공식 블로그(2026-06-03 발표) |
| Search Console의 클릭 / 노출 / 게재순위 | https://support.google.com/webmasters/answer/7042828 | AI Mode / AI Overviews에서 클릭·노출·게재순위가 어떻게 집계되는지 |
| AI Overviews 사용자 도움말 | https://support.google.com/websearch/answer/14901683 | 사용자용 설명. 핵심 기능이라 완전히 끌 수는 없고, Web 필터를 쓰면 텍스트 링크만 나온다 |
| AI Mode 사용자 도움말 | https://support.google.com/websearch/answer/16296315 | AI Mode / Search Labs / 후속 질문 / agentic 기능 설명 |

<a id="per-engine-official-stances"></a>
## 엔진별 공식 입장 (Google 외)

이 섹션의 질문은 이겁니다. *Google은 GEO/AEO가 곧 SEO라고 말한다. 그럼 다른 주요 AI 엔진들은 "우리는 다르다"고 공식적으로 말할까?*

짧게 답하면, **대부분은 Google과 같은 토대**(크롤링 · 색인 · 신뢰 · 최신)를 공유하고, "비밀 최적화" 같은 걸 공식적으로 요구하지 않습니다. 분명히 결이 다른 곳은 **Microsoft Bing/Copilot** 하나입니다. Bing은 스키마 마크업이 자사 LLM의 콘텐츠 이해에 도움이 된다고 직접 말하고, 최신성 확보용으로 IndexNow를 권합니다. 그리고 엔진끼리 진짜 갈리는 지점은 글쓰기가 아니라 **검색 백엔드** — 자체 색인을 쓰느냐, 제3자 검색 공급자를 쓰느냐입니다.

| 엔진 / 제품 | 검색 백엔드(공식) | 공식 퍼블리셔 가이드 | Google "SEO면 충분"과 비교 |
|---|---|---|---|
| Google AI Overviews / AI Mode | Google 색인 | Search Essentials + SEO 기본기. 특수 스키마·`llms.txt` 없음 | 기준선 |
| ChatGPT search(OpenAI) | OAI-SearchBot 크롤링 + 제3자 검색 공급자 | robots.txt에서 `OAI-SearchBot` 허용, 빼고 싶으면 `noindex`. **별도 콘텐츠 최적화 가이드 없음** | 사실상 동일 |
| Perplexity | PerplexityBot 색인 + Perplexity-User 실시간 fetch | PerplexityBot과 IP 범위 허용. **기술 접근만 다루고 콘텐츠 전략은 없음** | 사실상 동일 |
| Claude web search(Anthropic) | 제3자 검색 공급자(보도상 Brave) + ClaudeBot | 퍼블리셔 최적화 문서 없음. 인라인 인용을 달고 1차·검증 가능한 출처를 선호 | 사실상 동일 |
| Microsoft Bing / Copilot | Bing 색인 | **스키마가 자사 LLM에 도움 된다고 공식 언급** + IndexNow 최신성 + 명확한 제목·표·FAQ. Bing Webmaster Tools의 AI Performance 보고서 | **다름** — 생성형 검색 전용 가이드를 공개 |

플랫폼별 1차 출처:

- **OpenAI / ChatGPT** — [퍼블리셔·개발자 FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq), [ChatGPT search](https://help.openai.com/en/articles/9237897-chatgpt-search), [봇·크롤러](https://developers.openai.com/api/docs/bots). `OAI-SearchBot`(검색·제품)과 `GPTBot`(학습)은 별개입니다. 공식 안내는 "막지 마라, 빼고 싶으면 `noindex`를 써라"지 "AI용으로 글을 다시 써라"가 아닙니다.
- **Perplexity** — [크롤러](https://docs.perplexity.ai/docs/resources/perplexity-crawlers), [robots.txt 정책](https://www.perplexity.ai/help-center/en/articles/10354969-how-does-perplexity-follow-robots-txt). PerplexityBot은 검색 노출용이지 학습용이 아니고, Perplexity-User는 사용자가 눌렀을 때 가져오는 fetch입니다. 문서는 기술 접근만 다룹니다. "엔티티 명확성", "앞부분에 핵심 배치", "Reddit 인용이 유리" 같은 팁은 제3자가 역공학한 것이라 **공식이 아니므로** 여기서 사실로 올리지 않습니다.
- **Anthropic / Claude** — [web search tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool), [web search 켜고 쓰기](https://support.claude.com/en/articles/10684626-enabling-and-using-web-search). 바탕 검색은 제3자 공급자(보도상 Brave Search)에 의존하고, 응답에는 인라인 인용이 붙으며 검증 가능한 1차 출처를 보수적으로 선호합니다. "Claude에 잡힌다"는 건 결국 "신뢰할 만한 1차 출처로서 그 검색 공급자 색인에 들어가 있다"에 가깝습니다.
- **Microsoft Bing / Copilot** — [Bing Webmaster Tools의 AI Performance](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview), [Bing/Copilot이 LLM에 스키마를 쓴다는 보도](https://searchengineland.com/microsoft-bing-copilot-use-schema-for-its-llms-453455). 이 목록에서 가장 목소리가 또렷한 쪽입니다. 그래도 Microsoft의 Fabrice Canel은 여전히 "less is more — 양보다 정확성"을 강조합니다.

<a id="llmstxt-what-it-actually-is"></a>
## llms.txt — 정체가 뭐냐

**출발점.** **Jeremy Howard**(fast.ai / Answer.AI 공동창업자)가 2024-09-03 answer.ai 글과 [`llmstxt.org`](https://llmstxt.org) 사양으로 제안했습니다. 사이트 루트 `/llms.txt`에 두는 선별된 마크다운 색인으로, 추론 시점에 LLM이 사이트를 잘 활용하도록 돕자는 취지입니다. 다만 schema.org 같은 검색 컨소시엄 표준이 아니라 **한 사람이 띄운 커뮤니티 제안**이라는 점 — 이게 아래 지원 격차의 근본 원인입니다.

**지원 현황(2026년 1분기 기준):**

- **Google** — 공식 미지원. John Mueller(2025)와 Gary Illyes(Search Central Live 2025-07)는 현재 어떤 AI 시스템도 `llms.txt`를 쓰지 않고 Google도 계획이 없다고 밝혔습니다.
- **OpenAI / 그 외** — GPTBot이나 ChatGPT가 `llms.txt`를 파싱한다는 공식 발표가 없습니다.
- **"Anthropic·Perplexity가 지원한다더라"** — 일부 SEO 블로그가 그렇게 주장하지만, 다른 보도는 주요 플랫폼이 그냥 무시하고 도입도 정체됐다고 합니다. **1차 확인이 없으니 여기선 사실로 안 올립니다.** Anthropic이 자기 문서에 `llms.txt`를 *올려 둔* 건 퍼블리셔로서의 행동일 뿐, Claude가 *당신의* `llms.txt`를 읽어 간다는 뜻이 아닙니다.

요약하면 `llms.txt`는 공식 표준이 아니라 커뮤니티 관습으로 남아 있습니다.

<a id="social-sns-surfaces"></a>
## 소셜 / SNS 표면

SNS는 별도의 "AEO/GEO 전략"이라기보다, **Google Search에 색인되는 공개 웹 표면** + 브랜드·프로필 연결 신호에 가깝습니다.

| 문서 | 링크 | SNS와의 관계 |
|---|---|---|
| Organization 구조화 데이터 | https://developers.google.com/search/docs/appearance/structured-data/organization | 홈페이지에서 `sameAs`로 SNS·리뷰 프로필을 연결 |
| ProfilePage 구조화 데이터 | https://developers.google.com/search/docs/appearance/structured-data/profile-page | 포럼·소셜 사이트의 사용자/작성자/소개 프로필 페이지용 |
| DiscussionForumPosting / SocialMediaPosting | https://developers.google.com/search/docs/appearance/structured-data/discussion-forum | 커뮤니티·포럼·소셜의 UGC 게시물 마크업. 퍼블리셔가 쓴 기사에는 쓰지 않음 |
| Google Business Profile 소셜 링크 | https://support.google.com/business/answer/3039617 | 일부 계정에서 Facebook·Instagram·LinkedIn·Pinterest·TikTok·X·YouTube 링크를 플랫폼당 하나씩 추가 |
| Search Console의 소셜 채널 | https://developers.google.com/search/blog/2025/12/social-channels-search-console | 사이트와 일부 소셜 채널 검색 성과를 Search Console Insights에서 묶는 실험(제한적 rollout) |

<a id="industry-academic-references"></a>
## 업계 · 학술 참고자료 (2차)

아래는 용어가 실제로 존재한다는 걸 뒷받침하는 자료입니다. 단, Google 정책이나 순위 사실로는 **올리지 않습니다.**

| 출처 | 링크 | 쓰임새 |
|---|---|---|
| arXiv — GEO: Generative Engine Optimization | https://arxiv.org/abs/2311.09735 | "GEO"를 정식화한 논문. KDD 2024 채택 |
| Semrush — Answer Engine Optimization | https://www.semrush.com/blog/answer-engine-optimization/ | AI 답변에서 브랜드 노출을 노리는 마케팅 실무로서 AEO를 설명 |
| Ahrefs — Answer Engine Optimization | https://ahrefs.com/blog/answer-engine-optimization/ | 직접답변 화면을 위한 SEO 보완 개념으로 AEO를 설명 |
| Search Engine Journal — Google's guide calls AEO/GEO still SEO | https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/ | Google 공식 가이드에 대한 업계 해석. 1차 출처는 Google 문서로 둘 것 |

<a id="what-to-ignore"></a>
## 걸러도 되는 것 (과장된 주장)

Google의 공식 입장에 비춰 보면, 아래는 경고 신호로 보세요.

- "Google Search에는 `llms.txt`가 꼭 있어야 한다"
- "AI 검색에는 특수·비밀 스키마가 필요하다"
- "AI를 위해 콘텐츠를 잘게잘게 쪼개야 한다"
- 오직 AI를 위해 어색하게 다시 쓴 문장
- 인위적인 언급 농사(mention farming)
- "AI Overview 1위 보장" 같은 영업 멘트

ChatGPT / Perplexity / Claude 등 어디서나 통하는 안전한 공통분모는 이렇습니다.

- 누구나 접근 가능한 원문 텍스트
- 분명한 작성자 / 조직 / 날짜 / 근거
- canonical하고 중복 없는 URL
- 믿을 만한 외부 인용
- 최신 제품 / 가격 / 정책 / FAQ 정보
- 브랜드와 핵심 엔티티 이름의 일관성

<a id="contributing"></a>
## 기여하기

기여는 언제든 환영입니다. 대신 이 목록에는 양보 없는 규칙이 하나 있습니다. **1차 출처가 아니면 못 들어옵니다.**

- 공식 엔진·표준 문서 → 본 섹션으로.
- 벤더 블로그·분석 글 → *업계 · 학술 참고자료* 섹션에 명확히 표시해서. 사실처럼 쓰지 않습니다.
- 공식 확인 없는 역공학 "순위 요인" 주장 → 거절합니다.

자세한 건 [contributing.md](contributing.md)를 보세요. PR이나 이슈를 열어 주시면 됩니다.

## 라이선스

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

법이 허용하는 범위에서, 저자들은 이 저작물에 대한 모든 저작권 및 관련 권리를 포기했습니다.
