# 3.4 Registro de correções

Problemas encontrados no QA (abrindo a página, clicando e rolando em desktop e celular), corrigidos um por vez.

**Sobre o campo "Prompt de correção":** as rodadas #2 a #7 foram detectadas e corrigidas pela própria IA ao testar o site com capturas de tela, dentro da execução do prompt inicial. Não houve um prompt de correção separado para elas, e isso está registrado assim em vez de inventar um prompt que não existiu.

---

### #1 · Projeto anterior (PAVIO)
| Campo | Registro |
|---|---|
| **Problema** | Na página de cadastro do PAVIO, o título do topo ficava embaixo do menu fixo. |
| **Prompt de correção** | Nenhum separado: encontrado no QA da própria IA com capturas de tela. |
| **Correção** | Espaço no topo da seção (`padding-top: 120px`). |
| **Resultado** | Resolveu totalmente. |
| **Aprendizado** | Em sites com menu fixo, pedir no prompt que todo primeiro bloco tenha espaço para o menu. |

### #2 · Conteúdo
| Campo | Registro |
|---|---|
| **Problema** | O deploy do EventKit Pro retornou erro 404 e o do KidsArena abriu em branco. Não havia como capturar as telas. |
| **Prompt de correção** | Nenhum separado: detectado pela IA no QA. |
| **Correção** | A IA recriou a interface do EventKit Pro e do BuscaGlobal em HTML/CSS com o aviso "Interface ilustrativa" e linkou o GitHub no lugar do deploy quebrado. |
| **Resultado** | Resolveu em parte: o visual ficou bom, mas o ideal é ter os projetos no ar. |
| **Aprendizado** | Revisar os links de deploy antes e dizer no prompt quais projetos têm site no ar. |

### #3 · Hero
| Campo | Registro |
|---|---|
| **Problema** | A letra "D" de "Daniel Torres." aparecia com um pedaço cortado. |
| **Prompt de correção** | Nenhum separado: detectado pela IA no QA. |
| **Correção** | A causa era o degradê recortado no texto (`background-clip`) somado ao desfoque da animação letra por letra. O título passou a usar cor sólida e o desfoque é removido ao fim da animação. |
| **Resultado** | Resolveu totalmente. |
| **Aprendizado** | Degradê em texto e animação por letra conflitam. Pedir um ou outro, ou pedir teste no Chrome. |

### #4 · Hero
| Campo | Registro |
|---|---|
| **Problema** | A legenda ("PAVIO Trading. Vite, GSAP e Supabase.") aparecia por cima da tela do notebook antes do scroll. |
| **Prompt de correção** | Nenhum separado: detectado pela IA no QA. |
| **Correção** | A legenda fica invisível e só aparece depois que o notebook cresce (a partir de 30% da animação). |
| **Resultado** | Resolveu totalmente. |
| **Aprendizado** | Descrever o estado inicial e o final de cada animação, não só o efeito. |

### #5 · Menu
| Campo | Registro |
|---|---|
| **Problema** | O menu escuro translúcido ficava cinza e sem contraste nas seções de fundo claro. |
| **Prompt de correção** | Nenhum separado: detectado pela IA no QA. |
| **Correção** | O menu troca para a versão clara em seções claras, como na Apple. Num 2º ajuste, o gatilho foi de 52px para 60px, porque ao clicar num link do menu a troca às vezes não disparava. |
| **Resultado** | Resolveu totalmente, em duas rodadas. |
| **Aprendizado** | Em páginas que alternam fundo escuro e claro, pedir desde o início que o menu acompanhe o fundo. |

### #6 · Trajetória
| Campo | Registro |
|---|---|
| **Problema** | O último ponto da linha do tempo ("Produtos com IA") nunca ficava azul: a seção acabava antes dele chegar ao gatilho. |
| **Prompt de correção** | Nenhum separado: detectado pela IA no QA. |
| **Correção** | 1ª rodada: gatilho de 65% para 75% da tela. Não bastou: abrindo direto em `#trajetoria`, nenhum ponto acendia. 2ª rodada: `toggleClass` do ScrollTrigger, que também é aplicado no carregamento. |
| **Resultado** | 1ª rodada resolveu em parte; a 2ª resolveu totalmente. |
| **Aprendizado** | Animações de scroll precisam ser testadas até o último item, não só no primeiro. |

### #7 · Celular
| Campo | Registro |
|---|---|
| **Problema** | Numa tela de 390px, a página tinha 400px de largura e rolava para o lado. |
| **Prompt de correção** | Nenhum separado: detectado pela IA no QA. |
| **Correção** | Os itens da trajetória começavam 30px à direita antes de animar. A seção ganhou `overflow-x: clip`. |
| **Resultado** | Resolveu totalmente. |
| **Aprendizado** | Pedir QA em 390px desde o primeiro prompt e checar rolagem horizontal. |

---

## Evolução

| Tipo de problema | Rodadas | O que mudou no meu jeito de pedir |
|---|---|---|
| Conteúdo | #2 | Listar conteúdo e links em vez de deixar a IA escolher. |
| Animação | #3, #4, #6 | Descrever início e fim de cada animação. |
| Contraste / layout | #1, #5, #7 | Exigir QA em celular e em fundos claros e escuros. |

Todas essas lições estão aplicadas no [prompt inicial reescrito](prompts.md#prompt-inicial-reescrito-versão-que-eu-usaria-hoje).
