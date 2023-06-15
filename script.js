import data from './test.json' assert {type: 'json'};

const clean = (text) => {
    return String(text)
        ?.replace(/[^a-zA-Z0-9А-яЁё]/g, "")
        .replaceAll(" ", "")
        .toLowerCase();
}

const generate = (data = []) => {
    const questionMtContent = document.querySelector('.content-wrapper .col-md-8.mt30');
    const questionsList = questionMtContent?.children;

    if (questionsList) {
        Array.from(questionsList)
            .slice(1, questionsList.length - 1)
            .forEach((element) => {
                const questionElement = element?.querySelector('.box-title');
                const questionElementText = questionElement?.innerText;
                const questionElementTextLen = clean(questionElementText).length - 2;
                const questionStr = clean(questionElementText).slice(2, questionElementTextLen);

                const jsonData = data.filter(({ question: itemQuestion = '' }) => {
                    const questionReplace = clean(itemQuestion);

                    if (questionStr === "") return item;

                    return questionReplace?.includes(questionStr);
                });

                const [jsonDataFirstElement] = jsonData;

                if (jsonDataFirstElement) {
                    const anwerText = jsonDataFirstElement?.answer;
                    questionElement.setAttribute('title', anwerText);

                    const anwersList = element?.querySelector('.box-body.checkbo.checkbo-ready')?.children;

                    Array.from(anwersList).forEach((item) => {
                        const labelChecked = item.querySelector("label.cb-radio");
                        const answerText = clean(item.querySelector("span.qv")?.innerText);
                        if (answerText === clean(anwerText)) {
                            if (labelChecked) {
                                labelChecked?.classList?.add("checked");
                                labelChecked?.click();
                            }
                        }
                    });
                } else {
                    questionElement.setAttribute('title', '-----');
                }
            });
    }
};

window.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === ';') {
        generate(data);
    }
});