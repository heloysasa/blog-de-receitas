let dados = [
    {
        titulo: "Pão de queijo",
        descricao: "Ingredientes: 500g de polvilho doce, 1 litro de leite, 1 xícara (chá) de óleo, 4 ovos, 1 colher de sopa de sal, Queijo ralado a gosto (mussarela, parmesão, etc.",
        modoPreparo: "Modo de Preparo: Ferver o líquido: Em uma panela, coloque o leite, o óleo e o sal. Leve ao fogo até ferver. Misturar o polvilho: Despeje o líquido fervente sobre o polvilho doce em uma tigela grande. Misture rapidamente com uma colher de pau até formar uma massa homogênea. Esfriar a massa: Espere a massa amornar para não cozinhar os ovos. Adicionar os ovos e o queijo: Adicione os ovos um a um, misturando bem após cada adição. Em seguida, acrescente o queijo ralado a gosto e misture até incorporar todos os ingredientes. Montar os pães de queijo: Unte as mãos com um pouco de óleo e modele os pães de queijo no tamanho desejado. Assar: Coloque os pães de queijo em uma assadeira untada e asse em forno preaquecido a 200°C por aproximadamente 20 minutos, ou até dourar.",
        link: "https://www.youtube.com/watch?v=ZU_wbPigVRI",
        tags: "salgado assado polvilho lanche vegetariano rápido prático" 
    },
    {
        titulo: "Coxinha",
        descricao: "Ingredientes: Massa: 1 kg de batata cozida e amassada, 1 xícara de leite, 2 colheres de sopa de manteiga, 1 ovo, sal a gosto. Recheio: Frango desfiado temperado com sal, cebola e cheiro-verde.",
        modoPreparo: "Modo de Preparo: Misture todos os ingredientes da massa até formar uma massa homogênea. Abra a massa com um rolo e coloque o recheio no centro. Feche e modele as coxinhas. Frite em óleo quente até dourarem.",
        link: "https://www.youtube.com/watch?v=pyslNp5YCj8",
        tags: "salgado frito festa" 
    },
    {
        titulo: "Bolinha de queijo",
        descricao: "Ingredientes: Queijo coalho, ovo, farinha de rosca, óleo para fritar.",
        modoPreparo: "Modo de Preparo: Corte o queijo coalho em cubos, passe no ovo batido e na farinha de rosca. Frite em óleo quente até dourar.",
        link: "https://www.youtube.com/watch?v=HvDKaQHQ5pY",
        tags: "salgado frito festa vegetariano" 
    },
    {
        titulo: "Pastel",
        descricao: "Ingredientes: Massa: 1 xícara de farinha de trigo, 1 xícara de água, 1 colher de sopa de óleo, sal a gosto. Recheio: A seu gosto (carne, queijo, palmito, etc.).",
        modoPreparo: "Modo de Preparo: Misture os ingredientes da massa até formar uma massa lisa. Abra a massa com um rolo, coloque o recheio no centro e feche. Frite em óleo quente até dourar ou asse por 15 minutos.",
        link: "https://www.youtube.com/watch?v=6jc5UMH8o0M",
        tags: "salgado frito assado lanche rápido prático" 
    },
    {
        titulo: "Quibe",
        descricao: "Ingredientes: Trigo para quibe, carne moída, cebola picada, temperos a gosto. Modo de Preparo: Misture todos os ingredientes até formar uma massa homogênea. Modele os quibe e asse ou frite.",
        link: "https://www.youtube.com/watch?v=Pf0sgMLVNDw",
        tags: "salgado assado frito festa" 
    },
    {
        titulo: "Brigadeiro",
        descricao: "Ingredientes: 1 lata de leite condensado, 3 colheres de sopa de chocolate em pó, 1 colher de sopa de manteiga, 1 caixa de creme de leite",
        modoPreparo: "Modo de Preparo: Em uma panela, coloque todos os ingredientes. Cozinhe em fogo baixo, mexendo sempre, até desgrudar do fundo da panela. Deixe esfriar um pouco e modele os brigadeiros.",
        link: "https://www.youtube.com/watch?v=-Zl4tbPzn3c",
        tags: "doce chocolate festa rápido prático" 
    },
    {
        titulo: "Cocada",
        descricao: "Ingredientes: 1 xícara de chá de açúcar, 1/2 xícara de chá de água, 300 gramas de coco fresco ralado, 1 caixa de leite condensado.",
        modoPreparo: "Modo de Preparo: Em uma panela, coloque o coco ralado, o leite condensado e o açúcar. Cozinhe em fogo baixo, mexendo sempre, até formar uma massa consistente. Unte uma forma e espalhe a massa. Leve ao forno pré-aquecido a 180°C por cerca de 30 minutos ou até dourar.",
        link: "https://www.youtube.com/watch?v=z6_AJkCUEJA",
        tags: "doce rápido prático"
    },
    {
        titulo: "Beijinho",
        descricao: "Ingredientes: 1 lata de leite condensado, 1 coco ralado fresco, 1 caixa de leite de coco.",
        modoPreparo: "Modo de Preparo: Em uma panela, coloque o leite condensado, o coco ralado e o leite de coco. Cozinhe em fogo baixo, mexendo sempre, até formar uma massa consistente. Deixe esfriar e modele os beijinhos.",
        link: "https://www.youtube.com/watch?v=SYRLe0gGDMA",
        tags: "doce festa rápido prático"
    },
    {
        titulo: "Pudim de leite",
        descricao: "Ingredientes: 1 lata de leite condensado, 3 ovos, 1 lata de leite, 1 colher de açúcar.",
        modoPreparo: "Modo de Preparo: Em um liquidificador, bata todos os ingredientes. Coloque em uma forma caramelizada e leve para assar em banho-maria em forno pré-aquecido a 180°C por cerca de 40 minutos.",
        link: "https://www.youtube.com/watch?v=UDYZqGqOdwA",
        tags: "doce sobremesa"
    },
    {
        titulo: "Mousse de maracujá",
        descricao: "Ingredientes: 1 lata de leite condensado, 1 lata de creme de leite, 1 xícara de polpa de maracujá, 2 envelopes de gelatina em pó.",
        modoPreparo: "Modo de Preparo: Hidrate a gelatina conforme as instruções da embalagem. Bata no liquidificador o leite condensado, o creme de leite e a polpa de maracujá. Adicione a gelatina hidratada e bata por mais alguns segundos. Leve à geladeira por algumas horas.",
        link: "https://www.youtube.com/watch?v=tKCvDIXp6FI",
        tags: "doce maracuja maracujá sobremesa rápido prático"
    },
    {
        titulo: "Quindim",
        descricao: "Ingredientes: 6 ovos, 1 xícara de açúcar, 1 coco ralado seco.",
        modoPreparo: "Modo de Preparo: Separe as gemas das claras. Bata as claras em neve e reserve. Misture as gemas com o açúcar até ficar claro. Adicione o coco ralado e misture delicadamente. Por último, incorpore as claras em neve. Coloque em forminhas individuais e leve ao forno pré-aquecido a 180°C por cerca de 30 minutos.",
        link: "https://www.youtube.com/watch?v=cmPKNKjRGk0",
        tags: "doce sobremesa rápido prático"
    },
    {
        titulo: "Refresco de limão com hortelã",
        descricao: "Ingredientes: Rodelas de limão, folhas de hortelã, água com gás, açúcar a gosto.",
        modoPreparo: "Modo de Preparo: Em um copo, macere as rodelas de limão e as folhas de hortelã. Adicione gelo, água com gás e açúcar a gosto. Mexa bem e sirva.",
        link: "https://www.youtube.com/watch?v=UhP7fhQrJbo",
        tags: "bebida suco limao limão hortelã hortela rápido prático"
    },
    {
        titulo: "Suco verde",
        descricao: "Ingredientes: Espinafre, couve, pepino, maçã verde, água.",
        modoPreparo: "Modo de Preparo: Bata todos os ingredientes no liquidificador até obter uma mistura homogênea. Coe e sirva.",
        link: "https://www.youtube.com/watch?v=NRpQ0PU1dXo" ,
        tags: "bebida suco limao limão verde rápido prático"
    },
    {
        titulo: "Caipirinha (Contém álcool)",
        descricao: "Ingredientes: 2 limões cortados em rodelas, 2 colheres de sopa de açúcar, cachaça a gosto, gelo.",
        modoPreparo: "Modo de Preparo: Em um copo, macere as rodelas de limão com o açúcar. Adicione gelo picado e complete com cachaça. Mexa bem e sirva.",
        link: "https://www.youtube.com/watch?v=SdG2oBCRigc",
        tags: "alcool álcool bebida limao limão cachaça rápido prático"
    },
    {
        titulo: "Suco de laranja com abacaxi",
        descricao: "Ingredientes: 4 laranjas, 1 abacaxi, água e açúcar a gosto.",
        modoPreparo: "Modo de Preparo: Extraia o suco das laranjas e do abacaxi. Coe e adicione água e açúcar a gosto. Sirva com gelo.",
        link: "https://www.youtube.com/watch?v=sL0_0pRTnCI",
        tags: "bebida suco rápido prático"
    },
    {
        titulo: "Açaí na tigela",
        descricao: "Ingredientes: Polpa de açaí congelada, banana congelada, granola, frutas picadas (morango, banana, etc.).",
        modoPreparo: "Modo de Preparo: Bata a polpa de açaí com a banana congelada até obter um creme. Sirva em uma tigela e adicione granola e frutas picadas a gosto.",
        link: "https://www.youtube.com/watch?v=NY2M1sc5Fdo",
        tags: "bebida acai acaí açai açaí rápido prático"
    },
    {
        titulo: "Batida de Coco (Contém álcool)",
        descricao: "Ingredientes: Leite de coco, leite condensado, rum branco, gelo.",
        modoPreparo: "Modo de Preparo: Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.",
        link: "https://www.youtube.com/watch?v=RlZc1zF1ykE",
        tags: "alcool álcool bebida rápido prático"
    },
    {
        titulo: "Quentão (Contém álcool)",
        descricao: "Ingredientes: Cachaça, gengibre, laranja, cravo, canela, açúcar.",
        modoPreparo: "Modo de Preparo: Ferver a água com os ingredientes e servir quente.",
        link: "https://www.youtube.com/watch?v=wTdTsZdrk5g",
        tags: "alcool álcool bebida quentao quentão rápido prático"
    },
    {
        titulo: "Batida de maracujá (Contém álcool)",
        descricao: "Ingredientes: Polpa de maracujá, leite condensado, cachaça, gelo.",
        modoPreparo: "Modo de Preparo: Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.",
        link: "https://www.youtube.com/watch?v=OItyOboIg-M",
        tags: "alcool álcool bebida maracuja maracujá rápido prático"
    }
];




