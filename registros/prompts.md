# 3.3 Prompts utilizados

Nesta seção, apresento os prompts relacionados ao desenvolvimento dos
meus projetos com o Claude Code. Organizei o material para diferenciar o
que solicitei originalmente, os problemas identificados durante o
desenvolvimento e a maneira como eu melhoraria minhas instruções hoje.

A ideia não é apresentar um único comando como se todo o projeto tivesse
sido resolvido de uma vez. O desenvolvimento de um site desse tipo
envolve várias decisões e verificações. Por isso, na versão aprimorada,
dividi as solicitações em etapas, permitindo que eu acompanhe os
resultados, avalie cada parte e peça ajustes antes de avançar.

## 3.3.1 Contexto: o projeto anterior que definiu a base tecnológica

Antes de desenvolver meu portfólio, trabalhei no projeto PAVIO Trading.
Foi nele que comecei a utilizar uma base tecnológica que depois quis
reaproveitar.

### Contexto 1 --- Referência visual

Prompt original:

``` text
acesse o link deste video: https://www.youtube.com/watch?v=5ryZ6Tsco9c


veja tudo que o homem produziou, o site que ele fez e faça um exatamente igual e me entregue 100% igual o mesmo site mas agora o MEU site
```

Nesse momento, minha intenção era mostrar uma referência visual e pedir
que a IA me ajudasse a criar um site próprio inspirado no resultado do
vídeo.

### Contexto 2 --- Definição do PAVIO Trading

Prompt original:

``` text
monte o site para um negocio de trade, mercado financeiro, bolsa de valores, nao coloque meus dados, coloque videos e imagens de fundo, voce mesmo deve buscar os melhores videos e imagens, publique na vercel, idioma do site em português
```

Aqui, expliquei a finalidade do site, o idioma, o uso de vídeos e
imagens e a necessidade de publicação na Vercel. Também pedi que meus
dados pessoais não fossem incluídos.

### Contexto 3 --- Acesso ao resultado

Prompt original:

``` text
me mande o link do site para eu ver se ficou exatamente igual
```

Depois, pedi o link para visualizar o resultado no navegador e conferir
se ele correspondia ao que eu tinha em mente.

A experiência com o PAVIO Trading foi importante porque me deu uma
referência concreta de tecnologias e recursos visuais que eu queria
reaproveitar no portfólio.

## 3.3.2 Prompt inicial do portfólio

Quando comecei o portfólio, enviei a seguinte solicitação:

``` text
/Users/danieltorres/Downloads/Checkpoint\ 6.pdf , agora leia este documento e organize para im pensando no site da apple original um site parecido masi usando a tecnologia que voce me entregou no video do trade, com a mesma perfeicao, criatividade e inovacao logico
```

Esse foi o meu pedido inicial. Eu queria usar o documento
`Checkpoint 6.pdf` como base para o conteúdo, tomar o site da Apple como
referência visual e reaproveitar a tecnologia do PAVIO Trading.

O problema é que concentrei muitas decisões em uma mensagem curta.
Expliquei a ideia geral, mas não detalhei quais projetos deveriam
aparecer, como queria organizar as seções ou quais comportamentos
esperava das animações. Também não defini como o resultado deveria ser
testado.

Por isso, a análise a seguir não altera o registro histórico do prompt
original. Ela mostra como eu dividiria o trabalho em solicitações
menores se fosse começar novamente.

## 3.3.3 Correções identificadas durante o desenvolvimento

Conforme registrado no arquivo `correcoes.md`, as correções de número 2
a 7 foram identificadas pela própria IA durante o processo de controle
de qualidade, com apoio de capturas de tela. Entre os problemas
registrados estavam:

-   Projetos com problemas de acesso ou publicação, como o EventKit Pro,
    que apresentava erro 404, e o KidsArena, que aparecia em branco.
-   Uma legenda que aparecia sobre a tela do notebook durante a
    animação.
