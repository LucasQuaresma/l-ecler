import {
  Smile, Anchor, Sparkles, Layers, AlignCenter, Activity,
  Leaf, Syringe, Wand2, Droplets, Flame, Wind,
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
};

const standardProcess: Step[] = [
  { title: "Diagnóstico Online", text: "Conversa inicial e envio de fotos para um direcionamento personalizado antes mesmo de você ir à clínica." },
  { title: "Avaliação presencial", text: "Exame clínico, análise facial e/ou exames de imagem para construir o plano individualizado." },
  { title: "Plano de tratamento", text: "Apresentação do passo a passo, prazos, investimento e simulação do resultado quando aplicável." },
  { title: "Execução técnica", text: "Procedimentos conduzidos pela Dra. Cássia e equipe, com tecnologia de ponta e foco em conforto." },
  { title: "Acompanhamento", text: "Retornos programados, manutenção e protocolos de longevidade do resultado." },
];

const sharedDifferentials = [
  "Atendimento conduzido pela Dra. Cássia e equipe multidisciplinar formada dentro do mesmo padrão técnico",
  "Tecnologia de última geração em odontologia e harmonização orofacial",
  "Plano individualizado, com decisões clínicas baseadas em evidência e estética",
  "Diagnóstico Online antes da visita à clínica, otimizando seu tempo",
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
      "Utilizamos protocolos de Digital Smile Design (DSD), mock-up em 3D e simulação prévia para que você visualize o resultado antes de qualquer procedimento irreversível. Cada etapa é validada com você, nada é decidido pela paciente, é decidido com a paciente.",
    ],
    indications: [
      "Quem quer melhorar a forma, cor ou proporção dos dentes",
      "Sorrisos com assimetrias, desgastes ou restaurações antigas visíveis",
      "Pacientes em planejamento de casamento, exposição pública ou nova fase de vida",
      "Quem busca um sorriso natural, sem aparência artificial",
    ],
    benefits: [
      { title: "Planejamento digital (DSD)", text: "Projeto 3D do sorriso antes de iniciar qualquer procedimento." },
      { title: "Mock-up testável", text: "Você experimenta o sorriso novo na boca antes de decidir." },
      { title: "Clareamento profissional", text: "Protocolo seguro, com avaliação de sensibilidade e manutenção." },
      { title: "Estética indetectável", text: "Materiais nobres que mimetizam o esmalte natural." },
    ],
    process: standardProcess,
    differentials: sharedDifferentials,
    results: [
      "Sorriso harmônico, proporcional ao seu rosto",
      "Aparência natural, ninguém precisa saber",
      "Mais segurança ao sorrir, falar e aparecer",
    ],
    faq: [
      { q: "O resultado fica natural?", a: "Sim. Todo o planejamento é guiado pela análise do seu rosto, traços e proporções, o objetivo é parecer seu, só que melhor." },
      { q: "Vou ver o resultado antes?", a: "Sim. Fazemos planejamento digital e mock-up para você validar antes de qualquer procedimento definitivo." },
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
      "Perder um ou vários dentes não é apenas estético: compromete mastigação, fala, suporte facial e autoestima. Nossa abordagem com implantes parte do diagnóstico tridimensional para devolver tudo isso com previsibilidade.",
      "Trabalhamos com cirurgia guiada por computador, marcas premium de implantes e equipe multidisciplinar (cirurgia, prótese, estética). Em casos indicados, oferecemos carga imediata, você sai com dente provisório no mesmo dia.",
    ],
    indications: [
      "Perda de um ou mais dentes",
      "Necessidade de troca de próteses antigas que ficaram desconfortáveis",
      "Reabilitação total da arcada (protocolo / All-on-X)",
      "Pacientes que querem voltar a mastigar e sorrir com segurança",
    ],
    benefits: [
      { title: "Cirurgia guiada", text: "Planejamento 3D que aumenta precisão e reduz tempo cirúrgico." },
      { title: "Carga imediata", text: "Quando indicado, prótese provisória no mesmo dia da cirurgia." },
      { title: "Implantes premium", text: "Marcas com décadas de pesquisa e altíssima taxa de sucesso." },
      { title: "Equipe multidisciplinar", text: "Cirurgia, prótese e estética conversando no mesmo plano." },
    ],
    process: standardProcess,
    differentials: sharedDifferentials,
    results: [
      "Mastigação eficiente e confortável",
      "Sorriso estável e estético",
      "Preservação óssea no longo prazo",
    ],
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
      "Tudo é planejado individualmente, considerando oclusão, estética facial e expectativa de cada paciente. Próteses bem feitas não são notadas, são vividas.",
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
    faq: [
      { q: "Próteses modernas parecem dentes naturais?", a: "Sim. Com zircônia / dissilicato e técnica adequada, é praticamente impossível diferenciar." },
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
      "Trabalhamos com planejamento digital, mock-up testável e ceramistas parceiros de altíssimo padrão. Você só fecha o tratamento depois de aprovar o sorriso na sua própria boca.",
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
    title: "Ortodontia / Invisalign",
    tagline: "Alinhamento discreto, previsível e eficiente.",
    text: "Alinhamento discreto, previsível e eficiente.",
    hero: "Alinhadores invisíveis Invisalign e aparelhos estéticos com planejamento digital 3D, para alinhar o sorriso sem interromper sua vida.",
    longDescription: [
      "O Invisalign substitui o aparelho fixo por alinhadores transparentes removíveis. O planejamento é digital, 3D e mostra o movimento dos dentes desde a primeira até a última etapa, você sabe exatamente o que esperar.",
      "Por ser removível, não interfere em alimentação, higiene, eventos sociais ou vida profissional. É a escolha de quem quer alinhar o sorriso com discrição e previsibilidade.",
    ],
    indications: [
      "Apinhamentos leves a moderados",
      "Diastemas (espaços) entre dentes",
      "Correção pré-protética (antes de lentes/facetas)",
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
    faq: [
      { q: "Invisalign serve para qualquer caso?", a: "Para a maioria dos casos sim. Em situações muito complexas, indicamos a melhor estratégia, às vezes combinada." },
      { q: "Quanto tempo demora?", a: "Em média de 6 a 18 meses, dependendo da complexidade. O plano mostra a duração estimada já no início." },
      { q: "Preciso usar muitas horas por dia?", a: "Sim, em torno de 22h/dia. Removível apenas para alimentação e higiene." },
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
      "Salvar um dente natural quase sempre é a melhor escolha, para a estética, para a oclusão e para a longevidade da boca como um todo.",
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
    faq: [
      { q: "Canal dói?", a: "Não. O dente costuma doer antes, o tratamento é o que tira a dor. É feito com anestesia local eficaz." },
      { q: "Em quantas sessões?", a: "A maioria dos casos é resolvida em uma ou duas sessões." },
      { q: "Vou precisar de coroa depois?", a: "Em muitos casos sim, especialmente em dentes posteriores. Avaliamos o melhor protocolo para proteger o dente tratado." },
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
      "A boca é porta de entrada do corpo. Inflamações, microbioma desequilibrado e hábitos do dia a dia impactam saúde sistêmica, e vice-versa. Por isso trabalhamos com uma visão integrativa.",
      "Protocolos preventivos personalizados, orientação de higiene, avaliação de hábitos, manutenção profissional periódica e olhar atento ao paciente como um todo, não apenas à boca isolada.",
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
      { title: "Prevenção integrativa", text: "Cuidado contínuo para proteger saúde, estética e longevidade do sorriso." },
    ],
    process: standardProcess,
    differentials: sharedDifferentials,
    results: [
      "Sorriso com sensação de limpeza e frescor",
      "Prevenção com tecnologia de alto padrão",
      "Base mais saudável para tratamentos estéticos e reabilitadores",
    ],
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
    hero: "Toxina botulínica e ácido hialurônico aplicados com técnica refinada - para suavizar linhas e reestruturar pontos específicos preservando expressão e identidade.",
    longDescription: [
      "Harmonização não é mudar o rosto. É devolver equilíbrio. Toxina botulínica suaviza linhas dinâmicas; preenchimentos com ácido hialurônico podem reestruturar pontos específicos quando há indicação - sempre respeitando expressão e proporção facial.",
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
      { title: "Técnica conservadora", text: "Menos é mais - o objetivo é parecer descansada, não diferente." },
      { title: "Plano individualizado", text: "Análise facial completa antes de qualquer aplicação." },
    ],
    process: standardProcess,
    differentials: sharedDifferentials,
    results: [
      "Aparência descansada e suave",
      "Volumes naturais devolvidos",
      "Expressividade preservada",
    ],
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
      "A Dra. Cássia é referência em fios faciais e conduz esse tratamento com plano individualizado. São protocolos para quem quer envelhecer com elegância, sem mudar o rosto - apenas mantendo firmeza, viço e contorno.",
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
      { title: "Efeito natural", text: "Resultado se constrói em semanas - nada artificial." },
      { title: "Qualidade da pele", text: "Mais firmeza, viço e textura." },
    ],
    process: standardProcess,
    differentials: sharedDifferentials,
    results: [
      "Contorno facial mais definido",
      "Pele mais firme e luminosa",
      "Aparência descansada e jovem, sem parecer diferente",
    ],
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
      "Pele bonita não é fruto de um único procedimento - é fruto de gerenciamento. Construímos protocolos contínuos com bioestimuladores, biorregeneradores, peptídeos, peelings, microagulhamento e ativos de alta performance.",
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
      "HIPRO (ultrassom microfocado de alta intensidade) entrega energia em profundidade selecionada para promover lifting e estímulo de colágeno - sem cortes, sem internação e sem afastamento prolongado.",
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
    faq: [
      { q: "Tem tempo de recuperação?", a: "Laser de CO₂ exige alguns dias de recuperação social (vermelhidão e descamação). HIPRO praticamente não tem downtime." },
      { q: "Em quantas sessões vejo resultado?", a: "CO₂ costuma ser sessão única ou poucas sessões. HIPRO em geral 1 a 2 sessões por ano, com efeito progressivo." },
      { q: "É seguro?", a: "Sim, quando indicado e executado com critério. Avaliação prévia define se você é candidata." },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
