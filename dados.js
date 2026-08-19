/* ===================================================================
   BASE DE DADOS — PONTOS TURÍSTICOS DO NOROESTE DO PARANÁ
   -------------------------------------------------------------------
   Este arquivo guarda TODAS as cidades. Há dois grupos:

   1) "destaques"  -> cidades com atração real e detalhada (prontas).
   2) "genericas"  -> demais cidades. Aparecem com o marco cívico
      (Igreja Matriz/praça, ou beira-rio) e o selo "✏️ Para completar".
      VOCÊ deve completar história, curiosidade, etc. na sua pesquisa.

   COMO EDITAR:
   - Trocar foto: coloque o arquivo em imagens/ com o nome do "slug"
     da cidade (ex.: Santa Isabel do Ivaí -> santa-isabel-do-ivai.jpg).
   - Melhorar uma cidade genérica: ache-a no array "genericas", troque
     por um bloco completo igual aos de "destaques".
   =================================================================== */

/* ---------------- CIDADES COM ATRAÇÃO DETALHADA ---------------- */
const destaques = [
  /* ===== MARINGÁ ===== */
  {
    regiao:"Maringá", cidade:"Maringá",
    nome:"Pontos de Maringá",
    emoji:"🗼", cor:"linear-gradient(135deg,#2c3e50,#4a6274)",
    imagem:"imagens/catedral-maringa.jpg", mapa:"Catedral de Maringá, Paraná",
    subtitulo:"O cartão-postal de Maringá: uma catedral em forma de cone que aponta para o céu.",
    local:"Praça da Catedral, Centro de Maringá",
    epoca:"O ano todo. De abril a outubro o clima fica mais ameno para caminhar pelo centro.",
    historia:"Um dos monumentos religiosos mais altos das Américas, com cerca de 124 metros. O formato de cone remete à era da corrida espacial.",
    surgimento:"Projetada pelo arquiteto José Augusto Bellucci e inaugurada em 1972, virou o símbolo da cidade planejada de Maringá.",
    atividades:"Visitar a igreja, ver o mirante, fotografar a praça e conhecer o centro.",
    curiosidade:"A silhueta pontiaguda pode ser vista de vários pontos da cidade."
  },
  {
    regiao:"Maringá", cidade:"Maringá",
    nome:"Parque do Ingá",
    emoji:"🌳", cor:"linear-gradient(135deg,#1e5631,#3a7d44)",
    imagem:"imagens/parque-inga.jpg", mapa:"Parque do Ingá, Maringá, Paraná",
    subtitulo:"Uma floresta nativa preservada bem no coração da cidade.",
    local:"Avenida São Paulo, região central de Maringá",
    epoca:"O ano todo. As manhãs são ideais para caminhadas e para ver os animais.",
    historia:"Uma das maiores reservas de mata nativa dentro de uma área urbana no Brasil, com lago, trilhas e fauna livre.",
    surgimento:"A área foi preservada desde a fundação de Maringá para proteger um trecho original da mata.",
    atividades:"Trilhas, mirante, lago e observação de macacos e capivaras.",
    curiosidade:"Mesmo cercado por prédios, abriga nascentes e centenas de espécies."
  },
  {
    regiao:"Maringá", cidade:"Maringá",
    nome:"Parque do Japão",
    emoji:"🌸", cor:"linear-gradient(135deg,#7d2b46,#b5546f)",
    imagem:"imagens/parque-japao.jpg", mapa:"Parque do Japão, Maringá, Paraná",
    subtitulo:"Jardins, lagos e portais que celebram a cultura japonesa.",
    local:"Zona norte de Maringá",
    epoca:"Inverno (julho/agosto), quando as cerejeiras (sakura) costumam florir.",
    historia:"Um dos maiores parques temáticos japoneses da América Latina, com portais torii, jardins zen e lagos com carpas.",
    surgimento:"Criado para homenagear a imigração japonesa e a comunidade nipo-brasileira, inaugurado na década de 2010.",
    atividades:"Passeio pelos jardins, feira e eventos culturais, fotos nos torii.",
    curiosidade:"A florada das cerejeiras atrai visitantes de toda a região."
  },
  {
    regiao:"Maringá", cidade:"Maringá",
    nome:"Bosque dos Pioneiros (Parque Florestal)",
    emoji:"🦜", cor:"linear-gradient(135deg,#25623a,#4e9d5c)",
    imagem:"imagens/bosque-pioneiros.jpg", mapa:"Parque Florestal dos Pioneiros Bosque 2, Maringá",
    subtitulo:"Área verde de lazer com lago, viveiros e muita sombra.",
    local:"Região do Jardim Alvorada, Maringá",
    epoca:"O ano todo, ótimo para tardes de domingo em família.",
    historia:"Espaço de preservação e lazer que homenageia os pioneiros que colonizaram a cidade.",
    surgimento:"Foi criado para unir preservação ambiental e área de convívio.",
    atividades:"Caminhada, piquenique, playground e observação de aves.",
    curiosidade:"É um dos espaços verdes preferidos das famílias maringaenses."
  },
  {
    regiao:"Maringá", cidade:"Marialva",
    nome:"Rota da Uva",
    emoji:"🍇", cor:"linear-gradient(135deg,#5a1e3a,#8a3560)",
    imagem:"imagens/marialva.jpg", mapa:"Marialva, Paraná",
    subtitulo:"Terra da uva fina, com parreirais e produção conhecida no estado.",
    local:"Marialva, região metropolitana de Maringá",
    epoca:"Verão, na época da safra e das festas ligadas à uva.",
    historia:"Marialva é reconhecida pela produção de uvas de mesa de qualidade, que movimentam a economia e o turismo rural.",
    surgimento:"A cultura da uva se desenvolveu nas propriedades da região e virou marca da cidade.",
    atividades:"Turismo rural, visita a parreirais e compra de uvas e derivados.",
    curiosidade:"A cidade é bastante associada à imagem da uva fina."
  },
  {
    regiao:"Maringá", cidade:"Nova Esperança",
    nome:"Cidade das Flores",
    emoji:"🌺", cor:"linear-gradient(135deg,#8a2d55,#c04f80)",
    imagem:"imagens/nova-esperanca.jpg", mapa:"Nova Esperança, Paraná",
    subtitulo:"Conhecida como a 'Cidade das Flores', com praças bem cuidadas.",
    local:"Nova Esperança, noroeste do Paraná",
    epoca:"Primavera, quando as flores e jardins ficam mais bonitos.",
    historia:"A cidade ficou conhecida pelo capricho com suas praças e jardins floridos.",
    surgimento:"Surgiu no avanço da colonização e da cultura do café no norte-noroeste do estado.",
    atividades:"Passeio pelas praças, jardins e centro da cidade.",
    curiosidade:"O apelido 'Cidade das Flores' virou marca do município."
  },

  /* ===== PARANAVAÍ ===== */
  {
    regiao:"Paranavaí", cidade:"Paranavaí",
    nome:"Lago Municipal de Paranavaí",
    emoji:"🚣", cor:"linear-gradient(135deg,#3a5a40,#588157)",
    imagem:"imagens/paranavai.jpg", mapa:"Lago Municipal de Paranavaí, Paraná",
    subtitulo:"Espaço de lazer, esporte e natureza no centro de Paranavaí.",
    local:"Área central de Paranavaí",
    epoca:"O ano todo; primavera e verão deixam a vegetação mais bonita.",
    historia:"Lago urbano com pista, quadras e áreas verdes, muito usado para caminhadas e eventos.",
    surgimento:"Nasceu do desejo de dar à cidade — que cresceu com o café — um grande espaço de lazer.",
    atividades:"Caminhada, corrida, ciclismo e encontros ao ar livre.",
    curiosidade:"Paranavaí é uma das cidades-polo do noroeste do estado."
  },
  {
    regiao:"Paranavaí", cidade:"Porto Rico",
    nome:"Praias do Rio Paraná",
    emoji:"🏖️", cor:"linear-gradient(135deg,#c68a2e,#e0b25a)",
    imagem:"imagens/porto-rico.jpg", mapa:"Balneário de Porto Rico, Paraná",
    subtitulo:"Praias de água doce, pôr do sol e clima de litoral no interior.",
    local:"Município de Porto Rico, às margens do Rio Paraná",
    epoca:"Verão (dezembro a março), quando o rio abaixa e surgem largas faixas de areia.",
    historia:"Um dos destinos mais procurados da região para banho de rio, pesca e passeios de barco.",
    surgimento:"O turismo cresceu com o balneário à beira do rio e as praias da estação seca.",
    atividades:"Banho de rio, passeio de barco, pesca esportiva e quiosques.",
    curiosidade:"Na temporada, as areias viram ponto de encontro de turistas de todo o estado."
  },
  {
    regiao:"Paranavaí", cidade:"São Pedro do Paraná",
    nome:"Balneário Porto São José",
    emoji:"⛵", cor:"linear-gradient(135deg,#1c6e8c,#3fa7c4)",
    imagem:"imagens/sao-pedro-do-parana.jpg", mapa:"Balneário Porto São José, São Pedro do Paraná",
    subtitulo:"Prainha, camping e barcos às margens do Rio Paraná.",
    local:"Distrito de Porto São José, São Pedro do Paraná",
    epoca:"Verão, para aproveitar a praia e os banhos de rio.",
    historia:"Balneário tradicional de acesso ao Rio Paraná, muito usado por pescadores e campistas.",
    surgimento:"Surgiu como porto e ponto de travessia do rio, e virou área de lazer.",
    atividades:"Camping, pesca, passeios de barco e banho de rio.",
    curiosidade:"É uma das portas de entrada para as ilhas do Rio Paraná."
  },
  {
    regiao:"Paranavaí", cidade:"Querência do Norte",
    nome:"Várzeas e Pesca de Querência do Norte",
    emoji:"🛶", cor:"linear-gradient(135deg,#2f6b4f,#5aa377)",
    imagem:"imagens/querencia-do-norte.jpg", mapa:"Querência do Norte, Paraná",
    subtitulo:"O 'pantanal paranaense': áreas alagadas cheias de pássaros e peixes.",
    local:"Querência do Norte, extremo noroeste do estado",
    epoca:"Estação seca para pesca; épocas de cheia para ver as várzeas.",
    historia:"Região de planícies alagáveis do Rio Paraná, com paisagem parecida com a do Pantanal.",
    surgimento:"O turismo de pesca e natureza cresceu graças à riqueza das várzeas.",
    atividades:"Pesca esportiva, observação de aves e passeios de barco.",
    curiosidade:"É um dos melhores pontos de pesca esportiva do noroeste."
  },

  /* ===== UMUARAMA ===== */
  {
    regiao:"Umuarama", cidade:"Umuarama",
    nome:"Lago Aratimbó",
    emoji:"🦢", cor:"linear-gradient(135deg,#245e8c,#4a90c2)",
    imagem:"imagens/umuarama.jpg", mapa:"Lago Aratimbó, Umuarama, Paraná",
    subtitulo:"O maior cartão-postal de Umuarama, cercado de verde.",
    local:"Área urbana de Umuarama",
    epoca:"O ano todo, especialmente no fim da tarde para o pôr do sol sobre a água.",
    historia:"Grande lago urbano com pista de caminhada e áreas de lazer; ponto de encontro da cidade.",
    surgimento:"Transformado em parque de lazer para servir de espaço de convívio e preservação.",
    atividades:"Caminhada, ciclismo, contemplação e lazer em família.",
    curiosidade:"É muito procurado por quem gosta de atividades ao ar livre."
  },
  {
    regiao:"Umuarama", cidade:"Cruzeiro do Oeste",
    nome:"Sítio Paleontológico de Cruzeiro do Oeste",
    emoji:"🦕", cor:"linear-gradient(135deg,#8a5a2b,#c08b45)",
    imagem:"imagens/cruzeiro-do-oeste.jpg", mapa:"Cruzeiro do Oeste, Paraná",
    subtitulo:"Onde foram encontrados fósseis de répteis voadores pré-históricos.",
    local:"Cruzeiro do Oeste, microrregião de Umuarama",
    epoca:"O ano todo (atrações e museu em horário local).",
    historia:"Um dos sítios paleontológicos mais importantes do Brasil, com fósseis de pterossauros de milhões de anos atrás.",
    surgimento:"As descobertas de fósseis colocaram a cidade no mapa da ciência e do turismo educativo.",
    atividades:"Turismo científico e educativo sobre os fósseis da região.",
    curiosidade:"Espécies de pterossauros descobertas ali receberam nomes ligados à região."
  },
  {
    regiao:"Umuarama", cidade:"Icaraíma",
    nome:"Balneário Porto Camargo",
    emoji:"🐠", cor:"linear-gradient(135deg,#0f7d8c,#33b0a8)",
    imagem:"imagens/icaraima.jpg", mapa:"Porto Camargo, Icaraíma, Paraná",
    subtitulo:"Balneário fluvial com boa estrutura à beira do Rio Paraná.",
    local:"Distrito de Porto Camargo, Icaraíma",
    epoca:"Verão e feriados prolongados da estação seca.",
    historia:"Um dos balneários mais estruturados do rio na região, com hotéis, restaurantes e prainha.",
    surgimento:"Cresceu como ponto de pesca e travessia e se tornou destino turístico.",
    atividades:"Pesca, passeios de lancha, praia e gastronomia com peixes.",
    curiosidade:"É base para chegar ao Parque Nacional de Ilha Grande."
  },
  {
    regiao:"Umuarama", cidade:"São Jorge do Patrocínio",
    nome:"Balneário e Ecoturismo",
    emoji:"🎣", cor:"linear-gradient(135deg,#3a7d44,#66b06a)",
    imagem:"imagens/sao-jorge-do-patrocinio.jpg", mapa:"Balneário São Jorge do Patrocínio, Paraná",
    subtitulo:"Porta de entrada para o ecoturismo do Rio Paraná.",
    local:"São Jorge do Patrocínio, junto ao Rio Paraná",
    epoca:"Estação seca, ideal para pesca e trilhas.",
    historia:"Cidade que aposta no ecoturismo, próxima às ilhas e áreas de proteção do rio.",
    surgimento:"Desenvolveu o turismo aproveitando a natureza preservada da região.",
    atividades:"Pesca, trilhas ecológicas, passeios de barco e camping.",
    curiosidade:"Faz parte do circuito de conservação do baixo Rio Paraná."
  },
  {
    regiao:"Umuarama", cidade:"Alto Paraíso",
    nome:"Parque Nacional de Ilha Grande",
    emoji:"🐊", cor:"linear-gradient(135deg,#155e63,#2a9d8f)",
    imagem:"imagens/alto-paraiso.jpg", mapa:"Parque Nacional de Ilha Grande, Paraná",
    subtitulo:"Um mosaico de ilhas, rios e áreas alagadas cheio de vida.",
    local:"Rio Paraná, na divisa entre Paraná e Mato Grosso do Sul",
    epoca:"Estação seca (outono/inverno) para pesca e observação de aves.",
    historia:"Unidade de conservação federal que protege um dos últimos trechos de várzea preservada do Rio Paraná.",
    surgimento:"Criado em 1997 para proteger as ilhas e áreas alagadas do baixo Rio Paraná.",
    atividades:"Pesca, observação de fauna, passeios de barco e ecoturismo.",
    curiosidade:"É refúgio de jacarés, capivaras e dezenas de espécies de peixes e aves."
  },

  /* ===== CIANORTE ===== */
  {
    regiao:"Cianorte", cidade:"Cianorte",
    nome:"Parque Cinturão Verde",
    emoji:"🌲", cor:"linear-gradient(135deg,#1f6b39,#49a15b)",
    imagem:"imagens/cianorte.jpg", mapa:"Parque Cinturão Verde, Cianorte, Paraná",
    subtitulo:"Um dos maiores cinturões verdes urbanos do país cercando a cidade.",
    local:"Ao redor da área urbana de Cianorte",
    epoca:"O ano todo, ótimo para caminhadas e trilhas.",
    historia:"Faixa de floresta preservada que envolve a cidade, com trilhas, nascentes e muita natureza.",
    surgimento:"Foi mantido desde o planejamento da cidade para preservar a mata.",
    atividades:"Trilhas, caminhada, ciclismo e contato com a natureza.",
    curiosidade:"É referência em preservação de mata em área urbana."
  },

  /* ===== CAMPO MOURÃO ===== */
  {
    regiao:"Campo Mourão", cidade:"Campo Mourão",
    nome:"Lago Azul (Parque do Lago)",
    emoji:"🌅", cor:"linear-gradient(135deg,#1b6ca8,#3f9fd0)",
    imagem:"imagens/campo-mourao.jpg", mapa:"Lago Azul, Campo Mourão, Paraná",
    subtitulo:"Grande área de lazer em torno de um lago, cartão-postal da cidade.",
    local:"Campo Mourão, cidade-polo da microrregião",
    epoca:"O ano todo, com destaque para o fim de tarde.",
    historia:"O lago e seu parque são um dos principais espaços de lazer e encontro da população.",
    surgimento:"Tornou-se ponto de convívio e prática de esportes ao ar livre na cidade.",
    atividades:"Caminhada, pesca, esportes e lazer em família.",
    curiosidade:"Campo Mourão é uma das maiores cidades do centro-noroeste do estado."
  },
  {
    regiao:"Campo Mourão", cidade:"Fênix",
    nome:"Parque Estadual Vila Rica do Espírito Santo",
    emoji:"🏛️", cor:"linear-gradient(135deg,#6b4a2b,#a3763f)",
    imagem:"imagens/fenix.jpg", mapa:"Parque Estadual de Vila Rica do Espírito Santo, Fênix, Paraná",
    subtitulo:"Onde ficava uma antiga cidade colonial espanhola, hoje área protegida.",
    local:"Fênix, às margens do Rio Ivaí",
    epoca:"O ano todo, ideal para trilhas e visitas educativas.",
    historia:"O parque preserva mata nativa e o local de uma antiga vila fundada por espanhóis no século XVI.",
    surgimento:"Foi criado para proteger a floresta e a memória histórica daquela ocupação antiga.",
    atividades:"Trilhas, visita histórica e observação da natureza.",
    curiosidade:"É um raro ponto que une história colonial e preservação ambiental no Paraná."
  },
  {
    regiao:"Campo Mourão", cidade:"Peabiru",
    nome:"Caminho de Peabiru",
    emoji:"🧭", cor:"linear-gradient(135deg,#5a3d1e,#8f6a35)",
    imagem:"imagens/peabiru.jpg", mapa:"Peabiru, Paraná",
    subtitulo:"Cidade ligada a uma antiga trilha indígena que cruzava o continente.",
    local:"Peabiru, microrregião de Campo Mourão",
    epoca:"O ano todo.",
    historia:"O nome vem do 'Caminho de Peabiru', trilha milenar usada por povos indígenas que ligava o litoral ao interior do continente.",
    surgimento:"A cidade preserva a memória e a referência histórica desse antigo caminho.",
    atividades:"Turismo histórico e cultural sobre o Caminho de Peabiru.",
    curiosidade:"O Caminho de Peabiru é um dos temas históricos mais fascinantes do Paraná."
  },
  {
    regiao:"Campo Mourão", cidade:"Goioerê",
    nome:"Lago Municipal de Goioerê",
    emoji:"🌇", cor:"linear-gradient(135deg,#2b6b8a,#4f9fbf)",
    imagem:"imagens/goioere.jpg", mapa:"Lago Municipal de Goioerê, Paraná",
    subtitulo:"Área de lazer e natureza na microrregião de Goioerê.",
    local:"Goioerê, noroeste do Paraná",
    epoca:"O ano todo, com destaque para o fim de tarde.",
    historia:"Espaço de convívio da população, com áreas verdes e caminhada às margens do lago.",
    surgimento:"Criado como espaço público de lazer para a comunidade da região.",
    atividades:"Caminhada, pesca, lazer em família e contemplação.",
    curiosidade:"Goioerê é uma das cidades-polo da sua região."
  }
];