-   Uma letra cortada em um elemento visual.
-   O último ponto da trajetória que não era ativado corretamente.
-   Falta de contraste do menu em seções claras.
-   Rolagem horizontal indevida em uma tela com largura de 390 pixels.

Esses exemplos mostraram que a aparência inicial não era suficiente para
considerar o site pronto. Era necessário verificar o comportamento das
animações, os links, a responsividade e a apresentação de cada seção.

É importante distinguir as correções identificadas autonomamente pela IA
dos prompts que eu realmente enviei. Não devo registrar como solicitação
minha uma correção que foi iniciada pela própria ferramenta.

## 3.3.4 Análise crítica dos meus prompts

Ao revisar o processo, percebi que eu tinha uma ideia clara do estilo
que queria, mas não tinha explicado todos os detalhes necessários para
chegar ao resultado esperado.

**Conteúdo:** pedi que a IA lesse o documento e organizasse as
informações, mas não defini uma lista fechada de projetos, links e dados
que deveriam aparecer. Isso deu espaço para decisões que depois
precisaram ser verificadas.

**Referência visual:** mencionei a Apple de forma geral, sem indicar
quais páginas ou efeitos eram mais importantes para mim. Hoje, eu
mostraria referências específicas e explicaria o que gosto em cada uma,
sem pedir uma cópia exata.

**Animações:** pedi criatividade e perfeição, mas não descrevi o que
deveria acontecer no início, durante e no final de cada efeito. Se eu
tivesse explicado melhor a sequência, seria mais fácil comparar o
resultado com a minha expectativa.

**Testes:** não indiquei resoluções específicas nem pedi uma verificação
organizada de links, contraste e rolagem horizontal. Agora entendo que
preciso pedir esses testes explicitamente e confirmar quais foram
realmente executados.

**Organização do trabalho:** tentei resolver a ideia geral do site em
uma única mensagem. Em um projeto com várias seções e animações, faz
mais sentido trabalhar por etapas: primeiro o conteúdo, depois o visual,
em seguida as animações e, por fim, os testes e ajustes.

O que funcionou foi ter uma direção visual e uma referência tecnológica.
O que faltou foi transformar essas ideias em instruções mais claras e
acompanhar cada parte do resultado.

## 3.3.5 Como eu dividiria os pedidos hoje

Em vez de enviar um único prompt pedindo para a IA fazer tudo, eu
conduziria o desenvolvimento em etapas. Os prompts abaixo são uma
**proposta de como eu trabalharia hoje**, construída a partir da análise
do projeto. Eles não devem ser confundidos com os comandos que enviei
originalmente.

### Prompt 1 --- Analisar o documento e organizar o conteúdo

``` text
Quero retomar o desenvolvimento do meu portfólio. Primeiro, leia o arquivo Checkpoint 6.pdf que está no projeto e me ajude a entender quais informações podemos aproveitar.

Minha ideia é apresentar meus projetos, minhas habilidades e minha trajetória de uma forma moderna e visualmente interessante. Antes de começar a programar, quero que você me mostre uma proposta de conteúdo para o site.

Separe as informações por possíveis seções e me diga o que pretende colocar em cada uma. Não invente experiências, habilidades, datas ou resultados que não estejam no documento ou em informações que eu tenha fornecido.

Também quero apresentar estes projetos: PAVIO Trading, Orbitrace, StudyCam, DoeVida, EventKit Pro e BuscaGlobal. Antes de sugerir como cada um será exibido, confira os links disponíveis e me diga quais estão publicados e quais estão apenas no GitHub. Se algum link não funcionar, me avise em vez de tratar o projeto como se estivesse funcionando.

Por enquanto, não desenvolva o site inteiro. Quero primeiro revisar a organização das informações e decidir se ela faz sentido.
```

**Por que eu começaria assim:** antes de pensar nas animações, eu
garantiria que o conteúdo está correto e que a IA entendeu o que quero
apresentar.

### Prompt 2 --- Definir o visual e a estrutura das seções

