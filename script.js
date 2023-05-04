function showwinner() {

    let winner1 = document.getElementById("winner1").value;
    let winner2 = document.getElementById("winner2").value;
    let winner3 = document.getElementById("winner3").value;
    let winner = document.getElementById("imgcontainer");
    winner.classList.add("addimg");
    document.getElementById("output1").innerText = winner3;
    document.getElementById("output2").innerText = winner1;
    document.getElementById("output3").innerText = winner2;




}