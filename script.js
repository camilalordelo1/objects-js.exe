var aluno = new Object()
function cadastrar(){
    var x = document.getElementById('cadastro')
    x.setAttribute('disabled', 'disabled')
    document.getElementById('nota').style.display="block"
    document.getElementById('desbloquear1').style.display="block"

    aluno.nome = document.getElementById('inputNome').value
    document.getElementById('mNome').value = `${aluno.nome}`
    
    aluno.rg = document.getElementById('inputRg').value
    document.getElementById('mRg').value = `${aluno.rg}`
    
    aluno.cpf = document.getElementById('inputCpf').value
    document.getElementById('mCpf').value = `${aluno.cpf}`

    aluno.email = document.getElementById('inputEmail').value
    document.getElementById('mEmail').value = `${aluno.email}`
} 

function media(){
    var x2 = document.getElementById('nota')
    x2.setAttribute('disabled', 'disabled')
    aluno.n1 = Number(document.getElementById('inputN1').value)
    aluno.n2 = Number(document.getElementById('inputN2').value)
    aluno.n3 = Number(document.getElementById('inputN3').value)
    aluno.media = (aluno.n1 + aluno.n2 + aluno.n3)/3
    aluno.situacao = ``
    document.getElementById('mN1').value = `${aluno.n1}`
    document.getElementById('mN2').value = `${aluno.n2}`
    document.getElementById('mN3').value = `${aluno.n3}`

    if (aluno.n1 >= 0 && aluno.n1 <= 10 && aluno.n2 >= 0 && aluno.n2 <= 10 && aluno.n3 >= 0 && aluno.n3 <= 10 ){
        mosM.innerHTML = `<h4 class="mx-auto text-danger"><b>Sua média é ${aluno.media.toFixed(2)} </h4>`
        if (aluno.media <= 5) {
            aluno.situacao = `REPROVADO`
            mosM.innerHTML += `<h2 class="mx-auto">Você foi <b> REPROVADO </b></h2>`
        } else if (aluno.media > 5 && aluno.media <= 7)  {
            aluno.situacao = `RECUPERAÇÃO`
            mosM.innerHTML += `<h2 class="mx-auto">Você está de <b> RECUPERAÇÃO </b></h2>`
        } else {
            aluno.situacao = `APROVADO`
            mosM.innerHTML += `<h2 class="mx-auto">Você foi <b> APROVADO </b></h2>`
        }
        document.getElementById('botaoDes').style.display="block"
        document.getElementById('resumo').style.display="block"
    } else {
        mosM.innerHTML = `<h2 class="mx-auto">DIGITE NOTAS VÁLIDAS</b>...</h2>`
        x2.removeAttribute('disabled', 'disabled')
    }
    document.getElementById('mMedia').value = `${aluno.media.toFixed(2)}`
    document.getElementById('mSitu').value = `${aluno.situacao}`

}

function desbloquear1(){
    var x1 = document.getElementById('cadastro')
    x1.removeAttribute('disabled', 'disabled')
    
}

function desbloquear2(){
    var x2 = document.getElementById('nota')
    x2.removeAttribute('disabled', 'disabled')
    document.getElementById('inputN1').value = ' '
    document.getElementById('inputN2').value = ' '
    document.getElementById('inputN3').value = ' '
    mosM.innerHTML = ''
    document.getElementById('resumo').style.display="none"
    document.getElementById('botaoDes').style.display="none"
}


