export default function News(news){
    return `
    <section id="news">
        <h1 class="title animated infinite pulse delay-2s slow">News</h1>
        <div class="search">
            <input type="text" name='news' placeholder="Search News...">
        </div>
        <div class="news-list">
            ${renderNewsItems(news)}
        </div>
    </section>
    `
}

function renderNewsItems(news){
    return news.slice(0,6).map(d=>`
        <div class="row">
            <div class="col-8">
                ${d.title}
            </div>
            <div class="col-4">
                ${d.date}
            </div>
        </div>
    `).join('');
}

export function handleNewsFilter(data){
    
    let newsSearch = document.querySelector('.search input[name="news"');

    newsSearch.addEventListener('input', function(event){
        // renderNews(allNews.filter(''))
        console.log('value', this.value);
        if (this.value!=''){
            let filtered = data.news.filter(d=>{
                let text = (d.title + ' ' + d.date);
                return text.toLowerCase().includes(this.value.toLowerCase());
            })
            
            document.querySelector('.news-list').innerHTML = renderNewsItems(filtered);
        }else{
            document.querySelector('.news-list').innerHTML = renderNewsItems(data.news);
        }
    });
}
