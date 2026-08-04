import {
  BookOpen,
  Brain,
  Crown,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type OptionLetter = "A" | "B" | "C" | "D" | "E";

export type ProfileId =
  "explorador" | "evolucao" | "estrategista" | "diferenciado" | "altaPerformance" | "referencia";

export interface QuizOption {
  letter: OptionLetter;
  label: string;
  score: number;
}

export interface QuizQuestion {
  id: number;
  icon: LucideIcon;
  question: string;
  options: QuizOption[];
  reason: string;
  reveals: string;
  objection: string;
  objectionBreak: string;
}

export interface TransitionScreen {
  afterQuestion: number;
  title: string;
  body: string;
}

export interface ProfileResult {
  id: ProfileId;
  name: string;
  range: [number, number];
  headline: string;
  description: string;
  strengths: string[];
  improvements: string[];
  potential: string;
  nextStep: string;
  invitation: string;
}

const option = (letter: OptionLetter, label: string, score: number): QuizOption => ({
  letter,
  label,
  score,
});

export const quizIntro = {
  title: "Avaliação Profissional em Fios Faciais",
  subtitle:
    "Descubra seu nível técnico, identifique oportunidades de evolução clínica e receba um diagnóstico personalizado sobre sua atuação com Fios Faciais.",
  duration: "Tempo médio: 4 a 6 minutos",
  copy: [
    "Nem sempre o profissional que mais realiza procedimentos é o que obtém os melhores resultados.",
    "Na prática clínica, pequenas decisões fazem uma enorme diferença na previsibilidade, na segurança e na excelência dos tratamentos com Fios Faciais.",
    "Esta avaliação foi desenvolvida pela L'ECLER Academy para identificar seu momento profissional e mostrar quais competências podem acelerar sua evolução clínica.",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: 1,
    icon: GraduationCap,
    question: "Há quanto tempo você atua com Harmonização Orofacial?",
    options: [
      option("A", "Ainda não iniciei os atendimentos.", 1),
      option("B", "Menos de 1 ano.", 2),
      option("C", "Entre 1 e 3 anos.", 3),
      option("D", "Entre 3 e 5 anos.", 4),
      option("E", "Mais de 5 anos.", 5),
    ],
    reason: "Entender o estágio profissional do participante.",
    reveals:
      "Tempo de atuação não significa domínio técnico, mas ajuda a contextualizar o nível de experiência clínica.",
    objection: "Talvez eu ainda não tenha experiência suficiente para aprender Fios Faciais.",
    objectionBreak:
      "Os Fios Faciais não dependem apenas do tempo de profissão, mas da qualidade da formação, do raciocínio clínico e da técnica aplicada.",
  },
  {
    id: 2,
    icon: Stethoscope,
    question: "Qual procedimento você realiza com maior frequência?",
    options: [
      option("A", "Toxina botulínica.", 2),
      option("B", "Preenchimento facial.", 2),
      option("C", "Bioestimuladores.", 3),
      option("D", "Protocolos regenerativos, como PDRN, exossomos, MMP ou peptídeos.", 4),
      option("E", "Já realizo Fios Faciais regularmente.", 5),
    ],
    reason: "Identificar qual é a principal porta de entrada clínica do profissional.",
    reveals: "Seu modelo atual de tratamento e sua maturidade dentro da HOF.",
    objection: "Minha rotina já está completa.",
    objectionBreak:
      "Os Fios Faciais não substituem nenhum procedimento. Eles ampliam possibilidades terapêuticas e potencializam resultados.",
  },
  {
    id: 3,
    icon: TrendingUp,
    question: "Com que frequência seus pacientes perguntam sobre tratamentos para flacidez facial?",
    options: [
      option("A", "Nunca.", 1),
      option("B", "Raramente.", 2),
      option("C", "Algumas vezes por mês.", 3),
      option("D", "Toda semana.", 4),
      option("E", "Praticamente todos os dias.", 5),
    ],
    reason: "Mostrar demanda reprimida.",
    reveals: "O potencial comercial perdido por não oferecer tratamentos estruturais.",
    objection: "Não existe procura suficiente.",
    objectionBreak:
      "Na maioria das clínicas, a procura existe. O que falta é uma solução segura para oferecer.",
  },
  {
    id: 4,
    icon: ShieldCheck,
    question: "Quando você pensa em Fios Faciais, qual sentimento aparece primeiro?",
    options: [
      option("A", "Segurança.", 5),
      option("B", "Curiosidade.", 3),
      option("C", "Interesse.", 4),
      option("D", "Receio.", 2),
      option("E", "Insegurança.", 1),
    ],
    reason: "Mapear bloqueios emocionais.",
    reveals: "O nível de confiança técnica.",
    objection: "Tenho medo de complicações.",
    objectionBreak:
      "A insegurança normalmente está relacionada à falta de treinamento prático estruturado, e não à técnica em si.",
  },
  {
    id: 5,
    icon: Target,
    question: "Qual destes fatores mais impede você de realizar mais casos com Fios Faciais?",
    options: [
      option("A", "Nunca fiz uma formação específica.", 1),
      option("B", "Tenho receio de complicações.", 2),
      option("C", "Não sei selecionar os pacientes.", 2),
      option("D", "Não me sinto seguro para vender o tratamento.", 3),
      option("E", "Já realizo, mas quero alcançar resultados mais previsíveis.", 5),
    ],
    reason: "Encontrar o principal gargalo.",
    reveals: "Onde deve acontecer a transformação.",
    objection: "Falta formação, segurança, diagnóstico, comercialização ou refinamento técnico.",
    objectionBreak: "Todo grande resultado clínico começa resolvendo um único gargalo de cada vez.",
  },
  {
    id: 6,
    icon: BookOpen,
    question: "Quantos casos com Fios Faciais você realizou nos últimos 12 meses?",
    options: [
      option("A", "Nenhum.", 1),
      option("B", "Entre 1 e 5.", 2),
      option("C", "Entre 6 e 20.", 3),
      option("D", "Entre 21 e 50.", 4),
      option("E", "Mais de 50.", 5),
    ],
    reason: "Avaliar experiência prática real.",
    reveals: "Curva de aprendizado.",
    objection: "Já sei fazer.",
    objectionBreak:
      "Quantidade de casos não garante excelência técnica. A qualidade do planejamento é o verdadeiro diferencial.",
  },
  {
    id: 7,
    icon: Brain,
    question: "Qual etapa do tratamento com Fios Faciais você considera mais desafiadora?",
    options: [
      option("A", "Diagnóstico facial.", 3),
      option("B", "Escolha dos fios.", 3),
      option("C", "Planejamento dos vetores.", 4),
      option("D", "Execução técnica.", 3),
      option("E", "Pós-procedimento e acompanhamento.", 4),
    ],
    reason: "Localizar a principal dificuldade clínica.",
    reveals: "Onde está o maior potencial de evolução.",
    objection: "Meu problema é apenas executar.",
    objectionBreak:
      "A execução representa apenas uma parte do sucesso. O diagnóstico e o planejamento determinam grande parte do resultado final.",
  },
  {
    id: 8,
    icon: GraduationCap,
    question: "O que mais influencia sua decisão de investir em uma formação presencial?",
    options: [
      option("A", "Professor com experiência clínica comprovada.", 4),
      option("B", "Muito treinamento prático.", 4),
      option("C", "Casos clínicos reais.", 4),
      option("D", "Suporte após o curso.", 4),
      option("E", "Método estruturado e aplicável imediatamente.", 5),
    ],
    reason: "Entender o perfil de compra.",
    reveals: "Os fatores que geram confiança para investir.",
    objection: "Já fiz cursos que não mudaram minha prática.",
    objectionBreak:
      "Uma formação transforma quando entrega método, prática supervisionada e aplicabilidade clínica.",
  },
  {
    id: 9,
    icon: Crown,
    question: "Hoje, qual é o seu principal objetivo profissional?",
    options: [
      option("A", "Começar a trabalhar com Fios Faciais.", 1),
      option("B", "Atender casos mais complexos.", 3),
      option("C", "Aumentar o valor percebido da minha prática clínica.", 4),
      option("D", "Tornar-me referência na minha região.", 5),
      option("E", "Construir autoridade nacional.", 5),
    ],
    reason: "Compreender a ambição profissional.",
    reveals: "O estágio de crescimento e o horizonte de carreira.",
    objection: "Talvez ainda não seja o momento.",
    objectionBreak:
      "Os profissionais que alcançam posições de destaque costumam investir em formação antes que a necessidade se torne urgente.",
  },
  {
    id: 10,
    icon: Sparkles,
    question:
      "Se você pudesse dominar apenas uma habilidade em Fios Faciais nos próximos meses, qual escolheria?",
    options: [
      option("A", "Diagnóstico facial estratégico.", 4),
      option("B", "Planejamento de vetores de tração.", 4),
      option("C", "Técnicas avançadas de execução.", 4),
      option("D", "Manejo de casos complexos.", 5),
      option("E", "Construção de protocolos exclusivos e resultados altamente previsíveis.", 5),
    ],
    reason: "Identificar a principal expectativa em relação à formação.",
    reveals: "O resultado que o profissional mais deseja alcançar.",
    objection: "Não sei se essa formação é para mim.",
    objectionBreak:
      "Independentemente do nível de experiência, toda evolução começa pelo domínio de uma competência essencial.",
  },
  {
    id: 11,
    icon: Brain,
    question:
      "Ao avaliar um paciente com flacidez facial, qual aspecto costuma receber mais atenção no seu planejamento?",
    options: [
      option("A", "Apenas a queixa principal do paciente.", 1),
      option("B", "O volume facial perdido.", 2),
      option("C", "A qualidade da pele.", 3),
      option("D", "A anatomia e os vetores de sustentação.", 4),
      option(
        "E",
        "A associação entre anatomia, envelhecimento, expectativa e combinação de técnicas.",
        5,
      ),
    ],
    reason: "Avaliar a profundidade do raciocínio clínico.",
    reveals:
      "Se o profissional faz um planejamento baseado apenas na queixa ou se possui uma visão estratégica e global.",
    objection: "Fios Faciais são apenas uma técnica de execução.",
    objectionBreak:
      "Os melhores resultados dependem de diagnóstico preciso e planejamento individualizado, não apenas da inserção dos fios.",
  },
  {
    id: 12,
    icon: ShieldCheck,
    question: "Como você costuma definir a indicação de Fios Faciais para um paciente?",
    options: [
      option("A", "Ainda não realizo essa indicação.", 1),
      option("B", "Baseio-me principalmente na flacidez visível.", 2),
      option("C", "Associo idade e exame clínico.", 3),
      option("D", "Avalio anatomia, qualidade tecidual e expectativa.", 4),
      option("E", "Utilizo um protocolo estruturado de diagnóstico para selecionar os casos.", 5),
    ],
    reason: "Identificar a maturidade no processo de indicação.",
    reveals: "Se a decisão clínica é intuitiva ou baseada em critérios técnicos.",
    objection: "Indicar Fios Faciais é muito complicado.",
    objectionBreak:
      "Com um protocolo estruturado, a seleção dos pacientes se torna mais segura e previsível.",
  },
  {
    id: 13,
    icon: Stethoscope,
    question: "Qual situação gera maior insegurança durante um procedimento com Fios Faciais?",
    options: [
      option("A", "Escolher o fio adequado.", 3),
      option("B", "Definir os vetores.", 3),
      option("C", "Executar a técnica.", 3),
      option("D", "Manejar possíveis intercorrências.", 2),
      option("E", "Ainda não sei identificar qual é minha maior dificuldade.", 1),
    ],
    reason: "Mapear o principal bloqueio técnico.",
    reveals: "Onde o profissional precisa de maior suporte.",
    objection: "Tenho medo das complicações.",
    objectionBreak:
      "Conhecimento anatômico, planejamento e prática supervisionada reduzem riscos e aumentam a segurança do profissional.",
  },
  {
    id: 14,
    icon: Crown,
    question: "Na sua opinião, o que mais diferencia um profissional reconhecido em Fios Faciais?",
    options: [
      option("A", "Alta produtividade.", 2),
      option("B", "Boa divulgação nas redes sociais.", 2),
      option("C", "Resultados naturais e consistentes.", 4),
      option("D", "Domínio técnico em casos complexos.", 5),
      option("E", "Capacidade de planejar tratamentos personalizados.", 5),
    ],
    reason: "Compreender como o participante enxerga excelência.",
    reveals: "Os valores que direcionam sua evolução profissional.",
    objection: "Para crescer basta fazer marketing.",
    objectionBreak:
      "A autoridade é sustentada por resultados clínicos consistentes e pela confiança que esses resultados geram.",
  },
  {
    id: 15,
    icon: ShieldCheck,
    question:
      "Com que frequência você deixa de indicar um tratamento por não se sentir totalmente seguro?",
    options: [
      option("A", "Nunca.", 5),
      option("B", "Raramente.", 4),
      option("C", "Às vezes.", 3),
      option("D", "Frequentemente.", 2),
      option("E", "Quase sempre.", 1),
    ],
    reason: "Identificar perdas de oportunidade clínica.",
    reveals: "O impacto da insegurança na rotina profissional.",
    objection: "Prefiro não oferecer para evitar problemas.",
    objectionBreak:
      "A segurança clínica amplia possibilidades terapêuticas e permite indicar tratamentos com mais confiança e responsabilidade.",
  },
  {
    id: 16,
    icon: Stethoscope,
    question: "Quando um paciente pergunta sobre Fios Faciais, qual é sua reação mais comum?",
    options: [
      option("A", "Encaminho para outro profissional.", 1),
      option("B", "Explico que ainda não trabalho com a técnica.", 2),
      option("C", "Converso sobre as possibilidades, mas nem sempre indico.", 3),
      option("D", "Avalio cada caso e indico quando apropriado.", 4),
      option("E", "Os Fios Faciais já fazem parte da minha rotina clínica.", 5),
    ],
    reason: "Avaliar o posicionamento do profissional diante da demanda.",
    reveals: "Seu nível de integração da técnica na prática clínica.",
    objection: "Meus pacientes não procuram esse procedimento.",
    objectionBreak:
      "Quando o profissional domina a técnica, passa a identificar oportunidades que antes poderiam passar despercebidas.",
  },
  {
    id: 17,
    icon: GraduationCap,
    question: "Qual destes aspectos você considera mais importante em uma formação presencial?",
    options: [
      option("A", "Conteúdo científico atualizado.", 4),
      option("B", "Prática em pacientes reais.", 5),
      option("C", "Turmas reduzidas.", 4),
      option("D", "Acompanhamento do professor durante a prática.", 5),
      option("E", "Método que possa ser aplicado imediatamente na clínica.", 5),
    ],
    reason: "Entender o que gera confiança na escolha de uma formação.",
    reveals: "Os critérios de decisão do participante.",
    objection: "Já fiz cursos muito teóricos.",
    objectionBreak:
      "Uma formação de excelência integra conhecimento científico, prática supervisionada e aplicação clínica imediata.",
  },
  {
    id: 18,
    icon: TrendingUp,
    question: "Quanto você acredita que dominar Fios Faciais pode impactar sua carreira?",
    options: [
      option("A", "Pouco.", 1),
      option("B", "Moderadamente.", 2),
      option("C", "Bastante.", 3),
      option("D", "Muito.", 4),
      option("E", "Pode representar um divisor de águas na minha atuação profissional.", 5),
    ],
    reason: "Mensurar o valor percebido da técnica.",
    reveals: "O nível de motivação para investir na própria evolução.",
    objection: "Talvez não faça tanta diferença.",
    objectionBreak:
      "Profissionais que incorporam novas competências ampliam possibilidades clínicas e fortalecem seu posicionamento no mercado.",
  },
  {
    id: 19,
    icon: Target,
    question: "Se pudesse evoluir em apenas um aspecto da sua prática clínica, qual escolheria?",
    options: [
      option("A", "Segurança durante os procedimentos.", 3),
      option("B", "Planejamento facial.", 4),
      option("C", "Resultados mais naturais.", 4),
      option("D", "Casos mais complexos.", 5),
      option("E", "Maior previsibilidade nos resultados.", 5),
    ],
    reason: "Identificar a principal expectativa de evolução.",
    reveals: "Onde o participante percebe maior necessidade de crescimento.",
    objection: "Meu nível técnico já é suficiente.",
    objectionBreak:
      "Mesmo profissionais experientes encontram novas oportunidades quando refinam detalhes da prática clínica.",
  },
  {
    id: 20,
    icon: Crown,
    question: "Pensando nos próximos 12 meses, qual resultado mais faria diferença para você?",
    options: [
      option("A", "Iniciar minha atuação com Fios Faciais.", 1),
      option("B", "Atender mais pacientes com segurança.", 3),
      option("C", "Tornar meus resultados mais previsíveis.", 4),
      option("D", "Ser reconhecido como referência em Fios Faciais.", 5),
      option("E", "Criar protocolos próprios e elevar o valor percebido da minha clínica.", 5),
    ],
    reason: "Entender o resultado de carreira que mais motiva o participante.",
    reveals: "O grau de ambição profissional e de abertura para desenvolvimento estruturado.",
    objection: "Talvez eu consiga evoluir sozinho.",
    objectionBreak:
      "Clareza de direção acelera a evolução porque transforma intenção em plano técnico e aplicável.",
  },
  {
    id: 21,
    icon: TrendingUp,
    question: "Hoje, de onde vem a maior parte dos pacientes que chegam até você?",
    options: [
      option("A", "Indicação pontual de pacientes ou colegas.", 2),
      option("B", "Redes sociais, mas sem estratégia clara.", 2),
      option("C", "Indicação de outros pacientes satisfeitos.", 3),
      option("D", "Autoridade percebida e reputação clínica.", 4),
      option("E", "Posicionamento premium sustentado por técnica, experiência e resultados.", 5),
    ],
    reason: "Avaliar como o crescimento atual acontece.",
    reveals:
      "Se o profissional depende de demanda espontânea ou já constrói autoridade de forma intencional.",
    objection: "Meu crescimento depende apenas de divulgação.",
    objectionBreak:
      "Marketing atrai atenção, mas reputação clínica e diferenciação técnica sustentam valor percebido.",
  },
  {
    id: 22,
    icon: Sparkles,
    question: "O que mais ajudaria você a comunicar tratamentos de maior valor com segurança?",
    options: [
      option("A", "Entender melhor a técnica antes de oferecer.", 2),
      option("B", "Ter critérios claros de indicação.", 3),
      option("C", "Saber explicar benefícios e limites com naturalidade.", 4),
      option("D", "Apresentar planejamento e expectativas de forma profissional.", 5),
      option("E", "Construir uma experiência premium desde o diagnóstico até o acompanhamento.", 5),
    ],
    reason: "Identificar maturidade em posicionamento premium.",
    reveals: "O entendimento sobre valor percebido, comunicação e confiança clínica.",
    objection: "Tenho dificuldade para vender tratamentos de maior valor.",
    objectionBreak:
      "A venda ética em saúde nasce da clareza diagnóstica, da indicação correta e da confiança transmitida ao paciente.",
  },
  {
    id: 23,
    icon: Crown,
    question: "Qual frase mais combina com o momento atual da sua carreira?",
    options: [
      option("A", "Estou construindo minha base clínica.", 1),
      option("B", "Quero ganhar mais segurança.", 2),
      option("C", "Quero me diferenciar tecnicamente.", 4),
      option("D", "Quero tornar-me referência na minha região.", 5),
      option("E", "Quero construir autoridade e legado profissional.", 5),
    ],
    reason: "Mapear identidade profissional.",
    reveals: "O estágio de evolução da carreira.",
    objection: "Ainda não chegou minha hora.",
    objectionBreak:
      "Todo profissional que hoje é referência passou pelo momento de decidir investir na própria evolução.",
  },
  {
    id: 24,
    icon: BookOpen,
    question:
      "Como você avalia sua capacidade de estruturar um protocolo de Fios Faciais do início ao fim?",
    options: [
      option("A", "Ainda não sei por onde começar.", 1),
      option("B", "Tenho noção geral, mas falta método.", 2),
      option("C", "Consigo estruturar casos simples.", 3),
      option("D", "Tenho segurança na maioria dos casos.", 4),
      option("E", "Consigo planejar, executar e acompanhar casos com alta previsibilidade.", 5),
    ],
    reason: "Avaliar maturidade técnica e autonomia clínica.",
    reveals: "A distância entre conhecimento teórico e aplicação prática.",
    objection: "Preciso apenas aprender a técnica.",
    objectionBreak:
      "Dominar Fios Faciais exige visão de jornada: diagnóstico, indicação, execução, acompanhamento e refinamento.",
  },
  {
    id: 25,
    icon: GraduationCap,
    question: "Quando você busca atualização profissional, o que mais valoriza?",
    options: [
      option("A", "Conteúdo introdutório e acessível.", 1),
      option("B", "Aulas objetivas para revisar fundamentos.", 2),
      option("C", "Método com aplicação na rotina clínica.", 4),
      option("D", "Discussão de casos reais e tomada de decisão.", 5),
      option("E", "Mentoria, prática supervisionada e refinamento técnico de alto nível.", 5),
    ],
    reason: "Entender o nível de profundidade buscado na formação.",
    reveals: "A expectativa de aprendizado e o grau de comprometimento com evolução contínua.",
    objection: "Mais um curso talvez não mude minha prática.",
    objectionBreak:
      "A transformação acontece quando o aprendizado organiza raciocínio clínico, prática e acompanhamento.",
  },
  {
    id: 26,
    icon: Brain,
    question:
      "Quando um paciente procura um tratamento para flacidez facial, qual costuma ser sua conduta?",
    options: [
      option("A", "Indico apenas bioestimuladores.", 2),
      option("B", "Associo bioestimuladores e preenchedores.", 3),
      option("C", "Avalio caso a caso.", 4),
      option("D", "Sempre considero Fios Faciais como uma possibilidade terapêutica.", 4),
      option(
        "E",
        "Elaboro um planejamento completo utilizando diferentes tecnologias e técnicas conforme a necessidade individual.",
        5,
      ),
    ],
    reason: "Avaliar o raciocínio clínico integrado.",
    reveals: "Se o profissional trabalha com protocolos completos ou limitados.",
    objection: "Os fios substituem outros procedimentos.",
    objectionBreak:
      "Os Fios Faciais ampliam o arsenal terapêutico e potencializam resultados quando bem indicados, integrando-se às demais técnicas.",
  },
  {
    id: 27,
    icon: TrendingUp,
    question: "Se sua agenda estivesse completamente preenchida, qual seria sua prioridade?",
    options: [
      option("A", "Trabalhar mais horas.", 1),
      option("B", "Contratar mais profissionais.", 2),
      option("C", "Atrair mais pacientes.", 3),
      option("D", "Aumentar o valor percebido dos tratamentos.", 4),
      option("E", "Construir uma clínica reconhecida pela excelência técnica.", 5),
    ],
    reason: "Avaliar visão empreendedora.",
    reveals: "O nível de maturidade em gestão e posicionamento.",
    objection: "Meu crescimento depende apenas de volume.",
    objectionBreak:
      "Negócios sustentáveis crescem principalmente por diferenciação, posicionamento e valor percebido.",
  },
  {
    id: 28,
    icon: Crown,
    question: "Qual frase representa melhor o momento atual da sua carreira?",
    options: [
      option("A", "Estou iniciando minha trajetória.", 1),
      option("B", "Quero ganhar mais segurança.", 2),
      option("C", "Quero me diferenciar tecnicamente.", 4),
      option("D", "Quero ser reconhecido como referência.", 5),
      option("E", "Quero construir um legado profissional.", 5),
    ],
    reason: "Mapear identidade profissional.",
    reveals: "O estágio de evolução da carreira.",
    objection: "Ainda não chegou minha hora.",
    objectionBreak:
      "Todo profissional que hoje é referência também passou pelo momento de decidir investir na própria evolução.",
  },
  {
    id: 29,
    icon: Sparkles,
    question: "Qual destas afirmações melhor representa sua visão sobre Fios Faciais?",
    options: [
      option("A", "Ainda conheço muito pouco.", 1),
      option("B", "Tenho interesse em aprender.", 2),
      option("C", "Acredito que podem agregar valor aos meus tratamentos.", 3),
      option("D", "Considero uma das técnicas mais estratégicas da Harmonização Orofacial.", 5),
      option(
        "E",
        "Quero dominar essa técnica para transformar meu posicionamento profissional.",
        5,
      ),
    ],
    reason: "Medir intenção de compra indireta.",
    reveals: "O grau de desejo pela formação.",
    objection: "Ainda não sei se realmente preciso aprender Fios Faciais.",
    objectionBreak:
      "Dominar uma técnica de alto valor agregado amplia possibilidades clínicas, fortalece autoridade profissional e diferencia o posicionamento.",
  },
  {
    id: 30,
    icon: Target,
    question:
      "Se você recebesse um plano personalizado mostrando exatamente quais competências desenvolver para acelerar sua evolução em Fios Faciais, qual seria seu interesse?",
    options: [
      option("A", "Nenhum.", 1),
      option("B", "Pequeno.", 2),
      option("C", "Moderado.", 3),
      option("D", "Grande.", 4),
      option("E", "Muito grande.", 5),
    ],
    reason: "Preparar o participante para o diagnóstico.",
    reveals: "O nível de abertura para receber orientação e investir no próprio desenvolvimento.",
    objection: "Talvez eu consiga evoluir sozinho.",
    objectionBreak:
      "Ter clareza sobre os próximos passos reduz erros, acelera a curva de aprendizado e aumenta a confiança para aplicar novas técnicas com segurança.",
  },
];

export const transitions: TransitionScreen[] = [
  {
    afterQuestion: 1,
    title: "Experiência é importante.",
    body: "Mas experiência sem estratégia apenas repete resultados. Os profissionais que mais evoluem são aqueles que nunca deixam de aperfeiçoar sua técnica.",
  },
  {
    afterQuestion: 3,
    title: "O paciente nem sempre pede pelo nome da técnica.",
    body: "Ele pede um rosto mais firme, mais definido e mais jovem. Quem domina o diagnóstico consegue oferecer a melhor solução.",
  },
  {
    afterQuestion: 5,
    title: "A evolução começa no gargalo certo.",
    body: "Profissionais experientes raramente evoluem apenas porque aprendem mais. Eles evoluem porque corrigem exatamente o ponto que limita seus resultados.",
  },
  {
    afterQuestion: 7,
    title: "Os melhores resultados não começam na agulha.",
    body: "Eles começam no olhar clínico. Quanto mais preciso é o planejamento, mais previsível se torna o tratamento.",
  },
  {
    afterQuestion: 9,
    title: "Toda grande carreira passa por uma decisão.",
    body: "A diferença entre quem acompanha o mercado e quem se torna referência está nas escolhas feitas hoje.",
  },
  {
    afterQuestion: 11,
    title: "Conhecimento sobre envelhecimento facial muda o resultado.",
    body: "Quanto maior a leitura anatômica e funcional, mais natural e previsível se torna a indicação clínica.",
  },
  {
    afterQuestion: 13,
    title: "Confiança não nasce da repetição.",
    body: "Ela nasce da compreensão. Quanto melhor o fundamento, maior a segurança para decidir e executar.",
  },
  {
    afterQuestion: 15,
    title: "O limite nem sempre está na técnica.",
    body: "Muitas vezes, o maior limite do crescimento profissional está na confiança para aplicar a técnica com responsabilidade.",
  },
  {
    afterQuestion: 17,
    title: "Conhecimento inspira.",
    body: "A prática supervisionada transforma.",
  },
  {
    afterQuestion: 19,
    title: "Excelência não é um destino.",
    body: "É um processo contínuo de aperfeiçoamento.",
  },
  {
    afterQuestion: 21,
    title: "Valor percebido não nasce por acaso.",
    body: "Ele é construído quando técnica, comunicação, experiência e resultado caminham na mesma direção.",
  },
  {
    afterQuestion: 23,
    title: "A carreira dos próximos anos começa agora.",
    body: "A evolução técnica costuma ser também a evolução do posicionamento profissional.",
  },
  {
    afterQuestion: 26,
    title: "Tratamentos isolados entregam respostas parciais.",
    body: "Os profissionais mais valorizados não executam procedimentos soltos. Eles constroem estratégias de tratamento.",
  },
  {
    afterQuestion: 28,
    title: "Toda referência já foi uma decisão em construção.",
    body: "A carreira que você terá daqui a cinco anos começa pelas decisões que toma hoje.",
  },
];

export const profiles: ProfileResult[] = [
  {
    id: "explorador",
    name: "O Explorador",
    range: [30, 54],
    headline: "Você está dando os primeiros passos em direção aos Fios Faciais.",
    description:
      "Seu perfil demonstra interesse em ampliar conhecimento, mas ainda busca compreender melhor as indicações, a segurança e as possibilidades dessa técnica.",
    strengths: [
      "Interesse por inovação.",
      "Mentalidade de crescimento.",
      "Busca constante por atualização.",
    ],
    improvements: [
      "Conhecimento anatômico aplicado.",
      "Critérios de indicação.",
      "Segurança clínica.",
    ],
    potential:
      "Com uma base estruturada, você pode incorporar os Fios Faciais à sua prática de forma segura e consistente.",
    nextStep: "Construir uma base sólida antes de partir para técnicas avançadas.",
    invitation:
      "Seu próximo passo é participar do Programa Online de Fundamentos em Fios Faciais da L'ECLER Academy.",
  },
  {
    id: "evolucao",
    name: "O Profissional em Evolução",
    range: [55, 78],
    headline:
      "Você já possui experiência em HOF e está pronto para organizar melhor seu raciocínio.",
    description:
      "Você compreende a importância dos Fios Faciais, mas ainda enfrenta dúvidas em relação à indicação, ao planejamento e à execução.",
    strengths: ["Boa experiência clínica.", "Interesse em evoluir.", "Perfil analítico."],
    improvements: ["Diagnóstico.", "Vetores.", "Planejamento facial."],
    potential: "Você está muito próximo de incorporar essa técnica de forma consistente.",
    nextStep: "Aprofundar o raciocínio clínico antes da prática avançada.",
    invitation:
      "O Programa Online foi desenvolvido para profissionais que desejam transformar conhecimento em segurança clínica.",
  },
  {
    id: "estrategista",
    name: "O Estrategista Clínico",
    range: [79, 102],
    headline: "Você demonstra uma visão integrada do tratamento facial.",
    description:
      "Seu perfil indica que você compreende que os Fios Faciais fazem parte de um planejamento global. O próximo desafio é transformar conhecimento em previsibilidade.",
    strengths: [
      "Excelente visão clínica.",
      "Diagnóstico consistente.",
      "Interesse por tratamentos personalizados.",
    ],
    improvements: ["Refinamento técnico.", "Casos avançados.", "Protocolos próprios."],
    potential: "Muito elevado. Você possui perfil para se destacar rapidamente.",
    nextStep: "Dominar protocolos estruturados.",
    invitation:
      "O Programa Online permitirá organizar todo o seu raciocínio antes da imersão prática presencial.",
  },
  {
    id: "diferenciado",
    name: "O Profissional Diferenciado",
    range: [103, 120],
    headline: "Você já compreende o valor estratégico dos Fios Faciais.",
    description:
      "Seu perfil busca utilizar a técnica para oferecer tratamentos mais completos e gerar maior valor aos pacientes.",
    strengths: ["Boa maturidade clínica.", "Visão estratégica.", "Busca por excelência."],
    improvements: ["Casos complexos.", "Refinamento técnico.", "Associação de técnicas."],
    potential: "Você possui grande potencial para construir uma posição de destaque em sua região.",
    nextStep: "Aprimorar técnica e previsibilidade.",
    invitation:
      "O Programa Online será a ponte entre sua experiência atual e uma prática clínica ainda mais diferenciada.",
  },
  {
    id: "altaPerformance",
    name: "O Profissional de Alta Performance",
    range: [121, 138],
    headline: "Você já possui maturidade clínica e busca previsibilidade em alto nível.",
    description:
      "Seu perfil entende que a diferenciação profissional depende de atualização contínua, refinamento técnico e posicionamento consistente.",
    strengths: ["Segurança.", "Planejamento.", "Visão empreendedora."],
    improvements: ["Protocolos exclusivos.", "Casos desafiadores.", "Posicionamento premium."],
    potential: "Você reúne características de um futuro líder em sua região.",
    nextStep: "Elevar sua prática para um novo nível.",
    invitation:
      "O Programa Online permitirá alinhar sua experiência com os protocolos da L'ECLER Academy antes da imersão presencial.",
  },
  {
    id: "referencia",
    name: "Referência em Construção",
    range: [139, 150],
    headline: "Seu perfil demonstra elevado nível de maturidade profissional.",
    description:
      "Você busca excelência, diferenciação e entende que uma carreira sólida é construída por meio da evolução contínua.",
    strengths: ["Alto nível técnico.", "Visão estratégica.", "Mentalidade de crescimento."],
    improvements: ["Refinar detalhes.", "Construção de autoridade.", "Escalabilidade da carreira."],
    potential:
      "Extremamente elevado. Você possui perfil para se tornar uma referência em Fios Faciais.",
    nextStep:
      "Conhecer metodologias que elevem sua previsibilidade clínica e consolidem seu posicionamento.",
    invitation:
      "O Programa Online será o primeiro passo para conhecer a metodologia da L'ECLER Academy e, posteriormente, participar da imersão prática presencial.",
  },
];

export function getProfileByScore(score: number): ProfileResult {
  return (
    profiles.find((profile) => score >= profile.range[0] && score <= profile.range[1]) ??
    profiles[0]
  );
}
