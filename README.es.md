# Awesome GEO [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[English](README.md) | [한국어](README.ko.md) | [中文](README.zh.md) | [日本語](README.ja.md) | **Español** | [Français](README.fr.md)

Este documento es la traducción al español del [README](README.md) en inglés. Si ambos divergen, el texto original en inglés es la referencia.

> Un mapa cuidado y «fuente primero» (source-first) sobre la **Optimización para Motores Generativos (Generative Engine Optimization, GEO)**, la Optimización para Motores de Respuesta (Answer Engine Optimization, AEO) y la búsqueda con IA, construido sobre la documentación oficial de cada motor y no sobre el marketing de los proveedores.

**La tesis incómoda de esta lista:** según la propia documentación oficial de los buscadores, GEO/AEO no es una disciplina de optimización nueva y secreta. Para Google Search es SEO fundamental aplicado a nuevas superficies de respuesta (AI Overviews, AI Mode). La mayoría del resto de motores de búsqueda con IA (ChatGPT, Perplexity, Claude) comparten oficialmente la misma base —rastreable, indexable, fiable, actualizada— y **no** publican ninguna guía aparte de «reescribe tu contenido para la IA». El único motor que sí adopta una postura oficial visiblemente distinta es Microsoft Bing/Copilot. La verdadera diferencia entre motores no está en *cómo escribes*, sino en el **backend de recuperación (retrieval backend)** del que lee cada uno.

Cada afirmación de este documento enlaza a una fuente primaria. Las entradas de blogs de marketing se mantienen en una sección secundaria claramente señalada y nunca se elevan a la categoría de hecho.

## Contenido

