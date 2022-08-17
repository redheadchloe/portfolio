

const portfolio = [
    {
        id: '01',
        name: 'Sunday Flower',
        desc: 'html,css,javascriptで作ったレスポンシブ対応なお花屋のホームページ。',
        img: 'img/SF_top.png',
        url: 'work01.html'
    },
    {
        id: '02',
        name: 'ランディングページ',
        desc: 'html,css,javascriptで作ったレスポンシブ対応なランディングページ。',
        img: 'img/sunday_flower.png',
        url: 'work01.html'
    },
    {
        id: '03',
        name: 'ポートフォリオ',
        desc: 'html,css,javascriptで作ったレスポンシブ対応なポートフォリオ。',
        img: 'img/sunday_flower.png',
        url: 'work01.html'
    },
    {
        id: '04',
        name: 'WordPressテーマ',
        desc: 'html,css,javascript,phpで作ったレスポンシブ対応なWordpressテーマ。',
        img: 'img/sunday_flower.png',
        url: 'work01.html'
    }
]



const workWrapper = document.querySelector('.work-wrapper');
for (let i = 0; i < portfolio.length; i++) {
    workWrapper.innerHTML += `<div class="work-item">
<h2>${portfolio[i].id}</h2>
<div class="desc">
    <h4>${portfolio[i].name}</h4>
    <p>${portfolio[i].desc}</p>

<img src="${portfolio[i].img}" alt="">
<a href="#portfolio">もっと見る</a></div>
</div>`;
}


// ${portfolio[i].url}

const work = [
    {
        id: '01',
        name: 'Sunday Flower',
        prev: 'img/SF_preview.png',
        concept: '「お花を通して日曜日の楽しさの様な、幸せな気持ちを届けします。」',
        goal: '「法人向けの生花の販売しか行って来なかったのですが、一般向けのフラワーショップを、今年からオープンする事になり、曙橋駅から徒歩4分の所に店舗を構えました。一般のお客様にSunday Flowerを知っていただいて、集客につなげていきたいです。」',
        method: 'ブログが検索率高いキーワードを取り入れて、ブログの閲覧経由で「Sunday Flower」を知っていただくと想定しブログページを作りました。<br>また、ワークショップや多数の商品の展開に従ってECの機能も取り入れつつ、集客につながります。<br>サイトにて落ち着いた緑をメインカラーにして暖色の花と組み合わせることで親しみやすさと親近感を得て日曜日以外にも購入していただきます。',
        tools: 'Adobe XD, Html, CSS, JavaScript',
        time: '２０２２年７月　二週間',
        url: 'https://redheadchloe.github.io/Sunday-Flower/',
        full: 'img/SF_full.png'
    },
    {
        id: '02',
        name: 'Sunday Flower',
        prev: 'img/SF_preview.png',
        concept: '「お花を通して日曜日の楽しさの様な、幸せな気持ちを届けします。」',
        goal: '',
        method: 'b',
        tools: 'c',
        time: '２０２２年７月　二週間',
        url: '',
        full: 'img/SF_full.png'
    }
]



const links = document.querySelectorAll('.work-item a');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e) => {
        workWrapper.classList.add('full');
        workWrapper.innerHTML = `<a href="index.html" class="back"><i class="fa-solid fa-arrow-left-long"></i>　
        BACK</a>
            <div class="work-item">
            <div class="preview">
                <img src="${work[i].prev}" alt="">
            </div>
            <div class="desc">
            <h2>${work[i].id}</h2>
                <ul>
                    <li>
                        <dl>
                            <dt>名前：</dt>
                            <dd>${work[i].name}</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>コンセプト：</dt>
                            <dd>${work[i].concept}</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>目的：</dt>
                            <dd>${work[i].goal}</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>工夫:</dt>
                            <dd>${work[i].method}
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>ツール:</dt>
                            <dd>${work[i].tools}
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>制作期間:</dt>
                            <dd>${work[i].time}
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>URL:</dt>
                            <dd><a href="${work[i].url}">ホームページをプレビューする　<i class="fa-solid fa-arrow-up-right-from-square"></i></a></dd>
                        </dl>
                    </li>
                </ul>
            </div>
            <div class="full">
                    <img src="${work[i].full}" alt="">
        </div>
            </div>`;
        // const items = document.querySelectorAll('.full');
        // console.log(items);
    })

}









const preBtn = document.querySelector('.pre');
const nxtBtn = document.querySelector('.nxt');



const items = document.querySelectorAll('.work-item');
const width = items[0].getBoundingClientRect().width;

let counter = 0;

preBtn.classList.add('remove');

nxtBtn.addEventListener('click', () => {
    counter++;
    preBtn.classList.remove('remove');
    console.log(counter);
    items.forEach(item => {
        item.style.transform = `translateX(-${counter * width}px)`;
        item.style.transition = `transform .4s ease-in-out`;
    })
    if (counter === items.length - 1) {
        nxtBtn.classList.add('remove');
        nxtBtn.removeEventListener('click', () => { })
    }
})

preBtn.addEventListener('click', () => {
    counter--;
    nxtBtn.classList.remove('remove');
    nxtBtn.style.color = '#333';
    items.forEach(item => {
        item.style.transform = `translateX(-${counter * width}px)`;
        item.style.transition = `transform .4s ease-in-out`;
    })
    if (counter === 0) {
        preBtn.classList.add('remove');
        preBtn.removeEventListener('click', () => { })
    } else {
        preBtn.classList.remove('remove');
        preBtn.addEventListener('click', () => { })
    }

})
