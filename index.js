let myLeads = []

const inputEl = document.getElementById("input-el")

/*
function saveLead() {
    console.log("Button clicked!")
}
*/

// or

 const inputBtn = document.getElementById("input-btn")
 const ulEl = document.getElementById("ul-el")
 const deleteBtn = document.getElementById("delete-btn")
 const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
 const tabBtn = document.getElementById("tab-btn")
 
 if(leadsFromLocalStorage) {
     myLeads = leadsFromLocalStorage
     rander(myLeads)
 }
 
 tabBtn.addEventListener("click", function() {
     chrome.tabs.query({actve: true, currentWindow: true}, function(tabs) {
         myLeads.push(tabs[0].url)
     localStorage.setItem("myLeads", JSON.stringify(myLeads))
     rander(myLeads)
     
     })   
 })
 
 function rander(leads) {
     let listItems = ""
 
for (let i = 0; i < leads.length; i++) {

    // listItems += "<li><a target = '_blank' href='"+ myLeads[i] +"'>" + myLeads[i] + "</a></li>"

    // or

    listItems +=` 
    <li>
        <a target= '_blank' href= '${leads[i]}'> ${leads[i]} </a>
    </li>
    `
}
 ulEl.innerHTML = listItems
 
 }
 
 
 deleteBtn.addEventListener("dblclick", function() {
     console.log("double clicked!")
     localStorage.clear()
     myLeads = []
     rander(myLeads)
 })
 
 
 inputBtn.addEventListener("click", function() {
     myLeads.push(inputEl.value)
     inputEl.value = ""
     localStorage.setItem("myLeads", JSON.stringify(myLeads))
     rander(myLeads)
     
     console.log(localStorage.getItem("myLeads"))
 })
