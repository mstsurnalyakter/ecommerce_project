const menuIcon = document.getElementById("mune_icon");
const mune = document.getElementById("mune");

menuIcon.addEventListener("click", ()=>{
    if (mune.className === "hidden") {
      mune.classList.remove("hidden");
    } else {
      mune.classList.add("hidden");
    }
})