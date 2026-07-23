const container = document.getElementById("container");

let step = 0;

const steps = [
    {
        img: "images/0f5a8fe41b06eae0a636e4b78d9dfdc6.jpg",
        title: "Алин, я люблю тебя<3",
        text: "а ты?",
        yes: "обожаю💖",
        no: "Нет🤍"
    },
    {
        img: "images/413d65797853302616cb42fe22efcf2c.jpg",
        title: "Точно?",
        text: "Подумай хорошенько:З",
        yes: "Дааа 💖",
        no: "Нет, умри тварь🤍"
    }
];

const letterBlocks = [
    {
        img: "images/a79f4fe30bf57085198c4854438b7630.jpg",
        // Исправлено: убран ломающий код перенос строки в конце текста
        text: "Ты самая яркая и самая лучшая что случилось со мной, сейчас не представляю свою жизнь без тебя, даже не знаю как до этого я вообще жил Твое появление столько всего изменило во мне ты даже не представляешь Это всего лишь слова но я искренне хочу донести и чтобы ты понимала мои чувства Каждая секунда с тобой дарит невероятное счастье что я не получал никогда "
    },
    {
        img: "images/82b422f778eedf22ea63ab6d15d23d94.jpg",
        text: "Моя ты хорошая надеюсь ты понимаешь и знаешь что у меня проблемы с донесением чувств и то что я могу так писать до конца своих дней так что извини:( Если бы только могли встретиться или созвониться.. Ладно, хочу чтобы ты знала - ты всегда будешь для меня в первом месте, где как и какой бы ты не была, и нет причин из за которых я тебя люблю, ведь это значит что без этих причин я тебя юы не полюбил:З Я люблю тебя, горжусь тобой и невероятно сильно дорожу"
    },
    {
        img: "images/a13586c2fd8f67790e034934b3cb1ad8.jpg",
        text: "Я люблю всю тебя полностью, никогда не смей о себе плохо говорить Ты просто идеальна милая моя и точка:З Ну.. такая.жвдвбв знаю прям.. боже Потрясающая, прекрасная, шикарная, милая, восхитительная, красивая, лучшая, наилучшая дсдсдад хочется без конца продолжать Каждая твоя частичка прекрасна Глаза(шикарные, как будто компенсация моим), волосы, руки, ноги, губы, уж чего стоит твое стремление, самостоятельность, храбрость, решимость, и трудолье Извини уже поздно:( Я бы хотел побольше написать Но надеюсь смог донести свои чувства"
    }
];

// Оставлена одна правильная функция рендера финала
function renderFinal() {
    document.body.classList.add("final-mode");
    container.classList.add("article-mode");

    const rowsHtml = letterBlocks.map((block, i) => `
        <div class="article-row ${i % 2 === 1 ? "reverse" : ""}">
            <img src="${block.img}" alt="">
            <p>${block.text}</p>
        </div>
    `).join("");

    container.innerHTML = `
        <h1 class="article-title">I love you my sunshine❤️</h1>
        ${rowsHtml}
    `;
}

function moveButtonAway(button) {
    const maxX = window.innerWidth - button.offsetWidth - 20;
    const maxY = window.innerHeight - button.offsetHeight - 20;

    const x = Math.max(0, Math.random() * maxX);
    const y = Math.max(0, Math.random() * maxY);

    button.style.position = "fixed";
    button.style.left = x + "px";
    button.style.top = y + "px";
}

function makeNoRun(button) {
    let ready = false;
    setTimeout(() => { ready = true; }, 150);

    button.addEventListener("mouseover", () => {
        if (!ready) return;
        moveButtonAway(button);
    });

    button.addEventListener("click", (e) => {
        e.preventDefault();
        moveButtonAway(button);
    });
}

function renderStep() {
    const data = steps[step];

    container.innerHTML = `
        <img src="${data.img}" class="cat" alt="">
        <h1>${data.title}</h1>
        <p>${data.text}</p>
        <div class="buttons">
            <button id="yesBtn">${data.yes}</button>
            <button id="noBtn">${data.no}</button>
        </div>
    `;

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    noBtn.style.position = "relative";
    noBtn.style.left = "";
    noBtn.style.top = "";

    makeNoRun(noBtn);

    yesBtn.addEventListener("click", () => {
        if (step < steps.length - 1) {
            step++;
            renderStep();
        } else {
            renderFinal();
        }
    });
}

renderStep();