let dadosSalgados = [
    {
        titulo: "Pão de queijo",
        descricao: "Ingredientes: 500g de polvilho doce, 1 litro de leite, 1 xícara (chá) de óleo, 4 ovos, 1 colher de sopa de sal, Queijo ralado a gosto (mussarela, parmesão, etc.",
        modoPreparo: "Modo de Preparo: Ferver o líquido: Em uma panela, coloque o leite, o óleo e o sal. Leve ao fogo até ferver. Misturar o polvilho: Despeje o líquido fervente sobre o polvilho doce em uma tigela grande. Misture rapidamente com uma colher de pau até formar uma massa homogênea. Esfriar a massa: Espere a massa amornar para não cozinhar os ovos. Adicionar os ovos e o queijo: Adicione os ovos um a um, misturando bem após cada adição. Em seguida, acrescente o queijo ralado a gosto e misture até incorporar todos os ingredientes. Montar os pães de queijo: Unte as mãos com um pouco de óleo e modele os pães de queijo no tamanho desejado. Assar: Coloque os pães de queijo em uma assadeira untada e asse em forno preaquecido a 200°C por aproximadamente 20 minutos, ou até dourar.",
        link: "https://www.youtube.com/watch?v=ZU_wbPigVRI",
        
    },
    {
        titulo: "Coxinha",
        descricao: "Ingredientes: Massa: 1 kg de batata cozida e amassada, 1 xícara de leite, 2 colheres de sopa de manteiga, 1 ovo, sal a gosto. Recheio: Frango desfiado temperado com sal, cebola e cheiro-verde.",
        modoPreparo: "Modo de Preparo: Misture todos os ingredientes da massa até formar uma massa homogênea. Abra a massa com um rolo e coloque o recheio no centro. Feche e modele as coxinhas. Frite em óleo quente até dourarem.",
        link: "https://www.youtube.com/watch?v=pyslNp5YCj8"
    },
    {
        titulo: "Bolinha de queijo",
        descricao: "Ingredientes: Queijo coalho, ovo, farinha de rosca, óleo para fritar.",
        modoPreparo: "Modo de Preparo: Corte o queijo coalho em cubos, passe no ovo batido e na farinha de rosca. Frite em óleo quente até dourar.",
        link: "https://www.youtube.com/watch?v=HvDKaQHQ5pY"
    },
    {
        titulo: "Pastel",
        descricao: "Ingredientes: Massa: 1 xícara de farinha de trigo, 1 xícara de água, 1 colher de sopa de óleo, sal a gosto. Recheio: A seu gosto (carne, queijo, palmito, etc.).",
        modoPreparo: "Modo de Preparo: Misture os ingredientes da massa até formar uma massa lisa. Abra a massa com um rolo, coloque o recheio no centro e feche. Frite em óleo quente até dourar.",
        link: "https://www.youtube.com/watch?v=6jc5UMH8o0M"
    },
    {
        titulo: "Quibe",
        descricao: "Ingredientes: Trigo para quibe, carne moída, cebola picada, temperos a gosto. Modo de Preparo: Misture todos os ingredientes até formar uma massa homogênea. Modele os quibe e asse ou frite.",
        link: "https://www.youtube.com/watch?v=Pf0sgMLVNDw"
    }

];


