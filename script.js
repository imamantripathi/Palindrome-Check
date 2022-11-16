function func() {
  let input = document.getElementById("form");
  //   console.log(input[0].value);
  let value = input[0].value.split("");
  let reversed = value.reverse().join("");
  //   console.log(reversed);
  if (input[0].value === reversed) {
    let id1 = document.getElementById("label_name");
    let id2 = document.getElementById("input");
    let id3 = document.getElementById("myBtn");
    id1.style.display = "none";
    id2.style.display = "none";
    id3.style.display = "none";
    let app = document.createElement("h2");
    app.innerHTML = "Yes, Enter String is Palindrome 💖!!";
    document.getElementById("form").appendChild(app);
    app.classList.add("out");
  } else {
    let id1 = document.getElementById("label_name");
    let id2 = document.getElementById("input");
    let id3 = document.getElementById("myBtn");
    id1.style.display = "none";
    id2.style.display = "none";
    id3.style.display = "none";
    let app = document.createElement("h2");
    app.innerHTML = "No, Enter String is not Palindrome 💔!!";
    document.getElementById("form").appendChild(app);
    app.classList.add("out");
  }
}
