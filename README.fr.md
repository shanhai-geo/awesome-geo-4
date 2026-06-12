<p align="center">
  <img src=".github/logo.svg" alt="awesome-geo" width="128">
</p>

# Awesome GEO [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[English](README.md) | [한국어](README.ko.md) | [中文](README.zh.md) | [日本語](README.ja.md) | [Español](README.es.md) | **Français**

Ce document est la traduction française du [README](README.md) anglais. En cas de divergence, le texte original anglais fait foi.

> Une carte « source d'abord » (source-first), soigneusement sélectionnée, de l'**optimisation pour les moteurs génératifs (Generative Engine Optimization, GEO)**, de l'optimisation pour les moteurs de réponse (Answer Engine Optimization, AEO) et de la recherche par IA — fondée sur la documentation officielle de chaque moteur, et non sur le marketing des éditeurs.

**La thèse dérangeante de cette liste :** si l'on s'en tient à la documentation officielle des moteurs de recherche eux-mêmes, le GEO/AEO n'est pas une nouvelle discipline d'optimisation secrète. Pour Google Search, c'est du SEO fondamental appliqué à de nouvelles surfaces de réponse (AI Overviews, AI Mode). La plupart des autres moteurs de recherche par IA (ChatGPT, Perplexity, Claude) partagent officiellement la même base — explorable, indexable, fiable, à jour — et ne publient **aucune** consigne distincte du type « réécrivez votre contenu pour l'IA ». Le seul moteur qui adopte une position officielle nettement différente est Microsoft Bing/Copilot. La vraie différence entre moteurs ne tient pas à *la façon dont vous écrivez*, mais au **backend de récupération (retrieval backend)** que chacun interroge.

Chaque affirmation de ce document renvoie à une source primaire. Les billets de blog marketing sont rangés dans une section secondaire clairement identifiée et ne sont jamais promus au rang de fait.

## Sommaire

