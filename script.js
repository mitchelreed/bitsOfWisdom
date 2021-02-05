$(document).ready(function () {
    //  array of [quotes] and [authors]
    const quotes = [
        [`When the way comes to an end, then change. Having changed, you pass through. `, ` – I Ching`],
        [`Before the beginning of great brilliance, there must be chaos. Before a brilliant person begins something great, they must look foolish in the crowd. `, ` – I Ching`],
        [`When the way comes to an end, then change. Having changed, you pass through. `, ` – I Ching`],
        [`Unity requires a collective moral force, together with a great leader. Ancestors unite the clan, and heaven unites nature. With unity the time is right for great deeds.`, ` – I Ching`],
        [`There is always danger in circumstances of abundance. The inferior man pushes forward through excessive ambition, thereby losing touch with men of talent and virtue in positions below him.`, ` – I Ching`],
        [`A person should contemplate the workings of the universe with reverence and introspection. In this way expression is given to the effects of these laws upon his own person. This is the source of a hidden power.`, ` – I Ching`],
        [`Arrogance means that one knows how to press forward But not how to draw back, that one knows existence but not annihilation, knows something about winning but nothing about losing.`, ` – I Ching`],
        [`Men are deceived by what the eyes see, But the gods are swayed by what the heart conceals.`, `
        – I Ching`],
        [`Take it easy, but, take it!! `, `– Terence McKenna`],
        [`Creativity comes from awakening and directing men's higher natures, which originate in the primal depths of the universe and are appointed by Heaven.`, ` – I Ching`],
        [`Walk as if you are kissing the Earth with your feet.`, ` – Thich Nhat Hanh`],
        [`I have lived with several Zen masters -- all of them cats.`, ` – Eckhart Tolle`],
        [`The way out is through the door. Why is it that no one will use this method?`, ` – Confucius`],
        [`Only the hand that erases can write the true thing.`, ` – Meister Eckhart`],
        [`Like vanishing dew, a passing apparition or the sudden flash of lightning -- already gone -- thus should one regard one's self.`, ` – Ikka Myōju`],
        [`Nature loves courage.`, ` – Terence McKenna`],
        [`The cost of sanity in this society, is a certain level of alienation.`, ` – Terence McKenna`],
        [`The doors of heaven and hell are adjacent and identical.`, ` – Nikos Kazantzakis`],
        [`You have to take seriously the notion that understanding the universe is your responsibility, because the only understanding of the universe that will be useful to you is your own understanding.`, ` – Terence McKenna`],
        [`You are a divine being. You matter, you count. You come from realms of unimaginable power and light, and you will return to those realms.`, ` – Terence McKenna`],
        [`For principled reasons, Einstein’s spacetime cannot be foundational in physics`,
            ` – Donald Hoffman`],
        [`My technique is don’t believe anything. If you believe in something, you are automatically precluded from believing its opposite.`, ` – Terence McKenna`],
        [`It is not down on any map; true places never are.`, ` - Herman Melville`],
        [`The problem is not to find the answer, it's to face the answer.`, ` – Terence McKenna`],
        [`Man, when you lose your laugh you lose your footing.`, ` – Ken Kesey`],
        [`He who marches out of step hears another drum.`,
            ` – Ken Kesey`],
        [`Plant a garden in which strange plants grow and mysteries bloom.`, ` – Ken Kesey`],
        [`No, you can't ever fake being weak. You can only fake being strong. . .`, ` – Ken Kesey`],
        [`You can make a mark across the night with the tip of an embered stick, and you can actually see it fixed in its finity. You can be absolutely sure of its treacherous impermanence.`,
            ` – Ken Kesey`],
        [`Every little thing is sent for something, and in that thing there should be happiness and the power to make happy. Like the grasses showing tender faces to each other, thus we should do, for this was the wish of the Grandfathers of the World.`, ` – Black Elk`],
        [`How could men get fat by being bad and starve by being good? I thought and thought about my vision, and it made me very sad.`,
            ` – John G Neihardt`],
        [`Is not the sky a father and the earth a mother, and are not all living things with feet or wings or roots their children?`,
            ` – Black Elk`],
        [`When deep friendships exist, formalities and elaborate preparations are not necessary.`, ` – I Ching`]
    ]


    // to hide the .secret class
    $(".secret").hide();

    // generate random quote from ^ array
    function newQuote() {
        // random whole number for the length of my array 
        let randomNumber = Math.floor(Math.random() * (quotes.length));
        // display the quote body position 0
        $(`#quoteDisplay`).text(quotes[randomNumber][0]);
        // display author so it can be styled on its own
        $(`#authorDisplay`).text(quotes[randomNumber][1]);
        // to display my secret on #9
        if (randomNumber === 9) {
            $(".secret").show();
            // hide quotes while secret is up
            $(".quoteStyle").hide();
            // to remove my secret after 5 seconds
            setTimeout(function revealSecret() {
                $(".secret").hide();
                // turn quotes back on after secret is done
                $(".quoteStyle").show();
            }, 5000)
        }
    }

    // the button that triggers my newQuote function
    $("button").on("click", function () {
        newQuote()
    })

});