let dadosDoces = [
    {
        titulo: "Brigadeiro",
        descricao: "Ingredientes: 1 lata de leite condensado, 3 colheres de sopa de chocolate em pó, 1 colher de sopa de manteiga, 1 caixa de creme de leite",
        modoPreparo: "Modo de Preparo: Em uma panela, coloque todos os ingredientes. Cozinhe em fogo baixo, mexendo sempre, até desgrudar do fundo da panela. Deixe esfriar um pouco e modele os brigadeiros.",
        link: "https://www.youtube.com/watch?v=-Zl4tbPzn3c"
    },
    {
        titulo: "Cocada",
        descricao: "Ingredientes: 1 xícara de chá de açúcar, 1/2 xícara de chá de água, 300 gramas de coco fresco ralado, 1 caixa de leite condensado.",
        modoPreparo: "Modo de Preparo: Em uma panela, coloque o coco ralado, o leite condensado e o açúcar. Cozinhe em fogo baixo, mexendo sempre, até formar uma massa consistente. Unte uma forma e espalhe a massa. Leve ao forno pré-aquecido a 180°C por cerca de 30 minutos ou até dourar.",
        link: "https://www.youtube.com/watch?v=z6_AJkCUEJA"
    },
    {
        titulo: "Beijinho",
        descricao: "Ingredientes: 1 lata de leite condensado, 1 coco ralado fresco, 1 caixa de leite de coco.",
        modoPreparo: "Modo de Preparo: Em uma panela, coloque o leite condensado, o coco ralado e o leite de coco. Cozinhe em fogo baixo, mexendo sempre, até formar uma massa consistente. Deixe esfriar e modele os beijinhos.",
        link: "https://www.youtube.com/watch?v=SYRLe0gGDMA"
    },
    {
        titulo: "Pudim de leite",
        descricao: "Ingredientes: 1 lata de leite condensado, 3 ovos, 1 lata de leite, 1 colher de açúcar.",
        modoPreparo: "Modo de Preparo: Em um liquidificador, bata todos os ingredientes. Coloque em uma forma caramelizada e leve para assar em banho-maria em forno pré-aquecido a 180°C por cerca de 40 minutos.",
        link: "https://www.youtube.com/watch?v=UDYZqGqOdwA"
    },
    {
        titulo: "Mousse de maracujá",
        descricao: "Ingredientes: 1 lata de leite condensado, 1 lata de creme de leite, 1 xícara de polpa de maracujá, 2 envelopes de gelatina em pó.",
        modoPreparo: "Modo de Preparo: Hidrate a gelatina conforme as instruções da embalagem. Bata no liquidificador o leite condensado, o creme de leite e a polpa de maracujá. Adicione a gelatina hidratada e bata por mais alguns segundos. Leve à geladeira por algumas horas.",
        link: "https://www.youtube.com/watch?v=tKCvDIXp6FI"
    },
    {
        titulo: "Quindim",
        descricao: "Ingredientes: 6 ovos, 1 xícara de açúcar, 1 coco ralado seco.",
        modoPreparo: "Modo de Preparo: Separe as gemas das claras. Bata as claras em neve e reserve. Misture as gemas com o açúcar até ficar claro. Adicione o coco ralado e misture delicadamente. Por último, incorpore as claras em neve. Coloque em forminhas individuais e leve ao forno pré-aquecido a 180°C por cerca de 30 minutos.",
        link: "https://www.youtube.com/watch?v=cmPKNKjRGk0"
    }
];



