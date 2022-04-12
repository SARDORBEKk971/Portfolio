import myNews  from "./mynews.mjs";
const myNew = document.getElementById('myNew')
myNews.forEach(mynew => {
    myNew.insertAdjacentHTML('beforeend', `
        <div class="news_p">
            <h3>Title: ${mynew.title}</h3>
            <h4>Events: ${mynew.incident}</h4>
            <h5><span>Posted In: ${mynew.date()} <br> ${mynew.time()}</span></h5>
        </div>
    `)
})
