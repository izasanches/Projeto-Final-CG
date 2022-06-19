let ul = document.querySelector("#timeline")

function makeTimeline(arr){
    for (let i = 0; i < arr.length; i++){
        let li = document.createElement("li")
        let divClass = ""
        let divImg = ""
        let titleClass = ""
        let subtitleClass = ""
    
        if (i % 2 === 0){
            li.classList.add("container-timeline", "left")

            divContainerInternal = ""    
            divClass = "content-timeline-left"
            divImg = "background-img-timeline imageLeft"
            titleClass = "titleLeft"
            subtitleClass = "subtitleLeft"
    
        } else {
            li.classList.add("container-timeline", "right")

            divContainerInternal = ""    
            divClass = "content-timeline-right"
            divImg = "background-img-timeline imageRight"
            titleClass = "titleRight"
            subtitleClass = "subtitleRight"
        }
    
        li.innerHTML = `
            <div class="${divClass}">
                <div class="${divImg}">
                <img src="${arr[i].img}" alt="${arr[i].imgAlternative}">
                </div>
                <h2 class="${titleClass}">${arr[i].name}</h2>
                <h5 class="${subtitleClass}">${arr[i].age}</h5>
                <p>${arr[i].history}</p>
            </div>
        `
        ul.append(li)
    }
}

makeTimeline(data)