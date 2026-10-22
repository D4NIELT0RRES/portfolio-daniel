# 3.2 Identidade visual

**Conceito:** meus projetos como produtos. O site funciona como uma vitrine: o fundo e o texto ficam neutros para que os projetos sejam o que brilha.

Os valores abaixo são os tokens reais do código, em [`src/style.css`](../src/style.css) (`:root`).

## Paleta de cores

| Cor | Hex | Token | Papel | Por que |
|---|---|---|---|---|
| ⬛ | `#000000` | `--black` | Fundo "palco" | Hero, skills e contato. As telas dos projetos brilham como produtos sobre o preto. |
| ⬜ | `#F5F5F7` | `--mist` | Fundo claro | Destaques, projetos e trajetória. Dá respiro entre as seções escuras. |
| ◼️ | `#1D1D1F` | `--ink` | Texto principal | Grafite em vez de preto puro: leitura com menos contraste agressivo. |
| ◽ | `#86868B` | `--gray` | Texto secundário | Legendas, rótulos e anos da linha do tempo. |
| 🔵 | `#2997FF` | `--blue` | Destaque e links | Azul de tecnologia: links e linha da trajetória. |
| 🔵 | `#0071E3` | `--blue-dark` | Botões | Versão mais escura do azul para botões, com contraste suficiente para texto branco. |
| 🟣 | `#BF5AF2` | `--violet` | Fim do degradê | Só aparece dentro do degradê de assinatura. |
| 🌈 | `#2997FF → #7A7CFF → #BF5AF2` | `--grad` | Assinatura | Usado só em palavras-chave e números. Azul (código) + violeta (criatividade). |

**Por que combinam:** preto, branco e cinzas formam a vitrine; a única cor forte é o degradê, então o olho vai direto para o que importa. Alternar seções escuras e claras cria ritmo, como nas páginas da Apple.

## Tipografia

| Fonte | Uso | Sensação |
|---|---|---|
| **Inter** (400–700) | Todo o texto | Substitui a SF Pro (fonte da Apple, que não pode ser usada na web). Títulos em 600–700 com espaçamento negativo (até −0,05em): compacto e preciso. |
| **JetBrains Mono** (400–500) | Etiquetas de tecnologia (React, Supabase…) | Lembra código, separa "o que é técnico" do texto corrido. |

Escala dos títulos de seção: `clamp(2.4rem, 6vw, 4.5rem)`, peso 600, `letter-spacing: -0.035em`.

## Tom e personalidade

**Confiante. Minimalista. Direto.**

- Frases curtas que terminam em ponto final, como na Apple.
- Muito espaço vazio e poucas palavras por bloco.
- Números grandes como prova (74 repositórios, 5 linguagens, desde 2024).
- Nada de exagero: só projetos e dados reais.

### Títulos do site

| Seção | Título |
|---|---|
| Hero | **Daniel Torres.** — "Código que parece simples. Porque deu trabalho." |
| Manifesto | "Eu transformo ideias em produtos digitais. Do banco de dados à última animação…" |
| Destaques | **Veja os destaques.** |
| Projetos | **Projetos em detalhe.** |
| Skills | **Skills.** Ferramentas certas para cada problema. |
| Trajetória | **Trajetória.** |
| Contato | **Vamos construir o próximo.** |
| Processo | **Como este site foi feito.** |

## Estrutura da página

1. **Hero** — nome e frase de impacto; o notebook cresce e mostra projetos reais logo de cara.
2. **Manifesto** — quem eu sou em um parágrafo, lido no ritmo do scroll.
3. **Números** — prova rápida: repositórios, linguagens e desde quando programo.
4. **Destaques** — visão geral de 6 projetos em cards, para quem tem pouco tempo.
5. **Projetos em detalhe** — cinco projetos com contexto, stack e links, para quem quer se aprofundar.
6. **Skills** — habilidades agrupadas por área, cada uma ligada a um projeto real.
7. **Trajetória** — experiências e eventos de 2024 a 2026, em linha do tempo.
8. **Contato** — chamada final para o GitHub e para a página de processo.

A ordem vai do mais rápido de consumir (hero, números, cards) para o mais detalhado (projetos, trajetória): quem tem 10 segundos vê o essencial; quem tem 5 minutos encontra a profundidade.

## Design e animação

| Efeito | Onde | Ferramenta |
|---|---|---|
| Notebook que cresce com o scroll | Hero | GSAP ScrollTrigger (pin + scrub) |
| Palavras que acendem | Manifesto | GSAP SplitText + ScrollTrigger |
| Contadores numéricos | Números | GSAP |
| Carrossel com autoplay e barra de progresso | Destaques | JS + CSS |
| Tela fixa que troca por capítulo | Projetos | ScrollTrigger (pin) |
| Menu que troca para claro em seções claras | Menu fixo | ScrollTrigger + `data-nav="light"` |
| Títulos revelados por máscara | Todas as seções | SplitText |
| Rolagem com inércia | Site inteiro | Lenis |

Prints do resultado: [`prints/`](prints/).