let dadosBebidas = [
        {
            titulo: "Refresco de limão com hortelã",
            descricao: "Ingredientes: Rodelas de limão, folhas de hortelã, água com gás, açúcar a gosto.",
            modoPreparo: "Modo de Preparo: Em um copo, macere as rodelas de limão e as folhas de hortelã. Adicione gelo, água com gás e açúcar a gosto. Mexa bem e sirva.",
            link: "https://www.youtube.com/watch?v=UhP7fhQrJbo" 
        },
        {
            titulo: "Suco verde",
            descricao: "Ingredientes: Espinafre, couve, pepino, maçã verde, água.",
            modoPreparo: "Modo de Preparo: Bata todos os ingredientes no liquidificador até obter uma mistura homogênea. Coe e sirva.",
            link: "https://www.youtube.com/watch?v=NRpQ0PU1dXo" 
        },
        {
            titulo: "Caipirinha (Contém álcool)",
            descricao: "Ingredientes: 2 limões cortados em rodelas, 2 colheres de sopa de açúcar, cachaça a gosto, gelo.",
            modoPreparo: "Modo de Preparo: Em um copo, macere as rodelas de limão com o açúcar. Adicione gelo picado e complete com cachaça. Mexa bem e sirva.",
            link: "https://www.youtube.com/watch?v=SdG2oBCRigc"
        },
        {
            titulo: "Suco de laranja com abacaxi",
            descricao: "Ingredientes: 4 laranjas, 1 abacaxi, água e açúcar a gosto.",
            modoPreparo: "Modo de Preparo: Extraia o suco das laranjas e do abacaxi. Coe e adicione água e açúcar a gosto. Sirva com gelo.",
            link: "https://www.youtube.com/watch?v=sL0_0pRTnCI"
        },
        {
            titulo: "Açaí na tigela",
            descricao: "Ingredientes: Polpa de açaí congelada, banana congelada, granola, frutas picadas (morango, banana, etc.).",
            modoPreparo: "Modo de Preparo: Bata a polpa de açaí com a banana congelada até obter um creme. Sirva em uma tigela e adicione granola e frutas picadas a gosto.",
            link: "https://www.youtube.com/watch?v=NY2M1sc5Fdo"
        },
        {
            titulo: "Batida de Coco (Contém álcool)",
            descricao: "Ingredientes: Leite de coco, leite condensado, rum branco, gelo.",
            modoPreparo: "Modo de Preparo: Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.",
            link: "https://www.youtube.com/watch?v=RlZc1zF1ykE"
        },
        {
            titulo: "Quentão (Contém álcool)",
            descricao: "Ingredientes: Cachaça, gengibre, laranja, cravo, canela, açúcar.",
            modoPreparo: "Modo de Preparo: Ferver a água com os ingredientes e servir quente.",
            link: "https://www.youtube.com/watch?v=wTdTsZdrk5g"
        },
        {
            titulo: "Batida de maracujá (Contém álcool)",
            descricao: "Ingredientes: Polpa de maracujá, leite condensado, cachaça, gelo.",
            modoPreparo: "Modo de Preparo: Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.",
            link: "https://www.youtube.com/watch?v=OItyOboIg-M" 
        }
];

