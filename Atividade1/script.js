const texto = `1 - Roteiros para São Paulo
        
        A Terra da Garoa!
        
        Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro
        financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista
         #RoteiroA | Região: Avenida Paulista
         Parque Trianon; Rua Augusta
         #RoteiroB | Região: Centro        
        Catedral da Sé; Pátio do Colégio; Rua Augusta
        #RoteiroC | Região: Vila Madalena        
        Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila
       2 - Roteiros para Las Vegas
        
        Viva Las Vegas!
        
        A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada
        uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes.Venha conhecer a capital dos
        jogos de azar!
        #RoteiroA | Região: Las Vegas Boulevard South        
        Fonte do Bellagio; Principais Cassinos; Madame Tussauds
        #RoteiroB | Região: Downtown;
        Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado;
        #RoteiroC | Região: Las Vegas Boulevard North        
        Outlet Premium North; Stratosphere; Apple Fashion Show
      3 - Roteiros para Moscou
       Privet!
        
        A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com
        grande resguardo de sua história soviética
         
        #RoteiroA | Região: Praça Vermelha Museu Histórico do Estado;
        Catedral de São Basílico; Mausoléu de Lênin
        #RoteiroB | Região: Centro        
        Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou
        #RoteiroC | Região: Obras pela cidade        
        Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station`;


        console.log(texto);

        // O nome das cidades avaliadas

     let posicao = texto.search("São Paulo");
     alert(posicao);

     var posicao2 = texto.search("Las Vegas");
     alert(posicao2);

     var posicao3 = texto.search("Moscou");
     alert(posicao3);


// O conteúdo do roteiro A de cada cidade avaliada

   let stringCopiada = texto.slice(320, 392);
   alert(stringCopiada);

   let stringCopiada2 = texto.slice(969, 1086);
   alert(stringCopiada2);

   let stringCopiada3= texto.slice(1578, 1690);
   alert(stringCopiada3);

// Quantos locais são citados no roteiro A de cada cidade.

const locais = ['Avenida Paulista', 'Parque Trianon', 'Rua Augusta'];
alert(`Quantidade de caracteres: ${locais.length}`);

const locais1 = ['Las Vegas Boulevard South',   
       'Fonte do Bellagio' ,'Principais Cassinos', 'Madame Tussauds'];
alert(`Quantidade de caracteres: ${locais1.length}`);

const locais2 = ['Praça Vermelha Museu Histórico do Estado','Catedral de São Basílico', 'Mausoléu de Lênin'];
alert(`Quantidade de caracteres: ${locais2.length}`);

// 4 - O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo.

const ponto = ['Catedral da Sé', 'Pátio do Colégio', 'Rua Augusta'];
alert(`Pontos turísticos localizados no bairro Centro da cidade de São Paulo são: ${ponto}`);

// 5 - O nome dos pontos turísticos localizados no bairro Downtown na cidade de Los Angeles.
const ponto1 = ['Fremont' ,'Las Vegas Art Museum', 'Museu nacional do Crime Organizado'];
alert(`Pontos turísticos localizados no Downtown na cidade de Los Angeles  são: ${ponto1}`);