const answer_user_question = ['Yes', 'No', 'Maybe', 'I can\'t say right now..', 'Definitely', 'You have to be kidding me'];
const subject_pronouns = ['I', 'You', 'He', 'She', 'It', 'They'];
const verbs = ['love', 'hate', 'like', 'adore', 'despise'];
const object_pronouns = ['him', 'her', 'it', 'them'];
const prompt = require('prompt-sync')();

function random_words(array) {
    let word = array[Math.floor(Math.random() * array.length)];
    return word;
}
function sentence_maker() {
    let first_word = random_words(subject_pronouns);
    let second_word = random_words(verbs);
    let third_word = random_words(object_pronouns);

    const sentence = `${first_word} ${second_word} ${third_word}`;
    return sentence;
}

function answer_to_your_question() {
    const question = prompt('I will give you an answer to a question you have instead. Ask me. ');
    console.log(`${question}. The answer is ${random_words(answer_user_question)}.`);
}

function in_or_out() {
    let decision = prompt('Do you want a random fact? ');
    let looper = false;
    while(!looper) {
        if(decision === 'Y' || decision === 'Yes') {
            console.log(sentence_maker());
            looper = true;
        }else if(decision === 'N' || decision === 'No') {
            answer_to_your_question();
            looper = true;
        }else {
            decision = prompt('I cannot understand what you said. Answer my question again. ');
        }
    }
}

//tests

in_or_out();