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
};

export const blogPosts: BlogPost[] = [
  {
    slug: "harmonizacao-orofacial-natural",
    title: "Harmonização orofacial natural: como saber se combina com você",
    description:
      "Entenda por que o melhor resultado não é mudar o rosto, e sim equilibrar proporções, expressão e segurança clínica.",
    category: "Harmonização Orofacial",
    dateLabel: "26 jun. 2026",
    readTime: "4 min de leitura",
    image: differentialsImg,
    imageAlt: "Dra. Cássia Blasques em retrato profissional",
    intro:
      "A harmonização orofacial natural começa antes da aplicação. Ela começa em uma boa conversa, na leitura do rosto e na decisão de preservar a identidade de quem procura o tratamento.",
    sections: [
      {
        heading: "Naturalidade não é ausência de resultado",
        body: [
          "Um rosto natural pode estar mais descansado, com contornos mais definidos e pele com mais qualidade. A diferença é que o resultado conversa com a expressão da pessoa, sem parecer artificial.",
          "Por isso, a avaliação precisa considerar anatomia, função, histórico clínico, proporções faciais e o desejo real da paciente.",
        ],
      },
      {
        heading: "O que deve ser avaliado antes de indicar qualquer procedimento",
        body: [
          "Antes de falar em toxina, preenchimento, fios ou bioestimuladores, é preciso entender o que incomoda: flacidez, perda de volume, assimetria, linhas de expressão ou qualidade da pele.",
          "A partir disso, a clínica define prioridades. Em alguns casos, menos produto e mais planejamento entregam um resultado muito melhor.",
        ],
      },
      {
        heading: "Quando conversar com a equipe",
        body: [
          "Se você tem vontade de melhorar, mas tem medo de ficar diferente, esse é justamente o momento de conversar. A orientação inicial ajuda a separar desejo, possibilidade e segurança.",
          "Na L'ECLER, o primeiro contato pode acontecer pelo WhatsApp, com direcionamento para avaliação e plano individualizado.",
        ],
      },
    ],
  },
  {
    slug: "sorriso-bonito-tambem-e-saude",
    title: "Sorriso bonito também é saúde: a visão integrativa da L'ECLER",
    description:
      "Saúde bucal, estética e bem-estar caminham juntos quando o plano é feito para o paciente como um todo.",
    category: "Odontologia Integrativa",
    dateLabel: "26 jun. 2026",
    readTime: "3 min de leitura",
    image: heroSmileImg,
    imageAlt: "Dra. Cássia sorrindo na Clínica L'ECLER",
    intro:
      "Um sorriso bonito não depende apenas da cor ou do formato dos dentes. Ele também precisa de função, equilíbrio, conforto e saúde.",
    sections: [
      {
        heading: "A boca influencia a vida inteira",
        body: [
          "Mastigação, fala, sono, autoestima e saúde geral podem ser impactados pela condição bucal. Por isso, tratar apenas a aparência raramente é o melhor caminho.",
          "A odontologia integrativa olha para o paciente de forma mais ampla, conectando prevenção, estética, função e bem-estar.",
        ],
      },
      {
        heading: "Estética sem função pode não durar",
        body: [
          "Antes de clarear, alinhar, fazer lentes ou reabilitar dentes, é importante avaliar mordida, gengiva, estrutura dental e hábitos.",
          "Quando a base está saudável, o resultado estético tende a ser mais bonito, confortável e duradouro.",
        ],
      },
      {
        heading: "O começo é uma avaliação individual",
        body: [
          "Cada paciente chega com uma história: restaurações antigas, medo de dentista, vontade de sorrir mais, perda dental ou desejo de rejuvenescimento.",
          "A conversa inicial organiza essas prioridades e mostra qual etapa deve vir primeiro.",
        ],
      },
    ],
  },
  {
    slug: "facetas-lentes-de-contato-quando-vale-a-pena",
    title: "Facetas e lentes de contato: quando vale a pena conversar",
    description:
      "Saiba em quais casos as lentes podem transformar o sorriso sem perder naturalidade e quais avaliações vêm antes.",
    category: "Odontologia Estética",
    dateLabel: "26 jun. 2026",
    readTime: "4 min de leitura",
    image: consultationImg,
    imageAlt: "Consulta individualizada na Clínica L'ECLER",
    intro:
      "Facetas e lentes de contato podem redesenhar o sorriso, mas não devem ser tratadas como uma decisão de impulso. O melhor resultado depende de planejamento.",
    sections: [
      {
        heading: "O que as lentes podem melhorar",
        body: [
          "Elas podem ajustar cor, forma, proporção, pequenos espaços e harmonia do sorriso. Em muitos casos, a transformação é expressiva sem perder a identidade da paciente.",
          "O objetivo não é criar um sorriso igual para todas as pessoas, e sim um desenho que combine com rosto, idade, gengiva, lábios e personalidade.",
        ],
      },
      {
        heading: "Nem todo caso começa pelas lentes",
        body: [
          "Às vezes, antes das facetas, é melhor alinhar dentes, clarear, tratar gengiva ou reabilitar a mordida. Esse cuidado evita retrabalho e protege o investimento.",
          "A avaliação clínica mostra se o caso permite uma solução conservadora e qual material faz mais sentido.",
        ],
      },
      {
        heading: "A conversa evita arrependimento",
        body: [
          "Quando o paciente entende o processo, visualiza possibilidades e participa das decisões, o tratamento deixa de ser uma aposta.",
          "Por isso, a L'ECLER prioriza orientação, simulação quando indicada e plano personalizado.",
        ],
      },
    ],
  },
  {
    slug: "botox-preenchimento-sem-exagero",
    title: "Botox e preenchimento sem exagero: o que muda na avaliação",
    description:
      "A diferença entre suavizar sinais e modificar a expressão está no diagnóstico, na dose e no plano global.",
    category: "Estética Avançada",
    dateLabel: "26 jun. 2026",
    readTime: "3 min de leitura",
    image: methodImg,
    imageAlt: "Planejamento de tratamento com a Dra. Cássia",
    intro:
      "O medo de ficar artificial é comum. A boa notícia é que uma abordagem conservadora e bem planejada tem justamente o objetivo oposto.",
    sections: [
      {
        heading: "Toxina e preenchimento não são a mesma coisa",
        body: [
          "A toxina botulínica atua na contração muscular e ajuda a suavizar linhas de expressão. O preenchimento, em geral com ácido hialurônico, repõe ou estrutura volumes específicos.",
          "Quando usados com critério, podem deixar a aparência mais leve e descansada sem alterar quem você é.",
        ],
      },
      {
        heading: "O plano vem antes da seringa",
        body: [
          "A indicação precisa considerar idade, pele, expressão, proporções, assimetrias e histórico de procedimentos anteriores.",
          "Em muitos casos, a melhor escolha é combinar pequenas intervenções em etapas, respeitando resposta do corpo e resultado desejado.",
        ],
      },
      {
        heading: "Menos pressa, mais segurança",
        body: [
          "Resultados naturais dependem de tempo, técnica e acompanhamento. Não é sobre preencher tudo; é sobre escolher o que realmente melhora.",
          "Conversar com a equipe antes ajuda a entender expectativas e evitar exageros.",
        ],
      },
    ],
  },
  {
    slug: "implantes-dentarios-voltar-a-sorrir",
    title: "Implantes dentários: o caminho para voltar a sorrir e mastigar",
    description:
      "Perder dentes afeta estética, função e confiança. Veja como o planejamento digital muda a experiência.",
    category: "Implantes",
    dateLabel: "26 jun. 2026",
    readTime: "4 min de leitura",
    image: ctaImg,
    imageAlt: "Dra. Cássia na Clínica L'ECLER",
    intro:
      "Implantes dentários não devolvem apenas dentes. Eles podem devolver segurança para mastigar, conversar, sorrir em fotos e viver com mais tranquilidade.",
    sections: [
      {
        heading: "Por que a perda dental deve ser avaliada cedo",
        body: [
          "A ausência de dentes pode alterar mastigação, fala, suporte facial e saúde dos dentes vizinhos. Quanto antes o caso é avaliado, mais opções podem estar disponíveis.",
          "Cada situação exige leitura de osso, gengiva, mordida, estética e saúde geral.",
        ],
      },
      {
        heading: "Planejamento digital aumenta previsibilidade",
        body: [
          "Exames de imagem e recursos digitais ajudam a planejar posição, angulação e sequência do tratamento com mais precisão.",
          "Isso também permite explicar melhor o processo ao paciente, reduzindo insegurança antes da cirurgia.",
        ],
      },
      {
        heading: "O primeiro passo é entender seu caso",
        body: [
          "Nem todo paciente precisa do mesmo tipo de implante, prótese ou cronograma. A avaliação individual mostra o caminho mais seguro.",
          "Se você evita sorrir ou mastigar por causa de dentes ausentes, vale conversar com a equipe.",
        ],
      },
    ],
  },
  {
    slug: "gerenciamento-dermico-pele-bonita",
    title: "Gerenciamento dérmico: pele bonita é plano contínuo",
    description:
      "Entenda por que cuidar da pele em etapas pode entregar mais viço, textura e prevenção do que procedimentos isolados.",
    category: "Pele",
    dateLabel: "26 jun. 2026",
    readTime: "3 min de leitura",
    image: consultationImg,
    imageAlt: "Atendimento personalizado na Clínica L'ECLER",
    intro:
      "Pele bonita raramente nasce de um único procedimento. Ela costuma ser resultado de estratégia, constância e escolhas certas para cada fase.",
    sections: [
      {
        heading: "Gerenciar é diferente de apagar um problema",
        body: [
          "Manchas, textura, poros, acne, flacidez e perda de viço podem ter causas diferentes. Por isso, o protocolo precisa respeitar pele, rotina e objetivos.",
          "O gerenciamento dérmico organiza etapas: tratar, fortalecer, manter e prevenir.",
        ],
      },
      {
        heading: "Tecnologias e ativos trabalham melhor com plano",
        body: [
          "Peelings, laser, bioestimuladores, microagulhamento e skincare profissional podem ser combinados de forma inteligente.",
          "A escolha depende do tipo de pele, época do ano, histórico de sensibilidade e resultado esperado.",
        ],
      },
      {
        heading: "A consulta define prioridade",
        body: [
          "Antes de investir em vários produtos ou procedimentos soltos, a avaliação mostra o que deve ser feito primeiro.",
          "Esse é o caminho para resultados mais consistentes e uma pele que melhora sem perder naturalidade.",
        ],
      },
    ],
  },
];

export const featuredBlogPost = blogPosts[0];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
