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
    nome:"Catedral Basílica Menor de Nossa Senhora da Glória",
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
    curiosidade:"A cidade é bastante associada à imagem da uva fina. ✏️ Confira as datas das festas locais."
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
    curiosidade:"O apelido 'Cidade das Flores' virou marca do município. ✏️ Confira a história local."
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
  {
    regiao:"Cianorte", cidade:"Cianorte",
    nome:"Turismo de Compras (Moda)",
    emoji:"👗", cor:"linear-gradient(135deg,#6a2c70,#a24aa6)",
    imagem:"imagens/cianorte-moda.jpg", mapa:"Shopping de malhas Cianorte, Paraná",
    subtitulo:"Polo da moda, com fábricas e shoppings de atacado.",
    local:"Cianorte, microrregião própria no noroeste",
    epoca:"O ano todo; movimenta ainda mais em feiras e liquidações.",
    historia:"Cidade que virou grande polo de confecção e vendas de roupas, atraindo compradores de todo o país.",
    surgimento:"O forte setor de confecção transformou o comércio em atração turística.",
    atividades:"Compras em atacado, feiras de moda e passeios pela cidade.",
    curiosidade:"Muitas excursões vão a Cianorte só para comprar roupas."
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
    curiosidade:"Campo Mourão é uma das maiores cidades do centro-noroeste do estado. ✏️ Confira os detalhes do parque."
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
    curiosidade:"O Caminho de Peabiru é um dos temas históricos mais fascinantes do Paraná. ✏️ Pesquise os marcos na cidade."
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
  // Umuarama (nada turístico específico encontrado — confira se quiser)
  "Esperança Nova","Maria Helena","Perobal","Xambrê",
  // Campo Mourão (nada turístico específico encontrado — confira se quiser)
  "Farol","Quarto Centenário",
  // Maringá (cidades muito pequenas, sem atração específica — confira se quiser)
  "Ângulo","Atalaia","Cambira","Floraí","Floresta","Flórida","Iguaraçu",
  "Itambé","Ivatuba","Lobato","Ourizona"
]);

