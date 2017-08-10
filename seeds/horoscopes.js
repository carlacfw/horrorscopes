
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('horoscopes').del()
    .then(function () {
      // Inserts seed entries
      return knex('horoscopes').insert([
        {id: 201, star_signs: 'Aries', horoscope_1: "The whole rule of ‘never explore strange noises in the basement/woods/haunted attic’ was created for the Aries people of the world. They are brave and adventurous to a fault. When a serial killer is on the loose, they won’t play it safe and will eventually be axed when they go off on their own to investigate.", horoscope_2: ""},
        {id: 202, star_signs: 'Taurus', horoscope_1: "A Taurus will nearly make it to the end, but their demise will be their independence. At some point someone will tell them what they should do for their own safety and they’ll think, “who the fuck are you?” and do their own thing. In scary movies, there’s safety in numbers.", horoscope_2: ""},
        {id: 203, star_signs: 'Gemini', horoscope_1: "A Gemini will DEFINITELY be one of the first people to die. They see the good in everyone so they’ll be the one basically trying to make friends with the killer as he’s killing them. RIP Gemini.", horoscope_2: ""},
        {id: 204, star_signs: 'Cancer', horoscope_1: "Sweet, sweet Cancer might survive if they surround themselves with one or two stronger friends, but if they’re on their own — lol, no. Cancers are lovers, not fighters, they’ll be murdered doing something cool like going for a midnight swim (water sign yo) or making love to their honey.", horoscope_2: ""},
        {id: 205, star_signs: 'Leo', horoscope_1: "TBH a Leo would probably end up being the killer. They are smart and creative enough to pull it off, and they’d love the attention that came with their extremely infamous death.", horoscope_2: ""},
        {id: 206, star_signs: 'Virgo', horoscope_1: "A Virgo would not survive a horror movie. It’s hard to imagine a Virgo being so impractical as to find themselves in any setting in which a horror movie would take place. They would never get lost on an abandoned road, feel tempted to explore a now defunct insane asylum, and they’re savvy enough with real estate transactions not to purchase a house that was built cursed burial ground. They are the minor character we are only introduced to in order to seem them murdered in some spectacular way.", horoscope_2: ""},
        {id: 207, star_signs: 'Libra', horoscope_1: "A Libra would probably survive a horror movie. They are too well-liked to be anyone’s target and they are smart enough to figure out how to get out of a bad situation.", horoscope_2: ""},
        {id: 208, star_signs: 'Scorpio', horoscope_1: "A Scorpio would survive a horror movie, but only because they are willing to put up a hard fight to get through it. Scorpios are scrappy. They will fight tooth and nail to survive.", horoscope_2: ""},
        {id: 209, star_signs: 'Sagittarius', horoscope_1: "Let’s be honest, we all love Sagittarius people, but they definitely aren’t going to survive. They’ll be the comic relief that cracks jokes through the whole movie and then dies in a scary-but-hilarious way like drinking a beer bong full of blood.", horoscope_2: ""},
        {id: 210, star_signs: 'Capricorn', horoscope_1: "A Capricorn would not survive a horror movie. They are shrewd and adept, sure, but they also have a likeability problem. They are the accountant that gets murdered after yelling at a sweet old lady for being slow and everyone in the audience cheers inside.", horoscope_2: ""},
        {id: 211, star_signs: 'Aquarius', horoscope_1: "An Aquarius’ sense of charity would be their downfall. They are the person who picks up hitchhikers or stops to help someone who falls down and then gets murdered. The every man/woman for themselves mantra you need to survive a horror movie would never appeal to an Aquarius.", horoscope_2: ""},
        {id: 212, star_signs: 'Pisces', horoscope_1: "A Pisces would survive a horror movie. They would be the quiet genius you don’t really pay attention to until they end. Pisces are creative and underrated, they’d notice ways to get out or hide that other people wouldn’t see — they can also kill a bitch if need be.", horoscope_2: ""}
      ]);
    });
};