let dadosBebidasSemAlcool = [
    {
        titulo: "Suco de laranja com abacaxi",
        descricao: "Ingredientes: 4 laranjas, 1 abacaxi, água e açúcar a gosto.",
        modoPreparo: "Modo de Preparo: Extraia o suco das laranjas e do abacaxi. Coe e adicione água e açúcar a gosto. Sirva com gelo.",
        link: "https://www.youtube.com/watch?v=sL0_0pRTnCI"
    },
    {
        titulo: "Açaí na tigela",
        descricao: "Ingredientes: Polpa de açaí congelada, banana congelada, granola, frutas picadas (morango, banana, etc.).",
        modoPreparo: "Modo de Preparo: Bata a polpa de açaí com a banana congelada até obter um creme. Sirva em uma tigela e adicione granola e frutas picadas a gosto.",
        link: "https://www.youtube.com/watch?v=NY2M1sc5Fdo"
    },
    {
        titulo: "Refresco de limão com hortelã",
        descricao: "Ingredientes: Rodelas de limão, folhas de hortelã, água com gás, açúcar a gosto.",
        modoPreparo: "Modo de Preparo: Em um copo, macere as rodelas de limão e as folhas de hortelã. Adicione gelo, água com gás e açúcar a gosto. Mexa bem e sirva.",
        link: "https://www.youtube.com/watch?v=UhP7fhQrJbo" 
    },
    {
        titulo: "Suco verde",
        descricao: "Ingredientes: Espinafre, couve, pepino, maçã verde, água.",
        modoPreparo: "Modo de Preparo: Bata todos os ingredientes no liquidificador até obter uma mistura homogênea. Coe e sirva.",
        link: "https://www.youtube.com/watch?v=NRpQ0PU1dXo" 
    }
];