/* ---------------- DEMAIS CIDADES (para completar) ----------------
   {c: cidade, r: região, t: tipo opcional ('rio' = beira-rio)}       */
const genericas = [
  /* PARANAVAÍ */
  {c:"Alto Paraná", r:"Paranavaí"}, {c:"Amaporã", r:"Paranavaí"},
  {c:"Cruzeiro do Sul", r:"Paranavaí"}, {c:"Diamante do Norte", r:"Paranavaí", t:"rio"},
  {c:"Guairaçá", r:"Paranavaí"}, {c:"Inajá", r:"Paranavaí"},
  {c:"Itaúna do Sul", r:"Paranavaí", t:"rio"}, {c:"Jardim Olinda", r:"Paranavaí"},
  {c:"Loanda", r:"Paranavaí"}, {c:"Marilena", r:"Paranavaí", t:"rio"},
  {c:"Mirador", r:"Paranavaí"}, {c:"Nova Aliança do Ivaí", r:"Paranavaí"},
  {c:"Nova Londrina", r:"Paranavaí", t:"rio"}, {c:"Paraíso do Norte", r:"Paranavaí"},
  {c:"Paranapoema", r:"Paranavaí", t:"rio"}, {c:"Planaltina do Paraná", r:"Paranavaí"},
  {c:"Santa Cruz de Monte Castelo", r:"Paranavaí", t:"rio"},
  {c:"Santa Isabel do Ivaí", r:"Paranavaí", t:"rio"}, {c:"Santa Mônica", r:"Paranavaí"},
  {c:"Santo Antônio do Caiuá", r:"Paranavaí"}, {c:"São Carlos do Ivaí", r:"Paranavaí"},
  {c:"São João do Caiuá", r:"Paranavaí"}, {c:"Tamboara", r:"Paranavaí"},
  {c:"Terra Rica", r:"Paranavaí", t:"rio"},

  /* UMUARAMA */
  {c:"Altônia", r:"Umuarama", t:"rio"}, {c:"Alto Piquiri", r:"Umuarama"},
  {c:"Cafezal do Sul", r:"Umuarama"}, {c:"Douradina", r:"Umuarama"},
  {c:"Esperança Nova", r:"Umuarama"}, {c:"Francisco Alves", r:"Umuarama"},
  {c:"Iporã", r:"Umuarama"}, {c:"Ivaté", r:"Umuarama", t:"rio"},
  {c:"Maria Helena", r:"Umuarama"}, {c:"Mariluz", r:"Umuarama"},
  {c:"Nova Olímpia", r:"Umuarama"}, {c:"Perobal", r:"Umuarama"},
  {c:"Pérola", r:"Umuarama"}, {c:"Tapira", r:"Umuarama"}, {c:"Xambrê", r:"Umuarama"},

  /* CIANORTE */
  {c:"Cidade Gaúcha", r:"Cianorte"}, {c:"Guaporema", r:"Cianorte"},
  {c:"Indianópolis", r:"Cianorte"}, {c:"Japurá", r:"Cianorte"},
  {c:"Jussara", r:"Cianorte"}, {c:"Rondon", r:"Cianorte"},
  {c:"São Manoel do Paraná", r:"Cianorte"}, {c:"São Tomé", r:"Cianorte"},
  {c:"Tapejara", r:"Cianorte"}, {c:"Terra Boa", r:"Cianorte"},
  {c:"Tuneiras do Oeste", r:"Cianorte"},

  /* CAMPO MOURÃO */
  {c:"Altamira do Paraná", r:"Campo Mourão"}, {c:"Araruna", r:"Campo Mourão"},
  {c:"Barbosa Ferraz", r:"Campo Mourão"}, {c:"Boa Esperança", r:"Campo Mourão"},
  {c:"Campina da Lagoa", r:"Campo Mourão"}, {c:"Corumbataí do Sul", r:"Campo Mourão"},
  {c:"Engenheiro Beltrão", r:"Campo Mourão"}, {c:"Farol", r:"Campo Mourão"},
  {c:"Janiópolis", r:"Campo Mourão"}, {c:"Juranda", r:"Campo Mourão"},
  {c:"Luiziana", r:"Campo Mourão"}, {c:"Mamborê", r:"Campo Mourão"},
  {c:"Moreira Sales", r:"Campo Mourão"}, {c:"Nova Cantu", r:"Campo Mourão"},
  {c:"Quarto Centenário", r:"Campo Mourão"}, {c:"Quinta do Sol", r:"Campo Mourão"},
  {c:"Rancho Alegre d'Oeste", r:"Campo Mourão"}, {c:"Roncador", r:"Campo Mourão"},
  {c:"Ubiratã", r:"Campo Mourão"},

  /* MARINGÁ */
  {c:"Ângulo", r:"Maringá"}, {c:"Astorga", r:"Maringá"}, {c:"Atalaia", r:"Maringá"},
  {c:"Bom Sucesso", r:"Maringá"}, {c:"Cambira", r:"Maringá"},
  {c:"Doutor Camargo", r:"Maringá"}, {c:"Floraí", r:"Maringá"},
  {c:"Floresta", r:"Maringá"}, {c:"Flórida", r:"Maringá"}, {c:"Iguaraçu", r:"Maringá"},
  {c:"Itambé", r:"Maringá"}, {c:"Ivatuba", r:"Maringá"}, {c:"Jandaia do Sul", r:"Maringá"},
  {c:"Lobato", r:"Maringá"}, {c:"Mandaguaçu", r:"Maringá"}, {c:"Mandaguari", r:"Maringá"},
  {c:"Munhoz de Mello", r:"Maringá"}, {c:"Ourizona", r:"Maringá"},
  {c:"Paiçandu", r:"Maringá"}, {c:"Presidente Castelo Branco", r:"Maringá"},
  {c:"Sarandi", r:"Maringá"}, {c:"Santa Fé", r:"Maringá"},
  {c:"São Jorge do Ivaí", r:"Maringá"}, {c:"Uniflor", r:"Maringá"}
];

