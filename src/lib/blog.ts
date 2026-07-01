import heroSmileImg from "@/assets/hero-smile.jpg";
import consultationImg from "@/assets/home-consultation.jpg";
import differentialsImg from "@/assets/home-differentials.jpg";
import methodImg from "@/assets/home-method.jpg";
import ctaImg from "@/assets/home-cta.jpg";

export type BlogSection = {
  heading: string;
  body: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  dateLabel: string;
  readTime: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: BlogSection[];
  ctaTitle: string;
  ctaText: string;
  ctaButtonLabel: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "harmonizacao-orofacial-natural",
    title: "Harmonização orofacial natural: como saber se combina com você",
    description:
      "Entenda por que o melhor resultado não é mudar o rosto, e sim equilibrar proporções, expressão e segurança clínica.",
    category: "Harmonização Orofacial",
    dateLabel: "26 jun. 2026",
    readTime: "7 min de leitura",
    image: differentialsImg,
    imageAlt: "Dra. Cássia Blasques em retrato profissional",
    intro:
      "A harmonização orofacial natural começa antes de qualquer aplicação. Ela nasce de uma conversa honesta, de uma avaliação técnica e da decisão de preservar a identidade de quem procura o tratamento.",
    sections: [
      {
        heading: "Naturalidade não é ausência de resultado",
        body: [
          "Muitas pessoas chegam à clínica dizendo a mesma frase: querem melhorar, mas não querem ficar diferentes. Esse receio é legítimo. A harmonização orofacial ficou muito conhecida por resultados exagerados, porém, o caminho mais elegante é justamente o oposto. Um bom plano não tenta padronizar rostos. Ele busca entender proporções, expressão, envelhecimento, estrutura óssea, qualidade de pele e estilo pessoal. A partir dessa leitura, a indicação pode ser muito mais precisa.",
          "Um resultado natural pode suavizar linhas de expressão, devolver pontos discretos de sustentação, melhorar a textura da pele, definir melhor o contorno facial ou equilibrar pequenas assimetrias. Nada disso precisa alterar a forma como a pessoa se reconhece. Quando bem indicada, a harmonização não chama atenção pelo procedimento, e sim pela sensação de descanso, leveza e autocuidado.",
          "Por isso, naturalidade não significa fazer pouco de qualquer jeito. Significa fazer o necessário, na região certa, com dose adequada e expectativa bem alinhada. Em alguns casos, o melhor plano começa com pele. Em outros, com toxina botulínica, bioestimuladores, fios, preenchimento pontual ou uma combinação em etapas. A diferença está em não transformar a aplicação em ponto de partida. O ponto de partida deve ser sempre o diagnóstico.",
        ],
      },
      {
        heading: "O que deve ser avaliado antes da indicação",
        body: [
          "Antes de falar em produtos ou técnicas, é preciso entender o incômodo principal. A paciente se sente cansada? Percebe perda de contorno? Tem medo de flacidez? Quer melhorar olheiras, linhas de expressão, lábios, mandíbula ou qualidade da pele? Cada queixa pode ter causas diferentes. Uma ruga pode vir de contração muscular, perda de colágeno, desidratação, exposição solar ou falta de sustentação. Tratar todas as queixas com o mesmo procedimento é uma simplificação perigosa.",
          "A avaliação também considera histórico de saúde, procedimentos anteriores, rotina, idade, hábitos, anatomia e expectativa. Isso evita indicações por tendência. Nem tudo o que está em alta faz sentido para todos os rostos. Um rosto mais delicado pede estratégia diferente de um rosto com maior estrutura. Uma paciente que nunca fez procedimentos pode precisar de uma abordagem mais gradual. Outra, que já tem intervenções anteriores, pode precisar primeiro reorganizar volumes ou recuperar qualidade de pele.",
          "Na L'ECLER, a proposta é unir técnica, segurança e escuta. A Dra. Cássia e a equipe analisam o que pode ser feito, mas também o que deve ser evitado. Essa parte é essencial. Um bom atendimento não empurra procedimentos; ele orienta. A paciente precisa sair da conversa entendendo possibilidades, limites, tempo de resposta, cuidados e manutenção.",
        ],
      },
      {
        heading: "Como saber se harmonização combina com você",
        body: [
          "A harmonização pode fazer sentido quando existe vontade de melhorar algum ponto do rosto sem buscar uma transformação radical. Também pode ser indicada para quem deseja prevenir sinais mais avançados de envelhecimento, recuperar firmeza, melhorar viço ou equilibrar proporções. Mas a resposta definitiva depende da avaliação. Em estética facial, o que funciona para uma pessoa pode não ser o melhor para outra.",
          "Um bom sinal é quando você consegue explicar o que sente, mesmo sem saber o nome do procedimento. Frases como 'me sinto com aparência cansada', 'meu rosto perdeu definição', 'tenho medo de ficar artificial' ou 'não sei por onde começar' já são suficientes para iniciar uma conversa. A equipe transforma esse incômodo em uma hipótese clínica e, depois, em plano.",
          "O planejamento pode acontecer em etapas. Isso ajuda a preservar naturalidade, acompanhar resposta do corpo e ajustar o percurso. Em vez de fazer tudo no mesmo dia, a clínica pode priorizar o que trará mais impacto com mais segurança. Esse cuidado costuma gerar resultados mais sofisticados, porque respeita o ritmo biológico e a identidade da paciente.",
        ],
      },
      {
        heading: "Quando falar com o atendimento",
        body: [
          "Se você tem vontade de melhorar, mas ainda não sabe qual procedimento pedir, esse é exatamente o momento de falar com o atendimento. O primeiro contato não precisa ser uma decisão definitiva. Ele serve para entender sua queixa, orientar o próximo passo e direcionar você para a avaliação mais adequada. Quanto mais clara for essa primeira conversa, mais segura tende a ser a consulta.",
          "Fale com o atendimento da L'ECLER pelo WhatsApp e conte o que gostaria de melhorar. A equipe vai orientar você sobre a avaliação, explicar como funciona o diagnóstico inicial e ajudar a agendar sua visita à clínica em Bragança Paulista. O objetivo é que você chegue mais tranquila, com menos dúvidas e com uma expectativa realista sobre o que pode ser feito.",
        ],
      },
    ],
    ctaTitle: "Quer saber se a harmonização natural é para você?",
    ctaText:
      "Fale com o atendimento da L'ECLER pelo WhatsApp, conte o que incomoda e receba orientação para agendar sua avaliação com segurança.",
    ctaButtonLabel: "Falar com o atendimento",
  },
  {
    slug: "sorriso-bonito-tambem-e-saude",
    title: "Sorriso bonito também é saúde: a visão integrativa da L'ECLER",
    description:
      "Saúde bucal, estética e bem-estar caminham juntos quando o plano é feito para o paciente como um todo.",
    category: "Odontologia Integrativa",
    dateLabel: "26 jun. 2026",
    readTime: "7 min de leitura",
    image: heroSmileImg,
    imageAlt: "Dra. Cássia sorrindo na Clínica L'ECLER",
    intro:
      "Um sorriso bonito não depende apenas da cor ou do formato dos dentes. Ele também precisa de função, equilíbrio, conforto, saúde gengival e segurança para ser vivido no dia a dia.",
    sections: [
      {
        heading: "A boca influencia muito mais do que a aparência",
        body: [
          "A saúde bucal está ligada à mastigação, à fala, à respiração, ao sono, à autoestima e ao bem-estar geral. Quando existe dor, inflamação, perda dental, restaurações antigas, gengiva sensível ou mordida desequilibrada, o impacto não fica restrito ao sorriso. A pessoa pode evitar fotos, mastigar de um lado só, sentir insegurança ao falar de perto ou adiar tratamentos por medo de descobrir problemas maiores.",
          "Por isso, a odontologia integrativa não olha apenas para dentes isolados. Ela considera a boca como parte do corpo e da vida da paciente. Um tratamento estético bonito precisa respeitar função, saúde e previsibilidade. Clarear, alinhar, colocar facetas ou reabilitar dentes sem avaliar a base pode gerar um resultado bonito no começo, mas frágil no longo prazo.",
          "Na L'ECLER, a estética do sorriso é tratada como consequência de um plano bem feito. O objetivo é unir beleza, função e conforto. Isso significa entender o que a paciente deseja melhorar, mas também avaliar o que precisa ser tratado antes para que o resultado seja estável.",
        ],
      },
      {
        heading: "Por que estética sem função pode não durar",
        body: [
          "Um sorriso pode parecer bonito em uma foto e ainda assim não estar saudável. Se a mordida está sobrecarregada, se existe bruxismo sem controle, se a gengiva está inflamada ou se há dentes com estrutura comprometida, qualquer intervenção estética precisa ser planejada com cuidado. A pressa em transformar o sorriso pode esconder problemas que depois prejudicam o resultado.",
          "Antes de indicar facetas, lentes, clareamento, alinhadores ou próteses, a equipe avalia gengiva, dentes, oclusão, histórico de restaurações, hábitos e expectativa. Em alguns casos, o primeiro passo é prevenção. Em outros, tratamento periodontal, canal, troca de restaurações, ortodontia, implantes ou reabilitação. Essa sequência não diminui o valor estético do plano; ela protege o resultado.",
          "A visão integrativa também ajuda a escolher o que não fazer. Nem todo sorriso precisa ser muito branco. Nem todo dente precisa ser desgastado. Nem todo alinhamento exige a mesma técnica. O plano ideal é aquele que melhora a aparência sem comprometer estrutura e sem criar uma estética artificial.",
        ],
      },
      {
        heading: "Como uma avaliação individual muda a experiência",
        body: [
          "Cada paciente chega com uma história. Algumas pessoas têm medo de dentista por experiências antigas. Outras querem voltar a sorrir depois de anos escondendo os dentes. Há quem procure a clínica por um evento importante, por uma nova fase profissional ou simplesmente por perceber que o sorriso não combina mais com a forma como se sente por dentro.",
          "Uma avaliação individual organiza essas prioridades. Em vez de apresentar uma lista solta de procedimentos, a equipe constrói um caminho. O paciente entende o que é urgente, o que é estético, o que pode ser feito em etapas e o que depende de exames complementares. Isso diminui ansiedade e melhora a tomada de decisão.",
          "Na L'ECLER, saúde e estética não competem. Elas trabalham juntas. O objetivo é que o paciente saia da avaliação sabendo como cuidar do sorriso com segurança, entendendo o porquê de cada etapa e enxergando um resultado possível, natural e coerente.",
        ],
      },
      {
        heading: "Quando procurar o atendimento",
        body: [
          "Você não precisa esperar sentir dor para buscar orientação. Se existe incômodo com cor, formato, alinhamento, perda dental, restaurações antigas, mau hálito, sangramento gengival ou insegurança ao sorrir, já vale conversar com o atendimento. A equipe pode orientar o tipo de avaliação mais adequado e explicar como funciona o primeiro contato.",
          "Fale com o atendimento da L'ECLER pelo WhatsApp para contar sua situação e agendar uma avaliação. A conversa inicial ajuda a entender se o seu caso pede prevenção, estética, reabilitação ou uma combinação de cuidados. O primeiro passo é simples: explicar o que incomoda e permitir que a equipe direcione você com clareza.",
        ],
      },
    ],
    ctaTitle: "Quer cuidar do sorriso com saúde e estética?",
    ctaText:
      "Chame o atendimento da L'ECLER no WhatsApp e agende uma avaliação para entender o melhor caminho para o seu caso.",
    ctaButtonLabel: "Falar com o atendimento",
  },
  {
    slug: "facetas-lentes-de-contato-quando-vale-a-pena",
    title: "Facetas e lentes de contato: quando vale a pena conversar",
    description:
      "Saiba em quais casos as lentes podem transformar o sorriso sem perder naturalidade e quais avaliações vêm antes.",
    category: "Odontologia Estética",
    dateLabel: "26 jun. 2026",
    readTime: "8 min de leitura",
    image: consultationImg,
    imageAlt: "Consulta individualizada na Clínica L'ECLER",
    intro:
      "Facetas e lentes de contato podem redesenhar o sorriso, mas não devem ser tratadas como uma decisão de impulso. O melhor resultado depende de diagnóstico, planejamento e expectativa realista.",
    sections: [
      {
        heading: "O que as facetas e lentes podem melhorar",
        body: [
          "Facetas e lentes de contato são recursos da odontologia estética para melhorar forma, cor, proporção, alinhamento aparente e harmonia do sorriso. Elas podem ser indicadas em casos de dentes manchados, desgastados, pequenos, com espaços, com restaurações antigas ou com formato que não conversa bem com o rosto. Quando bem planejadas, podem transformar a forma como a pessoa se vê ao sorrir.",
          "O ponto principal é que a transformação não deve criar um sorriso igual para todos. Um sorriso bonito precisa respeitar lábios, gengiva, formato do rosto, idade, personalidade, tom de pele e maneira de falar. O que fica elegante em uma pessoa pode parecer artificial em outra. Por isso, o desenho do sorriso exige sensibilidade estética e domínio técnico.",
          "Na L'ECLER, a conversa começa pelo desejo da paciente. Algumas pessoas querem um sorriso mais claro. Outras querem corrigir assimetrias, aumentar presença dos dentes ao sorrir ou substituir restaurações que aparecem. A partir disso, a equipe avalia se facetas ou lentes são realmente o melhor caminho.",
        ],
      },
      {
        heading: "Nem todo caso deve começar pelas lentes",
        body: [
          "Existe uma ideia comum de que lentes resolvem qualquer incômodo estético. Na prática, nem sempre é assim. Às vezes, antes de pensar em cerâmica, é preciso alinhar dentes, tratar gengiva, clarear, corrigir mordida, trocar restaurações, tratar canal ou avaliar bruxismo. Essa etapa anterior é importante para evitar retrabalho e proteger o investimento.",
          "Também é necessário avaliar estrutura dental. Em muitos casos, o objetivo é preservar ao máximo o dente natural. Isso significa escolher uma técnica conservadora quando possível e evitar desgaste desnecessário. A indicação depende de exames, fotografias, análise do sorriso e conversa sobre expectativa.",
          "Outro ponto importante é a cor. Dentes extremamente brancos podem parecer artificiais se não combinarem com o rosto. A estética sofisticada costuma estar no equilíbrio: dentes claros, sim, mas com textura, translucidez e proporção natural. O planejamento ajuda a encontrar esse ponto.",
        ],
      },
      {
        heading: "Planejamento evita arrependimento",
        body: [
          "O paciente precisa entender o processo antes de iniciar. Isso inclui saber quais dentes serão envolvidos, qual material será indicado, quanto tempo o tratamento pode durar, quais cuidados serão necessários e como funcionam as manutenções. Quando há simulação ou prova estética, a pessoa consegue visualizar melhor a proposta e participar da decisão.",
          "Essa participação muda a experiência. Em vez de aceitar um resultado pronto, a paciente entende escolhas de forma, comprimento, cor e proporção. O tratamento deixa de ser uma aposta estética e passa a ser um projeto de sorriso. Essa diferença reduz ansiedade e aumenta segurança.",
          "Na L'ECLER, o planejamento é pensado para unir estética e função. Um sorriso com facetas ou lentes precisa ser bonito, mas também confortável para mastigar, falar e viver. Por isso, a avaliação clínica vem antes da promessa visual.",
        ],
      },
      {
        heading: "Quando falar com o atendimento",
        body: [
          "Se você pensa em facetas ou lentes, mas ainda não sabe se é candidata, fale com o atendimento. A equipe pode orientar o primeiro passo, explicar como funciona a avaliação e ajudar você a chegar à consulta com informações importantes sobre seu objetivo.",
          "Chame o atendimento da L'ECLER pelo WhatsApp e conte o que deseja mudar no sorriso. A partir dessa conversa, a equipe orienta o agendamento e direciona você para uma avaliação personalizada. O objetivo é descobrir se as lentes fazem sentido ou se existe um caminho melhor para chegar ao sorriso que você deseja.",
        ],
      },
    ],
    ctaTitle: "Pensando em facetas ou lentes de contato?",
    ctaText:
      "Fale com o atendimento da L'ECLER no WhatsApp e agende uma avaliação para descobrir se esse é o melhor caminho para o seu sorriso.",
    ctaButtonLabel: "Falar com o atendimento",
  },
  {
    slug: "botox-preenchimento-sem-exagero",
    title: "Botox e preenchimento sem exagero: o que muda na avaliação",
    description:
      "A diferença entre suavizar sinais e modificar a expressão está no diagnóstico, na dose e no plano global.",
    category: "Estética Avançada",
    dateLabel: "26 jun. 2026",
    readTime: "7 min de leitura",
    image: methodImg,
    imageAlt: "Planejamento de tratamento com a Dra. Cássia",
    intro:
      "O medo de ficar artificial é comum. A boa notícia é que a toxina botulínica e o preenchimento, quando bem indicados, podem ter justamente o objetivo oposto: preservar expressão e melhorar com sutileza.",
    sections: [
      {
        heading: "Botox e preenchimento não são a mesma coisa",
        body: [
          "A toxina botulínica, muito conhecida como botox, atua na contração muscular. Ela pode suavizar linhas de expressão na testa, entre as sobrancelhas, ao redor dos olhos e em outras regiões quando há indicação. O preenchimento, geralmente feito com ácido hialurônico, tem outra função: repor, estruturar ou equilibrar volumes específicos.",
          "Essa diferença muda tudo. Quando uma linha aparece por contração muscular, o tratamento pode ser um. Quando o incômodo vem de perda de volume, flacidez, sombra, suporte ou proporção, a estratégia pode ser outra. Por isso, pedir um procedimento pelo nome nem sempre é o melhor caminho. O ideal é explicar o que incomoda.",
          "Um resultado sem exagero depende de diagnóstico. A equipe precisa olhar expressão em movimento, proporções do rosto, qualidade da pele, histórico de procedimentos e expectativa. A aplicação é apenas uma etapa. Antes dela, existe uma decisão clínica.",
        ],
      },
      {
        heading: "Por que o plano vem antes da seringa",
        body: [
          "Quando alguém aplica sem planejamento, o risco de exagero aumenta. Preencher uma região que não precisa de volume pode pesar o rosto. Usar toxina em excesso pode endurecer a expressão. Corrigir uma queixa sem olhar o conjunto pode deslocar o problema para outra área. O plano existe para evitar essas distorções.",
          "Na avaliação, a equipe entende se a queixa é de cansaço, linhas, flacidez, perda de contorno, assimetria ou qualidade de pele. Às vezes, a melhor resposta não é preencher, e sim estimular colágeno. Em outros casos, uma pequena dose de toxina já traz leveza. Também há situações em que o tratamento deve ser feito em etapas para acompanhar a resposta do corpo.",
          "Esse cuidado ajuda a manter naturalidade. O objetivo não é apagar todas as marcas, mas suavizar o que pesa a expressão e valorizar o que já existe. Rosto bonito não é rosto sem movimento. É rosto com harmonia, saúde e coerência.",
        ],
      },
      {
        heading: "Como evitar o aspecto artificial",
        body: [
          "O aspecto artificial geralmente nasce de excesso, indicação errada ou falta de continuidade estética. Para evitar isso, a avaliação precisa considerar dose, profundidade, produto, região, tempo de resposta e manutenção. Também é importante respeitar o estilo da paciente. Algumas pessoas querem mudanças muito discretas. Outras aceitam um resultado mais evidente, mas ainda assim natural.",
          "Outro ponto é alinhar expectativa. Procedimentos injetáveis melhoram pontos específicos, mas não substituem uma cirurgia quando há flacidez avançada, nem resolvem todos os sinais de envelhecimento de uma vez. Uma orientação honesta evita frustração. Muitas vezes, o melhor plano combina pele, colágeno, toxina e pequenos ajustes, em vez de concentrar tudo em preenchimento.",
          "Na L'ECLER, a proposta é conduzir o tratamento com técnica conservadora, segurança e acompanhamento. A paciente entende o que será feito, por que será feito e como acompanhar o resultado nos dias e semanas seguintes.",
        ],
      },
      {
        heading: "Quando falar com o atendimento",
        body: [
          "Se você tem vontade de fazer botox ou preenchimento, mas tem medo de exagero, fale com o atendimento antes de decidir. O primeiro contato ajuda a organizar sua dúvida e direcionar a avaliação. Você não precisa saber qual produto pedir. Basta contar o que gostaria de melhorar.",
          "O atendimento da L'ECLER pode orientar sobre agendamento, explicar como funciona a consulta e encaminhar você para uma avaliação individualizada. Chame pelo WhatsApp e inicie a conversa com segurança. O melhor procedimento começa com uma escuta cuidadosa.",
        ],
      },
    ],
    ctaTitle: "Quer suavizar sinais sem perder sua expressão?",
    ctaText:
      "Fale com o atendimento da L'ECLER pelo WhatsApp e agende uma avaliação para entender a indicação mais segura para o seu rosto.",
    ctaButtonLabel: "Falar com o atendimento",
  },
  {
    slug: "implantes-dentarios-voltar-a-sorrir",
    title: "Implantes dentários: o caminho para voltar a sorrir e mastigar",
    description:
      "Perder dentes afeta estética, função e confiança. Veja como o planejamento digital muda a experiência.",
    category: "Implantes",
    dateLabel: "26 jun. 2026",
    readTime: "8 min de leitura",
    image: ctaImg,
    imageAlt: "Dra. Cássia na Clínica L'ECLER",
    intro:
      "Implantes dentários não devolvem apenas dentes. Eles podem devolver segurança para mastigar, conversar, sorrir em fotos e viver com mais tranquilidade.",
    sections: [
      {
        heading: "A perda dental afeta estética e função",
        body: [
          "Perder um ou mais dentes muda mais do que a aparência do sorriso. A mastigação pode ficar limitada, a fala pode sofrer alterações, dentes vizinhos podem se movimentar e a autoestima pode ser profundamente impactada. Muitas pessoas passam a sorrir menos, evitam alimentos mais firmes ou ficam inseguras em situações sociais.",
          "Além disso, a ausência dental pode influenciar suporte facial e equilíbrio da mordida. Por isso, adiar a avaliação nem sempre é a melhor escolha. Quanto antes o caso for analisado, mais opções podem estar disponíveis para planejar uma reabilitação confortável, estética e segura.",
          "Implantes dentários são uma solução moderna para substituir raízes perdidas e apoiar próteses ou coroas. Mas cada caso precisa ser estudado. A quantidade de osso, a gengiva, a mordida, o número de dentes ausentes, a saúde geral e a expectativa do paciente influenciam o plano.",
        ],
      },
      {
        heading: "Planejamento digital melhora previsibilidade",
        body: [
          "Hoje, a implantodontia pode contar com exames de imagem, planejamento digital e recursos que ajudam a definir posição, angulação e sequência do tratamento com mais precisão. Essa previsibilidade não serve apenas para o profissional. Ela também ajuda o paciente a entender o processo antes de começar.",
          "Em uma avaliação completa, a equipe pode explicar se o caso envolve um implante unitário, múltiplos implantes, prótese sobre implante, enxerto ou reabilitação mais ampla. Também é possível discutir tempo de tratamento, etapas, cuidados, provisórios e manutenção. Esse tipo de clareza reduz medo e melhora a experiência.",
          "O planejamento também evita que a estética seja pensada separadamente da função. Um implante precisa estar bem posicionado para receber uma coroa ou prótese que pareça natural, permita mastigação adequada e seja higienizável. A beleza do resultado depende da precisão da base.",
        ],
      },
      {
        heading: "O que esperar da avaliação",
        body: [
          "A primeira avaliação não significa iniciar cirurgia imediatamente. Ela serve para entender o caso. A equipe examina a boca, a gengiva, os dentes remanescentes, a mordida, o histórico de saúde e, quando necessário, solicita exames complementares. O paciente também explica seus medos, necessidades e objetivos.",
          "Algumas pessoas querem substituir um dente perdido recentemente. Outras usam próteses antigas e desejam mais estabilidade. Há pacientes que perderam muitos dentes e buscam reabilitação completa. Cada situação exige um plano diferente. Por isso, comparar o próprio caso com o de outra pessoa pode gerar expectativa errada.",
          "Na L'ECLER, o foco é orientar com segurança. O paciente precisa entender o que é possível, quais etapas vêm primeiro e como será acompanhado. Um bom tratamento com implantes é construído com técnica, tempo e cuidado.",
        ],
      },
      {
        heading: "Quando falar com o atendimento",
        body: [
          "Se você perdeu dentes, usa prótese desconfortável, evita sorrir ou sente insegurança para mastigar, fale com o atendimento. A equipe pode orientar o agendamento e explicar quais informações são importantes para a avaliação inicial.",
          "Chame o atendimento da L'ECLER pelo WhatsApp e conte sua situação. O primeiro passo é entender o seu caso e não assumir que existe uma única solução. Com avaliação individualizada, é possível planejar uma reabilitação que una função, estética e confiança.",
        ],
      },
    ],
    ctaTitle: "Quer voltar a mastigar e sorrir com segurança?",
    ctaText:
      "Fale com o atendimento da L'ECLER pelo WhatsApp e agende uma avaliação para entender as possibilidades de implantes no seu caso.",
    ctaButtonLabel: "Falar com o atendimento",
  },
  {
    slug: "gerenciamento-dermico-pele-bonita",
    title: "Gerenciamento dérmico: pele bonita é plano contínuo",
    description:
      "Entenda por que cuidar da pele em etapas pode entregar mais viço, textura e prevenção do que procedimentos isolados.",
    category: "Pele",
    dateLabel: "26 jun. 2026",
    readTime: "7 min de leitura",
    image: consultationImg,
    imageAlt: "Atendimento personalizado na Clínica L'ECLER",
    intro:
      "Pele bonita raramente nasce de um único procedimento. Ela costuma ser resultado de estratégia, constância, avaliação correta e escolhas adequadas para cada fase.",
    sections: [
      {
        heading: "Gerenciar é diferente de apagar um problema",
        body: [
          "Muitas pessoas procuram procedimentos quando uma mancha, ruga, poro, flacidez ou perda de viço começa a incomodar. Isso é natural, mas a pele não funciona como um problema isolado. Ela responde a fatores como genética, hormônios, exposição solar, sono, alimentação, cuidados domiciliares, procedimentos anteriores e idade.",
          "O gerenciamento dérmico propõe olhar para a pele como um projeto contínuo. Em vez de fazer um procedimento solto e esperar que ele resolva tudo, a equipe organiza etapas: tratar o que incomoda, fortalecer a qualidade da pele, estimular colágeno, manter resultado e prevenir piora. Essa lógica costuma entregar resultados mais consistentes.",
          "Na prática, isso pode envolver peelings, bioestimuladores, laser, microagulhamento, ativos profissionais, hidratação, controle de manchas e ajustes na rotina domiciliar. A escolha depende do tipo de pele, sensibilidade, histórico e objetivo. Não existe uma fórmula única para todas as pessoas.",
        ],
      },
      {
        heading: "Por que procedimentos isolados podem frustrar",
        body: [
          "Um procedimento pode ser excelente e ainda assim não ser suficiente sozinho. Uma sessão de laser pode melhorar textura, mas se a pele não recebe manutenção, o resultado perde força. Um peeling pode clarear, mas sem fotoproteção e rotina adequada, manchas podem voltar. Um bioestimulador pode melhorar firmeza, mas precisa de tempo de resposta e indicação correta.",
          "Por isso, a avaliação é tão importante. Ela define prioridade. Às vezes, o primeiro passo é controlar inflamação ou sensibilidade. Em outros casos, tratar manchas. Há pacientes que precisam estimular colágeno antes de pensar em preenchimento. Outras se beneficiam de protocolos leves e contínuos, em vez de intervenções mais intensas.",
          "A pele muda com o tempo. O plano também pode mudar. O gerenciamento permite ajustar tratamentos conforme resposta, estação do ano, rotina e fase de vida. Essa personalização é o que diferencia um cuidado estratégico de uma sequência aleatória de procedimentos.",
        ],
      },
      {
        heading: "O que uma boa avaliação de pele considera",
        body: [
          "Uma avaliação de pele deve considerar queixa principal, histórico de manchas, acne, sensibilidade, cicatrizes, textura, flacidez, poros, uso de ácidos, exposição solar e procedimentos já realizados. Também é importante entender o quanto a pessoa consegue manter cuidados em casa. Um plano impossível de seguir tende a fracassar.",
          "A equipe pode indicar procedimentos em consultório e orientar uma rotina domiciliar compatível. Isso não significa excesso de produtos. Pelo contrário: muitas vezes, uma rotina objetiva e bem escolhida funciona melhor do que muitos ativos sem estratégia. O foco é consistência.",
          "Na L'ECLER, o gerenciamento dérmico é pensado para quem quer uma pele mais bonita sem perder naturalidade. O resultado esperado é progressivo: mais viço, textura refinada, melhora de manchas quando indicado e uma aparência global mais saudável.",
        ],
      },
      {
        heading: "Quando falar com o atendimento",
        body: [
          "Se você sente que sua pele perdeu brilho, apresenta manchas, textura irregular, poros aparentes, flacidez ou sinais de envelhecimento, fale com o atendimento. Você não precisa saber qual tecnologia pedir. A equipe ajuda a direcionar a avaliação e entender o melhor primeiro passo.",
          "Chame o atendimento da L'ECLER pelo WhatsApp e explique o que incomoda na sua pele. A partir dessa conversa, é possível agendar uma avaliação e construir um plano contínuo, realista e seguro para melhorar a qualidade e o viço da pele, além de prevenir sinais do envelhecimento.",
        ],
      },
    ],
    ctaTitle: "Quer começar um plano de pele com orientação?",
    ctaText:
      "Fale com o atendimento da L'ECLER pelo WhatsApp e agende uma avaliação para entender o melhor gerenciamento dérmico para você.",
    ctaButtonLabel: "Falar com o atendimento",
  },
];

export const featuredBlogPost = blogPosts[0];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
