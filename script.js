let ages = []; // array to store user entered age
let ageGroups = [10, 20, 30, "Over 30"]; // predefined age groups
let ageCounts = [0,0,0,0]; // blank counts (parallel)



function addAge() {
    let age = Number(document.getElementById("ageInput").value);

    // TODO 1: add age to ages array
    ages.push(age);
    console.log(ages);
    // TODO 2: check which ageGroup it belongs to
    for (let i = 0; i < ageGroups.length; i++) {
        if (age < 30) {
            if (age < ageGroups[i]) {
                ageCounts[i]++;
                break;
            }
        }
        if (age >= 30) {
            ageCounts[3]++;
            break;
        }
    }
    console.log(ageCounts);
    displayAges();
}

function displayAges(){
const ageList = document.getElementById('ageCountDisplay')
 let html = "<h3>These are your age groups</h3>";
html+= `<p class="ageText">Age Group: 1 -  ${ageGroups[0]-1} : ${ageCounts[0]}</p>`
for(count=1; count<ageGroups.length-1; count++){  
   

    html += `
        
        <div class="trackAge">
        <p class="ageText">Age Groups:  ${ageGroups[count-1]} - ${ageGroups[count]-1} : ${ageCounts[count]}</p>
        </div>
        `
    }
   html += `<p class="overThrity"> The amount of people aged 30+ : ${ageCounts[3]}<p>`
ageList.innerHTML= html;
}