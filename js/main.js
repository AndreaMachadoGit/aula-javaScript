function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

}

function load(){
    alert("Página carregada.")
}

function funcaoChange(elemento){
    console.log(elemento.value);

}

function redirecionar(){
    //Para abrir em outra janela
    window.open("https://globallab.org/");
    // ou para abrir na mesma janela
    //window.location.href = "https://globallab.org/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

//function validarIdade(idade){
//    var validar;
//    if (idade >=18){
//        validar = true;
//    } else {
//        validar = false;
 //   }
  //  return validar;
//}

//var idade = prompt("Qual a sua idade ");
//console.log(validarIdade(idade));

//function soma(n1,n2){
//    return n1 + n2;
//}
//alert(soma(5,10));

//function setReplace(frase,nome,novo_nome){
//    return frase.replace(nome, novo_nome);
//}
//alert(setReplace("Vai Japão","Japão","Brasil"));

//var nome = "Andrea Machado";
//var idade = 49;
//var frase = "Japão é o melhor time do mundo!";
//var lista = ["maçã","pera","laranja"];

//var d = new Date();
//alert(d.getMonth()+1);
//alert("Minutos " + d.getMinutes());
//alert(d.getDay());
//alert(d.getMinutes());

//var count;
//for (count=1; count <=5; count++){
//    alert(count);
//}
//var count = 0;
//while (count < 5){
//    console.log(count);
//    count++;
//}


//var idade = prompt("Qual sua idade? ");
//if (idade >= 18){
//    alert("Maior de idade.");
//} else {
//    alert("Menor de idade.");
//}


//Variável tipo dicionário (como o Json)
//var fruta = {nome:"maça",  cor:"vermelha"}
//console.log(fruta);
//console.log(fruta.nome);

//lista.push("uva");
//console.log(lista);
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista[1]);
//alert(lista[2]);
//alert("meu primeiro js, feito com include na header do index.html");
//alert("Bem vinda " + nome);
//alert(nome + " está com " + idade + " anos.")
//console.log(nome);
//console.log(idade);
//console.log(frase.toUpperCase());
//console.log(frase.replace("Japão", "Brasil"));