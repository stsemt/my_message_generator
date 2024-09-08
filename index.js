
// Stored data about quotes
const quotesAll = {
    quotesTurkish : [
        `"The death of another does not save us." — Turkish proverb`,
        `"A lover is one who, running in the snow, leaves no traces of his footsteps." — Turkish proverb`,
        `"Work breeds prosperity." — Turkish proverb`,
        `"Wish well be good." — Turkish proverb`,
        `"Love is like a nest of sparrows, once destroyed, it can no longer be rebuilt." — Turkish proverb`,
        `"You cannot stare at two things: the sun and death." — Turkish proverb`,
        `"Good words will open iron gates." — Turkish proverb`,
        `"Pick up a needle and prick yourself (to see how it hurts) before you prick others." — Turkish proverb`,
        `"Two captains sink a ship." — Turkish proverb`,
        `"If you don't keep seeing them, you will lose them." — Turkish proverb`
    ],
    
    quotesGreek : [
        `“Wisdom outweighs any wealth.” — Sophocles`,
        `“At a touch of love, everyone becomes a poet.” — Plato`,
        `“There is nothing permanent except change.” — Heraclitus`,
        `“The worst of all deceptions is self-deception.” — Plato`,
        `“You cannot step into the same river twice.” — Heraclitus`,
        `“In all things of nature, there is something of the marvelous.” — Aristotle`,
        `“I have often regretted my speech, never my silence.” — Publilius Syrus`
    ],
    
    quotesRoman : [
        "Omnium Rerum Principia Parva Sunt – ‘The beginnings of all things are small. — Cicero",
        "Vixere – They lived. — Cicero",
        "Semper Idem – Always the same. — Cicero",
        "Pecunia Nervus Belli – Money is the soul (or sinew) of war. — Cicero",
        "Male Parta Male Dilabuntur – What has been wrongly gained is wrongly lost. — Cicero",
        "Veritas Odit Moras – Truth hates delay. — Seneca",
        "Timendi Causa Est Nescire – The cause of fear is ignorance. — Seneca",
        "Vivamus, Moriendum Est – Let us live, since we must die. — Seneca",
        "Nemo Sine Vitio Est – No one is without fault. — Seneca",
        "Magna Servitus Est Magna Fortuna – A great fortune is a great slavery. — Seneca",
        "Alea Jacta Est – The die is cast. — Julius Caesar",
        "Veni, vidi, vici - I came, I saw, I conquered. — Julius Caesar",
        "Divide et imperia – Divide and conquer. — Julius Caesar",
        "Qui desiderat pacem praeparet bellum - Let him who desires peace prepare for war. — Vegetius"
    ],

    asciiArtArray : [
        `:-)`, // Smiling Face
        `
        __  __
       /  \\/  \\
       \\      /
        \\    /
         \\  /
          \\/
        `, // Heart
        `
       /\\_/\\  
      ( o.o ) 
       > ^ <
        `, // Cat
        `
         /\\
        /  \\
       /____\\
         ||
         ||
        `, // Tree
        `
         /\\
        /  \\
       /____\\
       |    |
       |____|
        `, // House
        `
          ^
         / \\
        /___\\
        |   |
        |   |
        |___|
       /     \\
      /_______\\
        `, // Rocket
        `><(((('>`, // Fish
        `
          *
         /|\\
        / | \\
       /__|__\\
         / \\
        /   \\
        `, // Star
        `
         \\  |  /
        '. \\|/ .'
        '-.;;;.-'
      --==;;;;;==--
        .-';;;'-.
        .' /|\\ '.
         /  |  \\
        `, // Sun
        `
        _ _
       ( v )
        \\|/
         |
         |
        ` // Flower
      ]
};



// The script which randomly selects one of the quotes and logs it

function getRandomQuote() {
    const categories = Object.keys(quotesAll);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const quotes = quotesAll[randomCategory];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
}

console.log(getRandomQuote());
