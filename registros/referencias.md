# 3.1 Referências

Oito referências que guiaram o portfólio. As capturas estão em [`referencias/`](referencias/) e os prints do resultado em [`prints/`](prints/).

O conceito que une todas: **tratar cada projeto como um produto da Apple**, apresentado numa vitrine escura, com o scroll contando a história.

| # | Referência | O que aproveitei | Onde usei | Captura |
|---|---|---|---|---|
| 1 | [apple.com/macbook-pro](https://www.apple.com/macbook-pro/) | O notebook entra pequeno, cresce e ocupa a tela enquanto o título sai. A seção fica presa (*pin*) e o scroll controla a animação. | **Hero**: a tela do notebook mostra meus projetos publicados (PAVIO, Orbitrace, StudyCam). | [ver](referencias/01-apple-macbook-pro.jpg) |
| 2 | [apple.com/airpods-pro](https://www.apple.com/airpods-pro/) | Parágrafo grande em cinza escuro cujas palavras acendem conforme o scroll. Força a leitura no ritmo da página. | **Manifesto**, logo depois do hero. | [ver](referencias/02-apple-airpods-pro.jpg) |
| 3 | [apple.com/iphone](https://www.apple.com/iphone/) | Galeria "Veja os destaques": cards grandes em carrossel com autoplay, pontos que viram barra de progresso e botão de pausa. | **Destaques**, um card por projeto. | [ver](referencias/03-apple-iphone.jpg) |
| 4 | Blocos "bento" das páginas de produto da Apple | Blocos escuros de tamanhos diferentes, com um número ou palavra enorme em degradê e uma linha de apoio. | **Skills**. | — |
| 5 | [gsap.com/scroll](https://gsap.com/scroll/) (ScrollTrigger) | Seção fixa enquanto o conteúdo rola ao lado; animação amarrada à posição do scroll (*scrub*). | **Projetos em detalhe**: a tela fica parada à esquerda e troca conforme o capítulo ativo. | [ver](referencias/05-gsap-scrolltrigger.jpg) |
| 6 | [lenis.darkroom.engineering](https://lenis.darkroom.engineering/) | Rolagem suave com inércia, que deixa todas as animações de scroll mais fluidas. | Site inteiro. | [ver](referencias/06-lenis.jpg) |
| 7 | [pavio-trading.vercel.app](https://pavio-trading.vercel.app/) (meu projeto anterior) | A stack (Vite, GSAP + ScrollTrigger + SplitText, Lenis) e os títulos revelados por máscara, linha por linha. | Títulos de todas as seções e base técnica do projeto. | [ver](referencias/07-pavio-trading.jpg) |
| 8 | [linear.app](https://linear.app/) (visto no navegador) | Fundo quase preto, título grande que entra com desfoque, a interface do produto como destaque do hero e legendas em fonte mono maiúscula ("Powering the companies building the future"). | Legenda mono sob os **números** e reforço da ideia do notebook mostrando a interface real. | [ver](referencias/08-linear.jpg) |

## Por que essas e não outras

- **Apple como referência principal:** as páginas de produto da Apple resolvem exatamente o problema de um portfólio: mostrar poucas coisas, com muito destaque, para alguém que tem pouco tempo.
- **Uma referência por seção:** em vez de "um site parecido com a Apple" (vago demais, ver [análise crítica](prompts.md#334-análise-crítica-dos-meus-prompts)), cada seção tem uma página e um comportamento específico de origem.
- **Referências de animação e técnicas (5, 6 e 7):** GSAP e Lenis não são design visual, são o comportamento de animação que escolhi (o enunciado aceita referências de animação). O repertório visual de fato vem da Apple (1 a 4) e do Linear (8). A #4 (blocos bento) não tem link nem captura porque é um padrão que aparece em várias páginas de produto da Apple, não uma página única.
- **Limite desta pesquisa:** quase todo o repertório vem de uma fonte (Apple). O Linear foi acrescentado justamente para sair dela; ampliar ainda mais é um dos pontos de evolução listados na reflexão.
- **PAVIO como referência técnica:** reaproveitar uma stack que eu já tinha testado evitou discussão sobre ferramentas e garantiu a qualidade das animações.
