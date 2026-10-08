import {
  Smile, Anchor, Sparkles, Layers, AlignCenter, Activity,
  Leaf, Syringe, Wand2, Droplets, Flame, Wind, Sun, Brush, ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type FAQ = { q: string; a: string };
export type Step = { title: string; text: string };

export type Service = {
  slug: string;
  icon: LucideIcon;
  category: "Odontologia" | "Harmonização Orofacial" | "Estética Avançada";
  title: string;
  tagline: string;
  text: string;
  hero: string;
  longDescription: string[];
  indications: string[];
  benefits: { title: string; text: string }[];
  process: Step[];
  differentials: string[];
  results: string[];
  faq: FAQ[];
  /** Unique meta description for the treatment page. */
  seoDescription?: string;
  /** Limits, alternatives and care points shown in "Avaliação e limites". */
  limits?: string[];
};

const standardProcess: Step[] = [
  { title: "Diagnóstico online", text: "Conversa inicial e envio de fotos para um direcionamento personalizado antes mesmo de você ir à clínica." },
  { title: "Avaliação presencial", text: "Exame clínico, análise facial e, quando necessário, exames de imagem para construir o plano individualizado." },
  { title: "Plano de tratamento", text: "Apresentação do passo a passo, prazos, investimento e simulação do resultado quando aplicável." },
  { title: "Execução técnica", text: "Procedimentos conduzidos pela Dra. Cássia e equipe, com tecnologia de ponta e foco em conforto." },
  { title: "Acompanhamento", text: "Retornos programados, manutenção e protocolos de longevidade do resultado." },
];

const sharedDifferentials = [
  "Atendimento conduzido pela Dra. Cássia e equipe multidisciplinar formada dentro do mesmo padrão técnico",
  "Tecnologia de última geração em odontologia e harmonização orofacial",
  "Plano individualizado, com decisões clínicas baseadas em evidências e critérios estéticos",
  "Diagnóstico online antes da visita à clínica, otimizando seu tempo",
];

export const services: Service[] = [
  {
    slug: "odontologia-estetica",
    icon: Smile,
    category: "Odontologia",
    title: "Odontologia Estética",
    tagline: "Sorrisos naturais, harmônicos e fiéis ao seu rosto.",
    text: "Sorrisos naturais, harmônicos e fiéis ao seu rosto.",
    hero: "Planejamento digital de sorriso com sensibilidade estética e domínio técnico, para um resultado que parece seu desde o primeiro dia.",
    longDescription: [
      "A Odontologia Estética da L'ECLER vai muito além de clarear ou alinhar dentes: é desenho de sorriso. Estudamos proporções faciais, traços, idade, personalidade e função para projetar um sorriso que conversa com o seu rosto.",
      "Utilizamos protocolos de desenho digital do sorriso (DSD), prova estética em 3D e simulação prévia para que você visualize o resultado antes de qualquer procedimento irreversível. Cada etapa é validada com você: nada é decidido para a paciente, e sim com a paciente.",
    ],
    indications: [
      "Quem quer melhorar a forma, cor ou proporção dos dentes",
      "Sorrisos com assimetrias, desgastes ou restaurações antigas visíveis",
      "Pacientes em planejamento de casamento, exposição pública ou nova fase de vida",
      "Quem busca um sorriso natural, sem aparência artificial",
    ],
    benefits: [
      { title: "Planejamento digital (DSD)", text: "Projeto 3D do sorriso antes de iniciar qualquer procedimento." },
      { title: "Prova estética testável", text: "Você experimenta o sorriso novo na boca antes de decidir." },
      { title: "Clareamento profissional", text: "Protocolo seguro, com avaliação de sensibilidade e manutenção." },
      { title: "Estética indetectável", text: "Materiais nobres que mimetizam o esmalte natural." },
    ],
    process: standardProcess,
    differentials: sharedDifferentials,
    results: [
      "Sorriso harmônico, proporcional ao seu rosto",
      "Aparência natural, sem sinais artificiais",
      "Mais segurança ao sorrir, falar e aparecer",
    ],
    seoDescription: "Odontologia estética em Bragança Paulista/SP na Clínica L'ECLER: planejamento do sorriso que considera proporção facial, saúde bucal e naturalidade.",
    limits: ["Procedimentos restauradores podem envolver preparo dental irreversível; isso é explicado antes.", "Simulações ajudam a visualizar, mas não garantem resultado idêntico.", "Gengiva, cáries e mordida precisam estar controladas antes da etapa estética."],
    faq: [
      { q: "O resultado fica natural?", a: "Sim. Todo o planejamento é guiado pela análise do seu rosto, traços e proporções. O objetivo é parecer seu, só que melhor." },
      { q: "Vou ver o resultado antes?", a: "Sim. Fazemos planejamento digital e prova estética para você validar antes de qualquer procedimento definitivo." },
      { q: "Quanto tempo dura o tratamento?", a: "Varia conforme o caso. Casos estéticos simples levam poucas semanas; reabilitações mais amplas, alguns meses, com cronograma claro." },
    ],
  },
  {
    slug: "implantes",
    icon: Anchor,
    category: "Odontologia",
    title: "Implantes",
    tagline: "Reabilitação completa com precisão técnica e conforto.",
    text: "Reabilitação completa com precisão técnica e conforto.",
    hero: "Reabilitação oral com implantes de última geração, planejamento digital guiado e equipe multidisciplinar para devolver função, estética e autoestima.",
    longDescription: [
      "Perder um ou vários dentes não é uma questão apenas estética: compromete mastigação, fala, suporte facial e autoestima. Nossa abordagem com implantes parte do diagnóstico tridimensional para devolver tudo isso com previsibilidade.",
      "Trabalhamos com cirurgia guiada por computador, marcas premium de implantes e equipe multidisciplinar (cirurgia, prótese e estética). Em casos indicados, oferecemos carga imediata, e você sai com dente provisório no mesmo dia.",
    ],
    indications: [
      "Perda de um ou mais dentes",
      "Necessidade de troca de próteses antigas que ficaram desconfortáveis",
      "Reabilitação total da arcada (protocolo All-on-X)",
      "Pacientes que querem voltar a mastigar e sorrir com segurança",
    ],
    benefits: [
      { title: "Cirurgia guiada", text: "Planejamento 3D que aumenta precisão e reduz tempo cirúrgico." },
      { title: "Carga imediata", text: "Quando indicado, prótese provisória no mesmo dia da cirurgia." },
      { title: "Implantes premium", text: "Marcas com décadas de pesquisa e altíssima taxa de sucesso." },
      { title: "Equipe multidisciplinar", text: "Cirurgia, prótese e estética integradas no mesmo plano." },
    ],
    process: standardProcess,
    differentials: sharedDifferentials,
    results: [
      "Mastigação eficiente e confortável",
      "Sorriso estável e estético",
      "Preservação óssea no longo prazo",
    ],
    seoDescription: "Implantes dentários em Bragança Paulista/SP na Clínica L'ECLER: avaliação de osso, gengiva e saúde geral para planejar a reposição de dentes.",
    limits: ["Implantes envolvem cirurgia; saúde geral, tabagismo e medicamentos influenciam a indicação.", "Volume ósseo insuficiente pode exigir etapas adicionais ou outra solução.", "Carga imediata depende de critérios clínicos e não vale para todos os casos.", "Implantes exigem higiene e manutenção periódica, como dentes naturais."],
    faq: [
      { q: "A cirurgia dói?", a: "Não. É feita com anestesia local e protocolos modernos de conforto. O pós-operatório costuma ser mais tranquilo do que pacientes imaginam." },
      { q: "Quanto tempo até o dente definitivo?", a: "Depende do caso. Algumas situações permitem provisório no mesmo dia; o definitivo geralmente entra entre 3 e 6 meses." },
      { q: "Implante dura a vida toda?", a: "Com indicação correta, técnica adequada e manutenção, implantes têm uma das maiores taxas de sucesso da odontologia a longo prazo." },
    ],
  },
  {
    slug: "proteses",
    icon: Layers,
    category: "Odontologia",
    title: "Próteses",
    tagline: "Soluções funcionais e estéticas, planejadas individualmente.",
    text: "Soluções funcionais e estéticas, planejadas individualmente.",
    hero: "Próteses fixas, removíveis e sobre implantes desenvolvidas com materiais nobres e tecnologia CAD/CAM para máxima precisão, conforto e estética.",
    longDescription: [
      "Uma boa prótese é a soma de diagnóstico preciso, planejamento estético e execução técnica. Trabalhamos com zircônia, dissilicato e resinas de última geração para resultados que devolvem função sem abrir mão da estética.",
      "Tudo é planejado individualmente, considerando oclusão, estética facial e expectativa de cada paciente. Próteses bem feitas não são notadas; são vividas.",
    ],
    indications: [
      "Substituição de próteses antigas",
      "Reabilitação sobre implantes",
      "Coroas e onlays para dentes muito comprometidos",
      "Pacientes que querem unir estética e função",
    ],
    benefits: [
      { title: "Materiais nobres", text: "Zircônia e dissilicato de alta estética e resistência." },
      { title: "Tecnologia CAD/CAM", text: "Precisão milimétrica e adaptação superior." },
      { title: "Estética natural", text: "Reproduzimos translucidez e textura do dente natural." },
      { title: "Plano individualizado", text: "Cada caso é único, nada é solução de prateleira." },
    ],
    process: standardProcess,
    differentials: sharedDifferentials,
    results: [
      "Sorriso confortável e estável",
      "Estética que se confunde com dente natural",
      "Mastigação devolvida sem desconforto",
    ],
    seoDescription: "Próteses dentárias em Bragança Paulista/SP na Clínica L'ECLER: opções fixas, removíveis e sobre implantes planejadas conforme função, conforto e manutenção.",
    limits: ["Cada tipo de prótese tem vantagens, limites e necessidade de manutenção diferentes.", "Próteses removíveis exigem adaptação e ajustes ao longo do tempo.", "A escolha depende de osso, gengiva, mordida, higiene e orçamento."],
    faq: [
      { q: "Próteses modernas parecem dentes naturais?", a: "Sim. Com zircônia, dissilicato e técnica adequada, é praticamente impossível diferenciar." },
      { q: "Quanto tempo demora?", a: "Em geral, de 2 a 6 semanas após o preparo, conforme complexidade." },
      { q: "Vou precisar de ajustes?", a: "Pequenos ajustes finais são comuns para garantir oclusão e conforto perfeitos." },
    ],
  },
  {
    slug: "facetas-e-lentes-de-contato",
    icon: Sparkles,
    category: "Odontologia",
    title: "Facetas e Lentes de Contato",
    tagline: "Design de sorriso minimamente invasivo.",
    text: "Design de sorriso minimamente invasivo.",
    hero: "Lâminas ultrafinas em cerâmica para redesenhar forma, cor e proporção do sorriso com mínimo desgaste e máxima naturalidade.",
    longDescription: [
      "Facetas e lentes de contato são uma das soluções mais elegantes da odontologia estética moderna: corrigem cor, forma, alinhamento aparente e proporção com desgaste mínimo (em muitos casos, sem desgaste).",
      "Trabalhamos com planejamento digital, prova estética testável e ceramistas parceiros de altíssimo padrão. Você só fecha o tratamento depois de aprovar o sorriso na sua própria boca.",
    ],
    indications: [
      "Dentes manchados que não respondem ao clareamento",
      "Pequenas alterações de forma, proporção ou alinhamento",
      "Diastemas (espaços) entre dentes",
      "Desejo de redesenhar o sorriso de forma minimamente invasiva",
    ],
    benefits: [
      { title: "Mínimo desgaste", text: "Preservação máxima do dente natural." },
      { title: "Mock-up prévio", text: "Você vê e aprova o sorriso antes de iniciar." },
      { title: "Cerâmica de alta translucidez", text: "Aparência natural que não envelhece como resina." },
      { title: "Resultado duradouro", text: "Com manutenção, dura muitos anos preservando estética." },
    ],
    process: standardProcess,
    differentials: sharedDifferentials,
    results: [
      "Sorriso desenhado sob medida para o seu rosto",
      "Cor estável e estética sofisticada",
      "Confiança ao sorrir em fotos e ao vivo",
    ],
    seoDescription: "Facetas e lentes de contato dental em Bragança Paulista/SP na Clínica L'ECLER: planejamento estético, prova e avaliação de mordida antes da decisão.",
    limits: ["Facetas são um tratamento não reversível quando há preparo do esmalte.", "'Lente' não significa ausência garantida de desgaste; depende de cada caso.", "Bruxismo e mordida precisam ser avaliados; clareamento ou alinhadores podem ser alternativas."],
    faq: [
      { q: "Precisa desgastar muito o dente?", a: "Não. Lentes ultrafinas exigem pouquíssimo ou nenhum desgaste. Sempre buscamos o protocolo mais conservador possível." },
      { q: "Mancha com o tempo?", a: "Cerâmica não mancha como resina. Mantida a higiene e os retornos, a cor se mantém estável por muitos anos." },
      { q: "Quanto tempo demora?", a: "Em geral, de 2 a 4 semanas entre o planejamento e a instalação definitiva." },
    ],
  },
  {
    slug: "ortodontia-invisalign",
    icon: AlignCenter,
    category: "Odontologia",
    title: "Ortodontia e Invisalign",
    tagline: "Alinhamento discreto, previsível e eficiente.",
    text: "Alinhamento discreto, previsível e eficiente.",
    hero: "Alinhadores invisíveis Invisalign e aparelhos estéticos com planejamento digital 3D, para alinhar o sorriso sem interromper sua vida.",
    longDescription: [
      "O Invisalign substitui o aparelho fixo por alinhadores transparentes removíveis. O planejamento é digital e em 3D, mostrando o movimento dos dentes desde a primeira até a última etapa. Assim, você sabe exatamente o que esperar.",
      "Por ser removível, não interfere na alimentação, na higiene, em eventos sociais ou na vida profissional. É a escolha de quem quer alinhar o sorriso com discrição e previsibilidade.",
    ],
    indications: [
      "Apinhamentos leves a moderados",
      "Diastemas (espaços) entre dentes",
      "Correção pré-protética antes de lentes ou facetas",
      "Adultos que rejeitam aparelho fixo aparente",
    ],
    benefits: [
      { title: "Praticamente invisível", text: "Alinhadores transparentes, quase ninguém percebe." },
      { title: "Removível", text: "Você tira para comer e higienizar normalmente." },
      { title: "Planejamento 3D", text: "Visualização do resultado desde o início." },
      { title: "Previsibilidade", text: "Cronograma claro de etapas e duração." },
    ],
    process: standardProcess,
    differentials: sharedDifferentials,
    results: [
      "Sorriso alinhado com discrição total",
      "Mais conforto que aparelhos fixos",
      "Base ideal para tratamentos estéticos posteriores",
    ],
    seoDescription: "Invisalign em Bragança Paulista/SP na Clínica L'ECLER: alinhadores transparentes com planejamento digital e acompanhamento ao longo do tratamento.",
    limits: ["O resultado depende do uso diário correto dos alinhadores.", "A simulação digital orienta o plano, mas não é garantia exata de resultado ou prazo.", "Alguns casos podem ter melhor indicação com outras abordagens ortodônticas.", "A contenção é necessária para manter a posição alcançada."],
    faq: [
      { q: "Invisalign serve para qualquer caso?", a: "Para a maioria dos casos, sim. Em situações muito complexas, indicamos a melhor estratégia, às vezes combinada." },
      { q: "Quanto tempo demora?", a: "Em média de 6 a 18 meses, dependendo da complexidade. O plano mostra a duração estimada já no início." },
      { q: "Preciso usar muitas horas por dia?", a: "Sim, em torno de 22 horas por dia. Removível apenas para alimentação e higiene." },
    ],
  },
  {
    slug: "endodontia",
    icon: Activity,
    category: "Odontologia",
    title: "Endodontia (Canal)",
    tagline: "Tratamento de canal com tecnologia e mínimo desconforto.",
    text: "Tratamento de canal com tecnologia e mínimo desconforto.",
    hero: "Tratamento endodôntico com microscopia e instrumentação rotatória, para preservar o dente natural com segurança, precisão e conforto.",
    longDescription: [
      "O tratamento de canal mudou. Com microscopia operatória e instrumentação rotatória, é possível tratar canais com altíssima precisão, sessões mais curtas e pós-operatório muito mais confortável do que antigamente.",
      "Salvar um dente natural quase sempre é a melhor escolha, tanto para a estética quanto para a oclusão e a longevidade da boca como um todo.",
    ],
    indications: [
      "Dor espontânea ou ao mastigar",
      "Sensibilidade prolongada ao frio ou calor",
      "Dente escurecido sem causa aparente",
      "Lesões periapicais identificadas em radiografia",
    ],
    benefits: [
      { title: "Microscopia operatória", text: "Visualização aumentada para mais precisão." },
      { title: "Instrumentação rotatória", text: "Sessões mais rápidas e eficientes." },
      { title: "Mínimo desconforto", text: "Anestesia eficaz e protocolos modernos de manejo da dor." },
      { title: "Preservação do dente", text: "Salvar o dente natural é quase sempre a melhor escolha." },
    ],
    process: standardProcess,
    differentials: sharedDifferentials,
    results: [
      "Alívio rápido da dor",
      "Dente preservado e funcional",
      "Base para restauração ou prótese definitiva",
    ],
    seoDescription: "Tratamento de canal em Bragança Paulista/SP na Clínica L'ECLER: diagnóstico da dor e das alterações da polpa para preservar o dente sempre que possível.",
    limits: ["Nem todo dente pode ser preservado; isso é discutido após o diagnóstico.", "Após o canal, o dente precisa de restauração adequada, às vezes coroa.", "Dificuldade para respirar ou engolir com inchaço exige pronto-socorro imediato."],
    faq: [
      { q: "Canal dói?", a: "Não. O dente costuma doer antes; o tratamento é o que tira a dor. É feito com anestesia local eficaz." },
      { q: "Em quantas sessões?", a: "A maioria dos casos é resolvida em uma ou duas sessões." },
      { q: "Vou precisar de coroa depois?", a: "Em muitos casos, sim, especialmente em dentes posteriores. Avaliamos o melhor protocolo para proteger o dente tratado." },
    ],
  },
  {
    slug: "odontologia-preventiva-integrativa",
    icon: Leaf,
    category: "Odontologia",
    title: "Odontologia Preventiva e Integrativa",
    tagline: "Saúde bucal aliada ao bem-estar do corpo todo.",
    text: "Saúde bucal aliada ao bem-estar do corpo todo.",
    hero: "Uma visão integrativa que conecta saúde bucal e bem-estar sistêmico, para prevenir antes de tratar e manter equilíbrio a longo prazo.",
    longDescription: [
      "A boca é uma porta de entrada para o corpo. Inflamações, microbioma desequilibrado e hábitos do dia a dia impactam a saúde sistêmica, e vice-versa. Por isso, trabalhamos com uma visão integrativa.",
      "Protocolos preventivos personalizados, orientação de higiene, avaliação de hábitos, manutenção profissional periódica e olhar atento ao paciente como um todo, e não apenas à boca isolada.",
    ],
    indications: [
      "Quem quer prevenir problemas antes que apareçam",
      "Pacientes com histórico de cárie ou doença periodontal recorrente",
      "Pacientes em tratamentos estéticos que querem proteger o investimento",
      "Quem busca uma abordagem integrativa de saúde",
    ],
    benefits: [
      { title: "Avaliação integrativa", text: "Olhar para o paciente como um todo." },
      { title: "Protocolos personalizados", text: "Plano preventivo baseado no seu risco individual." },
      { title: "Higienização profissional", text: "Limpeza profunda com tecnologia adequada a cada caso." },
      { title: "Acompanhamento contínuo", text: "Manutenções periódicas com cronograma claro." },
    ],
    process: standardProcess,
    differentials: sharedDifferentials,
    results: [
      "Menos intervenções ao longo da vida",
      "Saúde bucal estável e previsível",
      "Investimento estético protegido a longo prazo",
    ],
    seoDescription: "Odontologia preventiva em Bragança Paulista/SP na Clínica L'ECLER: avaliação, controle de biofilme e retornos definidos conforme o seu risco.",
    limits: ["A frequência de retornos é individual e muda com o risco de cada pessoa.", "Prevenção não substitui escovação e fio dental diários.", "Achados na consulta podem exigir tratamentos complementares."],
    faq: [
      { q: "Com que frequência devo fazer manutenção?", a: "A maioria dos pacientes se beneficia de 2 a 4 visitas por ano, conforme risco individual." },
      { q: "Preventivo serve mesmo para quem já tem problemas?", a: "Sim, e principalmente. Controle e prevenção evitam recidiva e protegem tratamentos já realizados." },
      { q: "Vocês orientam alimentação e hábitos?", a: "Sim. A visão integrativa inclui hábitos do dia a dia que impactam diretamente a saúde bucal." },
    ],
  },
  {
    slug: "airflow-prevencao-suica",
    icon: Wind,
    category: "Odontologia",
    title: "Airflow e Prevenção Suíça",
    tagline: "Profilaxia premium para cuidar da saúde bucal com mais conforto.",
    text: "Tecnologia suíça de prevenção, limpeza e manutenção do sorriso.",
    hero: "Airflow Prophylaxis Master para prevenção avançada, remoção de biofilme e profilaxia mais confortável, precisa e sofisticada.",
    longDescription: [
      "Prevenção é parte central da odontologia integrada da L'ECLER. Antes de pensar em facetas, lentes, Invisalign ou implantes, é preciso cuidar da base: gengiva, biofilme, manchas superficiais, microbioma bucal e risco individual de doença.",
      "O Airflow Prophylaxis Master é uma tecnologia suíça que permite uma profilaxia mais confortável e eficiente, com jato controlado de ar, água e pó específico. O protocolo ajuda na remoção de biofilme e pigmentações, tornando a manutenção mais agradável para pacientes exigentes.",
    ],
    indications: [
      "Pacientes que desejam prevenção de alto padrão",
      "Manutenção de Invisalign, facetas, lentes, implantes e próteses",
      "Controle de biofilme e manchas superficiais",
      "Quem busca limpeza profissional mais confortável",
    ],
    benefits: [
      { title: "Tecnologia suíça", text: "Airflow Prophylaxis Master para profilaxia moderna e precisa." },
      { title: "Mais conforto", text: "Limpeza profissional com experiência mais leve para o paciente." },
      { title: "Manutenção estética", text: "Apoio na preservação de facetas, lentes, implantes e alinhadores." },
      { title: "Prevenção integrativa", text: "Cuidado contínuo para proteger a saúde, a estética e a longevidade do sorriso." },
    ],
    process: standardProcess,
    differentials: sharedDifferentials,
    results: [
      "Sorriso com sensação de limpeza e frescor",
      "Prevenção com tecnologia de alto padrão",
      "Base mais saudável para tratamentos estéticos e reabilitadores",
    ],
    seoDescription: "Limpeza dentária com Airflow em Bragança Paulista/SP na Clínica L'ECLER: remoção de biofilme e manchas superficiais dentro de um plano de prevenção.",
    limits: ["Airflow não é clareamento: não altera a cor interna dos dentes.", "Tártaro endurecido pode exigir raspagem além do Airflow.", "A indicação e a frequência dependem do exame da gengiva e dos dentes."],
    faq: [
      { q: "Airflow substitui a limpeza profissional?", a: "Ele é uma tecnologia usada dentro da profilaxia profissional, com indicação definida após avaliação." },
      { q: "Serve para quem usa Invisalign?", a: "Sim. A manutenção preventiva é importante para quem usa alinhadores, facetas, lentes, próteses ou implantes." },
      { q: "É mais confortável?", a: "Em geral, sim. O protocolo foi desenvolvido para uma experiência mais eficiente e agradável, sempre respeitando cada caso." },
    ],
  },
  {
    slug: "botox-e-preenchimentos",
    icon: Syringe,
    category: "Harmonização Orofacial",
    title: "Botox, Preenchimentos e Reestruturação",
    tagline: "Suavização de linhas e reposição estratégica, sem exagero.",
    text: "Toxina, preenchimentos e reestruturação facial com naturalidade.",
    hero: "Toxina botulínica e ácido hialurônico aplicados com técnica refinada para suavizar linhas e reestruturar pontos específicos, preservando expressão e identidade.",
    longDescription: [
      "Harmonização não é mudar o rosto. É devolver equilíbrio. Toxina botulínica suaviza linhas dinâmicas; preenchimentos com ácido hialurônico podem reestruturar pontos específicos quando há indicação, sempre respeitando expressão e proporção facial.",
      "Na L'ECLER, esses recursos entram dentro de um plano maior, ao lado de fios, bioestimulação, biorregeneração e tecnologias de rejuvenescimento. O objetivo é sempre o rosto descansado, nunca o rosto modificado.",
    ],
    indications: [
      "Linhas de expressão (testa, glabela, pés de galinha)",
      "Perda de volume em malar, têmporas, lábios e contorno",
      "Olheiras profundas (tear trough)",
      "Definição leve de mandíbula e mento",
    ],
    benefits: [
      { title: "Toxina premium", text: "Produtos de alta qualidade e segurança comprovada." },
      { title: "Ácido hialurônico premium", text: "Reestruturação pontual, reversível e segura." },
      { title: "Técnica conservadora", text: "Menos é mais. O objetivo é parecer descansada, não diferente." },
      { title: "Plano individualizado", text: "Análise facial completa antes de qualquer aplicação." },
    ],
    process: standardProcess,
    differentials: sharedDifferentials,
    results: [
      "Aparência descansada e suave",
      "Volumes naturais devolvidos",
      "Expressividade preservada",
    ],
    seoDescription: "Botox e preenchimento em Bragança Paulista/SP na Clínica L'ECLER: avaliação facial para indicar aplicações discretas, com foco em naturalidade.",
    limits: ["Os efeitos são temporários e variam de pessoa para pessoa.", "Nem toda queixa facial é resolvida com toxina ou preenchedor.", "Condições de saúde e medicamentos podem contraindicar o procedimento."],
    faq: [
      { q: "Vou ficar com cara de \"feita\"?", a: "Não. Nossa abordagem é conservadora e individualizada. O objetivo é você parecer descansada, não modificada." },
      { q: "Quanto tempo dura?", a: "Toxina botulínica de 4 a 6 meses; preenchimentos com ácido hialurônico de 9 a 18 meses, conforme produto e região." },
      { q: "Tem tempo de recuperação?", a: "Praticamente nenhum. Pode haver discreto inchaço ou pequenos hematomas que somem em poucos dias." },
    ],
  },
  {
    slug: "fios-e-bioestimulo",
    icon: Wand2,
    category: "Harmonização Orofacial",
    title: "Lifting com Fios Faciais",
    tagline: "Sustentação, tração e estímulo de colágeno com naturalidade.",
    text: "Lifting com fios faciais, uma das grandes expertises da Dra. Cássia.",
    hero: "Fios faciais para efeito lifting, sustentação e estímulo de colágeno, com planejamento técnico para preservar identidade e naturalidade.",
    longDescription: [
      "Com o tempo, o rosto perde colágeno, sustentação e firmeza. Os fios faciais podem criar efeito lifting e estimular colágeno quando bem indicados, respeitando vetores, anatomia e proporção.",
      "A Dra. Cássia é referência em fios faciais e conduz esse tratamento com plano individualizado. São protocolos para quem quer envelhecer com elegância, sem mudar o rosto, apenas mantendo firmeza, viço e contorno.",
    ],
    indications: [
      "Flacidez leve a moderada de face e pescoço",
      "Perda de definição de mandíbula e contorno facial",
      "Pele com perda de viço e firmeza",
      "Quem quer prevenir sinais avançados de envelhecimento",
    ],
    benefits: [
      { title: "Fios de sustentação", text: "Lifting suave com estímulo de colágeno." },
      { title: "Vetores bem planejados", text: "A tração respeita anatomia, expressão e proporção." },
      { title: "Efeito natural", text: "O resultado se constrói em semanas, sem aparência artificial." },
      { title: "Qualidade da pele", text: "Mais firmeza, viço e textura." },
    ],
    process: standardProcess,
    differentials: sharedDifferentials,
    results: [
      "Contorno facial mais definido",
      "Pele mais firme e luminosa",
      "Aparência descansada e jovem, sem parecer diferente",
    ],
    seoDescription: "Fios de PDO e bioestimuladores em Bragança Paulista/SP na Clínica L'ECLER: avaliação da pele e da sustentação facial antes da indicação.",
    limits: ["A resposta ao bioestímulo é gradual e individual.", "Flacidez acentuada pode exigir outras abordagens.", "A indicação depende de avaliação de pele, estrutura e expectativa."],
    faq: [
      { q: "Quando vejo resultado?", a: "Fios têm efeito lifting imediato; bioestimuladores constroem resultado em 2 a 4 meses, com pico entre 3 e 6 meses." },
      { q: "Quanto tempo dura?", a: "De 12 a 24 meses, conforme protocolo e biologia individual." },
      { q: "Dói?", a: "Aplicação com anestesia local. Desconforto baixo e recuperação rápida." },
    ],
  },
  {
    slug: "gerenciamento-dermico",
    icon: Droplets,
    category: "Estética Avançada",
    title: "Biorregeneração e Bioestimulação",
    tagline: "Bioestimuladores, peptídeos e protocolos contínuos de pele.",
    text: "Tratamentos atuais para colágeno, viço, textura e qualidade da pele.",
    hero: "Protocolos com bioestimuladores, biorregeneradores, peptídeos, peelings e ativos de alta performance para tratar textura, viço e saúde da pele de forma progressiva.",
    longDescription: [
      "Pele bonita não é fruto de um único procedimento. É fruto de gerenciamento. Construímos protocolos contínuos com bioestimuladores, biorregeneradores, peptídeos, peelings, microagulhamento e ativos de alta performance.",
      "É a diferença entre tratar um problema pontual e cuidar da pele como um ativo: melhor textura, menos manchas, mais viço e prevenção real do envelhecimento.",
    ],
    indications: [
      "Manchas, melasma e fotodano",
      "Textura irregular, poros aparentes",
      "Acne ativa e cicatrizes leves",
      "Quem quer um cuidado contínuo, não pontual",
    ],
    benefits: [
      { title: "Peelings personalizados", text: "Profundidade e ativos ajustados ao seu tipo de pele." },
      { title: "Peptídeos e ativos avançados", text: "Estímulo de colágeno e reparo celular." },
      { title: "Skincare profissional", text: "Rotina domiciliar integrada ao protocolo." },
      { title: "Resultados progressivos", text: "Construídos com consistência, não com promessa milagrosa." },
    ],
    process: standardProcess,
    differentials: sharedDifferentials,
    results: [
      "Pele mais uniforme e luminosa",
      "Redução de manchas e marcas",
      "Textura refinada e viço duradouro",
    ],
    seoDescription: "Gerenciamento dérmico em Bragança Paulista/SP na Clínica L'ECLER: plano de cuidado da pele com tecnologias e rotina definidos após avaliação.",
    limits: ["Resultados dependem da constância do plano e dos cuidados em casa.", "Algumas condições de pele exigem acompanhamento médico específico.", "A escolha de tecnologias é feita após avaliação individual."],
    faq: [
      { q: "Quantas sessões preciso?", a: "Depende do quadro. Em geral, protocolos de 3 a 8 sessões com manutenção periódica." },
      { q: "Posso fazer no verão?", a: "Sim, com protocolos adaptados e fotoproteção rigorosa. Alguns peelings mais profundos são reservados para meses de menor exposição." },
      { q: "Skincare em casa importa?", a: "Muito. A rotina domiciliar potencializa e prolonga os resultados do consultório." },
    ],
  },
  {
    slug: "laser-co2-e-hipro",
    icon: Flame,
    category: "Estética Avançada",
    title: "Tecnologias de Rejuvenescimento",
    tagline: "Laser de CO2, HIPRO e protocolos para firmeza e renovação.",
    text: "Laser CO2, HIPRO e tecnologias para rejuvenescimento e reestruturação.",
    hero: "Laser de CO2 fracionado e ultrassom microfocado HIPRO para rejuvenescimento profundo, firmeza e renovação com tecnologia de ponta.",
    longDescription: [
      "Laser de CO2 fracionado é referência em rejuvenescimento: trata manchas, melhora textura, suaviza linhas finas e cicatrizes de acne, com resultado que se constrói ao longo de meses.",
      "HIPRO (ultrassom microfocado de alta intensidade) entrega energia em profundidade selecionada para promover lifting e estímulo de colágeno, sem cortes, sem internação e sem afastamento prolongado.",
    ],
    indications: [
      "Rejuvenescimento facial profundo",
      "Cicatrizes de acne, textura irregular, poros",
      "Flacidez de face e pescoço (HIPRO)",
      "Manchas e fotodano",
    ],
    benefits: [
      { title: "Laser de CO2 fracionado", text: "Renovação profunda em protocolos criteriosos." },
      { title: "HIPRO microfocado", text: "Lifting não cirúrgico com estímulo profundo de colágeno." },
      { title: "Resultado duradouro", text: "Efeito que se constrói por meses e dura muito tempo." },
      { title: "Protocolos seguros", text: "Indicação criteriosa e acompanhamento próximo." },
    ],
    process: standardProcess,
    differentials: sharedDifferentials,
    results: [
      "Pele renovada e mais firme",
      "Linhas e cicatrizes suavizadas",
      "Lifting natural sem cirurgia",
    ],
    seoDescription: "Laser CO2 e HIPRO em Bragança Paulista/SP na Clínica L'ECLER: avaliação de pele e flacidez para indicar tecnologias de rejuvenescimento.",
    limits: ["Tecnologias têm contraindicações e período de recuperação variável.", "Exposição solar e tipo de pele influenciam a indicação.", "O número de sessões e o resultado variam conforme cada caso."],
    faq: [
      { q: "Tem tempo de recuperação?", a: "Laser de CO₂ exige alguns dias de recuperação social (vermelhidão e descamação). HIPRO praticamente não exige tempo de recuperação." },
      { q: "Em quantas sessões vejo resultado?", a: "CO₂ costuma ser sessão única ou poucas sessões. HIPRO em geral 1 a 2 sessões por ano, com efeito progressivo." },
      { q: "É seguro?", a: "Sim, quando indicado e executado com critério. Avaliação prévia define se você é candidata." },
    ],
  },
  {
    slug: "clareamento-dental",
    icon: Sun,
    category: "Odontologia",
    title: "Clareamento Dental",
    tagline: "Cor mais clara, com diagnóstico e expectativa realista.",
    text: "Mudança de cor planejada a partir da saúde e das restaurações do seu sorriso.",
    hero: "O clareamento dental começa pela avaliação: entender a origem da cor, a saúde da gengiva e as restaurações visíveis antes de escolher a técnica.",
    longDescription: [
      "Clareamento dental é o uso de agentes clareadores, sob orientação profissional, para tornar mais clara a cor dos dentes naturais. Ele é indicado para alterações de cor que respondem ao tratamento — e não para todas as manchas ou para restaurações, coroas e facetas, que não clareiam da mesma forma.",
      "Na Clínica L'ECLER, em Bragança Paulista, a consulta avalia dentes, gengiva, sensibilidade prévia, restaurações e a origem do escurecimento. A partir disso, a equipe explica qual abordagem é compatível com o seu caso; a indicação e a disponibilidade de cada técnica dependem dessa avaliação.",
      "Para entender com mais profundidade as opções gerais e os cuidados, leia o guia completo sobre clareamento no blog da clínica.",
    ],
    indications: [
      "Quem percebe os dentes naturais amarelados ou escurecidos de forma geral",
      "Quem planeja restaurações ou facetas e precisa definir a cor dos dentes antes",
      "Quem já fez clareamento e quer avaliar se uma nova etapa é adequada",
      "Quem quer saber se a mancha é superficial, interna ou de restauração",
    ],
    benefits: [
      { title: "Diagnóstico da cor", text: "Separar mancha superficial, alteração interna e restaurações evita tratar o problema errado." },
      { title: "Plano coerente com o sorriso", text: "A tonalidade buscada considera naturalidade, pele, gengiva e materiais já existentes." },
      { title: "Acompanhamento", text: "Sensibilidade, irritação gengival e resposta ao tratamento são acompanhadas pela equipe." },
    ],
    process: [
      { title: "Conversa inicial", text: "Você conta o que incomoda na cor e o histórico de tratamentos anteriores." },
      { title: "Exame clínico", text: "Avaliação de dentes, gengiva, restaurações, trincas e áreas sensíveis." },
      { title: "Preparo, se necessário", text: "Limpeza, tratamento de cárie ou controle gengival podem vir antes de clarear." },
      { title: "Plano e técnica", text: "A equipe explica a abordagem indicada, os cuidados e o que é realista esperar." },
      { title: "Acompanhamento", text: "Retornos para avaliar resposta, sensibilidade e manutenção da cor." },
    ],
    differentials: [
      "Avaliação odontológica antes de qualquer indicação de clareamento",
      "Integração com prevenção, restaurações e estética do sorriso no mesmo plano",
      "Orientação clara sobre limites e cuidados, sem promessa de tonalidade máxima",
    ],
    results: [
      "Entendimento da origem da cor dos seus dentes",
      "Plano de clareamento compatível com sua saúde bucal",
      "Expectativas alinhadas sobre resultado e manutenção",
    ],
    faq: [
      { q: "Clareamento funciona em restaurações e facetas?", a: "Não da mesma forma. Os agentes clareadores atuam nos dentes naturais; restaurações, coroas e facetas podem precisar ser reavaliadas depois." },
      { q: "Todo mundo pode clarear os dentes?", a: "Nem sempre. Cáries, inflamação gengival, trincas e sensibilidade importante precisam ser avaliadas e, às vezes, tratadas antes." },
      { q: "Limpeza com Airflow clareia os dentes?", a: "A limpeza remove biofilme e parte das manchas superficiais, mas não altera a cor interna do dente como o clareamento." },
      { q: "Quanto tempo dura o resultado?", a: "Varia conforme hábitos, alimentação, higiene e características dos dentes. A equipe orienta a manutenção no seu caso." },
    ],
    seoDescription: "Clareamento dental em Bragança Paulista/SP na Clínica L'ECLER: avaliação da origem da cor, das restaurações e da sensibilidade antes de indicar a técnica.",
    limits: [
      "Restaurações, coroas, facetas e lentes de contato não clareiam como o dente natural.",
      "Dentes escurecidos isoladamente podem ter outra causa e exigir conduta diferente.",
      "Sensibilidade temporária e irritação gengival podem ocorrer; a equipe ajusta a orientação.",
      "Produtos caseiros sem orientação podem irritar a gengiva e desgastar a superfície dental.",
    ],
  },
  {
    slug: "facetas-de-resina",
    icon: Brush,
    category: "Odontologia",
    title: "Facetas de Resina",
    tagline: "Forma e cor ajustadas diretamente no dente, com planejamento.",
    text: "Facetas diretas em resina composta para ajustes de forma, proporção e cor.",
    hero: "Facetas de resina são aplicadas e modeladas diretamente sobre o dente. A avaliação mostra se elas são a opção adequada ou se outro caminho faz mais sentido.",
    longDescription: [
      "A faceta de resina é uma cobertura em resina composta aplicada e esculpida diretamente na face visível do dente, ajustando contorno, textura e cor. Ela pode corrigir pequenas alterações de forma, fechar espaços, recuperar desgastes ou melhorar a proporção do sorriso.",
      "Na Clínica L'ECLER, em Bragança Paulista, a resina é uma das opções avaliadas no planejamento estético. A indicação considera gengiva, mordida, posição dos dentes, restaurações antigas, hábitos como bruxismo e a sua expectativa — e é comparada com alternativas como clareamento, alinhadores ou cerâmica.",
      "Se você está em dúvida entre resina e lentes de contato, o blog da clínica tem um comparativo detalhado com os critérios que orientam essa escolha.",
    ],
    indications: [
      "Quem quer ajustar forma ou tamanho de alguns dentes",
      "Pequenos espaços entre dentes ou desgastes nas bordas",
      "Restaurações antigas com cor ou contorno inadequados",
      "Quem quer comparar resina e cerâmica antes de decidir",
    ],
    benefits: [
      { title: "Execução direta", text: "O dente é modelado no consultório, com ajuste de forma e cor durante o procedimento." },
      { title: "Possibilidade de reparo", text: "Em muitos casos, lascas ou desgastes localizados podem ser reparados." },
      { title: "Planejamento integrado", text: "A decisão considera mordida, gengiva e outras opções estéticas." },
    ],
    process: [
      { title: "Avaliação estética e funcional", text: "Exame de dentes, gengiva, mordida e hábitos, com conversa sobre o que você deseja mudar." },
      { title: "Comparação de alternativas", text: "Resina, cerâmica, clareamento ou alinhamento são discutidos conforme o caso." },
      { title: "Definição de cor e forma", text: "Quando indicado, o clareamento pode vir antes para definir a cor de referência." },
      { title: "Aplicação e acabamento", text: "Camadas de resina são aplicadas, esculpidas e polidas." },
      { title: "Manutenção", text: "Retornos para polimento e avaliação de desgaste ou pigmentação." },
    ],
    differentials: [
      "Planejamento estético que compara resina, cerâmica e alternativas não restauradoras",
      "Avaliação de mordida e hábitos antes de indicar facetas",
      "Orientação honesta sobre manutenção e limites do material",
    ],
    results: [
      "Clareza sobre se a resina é indicada no seu caso",
      "Plano com forma, cor e proporção coerentes com o seu rosto",
      "Orientação de manutenção para preservar o resultado",
    ],
    faq: [
      { q: "Faceta de resina exige desgaste do dente?", a: "Depende do caso. Algumas situações permitem abordagem muito conservadora; outras exigem preparo. Quando há remoção de esmalte, esse desgaste é irreversível." },
      { q: "A resina mancha?", a: "Pode sofrer alteração de brilho e pigmentação com o tempo, conforme alimentação, hábitos e higiene. Polimentos periódicos ajudam na manutenção." },
      { q: "Resina ou lente de contato?", a: "Não existe resposta única. Estrutura dental, mordida, expectativa e manutenção orientam a escolha, que é feita na avaliação." },
      { q: "Posso fazer em apenas um dente?", a: "Em alguns casos, sim. O desafio é reproduzir cor e textura dos dentes vizinhos, o que é avaliado no planejamento." },
    ],
    seoDescription: "Facetas de resina em Bragança Paulista/SP na Clínica L'ECLER: avaliação de forma, cor, mordida e manutenção para decidir entre resina, cerâmica ou alternativas.",
    limits: [
      "A resina pode perder brilho, pigmentar e desgastar com o tempo, exigindo polimentos e reparos.",
      "Bruxismo e apertamento aumentam o risco de fratura e precisam ser avaliados antes.",
      "Quando a queixa é posição ou cor, alinhadores ou clareamento podem ser alternativas mais conservadoras.",
    ],
  },
  {
    slug: "extracao-dentaria",
    icon: ShieldCheck,
    category: "Odontologia",
    title: "Extração Dentária",
    tagline: "Remover um dente só depois de avaliar as alternativas.",
    text: "Avaliação criteriosa antes da extração e planejamento do que vem depois.",
    hero: "A extração dentária é considerada quando o dente não pode ser preservado com segurança. A avaliação revisa o diagnóstico, as alternativas e o plano para o espaço.",
    longDescription: [
      "Extração dentária é a remoção de um dente do osso onde ele está inserido. Ela pode ser indicada por cárie extensa, fratura sem possibilidade de restauração, perda de suporte da gengiva e do osso, infecção que não se resolve com tratamento conservador ou indicação ortodôntica.",
      "Na Clínica L'ECLER, em Bragança Paulista, a consulta começa pela história de saúde, pelo exame da boca e, quando necessário, por exames de imagem. Antes de indicar a remoção, a equipe avalia se tratamento de canal, restauração ou coroa podem preservar o dente. Quando a extração é indicada, o plano já considera a reposição do espaço, se necessária.",
      "A complexidade de cada caso é definida na avaliação, que também indica quando é necessário encaminhamento a outro profissional. Para dúvidas detalhadas sobre preparo e recuperação, consulte o guia sobre extração no blog da clínica.",
    ],
    indications: [
      "Dente quebrado ou muito destruído por cárie",
      "Dente com indicação prévia de extração que você quer reavaliar",
      "Sisos com sintomas ou dúvidas sobre a necessidade de remoção",
      "Planejamento ortodôntico ou protético que envolve remover um dente",
    ],
    benefits: [
      { title: "Diagnóstico antes da remoção", text: "Alternativas de preservação são avaliadas antes de decidir pela extração." },
      { title: "Plano para depois", text: "Implante, prótese ou acompanhamento do espaço são discutidos desde o início." },
      { title: "Orientação clara", text: "Cuidados antes e depois explicados de acordo com o seu caso e sua saúde." },
    ],
    process: [
      { title: "História de saúde", text: "Medicamentos, alergias, doenças e cirurgias anteriores são revisados. Não suspenda medicamentos por conta própria." },
      { title: "Exame e imagens", text: "Avaliação de dente, gengiva, osso e raízes; imagens quando necessárias." },
      { title: "Alternativas e decisão", text: "A equipe explica se o dente pode ser preservado e quais são os riscos de cada caminho." },
      { title: "Procedimento", text: "Realizado conforme o plano definido, ou encaminhado quando a complexidade exigir." },
      { title: "Recuperação e reposição", text: "Orientações de cuidado e retorno, com planejamento da reposição quando indicada." },
    ],
    differentials: [
      "Avaliação que considera preservar o dente antes de indicar a remoção",
      "Planejamento integrado com implantes, próteses e ortodontia",
      "Orientações individualizadas de preparo e recuperação",
    ],
    results: [
      "Decisão informada sobre extrair ou preservar o dente",
      "Plano para o espaço deixado pelo dente, quando necessário",
      "Orientação de cuidados compatível com a sua saúde",
    ],
    faq: [
      { q: "Todo siso precisa ser extraído?", a: "Não. Posição, sintomas, higiene, relação com dentes vizinhos e exames de imagem orientam a decisão; alguns casos podem apenas ser acompanhados." },
      { q: "Preciso repor o dente extraído?", a: "Depende da posição do dente, da mordida e dos seus objetivos. Implantes, próteses ou acompanhamento são discutidos na avaliação." },
      { q: "Preciso tomar antibiótico?", a: "Nem toda extração exige. A indicação de qualquer medicamento é feita pelo profissional, considerando seu histórico." },
      { q: "E se houver inchaço forte depois?", a: "Inchaço que avança rapidamente ou dificuldade para respirar ou engolir exige atendimento de urgência imediato em um pronto-socorro." },
    ],
    seoDescription: "Extração dentária em Bragança Paulista/SP na Clínica L'ECLER: avaliação das alternativas para preservar o dente, planejamento e orientação de recuperação.",
    limits: [
      "Nem todo dente com dor ou fratura precisa ser extraído; alternativas são avaliadas primeiro.",
      "Casos de maior complexidade podem exigir encaminhamento, definido na avaliação.",
      "Medicamentos, como anticoagulantes, não devem ser suspensos sem orientação do médico responsável.",
      "Dificuldade para respirar ou engolir exige pronto-socorro imediato, não agendamento.",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