``` text
Agora quero trabalhar na aparência do meu portfólio com base na estrutura de conteúdo que revisamos.

Quero usar o site da Apple como referência de linguagem visual, principalmente pela apresentação dos produtos, pelos títulos grandes, pelo uso de espaços vazios e pelas animações que acompanham a rolagem.

Estas são algumas referências:
- https://www.apple.com/macbook-pro/
- https://www.apple.com/airpods-pro/
- https://www.apple.com/iphone/

Não quero uma cópia exata da Apple. Quero um site próprio, com uma aparência minimalista, moderna e tecnológica, inspirado nesses exemplos.

Quero trabalhar com preto, branco suave, cinza e azul, usando gradiente azul e roxo apenas em alguns detalhes. A tipografia deve ser limpa, com títulos marcantes e textos fáceis de ler.

Minha ideia é ter uma abertura com meu nome e uma apresentação visual dos projetos, uma seção de texto com palavras destacadas durante a rolagem, áreas para mostrar os projetos, uma seção de habilidades, uma linha do tempo e um contato no final.

Antes de implementar todas as seções, mostre como você pretende organizar o layout e explique as principais decisões visuais. Quero poder avaliar a direção do design antes de avançarmos.
```

**Por que eu faria isso em uma etapa separada:** assim, consigo avaliar
a aparência e a organização antes de adicionar animações que podem
tornar as alterações mais difíceis.

### Prompt 3 --- Reaproveitar a tecnologia do PAVIO Trading

``` text
Agora confira a estrutura técnica do projeto e veja como podemos aproveitar a base que utilizei no PAVIO Trading.

Quero manter Vite, GSAP, ScrollTrigger e Lenis, desde que as dependências existentes estejam compatíveis com o projeto atual. Se o SplitText estiver disponível e fizer sentido para os efeitos de texto, podemos utilizá-lo também.

Antes de mudar arquivos ou instalar dependências, confira o que já existe. Quero aproveitar o que estiver funcionando, sem substituir partes importantes do projeto sem necessidade.

Organize o código de uma forma que facilite a manutenção e evite concentrar toda a página em um único componente. Também quero evitar animações duplicadas ou conflitos entre a rolagem suave e o ScrollTrigger.

Faça as alterações necessárias para preparar a estrutura do projeto e me explique brevemente o que foi alterado. Se encontrar algum problema na configuração atual, me avise antes de fazer uma mudança que possa afetar outras partes.
```

**Por que eu faria isso em uma etapa separada:** eu conseguiria entender
a base do projeto antes de começar a construir os efeitos visuais.

### Prompt 4 --- Desenvolver a abertura e as animações principais

``` text
Agora quero começar pela primeira parte visual do portfólio.

Na abertura, quero meu nome, Daniel Torres, em destaque e uma apresentação de um notebook que começa pequeno e aumenta conforme a pessoa rola a página. Dentro dele, quero mostrar meus projetos.

O efeito deve acontecer de forma gradual, sem saltos no tamanho ou no posicionamento do notebook. A legenda só deve aparecer depois que ele chegar ao tamanho final planejado, porque não quero que o texto fique sobre a tela durante a animação.

Depois, quero uma seção com um texto que começa cinza e fica branco progressivamente conforme a pessoa rola a página. A ideia é destacar as palavras em sequência, como se o texto estivesse sendo revelado.

Quero que você implemente esses efeitos primeiro e confira o resultado visualmente. Observe o início, o meio e o final de cada animação. Se algum elemento ficar cortado, aparecer na hora errada ou não completar o efeito, ajuste antes de seguir para as outras seções.

Se alguma referência não puder ser reproduzida exatamente, proponha uma alternativa que preserve a ideia visual e me explique a diferença.
```

**Por que eu faria isso em uma etapa separada:** essas animações são
importantes para a identidade do site. Eu preferiria conferir se estão
funcionando antes de construir o restante em cima delas.

### Prompt 5 --- Montar os projetos e as demais seções

