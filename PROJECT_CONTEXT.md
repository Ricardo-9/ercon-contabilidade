# ERCON — Contexto do Projeto

Este documento é a fonte de verdade persistente da landing page da ERCON. Ele reúne o briefing consolidado, decisões implementadas e restrições que devem ser preservadas em futuras alterações.

## Objetivo

Landing page institucional premium para **ERCON — Escritório Reis de Contabilidade**, posicionada como uma contabilidade segura, próxima e estratégica para quem empreende.

Público principal: MEI, ME, pequenas empresas, empreendedores e pessoas físicas que precisam de IRPF. Atendimento presencial e online.

## Estado atual e arquitetura

- Aplicação estática, sem framework ou dependências externas.
- `index.html`: conteúdo, semântica, SEO e JSON-LD.
- `styles.css`: sistema visual, responsividade, animações e estados.
- `script.js`: header sticky, menu mobile, reveals, parallax leve e formulário para WhatsApp.
- Não migrar a stack ou reconstruir do zero sem necessidade explícita.
- Não usar a skill Sites neste projeto.

## Referência e direção visual

O arquivo `babdcb6444d3acef73b6682335886135.webp` é a referência do sistema visual. Reproduzir sua composição editorial, hierarquia, ritmo, proporções, espaço negativo, alternância de fundos, cards lineares, imagens grandes, tipografia monumental e refinamento — sem copiar a marca LexCore nem conteúdo jurídico.

O resultado deve parecer uma reconstrução deliberada dessa linguagem para a ERCON, não um template genérico de contabilidade.

Características: editorial, sofisticada, corporativa, minimalista, arquitetônica, séria, elegante e confiante. Comunicar segurança, precisão, transparência, proximidade, organização e crescimento.

Evitar: aparência SaaS/startup, fintech neon, botões pill, cards muito arredondados, gradientes chamativos, glassmorphism, sombras pesadas, excesso de ícones, excesso de azul/dourado e clichês visuais de contabilidade.

## Identidade visual

- Navy principal: `#0D2032`
- Navy secundário: `#122D46`
- Dourado: `#D2A858`
- Dourado escuro: `#B18C4A`
- Off-white dominante: `#F4F0E8`
- Branco suave: `#F1F2F2`
- Texto principal: `#17212A`
- Texto secundário: `#7C7A74`
- Proporção visual aproximada: 60–70% off-white, 20–30% navy, 5–10% dourado.
- Dourado é acento; não criar grandes áreas douradas.
- Tipografia atual: `Avenir Next`, Avenir, `Century Gothic`, Futura, sans-serif.
- Botões retangulares, raio máximo de 2 px, com pequena seta e hover discreto.
- Header e footer usam o símbolo recortado visualmente da `logo-completa.jpg`, preservando seu fundo navy, ao lado do wordmark dourado da versão transparente.

## Assets locais

- `estatua-do-direito-fundo-transparente.png`: estátua transparente do hero; nunca colocar em card ou fundo retangular. O nome permanece sem acentos para compatibilidade com deploys Linux/Vercel.
- `imagem-do-advogado-principal.jpeg`: fotografia institucional; não atribuir nome, cargo ou qualificação.
- `top-view-career-guidance-items-judges.jpg`: imagem estética do martelo e balança.
- `ercon-consultoria-editorial.png`: fotografia editorial gerada e aprovada para a grande faixa institucional; reunião contábil em enquadramento horizontal.
- `ercon-detalhe-contabil.png`: fotografia editorial gerada e aprovada para a seção de contato; trabalho contábil em enquadramento vertical.
- `logo-com-fundo-transparente.png`: logo transparente, adequada quando o recorte funcionar.
- `logo-completa.jpg`: logo completa em fundo navy; usada no símbolo do header/footer e como imagem Open Graph.
- `ercon-favicon.png`: recorte 512×512 do símbolo oficial com interior azul, usado como favicon e Apple touch icon para manter o “E” legível em abas claras e escuras.
- `babdcb6444d3acef73b6682335886135.webp`: referência visual, não conteúdo a copiar.

Não baixar imagens, usar stock ou substituir arquivos por placeholders. Novas imagens geradas só devem ser criadas quando o usuário solicitar explicitamente; depois de aprovadas, devem ser salvas no projeto e registradas aqui.

## Conteúdo oficial

Serviços:

- Abertura e regularização de empresas
- Serviços contábeis
- Serviços fiscais
- Folha de pagamento e rotinas trabalhistas
- IRPF
- Consultoria financeira
- Planejamento tributário

Contato:

