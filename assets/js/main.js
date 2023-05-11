const menu = document.querySelector(".menu").querySelectorAll("li")
console.log(menu);
menu.forEach(element=>{
    element.addElementListener("click",function()
    {
        navbar.forEach(nav=>nav.classlist.remove("active"))
        this.classlist.add("active")
    })
})
