function logar(){
  Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: "<a href=\"#\">Why do I have this issue?</a>"
});
  }

function cadastrar(){
Swal.fire({
  title: "Bom Trabalho!",
  text: "Você se cadastrou!",
  icon: "success"
});

}

function logar(){
   var usuario = document.getElementById('inputUsuario').value
   var senha = document.getElementById('inputSenha').value

   if(usuario == "quesia" && senha == "1234"){
    window.location.href = "page3.html"
   } else{
   document.getElementById('erro').innerHTML = 'Usuário/Senha incorretos! Tente novamente'
   }
}


