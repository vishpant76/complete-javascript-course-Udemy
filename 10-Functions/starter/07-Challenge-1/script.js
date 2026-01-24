const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const userChoice = Number(
      prompt(
        `${this.question}\n0: JavaScript\n1: Python\n2: Rust\n3: C++\n(Write option number)`,
      ),
    );
    if (userChoice < this.answers.length) {
      this.answers[userChoice]++;
    }
    this.displayResults();
    this.displayResults('string');
  },
  displayResults: function (type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

const pollBtn = document.querySelector('.poll');
pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));
/*
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1] 
 */
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