``` text
Agora quero continuar com as seções de projetos, habilidades, trajetória e contato.

Na área de projetos em destaque, quero imagens grandes e um carrossel que avance automaticamente, mas que também permita navegação manual. Inclua um controle para pausar e retomar o movimento.

Em outra seção, quero que a imagem de um projeto permaneça fixa de um lado enquanto os textos mudam conforme a rolagem. Cada texto precisa corresponder à imagem correta, inclusive no último projeto. Ao sair dessa seção, o layout deve continuar normalmente.

Na parte de habilidades, organize as informações em blocos visuais modernos. Relacione as habilidades aos projetos em que foram utilizadas, mas não invente conhecimentos ou níveis de domínio.

Na trajetória, quero uma linha do tempo entre 2024 e 2026, usando apenas as informações confirmadas. No final, inclua uma seção de contato com os links corretos.

Mantenha a mesma identidade visual das seções anteriores. Confira também se os links e as imagens funcionam e me avise se algum projeto não tiver material visual ou informações suficientes para ser apresentado corretamente.
```

**Por que eu faria isso em uma etapa separada:** depois de validar as
animações principais, eu conseguiria completar o conteúdo sem perder a
consistência visual do site.

### Prompt 6 --- Revisar o site e corrigir os problemas

``` text
Quero fazer agora uma revisão do portfólio antes de considerar o trabalho concluído.

Confira o site em telas com larguras de 390, 768 e 1440 pixels. Verifique se existe rolagem horizontal indevida, se algum texto ou elemento fica cortado e se o menu continua legível tanto em fundos claros quanto escuros.

Confira também:
- Se todos os links levam aos destinos corretos.
- Se as imagens e os vídeos carregam.
- Se as animações chegam ao estado final.
- Se o primeiro e o último item das sequências aparecem corretamente.
- Se a imagem fixa acompanha o texto correspondente.
- Se o carrossel permite pausar e navegar manualmente.
- Se existem erros no console.
- Se o projeto inicia e compila corretamente.

Quero que você examine visualmente o resultado, e não apenas confira o código. Se encontrar um problema, identifique a causa, faça a correção e verifique novamente a parte afetada.

Não diga que um teste foi concluído se ele não tiver sido executado de verdade. Se não conseguir verificar alguma coisa com as ferramentas disponíveis, explique o que ficou pendente.

No final, me apresente um resumo simples do que foi verificado, dos problemas corrigidos e do que ainda precisa da minha atenção.
```

**Por que eu faria isso em uma etapa separada:** assim, a revisão deixa
de ser apenas uma impressão visual e passa a incluir verificações
concretas de funcionamento.

## 3.3.6 O que aprendi com essa análise

Ao comparar minha solicitação inicial com essa nova forma de organizar o
trabalho, percebo que a principal mudança não é simplesmente escrever um
prompt maior. É dividir o desenvolvimento em conversas menores, cada uma
com um objetivo claro.

No início, eu expliquei a ideia geral e deixei várias decisões para a
IA. Agora, eu começaria organizando o conteúdo, avaliaria o visual,
conferiria a estrutura técnica e só depois avançaria para as animações e
os testes.

Essa forma de trabalhar me permitiria acompanhar melhor o
desenvolvimento e identificar problemas mais cedo. Também deixaria mais
claro quais decisões partiram de mim, quais sugestões vieram da IA e
quais correções foram identificadas durante a revisão.

Concluo que a colaboração com a inteligência artificial funciona melhor
quando participo de todo o processo: explico o que quero, avalio o que
foi produzido, faço escolhas e peço correções quando o resultado não
corresponde às minhas expectativas. A ferramenta contribui com a
implementação e com sugestões, mas eu continuo responsável por orientar
o projeto e avaliar se a entrega atende ao objetivo.

------------------------------------------------------------------------

**Observação:** os prompts da seção 3.3.1 e o prompt inicial da seção
3.3.2 são os registros originais fornecidos. Os seis prompts da seção
3.3.5 são propostas de como eu dividiria e detalharia o trabalho hoje;
não devem ser apresentados como se tivessem sido enviados originalmente.
As correções e os testes mencionados precisam permanecer coerentes com o
que estiver efetivamente documentado no projeto.
