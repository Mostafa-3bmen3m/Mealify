let moonIcon = document.getElementById("moon-icon");
let sunIcon = document.getElementById("sun-icon");

moonIcon.addEventListener("click" , ()=>{
    moonIcon.style.display = `none`;
    sunIcon.style.display = `block`;

    // header
    document.getElementById("header").style.backgroundColor = "#b6adad"

    // section 1
    document.getElementById("Home").style.backgroundColor = `#585858`
    document.getElementById("second-btn").style.backgroundColor = `#585858` 
    })
sunIcon.addEventListener("click" , ()=>{
    moonIcon.style.display = `block`;
    sunIcon.style.display = `none`;

    // header and navbar
    document.getElementById("header").style.backgroundColor = "var(--main-color)"

    // section 1
    document.getElementById("Home").style.backgroundColor = `var(--gray-color)`
    document.getElementById("second-btn").style.backgroundColor = `var(--gray-color)` 
})