const CURADORIA = {
  /* ---- PARANAVAÍ ---- */
  "Alto Paraná": { emoji:"⛪", locais:[
    {nome:"Santuário Santo Antônio de Pádua", link:"https://maps.app.goo.gl/9eqmTFS2Ucawwxpy7"} ] },
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
    {nome:"Parque dos Três Morrinhos", query:"Parque Municipal dos Três Morrinhos, Terra Rica, PR"},
    {nome:"Prainha Municipal", query:"Prainha Municipal de Terra Rica, PR"} ] },

  /* ---- UMUARAMA ---- */
  "Altônia": { emoji:"🏖️", locais:[
    {nome:"Balneário Vila Yara", query:"Balneário Vila Yara, Altônia, PR"},
    {nome:"Lagoa Xambrê", query:"Lagoa Xambrê, Altônia, PR"} ] },
  "Alto Piquiri": { emoji:"🏞️", locais:[
    {nome:"Complexo Bica", query:"Complexo Bica, Alto Piquiri, PR"},
    {nome:"Parque Municipal", query:"Parque Municipal, Alto Piquiri, PR"} ] },
  "Cafezal do Sul": { emoji:"🏖️", locais:[
    {nome:"Praia Artificial (Lago)", query:"Praia Artificial, Cafezal do Sul, PR"},
    {nome:"Parque Municipal", query:"Parque Municipal, Cafezal do Sul, PR"} ] },
  "Douradina": { emoji:"🏛️", locais:[
    {nome:"Museu Municipal", query:"Museu Municipal de Douradina, PR"},
    {nome:"Parque Municipal", query:"Parque Municipal, Douradina, PR"} ] },
  "Francisco Alves": { emoji:"🎸", locais:[
    {nome:"Portal de Francisco Alves", query:"Portal de Francisco Alves, PR"},
    {nome:"Parque Florestal Enio Pepino", query:"Parque Florestal Enio Pepino, Francisco Alves, PR"} ] },
  "Iporã": { emoji:"🌳", locais:[
    {nome:"Parque Municipal", query:"Parque Municipal de Iporã, PR"},
    {nome:"Santuário N. Sra. das Brotas", query:"Santuário Nossa Senhora das Brotas, Iporã, PR"} ] },
  "Ivaté": { emoji:"🎣", locais:[
    {nome:"Balneário Rancho Arara Azul", query:"Balneário Rancho Arara Azul, Ivaté, PR"},
    {nome:"Rio Ivaí", query:"Rio Ivaí, Ivaté, PR"} ] },
  "Mariluz": { emoji:"💧", locais:[
    {nome:"Cachoeira São Luiz", query:"Cachoeira São Luiz, Mariluz, PR"},
    {nome:"Paróquia Santo Antônio", query:"Paróquia Santo Antônio, Mariluz, PR"} ] },
  "Nova Olímpia": { emoji:"🚣", locais:[
    {nome:"Lago Municipal", query:"Lago Municipal de Nova Olímpia, PR"},
    {nome:"Praça da República", query:"Praça da República, Nova Olímpia, PR"} ] },
  "Pérola": { emoji:"🌊", locais:[
    {nome:"Parque Lagoa Azul", query:"Parque Lagoa Azul, Pérola, PR"},
    {nome:"Praça do Violão", query:"Praça Zequinha de Abreu, Pérola, PR"} ] },
  "Tapira": { emoji:"🌳", locais:[
    {nome:"Bosque do Leão", query:"Bosque do Leão, Tapira, PR"},
    {nome:"Rio Ivaí", query:"Rio Ivaí, Tapira, PR"} ] },

  /* ---- CIANORTE ---- */
  "Cidade Gaúcha": { emoji:"🌳", locais:[
    {nome:"Bosque do Leão", query:"Bosque do Leão, Cidade Gaúcha, PR"},
    {nome:"Igreja Matriz", query:"Paróquia Santa Maria Goretti, Cidade Gaúcha, PR"} ] },
  "Guaporema": { emoji:"⛲", locais:[
    {nome:"Praça da Matriz", query:"Praça da Matriz, Guaporema, PR"},
    {nome:"Igreja São Pedro Apóstolo", query:"Igreja Matriz São Pedro Apóstolo, Guaporema, PR"} ] },
  "Indianópolis": { emoji:"💧", locais:[
    {nome:"Cachoeira dos Índios", query:"Cachoeira dos Índios, Indianópolis, PR"},
    {nome:"Praça Central", query:"Praça Central, Indianópolis, PR"} ] },
  "Japurá": { emoji:"💧", locais:[
    {nome:"Cachoeira do Rio Ligeiro", query:"Cachoeira do Rio Ligeiro, Japurá, PR"},
    {nome:"Igreja Santo Antônio", query:"Igreja Santo Antônio, Japurá, PR"} ] },
  "Jussara": { emoji:"⛪", locais:[
    {nome:"Igreja Matriz São Sebastião", query:"Igreja Matriz São Sebastião, Jussara, PR"},
    {nome:"Mercado Municipal", query:"Mercado Municipal, Jussara, PR"} ] },
  "Rondon": { emoji:"💧", locais:[
    {nome:"Cachoeira Miquelin", query:"Cachoeira Miquelin, Rondon, PR"},
    {nome:"Reserva Caraguatatuba", query:"Reserva Ecológica Caraguatatuba, Rondon, PR"} ] },
  "São Manoel do Paraná": { emoji:"🌳", locais:[
    {nome:"Reserva Caraguatatiba da Divisa", query:"Reserva Ecológica Caraguatatiba da Divisa, São Manoel do Paraná, PR"} ] },
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
    {nome:"Praça Central (Centro Histórico)", query:"Praça Central, Santa Fé, PR"} ] },
  "São Jorge do Ivaí": { emoji:"🦕", locais:[
    {nome:"Praça do Dinossauro", query:"Praça do Dinossauro, São Jorge do Ivaí, PR"},
    {nome:"Praça Santa Cruz", query:"Praça Santa Cruz, São Jorge do Ivaí, PR"} ] },
  "Uniflor": { emoji:"🌻", locais:[
    {nome:"Campos de Flores", query:"Uniflor, Paraná"},
    {nome:"Praça Pedro Arnaut Toledo", query:"Praça Pedro Arnaut Toledo, Uniflor, PR"} ] },
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
const pontos = embaralhar(
  [...destaques, ...genericas.map(expandir)]
    .filter(p => !REMOVER.has(p.cidade))
    .map(aplicarCuradoria)
);
