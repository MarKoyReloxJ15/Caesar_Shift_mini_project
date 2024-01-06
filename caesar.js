var decrypt;
const caesarCipher = (str, shift, decrypt) => {
    const s = decrypt ? (26 - shift) % 26 : shift;
    const n = s > 0 ? s : 26 + (s % 26);
    return [...str]
      .map((l, i) => {
        const c = str.charCodeAt(i);
        if (c >= 65 && c <= 90)
          return String.fromCharCode(((c - 65 + n) % 26) + 65);
        if (c >= 97 && c <= 122)
          return String.fromCharCode(((c - 97 + n) % 26) + 97);
        return l;
      })
      .join('');
  };

  function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("chek");
    if (checkBox.checked == true){
        decrypt = true;
        text.innerHTML = "Decrypt";
        
    } else {
        decrypt = false;
        text.innerHTML = "encrypt";
    }
  }



function displayInput(){ 
    
    var x = document.getElementById("myInput").value;
    var y = parseInt(document.getElementById("len").value, 10);

 document.getElementById("result").innerHTML = caesarCipher(x,y,decrypt); // 'Hello



}