- [L'argument central](#core-argument)
- [Carte des termes](#terminology-map)
- [Google — Documentation officielle](#google-official-docs)
- [Mesurer la performance en recherche par IA](#measuring-ai-search-performance)
- [Positions officielles par moteur](#per-engine-official-stances)
- [llms.txt — ce que c'est vraiment](#llmstxt-what-it-actually-is)
- [Surfaces sociales / réseaux](#social-sns-surfaces)
- [Références sectorielles et académiques](#industry-academic-references)
- [Ce qu'il faut ignorer](#what-to-ignore)
- [Contribuer](#contributing)

<a id="core-argument"></a>
## L'argument central

**AEO** (Answer Engine Optimization, optimisation pour les moteurs de réponse) et **GEO** (Generative Engine Optimization, optimisation pour les moteurs génératifs) sont des termes réels et très répandus dans le secteur pour désigner le fait de faire citer une marque ou un contenu dans les réponses d'IA — AI Overviews, AI Mode, ChatGPT, Perplexity, recherche vocale. Le **GEO** en particulier a été formalisé sur le plan académique par l'article de 2023 [*GEO: Generative Engine Optimization*](https://arxiv.org/abs/2311.09735) (KDD 2024).

Ce qui fait débat n'est pas l'existence de ces termes, mais le fait de savoir s'ils décrivent un **système d'optimisation distinct**. Le [guide d'optimisation pour l'IA générative](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) de Google reconnaît que ces termes sont « courants en ligne », puis affirme sans détour : pour Google Search, vous continuez d'appliquer le SEO fondamental. Pour les AI Overviews / AI Mode, **aucun schéma spécial, aucun `llms.txt`, aucun markdown réservé à l'IA, aucun découpage du contenu, aucune réécriture pour l'IA ne sont nécessaires.**

Cette liste traite donc le GEO comme **les bases du SEO appliquées à de nouvelles surfaces de réponse** — avec les exceptions propres à chaque moteur documentées à partir de sources primaires, et non inventées.

<a id="terminology-map"></a>
## Carte des termes

| Terme | Nom complet | Nature | Position officielle de Google |
|---|---|---|---|
| **SEO** | Search Engine Optimization | Le système de base : aider les moteurs à comprendre le contenu et les utilisateurs à le trouver | Terme officiel. Cœur de la documentation Google Search Central |
| **AEO** | Answer Engine Optimization | Terme du secteur pour être cité dans les réponses IA/directes/vocales | Évoqué comme terme « courant en ligne ». Pas un système Google distinct |
| **GEO** | Generative Engine Optimization | Terme du secteur/académique pour la visibilité et l'attribution dans les réponses génératives | Évoqué comme « courant en ligne ». Traité sur une base SEO pour Google Search |
| **LLMO / AI SEO / AIO** | LLM Optimization, etc. | Néologismes marketing | Pas un cadre officiel de Google — vérifiez chaque affirmation selon sa source |

<a id="google-official-docs"></a>
## Google — Documentation officielle

La base. Si vous ne lisez rien d'autre, lisez la première ligne.

| Document | Lien | Pourquoi c'est important |
|---|---|---|
| Optimiser pour les fonctionnalités d'IA générative de Google Search | https://developers.google.com/search/docs/fundamentals/ai-optimization-guide | La réponse officielle de référence de Google à la question GEO/AEO. Pour Google Search, optimiser pour l'IA générative reste du SEO ; pas besoin de `llms.txt`, de découpage ni de balisage IA spécial |
| Les fonctionnalités d'IA et votre site web | https://developers.google.com/search/docs/appearance/ai-features | Comment fonctionnent AI Overviews / AI Mode du point de vue du propriétaire du site. Aucune exigence technique supplémentaire : être indexable et éligible aux extraits, voilà l'essentiel |
| Guide de démarrage SEO | https://developers.google.com/search/docs/fundamentals/seo-starter-guide | Les fondamentaux : structure, contenu, liens, titres, extraits, images/vidéos, promotion |
| Google Search Essentials | https://developers.google.com/search/docs/essentials | Le minimum pour apparaître dans Google Search : exigences techniques, règles antispam, bonnes pratiques clés |
| Exigences techniques | https://developers.google.com/search/docs/crawling-indexing/technical-requirements | Conditions minimales pour que Google explore, affiche et indexe une page |
| Présentation des données structurées | https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data | Le rôle officiel des données structurées est l'éligibilité aux résultats enrichis — pas un schéma spécial « recherche par IA » |
| Extraits / méta-description | https://developers.google.com/search/docs/appearance/snippet | L'éligibilité aux extraits alimente l'éligibilité aux fonctionnalités d'IA ; comprenez le contrôle de l'aperçu et la méta-description |
| Robots meta / nosnippet / max-snippet | https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag | Contrôlez ce qui s'affiche dans Search et les fonctionnalités d'IA : `nosnippet`, `data-nosnippet`, `max-snippet`, `noindex` |
| Google-Extended | https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended | Jeton produit pour contrôler l'entraînement et le grounding de Gemini/Vertex AI. N'affecte pas l'inclusion ni le classement dans Google Search |

<a id="measuring-ai-search-performance"></a>
## Mesurer la performance en recherche par IA

| Document | Lien | Pourquoi c'est important |
|---|---|---|
| Rapports de performance IA générative dans Search Console | https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports | Billet officiel sur le suivi de la performance de l'IA générative dans Search Console (annoncé le 2026-06-03) |
| Clics / impressions / position dans Search Console | https://support.google.com/webmasters/answer/7042828 | Comment les clics, impressions et positions sont comptabilisés dans AI Mode / AI Overviews |
| AI Overviews (aide utilisateur) | https://support.google.com/websearch/answer/14901683 | Explication côté utilisateur. Fonctionnalité centrale, non totalement désactivable ; le filtre Web n'affiche que des liens texte |
| AI Mode (aide utilisateur) | https://support.google.com/websearch/answer/16296315 | AI Mode / Search Labs / questions de suivi / capacités agentiques |

<a id="per-engine-official-stances"></a>
## Positions officielles par moteur (au-delà de Google)

Question clé : *Google dit que GEO/AEO = SEO. Les autres grands moteurs d'IA affirment-ils officiellement que leur moteur est différent ?*

Réponse courte : **la plupart partagent la base de Google** (explorable · indexable · fiable · à jour) et n'exigent aucune « optimisation secrète » officielle. La seule position officielle nettement différente est celle de **Microsoft Bing/Copilot** : Bing affirme que le balisage par schéma aide son LLM à comprendre le contenu et recommande IndexNow pour la fraîcheur. Et la vraie différence entre moteurs tient au **backend de récupération** (index propre ou prestataire de recherche tiers), pas à la rédaction.

| Moteur / produit | Backend de récupération (officiel) | Approche officielle pour les éditeurs | Face au « le SEO suffit » de Google |
|---|---|---|---|
| Google AI Overviews / AI Mode | Index Google | Search Essentials + bases du SEO. Pas de schéma spécial / `llms.txt` | Référence |
| ChatGPT search (OpenAI) | Exploration par OAI-SearchBot + prestataires de recherche tiers | Autorisez `OAI-SearchBot` dans robots.txt ; excluez-vous via `noindex`. **Aucun guide d'optimisation de contenu distinct** | Quasi identique |
| Perplexity | Index de PerplexityBot + récupération en direct par Perplexity-User | Autorisez PerplexityBot et ses plages d'IP. **Accès technique uniquement, pas de stratégie de contenu** | Quasi identique |
| Claude web search (Anthropic) | Prestataire de recherche tiers (selon les informations, Brave) + ClaudeBot | Aucune documentation d'optimisation pour les éditeurs. Citations en ligne ; privilégie les sources primaires/vérifiables | Quasi identique |
| Microsoft Bing / Copilot | Index Bing | **Affirme officiellement que le schéma aide son LLM** + fraîcheur via IndexNow + titres/tableaux/FAQ clairs. Rapport AI Performance dans Bing Webmaster Tools | **Différent** — publie des consignes propres à la recherche générative |

Sources primaires par plateforme :

- **OpenAI / ChatGPT** — [FAQ éditeurs et développeurs](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq), [ChatGPT search](https://help.openai.com/en/articles/9237897-chatgpt-search), [bots / crawlers](https://developers.openai.com/api/docs/bots). `OAI-SearchBot` (recherche/produit) est distinct de `GPTBot` (entraînement). La consigne officielle est « ne le bloquez pas, ou utilisez `noindex` pour vous exclure » — pas « réécrivez votre contenu pour l'IA ».
- **Perplexity** — [crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers), [politique robots.txt](https://www.perplexity.ai/help-center/en/articles/10354969-how-does-perplexity-follow-robots-txt). PerplexityBot sert à la visibilité en recherche (pas à l'entraînement) ; Perplexity-User est une récupération déclenchée par l'utilisateur. La documentation ne couvre que l'accès technique. Les conseils de « clarté des entités », « mettre l'essentiel en avant » ou « les citations Reddit aident » relèvent de la rétro-ingénierie de tiers, **et non d'une position officielle** : ils ne sont pas promus en faits ici.
- **Anthropic / Claude** — [web search tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool), [activer et utiliser web search](https://support.claude.com/en/articles/10684626-enabling-and-using-web-search). La recherche sous-jacente repose sur un prestataire tiers (selon les informations, Brave Search) ; les réponses portent des citations en ligne et privilégient prudemment les sources primaires vérifiables. « Être repris par Claude » revient à « figurer dans l'index du prestataire de recherche en tant que source primaire fiable ».
- **Microsoft Bing / Copilot** — [AI Performance dans Bing Webmaster Tools](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview), [Bing/Copilot utilise le schéma pour ses LLM](https://searchengineland.com/microsoft-bing-copilot-use-schema-for-its-llms-453455). Le plus tranché du lot — mais Fabrice Canel, de Microsoft, insiste toujours sur « less is more : la précision, pas le volume ».

<a id="llmstxt-what-it-actually-is"></a>
## llms.txt — ce que c'est vraiment

**Origine :** proposé le 2024-09-03 par **Jeremy Howard** (cofondateur de fast.ai / Answer.AI) via un billet answer.ai et la spécification [`llmstxt.org`](https://llmstxt.org). Il s'agit d'un index markdown sélectionné, placé à la racine du site dans `/llms.txt`, destiné à aider un LLM à utiliser le site au moment de l'inférence. C'est une **proposition communautaire portée par une seule personne**, et non une norme de consortium de recherche comme schema.org — ce qui explique le déficit de prise en charge ci-dessous.

**État de la prise en charge (au 1er trimestre 2026) :**

- **Google** — non pris en charge officiellement. John Mueller (2025) et Gary Illyes (Search Central Live 2025-07) ont déclaré qu'aucun système d'IA n'utilise actuellement `llms.txt` et que Google n'a pas l'intention de le faire.
- **OpenAI / autres** — aucune annonce officielle indiquant que GPTBot/ChatGPT analyse `llms.txt`.
- **« Prise en charge confirmée par Anthropic/Perplexity »** — certains blogs SEO l'affirment ; d'autres sources indiquent que les grandes plateformes l'ignorent et que l'adoption stagne. **Aucune confirmation primaire → non promu en fait ici.** Le fait qu'Anthropic *publie* un `llms.txt` dans sa propre documentation relève du comportement d'éditeur ; cela ne signifie pas que Claude *consomme le vôtre*.

`llms.txt` reste une convention communautaire, et non une norme officielle.

<a id="social-sns-surfaces"></a>
## Surfaces sociales / réseaux

Les réseaux sociaux sont moins une « stratégie AEO/GEO » distincte qu'une **surface web publique indexée par Google Search**, assortie de signaux de connexion marque/profil.

| Document | Lien | Rapport avec les réseaux sociaux |
|---|---|---|
| Données structurées Organization | https://developers.google.com/search/docs/appearance/structured-data/organization | Reliez vos profils réseaux/avis depuis votre page d'accueil via `sameAs` |
| Données structurées ProfilePage | https://developers.google.com/search/docs/appearance/structured-data/profile-page | Pour les pages de profil utilisateur/auteur/à propos sur forums et sites sociaux |
| DiscussionForumPosting / SocialMediaPosting | https://developers.google.com/search/docs/appearance/structured-data/discussion-forum | Balisage des publications UGC de communautés/forums/réseaux. Pas pour les articles rédigés par l'éditeur |
| Liens sociaux Google Business Profile | https://support.google.com/business/answer/3039617 | Ajoutez un lien par plateforme (Facebook, Instagram, LinkedIn, Pinterest, TikTok, X, YouTube) sur certains comptes |
| Canaux sociaux dans Search Console | https://developers.google.com/search/blog/2025/12/social-channels-search-console | Expérimentation unifiant la performance de recherche du site et de certains canaux sociaux dans Search Console Insights (déploiement limité) |

<a id="industry-academic-references"></a>
## Références sectorielles et académiques (secondaires)

Elles confirment que les termes existent ; elles **ne** sont **pas** promues en politique Google ni en fait de classement.

| Source | Lien | Usage |
|---|---|---|
| arXiv — GEO: Generative Engine Optimization | https://arxiv.org/abs/2311.09735 | L'article qui a formalisé « GEO ». Accepté à KDD 2024 |
| Semrush — Answer Engine Optimization | https://www.semrush.com/blog/answer-engine-optimization/ | Présente l'AEO comme une pratique marketing pour la visibilité de marque dans les réponses d'IA |
| Ahrefs — Answer Engine Optimization | https://ahrefs.com/blog/answer-engine-optimization/ | Présente l'AEO comme un complément du SEO pour les surfaces de réponse directe |
| Search Engine Journal — Google's guide calls AEO/GEO still SEO | https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/ | Lecture sectorielle du guide officiel de Google. Gardez le document Google comme source primaire |

<a id="what-to-ignore"></a>
## Ce qu'il faut ignorer (affirmations survendues)

Au regard de la position officielle de Google, traitez ce qui suit comme des signaux d'alerte :

- « Il vous faut un `llms.txt` pour Google Search »
- « La recherche par IA exige un schéma spécial/secret »
- « Vous devez découper le contenu en tout petits morceaux pour l'IA »
- Des réécritures maladroites rédigées uniquement pour les systèmes d'IA
- Le farming artificiel de mentions (mention farming)
- Les argumentaires de vente du type « position n°1 garantie dans AI Overview »

Dénominateur commun sûr pour ChatGPT / Perplexity / Claude / autres :

- Texte source accessible publiquement
- Auteur / organisation / date / preuves clairs
- URL canoniques, sans doublons
- Citations externes fiables
- Informations produit / prix / politique / FAQ à jour
- Cohérence du nom de votre marque et de vos entités clés

<a id="contributing"></a>
## Contribuer

Les contributions sont les bienvenues — mais cette liste a une règle stricte : **pas de source primaire, pas d'entrée.**

- Documentation officielle des moteurs/normes → sections principales.
- Blogs/analyses d'éditeurs → la section *Références sectorielles et académiques*, clairement étiquetée, jamais présentée comme un fait.
- Les affirmations de « facteurs de classement » obtenues par rétro-ingénierie sans confirmation officielle → rejetées.

Voir [contributing.md](contributing.md). Ouvrez une PR ou une issue.

## Licence

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

Dans la mesure permise par la loi, les auteurs ont renoncé à tous les droits d'auteur et droits voisins sur cette œuvre.
