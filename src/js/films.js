const films = [
	{ 
		name_film: 'Up altas aventuras',
		category: ['Animação','Família' ],
		link_film: '1kOaOP2l8tET94K-B_GpOKO7Yy7MByL_i' 
	},
	{ 
		name_film: 'Toy Story',
		category: ['Animação','Família' ],
		link_film: '1STn-2kVdCZABpk720gMwgyNCoLs4wTEh' 
	},	
	{ 
		name_film: 'Por lugares incríveis',
		category: ['Romance','Drama' ], 
		link_film: '149ZffglAHUH00IzYlz2gF6uau8ozb5o0'
	},	
	{ 
		name_film: 'Camp rock',
		category: ['Musical','Comédia' ],
		link_film: '0ByjOhihpduTBc1dyVWpNUm1iMzQ'
	},
	{ 
		name_film: 'Com amor, Simon',
		category: ['Romance','Drama' ],
		link_film: '1Qzfccy5aOuuRAkzolwNXJIMoim4natko'
	},
	{ 
		name_film: 'Como eu era antes de você',
		category: ['Romance','Drama' ],
		link_film: '1FvROEZTHxxbJB02DIYzVgLKAG_in_Q3G'
	},
	{ 
		name_film: 'As Branquelas',
		category: ['Comédia'],
		link_film: '104j2Qtbxb49IIYeaM3kJQjhy7FY-bQUY'
	},
	{ 
		name_film: 'Shrek, especial natal',
		category: ['Animação','Comédia' ],
		link_film: '0ByfEzfBLMGseNXg4UjBuOUhPbWM'
	},
	{ 
		name_film: 'Shrek',
		category: ['Animação','Comédia' ],
		link_film: '0ByfEzfBLMGseWWJxc3JDSUJVNms'
	},
	{ 
		name_film: 'Shrek 3',
		category: ['Animação','Comédia' ],
		link_film: '0ByfEzfBLMGseTDAtZmc0VXI5Sjg'
	},
	{ 
		name_film: 'Rio',
		category: ['Animação','Família' ],
		link_film: '0B9aOiPm0zipKSFJDR1g5UGFlS00'
	},
	{ 
		name_film: 'Rio 2',
		category: ['Animação','Família' ],
		link_film: '0B9aOiPm0zipKOTVtY2dBRzZOdzg'
	},
	{ 
		name_film: 'Ratatouille',
		category: ['Animação','Comédia' ],
		link_film: '0B7h6w2STaJk6Uy1xWml0TWk4bDA'
	},
	{ 
		name_film: 'Procurando Nemo',
		category: ['Animação','Família' ],
		link_film: '0B1O7UAb_hfEBeTVCclVIM2xnQ2s'
	},
	{ 
		name_film: 'Pet a vida secreta dos bichos',
		category: ['Animação','Família' ],
		link_film: '0B0px2VqARed2RHhaVHdrdHZqajg'
	},
	{ 
		name_film: 'Os Simpsons',
		category: ['Animação','Comédia' ],
		link_film: '0B_XT3bHoNCKsc21WSE00enN1b1E'
	},
	{ 
		name_film: 'Monstros S.A',
		category: ['Animação','Comédia' ],
		link_film: '1q2I6zOmBaMYPBsGkP2V5Sl-gG-jS1l19'
	},
	{ 
		name_film: 'Meninas Malvadas',
		category: ['Comédia', 'Adolescencia' ],
		link_film: '0B4nLNe9HQwT1WGdGdFV6cmtBMWc'
	},
	{ 
		name_film: 'Coraline e o mundo secreto',
		category: ['Animação', 'Terror' ],
		link_film: '1J4sBejfxQMpIvUcGgBSxYMWfGv8X3B6h'
	},
	{ 
		name_film: 'Os feiticeiros de Waverly Place',
		category: ['Família', 'Comédia' ],
		link_film: '18S4Mge4HeVwmnrNOcWKGSTXZiEC9Zje6'
	},
	{ 
		name_film: 'A culpa é das estrelas',
		category: ['Romance', 'Drama' ],
		link_film: '1MIuLHwc7N61ipDpb7jPHQEXsCSJaXX1m'
	},
	{ 
		name_film: 'Extraordinário',
		category: ['Drama', 'Comédia' ],
		link_film: '1vzIUbBDQ3UZu09_ebqAGNFn55bWYjims'
	},
	{ 
		name_film: 'Frozen 2',
		category: ['Animação', 'Família' ],
		link_film: '1Ijbal32HknTiH37FqyrG-LtAi6_G1z7W'
	},
	{ 
		name_film: 'Enrolados',
		category: ['Animação', 'Família' ],
		link_film: '0B23jIx5gZY-gQ0pkQjh4UENBVm8'
	},
	{ 
		name_film: 'Hannah Montana',
		category: ['Musical', 'Família' ],
		link_film: '1yzIrtl9SpRKXP5CAdKyS0BKii_ghl5JH'
	},
	{ 
		name_film: 'Malévola',
		category: ['Fantasia', 'Aventura' ],
		link_film: '1XGx86nQCI0teibTCC3MgkhHWmsmM2_my'
	},
	{ 
		name_film: 'Matilda',
		category: ['Família', 'Comédia' ],
		link_film: '1wYFBjoLmSeWbqT2tzGyp_Fwf3qdF6Q_i'
	},
	{ 
		name_film: 'High School Music',
		category: ['Musical', 'Família' ],
		link_film: '1SR5fNPo52v6WYEsnFuyexc4crJS3ygNj'
	},
	{ 
		name_film: 'High School Music 2',
		category: ['Musical', 'Família' ],
		link_film: '1rRIfSQC0rh3jFZ3NJRmPRYByhy3ByZ2X'
	},
	{ 
		name_film: 'High School Music 3',
		category: ['Musical', 'Família' ],
		link_film: '1flTAdJdxhBEPKoV_7tkdX6xUPSnLLqtM'
	},
	{ 
		name_film: 'Tá dando onda',
		category: ['Animação', 'Comédia' ],
		link_film: '0BwYoy_U8Yan8LXhtVWs5S3JsaEE'
	},
	{ 
		name_film: 'It - A coisa 1',
		category: ['Terror', 'Drama' ],
		link_film: '1MYD6qHy1SFBWnc5S97GpFI1rlNIAhsCu'
	},
	{ 
		name_film: 'It - Uma Obra Prima do medo 2',
		category: ['Terror', 'Drama' ],
		link_film: '14t20t86o4dqQyVWGASpyUrcPpr1Kmz0B'
	},
	{ 
		name_film: 'It - Capitulo 2',
		category: ['Terror', 'Drama' ],
		link_film: '14t20t86o4dqQyVWGASpyUrcPpr1Kmz0B'
	},
	{ 
		name_film: 'Crepúsculo',
		category: ['Fantasia', 'Romance' ],
		link_film: '18WEar7-DlHkIImwFnb0Orrj7VrqYe_8w'
	},
	{ 
		name_film: 'Lua Nova:',
		category: ['Fantasia', 'Romance' ],
		link_film: '18igNrnjB7u7NVlv3T0FRWBbhNRP09y7t'
	},
	{ 
		name_film: 'Eclipse',
		category: ['Fantasia', 'Romance' ],
		link_film: '1O5pl0R4eLiFhCL5IeflWWz9fE2czNPIo'
	},
	{ 
		name_film: 'Amanhecer - parte 1',
		category: ['Fantasia', 'Romance' ],
		link_film: '18kOHdgo9QKtFGBer4G9BSnaQBgu6zHJR'
	},
	{ 
		name_film: 'Amanhecer - parte 2',
		category: ['Fantasia', 'Romance' ],
		link_film: '1bxfDI47_c3B__0YgYX-ZDD9QdTZx0XO7'
	},
	{ 
		name_film: 'Scooby-Doo 2002 | Filme',
		category: ['Terror', 'Família', 'Comédia' ],
		link_film: '188395VOtkyflb4AlhwiAdZPQD0JSsXka'
	},
	{ 
		name_film: 'Scooby-Doo 2010 | Filme',
		category: ['Terror', 'Família', 'Comédia' ],
		link_film: '1WCfQuuKO3zzpK0AkqeDVkGGAopbOI417'
	},

	{ 
		name_film: 'Scooby-Doo | Ilha dos Zumbie',
		category: ['Terror', 'Família', 'Comédia' ],
		link_film: '1EoWOz4qtgnEZeXPJ3jV75pbuNLXUhUPs'
	},

	{ 
		name_film: 'Scooby-Doo e a Escola Assombrado',
		category: ['Terror', 'Família', 'Comédia' ],
		link_film: '1MLvJRGKZZCJ_Wdxij-_GfALqfVEGMHsc'
	},

	{ 
		name_film: 'Scooby-Doo de volta a Escola Assombrado',
		category: ['Terror', 'Família', 'Comédia' ],
		link_film: '1YMLlrpiXR2WpFhorfkc2xi4pb3Pp9vQ6'
	},

	{ 
		name_film: 'X-Men 1 | Filme',
		category: ['Ação', 'Ficção Científica' ],
		link_film: '1MeDnD4mNwL64e6Id14blFwZW-tYmvqMn'
	},

	{ 
		name_film: 'X-Men 2 | Filme',
		category: ['Ação', 'Ficção Científica' ],
		link_film: '1_ubQ1UR5cyODxPpQ30nCzdhY7W0ocZDg'
	},


	{ 
		name_film: 'X-Men 3 - O Confronto final | Filme',
		category: ['Ação', 'Ficção Científica' ],
		link_film: '1hO5TXrj775MotokHRgMEXRd5O7CDubSR'
	},

	{ 
		name_film: 'X-Men 4 - Origens Wolverine | Filme',
		category: ['Ação', 'Ficção Científica' ],
		link_film: '1B1rLhwAo0MT5IeExSmukMoqpJVsuCTtx'
	},

	{ 
		name_film: 'X-Men 5 - Primeira Classe | Filme',
		category: ['Ação', 'Ficção Científica' ],
		link_film: '19jtjz_TMKdSKj1mZ8otp8PZ7-aBBPF8L'
	},

	{ 
		name_film: 'X-Men 6 - Wolverine Imortal | Filme',
		category: ['Ação', 'Ficção Científica' ],
		link_film: '1mZWK9G8H4BWUyjEgg0xUOxzVcTnBrJt2'
	},

	{ 
		name_film: 'X-Men 7 - Dias de um futuro esquecido | Filme',
		category: ['Ação', 'Ficção Científica' ],
		link_film: '1yeWAx8I3H_L-McEGPCfp85EOgAU1eI_K'
	},
	{ 
		name_film: 'X-Men 8 - Apocalipse | Filme',
		category: ['Ação', 'Ficção Científica' ],
		link_film: '1zSQ6Ck7LziIaopk4Eb_qm6yluEEIfMEI'
	},
	{ 
		name_film: 'X-Men 9 - Logan | Filme',
		category: ['Ação', 'Ficção Científica' ],
		link_film: '1e7aoocTRiNtlr6Btv_QXjUFldm5YvWJh'
	},
	{ 
		name_film: 'X-Men 10 - Fenix Negra | Filme',
		category: ['Ação', 'Ficção Científica' ],
		link_film: '1cf6R1ervxMISEQMWQFM-J5aygc7OScpW'
	},
	{ 
		name_film: 'Barbie, a estrela do Rock & Barbie e as Sensações',
		category: ['Animação' ],
		link_film: '1xCX2S2Z5wH3NxAL4oyYhf8TyaBPS8_3h'
	},
	{ 
		name_film: 'Barbie e o Quebra Nozes',
		category: ['Animação' ],
		link_film: '1Kch1fppwKK-xvDMBiZSaRqXI0YgbfkhU'
	},
	{ 
		name_film: 'Barbie como Rapunzel',
		category: ['Animação' ],
		link_film: '1jxW_ILTFqClqW6dr-9h4OtEguWrqhH1z'
	},
	{ 
		name_film: 'Barbie e o Lago dos Cisnes',
		category: ['Animação' ],
		link_film: '1JDnwfh65qgUXsPdK0C-da0VZ7J8OISCt'
	},
	{ 
		name_film: 'Barbie em A Princesa e a Plebeia',
		category: ['Animação' ],
		link_film: '1KDNy8zQAuxdhGd9pXefqBLW10oH85Fi2'
	},
	{ 
		name_film: 'Barbie Fairytopia',
		category: ['Animação' ],
		link_film: '1ZEX9TqZIiRjDTlVThklzxw8Gs-VtQwAo'
	},
	{ 
		name_film: 'Barbie em A Magia de Aladus',
		category: ['Animação' ],
		link_film: '1QPhTqTqzzUDkQOlf0mYCnkJUhn6RUcQ5'
	},
	{ 
		name_film: 'O Diario da Barbie',
		category: ['Animação' ],
		link_film: '113a_Zpwc29DIy4oPZst4sjhVgmUy749b'
	},
	{ 
		name_film: 'Barbie Fairytopia Mermaidia em Uma Viagem Ao Fundo do Mar Numa Aventura Mágica',
		category: ['Animação' ],
		link_film: '1bFRDGhH7aSAQbd6yAqkFwAGHnGXnezDJ'
	},
	{ 
		name_film: 'Barbie em as 12 Bailarinas',
		category: ['Animação' ],
		link_film: '1n-0iwsyrbCCQ1h4E74EBEthIGtnVM3oB'
	},
	{ 
		name_film: 'Barbie Fairytopia em A Magia do Arco-Íris',
		category: ['Animação' ],
		link_film: '1lhqwSFIdaH8Xk3N8kHRToy9qqAK909aN'
	},
	{ 
		name_film: 'Barbie em a Princesa da Ilha',
		category: ['Animação' ],
		link_film: '1b0SFiJai-SJndiIru2bSJN0Fy2Fvp-Dx'
	},
	{ 
		name_film: 'Barbie Butterfly Uma Nova Aventura em Fairytopia',
		category: ['Animação' ],
		link_film: '1yvUtQXwbCLqIuWBDFIxkGDSAAkui15xL'
	},
	{ 
		name_film: 'Barbie e o Castelo de Diamante',
		category: ['Animação' ],
		link_film: '1nbayodS7b72GY-5Elx44M4zY9pMAczXq'
	},
	{ 
		name_film: 'Barbie em A Criação de Natal',
		category: ['Animação' ],
		link_film: '1nbayodS7b72GY-5Elx44M4zY9pMAczXq'
	},
	{ 
		name_film: 'Barbie em a Pequena Polegarzinha',
		category: ['Animação' ],
		link_film: '16R2mx73DGC-N62rqJbp22WA2dbbEmNtJ'
	},
	{ 
		name_film: 'Barbie em as Três Mosqueteiras',
		category: ['Animação' ],
		link_film: '16R2mx73DGC-N62rqJbp22WA2dbbEmNtJ'
	},
	{ 
		name_film: 'Barbie em Vida de Sereia',
		category: ['Animação' ],
		link_film: '1xkyCZyorn1Tpj6NYQ9dqim3_AFHQb5yl'
	},
	{ 
		name_film: 'Barbie Moda e Magia',
		category: ['Animação' ],
		link_film: '1fX4lpIU87UOIaPTwMAfKVSdfl1UE1G-t'
	},
	{ 
		name_film: 'Barbie e o Segredo das Fadas',
		category: ['Animação' ],
		link_film: '1Y57SJin7GnQRml9ny5Zj2YAQH5Ct7dre'
	},
	{ 
		name_film: 'Barbie Escola de Princesas',
		category: ['Animação' ],
		link_film: '1NGaJ5T5sbmLqM7MJVic5LMED7JdGKlBq'
	},
	{ 
		name_film: 'Barbie - Um Natal Perfeito',
		category: ['Animação' ],
		link_film: '1UKabZAmK4VdwSfTLC0knEdn_zf2g-zJl'
	},
	{ 
		name_film: 'Barbie em Vida de Sereia 2',
		category: ['Animação' ],
		link_film: '1clNPDVtrXrQVVcJ69pm-ce8Br8Q8C-nH'
	},	{ 
		name_film: 'Barbie a Princesa e a Pop Star',
		category: ['Animação' ],
		link_film: '1clNPDVtrXrQVVcJ69pm-ce8Br8Q8C-nH'
	},
	{ 
		name_film: 'Barbie e as Sapatilhas Mágicas',
		category: ['Animação' ],
		link_film: '1clNPDVtrXrQVVcJ69pm-ce8Br8Q8C-nH'
	},
	{ 
		name_film: 'Barbie Butterfly e a Princesa Fairy',
		category: ['Animação' ],
		link_film: '1clNPDVtrXrQVVcJ69pm-ce8Br8Q8C-nH'
	},
	{ 
		name_film: 'Barbie e Suas Irmãs em Uma Aventura a Cavalo',
		category: ['Animação' ],
		link_film: '1clNPDVtrXrQVVcJ69pm-ce8Br8Q8C-nH'
	},
	{ 
		name_film: 'Barbie Acampamento com as suas Irmãs',
		category: ['Animação' ],
		link_film: '19Naql7qnA3RdJkikKITKCAza4Tl87Krn'
	},
	{ 
		name_film: 'Barbie a Sereia das Pérolas',
		category: ['Animação' ],
		link_film: '19Naql7qnA3RdJkikKITKCAza4Tl87Krn'
	},
	{ 
		name_film: 'Barbie e o Portal Secreto ',
		category: ['Animação' ],
		link_film: '19Naql7qnA3RdJkikKITKCAza4Tl87Krn'
	},	{ 
		name_film: 'Barbie Super Princesa',
		category: ['Animação' ],
		link_film: '1_Mo0x_YmV9C7r2mhKvDUv-LytpBtxpIa'
	},
	{ 
		name_film: 'Barbie em as Rainhas do Rock',
		category: ['Animação' ],
		link_film: '1_Mo0x_YmV9C7r2mhKvDUv-LytpBtxpIa'
	},
	{ 
		name_film: 'Barbie e Suas Irmãs em uma Aventura de Cachorrinhos',
		category: ['Animação' ],
		link_film: '11dJ21TA7_SxlrtQC3N8w4ZvB9M6CQulr'
	},
	{ 
		name_film: 'Barbie e as Agentes Secretas',
		category: ['Animação' ],
		link_film: '1MetfEErMFEDl7spkqlYMzejTNCh4UECx'
	},
	{ 
		name_film: 'Barbie Dreamtopia',
		category: ['Animação' ],
		link_film: '14A5JswqTfSb6eiGsHFooUTFR8JlXcTaK'
	},
	{ 
		name_film: 'Barbie em uma Aventura Nas Estrelas',
		category: ['Animação' ],
		link_film: '16GD25FSSpLTA-lQV_LhwEMjs0zaiTZvg'
	},
	{ 
		name_film: 'Barbie e Suas Irmãs em Busca Do Cachorrinhos',
		category: ['Animação' ],
		link_film: '1NGb5Xs0b5im1Vt6pqBzbccGnxvrp0e-k'
	},
	{ 
		name_film: 'Barbie Em Um Mundo de Video Game',
		category: ['Animação' ],
		link_film: '1k8Nlr1Cd55YpKIHJ_LsGAJqqrQBo7bLq'
	},
	{ 
		name_film: 'Barbie e os Golfinhos Mágicos',
		category: ['Animação' ],
		link_film: '1_bRtrMMAIWB4x5rbXizq1uRyMzaNR5zO'
	},
	{ 
		name_film: '1 Harry Potter e a Pedra Filosofal',
		category: ['Aventura', 'Fantasia' ],
		link_film: 'https://drive.google.com/file/d/11RkHRJZDuwgj9vqeWSLYORsKG68i5u0R/view?usp=sharing'
	},
];

