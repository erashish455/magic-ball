let selectValue = '';



function names(value) {
    if (value == 'a') {
        let name = document.getElementById("username").value
        let toprint = (name == '' ? 'welcome!' : 'welcome!' + " " + name);
        document.getElementById('name').innerHTML = toprint
        document.getElementById("body").classList.remove('ashish');
    } else {
        document.getElementById('answer').innerHTML = '';
        document.getElementById("username").value = '';
        document.getElementById('question').value = null;
        document.getElementById("body").classList.add('ashish');
        document.getElementById('name').innerHTML = '';
    }

}

function answer() {
    let mannualQues = document.getElementById('somethingElse').value
    if (selectValue == '' && mannualQues == '') {
        alert('please select questions or write your question')

    } else {
        let answerarray = ['It is certain',
            'It is decidedly so',
            'Reply hazy try again',
            'Cannot predict now',
            'Do not count on it',
            'My sources say no',
            'Outlook not so good',
            'Signs point to yes'

        ]

        document.getElementById('answer').innerHTML = answerarray[Math.floor(Math.random() * 8)];
    }
}

function SelectValue() {
    selectValue = document.getElementById('question').value;
    console.log(selectValue)
}