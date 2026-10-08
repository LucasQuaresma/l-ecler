// Dental articles (editorially reviewed drafts). Body strings support '- ' list items, '### ' subheadings, **bold** and [links](/path).
import type { BlogPost } from "@/lib/blog";
import treatmentHeroAirflowImg from "@/assets/treatment-hero-airflow-prevencao-suica.jpg";
import treatmentHeroFacetasImg from "@/assets/treatment-hero-facetas-e-lentes-de-contato.jpg";
import treatmentHeroEndodontiaImg from "@/assets/treatment-hero-endodontia.jpg";
import consultationImg from "@/assets/home-consultation.jpg";
import treatmentHeroOdontoEsteticaImg from "@/assets/treatment-hero-odontologia-estetica.jpg";
import invisalignHeroImg from "@/assets/invisalign-aligners-hero.webp";
import treatmentHeroProtesesImg from "@/assets/treatment-hero-proteses.jpg";
import clinicaRecepcao from "@/assets/clinica-recepcao.jpg.asset.json";

export const dentalPosts: BlogPost[] = [
  {
    "image": treatmentHeroAirflowImg,
    "slug": "limpeza-dentaria-airflow-braganca-paulista",
    "title": "Limpeza dentária com Airflow: quando ela é indicada e o que muda na prevenção",
    "seoTitle": "Limpeza dentária com Airflow em Bragança Paulista | L'Ecler",
    "description": "Entenda o que é a limpeza dentária com Airflow, como ela atua no biofilme e nas manchas superficiais e por que a frequência deve ser individualizada.",
    "category": "Prevenção",
    "dateLabel": "8 out. 2026",
    "datePublished": "2026-10-08",
    "readTime": "4 min de leitura",
    "imageAlt": "Equipamento Airflow para profilaxia odontológica",
    "intro": "A limpeza dentária profissional não serve apenas para deixar os dentes com aparência mais polida. Ela faz parte do controle do biofilme — a película bacteriana que se forma sobre dentes, gengiva, restaurações, próteses e aparelhos — e ajuda o dentista a acompanhar a saúde da boca ao longo do tempo.",
    "sections": [
      {
        "heading": "O que é biofilme e por que ele importa?",
        "body": [
          "O biofilme dental é uma camada aderente formada por microrganismos. Quando não é removido adequadamente, pode contribuir para cárie e inflamação gengival. Com o tempo, parte dessa placa pode mineralizar e virar cálculo, também chamado de tártaro.",
          "Escova e fio dental são indispensáveis no dia a dia, mas o cálculo já endurecido exige remoção profissional. Por isso, a consulta preventiva combina avaliação, orientação de higiene e, quando indicada, limpeza no consultório."
        ]
      },
      {
        "heading": "Airflow, raspagem e polimento são a mesma coisa?",
        "body": [
          "Não. São recursos diferentes e podem ser combinados conforme a necessidade.",
          "- **Airflow:** ajuda a remover biofilme e pigmentações superficiais com jato controlado.",
          "- **Raspagem:** é utilizada para remover cálculo aderido aos dentes, inclusive em regiões próximas ou abaixo da gengiva, quando necessário.",
          "- **Polimento:** pode ser empregado para finalizar superfícies específicas após a limpeza.",
          "O Airflow não substitui automaticamente a raspagem. Se houver cálculo, bolsas periodontais ou outro sinal de doença gengival, o dentista pode indicar instrumentos e etapas adicionais. A escolha correta vem antes da tecnologia."
        ]
      },
      {
        "heading": "Limpeza com Airflow clareia os dentes?",
        "body": [
          "Airflow e clareamento dental têm objetivos diferentes. A limpeza pode remover manchas externas associadas, por exemplo, a café, chá, vinho, tabaco ou acúmulo de pigmento. Isso pode devolver um aspecto mais limpo à superfície.",
          "Já o [clareamento dental](/servicos/clareamento-dental) atua na cor do dente por meio de agentes clareadores, após avaliação profissional. Se a queixa principal for cor, o dentista precisa diferenciar pigmentação superficial, alteração interna e restaurações que não mudam de cor com o clareamento."
        ]
      },
      {
        "heading": "Para quem o Airflow pode ser útil?",
        "body": [
          "A profilaxia com Airflow pode fazer parte do cuidado de diferentes perfis, como pessoas com pigmentações superficiais, dificuldade de higienização em certas áreas ou maior retenção de biofilme. Também pode auxiliar na manutenção de quem usa alinhadores, aparelhos, facetas, próteses ou implantes, desde que o protocolo e os materiais sejam adequados ao caso.",
          "Essas condições não tornam o procedimento obrigatório. Sensibilidade, inflamação, presença de cálculo e características das restaurações precisam ser avaliadas. A [odontologia preventiva e integrativa](/servicos/odontologia-preventiva-integrativa) organiza esse acompanhamento de forma individual."
        ]
      },
      {
        "heading": "Como costuma ser uma sessão de prevenção?",
        "body": [
          "Antes da limpeza, o profissional conversa sobre sintomas, hábitos, saúde geral e rotina de higiene. Em seguida, examina dentes, gengiva, restaurações e áreas de maior acúmulo. Sondagem gengival e radiografias podem ser indicadas quando houver motivo clínico.",
          "Com esse mapa, o dentista seleciona os recursos necessários. A sessão pode incluir evidenciação de biofilme, orientação prática, Airflow, raspagem e polimento. Ao final, o paciente recebe recomendações compatíveis com sua realidade — e não apenas uma lista genérica de produtos."
        ]
      },
      {
        "heading": "De quanto em quanto tempo devo fazer limpeza?",
        "body": [
          "Não existe um intervalo único que sirva para todos. O retorno depende de risco de cárie, condição gengival, qualidade da higiene, tabagismo, alimentação, uso de aparelho, presença de implantes, doenças sistêmicas e histórico de tratamento periodontal.",
          "Algumas pessoas precisam de acompanhamento mais próximo; outras podem ter intervalos maiores. O calendário deve ser definido depois do exame e revisto quando a condição da boca mudar."
        ]
      },
      {
        "heading": "O que a prevenção consegue identificar cedo?",
        "body": [
          "Uma consulta preventiva pode revelar sangramento gengival, recessões, lesões de cárie iniciais, desgaste, trincas, infiltrações e alterações na mucosa. Identificar mudanças antes de aparecer dor costuma ampliar as possibilidades de cuidado conservador.",
          "Por isso, limpeza profissional e check-up caminham juntos. O foco não é apenas remover manchas, mas entender por que o acúmulo acontece e como reduzir o risco de novos problemas."
        ]
      },
      {
        "heading": "Perguntas frequentes",
        "body": [
          "### Airflow substitui o fio dental?",
          "Não. O procedimento profissional não substitui a higiene diária. Escovação e limpeza entre os dentes continuam sendo fundamentais.",
          "### O procedimento remove tártaro?",
          "O Airflow é voltado principalmente ao biofilme e a pigmentações. Quando existe cálculo endurecido, o dentista pode precisar realizar raspagem.",
          "### Posso fazer Airflow se uso Invisalign ou tenho implantes?",
          "Pode haver indicação para manutenção, mas o profissional deve avaliar o dispositivo, os tecidos ao redor e o protocolo adequado. Veja também a página de [Airflow e Prevenção Suíça](/servicos/airflow-prevencao-suica).",
          "### A limpeza deixa os dentes sensíveis?",
          "Algumas pessoas podem perceber sensibilidade temporária, especialmente se já houver exposição de raiz ou inflamação. Informe qualquer desconforto durante a avaliação.",
          "### Preciso esperar sentir dor para marcar?",
          "Não. Muitos problemas bucais começam sem dor. A prevenção existe justamente para acompanhar mudanças antes que elas se tornem mais complexas."
        ]
      }
    ],
    "ctaTitle": "Prevenção começa com um plano compatível com você",
    "ctaText": "Se você percebe sangramento, acúmulo de pigmento ou está há algum tempo sem avaliação, marque uma consulta na Clínica L'Ecler. A equipe pode examinar sua saúde bucal e indicar se Airflow, raspagem ou outra abordagem faz sentido para o seu caso.",
    "ctaButtonLabel": "Solicitar avaliação",
    "sources": [
      {
        "label": "NIDCR — Periodontal (Gum) Disease",
        "url": "https://www.nidcr.nih.gov/health-info/gum-disease"
      }
    ],
    "relatedServices": [
      "airflow-prevencao-suica",
      "odontologia-preventiva-integrativa"
    ],
    "relatedPosts": [
      "clareamento-dental-braganca-paulista",
      "primeira-consulta-odontologica-braganca-paulista"
    ],
    "introExtra": [
      "Na Clínica L'Ecler, em Bragança Paulista, o Airflow pode ser usado dentro de uma estratégia de prevenção. A tecnologia projeta uma combinação controlada de ar, água e pó específico para remover biofilme e algumas pigmentações superficiais. A indicação, porém, depende do exame: cada pessoa acumula biofilme de um jeito e pode precisar de abordagens complementares."
    ]
  },
  {
    "image": treatmentHeroFacetasImg,
    "slug": "clareamento-dental-braganca-paulista",
    "title": "Clareamento dental: opções, cuidados e o que avaliar antes de começar",
    "seoTitle": "Clareamento dental em Bragança Paulista: guia seguro | L'Ecler",
    "description": "Conheça as opções de clareamento dental, os limites do tratamento e os cuidados para reduzir sensibilidade e alinhar expectativas.",
    "category": "Estética dental",
    "dateLabel": "8 out. 2026",
    "datePublished": "2026-10-08",
    "readTime": "5 min de leitura",
    "imageAlt": "Seleção de cor dental durante avaliação estética",
    "intro": "O clareamento dental é um dos procedimentos estéticos mais procurados por quem deseja suavizar o aspecto amarelado ou escurecido dos dentes. Mas o resultado não depende apenas do produto usado. A origem da alteração de cor, a presença de restaurações, a saúde da gengiva e a sensibilidade prévia mudam o planejamento.",
    "sections": [
      {
        "heading": "Por que os dentes mudam de cor?",
        "body": [
          "Pigmentos de café, chá, vinho, tabaco e outros hábitos podem aderir à superfície. O envelhecimento natural também modifica a aparência dos dentes. Além disso, traumas, alterações durante a formação dental e alguns tratamentos podem causar escurecimentos localizados ou mais profundos.",
          "Uma [limpeza dentária com Airflow](/blog/limpeza-dentaria-airflow-braganca-paulista) pode remover biofilme e parte das manchas externas, mas não altera a cor interna como o clareamento. Quando apenas um dente está mais escuro, o diagnóstico merece atenção especial: a conduta pode ser diferente daquela usada para todo o sorriso."
        ]
      },
      {
        "heading": "Quais são as opções de clareamento profissional?",
        "body": [
          "As abordagens abaixo são descritas de forma geral. A indicação e a disponibilidade de cada uma dependem da avaliação individual.",
          "### Clareamento realizado no consultório",
          "O agente clareador é aplicado pelo profissional, com proteção dos tecidos moles e controle clínico. A concentração, o tempo de contato e o número de sessões variam conforme o produto e a resposta individual.",
          "### Clareamento supervisionado para uso em casa",
          "O dentista confecciona ou indica um sistema apropriado e orienta como usar o produto fora do consultório. O acompanhamento permite ajustar o protocolo se houver sensibilidade ou resposta diferente do esperado.",
          "### Técnica combinada",
          "Em alguns casos, o plano reúne etapas no consultório e em casa. Combinar não significa necessariamente obter um resultado melhor para todos; a escolha depende do diagnóstico, da rotina e das prioridades do paciente."
        ]
      },
      {
        "heading": "O clareamento funciona em restaurações, coroas e facetas?",
        "body": [
          "Os agentes clareadores atuam nos dentes naturais. Restaurações de resina, coroas, facetas e lentes de contato dental não clareiam da mesma maneira. Por isso, quem tem materiais visíveis na região do sorriso precisa discutir a diferença de cor antes de começar.",
          "Às vezes, o dentista pode planejar primeiro o clareamento e só depois reavaliar restaurações antigas. Essa sequência evita trocar materiais sem saber qual será a cor final alcançada pelos dentes naturais. Conheça as possibilidades da [odontologia estética](/servicos/odontologia-estetica) e a página de [clareamento dental](/servicos/clareamento-dental)."
        ]
      },
      {
        "heading": "Sensibilidade é inevitável?",
        "body": [
          "Sensibilidade temporária e irritação gengival estão entre os efeitos adversos mais comuns. Isso não significa que toda pessoa terá o mesmo desconforto ou que seja adequado insistir no produto diante de sintomas importantes. Sensibilidade também não é sinal de que o clareamento está funcionando melhor.",
          "Na avaliação, vale informar se você já sente dor com frio, possui retração gengival, trincas, cáries ou fez clareamentos anteriores. O profissional pode ajustar concentração, frequência e tempo de uso, além de investigar causas que precisam ser tratadas primeiro.",
          "Receitas caseiras abrasivas ou produtos usados sem orientação podem irritar a gengiva e desgastar a superfície dental. “Natural” não é sinônimo de seguro para esmalte e mucosa."
        ]
      },
      {
        "heading": "O que acontece antes de clarear?",
        "body": [
          "O dentista examina dentes e gengiva, registra a cor inicial e verifica restaurações, manchas, trincas e áreas sensíveis. Limpeza profissional, tratamento de cárie ou controle gengival podem ser necessários antes do procedimento.",
          "Também é o momento de alinhar expectativas. A resposta varia entre pessoas e entre dentes do mesmo paciente. Não existe uma tonalidade universalmente ideal, e a promessa de “branco máximo” ignora limites biológicos e estéticos."
        ]
      },
      {
        "heading": "Como cuidar do sorriso durante e depois?",
        "body": [
          "Siga o protocolo entregue pelo dentista e não aumente dose, frequência ou tempo por conta própria. Se houver sensibilidade intensa, ferida na gengiva ou dor localizada, interrompa o uso e procure orientação da equipe antes de retomar.",
          "Manter higiene adequada e consultas preventivas ajuda a preservar a saúde e a aparência do sorriso. Pigmentos podem voltar a se acumular com o tempo, mas isso não justifica evitar todos os alimentos coloridos de forma rígida. O acompanhamento define se e quando algum retoque é apropriado."
        ]
      },
      {
        "heading": "Perguntas frequentes",
        "body": [
          "### Clareamento enfraquece os dentes?",
          "Produtos odontológicos devem ser usados com indicação e controle. A avaliação reduz riscos e evita aplicar clareador sobre problemas não diagnosticados. O uso inadequado de produtos, especialmente sem orientação, não deve ser tratado como equivalente a um protocolo profissional.",
          "### Quem tem dente sensível pode clarear?",
          "Pode haver alternativas, mas a causa e a intensidade da sensibilidade precisam ser avaliadas. O protocolo pode exigir ajustes ou tratamento prévio.",
          "### Limpeza e clareamento são a mesma coisa?",
          "Não. A limpeza remove biofilme, cálculo e pigmentos superficiais; o clareamento atua na cor dos dentes naturais.",
          "### Quanto tempo dura o resultado?",
          "Não há prazo igual para todos. Hábitos, dieta, higiene, tabagismo e características individuais influenciam. O retoque deve ser decidido com o dentista.",
          "### Posso clarear antes de colocar facetas?",
          "Em alguns planejamentos, sim, porque a cor do dente pode influenciar a escolha do material restaurador. A sequência deve ser definida caso a caso; veja também [facetas e lentes de contato](/servicos/facetas-e-lentes-de-contato) e o comparativo [resina ou lentes de contato dental](/blog/resina-ou-lentes-de-contato-dental)."
        ]
      }
    ],
    "ctaTitle": "Um clareamento bem planejado respeita o seu sorriso",
    "ctaText": "Se você deseja mudar a cor dos dentes sem perder naturalidade, agende uma avaliação na Clínica L'Ecler. O exame mostra qual técnica é compatível com sua saúde bucal e quais resultados são realistas.",
    "ctaButtonLabel": "Solicitar avaliação",
    "sources": [
      {
        "label": "American Dental Association — Whitening",
        "url": "https://www.ada.org/resources/ada-library/oral-health-topics/whitening"
      }
    ],
    "relatedServices": [
      "clareamento-dental",
      "odontologia-estetica"
    ],
    "relatedPosts": [
      "limpeza-dentaria-airflow-braganca-paulista",
      "resina-ou-lentes-de-contato-dental"
    ],
    "introExtra": [
      "Na Clínica L'Ecler, em Bragança Paulista, a avaliação vem antes da escolha da técnica. Existem diferentes abordagens de clareamento profissional, e a indicação — assim como a disponibilidade de cada modalidade para o seu caso — depende do exame. Esse cuidado também ajuda a separar o que é mancha superficial do que é alteração interna da estrutura dental."
    ]
  },
  {
    "image": treatmentHeroEndodontiaImg,
    "slug": "tratamento-de-canal-braganca-paulista",
    "title": "Tratamento de canal: por que ele é feito e o que acontece em cada etapa",
    "seoTitle": "Tratamento de canal em Bragança Paulista: etapas | L'Ecler",
    "description": "Saiba quando o tratamento de canal pode ser indicado, como é feito e por que a restauração final é importante para preservar o dente.",
    "category": "Endodontia",
    "dateLabel": "8 out. 2026",
    "datePublished": "2026-10-08",
    "readTime": "5 min de leitura",
    "imageAlt": "Atendimento odontológico em consultório",
    "intro": "O tratamento de canal, ou tratamento endodôntico, é indicado quando a polpa — tecido localizado no interior do dente — apresenta inflamação ou infecção que não pode ser resolvida apenas com uma restauração externa. O objetivo é remover o tecido comprometido, limpar e selar o sistema interno do dente para preservá-lo sempre que isso for clinicamente possível.",
    "sections": [
      {
        "heading": "O que pode levar um dente a precisar de canal?",
        "body": [
          "Cárie profunda, trinca, fratura, trauma e procedimentos anteriores podem atingir a polpa. Em algumas situações, a dor aparece de forma intensa; em outras, o processo evolui com poucos sintomas e é percebido em exame de rotina ou radiografia.",
          "Por isso, um dente escurecido, quebrado ou com sensibilidade persistente merece avaliação mesmo quando a dor parece tolerável."
        ]
      },
      {
        "heading": "Quais sinais pedem atenção?",
        "body": [
          "Dor espontânea, incômodo prolongado ao quente ou frio, dor ao mastigar, inchaço e mudança de cor podem estar associados a alterações pulpares ou ao redor da raiz. Esses sinais também podem ter outras causas, como problema gengival, trinca ou sobrecarga na mordida.",
          "Dificuldade para engolir ou respirar, inchaço que aumenta rapidamente ou febre com inchaço exigem atendimento de urgência imediato em um pronto-socorro — não aguarde agendamento odontológico. O artigo não substitui avaliação presencial nem serve para escolher medicamento."
        ]
      },
      {
        "heading": "Como o diagnóstico é realizado?",
        "body": [
          "O dentista reúne a história da dor, examina o dente e os tecidos próximos, avalia a mordida e pode realizar testes de sensibilidade e percussão. Radiografias ajudam a observar raízes, osso e extensão provável da alteração.",
          "Nem todo dente dolorido precisa de canal, e a ausência de dor não garante que a polpa esteja saudável. O conjunto dos achados orienta a decisão entre acompanhar, restaurar, tratar endodonticamente ou considerar outra conduta."
        ]
      },
      {
        "heading": "Quais são as etapas do tratamento de canal?",
        "body": [
          "### Acesso ao interior do dente",
          "Depois da anestesia e do isolamento do campo, o profissional cria uma abertura para alcançar a polpa. O isolamento ajuda a proteger a área e controlar a contaminação.",
          "### Limpeza e preparo dos canais",
          "O tecido inflamado ou infectado é removido. Os canais das raízes são preparados e desinfetados com instrumentos e soluções apropriadas. A anatomia varia bastante, por isso recursos de magnificação e instrumentação mecanizada podem auxiliar o trabalho clínico quando disponíveis e indicados.",
          "### Preenchimento e selamento",
          "Após o preparo, os canais são preenchidos e selados com materiais próprios. Dependendo da situação, o tratamento pode envolver mais de uma consulta ou medicação temporária dentro do dente; não há número fixo de sessões válido para todos.",
          "### Restauração do dente",
          "Concluir o canal não encerra necessariamente o cuidado. O dente precisa de restauração adequada para recuperar vedação, forma e função. Conforme a perda de estrutura, pode ser indicada restauração direta, peça parcial ou coroa. A [odontologia restauradora e estética](/servicos/odontologia-estetica) participa dessa etapa."
        ]
      },
      {
        "heading": "Tratamento de canal dói?",
        "body": [
          "O procedimento é realizado com anestesia e controle clínico. A experiência varia conforme a inflamação, a anatomia, a complexidade e a resposta individual. Pode existir sensibilidade após a sessão, sobretudo ao mastigar, mas dor intensa, inchaço crescente ou sintomas que preocupem devem ser comunicados à equipe.",
          "Promessas de procedimento totalmente indolor não são responsáveis. O que se pode oferecer é planejamento, técnica, escuta do paciente e manejo individualizado."
        ]
      },
      {
        "heading": "É melhor tratar o canal ou extrair?",
        "body": [
          "Quando o dente pode ser restaurado com prognóstico aceitável, preservar a estrutura natural costuma ser uma possibilidade importante. A extração pode ser necessária se houver fratura sem possibilidade de reparo, perda estrutural extensa ou condições periodontais desfavoráveis, entre outros fatores.",
          "A comparação deve incluir não apenas o procedimento imediato, mas também a função futura e a necessidade de repor o dente se ele for removido. Entenda também quando a [extração dentária](/blog/extracao-dentaria-braganca-paulista) pode ser considerada. Consulte a página de [Endodontia da Clínica L'Ecler](/servicos/endodontia) para conhecer o serviço."
        ]
      },
      {
        "heading": "Como cuidar depois?",
        "body": [
          "Siga as orientações entregues para alimentação, higiene e retorno. Evite usar o dente de forma além do recomendado enquanto a restauração definitiva não estiver concluída. Não se automedique nem interrompa tratamento prescrito sem conversar com o profissional responsável.",
          "O acompanhamento permite verificar cicatrização e integridade da restauração. Tratar a causa que favoreceu o problema — como cárie, trinca ou sobrecarga — também faz parte da prevenção de novas intercorrências."
        ]
      },
      {
        "heading": "Perguntas frequentes",
        "body": [
          "### O canal “mata” o dente?",
          "O tratamento remove a polpa comprometida, mas o dente permanece na boca e pode continuar participando da mastigação após a restauração e o acompanhamento adequados.",
          "### Antibiótico substitui o canal?",
          "Não de forma geral. Antibióticos têm indicações específicas e não removem o tecido infectado do interior do sistema de canais. Somente um profissional pode avaliar se são necessários.",
          "### Todo dente tratado precisa de coroa?",
          "Não. A restauração depende do dente envolvido, da quantidade de estrutura remanescente, da mordida e de outros fatores.",
          "### Um canal pode precisar de retratamento?",
          "Pode. Persistência ou retorno da infecção, nova infiltração ou anatomia complexa podem exigir nova avaliação e outra abordagem.",
          "### Posso esperar a dor passar?",
          "A dor pode diminuir sem que a causa tenha sido resolvida. Adiar a avaliação pode limitar opções de preservação."
        ]
      }
    ],
    "ctaTitle": "Dor de dente precisa de diagnóstico, não de adivinhação",
    "ctaText": "Se você sente dor, percebeu mudança de cor, fratura ou inchaço, marque uma avaliação. A equipe da Clínica L'Ecler pode investigar a origem do problema e explicar as possibilidades de tratamento. Em caso de dificuldade para respirar ou engolir, procure imediatamente um pronto-socorro.",
    "ctaButtonLabel": "Solicitar avaliação",
    "sources": [
      {
        "label": "American Association of Endodontists — What is a Root Canal?",
        "url": "https://www.aae.org/patients/root-canal-treatment/what-is-a-root-canal/"
      },
      {
        "label": "NHS — Dental abscess (sinais de emergência: dificuldade para respirar, falar ou engolir e inchaço grave)",
        "url": "https://www.nhs.uk/conditions/dental-abscess/"
      }
    ],
    "relatedServices": [
      "endodontia"
    ],
    "relatedPosts": [
      "extracao-dentaria-braganca-paulista",
      "primeira-consulta-odontologica-braganca-paulista"
    ],
    "introExtra": [
      "Na Clínica L'Ecler, em Bragança Paulista, a decisão depende de exame, testes e, quando indicadas, imagens. Sintomas ajudam a orientar a investigação, mas não substituem o diagnóstico."
    ]
  },
  {
    "image": consultationImg,
    "slug": "extracao-dentaria-braganca-paulista",
    "title": "Extração dentária: quando ela pode ser necessária e como se preparar",
    "seoTitle": "Extração dentária em Bragança Paulista: guia | L'Ecler",
    "description": "Entenda quando uma extração dentária pode ser indicada, como é o planejamento e quais cuidados gerais ajudam na recuperação.",
    "category": "Cirurgia oral",
    "dateLabel": "8 out. 2026",
    "datePublished": "2026-10-08",
    "readTime": "5 min de leitura",
    "imageAlt": "Consulta individualizada na Clínica L'ECLER",
    "intro": "A extração dentária é a remoção de um dente do alvéolo, a cavidade óssea onde ele está inserido. Ela pode ser indicada por doença, trauma, falta de espaço ou impossibilidade de restaurar a estrutura com segurança. Ainda assim, “arrancar” não deve ser a primeira conclusão diante de dor ou fratura: o exame precisa avaliar se há alternativas de preservação.",
    "sections": [
      {
        "heading": "Em quais situações a extração pode ser considerada?",
        "body": [
          "Entre os motivos possíveis estão cárie extensa, fratura sem possibilidade restauradora, perda de suporte periodontal, infecção que não pode ser controlada por tratamento conservador, indicação ortodôntica e falta de espaço para determinados dentes.",
          "No caso dos sisos, presença na boca não significa remoção automática. Posição, sintomas, higiene, relação com dentes vizinhos e achados de imagem entram na decisão. A indicação deve ser individual."
        ]
      },
      {
        "heading": "O que o dentista avalia antes do procedimento?",
        "body": [
          "Além do dente, o profissional verifica gengiva, osso, raízes, estruturas próximas e abertura da boca. Radiografia ou outro exame de imagem pode ser solicitado conforme a complexidade.",
          "Informe doenças, alergias, gestação, cirurgias anteriores e todos os medicamentos ou suplementos em uso. Anticoagulantes, medicamentos para os ossos e outras terapias podem mudar o planejamento, mas não devem ser suspensos por conta própria. Quando necessário, o dentista conversa com o médico responsável."
        ]
      },
      {
        "heading": "Extração simples e cirúrgica: qual é a diferença?",
        "body": [
          "Em uma extração simples, o dente está acessível na boca e pode ser removido com instrumentos apropriados após anestesia. Em uma extração cirúrgica, pode ser necessário acessar o dente por uma incisão, remover pequena quantidade de osso ou dividir o dente em partes. A escolha depende da posição, forma das raízes e condição local.",
          "Os termos descrevem a técnica, não a experiência exata de cada paciente. O profissional explica o plano, as alternativas e os riscos relevantes antes de obter o consentimento."
        ]
      },
      {
        "heading": "O que acontece logo após remover o dente?",
        "body": [
          "Forma-se um coágulo no local. Ele é importante para o início da cicatrização, por isso as orientações costumam buscar protegê-lo. Um pequeno sangramento pode ocorrer no começo; a equipe informa como usar a gaze e quando entrar em contato.",
          "As recomendações variam conforme a cirurgia e a saúde do paciente. Em geral, é importante evitar manipular o local, fumar, fazer bochechos vigorosos ou usar canudo no período orientado. Alimentação, higiene e retorno devem seguir a instrução específica recebida.",
          "Este texto não prescreve analgésicos, antibióticos ou anti-inflamatórios. Medicamentos só devem ser usados conforme avaliação profissional, considerando histórico, alergias e possíveis interações."
        ]
      },
      {
        "heading": "Quais sinais merecem contato com o dentista?",
        "body": [
          "Dor que piora depois de uma melhora inicial, sangramento que não cede conforme a orientação, aumento importante do inchaço, febre, secreção, mau cheiro persistente ou dificuldade para engolir e respirar precisam de contato com o dentista responsável pelo procedimento. Dificuldade para engolir ou respirar, ou inchaço que avança rapidamente, exige atendimento de urgência imediato em um pronto-socorro.",
          "Não compare sua recuperação apenas com relatos da internet. Extensão do procedimento, região, condição prévia e resposta do organismo mudam o pós-operatório."
        ]
      },
      {
        "heading": "Preciso repor todo dente extraído?",
        "body": [
          "Depende do dente, da mordida e do plano global. Quando a ausência compromete função, estabilidade ou estética, podem ser discutidos implante, prótese fixa ou prótese removível. A decisão pode ser planejada antes da extração, especialmente se houver interesse em preservar volume ósseo para uma futura reabilitação.",
          "Conheça as páginas de [implantes dentários](/servicos/implantes) e [próteses dentárias](/servicos/proteses). Elas ajudam a visualizar caminhos possíveis, mas apenas o exame define a indicação. O artigo [implante, prótese sobre implante ou dentadura](/blog/implante-protese-sobre-implante-ou-dentadura) compara essas alternativas."
        ]
      },
      {
        "heading": "É possível evitar uma extração?",
        "body": [
          "Em alguns casos, restauração, coroa, tratamento periodontal ou [tratamento de canal](/blog/tratamento-de-canal-braganca-paulista) podem preservar o dente. Em outros, insistir em uma estrutura sem prognóstico pode prolongar infecção, dor ou perda óssea.",
          "Uma segunda opinião pode ser útil quando há dúvida, desde que não adie um quadro que esteja piorando. Leve exames recentes e pergunte quais são as alternativas, os benefícios, os riscos e o plano depois da remoção."
        ]
      },
      {
        "heading": "Perguntas frequentes",
        "body": [
          "### Extração dentária dói?",
          "O procedimento é realizado com anestesia. A resposta varia, e você deve avisar se sentir dor durante o atendimento. Desconforto após a extração é possível e deve ser acompanhado conforme orientação.",
          "### Posso trabalhar no mesmo dia?",
          "Não existe resposta única. Complexidade, tipo de atividade e resposta individual interferem. Planeje o período de recuperação com o dentista.",
          "### Preciso tomar antibiótico?",
          "Nem toda extração exige antibiótico. A indicação depende de fatores clínicos e não deve ser feita por conta própria.",
          "### Quando posso escovar os dentes?",
          "Os demais dentes geralmente continuam sendo higienizados, mas a área operada requer cuidado específico. Siga a instrução fornecida para o seu procedimento.",
          "### Todo siso precisa ser extraído?",
          "Não. A presença do siso não significa remoção automática. Posição, sintomas, higiene, relação com dentes vizinhos e exames de imagem orientam a decisão, e alguns casos podem apenas ser acompanhados. A avaliação também indica quando o caso precisa de encaminhamento a outro profissional."
        ]
      }
    ],
    "ctaTitle": "A decisão começa por uma avaliação completa",
    "ctaText": "Se um dente está quebrado, dolorido ou com indicação prévia de remoção, marque uma consulta para revisar o diagnóstico e as opções. A Clínica L'Ecler fica na Rua José Domingues, 577, Centro, em Bragança Paulista. Em caso de dificuldade para respirar ou engolir, procure imediatamente um pronto-socorro.",
    "ctaButtonLabel": "Solicitar avaliação",
    "sources": [
      {
        "label": "American Dental Association — Extractions",
        "url": "https://www.mouthhealthy.org/all-topics-a-z/extractions"
      },
      {
        "label": "NHS — Dental abscess (sinais de emergência: dificuldade para respirar, falar ou engolir e inchaço grave)",
        "url": "https://www.nhs.uk/conditions/dental-abscess/"
      }
    ],
    "relatedServices": [
      "extracao-dentaria",
      "implantes"
    ],
    "relatedPosts": [
      "tratamento-de-canal-braganca-paulista",
      "implante-protese-sobre-implante-ou-dentadura"
    ],
    "introExtra": [
      "Na Clínica L'Ecler, em Bragança Paulista, o planejamento começa pela história de saúde, pelo exame da boca e por imagens quando necessárias. Esses dados ajudam a definir a técnica, os cuidados e o que fazer com o espaço após a remoção. Veja também a página de [extração dentária](/servicos/extracao-dentaria)."
    ]
  },
  {
    "image": treatmentHeroOdontoEsteticaImg,
    "slug": "resina-ou-lentes-de-contato-dental",
    "title": "Resina ou lentes de contato dental: como comparar antes de decidir",
    "seoTitle": "Resina ou lentes de contato dental: diferenças | L'Ecler",
    "description": "Compare facetas de resina e lentes de contato dental em indicação, manutenção, reparo, desgaste e investimento antes de escolher.",
    "category": "Estética dental",
    "dateLabel": "8 out. 2026",
    "datePublished": "2026-10-08",
    "readTime": "5 min de leitura",
    "imageAlt": "Sorriso natural em destaque",
    "intro": "Quem pesquisa por facetas costuma encontrar duas expressões: faceta de resina e lente de contato dental, geralmente feita em cerâmica. As duas podem modificar forma, proporção e cor visível dos dentes, mas não são versões “barata” e “premium” da mesma coisa. Cada material tem indicações, etapas, manutenção e limitações próprias.",
    "sections": [
      {
        "heading": "O que é uma faceta?",
        "body": [
          "Faceta é uma cobertura aderida à face visível do dente. Ela pode ser confeccionada diretamente em resina composta ou indiretamente em cerâmica. O termo “lente de contato dental” costuma ser usado para peças cerâmicas finas, mas a espessura e a necessidade de preparo variam conforme o caso.",
          "Facetas não são iguais a coroas. A coroa envolve uma porção maior do dente e costuma ser indicada quando é preciso recuperar mais estrutura. A decisão entre restauração direta, faceta e coroa depende do quanto o dente está preservado."
        ]
      },
      {
        "heading": "Como funciona a faceta de resina?",
        "body": [
          "Na técnica direta, o dentista aplica e modela camadas de resina sobre o dente, ajustando contorno, textura e cor. Ela pode permitir execução clínica mais direta e, em muitos casos, reparos localizados quando há lasca ou desgaste.",
          "Por outro lado, a resina pode sofrer alteração de brilho, pigmentação e desgaste ao longo do tempo. A frequência de polimentos e reparos depende de alimentação, higiene, mordida, bruxismo e extensão da restauração.",
          "Na Clínica L'Ecler, as [facetas de resina](/servicos/facetas-de-resina) fazem parte das opções avaliadas. A indicação não deve ser presumida apenas porque o paciente prefere evitar cerâmica."
        ]
      },
      {
        "heading": "Como funcionam as facetas ou lentes cerâmicas?",
        "body": [
          "As peças são planejadas e produzidas fora da boca, depois testadas e cimentadas. A cerâmica costuma oferecer estabilidade de cor e características ópticas que favorecem naturalidade. O processo pode envolver fotografias, escaneamento, simulação e prova estética.",
          "“Lente” não significa ausência garantida de desgaste. Algumas situações permitem abordagem muito conservadora; outras exigem preparo para criar espaço, corrigir posição ou garantir adaptação. Também não se deve tratar o procedimento como reversível: a American Dental Association orienta que facetas são um tratamento não reversível.",
          "Conheça a página de [facetas e lentes de contato](/servicos/facetas-e-lentes-de-contato) da Clínica L'Ecler."
        ]
      },
      {
        "heading": "Quais critérios ajudam a comparar?",
        "body": [
          "### Conservação da estrutura dental",
          "O objetivo deve ser preservar tecido saudável. Se o problema puder ser resolvido com clareamento, ortodontia ou restauração pequena, cobrir toda a face do dente pode não ser a primeira opção. A quantidade de preparo precisa ser explicada antes do procedimento.",
          "### Cor e translucidez",
          "Resina e cerâmica oferecem diferentes possibilidades de cor e textura. Dentes muito escurecidos, substratos desiguais e expectativa de alta translucidez exigem planejamento para evitar aparência opaca ou artificial.",
          "### Reparabilidade e manutenção",
          "Resinas diretas costumam permitir reparo clínico mais simples em certas situações. Cerâmicas podem manter brilho e cor por mais tempo, mas lascas, descolamentos ou fraturas exigem avaliação; às vezes é necessário substituir a peça. Nenhum material é livre de manutenção.",
          "### Mordida e hábitos",
          "Bruxismo, apertamento, morder objetos e contatos inadequados aumentam risco de desgaste ou fratura. Tratar apenas a aparência, sem avaliar função, pode comprometer o resultado.",
          "### Tempo, etapas e investimento",
          "Resina direta e cerâmica têm fluxos diferentes. O custo não deve ser comparado isoladamente: considere número de dentes, necessidade de tratamentos prévios, manutenção, reparos e proteção da mordida. Um plano escrito torna a decisão mais transparente."
        ]
      },
      {
        "heading": "Quando a ortodontia ou o clareamento podem vir antes?",
        "body": [
          "Se a queixa principal for posição, o [Invisalign](/servicos/ortodontia-invisalign) ou outra abordagem ortodôntica pode alinhar dentes sem acrescentar material restaurador. Se for cor, o [clareamento dental](/servicos/clareamento-dental) pode reduzir a necessidade de mascaramento.",
          "Em alguns planos, essas etapas são combinadas com facetas em poucos dentes. O planejamento integrado busca resolver a causa da insatisfação com a menor intervenção compatível com o objetivo."
        ]
      },
      {
        "heading": "Como evitar um sorriso artificial?",
        "body": [
          "Naturalidade não depende apenas de escolher um tom claro. Proporção entre dentes, textura, translucidez, linha gengival, exposição do sorriso e características do rosto precisam conversar entre si. Fotografias e simulações ajudam a alinhar expectativas, mas não são garantia matemática do resultado.",
          "Peça para entender quantos dentes serão tratados, por que o material foi recomendado e quais alternativas existem. Também pergunte sobre manutenção, risco de reparo e mudanças irreversíveis."
        ]
      },
      {
        "heading": "Perguntas frequentes",
        "body": [
          "### Resina sempre exige menos desgaste?",
          "Não necessariamente. Muitas restaurações diretas podem ser conservadoras, mas posição, volume e condição do dente determinam o preparo. Quando há remoção de esmalte, esse desgaste é irreversível — por isso não é possível prometer, sem exame, que o caso dispensará preparo.",
          "### Lente de contato dental dura para sempre?",
          "Não. Cerâmicas podem ter boa longevidade, mas estão sujeitas a descolamento, fratura, cárie nas margens e mudanças gengivais. A duração varia com o caso e os cuidados.",
          "### Facetas mancham?",
          "Resina tende a alterar brilho e pigmentação mais facilmente. Cerâmica é mais estável em cor, mas a superfície, margens e dentes vizinhos ainda precisam de higiene e manutenção.",
          "### Quem range os dentes pode colocar facetas?",
          "Pode haver possibilidade, mas o risco mecânico precisa ser avaliado e controlado. Uma placa ou outro plano pode ser indicado conforme o diagnóstico.",
          "### Posso fazer apenas um dente?",
          "Sim, em alguns casos. Igualar forma, textura e cor a dentes vizinhos pode ser tecnicamente exigente e deve ser planejado com cuidado."
        ]
      }
    ],
    "ctaTitle": "Escolha o plano, não apenas o material",
    "ctaText": "Se você pensa em mudar o sorriso, agende uma avaliação na Clínica L'Ecler, em Bragança Paulista. A equipe pode comparar resina, cerâmica, clareamento e ortodontia a partir da sua estrutura dental e da sua expectativa.",
    "ctaButtonLabel": "Solicitar avaliação",
    "sources": [
      {
        "label": "American Dental Association — Veneers",
        "url": "https://www.mouthhealthy.org/all-topics-a-z/veneers"
      }
    ],
    "relatedServices": [
      "facetas-de-resina",
      "facetas-e-lentes-de-contato"
    ],
    "relatedPosts": [
      "clareamento-dental-braganca-paulista",
      "invisalign-braganca-paulista"
    ],
    "introExtra": [
      "A melhor escolha começa pelo diagnóstico. Saúde gengival, posição dos dentes, mordida, quantidade de esmalte, restaurações antigas, hábitos e expectativa estética influenciam tanto quanto o material."
    ]
  },
  {
    "image": invisalignHeroImg,
    "slug": "invisalign-braganca-paulista",
    "title": "Invisalign em Bragança Paulista: como funciona do planejamento ao acompanhamento",
    "seoTitle": "Invisalign em Bragança Paulista: como funciona | L'Ecler",
    "description": "Entenda como os alinhadores Invisalign movimentam os dentes, quem precisa de avaliação e por que uso e acompanhamento influenciam o tratamento.",
    "category": "Ortodontia",
    "dateLabel": "8 out. 2026",
    "datePublished": "2026-10-08",
    "readTime": "4 min de leitura",
    "imageAlt": "Alinhador transparente Invisalign sendo encaixado no sorriso",
    "intro": "Invisalign é um sistema de alinhadores transparentes e removíveis que movimentam os dentes gradualmente por meio de uma sequência personalizada. A discrição chama atenção, mas o tratamento continua sendo ortodontia: exige diagnóstico, planejamento, uso consistente e acompanhamento profissional.",
    "sections": [
      {
        "heading": "Como os alinhadores movimentam os dentes?",
        "body": [
          "Cada alinhador é produzido para aplicar forças controladas em determinados dentes. Ao avançar na sequência orientada, pequenas mudanças se acumulam. Alguns casos usam attachments — pequenas porções de material aderidas ao dente — ou outros recursos auxiliares para aumentar controle.",
          "O número de alinhadores e a duração variam conforme o problema ortodôntico, a quantidade de movimento, a resposta individual e o uso correto. Não é responsável prometer prazo sem exame."
        ]
      },
      {
        "heading": "O que acontece na avaliação inicial?",
        "body": [
          "O dentista responsável conversa sobre a queixa, examina dentes, gengiva, mordida, articulações e proporções do sorriso. Fotografias, escaneamento e exames de imagem podem ser indicados. Cáries e inflamação gengival precisam ser controladas para que o tratamento aconteça em uma boca saudável.",
          "O planejamento digital ajuda a organizar etapas e discutir limites. Também é o momento de avaliar se alinhadores são a melhor ferramenta ou se aparelho fixo, tratamento combinado ou outra conduta oferece maior previsibilidade."
        ]
      },
      {
        "heading": "Invisalign serve para todo mundo?",
        "body": [
          "Alinhadores podem tratar diferentes alterações de posição e mordida, mas não são automaticamente ideais para todos. Alguns movimentos ou casos complexos podem responder melhor a aparelhos fixos ou a mecânicas auxiliares. Crescimento facial, condição periodontal, dentes ausentes e restaurações também influenciam.",
          "A American Association of Orthodontists recomenda que essa escolha seja feita por profissional habilitado, porque a aparência discreta do dispositivo não elimina a necessidade de diagnóstico completo."
        ]
      },
      {
        "heading": "Como é a rotina com alinhadores?",
        "body": [
          "Eles são removidos para comer, beber líquidos que possam manchar ou deformar o material e fazer higiene. Depois, dentes e alinhadores precisam estar limpos antes da recolocação. O tempo diário de uso deve seguir a prescrição individual; usar menos do que o orientado pode atrasar ou alterar a sequência planejada.",
          "Perder uma placa, avançar por conta própria ou voltar a uma antiga sem orientação pode comprometer a adaptação. Entre em contato com a equipe para receber a conduta correta."
        ]
      },
      {
        "heading": "Alinhadores doem?",
        "body": [
          "É possível sentir pressão ou sensibilidade quando uma nova etapa começa, porque forças estão sendo aplicadas. A intensidade varia. Dor importante, borda que machuca, placa que não encaixa ou attachment solto devem ser comunicados ao dentista responsável.",
          "Pequenas adaptações de fala e aumento de saliva podem ocorrer no início. Em geral, a rotina se torna mais familiar com o uso, mas cada pessoa tem uma experiência diferente."
        ]
      },
      {
        "heading": "Por que os retornos são importantes?",
        "body": [
          "As consultas verificam se os dentes estão acompanhando o movimento planejado, se gengiva e esmalte permanecem saudáveis e se os alinhadores encaixam. Ajustes, novas moldagens digitais ou etapas adicionais podem ser necessários.",
          "O acompanhamento também permite reforçar higiene. Como o alinhador cobre os dentes, recolocá-lo sobre resíduos ou após bebidas açucaradas aumenta o tempo de contato com a superfície dental. A [odontologia preventiva](/servicos/odontologia-preventiva-integrativa) pode apoiar o controle de biofilme durante o tratamento."
        ]
      },
      {
        "heading": "O que acontece depois de alinhar?",
        "body": [
          "Os dentes tendem a se mover ao longo da vida. Por isso, a contenção faz parte do tratamento ortodôntico. O tipo, a frequência de uso e o acompanhamento são definidos pelo profissional de acordo com o caso.",
          "Se houver interesse em [clareamento](/servicos/clareamento-dental) ou [restaurações estéticas](/servicos/odontologia-estetica), a sequência deve ser coordenada. Alinhar primeiro pode reduzir desgaste e tornar intervenções posteriores mais conservadoras."
        ]
      },
      {
        "heading": "Perguntas frequentes",
        "body": [
          "### Invisalign é realmente invisível?",
          "O alinhador é transparente e discreto, mas pode ser percebido de perto. Attachments e elásticos, quando necessários, também podem ficar visíveis.",
          "### Posso comer usando o alinhador?",
          "Em geral, o alinhador é removido para as refeições. Siga a orientação específica para evitar dano, manchas e acúmulo de resíduos.",
          "### O tratamento é mais rápido que o aparelho fixo?",
          "Não há regra. A duração depende do caso e da adesão. Diferentes aparelhos podem ser mais eficientes para movimentos diferentes.",
          "### Posso usar alinhadores se tenho implante?",
          "Implantes não se movimentam como dentes naturais. Ainda pode haver planejamento ortodôntico ao redor deles, mas a sequência exige avaliação integrada.",
          "### Preciso usar contenção?",
          "Em geral, sim. A contenção ajuda a manter a posição alcançada e deve seguir o plano do dentista responsável."
        ]
      }
    ],
    "ctaTitle": "Descubra se alinhadores fazem sentido para o seu caso",
    "ctaText": "Se você procura um tratamento ortodôntico discreto, marque uma avaliação na Clínica L'Ecler. O exame mostra se o [Invisalign](/servicos/ortodontia-invisalign) é adequado e quais responsabilidades fazem parte do plano.",
    "ctaButtonLabel": "Solicitar avaliação",
    "sources": [
      {
        "label": "American Association of Orthodontists — Clear Aligners",
        "url": "https://aaoinfo.org/treatments/aligners/"
      }
    ],
    "relatedServices": [
      "ortodontia-invisalign"
    ],
    "relatedPosts": [
      "resina-ou-lentes-de-contato-dental",
      "limpeza-dentaria-airflow-braganca-paulista"
    ],
    "introExtra": [
      "A Clínica L'Ecler, em Bragança Paulista, oferece tratamento com Invisalign e planejamento digital. A simulação permite visualizar a proposta de movimentos, mas não transforma a simulação em garantia exata do resultado. A resposta biológica e a colaboração do paciente fazem parte do processo."
    ]
  },
  {
    "image": treatmentHeroProtesesImg,
    "slug": "implante-protese-sobre-implante-ou-dentadura",
    "title": "Implante, prótese sobre implante ou dentadura: quais são as diferenças?",
    "seoTitle": "Implante, prótese ou dentadura: diferenças | L'Ecler",
    "description": "Compare implante unitário, prótese fixa sobre implantes, overdenture e dentadura convencional para entender o que muda no planejamento.",
    "category": "Reabilitação oral",
    "dateLabel": "8 out. 2026",
    "datePublished": "2026-10-08",
    "readTime": "4 min de leitura",
    "imageAlt": "Prótese odontológica em avaliação clínica",
    "intro": "Perder um dente, vários dentes ou todos eles cria problemas diferentes. Por isso, expressões como “implante”, “prótese fixa” e “dentadura” não devem ser usadas como se fossem a mesma solução. O implante é um componente inserido no osso; a prótese é a parte que repõe os dentes e pode ser fixa ou removível.",
    "sections": [
      {
        "heading": "Como é formado um tratamento com implante?",
        "body": [
          "Segundo a FDA, um sistema de implante costuma envolver o corpo inserido cirurgicamente no osso e um componente de conexão chamado pilar. Sobre ele é instalada a prótese — uma coroa, ponte ou dentadura suportada por implantes.",
          "O período de cicatrização e a sequência variam. Carga imediata pode ser considerada em casos selecionados, mas não é uma promessa válida para todos. Volume ósseo, estabilidade, saúde e distribuição das forças influenciam a decisão."
        ]
      },
      {
        "heading": "Implante unitário",
        "body": [
          "Quando falta um dente, um implante pode sustentar uma coroa sem apoiar a prótese nos dentes vizinhos. O planejamento observa espaço, posição das raízes, altura e espessura óssea, gengiva e mordida.",
          "Nem todo espaço aceita um implante diretamente. Pode ser necessário adequar tecidos, considerar enxerto ou escolher outra solução. A presença de implante também não elimina consultas de manutenção: biofilme e inflamação podem afetar os tecidos ao redor."
        ]
      },
      {
        "heading": "Prótese fixa sobre implantes",
        "body": [
          "Quando faltam vários dentes, uma ponte ou uma prótese de arco completo pode ser sustentada por implantes. O número e a posição dos implantes dependem da anatomia e do desenho protético; não devem ser definidos por uma fórmula universal.",
          "A estabilidade é uma vantagem percebida por muitos pacientes, mas a prótese fixa exige espaço para higiene, habilidade manual e acompanhamento. Mesmo não sendo removida pelo paciente, pode demandar manutenção profissional, troca de componentes ou reparos ao longo do tempo."
        ]
      },
      {
        "heading": "Overdenture: removível com apoio em implantes",
        "body": [
          "A overdenture é uma prótese removível que se conecta a implantes para ganhar retenção. O paciente retira a peça para higienizar. Ela pode oferecer mais estabilidade que uma dentadura convencional em casos indicados, embora ainda exija adaptação, troca de componentes de retenção e cuidado com implantes e mucosa.",
          "Para algumas pessoas, a possibilidade de remover facilita a limpeza; para outras, a expectativa era ter uma peça fixa. Essa preferência precisa ser conversada antes do tratamento."
        ]
      },
      {
        "heading": "Dentadura convencional",
        "body": [
          "A prótese total convencional é removível e se apoia sobre gengiva e rebordo ósseo, sem implantes. Pode recuperar aparência e parte da função mastigatória quando não há dentes, mas retenção e estabilidade variam conforme anatomia, saliva, coordenação muscular e adaptação.",
          "O osso e os tecidos mudam com o tempo, então ajustes, reembasamentos ou substituição podem ser necessários. Adesivos não devem encobrir feridas, instabilidade persistente ou prótese desadaptada; nesses casos, procure avaliação."
        ]
      },
      {
        "heading": "Como comparar as opções?",
        "body": [
          "### Cirurgia e saúde geral",
          "Implantes envolvem procedimento cirúrgico. Condições sistêmicas, tabagismo, medicamentos e capacidade de cicatrização precisam ser discutidos. Uma opção removível pode ser preferível quando cirurgia não é indicada ou desejada.",
          "### Osso e gengiva",
          "Exames clínicos e de imagem mostram se há suporte e espaço. Doença periodontal ativa precisa ser controlada, e a necessidade de enxerto é individual.",
          "### Higiene e destreza",
          "Toda solução exige limpeza. Próteses fixas sobre implantes demandam acesso sob a estrutura; removíveis precisam ser retiradas e higienizadas. Limitações motoras e ajuda de cuidadores devem entrar no plano.",
          "### Manutenção e reparos",
          "Implantes, parafusos, dentes protéticos, resinas e encaixes podem precisar de manutenção. Pergunte o que está incluído no acompanhamento e quais peças têm vida útil esperada, sem interpretar estimativas como garantia.",
          "### Tempo e investimento",
          "O custo total inclui diagnóstico, cirurgia quando indicada, provisórios, prótese final e manutenção. O tempo depende de cicatrização e complexidade. Um orçamento comparativo ajuda a decidir com clareza.",
          "Veja as páginas de [implantes dentários](/servicos/implantes) e [próteses dentárias](/servicos/proteses) da Clínica L'Ecler."
        ]
      },
      {
        "heading": "Perguntas frequentes",
        "body": [
          "### Implante é o dente completo?",
          "Não. O implante substitui a função de raiz e recebe componentes protéticos. A coroa ou prótese visível é outra parte do sistema.",
          "### Prótese fixa nunca sai?",
          "Ela não é removida pelo paciente no dia a dia, mas o dentista pode precisar removê-la para manutenção conforme o desenho.",
          "### Quem usa dentadura pode colocar implantes?",
          "Muitas pessoas podem ser avaliadas, mas osso, gengiva, saúde geral e expectativas determinam a viabilidade.",
          "### Implante exige menos higiene?",
          "Não. A limpeza ao redor do implante e as consultas regulares são importantes para a saúde dos tecidos e a manutenção do sistema.",
          "### Existe uma opção mais barata e definitiva?",
          "Custos variam, e nenhuma solução deve ser tratada como eterna. Compare investimento inicial, manutenção, reparos, conforto e função esperada."
        ]
      }
    ],
    "ctaTitle": "Um plano de reabilitação deve caber na sua vida",
    "ctaText": "Se você perdeu dentes ou não está satisfeito com uma prótese atual, agende uma avaliação na Clínica L'Ecler. A equipe pode explicar possibilidades fixas e removíveis, etapas e cuidados sem presumir uma única resposta.",
    "ctaButtonLabel": "Solicitar avaliação",
    "sources": [
      {
        "label": "U.S. FDA — Dental Implants: What You Should Know",
        "url": "https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know"
      }
    ],
    "relatedServices": [
      "implantes",
      "proteses"
    ],
    "relatedPosts": [
      "extracao-dentaria-braganca-paulista",
      "primeira-consulta-odontologica-braganca-paulista"
    ],
    "introExtra": [
      "Para escolher, o dentista avalia boca, osso, gengiva, saúde geral, capacidade de higiene, expectativas e possibilidades financeiras. A pergunta mais útil não é “qual é a melhor?”, mas “qual equilibra melhor função, manutenção e risco para este caso?”."
    ]
  },
  {
    "image": clinicaRecepcao.url,
    "slug": "primeira-consulta-odontologica-braganca-paulista",
    "title": "Primeira consulta odontológica: o que levar e como nasce um plano de tratamento",
    "seoTitle": "Primeira consulta odontológica em Bragança Paulista | L'Ecler",
    "description": "Veja o que acontece na primeira consulta odontológica, quais informações levar e como prioridades, exames e orçamento formam o plano de tratamento.",
    "category": "Primeira consulta",
    "dateLabel": "8 out. 2026",
    "datePublished": "2026-10-08",
    "readTime": "4 min de leitura",
    "imageAlt": "Recepção da Clínica L'ECLER em Bragança Paulista",
    "intro": "A primeira consulta odontológica é o momento de entender por que você procurou atendimento e como sua saúde bucal se relaciona com sua história, rotina e expectativas. Mesmo quando a queixa parece simples — uma mancha, um dente quebrado ou vontade de melhorar o sorriso — o plano precisa considerar gengiva, mordida, dentes, restaurações e condições gerais de saúde.",
    "sections": [
      {
        "heading": "O que levar para a consulta?",
        "body": [
          "Prepare uma lista de medicamentos, suplementos, alergias, doenças e cirurgias anteriores. Informe gestação, uso de anticoagulantes, tratamentos para os ossos, diabetes, problemas cardíacos e outras condições relevantes. Não suspenda medicamentos por conta própria.",
          "Se tiver radiografias, tomografias, relatórios ou fotografias recentes, leve-os. O dentista decidirá se ainda são adequados para a dúvida atual; apresentar exames não significa que novos serão obrigatórios.",
          "Anote também sua principal queixa: quando começou, o que piora ou melhora, se houve trauma e quais tratamentos já foram feitos naquele dente. Para objetivos estéticos, referências podem ajudar, mas devem ser usadas para conversar sobre preferências, não para copiar o sorriso de outra pessoa."
        ]
      },
      {
        "heading": "Como começa a avaliação?",
        "body": [
          "A consulta costuma iniciar com uma conversa sobre histórico médico e odontológico. O profissional pergunta sobre dor, sangramento, sensibilidade, mastigação, sono, hábitos, higiene e experiências anteriores. Ansiedade ou medo também devem ser mencionados para que a comunicação seja adaptada.",
          "Depois, o exame observa dentes, gengiva, mucosas, língua, restaurações, próteses e mordida. Pode haver avaliação periodontal e rastreio de alterações nos tecidos da boca, cabeça e pescoço. A American Dental Association destaca que o dentista decide sobre radiografias com base na história e no exame; elas não precisam ser automáticas em toda visita."
        ]
      },
      {
        "heading": "Quando exames complementares são necessários?",
        "body": [
          "Radiografias ajudam a investigar cáries entre dentes, raízes, osso e outras estruturas que não ficam totalmente visíveis. Tomografia pode ser indicada em planejamentos específicos, como certos casos de implante, dentes inclusos ou anatomias complexas.",
          "Fotografias e escaneamento digital podem registrar a situação inicial e apoiar planejamento estético ou ortodôntico. Cada exame deve responder a uma pergunta clínica. Pergunte por que ele foi solicitado e como mudará a decisão."
        ]
      },
      {
        "heading": "Como o dentista organiza as prioridades?",
        "body": [
          "Um plano completo não precisa ser executado de uma vez. Em geral, prioridades podem ser organizadas assim:",
          "1. controlar dor, infecção e situações de risco; 2. estabilizar cáries e inflamação gengival; 3. recuperar função, mastigação e proteção dos dentes; 4. realizar ortodontia, reabilitação ou estética conforme objetivos; 5. estabelecer prevenção e manutenção.",
          "A ordem muda conforme o caso. Às vezes, um tratamento provisório cria tempo para decidir. Em outros cenários, adiar determinada etapa pode reduzir o prognóstico. O profissional deve explicar essas consequências sem pressão indevida."
        ]
      },
      {
        "heading": "O que deve existir em um bom plano de tratamento?",
        "body": [
          "O paciente deve compreender o diagnóstico provável ou confirmado, as alternativas, os benefícios, os riscos relevantes, as etapas e os cuidados necessários. Também é útil saber o que é prioridade, o que pode aguardar e como cada fase afeta as próximas.",
          "Orçamento e tempo estimado precisam considerar variações clínicas. Se houver opções, peça comparação entre elas. Para decisões como [implantes](/servicos/implantes), [próteses](/servicos/proteses), [Invisalign](/servicos/ortodontia-invisalign) ou [facetas](/servicos/facetas-e-lentes-de-contato), entenda não só a instalação, mas a manutenção futura.",
          "Levar o plano por escrito ou receber um resumo reduz mal-entendidos. Se algo não estiver claro, pedir outra explicação faz parte do consentimento informado."
        ]
      },
      {
        "heading": "E se eu quiser apenas uma limpeza?",
        "body": [
          "É possível que a avaliação mostre que uma limpeza profissional é apropriada. Também pode identificar cálculo abaixo da gengiva, cárie, trinca ou outra necessidade que mude o atendimento. A [odontologia preventiva e integrativa](/servicos/odontologia-preventiva-integrativa) parte desse diagnóstico para personalizar higiene e retornos.",
          "Isso não significa que todo achado precise de um procedimento imediato. Algumas condições podem ser acompanhadas, desde que o critério e o intervalo sejam explicados."
        ]
      },
      {
        "heading": "Como participar da decisão?",
        "body": [
          "Conte o que é mais importante para você: eliminar dor, voltar a mastigar, melhorar aparência, reduzir número de consultas ou distribuir investimento. Informe limitações de agenda, experiências negativas e cuidados que você consegue manter.",
          "Perguntas úteis incluem: “Qual é o objetivo desta etapa?”, “Há uma alternativa mais conservadora?”, “O que acontece se eu esperar?”, “Quais manutenções serão necessárias?” e “Como saberemos se o tratamento está funcionando?”."
        ]
      },
      {
        "heading": "Perguntas frequentes",
        "body": [
          "### A primeira consulta já inclui procedimento?",
          "Depende da agenda, da urgência, do diagnóstico e do serviço. Confirme com a equipe o que está previsto para a consulta agendada; exames e procedimentos dependem da avaliação.",
          "### Preciso fazer radiografia?",
          "Não obrigatoriamente. O dentista decide após revisar histórico e examinar a boca, considerando a informação necessária e exames recentes.",
          "### Posso pedir uma segunda opinião?",
          "Sim. Leve o plano e os exames disponíveis. Em situações agudas, pergunte se esperar representa risco.",
          "### Quanto custa o tratamento?",
          "O valor depende do diagnóstico, das alternativas e das etapas. Um orçamento responsável vem depois da avaliação, não de uma estimativa genérica baseada apenas em mensagem.",
          "### Com que frequência devo voltar?",
          "O intervalo é individual e pode mudar conforme risco de cárie, saúde gengival, implantes, aparelhos, hábitos e evolução clínica."
        ]
      }
    ],
    "ctaTitle": "Comece com clareza",
    "ctaText": "Se você quer retomar os cuidados, investigar um sintoma ou organizar uma mudança no sorriso, marque sua primeira consulta na Clínica L'Ecler. A clínica fica na Rua José Domingues, 577, Centro, Bragança Paulista/SP.",
    "ctaButtonLabel": "Solicitar avaliação",
    "sources": [
      {
        "label": "American Dental Association — Common Questions About Going to the Dentist",
        "url": "https://www.mouthhealthy.org/dental-care/questions-about-going-to-the-dentist"
      },
      {
        "label": "NIDCR — Periodontal (Gum) Disease",
        "url": "https://www.nidcr.nih.gov/health-info/gum-disease"
      }
    ],
    "relatedServices": [
      "odontologia-preventiva-integrativa"
    ],
    "relatedPosts": [
      "limpeza-dentaria-airflow-braganca-paulista",
      "implante-protese-sobre-implante-ou-dentadura"
    ],
    "introExtra": [
      "Na Clínica L'Ecler, em Bragança Paulista, essa avaliação pode servir tanto para prevenção quanto para organizar tratamentos em etapas. Saber o que levar e o que perguntar torna a conversa mais produtiva."
    ]
  },
];
