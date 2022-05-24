const answer_user_question = ['Yes', 'No', 'Maybe', 'I can\'t say right now..', 'Definitely', 'You have to be kidding me'];
const subject_pronouns = ['I', 'You', 'He', 'She', 'It', 'They'];
const verbs = ['love', 'hate', 'like', 'adore', 'despise'];
const object_pronouns = ['him', 'her', 'it', 'them'];

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

