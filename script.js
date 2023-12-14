

document.getElementById("btn").addEventListener("click", ()=>{

var Weight = document.querySelector("input")
let planet = document.querySelector("#dropdown")
if (Weight.value.trim() === "") {
    // Display an error message or take appropriate action
    alert("Please enter a value ");
    return; // Stop further execution
  }
console.log(Weight);

let gravity = {
    mercury: 3.7,
    venus: 8.87,
    earth:9.8,
    mars: 3.71,
    moon:1.62,
    jupiter: 24.79,
    saturn: 10.44,
    uranus: 8.69,
    neptune: 11.15,
    pluto:0.62,
}

var images = {

    mercury :"https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
    venus:"https://cdn.pixabay.com/photo/2011/12/13/14/39/venus-11022_1280.jpg",
    earth:"https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWFydGh8ZW58MHx8MHx8fDA%3D",
    mars:"https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    jupiter:"https://cdn.pixabay.com/photo/2020/02/22/08/15/space-4869815_1280.jpg",
    saturn:"https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY3VyeSUyMHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D",
    uranus:"https://images.unsplash.com/photo-1614732484003-ef9881555dc3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    neptune:"https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pluto:"https://images.unsplash.com/photo-1614314107768-6018061b5b72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    moon:"https://images.unsplash.com/photo-1479090793912-eb9929f4fdb2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}

let output = document.querySelector(".output")
let output_value = document.querySelector(".output_value")
// output_value.classList.add("output_value")
let img = document.querySelector(".img")
img.innerHTML = `<img src=" ${images[planet.value]}" alt="" srcset="">`
output.appendChild(img)
output.appendChild(output_value)


  console.log(gravity[planet]);

 let formula = Weight.value * gravity[planet.value]
 let formulas = formula.toFixed(2)
 console.log(formula.toFixed(2));

//  let p = document.createElement("h1")
//  p.style.color = "white"
//  p.textContent = `The weight on an Object on ${planet.value} is ${formulas} kg`
 
//  output_value.appendChild(p)
output_value.style.display= "flex"

output_value.innerHTML = `<h1 style="color: white">The weight on an object on ${planet.value} is ${formulas} kg</h1>`;

output.appendChild(output_value)


 Weight.value = 0;
 planet.value = "select"


 
});