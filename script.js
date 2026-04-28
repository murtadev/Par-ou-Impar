 number = document.getElementById("number").value;
        if (number ===""){
        document.getElementById("result").innerHTML = "Digite um número válido";
        return;
        } if (number % 2 ==0){
            document.getElementById("result").innerHTML = "número par";
        } else {
            document.getElementById("result").innerHTML = "número impar";
        }