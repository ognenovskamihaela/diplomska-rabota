// Search bar
const books = [
    {
        titleBook: "Algorithms + Data Structures = Programs",
        authorsOfBooks: "Niklaus Wirth",
        pdfPath: "subjects/books/algorithms-and-data-structures.pdf"
    },
    {
        titleBook: "Data structures & Their Algorithms",
        authorsOfBooks: "Harry R. Lewis, Larry Denenberg",
        pdfPath: "subjects/books/data-structures-and-their-algorithms.pdf"
    },
    {
        titleBook: "Growing Algorithms And Data Structures",
        authorsOfBooks: "David Scuse",
        pdfPath: "subjects/books/growing-algorithms-and-data-structures.pdf"
    },
    {
        titleBook: "Graphic Design Basics",
        authorsOfBooks: "Amy E. Arntson",
        pdfPath: "subjects/books/graphic-design-basics.pdf"
    },
    {
        titleBook: "Graphic Design School",
        authorsOfBooks: "David Dabner, Sheena Calvert, Anoki Casey",
        pdfPath: "subjects/books/graphic-design-school-the-principles-and-practice-of-graphic-design_compress.pdf"
    },
    {
        titleBook: "Graphic Design Solutions",
        authorsOfBooks: "Robin Landa",
        pdfPath: "subjects/books/graphic-design-solutions.pdf"
    },
    {
        titleBook: "Graphic Design Theory",
        authorsOfBooks: "Meredith Davis",
        pdfPath: "subjects/books/graphic-design-theory-graphic-design-in-context.pdf"
    },
    {
        titleBook: "Designing A Wireless Network",
        authorsOfBooks: "Jeffrey Wheat, Randy Hiser, Jackie Tucker, Alicia Neely, Andy McCullough",
        pdfPath: "subjects/books/designing-a-wireless-network.pdf"
    },
    {
        titleBook: "Designing The Total Area Network",
        authorsOfBooks: "Mark Norris and Steve Pretty",
        pdfPath: "subjects/books/designing-the-total-area-network-intranets-vpns-and-enterprise-networks-explained.pdf"
    },
    {
        titleBook: "Computer System and Network Security",
        authorsOfBooks: "Gregory B. White, Eric A. Fisch, Udo W. Pooch",
        pdfPath: "subjects/books/computer-system-and-network-security.pdf"
    },
    {
        titleBook: "Computer Architecture And Organization",
        authorsOfBooks: "John P.Hayes",
        pdfPath: "subjects/books/computer-architecture-and-organization.pdf"
    },
    {
        titleBook: "Fundamentals Of Computer Organization And Architecture",
        authorsOfBooks: "Mostafa Abd-El-Barr, Hesham El-Rewini",
        pdfPath: "subjects/books/fundamentals-of-computer-organization-and-architecture.pdf"
    },
    {
        titleBook: "Parallel Computer Organization And Design",
        authorsOfBooks: "Michel Dubois, MuraliI Annavaram, Per Stenstrom",
        pdfPath: "subjects/books/parallel-computer-organization-and-design.pdf"
    },
    {
        titleBook: "Software Engineering",
        authorsOfBooks: "Sommerville",
        pdfPath: "subjects/books/software-engineering_8.pdf"
    },
    {
        titleBook: "Software Engineering",
        authorsOfBooks: "Chandramouli Subramanian, Saikat Dutt, Chandramouli Seetharaman, B. G. Geetha",
        pdfPath: "subjects/books/software-engineering.pdf"
    },
    {
        titleBook: "Concepts of Database Management",
        authorsOfBooks: "Starks, Pratt, Last",
        pdfPath: "subjects/books/concepts-of-database-management.pdf"
    },
    {
        titleBook: "Database Replication",
        authorsOfBooks: "M. Tamer Özsu",
        pdfPath: "subjects/books/database-replication.pdf"
    },
    {
        titleBook: "Learning Object-Oriented Programming",
        authorsOfBooks: "Gaston C.Hillar",
        bookDescription: "This book provides a detailed overview of the Logix platform including ControlLogix, CompactLogix, and SoftLogix and explains the significant changes introduced in Studio 5000.",
        pdfPath: "subjects/books/learning-object-oriented-programming.pdf"
    },
    {
        titleBook: "Javascript: Object-Oriented-Programming",
        authorsOfBooks: "Packt Publishing",
        bookDescription: "While JavaScript is built on sound design principles, unfortunately, the language had to evolve along with the browser.",
        pdfPath: "subjects/books/javascript-object-oriented-programming.pdf"
    },
    {
        titleBook: "Full Stack Web Development with Backbone.js",
        authorsOfBooks: "Patrick Mulder",
        bookDescription: "New graduates or junior developers who are transitioning to working as part of a larger team structure in multi-disciplinary teams and developers previously focused on only front-end or back-end dev transitioning into full stack.",
        pdfPath: "subjects/books/full-stack-web-development-with-backbonejs.pdf"
    },
    {
        titleBook: "C++ Programming",
        authorsOfBooks: "D.S.Malik",
        bookDescription: "This new edition includes updated end-of-chapter exercises, new debugging exercises, an earlier introduction to variables and a streamlined discussion of user-defined functions.",
        pdfPath: "subjects/books/c-programming.pdf"
    },
    {
        titleBook: "Programming challenges",
        authorsOfBooks: "Steven S.Skiena, Miguel A.Revilla",
        bookDescription: "Programming paradigm that defines applications as networks of black box processes, which exchange data across predefined connections by message passing, where the connections are specified externally to the processes.",
        pdfPath: "subjects/books/programming-challenges-the-programming-contest-training-manual.pdf"
    },
];

function searchBooks() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const matchingBooks = books.filter(book => {
        const titleMatch = book.titleBook.toLowerCase().includes(searchInput);
        const authorsMatch = book.authorsOfBooks.toLowerCase().includes(searchInput);
        return titleMatch || authorsMatch;
    });

    const searchResults = document.getElementById("search-results");
    searchResults.innerHTML = ""; 

    if (matchingBooks.length === 0) {
        searchResults.innerHTML = "<p>No matching books found.</p>";
        return;
    }

    matchingBooks.forEach(book => {
        const card = document.createElement("div");
        card.className = "card col-sm-12";


        card.innerHTML = `
        <div class="cards d-sm-flex">
        <div class="card " style="width: fit-content;">
            <div class="card-body">
                <h2 class="titleBook">${book.titleBook}</h2>
                <h2 class="authorsOfBooks">  -  ${book.authorsOfBooks}</h2>
            </div>
            <button type="button" class="btn btn-light"><a href="${book.pdfPath}" class="nav-link" target="_blank"> Read Book</a></button>
        </div>
        </div>
            `;

        searchResults.appendChild(card);
    });
}
document.getElementById("search-button").addEventListener("click", searchBooks);