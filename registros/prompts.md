# 3.3 Prompts utilizados

Copiados **exatamente** como foram enviados ao Claude Code (modelo Claude Opus 5.5), sem correção de digitação, na ordem de envio. Como pede o enunciado, nenhum prompt foi escondido ou reescrito.

## Contexto: o projeto anterior que definiu a stack

Antes do portfólio, fiz o site PAVIO Trading. Foi nele que escolhi a stack reaproveitada aqui.

**Contexto 1**
```
acesse o link deste video: https://www.youtube.com/watch?v=5ryZ6Tsco9c


veja tudo que o homem produziou, o site que ele fez e faça um exatamente igual e me entregue 100% igual o mesmo site mas agora o MEU site
```

**Contexto 2**
```
monte o site para um negocio de trade, mercado financeiro, bolsa de valores, nao coloque meus dados, coloque videos e imagens de fundo, voce mesmo deve buscar os melhores videos e imagens, publique na vercel, idioma do site em português
```

**Contexto 3**
```
me mande o link do site para eu ver se ficou exatamente igual
```

## Prompt inicial do portfólio

```
/Users/danieltorres/Downloads/Checkpoint\ 6.pdf , agora leia este documento e organize para im pensando no site da apple original um site parecido masi usando a tecnologia que voce me entregou no video do trade, com a mesma perfeicao, criatividade e inovacao logico
```

**Decisões que eram minhas neste prompt:**
- a referência visual (o site da Apple);
- a stack (a mesma do PAVIO: Vite, GSAP, Lenis);
- o nível de exigência ("mesma perfeição, criatividade e inovação").

## Prompts de ajuste

Até a entrega, nenhum prompt de ajuste do site foi registrado depois do prompt inicial. As correções #2 a #7 foram encontradas pela própria IA no QA com capturas de tela (ver [correcoes.md](correcoes.md)). Se novos ajustes forem feitos, entram aqui, na ordem de envio.

## Análise crítica do prompt inicial

Reli o prompt inicial depois do projeto pronto, comparando o que pedi com o que precisou ser corrigido.

| Falha no prompt | Efeito no projeto | Como eu escreveria hoje |
|---|---|---|
| **Não defini o conteúdo.** Pedi "organize", sem listar projetos, skills e eventos. A IA escolheu sozinha vasculhando minhas pastas e o GitHub. | Entraram projetos com deploy quebrado (EventKit Pro 404, KidsArena em branco) → correção #2 e interfaces "ilustrativas". | Listar os projetos, o link de cada um e quais estão no ar. |
| **"Parecido com o site da Apple" não é verificável.** A Apple tem dezenas de páginas. | A IA interpretou o estilo à vontade; as referências só foram definidas depois. | Citar páginas e efeitos exatos: "notebook que cresce com o scroll (MacBook Pro)", "texto que acende palavra por palavra (AirPods Pro)". |
| **Não descrevi o estado inicial e final das animações.** | Legenda sobre a tela do notebook (#4), "D" cortado (#3), último ponto da trajetória nunca acendia (#6). | Descrever cada animação em "começa assim, termina assim". |
| **Faltaram requisitos de QA.** | Menu sem contraste em seções claras (#5) e rolagem horizontal em 390px (#7). | Exigir teste em 390px e 1440px, sem rolagem lateral e com contraste do menu. |
| **Misturei tarefas no mesmo pedido.** Ler o PDF, criar o design, escolher tecnologia e entregar. | Difícil saber de onde vinha cada erro. | Dividir em etapas: 1) estrutura e conteúdo, 2) IDV, 3) animações, 4) QA. |

**O que funcionou:** apontar a stack de um projeto anterior deu à IA uma base técnica clara. Mas "a mesma perfeição" sem critérios ficou vago: perfeição só vira requisito quando vem com medidas, como "sem rolagem horizontal" ou "contraste legível".

### Prompt inicial reescrito (versão que eu usaria hoje)

```
Leia o PDF do Checkpoint 6 e crie meu portfólio em uma página, no estilo das páginas de produto da Apple, com a mesma stack do PAVIO (Vite, GSAP com ScrollTrigger e SplitText, Lenis). Faça em etapas e me mostre cada uma antes de seguir.

Conteúdo (use só isto):
- Projetos no ar: PAVIO Trading, Orbitrace, StudyCam, DoeVida (com o link de cada um).
- Projetos só no GitHub: EventKit Pro, BuscaGlobal (sem deploy: use o link do repositório e uma interface ilustrativa).
- Skills por área, cada uma ligada a um desses projetos.
- Trajetória de 2024 a 2026.

Seções e referências:
1. Hero: "Daniel Torres." e um notebook que começa pequeno e termina ocupando a tela, mostrando os projetos (ref.: apple.com/macbook-pro). A legenda só aparece depois que o notebook cresce.
2. Manifesto: parágrafo cinza cujas palavras ficam brancas com o scroll (ref.: apple.com/airpods-pro).
3. Destaques: carrossel com autoplay e botão de pausa (ref.: apple.com/iphone).
4. Projetos: tela fixa à esquerda que troca conforme o texto rola (ref.: GSAP ScrollTrigger).
5. Skills em blocos "bento", Trajetória em linha do tempo, Contato.

Identidade: fundo #000000 e #F5F5F7 alternados, texto #1D1D1F e #86868B, destaque #2997FF, degradê #2997FF→#BF5AF2 só em palavras-chave. Fonte Inter, títulos 600 com espaçamento negativo. Tom confiante e direto, frases curtas com ponto final.

QA obrigatório antes de entregar: testar em 390px e 1440px, sem rolagem horizontal, menu legível em fundo claro e escuro, todas as animações conferidas até o último item, todos os links abrindo.
```