- [El argumento central](#core-argument)
- [Mapa de términos](#terminology-map)
- [Google — Documentación oficial](#google-official-docs)
- [Medir el rendimiento en búsqueda con IA](#measuring-ai-search-performance)
- [Posturas oficiales por motor](#per-engine-official-stances)
- [llms.txt — qué es en realidad](#llmstxt-what-it-actually-is)
- [Superficies sociales / SNS](#social-sns-surfaces)
- [Referencias del sector y académicas](#industry-academic-references)
- [Qué ignorar](#what-to-ignore)
- [Cómo contribuir](#contributing)

<a id="core-argument"></a>
## El argumento central

**AEO** (Answer Engine Optimization, optimización para motores de respuesta) y **GEO** (Generative Engine Optimization, optimización para motores generativos) son términos reales y muy usados en el sector para lograr que una marca o un contenido sea citado en respuestas de IA: AI Overviews, AI Mode, ChatGPT, Perplexity, búsqueda por voz. En concreto, **GEO** fue formalizado académicamente por el artículo de 2023 [*GEO: Generative Engine Optimization*](https://arxiv.org/abs/2311.09735) (KDD 2024).

Lo que se discute no es si los términos existen, sino si describen un **sistema de optimización aparte**. La propia [guía de optimización para IA generativa](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) de Google reconoce que estos términos son «habituales en internet» y luego afirma sin rodeos: para Google Search, sigues aplicando SEO fundamental. Para AI Overviews / AI Mode **no se necesita ningún esquema especial, ni `llms.txt`, ni markdown exclusivo para IA, ni fragmentar el contenido, ni reescrituras solo para IA.**

Por eso esta lista trata el GEO como **lo básico del SEO aplicado a nuevas superficies de respuesta**, con las salvedades específicas de cada motor documentadas a partir de fuentes primarias, no inventadas.

<a id="terminology-map"></a>
## Mapa de términos

| Término | Nombre completo | Naturaleza | Postura oficial de Google |
|---|---|---|---|
| **SEO** | Search Engine Optimization | El sistema base: ayudar a los motores a entender el contenido y a los usuarios a encontrarlo | Término oficial. Núcleo de la documentación de Google Search Central |
| **AEO** | Answer Engine Optimization | Término del sector para ser citado en respuestas de IA/directas/por voz | Mencionado como término «habitual en internet». No es un sistema aparte de Google |
| **GEO** | Generative Engine Optimization | Término del sector/académico para la visibilidad y la atribución en respuestas generativas | Mencionado como «habitual en internet». En Google Search se trata sobre base SEO |
| **LLMO / AI SEO / AIO** | LLM Optimization, etc. | Neologismos de marketing | No es un marco oficial de Google: verifica cada afirmación por su fuente |

<a id="google-official-docs"></a>
## Google — Documentación oficial

La base. Si no lees nada más, lee la primera fila.

| Documento | Enlace | Por qué importa |
|---|---|---|
| Optimizar para las funciones de IA generativa en Google Search | https://developers.google.com/search/docs/fundamentals/ai-optimization-guide | La respuesta oficial principal de Google a la cuestión GEO/AEO. En Google Search, optimizar para IA generativa sigue siendo SEO; no hace falta `llms.txt`, fragmentación ni marcado especial para IA |
| Las funciones de IA y tu sitio web | https://developers.google.com/search/docs/appearance/ai-features | Cómo funcionan AI Overviews / AI Mode desde la óptica del propietario del sitio. No hay requisitos técnicos extra: la clave es ser indexable y apto para snippets |
| Guía de iniciación al SEO | https://developers.google.com/search/docs/fundamentals/seo-starter-guide | Lo fundamental: estructura, contenido, enlaces, títulos, snippets, imágenes/vídeo, promoción |
| Google Search Essentials | https://developers.google.com/search/docs/essentials | El mínimo para aparecer en Google Search: requisitos técnicos, políticas antispam, prácticas recomendadas clave |
| Requisitos técnicos | https://developers.google.com/search/docs/crawling-indexing/technical-requirements | Condiciones mínimas para que Google rastree, renderice e indexe una página |
| Introducción a los datos estructurados | https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data | El papel oficial de los datos estructurados es la elegibilidad para resultados enriquecidos, no un esquema especial de «búsqueda con IA» |
| Snippets / metadescripción | https://developers.google.com/search/docs/appearance/snippet | La elegibilidad para snippets alimenta la elegibilidad para funciones de IA; entiende el control de la vista previa y la metadescripción |
| Robots meta / nosnippet / max-snippet | https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag | Controla qué se muestra en Search y en las funciones de IA: `nosnippet`, `data-nosnippet`, `max-snippet`, `noindex` |
| Google-Extended | https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended | Token de producto para controlar el entrenamiento y el grounding de Gemini/Vertex AI. No afecta a la inclusión ni al posicionamiento en Google Search |

<a id="measuring-ai-search-performance"></a>
## Medir el rendimiento en búsqueda con IA

| Documento | Enlace | Por qué importa |
|---|---|---|
| Informes de rendimiento de IA generativa en Search Console | https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports | Blog oficial sobre cómo informar del rendimiento de IA generativa en Search Console (anunciado el 2026-06-03) |
| Clics / impresiones / posición en Search Console | https://support.google.com/webmasters/answer/7042828 | Cómo se contabilizan clics, impresiones y posición en AI Mode / AI Overviews |
| AI Overviews (ayuda al usuario) | https://support.google.com/websearch/answer/14901683 | Explicación de cara al usuario. Es una función central que no se puede desactivar del todo; el filtro Web solo muestra enlaces de texto |
| AI Mode (ayuda al usuario) | https://support.google.com/websearch/answer/16296315 | AI Mode / Search Labs / preguntas de seguimiento / capacidades agénticas |

<a id="per-engine-official-stances"></a>
## Posturas oficiales por motor (más allá de Google)

La pregunta clave: *Google dice que GEO/AEO = SEO. ¿Los demás grandes motores de IA afirman oficialmente que su motor es distinto?*

Respuesta corta: **la mayoría comparte la base de Google** (rastreable · indexable · fiable · actualizado) y no exige ninguna «optimización secreta» oficial. La única postura oficial claramente distinta es la de **Microsoft Bing/Copilot**: Bing afirma que el marcado con esquema ayuda a su LLM a entender el contenido y recomienda IndexNow para la frescura. Y la verdadera diferencia entre motores está en el **backend de recuperación** (índice propio frente a proveedor de búsqueda externo), no en la redacción.

| Motor / producto | Backend de recuperación (oficial) | Enfoque oficial para editores | Frente al «con SEO basta» de Google |
|---|---|---|---|
| Google AI Overviews / AI Mode | Índice de Google | Search Essentials + base de SEO. Sin esquema especial / `llms.txt` | Línea base |
| ChatGPT search (OpenAI) | Rastreo de OAI-SearchBot + proveedores de búsqueda externos | Permite `OAI-SearchBot` en robots.txt; exclúyelo con `noindex`. **Sin guía aparte de optimización de contenido** | Prácticamente igual |
| Perplexity | Índice de PerplexityBot + obtención en vivo de Perplexity-User | Permite PerplexityBot y sus rangos de IP. **Solo acceso técnico, sin estrategia de contenido** | Prácticamente igual |
| Claude web search (Anthropic) | Proveedor de búsqueda externo (según informes, Brave) + ClaudeBot | Sin documentación de optimización para editores. Citas en línea; prefiere fuentes primarias/verificables | Prácticamente igual |
| Microsoft Bing / Copilot | Índice de Bing | **Dice oficialmente que el esquema ayuda a su LLM** + frescura con IndexNow + encabezados/tablas/FAQ claros. Informe AI Performance en Bing Webmaster Tools | **Distinto**: publica orientación específica para la búsqueda generativa |

Fuentes primarias por plataforma:

- **OpenAI / ChatGPT** — [FAQ para editores y desarrolladores](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq), [ChatGPT search](https://help.openai.com/en/articles/9237897-chatgpt-search), [bots / rastreadores](https://developers.openai.com/api/docs/bots). `OAI-SearchBot` (búsqueda/producto) es distinto de `GPTBot` (entrenamiento). La orientación oficial es «no lo bloquees, o usa `noindex` para excluirte», no «reescribe tu contenido para la IA».
- **Perplexity** — [rastreadores](https://docs.perplexity.ai/docs/resources/perplexity-crawlers), [política de robots.txt](https://www.perplexity.ai/help-center/en/articles/10354969-how-does-perplexity-follow-robots-txt). PerplexityBot sirve para la visibilidad en búsqueda (no para entrenar); Perplexity-User es una obtención activada por el usuario. La documentación solo cubre el acceso técnico. Los consejos de «claridad de entidades», «poner lo importante al principio» o «las citas de Reddit ayudan» son ingeniería inversa de terceros, **no postura oficial**, así que no se elevan a hecho aquí.
- **Anthropic / Claude** — [web search tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool), [activar y usar web search](https://support.claude.com/en/articles/10684626-enabling-and-using-web-search). La búsqueda subyacente depende de un proveedor externo (según informes, Brave Search); las respuestas llevan citas en línea y prefieren de forma conservadora fuentes primarias verificables. «Que te recoja Claude» equivale a «estar en el índice del proveedor de búsqueda como fuente primaria fiable».
- **Microsoft Bing / Copilot** — [AI Performance en Bing Webmaster Tools](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview), [Bing/Copilot usa esquema para sus LLM](https://searchengineland.com/microsoft-bing-copilot-use-schema-for-its-llms-453455). El más rotundo del conjunto, aunque Fabrice Canel, de Microsoft, sigue insistiendo en «less is more: precisión, no volumen».

<a id="llmstxt-what-it-actually-is"></a>
## llms.txt — qué es en realidad

**Origen:** propuesto el 2024-09-03 por **Jeremy Howard** (cofundador de fast.ai / Answer.AI) mediante una entrada en answer.ai y la especificación [`llmstxt.org`](https://llmstxt.org). Es un índice markdown curado situado en la raíz del sitio, en `/llms.txt`, pensado para ayudar a un LLM a usar el sitio en el momento de la inferencia. Es una **propuesta comunitaria impulsada por una sola persona**, no un estándar de consorcio de búsqueda como schema.org, y esa es la causa de fondo de la brecha de soporte que sigue.

**Estado del soporte (a fecha del 1.er trimestre de 2026):**

- **Google** — sin soporte oficial. John Mueller (2025) y Gary Illyes (Search Central Live 2025-07) afirmaron que ningún sistema de IA usa actualmente `llms.txt` y que Google no tiene planes de hacerlo.
- **OpenAI / otros** — no hay ningún anuncio oficial de que GPTBot/ChatGPT analice `llms.txt`.
- **«Anthropic/Perplexity confirman soporte»** — algunos blogs de SEO lo afirman; otros informes dicen que las grandes plataformas lo ignoran y que la adopción se ha estancado. **Sin confirmación primaria → no se eleva a hecho aquí.** Que Anthropic *publique* un `llms.txt` en su propia documentación es conducta de editor; no significa que Claude *consuma* el tuyo.

`llms.txt` sigue siendo una convención comunitaria, no un estándar oficial.

<a id="social-sns-surfaces"></a>
## Superficies sociales / SNS

Las redes sociales son menos una «jugada de AEO/GEO» aparte y más una **superficie web pública indexada por Google Search** más señales de conexión de marca/perfil.

| Documento | Enlace | Relación con las redes sociales |
|---|---|---|
| Datos estructurados de Organization | https://developers.google.com/search/docs/appearance/structured-data/organization | Enlaza perfiles de redes/reseñas desde tu página principal con `sameAs` |
| Datos estructurados de ProfilePage | https://developers.google.com/search/docs/appearance/structured-data/profile-page | Para páginas de perfil de usuario/autor/about en foros y sitios sociales |
| DiscussionForumPosting / SocialMediaPosting | https://developers.google.com/search/docs/appearance/structured-data/discussion-forum | Marcado para publicaciones UGC de comunidades/foros/redes. No para artículos escritos por el editor |
| Enlaces sociales de Google Business Profile | https://support.google.com/business/answer/3039617 | Añade un enlace por plataforma (Facebook, Instagram, LinkedIn, Pinterest, TikTok, X, YouTube) en algunas cuentas |
| Canales sociales en Search Console | https://developers.google.com/search/blog/2025/12/social-channels-search-console | Experimento que unifica el rendimiento de búsqueda del sitio y de algunos canales sociales en Search Console Insights (despliegue limitado) |

<a id="industry-academic-references"></a>
## Referencias del sector y académicas (secundarias)

Estas corroboran que los términos existen; **no** se elevan a política de Google ni a hecho sobre posicionamiento.

| Fuente | Enlace | Uso |
|---|---|---|
| arXiv — GEO: Generative Engine Optimization | https://arxiv.org/abs/2311.09735 | El artículo que formalizó «GEO». Aceptado en KDD 2024 |
| Semrush — Answer Engine Optimization | https://www.semrush.com/blog/answer-engine-optimization/ | Presenta el AEO como práctica de marketing para la visibilidad de marca en respuestas de IA |
| Ahrefs — Answer Engine Optimization | https://ahrefs.com/blog/answer-engine-optimization/ | Presenta el AEO como complemento del SEO para superficies de respuesta directa |
| Search Engine Journal — Google's guide calls AEO/GEO still SEO | https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/ | Lectura del sector de la guía oficial de Google. Mantén el documento de Google como fuente primaria |

<a id="what-to-ignore"></a>
## Qué ignorar (afirmaciones sobredimensionadas)

Según la postura oficial de Google, trata lo siguiente como señales de alarma:

- «Necesitas un `llms.txt` para Google Search»
- «La búsqueda con IA necesita un esquema especial/secreto»
- «Debes trocear el contenido en fragmentos diminutos para la IA»
- Reescrituras forzadas pensadas solo para sistemas de IA
- Cultivo artificial de menciones (mention farming)
- Argumentarios de venta del tipo «posición n.º 1 garantizada en AI Overview»

Mínimo común denominador seguro en ChatGPT / Perplexity / Claude / otros:

- Texto fuente accesible públicamente
- Autor / organización / fecha / evidencia claros
- URL canónicas y no duplicadas
- Citas externas fiables
- Información actualizada de producto / precio / política / FAQ
- Coherencia en el nombre de tu marca y de tus entidades clave

<a id="contributing"></a>
## Cómo contribuir

Se agradecen las contribuciones, pero esta lista tiene una regla inquebrantable: **si no es fuente primaria, no entra.**

- Documentación oficial de motores/estándares → secciones principales.
- Blogs/análisis de proveedores → la sección *Referencias del sector y académicas*, claramente etiquetada y nunca presentada como hecho.
- Afirmaciones de «factores de posicionamiento» obtenidas por ingeniería inversa sin confirmación oficial → se rechazan.

Consulta [contributing.md](contributing.md). Abre un PR o un issue.

## Licencia

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

En la medida en que lo permita la ley, los autores han renunciado a todos los derechos de autor y derechos conexos sobre esta obra.
