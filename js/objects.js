(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: "Daniel",
        lastName: "Fryar",
        sayHello : function() {
            return "Hello from " + this.firstName + " " + this.lastName + "!";
        }
    }

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // person.sayHello = function() {
    //     return "Hello from " + this.firstName + " " + this.lastName + "!";
    // }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function (shopper) {
        var discount = 0;
        if (shopper.amount > 200)
            discount = shopper.amount * .12;
        var total = shopper.amount - discount;
        console.log(shopper.name + "'s bill was $" +
                    shopper.amount +
                    ". They received a discount of $" +
                    discount +" and their total was $" +total + ".");
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: 'Cather in the Rye',
            author: {
                firstName: "J.D.",
                lastName: "Salinger"
            }
        },
        {
            title: 'The Buffalo Soldier',
            author: {
                firstName: "Chris",
                lastName: "Bohjalian"
            }
        },
        {
            title: 'Nine Stories',
            author: {
                firstName: "J.D.",
                lastName: "Salinger"
            }
        },
        {
            title: "The Walking Drum",
            author: {
                firstName: "Louis",
                lastName: "L'Amour"
            }
        },
        {
            title: "Ready Player One",
            author: {
                firstName: "Ernest",
                lastName: "Cline"
            }
        },
        {
            title: "Last of the Breed",
            author: {
                firstName: "Louis",
                lastName: "L'Amour"
            }
        },
        {
            author : {
                firstName: "Alan",
                lastName: "Watts"
            },
            title : "The Book on The Taboo Against Knowing Who You Are"
        },

        {
            author : [
                {firstName:"Joseph"},
                {lastName:"Murphy"}
            ],
            title : "The Power Of Your Subconscious Mind"
        },

        {
            author : [
                {firstName:"Danny"},
                {lastName:"Meyer"}
            ],
            title : "Setting the Table"
        },
        {
            author : [
                {firstName:"Ayn"},
                {lastName:"Rand"}
            ],
            title : "Atlas Shrugged"
        },
        {
            title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }
        },
        {
            title: "Walkaway",
            author: {
                firstName: "Cory",
                lastName: "Doctorow",
            }
        },
        {
            title: "A Brief History of Time",
            author: {
                firstName: "Stephen",
                lastName: "Hawking",
            }
        },
        {
            title: "Moby Dick",
            author: {
                firstName: "Herman",
                lastName: "Melville",
            }
        },
        {
            title: "Treasure Island",
            author: {
                firstName: "Robert",
                lastName: "Stevenson",
            }
        },
        {author:{firstName: "J.K.", lastName: "Rowling"}, title: "Harry Potter and the Chamber of Secrets"},
        {author:{firstName: "Arthur.", lastName: "Golden"}, title: "Memoirs of a Geisha"},
        {author:{firstName: "Dante", lastName: "Alighieri"}, title: "Divine Comedy"},
        {author:{firstName: "Carl", lastName: "Jung"}, title: "The Archetypes and the Collective Unconscious"},
        {author:{firstName: "Karl", lastName: "Marx"}, title: "The Communist Manifesto"},
        {author:{firstName: "A.A.", lastName: "Milne"}, title: "Winnie the Pooh"},
        {number: 1, title: "Wild At Heart", author:{firstName: "John", lastName: "Eldridge"}},
        {number: 2, title: "sherlock holmes", author:{firstName: "Author", lastName: "Doyle"}},
        {number: 3, title: "Daniel Boone", author:{firstName: "John", lastName: "Faragher"}},
        {number: 4, title: "Linux Bible", author:{firstName: "Christopher", lastName: "Negus"}},
        {number: 5, title: "How Linux Works", author:{firstName: "Brian", lastName: "Ward"}},
        {
            title: "The Rise",
            author: {
                firstName: "Nora",
                lastName: "Roberts"
            }
        },
        {
            title: "The Guardians",
            author: {
                firstName: "John",
                lastName: "Grisham"
            }
        },
        {
            title: "A Minute to Midnight",
            author: {
                firstName: "John",
                lastName: "Grisham"
            }
        },
        {
            title: "Criss Cross",
            author: {
                firstName: "David",
                lastName: "Baldacci"
            }
        },
        {
            title: "Where the Crawdads Sing",
            author: {
                firstName: "Delia",
                lastName: "Owens"
            }
        },
        {
            title: "48 Laws of Power",
            author:{
                firstName: "Robert",
                lastName: "Greene",
            }
        },
        {
            title: "Rich dad, poor dad",
            author:{
                firstName: "Robert",
                lastName: "Kyosaki",
                report: function() {
                    console.log(this.firstName + " " + this.lastName + " .");
                }
            },
        },
        {
            title: "Greenbacks and Ghetto Politics",
            author: {
                firstName: "Paris",
                lastName: "Tyus",
                report: function () {
                    console.log(this.firstName + " " + this.lastName + " .");
                }
            },
        },
        {
            title: "Millionaire Mind",
            author: {
                firstName: "Thomas",
                lastName: "Stanley",
                report: function () {
                    console.log(this.firstName + " " + this.lastName + " .");
                }
            }
        }
    ];
    console.log(books.length);
    for (var i=0;i<books.length;i++) {
        console.log(books[i].title + " by " + books[i].author.lastName);
    }

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function(book, i) {
        console.log("Book # "+(i+1))
        console.log("Title: "+book.title)
        console.log("Author: "+ book.author.firstName + " " + book.author.lastName)
        console.log("---")
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    var title = "Hello";
    var createBook = function(title, authorFirstName, authorLastName){
        var book = {};
        book.title = title;
        book.author = {};
        book.author.firstName = authorFirstName;
        book.author.lastName = authorLastName;
        return book;
    }

    books.push(createBook("Leviathan", "Scott", "Westfield"));

    var showBookInfo = function(book, i) {
        console.log("Book # "+(i+1))
        console.log("Title: "+book.title)
        console.log("Author: "+ book.author.firstName + " " + book.author.lastName)
        console.log("---")

    }
    books.forEach(showBookInfo);

})();
