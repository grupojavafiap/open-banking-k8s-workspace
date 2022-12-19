import { Injectable } from "@angular/core";


@Injectable()
export class CustomerService {

    getCustomer()
    {
        const clientId = Math.floor(Math.random() * 10);

        return customers[clientId]
    }

}


const customers = 
[
	{
		"nome": "Bruna Alice Francisca Drumond",
		"idade": 22,
		"cpf": "80207864900",
		"rg": "163269786",
		"data_nasc": "18/03/2000",
		"sexo": "Feminino",
		"signo": "Peixes",
		"mae": "Malu Marlene",
		"pai": "Emanuel Edson Drumond",
		"email": "bruna-drumond81@formulaweb.com.br",
		"senha": "wt7iISOGdz",
		"cep": "59129805",
		"endereco": "Rua Judiberto Félix de Lima",
		"numero": 950,
		"bairro": "Lagoa Azul",
		"cidade": "Natal",
		"estado": "RN",
		"telefone_fixo": "8427888035",
		"celular": "84982400629",
		"altura": "1,80",
		"peso": 67,
		"tipo_sanguineo": "AB-",
		"cor": "laranja"
	},
	{
		"nome": "Sophia Fátima Vieira",
		"idade": 43,
		"cpf": "69546617750",
		"rg": "301059573",
		"data_nasc": "21/06/1979",
		"sexo": "Feminino",
		"signo": "Câncer",
		"mae": "Vitória Ayla Simone",
		"pai": "Kevin Guilherme Rodrigo Vieira",
		"email": "sophia_fatima_vieira@guiamaritimo.com.br",
		"senha": "hUla1LiaOq",
		"cep": "37505186",
		"endereco": "Rua Benjamin Firmo Mariano",
		"numero": 891,
		"bairro": "Vila Isabel",
		"cidade": "Itajubá",
		"estado": "MG",
		"telefone_fixo": "3525294100",
		"celular": "35989834730",
		"altura": "1,51",
		"peso": 78,
		"tipo_sanguineo": "O-",
		"cor": "vermelho"
	},
	{
		"nome": "Raimundo Leonardo Lima",
		"idade": 19,
		"cpf": "73094769136",
		"rg": "506955928",
		"data_nasc": "03/01/2003",
		"sexo": "Masculino",
		"signo": "Capricórnio",
		"mae": "Beatriz Olivia Maitê",
		"pai": "Tiago Fernando Lima",
		"email": "raimundo-lima81@mega.com.br",
		"senha": "kGXPlgqeen",
		"cep": "58059000",
		"endereco": "Avenida Coronel Calixto",
		"numero": 934,
		"bairro": "Mangabeira",
		"cidade": "João Pessoa",
		"estado": "PB",
		"telefone_fixo": "8329064071",
		"celular": "83989479777",
		"altura": "1,64",
		"peso": 91,
		"tipo_sanguineo": "A-",
		"cor": "preto"
	},
	{
		"nome": "Elisa Nicole Gomes",
		"idade": 47,
		"cpf": "05377466330",
		"rg": "341059742",
		"data_nasc": "02/03/1975",
		"sexo": "Feminino",
		"signo": "Peixes",
		"mae": "Teresinha Stella",
		"pai": "Kevin Igor Tiago Gomes",
		"email": "elisa_gomes@marktechbr.com.br",
		"senha": "p3an5088ub",
		"cep": "49085213",
		"endereco": "Travessa Adalberto",
		"numero": 601,
		"bairro": "José Conrado de Araújo",
		"cidade": "Aracaju",
		"estado": "SE",
		"telefone_fixo": "7929534937",
		"celular": "79985026465",
		"altura": "1,80",
		"peso": 80,
		"tipo_sanguineo": "AB+",
		"cor": "vermelho"
	},
	{
		"nome": "Benedita Heloisa Rosa da Cunha",
		"idade": 45,
		"cpf": "04233019000",
		"rg": "437815894",
		"data_nasc": "22/05/1977",
		"sexo": "Feminino",
		"signo": "Gêmeos",
		"mae": "Bárbara Cláudia",
		"pai": "Renato Sérgio Eduardo da Cunha",
		"email": "beneditaheloisadacunha@poli.ufrj.br",
		"senha": "B6UsUaxmx6",
		"cep": "64206157",
		"endereco": "Rua Josélia de Melo Carvalho",
		"numero": 700,
		"bairro": "São Judas Tadeu",
		"cidade": "Parnaíba",
		"estado": "PI",
		"telefone_fixo": "8636208493",
		"celular": "86995991249",
		"altura": "1,58",
		"peso": 82,
		"tipo_sanguineo": "B-",
		"cor": "vermelho"
	},
	{
		"nome": "Caroline Daiane das Neves",
		"idade": 18,
		"cpf": "98052869757",
		"rg": "327941133",
		"data_nasc": "21/09/2004",
		"sexo": "Feminino",
		"signo": "Virgem",
		"mae": "Priscila Fátima Isabelle",
		"pai": "Thales Henrique das Neves",
		"email": "carolinedaianedasneves@i9pneus.com.br",
		"senha": "utzW8lcQCX",
		"cep": "69312045",
		"endereco": "Rua Reinaldo Neves",
		"numero": 313,
		"bairro": "Jardim Floresta",
		"cidade": "Boa Vista",
		"estado": "RR",
		"telefone_fixo": "9528738574",
		"celular": "95996973755",
		"altura": "1,60",
		"peso": 57,
		"tipo_sanguineo": "AB+",
		"cor": "amarelo"
	},
	{
		"nome": "Mirella Isabelle da Mota",
		"idade": 67,
		"cpf": "84223605607",
		"rg": "106794644",
		"data_nasc": "16/11/1955",
		"sexo": "Feminino",
		"signo": "Escorpião",
		"mae": "Melissa Brenda Regina",
		"pai": "Samuel Caio Ruan da Mota",
		"email": "mirella_damota@aedu.com",
		"senha": "uMHJxW3bW8",
		"cep": "41370320",
		"endereco": "Rua Espírito Santo",
		"numero": 952,
		"bairro": "Jardim Nova Esperança",
		"cidade": "Salvador",
		"estado": "BA",
		"telefone_fixo": "7125279433",
		"celular": "71988192153",
		"altura": "1,50",
		"peso": 74,
		"tipo_sanguineo": "A+",
		"cor": "vermelho"
	},
	{
		"nome": "Vicente Benjamin Novaes",
		"idade": 67,
		"cpf": "98063803710",
		"rg": "312007954",
		"data_nasc": "04/10/1955",
		"sexo": "Masculino",
		"signo": "Libra",
		"mae": "Pietra Antonella Maitê",
		"pai": "André Vicente Antonio Novaes",
		"email": "vicente_novaes@iname.com",
		"senha": "o3UaIkGoiA",
		"cep": "69919832",
		"endereco": "Rua L",
		"numero": 671,
		"bairro": "Conjunto Rui Lino",
		"cidade": "Rio Branco",
		"estado": "AC",
		"telefone_fixo": "6825353365",
		"celular": "68997441929",
		"altura": "1,81",
		"peso": 64,
		"tipo_sanguineo": "AB-",
		"cor": "preto"
	},
	{
		"nome": "Kauê Edson Jesus",
		"idade": 69,
		"cpf": "59270649814",
		"rg": "480629481",
		"data_nasc": "02/02/1953",
		"sexo": "Masculino",
		"signo": "Aquário",
		"mae": "Fernanda Patrícia",
		"pai": "Enrico Luiz Rafael Jesus",
		"email": "kaueedsonjesus@ggm.com.br",
		"senha": "nQiwhhDxM7",
		"cep": "68908087",
		"endereco": "Rua Sheknan",
		"numero": 514,
		"bairro": "Infraero",
		"cidade": "Macapá",
		"estado": "AP",
		"telefone_fixo": "9639746360",
		"celular": "96987683832",
		"altura": "1,88",
		"peso": 82,
		"tipo_sanguineo": "O-",
		"cor": "vermelho"
	},
	{
		"nome": "Bernardo Marcelo Carvalho",
		"idade": 69,
		"cpf": "06935550092",
		"rg": "194775100",
		"data_nasc": "27/01/1953",
		"sexo": "Masculino",
		"signo": "Aquário",
		"mae": "Laura Josefa",
		"pai": "Luís Edson Carvalho",
		"email": "bernardo-carvalho97@zoomfoccus.com.br",
		"senha": "Zrz4sm2blp",
		"cep": "78145572",
		"endereco": "Rua Alagoas",
		"numero": 369,
		"bairro": "São Simão",
		"cidade": "Várzea Grande",
		"estado": "MT",
		"telefone_fixo": "6528034204",
		"celular": "65981623209",
		"altura": "1,64",
		"peso": 82,
		"tipo_sanguineo": "O-",
		"cor": "laranja"
	}
]