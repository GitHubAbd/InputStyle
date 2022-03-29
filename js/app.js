const input = document.getElementById("input");

input.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    let a = input.value;
    let b = a.split(" ");
    b.forEach((elem,index) => {
        document.body.style.background = b[0];
        input.style.width = b[b.length - 1];
    });
    console.log(b);
  }
});
