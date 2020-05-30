const films = [
	{ 
		name_film: 'Up altas aventuras',
		category: ['animation','family' ],
		category_pt: ['Animação','Família' ],
		link_film: '1kOaOP2l8tET94K-B_GpOKO7Yy7MByL_i' 
	},
	{ 
		name_film: 'Toy Story',
		category: ['animation','family' ],
		category_pt: ['Animação','Família' ],
		link_film: '1STn-2kVdCZABpk720gMwgyNCoLs4wTEh' 
	},	
	{ 
		name_film: 'Por lugares incríveis',
		category: ['romance','drama' ], 
		category_pt: ['Romance','Drama' ],
		link_film: '149ZffglAHUH00IzYlz2gF6uau8ozb5o0'
	},	
	{ 
		name_film: 'Camp rock',
		category: ['musical','comedy' ],
		category_pt: ['Musica','Comédia' ],
		link_film: '0ByjOhihpduTBc1dyVWpNUm1iMzQ'
	},
	{ 
		name_film: 'Com amor, Simon',
		category: ['romance','drama' ],
		category_pt: ['Romance','Drama' ],
		link_film: '1Qzfccy5aOuuRAkzolwNXJIMoim4natko'
	},
	{ 
		name_film: 'Como eu era antes de você',
		category: ['romance','drama' ],
		category_pt: ['Romance','Drama' ],
		link_film: '1FvROEZTHxxbJB02DIYzVgLKAG_in_Q3G'
	},
	{ 
		name_film: 'As Branquelas',
		category: ['comedy'],
		category_pt: 'Comédia',
		link_film: '104j2Qtbxb49IIYeaM3kJQjhy7FY-bQUY'
	},
	{ 
		name_film: 'Shrek, especial natal',
		category: ['animation','comedy' ],
		category_pt: ['Animação','Comédia' ],
		link_film: '0ByfEzfBLMGseNXg4UjBuOUhPbWM'
	},
	{ 
		name_film: 'Shrek',
		category: ['animation','comedy' ],
		category_pt: ['Animação','Comédia' ],
		link_film: '0ByfEzfBLMGseWWJxc3JDSUJVNms'
	},
	{ 
		name_film: 'Shrek 3',
		category: ['animation','comedy' ],
		category_pt: ['Animação','Comédia' ],
		link_film: '0ByfEzfBLMGseTDAtZmc0VXI5Sjg'
	},
	{ 
		name_film: 'Rio',
		category: ['animation','family' ],
		category_pt: ['Animação','Família' ],
		link_film: '0B9aOiPm0zipKSFJDR1g5UGFlS00'
	},
	{ 
		name_film: 'Rio 2',
		category: ['animation','family' ],
		category_pt: ['Animação','Família' ],
		link_film: '0B9aOiPm0zipKOTVtY2dBRzZOdzg'
	},
	{ 
		name_film: 'Ratatouille',
		category: ['animation','comedy' ],
		category_pt: ['Animação','Família' ],
		link_film: '0B7h6w2STaJk6Uy1xWml0TWk4bDA'
	},
	{ 
		name_film: 'Procurando Nemo',
		category: ['animation','family' ],
		category_pt: ['Animação','Família' ],
		link_film: '0B1O7UAb_hfEBeTVCclVIM2xnQ2s'
	},
	{ 
		name_film: 'Pet a vida secreta dos bichos',
		category: ['animation','family' ],
		category_pt: ['Animação','Família' ],
		link_film: '0B0px2VqARed2RHhaVHdrdHZqajg'
	},
	{ 
		name_film: 'Os Simpsons',
		category: ['animation','comedy' ],
		category_pt: ['Animação','Família' ],
		link_film: '0B_XT3bHoNCKsc21WSE00enN1b1E'
	},
	{ 
		name_film: 'Monstros S.A',
		category: ['animation','comedy' ],
		category_pt: ['Animação','Família' ],
		link_film: '1q2I6zOmBaMYPBsGkP2V5Sl-gG-jS1l19'
	},
	{ 
		name_film: 'Meninas Malvadas',
		category: ['comedy', 'teenager' ],
		category_pt: ['Animação','Família' ],
		link_film: '0B4nLNe9HQwT1WGdGdFV6cmtBMWc'
	},
	{ 
		name_film: 'Coraline e o mundo secreto',
		category: ['animation', 'horror' ],
		category_pt: ['Animação','Família' ],
		link_film: '1J4sBejfxQMpIvUcGgBSxYMWfGv8X3B6h'
	},
	{ 
		name_film: 'Os feiticeiros de Waverly Place',
		category: ['family', 'comedy' ],
		category_pt: ['Animação','Família' ],
		link_film: '18S4Mge4HeVwmnrNOcWKGSTXZiEC9Zje6'
	},
	{ 
		name_film: 'A culpa é das estrelas',
		category: ['romance', 'drama' ],
		category_pt: ['Animação','Família' ],
		link_film: '1MIuLHwc7N61ipDpb7jPHQEXsCSJaXX1m'
	},
	{ 
		name_film: 'Extraordinário',
		category: ['drama', 'comedy' ],
		category_pt: ['Animação','Família' ],
		link_film: '1vzIUbBDQ3UZu09_ebqAGNFn55bWYjims'
	},
	{ 
		name_film: 'Frozen 2',
		category: ['animation', 'family' ],
		category_pt: ['Animação','Família' ],
		link_film: '1Ijbal32HknTiH37FqyrG-LtAi6_G1z7W'
	},
	{ 
		name_film: 'Enrolados',
		category: ['animation', 'family' ],
		category_pt: ['Animação','Família' ],
		link_film: '0B23jIx5gZY-gQ0pkQjh4UENBVm8'
	},
	{ 
		name_film: 'Hannah Montana',
		category: ['musical', 'family' ],
		category_pt: ['Animação','Família' ],
		link_film: '1yzIrtl9SpRKXP5CAdKyS0BKii_ghl5JH'
	},
	{ 
		name_film: 'Malévola',
		category: ['fantasy', 'adventure' ],
		category_pt: ['Animação','Família' ],
		link_film: '1XGx86nQCI0teibTCC3MgkhHWmsmM2_my'
	},
	{ 
		name_film: 'Matilda',
		category: ['family', 'comedy' ],
		category_pt: ['Animação','Família' ],
		link_film: '1wYFBjoLmSeWbqT2tzGyp_Fwf3qdF6Q_i'
	},
	{ 
		name_film: 'High School Music',
		category: ['musical', 'family' ],
		category_pt: ['Animação','Família' ],
		link_film: '1SR5fNPo52v6WYEsnFuyexc4crJS3ygNj'
	},
	{ 
		name_film: 'High School Music 2',
		category: ['musical', 'family' ],
		category_pt: ['Animação','Família' ],
		link_film: '1rRIfSQC0rh3jFZ3NJRmPRYByhy3ByZ2X'
	},
	{ 
		name_film: 'High School Music 3',
		category: ['musical', 'family' ],
		category_pt: ['Animação','Família' ],
		link_film: '1flTAdJdxhBEPKoV_7tkdX6xUPSnLLqtM'
	},
	{ 
		name_film: 'Tá dando onda',
		category: ['animation', 'comedy' ],
		category_pt: ['Animação','Família' ],
		link_film: '0BwYoy_U8Yan8LXhtVWs5S3JsaEE'
	},
	{ 
		name_film: 'It - A coisa',
		category: ['horror', 'drama' ],
		category_pt: ['Animação','Família' ],
		link_film: '1MYD6qHy1SFBWnc5S97GpFI1rlNIAhsCu'
	},
	{ 
		name_film: 'Crepúsculo',
		category: ['fantasy', 'romance' ],
		category_pt: ['Animação','Família' ],
		link_film: '18WEar7-DlHkIImwFnb0Orrj7VrqYe_8w'
	},
	{ 
		name_film: 'Lua Nova:',
		category: ['fantasy', 'romance' ],
		category_pt: ['Animação','Família' ],
		link_film: '18igNrnjB7u7NVlv3T0FRWBbhNRP09y7t'
	},
	{ 
		name_film: 'Eclipse',
		category: ['fantasy', 'romance' ],
		category_pt: ['Animação','Família' ],
		link_film: '1O5pl0R4eLiFhCL5IeflWWz9fE2czNPIo'
	},
	{ 
		name_film: 'Amanhecer - parte 1',
		category: ['fantasy', 'romance' ],
		category_pt: ['Animação','Família' ],
		link_film: '18kOHdgo9QKtFGBer4G9BSnaQBgu6zHJR'
	},
	{ 
		name_film: 'Amanhecer - parte 2',
		category: ['fantasy', 'romance' ],
		category_pt: ['Animação','Família' ],
		link_film: '1bxfDI47_c3B__0YgYX-ZDD9QdTZx0XO7'
	},
	{ 
		name_film: 'Scooby-Doo 2002 | Filme',
		category: ['horror', 'family', 'comedy' ],
		category_pt: ['Animação','Família' ],
		link_film: '188395VOtkyflb4AlhwiAdZPQD0JSsXka'
	},
	{ 
		name_film: 'Scooby-Doo 2010 | Filme',
		category: ['horror', 'family', 'comedy' ],
		category_pt: ['Animação','Família' ],
		link_film: '1WCfQuuKO3zzpK0AkqeDVkGGAopbOI417'
	},

	{ 
		name_film: 'Scooby-Doo | Ilha dos Zumbie',
		category: ['horror', 'family', 'comedy' ],
		category_pt: ['Animação','Família' ],
		link_film: '1EoWOz4qtgnEZeXPJ3jV75pbuNLXUhUPs'
	},

	{ 
		name_film: 'Scooby-Doo e a Escola Assombrado',
		category: ['horror', 'family', 'comedy' ],
		category_pt: ['Animação','Família' ],
		link_film: '1MLvJRGKZZCJ_Wdxij-_GfALqfVEGMHsc'
	},

	{ 
		name_film: 'Scooby-Doo de volta a Escola Assombrado',
		category: ['horror', 'family', 'comedy' ],
		category_pt: ['Animação','Família' ],
		link_film: '1YMLlrpiXR2WpFhorfkc2xi4pb3Pp9vQ6'
	},

	{ 
		name_film: 'X-Men 1 | Filme',
		category: ['action', 'science-fiction' ],
		category_pt: ['Animação','Família' ],
		link_film: '1MeDnD4mNwL64e6Id14blFwZW-tYmvqMn'
	},

	{ 
		name_film: 'X-Men 2 | Filme',
		category: ['action', 'science-fiction' ],
		category_pt: ['Animação','Família' ],
		link_film: '1_ubQ1UR5cyODxPpQ30nCzdhY7W0ocZDg'
	},


	{ 
		name_film: 'X-Men 3 - O Confronto final | Filme',
		category: ['action', 'science-fiction' ],
		category_pt: ['Animação','Família' ],
		link_film: '1hO5TXrj775MotokHRgMEXRd5O7CDubSR'
	},

	{ 
		name_film: 'X-Men 4 - Origens Wolverine | Filme',
		category: ['action', 'science-fiction' ],
		category_pt: ['Animação','Família' ],
		link_film: '1B1rLhwAo0MT5IeExSmukMoqpJVsuCTtx'
	},

	{ 
		name_film: 'X-Men 5 - Primeira Classe | Filme',
		category: ['action', 'science-fiction' ],
		category_pt: ['Animação','Família' ],
		link_film: '19jtjz_TMKdSKj1mZ8otp8PZ7-aBBPF8L'
	},

	{ 
		name_film: 'X-Men 6 - Wolverine Imortal | Filme',
		category: ['action', 'science-fiction' ],
		category_pt: ['Animação','Família' ],
		link_film: '1mZWK9G8H4BWUyjEgg0xUOxzVcTnBrJt2'
	},

	{ 
		name_film: 'X-Men 7 - Dias de um futuro esquecido | Filme',
		category: ['action', 'science-fiction' ],
		category_pt: ['Animação','Família' ],
		link_film: '1yeWAx8I3H_L-McEGPCfp85EOgAU1eI_K'
	},
	{ 
		name_film: 'X-Men 8 - Apocalipse | Filme',
		category: ['action', 'science-fiction' ],
		category_pt: ['Animação','Família' ],
		link_film: '1zSQ6Ck7LziIaopk4Eb_qm6yluEEIfMEI'
	},
	{ 
		name_film: 'X-Men 9 - Logan | Filme',
		category: ['action', 'science-fiction' ],
		category_pt: ['Animação','Família' ],
		link_film: '1e7aoocTRiNtlr6Btv_QXjUFldm5YvWJh'
	},
	{ 
		name_film: 'X-Men 10 - Fenix Negra | Filme',
		category: ['action', 'science-fiction' ],
		category_pt: ['Animação','Família' ],
		link_film: '1cf6R1ervxMISEQMWQFM-J5aygc7OScpW'
	},
];