- WhatsApp: `+55 88 99761-9647`
- Link: `https://wa.me/5588997619647`
- Instagram: `https://www.instagram.com/ercon_contab/`
- Endereço: Travessa Jacob Felix, 199, Sala 2, Centro, Milagres–CE, CEP 63250-000
- Horário: segunda a sexta, 07:30–16:00; sábado e domingo fechados
- Maps: `https://www.google.com/maps/search/?api=1&query=Travessa+Jacob+Felix+199+Centro+Milagres+CE+63250-000`

## Proibições de conteúdo

Nunca inventar quantidade de clientes, aprovação, anos de experiência, empresas atendidas, prêmios, certificações, avaliações, estrelas, depoimentos, equipe, cargos, CRC, CNPJ, números financeiros ou resultados de clientes.

Não apresentar nenhuma pessoa como contador, advogado, sócio, fundador ou especialista sem informação oficial adicionada pelo usuário.

## Estrutura obrigatória da página

1. Header
2. Hero
3. Manifesto
4. Faixa institucional com quatro informações verificáveis
5. Selo circular de transição
6. Grande fotografia institucional
7. Sobre a ERCON e imagem da balança
8. Princípios: Segurança, Transparência e Crescimento
9. Serviços em quatro cards
10. Seção navy: Começar, Organizar e Crescer
11. Compromisso ERCON
12. Consulta, formulário e WhatsApp
13. Footer
14. Wordmark monumental ERCON

Preservar essa ordem salvo pedido explícito do usuário.

## Hero

- Eyebrow: “Contabilidade para quem quer crescer com segurança”.
- Título: “Segurança contábil para cada fase do seu negócio”.
- Usar a estátua transparente centralizada como protagonista.
- Palavra monumental “CONTÁBIL” em navy com opacidade muito baixa atrás da estátua.
- Informações laterais no desktop: “Presencial + online” e “Milagres • CE”.
- CTA principal para agendamento no WhatsApp; CTA secundário para `#servicos`.
- No mobile, priorizar legibilidade e manter a estátua abaixo do conteúdo, sem cortar de forma estranha.
- Texto, CTAs e palco visual da estátua ocupam blocos separados; não voltar a sobrepor botões ou texto de apoio à imagem.

## Interações e comportamento

- Header fixo, integrado ao hero e com fundo off-white translúcido ao rolar.
- Menu mobile acessível com `aria-expanded`, travamento do body e CTA de WhatsApp.
- Reveals via IntersectionObserver, sem dependência externa.
- Movimento discreto: fade/translate, stagger curto, reveal de imagens e parallax máximo sutil.
- Respeitar `prefers-reduced-motion` e manter tudo funcional sem animação.
- Âncoras existentes: `#inicio`, `#sobre`, `#servicos`, `#como-ajudamos`, `#contato`.

## Formulário

Sem backend. Campos: nome, WhatsApp, empresa/atividade, serviço e mensagem. Nome, WhatsApp e serviço são obrigatórios.

Ao enviar, montar mensagem URL-encoded e abrir o WhatsApp da ERCON. Não remover validação, feedback acessível (`role="alert"`) nem mensagens contextuais dos CTAs.

## Acessibilidade

- HTML semântico com header, nav, main, section, article e footer.
- Ordem coerente de headings.
- Imagens informativas com alt; imagens decorativas com alt vazio.
- Navegação por teclado, foco visível, contraste adequado e labels reais.
- Menu mobile operável por teclado.
- Layout funcional em zoom e com movimento reduzido.

## Responsividade

- Desktop: composição editorial completa e assimétrica.
- Tablet: preservar hierarquia e converter serviços em grade 2×2.
- Mobile: composição própria, cards em uma coluna, blocos empilhados e wordmark ainda visível.
- Verificar especialmente 360, 390 e 430 px.
- Nenhum conteúdo pode gerar overflow horizontal.

## SEO e dados estruturados

- Title: `ERCON | Escritório Reis de Contabilidade em Milagres - CE`
- Description: contabilidade para MEI, ME e pequenas empresas em Milagres–CE, listando os serviços reais.
- JSON-LD `AccountingService` com telefone, endereço, Instagram e `Mo-Fr 07:30-16:00`.
- Nunca incluir rating ou aggregateRating.

## Checklist antes de finalizar alterações

1. Validar sintaxe HTML/JS.
2. Rodar a página localmente.
3. Verificar desktop, tablet e mobile.
4. Testar menu, âncoras e formulário.
5. Confirmar links e mensagens do WhatsApp.
6. Confirmar carregamento de todos os assets.
7. Inspecionar console.
8. Verificar overflow horizontal.
9. Conferir acessibilidade básica e `prefers-reduced-motion`.
10. Fazer uma segunda passagem visual em tipografia, espaçamento e crops.
11. Confirmar que nenhuma informação não comprovada foi introduzida.