/* ---------- transforma cidade em nome de arquivo (slug) ---------- */
function slug(txt){
  return txt.toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g,"") // tira acentos
    .replace(/['’]/g,"").replace(/[^a-z0-9]+/g,"-") // troca símbolos por -
    .replace(/^-|-$/g,"");
}

/* paleta de cores para variar os cards genéricos */
const PALETA = [
  "linear-gradient(135deg,#0a5c3a,#0f8f57)",
  "linear-gradient(135deg,#0a3a6e,#1157a0)",
  "linear-gradient(135deg,#155e63,#2a9d8f)",
  "linear-gradient(135deg,#5a3d7a,#8a5fb0)",
  "linear-gradient(135deg,#8a5a2b,#c08b45)",
  "linear-gradient(135deg,#7d2b46,#b5546f)"
];

/* expande cada cidade genérica num ponto completo (para completar) */
function expandir(g, i){
  const cidade = g.c, regiao = g.r, rio = g.t === "rio";
  return {
    regiao, cidade,
    nome: rio ? "Beira-Rio e Áreas de Lazer" : "Igreja Matriz e Praça Central",
    emoji: rio ? "🏖️" : "⛪",
    cor: PALETA[i % PALETA.length],
    imagem: "imagens/" + slug(cidade) + ".jpg",
    mapa: rio ? (cidade + ", Paraná") : ("Igreja Matriz de " + cidade + ", Paraná"),
    pesquisar: true,
    subtitulo: rio
      ? "Cidade do Vale do Paraná, com acesso a rios e áreas de lazer aquático."
      : "Um passeio pelos principais pontos de " + cidade + ".",
    local: rio
      ? cidade + ", região dos rios do noroeste do Paraná."
      : "Centro de " + cidade + ", noroeste do Paraná.",
    epoca: rio
      ? "Verão e estação seca, para aproveitar as prainhas e a pesca."
      : "O ano todo; festas e eventos locais movimentam a cidade.",
    historia: rio
      ? "Município do Vale do Paraná, com acesso a balneários e áreas de pesca no rio."
      : "Um dos principais pontos de encontro e lazer da cidade, no noroeste do Paraná.",
    surgimento: "Município ligado à ocupação do noroeste e à cultura do café e da agricultura. ✏️ Confira o ano de fundação de " + cidade + ".",
    atividades: rio
      ? "Banho de rio, pesca e passeios de barco (confira os pontos abertos)."
      : "Passear, relaxar ao ar livre e conhecer a cultura local.",
    curiosidade: "✏️ Complete com uma curiosidade ou atração específica de " + cidade + "."
  };
}

/* ===================================================================
   CURADORIA DO USUÁRIO
   -------------------------------------------------------------------
   REMOVER: cidades tiradas do site (marcadas "Tira").
   CURADORIA: pontos reais encontrados no Google Maps. Cada cidade pode
   ter vários "locais" (viram vários botões "Ver no Google Maps").
   Para acrescentar: copie uma linha e cole o link curto do Maps.
   =================================================================== */
const REMOVER = new Set([
  // Paranavaí
  "Amaporã","Inajá","Mirador","Nova Aliança do Ivaí","Paranapoema",
  "Planaltina do Paraná","Querência do Norte","Santa Cruz de Monte Castelo",
  "Santa Mônica","Santo Antônio do Caiuá",
  "São Carlos do Ivaí","São João do Caiuá","São Pedro do Paraná","Tamboara",
  // Umuarama (nada turístico específico encontrado — confira se quiser)
  "Esperança Nova","Maria Helena","Perobal","Xambrê","Alto Piquiri",
  "Alto Paraíso","Cafezal do Sul","Francisco Alves",
  "Ivaté","Mariluz","Tapira",
  // Campo Mourão (nada turístico específico encontrado — confira se quiser)
  "Farol","Quarto Centenário",
  // Maringá (cidades muito pequenas, sem atração específica — confira se quiser)
  "Ângulo","Atalaia","Cambira","Floraí","Floresta","Flórida","Iguaraçu",
  "Itambé","Ivatuba","Lobato","Ourizona",
  // removidas a pedido
  "Uniflor","Indianópolis"
]);

const CURADORIA = {
  /* ---- PARANAVAÍ ---- */
  "Alto Paraná": { emoji:"⛪", credito:"Gabriel Brun da Silva", locais:[
    {nome:"Santuário de Santo Antônio", link:"https://maps.app.goo.gl/9eqmTFS2Ucawwxpy7"} ] },
  "Cruzeiro do Sul": { emoji:"🌳", locais:[
    {nome:"Parque Ecológico dos Pioneiros", link:"https://maps.app.goo.gl/q9yHxfCMGr7FbmXZ6"} ] },
  "Diamante do Norte": { emoji:"🌳", locais:[
    {nome:"Parque Urbano Diamante", link:"https://maps.app.goo.gl/PT58NTN4ToDD39ij6"} ] },
  "Guairaçá": { emoji:"⛲", locais:[
    {nome:"Praça Santa Terezinha", link:"https://maps.app.goo.gl/Yc9mWEMFm3CyyPGGA"} ] },
  "Itaúna do Sul": { emoji:"⛲", locais:[
    {nome:"Praça da Bandeira", link:"https://maps.app.goo.gl/M7YeXVkwoYYNv93e8"} ] },
  "Jardim Olinda": { emoji:"🌿", locais:[
    {nome:"Jardim Eco Parque", link:"https://maps.app.goo.gl/inpz7qXZQ3iYBBsW9"} ] },
  "Loanda": { emoji:"🏛️", locais:[
    {nome:"Centro Social Urbano", link:"https://maps.app.goo.gl/ZAFCw3RcEp2qRKdQ6"} ] },
  "Marilena": { emoji:"🌳", locais:[
    {nome:"Parque Iracema", link:"https://maps.app.goo.gl/7uFcNZBcjKVE7rtB7"} ] },
  "Nova Londrina": { emoji:"⛲", locais:[
    {nome:"Praça Santos Dumont", link:"https://maps.app.goo.gl/hppzhiiX9Z8xaWDB6"} ] },
  "Paraíso do Norte": { emoji:"🚣", locais:[
    {nome:"Lago Leste", link:"https://maps.app.goo.gl/Va7b9frR2AeRcqH4A"} ] },
  "Santa Isabel do Ivaí": { emoji:"🌳", locais:[
    {nome:"Parque Adão de Almeida Ramos", link:"https://maps.app.goo.gl/fYYxEM31ZEz93Qx88"} ] },
  "São Carlos do Ivaí": { emoji:"⛪", locais:[
    {nome:"Igreja Matriz", query:"Igreja Matriz de São Carlos do Ivaí, PR"} ] },
  "São João do Caiuá": { emoji:"⛪", locais:[
    {nome:"Igreja Matriz São João Batista", query:"Igreja Matriz São João Batista, São João do Caiuá, PR"} ] },
  "Tamboara": { emoji:"⛲", locais:[
    {nome:"Praça Isabel Marcos Beltrame", query:"Praça Isabel Marcos Beltrame, Tamboara, PR"} ] },
  "Terra Rica": { nome:"Terra Rica — Capital do Voo Livre", emoji:"🪂", locais:[
    {nome:"Parque de Exposições", link:"https://maps.app.goo.gl/K5J7GYdhycKHhG4Y7"},
    {nome:"Caverna do Sol Nascente (Toca do Índio)", link:"https://maps.app.goo.gl/SMFopZPhCdsWvALP9"},
    {nome:"Lagoa do Juca", link:"https://maps.app.goo.gl/fQZGJxqmuU8niv2j7"},
    {nome:"Zanato's Colônia", link:"https://maps.app.goo.gl/YtJzKcuqHLeCBbbV9"} ] },

  /* ---- UMUARAMA ---- */
  "Altônia": { emoji:"🏖️", locais:[
    {nome:"Prainha da Lagoa Xambrê", link:"https://maps.app.goo.gl/YLh9hVVu9pQURvZ6A"},
    {nome:"Pesqueiro Brejo Encantado", link:"https://maps.app.goo.gl/JoLqKppgmeknS8hS7"},
    {nome:"Marina (Jardim Paredão)", link:"https://maps.app.goo.gl/qJPJNhHfjfPA37LV6"} ] },
  "Cruzeiro do Oeste": { locais:[
    {nome:"Dinossauros de CDO", link:"https://maps.app.goo.gl/WPdsar2nVcQaFyweA"},
    {nome:"Museu de Paleontologia", link:"https://maps.app.goo.gl/H8KGft9KbnMQdbP69"},
    {nome:"Parque Municipal", link:"https://maps.app.goo.gl/sV4wqn6P7UhorAXQ9"},
    {nome:"Espaço Torres Lazer e Aventura", link:"https://maps.app.goo.gl/4tAv4H47U44vyGuS8"} ] },
  "Icaraíma": { locais:[
    {nome:"Balneário Porto Camargo", query:"Porto Camargo, Icaraíma, PR"},
    {nome:"Cachoeira com prainha", link:"https://maps.app.goo.gl/HZSfTR7xS8fuRJ2g9"},
    {nome:"Centro SIRI de Eventos", link:"https://maps.app.goo.gl/PXzh5FzWhcQVvaXc9"} ] },
  "São Jorge do Patrocínio": { locais:[
    {nome:"Prainha do Paracaí", link:"https://maps.app.goo.gl/XFxDESvw5dsPhg7b8"},
    {nome:"Recanto Alvorada", link:"https://maps.app.goo.gl/2umpKMraPWmzU4S39"} ] },
  "Umuarama": { nome:"Umuarama — principais pontos", locais:[
    {nome:"Lago Aratimbó", link:"https://maps.app.goo.gl/yWQD1WGWpb2cMLn38"},
    {nome:"Torre Eiffel de Umuarama", link:"https://maps.app.goo.gl/PWhy7T7nHqvGfMJB9"},
    {nome:"Parque de Exposições", link:"https://maps.app.goo.gl/YkAKPQaXtkVewDXFA"},
    {nome:"Praça JK / do Japão", link:"https://maps.app.goo.gl/NsccBkmm6pGhhfJs8"},
    {nome:"Praça Santos Dumont", link:"https://maps.app.goo.gl/j4BTZ3L5h2qfX71n9"},
    {nome:"Bosque Uirapuru", link:"https://maps.app.goo.gl/zpoXK2vnBFimvkRV7"},
    {nome:"Bosque dos Xetás (Do Índio)", link:"https://maps.app.goo.gl/eyqJoaRcJgo37Gd47"},
    {nome:"Cachoeira do Ventão", link:"https://maps.app.goo.gl/eEhe9P4ME6DFBaQ9A"},
    {nome:"Shopping Palladium", link:"https://maps.app.goo.gl/tYtPixBKHt9RmHot5"},
    {nome:"Cachoeira do Tarumã", link:"https://maps.app.goo.gl/yrM9bSBnQFxBhf358"} ] },
  "Alto Piquiri": { emoji:"🏞️", locais:[
    {nome:"Complexo Bica", query:"Complexo Bica, Alto Piquiri, PR"},
    {nome:"Parque Municipal", query:"Parque Municipal, Alto Piquiri, PR"} ] },
  "Cafezal do Sul": { emoji:"🏖️", locais:[
    {nome:"Praia Artificial (Lago)", query:"Praia Artificial, Cafezal do Sul, PR"},
    {nome:"Parque Municipal", query:"Parque Municipal, Cafezal do Sul, PR"} ] },
  "Douradina": { emoji:"🎪", locais:[
    {nome:"Arena Fepeina", link:"https://maps.app.goo.gl/sL9JbYsdsetvGUAd7"} ] },
  "Francisco Alves": { emoji:"🎸", locais:[
    {nome:"Portal de Francisco Alves", query:"Portal de Francisco Alves, PR"},
    {nome:"Parque Florestal Enio Pepino", query:"Parque Florestal Enio Pepino, Francisco Alves, PR"} ] },
  "Iporã": { emoji:"🌳", locais:[
    {nome:"Praça das Nações Unidas", link:"https://maps.app.goo.gl/zY8MPQfLFLqGgHQC6"},
    {nome:"Parque Primavera", link:"https://maps.app.goo.gl/kJ2kDkJinpc54cu3A"} ] },
  "Ivaté": { emoji:"🎣", locais:[
    {nome:"Balneário Rancho Arara Azul", query:"Balneário Rancho Arara Azul, Ivaté, PR"},
    {nome:"Rio Ivaí", query:"Rio Ivaí, Ivaté, PR"} ] },
  "Mariluz": { emoji:"💧", locais:[
    {nome:"Cachoeira São Luiz", query:"Cachoeira São Luiz, Mariluz, PR"},
    {nome:"Paróquia Santo Antônio", query:"Paróquia Santo Antônio, Mariluz, PR"} ] },
  "Nova Olímpia": { emoji:"🚣", locais:[
    {nome:"Lago Municipal", link:"https://maps.app.goo.gl/zqqEBCz32ASuuuHR9"} ] },
  "Pérola": { emoji:"🎪", locais:[
    {nome:"Expo Pérola (Festa do Peão)", link:"https://maps.app.goo.gl/d7H8NV3Woj4QFTpt5"},
    {nome:"Praça Nelo Mazini", link:"https://maps.app.goo.gl/9bPLCyFSw5ZvbF5q7"} ] },
  "Tapira": { emoji:"🌳", locais:[
    {nome:"Bosque do Leão", query:"Bosque do Leão, Tapira, PR"},
    {nome:"Rio Ivaí", query:"Rio Ivaí, Tapira, PR"} ] },

  /* ---- CIANORTE ---- */
  "Cianorte": { nome:"Pontos de Cianorte", locais:[
    {nome:"Parque Cinturão Verde", link:"https://maps.app.goo.gl/TeRR1oDUcqoLkvW39"},
    {nome:"Parque Mandhuy (Faustino Celestino)", link:"https://maps.app.goo.gl/2ymSSeQHnquH3Khq7"},
    {nome:"Bosque da Matriz", link:"https://maps.app.goo.gl/WBAWJt7NuoULNTmg9"},
    {nome:"Praça Francisco Kano", link:"https://maps.app.goo.gl/WvnFGDERtWNwHPKx9"},
    {nome:"Pesque e Pague do César", link:"https://maps.app.goo.gl/ZPeBW12sKajHhknv5"} ] },
  "Cidade Gaúcha": { emoji:"🌳", locais:[
    {nome:"Bosque do Leão", link:"https://maps.app.goo.gl/rzzfNjmAL7VaHkB29"},
    {nome:"Cachoeira do Miquilim", link:"https://maps.app.goo.gl/zCG8ibp2pHKxsvmz5"} ] },
  "Guaporema": { emoji:"⛪", credito:"Leandro Manso", locais:[
    {nome:"Paróquia São José", link:"https://maps.app.goo.gl/ih2JxLuBxD7G59Sa7"} ] },
  "Indianópolis": { emoji:"💧", locais:[
    {nome:"Cachoeira dos Índios", query:"Cachoeira dos Índios, Indianópolis, PR"},
    {nome:"Praça Central", query:"Praça Central, Indianópolis, PR"} ] },
  "Japurá": { emoji:"⛪", locais:[
    {nome:"Paróquia São Sebastião", link:"https://maps.app.goo.gl/1vAtEhGKhmst7un4A"} ] },
  "Jussara": { emoji:"💧", locais:[
    {nome:"Cachoeira do Gelo", link:"https://maps.app.goo.gl/26iXgHMM1GiPdGZE6"} ] },
  "Rondon": { emoji:"💧", locais:[
    {nome:"Parque Urbano Vale Verde", link:"https://maps.app.goo.gl/sCkGMUX2HLaN5Raw7"},
    {nome:"Praça dos Pioneiros", link:"https://maps.app.goo.gl/ctFgjTmtf3o8rag36"},
    {nome:"Cachoeira Usina Velha", link:"https://maps.app.goo.gl/b9hFs56RhGUTHKQG9"} ] },
  "São Manoel do Paraná": { emoji:"🌳", credito:"Henrique Barbosa", locais:[
    {nome:"Reserva Ecológica Caraguatatiba", link:"https://maps.app.goo.gl/vpXF8r8P9ZiueHL68", query:"Reserva Ecológica Caraguatatiba da Divisa, São Manoel do Paraná, PR"} ] },
  "São Tomé": { emoji:"🌳", locais:[
    {nome:"Parque Ecológico", query:"Parque Ecológico de São Tomé, PR"},
    {nome:"Museu da Cidade", query:"Museu da Cidade, São Tomé, PR"} ] },
  "Tapejara": { emoji:"🌳", locais:[
    {nome:"Parque Municipal", query:"Parque Municipal, Tapejara, PR"},
    {nome:"Museu Municipal", query:"Museu Municipal, Tapejara, PR"} ] },
  "Terra Boa": { emoji:"🌳", locais:[
    {nome:"Bosque Municipal", query:"Bosque Municipal, Terra Boa, PR"},
    {nome:"Praça do Japão", query:"Praça do Japão, Terra Boa, PR"} ] },
  "Tuneiras do Oeste": { emoji:"🌳", locais:[
    {nome:"Parque Ecológico Mata do Cedro", query:"Parque Ecológico Mata do Cedro, Tuneiras do Oeste, PR"},
    {nome:"Reserva Biológica das Perobas", query:"Reserva Biológica das Perobas, PR"} ] },

  /* ---- CAMPO MOURÃO ---- */
  "Altamira do Paraná": { emoji:"💧", locais:[
    {nome:"Parque Ecológico", query:"Parque Ecológico, Altamira do Paraná, PR"},
    {nome:"Cachoeira do Bico da Seda", query:"Cachoeira do Bico da Seda, Altamira do Paraná, PR"} ] },
  "Araruna": { emoji:"🦜", locais:[
    {nome:"Praça Central (Arara Azul)", query:"Praça Central, Araruna, PR"},
    {nome:"Igreja Matriz Santo Antônio", query:"Igreja Matriz Santo Antônio, Araruna, PR"} ] },
  "Barbosa Ferraz": { emoji:"🌳", locais:[
    {nome:"Parque Verde Vida", query:"Parque Verde Vida, Barbosa Ferraz, PR"} ] },
  "Boa Esperança": { emoji:"🦆", locais:[
    {nome:"Parque do Lago", query:"Parque Ecológico Olivo Fortunato Gaspareli, Boa Esperança, PR"} ] },
  "Campina da Lagoa": { emoji:"🌳", locais:[
    {nome:"Parque Natural Lagoa Nova", query:"Parque Natural Municipal Lagoa Nova, Campina da Lagoa, PR"},
    {nome:"Praça João XXIII", query:"Praça João XXIII, Campina da Lagoa, PR"} ] },
  "Corumbataí do Sul": { emoji:"⛰️", locais:[
    {nome:"Morro do Cristo", query:"Morro do Cristo, Corumbataí do Sul, PR"},
    {nome:"Cachoeira do Cuscuzeiro", query:"Cachoeira do Cuscuzeiro, Corumbataí do Sul, PR"} ] },
  "Engenheiro Beltrão": { emoji:"🌳", locais:[
    {nome:"Parque da Gruta", query:"Parque da Gruta, Engenheiro Beltrão, PR"},
    {nome:"Santuário Rosa Mística", query:"Santuário Nossa Senhora da Rosa Mística, Engenheiro Beltrão, PR"} ] },
  "Janiópolis": { emoji:"🌳", locais:[
    {nome:"Parque Urbano", query:"Parque Urbano, Janiópolis, PR"} ] },
  "Juranda": { emoji:"⛪", locais:[
    {nome:"Parque Urbano", query:"Parque Urbano, Juranda, PR"},
    {nome:"Igreja Matriz", query:"Igreja Matriz, Juranda, PR"} ] },
  "Luiziana": { emoji:"💧", locais:[
    {nome:"Parque Estadual Lago Azul", query:"Parque Estadual Lago Azul, Luiziana, PR"},
    {nome:"Cachoeira Salto Belo", query:"Cachoeira Salto Belo, Luiziana, PR"} ] },
  "Mamborê": { emoji:"🚣", locais:[
    {nome:"Parque do Lago Armando Alves de Souza", query:"Parque do Lago Armando Alves de Souza, Mamborê, PR"} ] },
  "Moreira Sales": { emoji:"🌳", locais:[
    {nome:"Parque Ecológico", query:"Parque Ecológico de Moreira Sales, PR"},
    {nome:"Praça Eurydes Romano", query:"Praça Municipal Eurydes Romano, Moreira Sales, PR"} ] },
  "Nova Cantu": { emoji:"💧", locais:[
    {nome:"Cachoeira do Zuza", query:"Cachoeira do Zuza, Nova Cantu, PR"},
    {nome:"Rio Cantu", query:"Rio Cantu, Nova Cantu, PR"} ] },
  "Quinta do Sol": { emoji:"🌳", locais:[
    {nome:"Parque Municipal", query:"Parque Municipal de Quinta do Sol, PR"},
    {nome:"Estátua de Cristo", query:"Praça Igreja Matriz São Judas Tadeu, Quinta do Sol, PR"} ] },
  "Rancho Alegre d'Oeste": { emoji:"🌳", locais:[
    {nome:"Parque Ecológico Municipal", query:"Parque Ecológico Municipal, Rancho Alegre d'Oeste, PR"},
    {nome:"Lago Municipal", query:"Lago Municipal, Rancho Alegre d'Oeste, PR"} ] },
  "Roncador": { emoji:"⛪", locais:[
    {nome:"Igreja Ucraniana", query:"Igreja Ucraniana, Roncador, PR"},
    {nome:"Cachoeiras de Roncador", query:"Cachoeira, Roncador, PR"} ] },
  "Ubiratã": { emoji:"🚣", locais:[
    {nome:"Lago Municipal", query:"Lago Municipal de Ubiratã, PR"},
    {nome:"Parque dos Ipês", query:"Parque dos Ipês, Ubiratã, PR"} ] },

  /* ---- MARINGÁ (região) ---- */
  "Maringá": { locais:[
    {nome:"Catedral de Maringá", query:"Catedral de Maringá, Paraná"},
    {nome:"Parque do Ingá", query:"Parque do Ingá, Maringá, Paraná"},
    {nome:"Parque do Japão", query:"Parque do Japão, Maringá, Paraná"},
    {nome:"Bosque dos Pioneiros", query:"Parque Florestal dos Pioneiros Bosque 2, Maringá"} ] },
  "Astorga": { emoji:"🎸", locais:[
    {nome:"Parque Lago Azul", query:"Parque Lago Azul, Astorga, PR"},
    {nome:"Portal Chitãozinho e Xororó", query:"Portal Chitãozinho e Xororó, Astorga, PR"} ] },
  "Bom Sucesso": { emoji:"🌲", locais:[
    {nome:"Parque das Araucárias", query:"Parque Municipal das Araucárias, Bom Sucesso, PR"},
    {nome:"Museu Histórico", query:"Museu Histórico de Bom Sucesso, PR"} ] },
  "Doutor Camargo": { emoji:"🎣", locais:[
    {nome:"Recanto do Ivaí", query:"Recanto do Ivaí, Doutor Camargo, PR"},
    {nome:"Rio Ivaí", query:"Rio Ivaí, Doutor Camargo, PR"} ] },
  "Jandaia do Sul": { emoji:"🚣", locais:[
    {nome:"Parque Ambiental (Lago Municipal)", query:"Parque Ambiental Dr. Clóvis de Souza Pinto, Jandaia do Sul, PR"},
    {nome:"Praça do Café", query:"Praça do Café, Jandaia do Sul, PR"} ] },
  "Mandaguaçu": { emoji:"🌳", locais:[
    {nome:"Parque Lagoa Dourada", query:"Parque Lagoa Dourada, Mandaguaçu, PR"},
    {nome:"Parque das Grevíleas", query:"Parque das Grevíleas, Mandaguaçu, PR"} ] },
  "Mandaguari": { emoji:"🌳", locais:[
    {nome:"Parque da Pedreira", query:"Parque da Pedreira, Mandaguari, PR"},
    {nome:"Parque Municipal", query:"Parque Municipal, Mandaguari, PR"} ] },
  "Munhoz de Mello": { emoji:"🌳", locais:[
    {nome:"Parque Municipal", query:"Parque Municipal, Munhoz de Mello, PR"},
    {nome:"Igreja Matriz São Sebastião", query:"Igreja Matriz São Sebastião, Munhoz de Mello, PR"} ] },
  "Paiçandu": { emoji:"⛪", locais:[
    {nome:"Prainha São Carlos (Água Boa)", query:"Prainha São Carlos, Água Boa, Paiçandu, PR"},
    {nome:"Igreja Santa Cura D'Ars", query:"Igreja Santa Cura D'Ars, Paiçandu, PR"} ] },
  "Presidente Castelo Branco": { emoji:"🌳", locais:[
    {nome:"Parque Ecológico", query:"Parque Ecológico, Presidente Castelo Branco, PR"},
    {nome:"Igreja Matriz", query:"Igreja Matriz Nossa Senhora Aparecida, Presidente Castelo Branco, PR"} ] },
  "Sarandi": { emoji:"🚣", locais:[
    {nome:"Parque do Lago", query:"Parque do Lago, Sarandi, PR"},
    {nome:"Praça dos Pioneiros", query:"Praça dos Pioneiros, Sarandi, PR"} ] },
  "Santa Fé": { emoji:"⛲", locais:[
    {nome:"Praça Central (Centro Histórico)", query:"Praça Central, Santa Fé, PR"}, 
    {nome:"Salto Bandeirantes", link:"https://maps.app.goo.gl/GuWK433rqoiQwrsZ8", query:"Salto Bandeirantes, Santa Fé, PR"},
    {nome:"Balneário Rossi", link:"https://maps.app.goo.gl/XWrCzexvhQPW4yEi9", query:"Balneário Rossi, Santa Fé, PR"}] },
  "São Jorge do Ivaí": { emoji:"🦕", credito:"via Google Maps", locais:[
    {nome:"Park dos Dinossauros", link:"https://maps.app.goo.gl/QneB2LZFcf335Fff6"},
    {nome:"Parque Ambiental do Ribeirão Itamaraty", link:"https://maps.app.goo.gl/UVqu73xBoCFHeqLm6"},
    {nome:"Paróquia São Jorge", link:"https://maps.app.goo.gl/QoDRfaYAvn8EAdMZ8"} ] },
  "Paranavaí": { nome:"Pontos de Paranavaí", emoji:"🏙️", locais:[
    {nome:"Centro (Cidade Poesia)", link:"https://maps.app.goo.gl/MTY8jYmLxeT73QxYA"},
    {nome:"Pedalinho Ouro Preto", link:"https://maps.app.goo.gl/e9tt9yTj4YtxQavF8"},
    {nome:"Bosque Municipal", link:"https://maps.app.goo.gl/ujASAvPET5VA73mb6"} ] },
  "Porto Rico": { locais:[
    {nome:"Porto Rico Aqua Park", link:"https://maps.app.goo.gl/7JvhASVgLhw2ze6YA"},
    {nome:"Prainha de Porto Rico", link:"https://maps.app.goo.gl/Dwjpu3gHdryoqesi6"} ] }
};

/* aplica a curadoria a um ponto */
function aplicarCuradoria(p){
  const cur = CURADORIA[p.cidade];
  if(!cur) return p;
  p.locais = cur.locais;
  if(cur.credito) p.credito = cur.credito;
  if(cur.emoji) p.emoji = cur.emoji;
  else if(cur.locais[0] && cur.locais[0].emoji) p.emoji = cur.locais[0].emoji;
  if(cur.nome) p.nome = cur.nome;
  else if(p.pesquisar) p.nome = cur.locais.length > 1 ? ("Pontos de " + p.cidade) : cur.locais[0].nome;
  return p;
}

/* ---------- ordem fixa das microrregiões (usada só nos filtros) ---------- */
const ordemRegiao = ["Maringá","Paranavaí","Umuarama","Cianorte","Campo Mourão"];

/* embaralha (Fisher-Yates): as cidades aparecem em ordem ALEATÓRIA a cada visita */
function embaralhar(arr){
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
/* ---- textos das cidades genéricas [historia, emancipação, o que fazer, curiosidade] ---- */
const TEXTOS = {
  // Maringá
  "Astorga":["Desenvolveu-se com a colonização agrícola do norte paranaense, especialmente no período de expansão do café. A abertura de estradas e a chegada de famílias agricultoras formaram o núcleo urbano.","Emancipado em 1951.","Visitar a área central, igrejas, praças, festas tradicionais, comércio e propriedades rurais.","Seu nome faz referência à cidade espanhola de Astorga."],
  "Bom Sucesso":["Formou-se durante a ocupação agrícola do norte do Paraná, marcada pela abertura de estradas, loteamento de terras e chegada de migrantes.","Emancipado em 1954.","Conhecer igrejas, praças, festas religiosas, propriedades rurais e atividades comunitárias.","O nome 'Bom Sucesso' tem forte inspiração religiosa e transmite ideia de prosperidade."],
  "Doutor Camargo":["Desenvolveu-se a partir de comunidades agrícolas e pequenos núcleos rurais ligados à expansão das lavouras no norte do Paraná.","Emancipado em 1964.","Conhecer praças, igrejas, propriedades rurais, festas e a paisagem agrícola.","O nome homenageia uma personalidade pública chamada Camargo."],
  "Jandaia do Sul":["Cresceu com a cafeicultura, a colonização agrícola e as rotas ferroviárias e rodoviárias que integraram o norte do Paraná.","Emancipado em 1951.","Conhecer igrejas, praças, comércio, festas e o patrimônio local.","'Jandaia' é o nome de uma ave brasileira."],
  "Mandaguaçu":["Desenvolveu-se com a colonização agrícola e a expansão da área de influência de Maringá, tornando-se parte importante da rede urbana regional.","Emancipado em 1951.","Conhecer propriedades rurais, igrejas, praças, festas e o comércio local.","Nome de origem indígena, associado à expressão 'abelha grande'."],
  "Mandaguari":["Cresceu com a cafeicultura, a colonização e as rotas de transporte do norte do Paraná; antes de Maringá, já era um núcleo importante de circulação regional.","Emancipado em 1947.","Visitar igrejas, praças, comércio, festas e propriedades rurais.","Foi núcleo importante na ocupação regional antes do crescimento de Maringá."],
  "Munhoz de Mello":["Formou-se durante a colonização agrícola do norte do Paraná, com propriedades rurais e comunidades ao redor de estradas e serviços locais.","Emancipado em 1955.","Conhecer praças, igrejas, festas e propriedades rurais.","O nome homenageia uma autoridade pública."],
  "Paiçandu":["Desenvolveu-se como núcleo agrícola e residencial próximo a Maringá; o crescimento urbano e a integração com a cidade-polo moldaram sua economia.","Emancipado em 1960.","Conhecer igrejas, praças, comércio, festas e eventos culturais.","É uma das cidades mais integradas à área urbana e econômica de Maringá."],
  "Presidente Castelo Branco":["Formou-se durante a colonização agrícola do norte do Paraná, com a abertura de lotes e a formação de comunidades rurais.","Emancipado em 1964.","Visitar o centro, praças, igrejas, festas e propriedades rurais.","O nome homenageia Humberto de Alencar Castelo Branco."],
  "Sarandi":["Cresceu como núcleo urbano ligado à expansão de Maringá e à ocupação agrícola regional, tornando-se densamente integrada à rede metropolitana.","Emancipado em 1981.","Conhecer praças, igrejas, comércio, restaurantes e eventos locais.","É uma das cidades mais populosas e urbanizadas do entorno de Maringá."],
  "Santa Fé":["Surgiu com a colonização agrícola e a expansão das lavouras, com a construção de igrejas, estradas e estruturas de atendimento aos moradores.","Emancipado em 1951.","Conhecer igrejas, praças, festas religiosas, comércio e áreas rurais.","O nome tem forte referência religiosa."],
  "São Jorge do Ivaí":["Desenvolveu-se com a agricultura e a ocupação rural nas proximidades do rio Ivaí, que influenciou o nome e a paisagem do município.","Emancipado em 1960.","Fazer passeios rurais, visitar igrejas, praças e áreas próximas ao rio.","O nome combina a homenagem a São Jorge com a referência ao rio Ivaí."],
  // Paranavaí
  "Alto Paraná":["Surgiu com a colonização agrícola e a expansão das lavouras no noroeste, acompanhada pela abertura de estradas e formação de comunidades rurais.","Emancipado em 1954.","Conhecer praças, igrejas, festas e propriedades rurais.","O nome faz referência à posição elevada e ao rio Paraná."],
  "Cruzeiro do Sul":["Formou-se durante a colonização agrícola do noroeste paranaense, com a chegada de famílias, abertura de estradas e implantação de serviços.","Emancipado em 1954.","Conhecer praças, igrejas, festas e paisagens rurais.","O nome faz referência à constelação do Cruzeiro do Sul."],
  "Diamante do Norte":["Surgiu durante a expansão agrícola e a colonização das terras do norte do Paraná, ligado à criação de novos núcleos agrícolas.","Emancipado em 1964.","Visitar praças, igrejas, festas e propriedades rurais.","O nome faz alusão à ideia de riqueza e valor."],
  "Guairaçá":["Desenvolveu-se com a agricultura e a abertura de caminhos que conectaram as comunidades do noroeste.","Emancipado em 1954.","Conhecer igrejas, praças, festas e propriedades agrícolas.","O nome é de origem indígena."],
  "Itaúna do Sul":["Formou-se durante a ocupação agrícola do noroeste paranaense, com a criação de propriedades e comunidades rurais.","Emancipado em 1964.","Conhecer praças, igrejas, festas e paisagens rurais.","'Itaúna' tem origem indígena, associada à ideia de pedra escura."],
  "Jardim Olinda":["Surgiu como comunidade de colonização rural, com pequenas propriedades agrícolas; o crescimento da população levou à criação do município.","Emancipado em 1964.","Visitar praças, igrejas, festas e propriedades rurais.","Está entre os menores municípios do Paraná em população."],
  "Loanda":["Cresceu com a colonização agrícola e passou a exercer função comercial e de serviços para municípios próximos, consolidando-se como polo urbano.","Emancipado em 1954.","Conhecer o centro, igrejas, praças, comércio, restaurantes e eventos culturais.","É um importante polo regional do extremo noroeste do Paraná."],
  "Marilena":["Desenvolveu-se próximo ao rio Paraná, com agricultura, pesca e ocupação ribeirinha; a paisagem fluvial é parte importante de sua identidade.","Emancipado em 1964.","Pescar, visitar áreas ribeirinhas, fazer passeios de barco e conhecer ilhas e praias de água doce.","A cidade está ligada à paisagem das ilhas e águas do rio Paraná."],
  "Nova Londrina":["Desenvolveu-se com a chegada de migrantes e a colonização agrícola, em contexto de expansão das lavouras e criação de novos núcleos urbanos.","Emancipado em 1954.","Conhecer praças, igrejas, comércio, festas e propriedades rurais.","Recebeu seu nome em referência a Londrina, no norte do Paraná."],
  "Paraíso do Norte":["Surgiu com a expansão agrícola e a ocupação de terras produtivas, crescendo com a criação de propriedades e serviços básicos.","Emancipado em 1954.","Visitar praças, igrejas, festas, comércio e zona rural.","O nome foi escolhido para transmitir ideia de beleza e fertilidade."],
  "Santa Isabel do Ivaí":["Formou-se com a colonização agrícola e a ocupação das terras próximas ao rio Ivaí, com a agricultura e a vida rural no centro do desenvolvimento.","Emancipado em 1964.","Conhecer igrejas, praças, festas e propriedades rurais.","O nome homenageia Santa Isabel e faz referência ao rio Ivaí."],
  "Terra Rica":["Surgiu com a colonização agrícola e a exploração das terras férteis do noroeste; a agricultura foi central para sua formação econômica.","Emancipado em 1954.","Conhecer a zona rural, praças, igrejas, festas e propriedades agrícolas.","O nome destaca a fertilidade e o potencial produtivo das terras."],
  // Umuarama
  "Altônia":["Formou-se durante a colonização agrícola do extremo noroeste, mantendo relação com as paisagens do rio Paraná; agricultura e vias de acesso impulsionaram seu crescimento.","Emancipada em 1964.","Conhecer áreas rurais, rios, parques e atrativos naturais próximos ao rio Paraná.","É uma das portas de entrada para o turismo de natureza do extremo noroeste."],
  "Douradina":["Desenvolveu-se com a colonização agrícola e a formação de pequenas propriedades; o nome remete a uma terra produtiva e valorizada.","Emancipada em 1986.","Visitar praças, igrejas, festas e propriedades rurais.","O nome está associado à ideia de uma terra dourada."],
  "Iporã":["Formou-se durante a colonização agrícola e a expansão das lavouras; o núcleo urbano cresceu com serviços, comércio e vias de ligação.","Emancipado em 1961.","Conhecer praças, igrejas, comércio, festas e propriedades rurais.","'Iporã' é uma expressão tupi associada à ideia de 'água bonita'."],
  "Nova Olímpia":["Surgiu durante a colonização agrícola e a expansão das lavouras; o nome faz referência à antiga Olímpia, da história grega.","Emancipado em 1964.","Conhecer praças, igrejas, festas e propriedades rurais.","O nome remete à cidade histórica de Olímpia, na Grécia."],
  "Pérola":["Desenvolveu-se com a colonização agrícola e o crescimento das lavouras; o nome foi escolhido para transmitir valor, beleza e singularidade.","Emancipada em 1964.","Conhecer praças, igrejas, comércio, festas e propriedades rurais.","O nome simboliza valor e beleza."],
  // Cianorte
  "Cidade Gaúcha":["Surgiu durante a colonização agrícola, com forte presença de famílias migrantes, incluindo pessoas vindas do Rio Grande do Sul.","Emancipada em 1961.","Conhecer praças, igrejas, festas tradicionais e propriedades rurais.","O nome faz referência à presença de colonizadores gaúchos."],
  "Guaporema":["Desenvolveu-se com a ocupação agrícola e a formação de pequenos núcleos rurais, acompanhada da organização administrativa local.","Emancipada em 1961.","Passear pelo centro, visitar a igreja, praças, festas e zona rural.","O nome tem origem indígena."],
  "Japurá":["Surgiu com a colonização agrícola e a expansão das lavouras; a formação de comunidades rurais e os serviços levaram à emancipação.","Emancipada em 1961.","Visitar praças, igrejas, festas e áreas rurais.","Japurá também é o nome de um rio da região amazônica."],
  "Jussara":["Desenvolveu-se com a colonização agrícola e a formação de núcleos rurais, com a agricultura e a organização comunitária no centro do crescimento.","Emancipada em 1958.","Conhecer a praça central, igrejas, festas, comércio e propriedades rurais.","Jussara é o nome de uma palmeira nativa da Mata Atlântica."],
  "Rondon":["Cresceu com a colonização agrícola e a abertura de vias de ligação regional; o nome homenageia o marechal Cândido Rondon.","Emancipado em 1955.","Visitar praças, igrejas, festas, comércio e propriedades rurais.","Homenageia o marechal Rondon, conhecido pela integração territorial e defesa dos povos indígenas."],
  "São Manoel do Paraná":["Formou-se com a ocupação agrícola e a organização de comunidades rurais; os serviços locais favoreceram a estruturação do município.","Emancipado em 1961.","Conhecer a igreja, praças, festas e propriedades rurais.","O nome combina uma referência religiosa com a identificação estadual."],
  "São Tomé":["Surgiu durante a colonização agrícola do noroeste paranaense, com a formação de propriedades e comunidades rurais.","Emancipado em 1961.","Visitar igrejas, participar de festas religiosas e conhecer a zona rural.","O nome é uma referência ao apóstolo São Tomé."],
  "Tapejara":["Desenvolveu-se com a agricultura, a colonização e a formação de pequenas propriedades, preservando uma referência de origem indígena no nome.","Emancipado em 1964.","Conhecer praças, igrejas, eventos e paisagens rurais.","'Tapejara' é um topônimo de origem indígena."],
  "Terra Boa":["Formou-se durante a colonização agrícola e destacou-se pela fertilidade das terras; a agricultura foi fundamental para seu crescimento.","Emancipado em 1955.","Visitar praças, igrejas, festas, comércio e propriedades rurais.","O próprio nome destaca a qualidade agrícola do solo."],
  "Tuneiras do Oeste":["Surgiu com a ocupação agrícola e a abertura de estradas no noroeste; o desenvolvimento das comunidades rurais levou à criação do município.","Emancipado em 1964.","Conhecer a zona rural, igrejas, praças, festas e eventos locais.","O nome está associado às 'tunas', plantas conhecidas regionalmente."],
  // Campo Mourão
  "Altamira do Paraná":["Surgiu com a colonização agrícola e a formação de comunidades rurais, acompanhando a expansão das lavouras e a abertura de estradas.","Emancipado em 1979.","Conhecer praças, igrejas, festas e propriedades rurais.","O nome remete à ideia de lugar alto ou de bela vista."],
  "Araruna":["Desenvolveu-se com a expansão agrícola e a colonização do centro-oeste paranaense, com propriedades rurais e serviços locais.","Emancipada em 1955.","Visitar praças, igrejas, festas e áreas rurais.","'Araruna' é um nome indígena associado à arara-preta."],
  "Barbosa Ferraz":["Formou-se com a ocupação agrícola e a abertura de estradas, crescendo com a produção rural e a organização das comunidades.","Emancipado em 1960.","Conhecer praças, igrejas, eventos, propriedades rurais e comércio local.","Homenageia uma personalidade política paranaense."],
  "Boa Esperança":["Surgiu durante a colonização agrícola e o crescimento das lavouras; recebeu o nome em referência às expectativas dos primeiros moradores.","Emancipado em 1964.","Visitar igrejas, praças, festas e propriedades rurais.","O nome representa a esperança dos colonizadores no desenvolvimento local."],
  "Campina da Lagoa":["Desenvolveu-se com a colonização agrícola e a formação de núcleos rurais; a denominação remete às características da paisagem local.","Emancipado em 1964.","Conhecer a praça, igrejas, festas, áreas rurais e paisagens próximas a cursos d'água.","O nome combina a ideia de campina com a presença de uma lagoa."],
  "Corumbataí do Sul":["Formou-se com a colonização agrícola e a ocupação das áreas próximas ao rio Corumbataí, que influenciou a identidade do município.","Emancipado em 1989.","Conhecer rios, áreas rurais, igrejas, praças e festas locais.","O nome faz referência ao rio Corumbataí e à localização ao sul da região."],
  "Engenheiro Beltrão":["Surgiu com a expansão agrícola e a construção de vias de transporte; as lavouras e a circulação regional favoreceram o crescimento.","Emancipado em 1954.","Visitar praças, igrejas, eventos e propriedades rurais.","O nome homenageia um engenheiro ligado ao desenvolvimento regional."],
  "Janiópolis":["Formou-se com a colonização agrícola e a organização de núcleos rurais; o nome homenageia Jânio Quadros.","Emancipado em 1960.","Visitar praças, igrejas, festas e propriedades rurais.","O nome homenageia Jânio Quadros, presidente do Brasil em 1961."],
  "Juranda":["Desenvolveu-se com a ocupação agrícola e a formação de pequenas propriedades; a comunidade cresceu com estradas e serviços.","Emancipada em 1982.","Conhecer praças, igrejas, festas e áreas rurais.","O nome tem origem indígena."],
  "Luiziana":["Formou-se durante a colonização agrícola e a expansão da produção rural; a organização das comunidades levou à criação do município.","Emancipada em 1987.","Visitar igrejas, praças, festas e propriedades rurais.","O nome é uma homenagem de caráter pessoal e histórico."],
  "Mamborê":["Surgiu com a colonização agrícola e as rotas de ligação com Campo Mourão e outras cidades; lavouras e comunidades favoreceram sua emancipação.","Emancipado em 1960.","Conhecer praças, igrejas, eventos e propriedades rurais.","'Mamborê' é um topônimo de origem indígena."],
  "Moreira Sales":["Desenvolveu-se com a colonização agrícola e o crescimento das lavouras; o nome homenageia uma personalidade regional.","Emancipado em 1960.","Visitar praças, igrejas, festas e propriedades rurais.","Recebeu o nome em homenagem a uma personalidade regional."],
  "Nova Cantu":["Formou-se com a colonização agrícola e a criação de pequenas propriedades, organizada a partir do crescimento das comunidades rurais.","Emancipada em 1964.","Conhecer praças, igrejas, festas e propriedades rurais.","O nome faz referência a Cantu, cidade da Itália."],
  "Quinta do Sol":["Desenvolveu-se com a ocupação agrícola e a formação de núcleos rurais, com a agricultura no centro do crescimento da comunidade.","Emancipado em 1964.","Conhecer igrejas, praças, festas e propriedades rurais.","O nome remete a uma paisagem ensolarada."],
  "Rancho Alegre d'Oeste":["Formou-se com a colonização agrícola e a abertura de estradas rurais; o nome transmite a ideia de um lugar acolhedor a oeste.","Emancipado em 1990.","Visitar praças, igrejas, festas e propriedades rurais.","O nome combina a ideia de rancho acolhedor com a posição a oeste."],
  "Roncador":["Surgiu com a colonização agrícola e a ocupação de áreas de relevo ondulado; a paisagem, os rios e as comunidades marcaram o desenvolvimento.","Emancipado em 1960.","Conhecer a zona rural, praças, igrejas, festas e áreas naturais.","O nome é frequentemente associado ao som de rios ou quedas d'água."],
  "Ubiratã":["Desenvolveu-se com a colonização agrícola, sobretudo a partir da década de 1950; lavouras, estradas e serviços consolidaram a cidade como centro regional.","Emancipado em 1961.","Visitar praças, parques, igrejas, festas e propriedades rurais.","'Ubiratã' é um nome tupi associado a 'lança forte' ou 'madeira dura'."]
};
function aplicarTextos(p){
  const t = TEXTOS[p.cidade];
  if(!t) return p;
  p.historia = t[0]; p.surgimento = t[1]; p.atividades = t[2]; p.curiosidade = t[3];
  p.pesquisar = false;
  p.epoca = p.cidade === "Marilena"
    ? "Novembro a março, na temporada das praias do Rio Paraná."
    : "Abril a setembro, quando o clima fica mais ameno e seco.";
  return p;
}

const _vistos = new Set();
const pontos = embaralhar(
  [...destaques, ...genericas.map(expandir)]
    .filter(p => !REMOVER.has(p.cidade))
    .map(aplicarCuradoria)
    .map(aplicarTextos)
    // um card por cidade (mantém o primeiro; junta os pontos via CURADORIA)
    .filter(p => _vistos.has(p.cidade) ? false : (_vistos.add(p.cidade), true))
    // anexa os LUGARES REAIS (Google Maps) e usa a foto do lugar top como
    // imagem do card; se a cidade não tiver lugar verificado, cai na bandeira.
    .map(p => {
      const lg = (typeof LUGARES !== "undefined" && LUGARES[p.cidade]) ? LUGARES[p.cidade] : [];
      p.lugares = lg;
      if (lg.length && lg[0].foto) {
        p.imagem = lg[0].foto;          // foto do lugar mais relevante (Google)
        p.credito = "Google Maps";
      } else {
        p.imagem = "imagens/bandeiras/" + slug(p.cidade) + ".png";  // fallback: bandeira
        p.credito = "";
      }
      return p;
    })
);