let dadosBebidasComAlcool = [
    {
        titulo: "Caipirinha",
        descricao: "Ingredientes: 2 limões cortados em rodelas, 2 colheres de sopa de açúcar, cachaça a gosto, gelo.",
        modoPreparo: "Modo de Preparo: Em um copo, macere as rodelas de limão com o açúcar. Adicione gelo picado e complete com cachaça. Mexa bem e sirva.",
        link: "https://www.youtube.com/watch?v=SdG2oBCRigc"
    },
    {
        titulo: "Batida de Coco",
        descricao: "Ingredientes: Leite de coco, leite condensado, rum branco, gelo.",
        modoPreparo: "Modo de Preparo: Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.",
        link: "https://www.youtube.com/watch?v=RlZc1zF1ykE"
    },
    {
        titulo: "Quentão",
        descricao: "Ingredientes: Cachaça, gengibre, laranja, cravo, canela, açúcar.",
        modoPreparo: "Modo de Preparo: Ferver a água com os ingredientes e servir quente.",
        link: "https://www.youtube.com/watch?v=wTdTsZdrk5g"
      },
      {
        titulo: "Batida de maracujá",
        descricao: "Ingredientes: Polpa de maracujá, leite condensado, cachaça, gelo.",
        modoPreparo: "Modo de Preparo: Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.",
        link: "https://www.youtube.com/watch?v=OItyOboIg-M" 
    }
];