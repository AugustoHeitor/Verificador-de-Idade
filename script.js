function verificador(){
    let nascimento = window.document.getElementById('idade');
    let masculino = window.document.getElementById('masculino');
    let feminino = window.document.getElementById('feminino');
    let res = window.document.getElementById('res');
    let imagem = window.document.getElementById("imagem")
    let fala = window.document.getElementById("fala")
    let data = new Date()
    let ano = data.getFullYear()
    let nasc = Number(nascimento.value)
    let idadee = nasc - ano
    let idade = Math.abs(idadee)
    
    if (nasc > ano){
        res.innerHTML = `Erro!!!`
    }else{
        res.innerHTML = `Você tem ${idade} anos de idade`
    }

    if(nasc > ano){
        imagem.src = "imagens/naoexiste.png"
        fala.innerHTML = `Você não existe!!!`
    }else if(nasc < 1921){
        imagem.src = "imagens/morto.png"
        fala.innerHTML = `Você está morto!!!`
    }
    
    if(masculino.checked){
        if (idade >= 60 && idade <= 100) {
            imagem.src = "imagens/idosomasculino.png"
            fala.innerHTML = `Você é um idoso!!!`
        }else if(idade >= 18 && idade < 60){
            imagem.src = "imagens/adultomasculino.png"
            fala.innerHTML = `Você é um Adulto!!!`
        }else if(idade >= 13 && idade < 18){
            imagem.src = "imagens/adolescentemasculino.png"
            fala.innerHTML = `Você é um Adolescente!!!`
        }else if(idade >= 5 && idade < 13){
            imagem.src = "imagens/criancamasculino.png"
            fala.innerHTML = `Você é uma Criança!!!`
        }else if(idade >= 0 && idade < 5 && nasc <= ano){
            imagem.src = "imagens/bebemasculino.png"
            fala.innerHTML = `Você é um bebê!!!`
        }
    }

    if(feminino.checked){
        if (idade >= 60 && idade <= 100) {
            imagem.src = "imagens/idosafeminina.png"
            fala.innerHTML = `Você é uma idosa!!!`
        }else if(idade >= 18 && idade < 60){
            imagem.src = "imagens/adultofeminino.png"
            fala.innerHTML = `Você é uma Adulta!!!`
        }else if(idade >= 13 && idade < 18){
            imagem.src = "imagens/adolescentefeminino.png"
            fala.innerHTML = `Você é uma Adolescente!!!`
        }else if(idade >= 5 && idade < 13){
            imagem.src = "imagens/criancafeminino.png"
            fala.innerHTML = `Você é uma Criança!!!`
        }else if(idade >= 0 && idade < 5 && nasc <= ano){
            imagem.src = "imagens/bebefeminino.png"
            fala.innerHTML = `Você é uma bebê!!!`
        }
    }

}

