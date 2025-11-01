export const mcqQuestions = [
  // For integrity: I Sundra Bomjan hereby swear that these questions are generated with the help of AI
  // I have 100 questions from various fields.

  // Javascript section
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["Number", "String", "Boolean", "Character"],
    answer: "Character",
  },
  {
    question: "What does '===' mean in JavaScript?",
    options: [
      "Strict equality",
      "Assignment",
      "Loose equality",
      "Comparison operator",
    ],
    answer: "Strict equality",
  },
  {
    question: "Which method converts JSON to JS object?",
    options: ["JSON.parse", "JSON.stringify", "JSON.convert", "JSON.toObject"],
    answer: "JSON.parse",
  },
  {
    question: "Which keyword declares a block-scoped variable?",
    options: ["let", "var", "const", "all of these"],
    answer: "let",
  },
  {
    question: "What is the output: console.log(typeof NaN)?",
    options: ["number", "NaN", "undefined", "object"],
    answer: "number",
  },
  {
    question: "How do you write a JS arrow function?",
    options: ["() => {}", "function() {}", "-> {}", "{} => ()"],
    answer: "() => {}",
  },
  {
    question: "Which event triggers when a user clicks a button?",
    options: ["onclick", "onhover", "onload", "onfocus"],
    answer: "onclick",
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Digital Object Model",
      "Document Oriented Model",
    ],
    answer: "Document Object Model",
  },
  {
    question: "Which array method adds an element to the end?",
    options: ["push", "pop", "shift", "unshift"],
    answer: "push",
  },
  {
    question: "Which of these is a JavaScript framework?",
    options: ["React", "HTML", "CSS", "MySQL"],
    answer: "React",
  },

  //Html Section
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperlink Text Language",
      "Hyper Tool Markup Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "Which tag is used for a paragraph?",
    options: ["<p>", "<h1>", "<div>", "<span>"],
    answer: "<p>",
  },
  {
    question: "Which attribute specifies an image URL?",
    options: ["src", "href", "alt", "link"],
    answer: "src",
  },
  {
    question: "Which tag creates a hyperlink?",
    options: ["<a>", "<link>", "<url>", "<hyper>"],
    answer: "<a>",
  },
  {
    question: "HTML files have which extension?",
    options: [".html", ".htm", ".xml", ".txt"],
    answer: ".html",
  },
  {
    question: "Which element is for the largest heading?",
    options: ["<h1>", "<h6>", "<head>", "<header>"],
    answer: "<h1>",
  },
  {
    question: "What does the <br> tag do?",
    options: ["Line break", "Bold text", "Paragraph", "Block element"],
    answer: "Line break",
  },
  {
    question: "Which tag is used to define a table row?",
    options: ["<tr>", "<td>", "<th>", "<table>"],
    answer: "<tr>",
  },
  {
    question: "Which tag is used to make text italic?",
    options: ["<i>", "<em>", "<italic>", "<it>"],
    answer: "<i>",
  },
  {
    question: "Which attribute provides alternative text for images?",
    options: ["alt", "title", "src", "text"],
    answer: "alt",
  },

  // CSS section
  {
    question: "Which property changes text color?",
    options: ["color", "background", "font-style", "text-color"],
    answer: "color",
  },
  {
    question: "Which CSS property is for spacing inside an element?",
    options: ["padding", "margin", "border", "spacing"],
    answer: "padding",
  },
  {
    question: "How do you select an element by id?",
    options: ["#id", "$id", ".id", "*id"],
    answer: "#id",
  },
  {
    question: "Which property sets font size?",
    options: ["font-size", "text-size", "size", "font-style"],
    answer: "font-size",
  },
  {
    question: "Which property changes the background color?",
    options: ["background-color", "color", "bg-color", "background"],
    answer: "background-color",
  },
  {
    question: "What is the default position value?",
    options: ["static", "relative", "absolute", "fixed"],
    answer: "static",
  },
  {
    question: "Which unit is relative to font-size of element?",
    options: ["em", "px", "pt", "%"],
    answer: "em",
  },
  {
    question: "Which pseudo-class applies when mouse hovers?",
    options: [":hover", ":active", ":focus", ":visited"],
    answer: ":hover",
  },
  {
    question: "Which property aligns text horizontally?",
    options: ["text-align", "align-text", "justify", "vertical-align"],
    answer: "text-align",
  },
  {
    question: "Which property controls element transparency?",
    options: ["opacity", "alpha", "transparent", "visibility"],
    answer: "opacity",
  },

  // MDD section questions
  {
    question: "Which command retrieves data from a table?",
    options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    answer: "SELECT",
  },
  {
    question: "Which keyword removes duplicates in SELECT?",
    options: ["DISTINCT", "UNIQUE", "REDUCE", "GROUP"],
    answer: "DISTINCT",
  },
  {
    question: "Primary key must be?",
    options: ["Unique", "Null", "Duplicate", "Optional"],
    answer: "Unique",
  },
  {
    question: "Which command adds a new row?",
    options: ["INSERT INTO", "UPDATE", "CREATE", "ALTER"],
    answer: "INSERT INTO",
  },
  {
    question: "Which SQL clause filters rows?",
    options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"],
    answer: "WHERE",
  },
  {
    question: "Which command deletes a table?",
    options: ["DROP TABLE", "DELETE", "REMOVE", "TRUNCATE TABLE"],
    answer: "DROP TABLE",
  },
  {
    question: "Which function counts rows?",
    options: ["COUNT()", "SUM()", "TOTAL()", "NUM()"],
    answer: "COUNT()",
  },
  {
    question: "Default sorting order?",
    options: ["ASC", "DESC", "RANDOM", "NONE"],
    answer: "ASC",
  },
  {
    question: "Which clause is for grouping?",
    options: ["GROUP BY", "ORDER BY", "HAVING", "WHERE"],
    answer: "GROUP BY",
  },
  {
    question: "Which command modifies a table structure?",
    options: ["ALTER TABLE", "UPDATE", "MODIFY", "CHANGE"],
    answer: "ALTER TABLE",
  },

  // linux section
  {
    question: "Command to list files?",
    options: ["ls", "dir", "list", "show"],
    answer: "ls",
  },
  {
    question: "Command to print working directory?",
    options: ["pwd", "dir", "whereami", "path"],
    answer: "pwd",
  },
  {
    question: "Command to change directory?",
    options: ["cd", "chdir", "move", "goto"],
    answer: "cd",
  },
  {
    question: "Command to remove a file?",
    options: ["rm", "delete", "del", "remove"],
    answer: "rm",
  },
  {
    question: "Command to create a directory?",
    options: ["mkdir", "touch", "rmdir", "make"],
    answer: "mkdir",
  },
  {
    question: "Command to view file content?",
    options: ["cat", "show", "less", "display"],
    answer: "cat",
  },
  {
    question: "Command to copy files?",
    options: ["cp", "mv", "copy", "duplicate"],
    answer: "cp",
  },
  {
    question: "Command to move files?",
    options: ["mv", "cp", "move", "transfer"],
    answer: "mv",
  },
  {
    question: "Command to display last lines of a file?",
    options: ["tail", "head", "end", "showlast"],
    answer: "tail",
  },
  {
    question: "Command to search text in a file?",
    options: ["grep", "find", "search", "locate"],
    answer: "grep",
  },

  // Bhutan History
  {
    question: "Who was the first King of Bhutan?",
    options: [
      "Ugyen Wangchuck",
      "Jigme Wangchuck",
      "Jigme Dorji Wangchuck",
      "Jigme Singye Wangchuck",
    ],
    answer: "Ugyen Wangchuck",
  },
  {
    question: "In which year did Bhutan become a monarchy?",
    options: ["1907", "1947", "1910", "1926"],
    answer: "1907",
  },
  {
    question: "National language of Bhutan?",
    options: ["Dzongkha", "English", "Nepali", "Tibetan"],
    answer: "Dzongkha",
  },
  {
    question: "Which is the national sport of Bhutan?",
    options: ["Archery", "Football", "Basketball", "Cricket"],
    answer: "Archery",
  },
  {
    question: "Capital city of Bhutan?",
    options: ["Thimphu", "Paro", "Punakha", "Phuntsholing"],
    answer: "Thimphu",
  },
  {
    question: "Which river flows through Punakha?",
    options: ["Pho Chhu", "Mo Chhu", "Wang Chhu", "Ra Chhu"],
    answer: "Pho Chhu",
  },
  {
    question: "Who is known as the Father of Modern Bhutan?",
    options: [
      "Jigme Dorji Wangchuck",
      "Ugyen Wangchuck",
      "Jigme Wangchuck",
      "Jigme Singye Wangchuck",
    ],
    answer: "Jigme Dorji Wangchuck",
  },
  {
    question: "Traditional Bhutanese dress for men?",
    options: ["Gho", "Kira", "Chuba", "Dhoti"],
    answer: "Gho",
  },
  {
    question: "Bhutan joined the UN in which year?",
    options: ["1971", "1955", "1960", "1980"],
    answer: "1971",
  },
  {
    question: "Bhutan's currency?",
    options: ["Ngultrum", "Rupee", "Dollar", "Yen"],
    answer: "Ngultrum",
  },

  // General Section
  {
    question: "Largest ocean on Earth?",
    options: ["Pacific", "Atlantic", "Indian", "Arctic"],
    answer: "Pacific",
  },
  {
    question: "Current UN Secretary-General?",
    options: ["António Guterres", "Ban Ki-moon", "Kofi Annan", "Boutros Ghali"],
    answer: "António Guterres",
  },
  {
    question: "Which planet is closest to the sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    answer: "Mercury",
  },
  {
    question: "Longest river in the world?",
    options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    answer: "Nile",
  },
  {
    question: "Which country has the largest population?",
    options: ["China", "India", "USA", "Russia"],
    answer: "China",
  },
  {
    question: "Chemical symbol for Iron?",
    options: ["Fe", "Ir", "In", "I"],
    answer: "Fe",
  },
  {
    question: "Who wrote 'The Odyssey'?",
    options: ["Homer", "Shakespeare", "Plato", "Socrates"],
    answer: "Homer",
  },
  {
    question: "Which gas is essential for respiration?",
    options: ["Oxygen", "CO2", "Nitrogen", "Helium"],
    answer: "Oxygen",
  },
  {
    question: "Fastest land animal?",
    options: ["Cheetah", "Lion", "Tiger", "Horse"],
    answer: "Cheetah",
  },
  {
    question: "Highest mountain on Earth?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    answer: "Mount Everest",
  },

  // FOC and general programming questions
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Control Processing Unit",
      "Central Performance Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question: "Which is a low-level programming language?",
    options: ["Assembly", "Python", "JavaScript", "HTML"],
    answer: "Assembly",
  },
  {
    question: "What is recursion?",
    options: [
      "Function calling itself",
      "Loop inside loop",
      "Nested function",
      "Infinite loop",
    ],
    answer: "Function calling itself",
  },
  {
    question: "Which data structure uses FIFO?",
    options: ["Queue", "Stack", "Tree", "Graph"],
    answer: "Queue",
  },
  {
    question: "Which principle is used in OOP?",
    options: ["Encapsulation", "Abstraction", "Inheritance", "All of these"],
    answer: "All of these",
  },
  {
    question: "Which is an interpreted language?",
    options: ["Python", "C++", "Java", "Go"],
    answer: "Python",
  },
  {
    question: "Which of these is an input device?",
    options: ["Keyboard", "Monitor", "Printer", "Speaker"],
    answer: "Keyboard",
  },
  {
    question: "Which memory is volatile?",
    options: ["RAM", "ROM", "Hard Disk", "SSD"],
    answer: "RAM",
  },
  {
    question: "Which of these is an output device?",
    options: ["Mouse", "Monitor", "Keyboard", "Scanner"],
    answer: "Monitor",
  },
  {
    question: "CPU stands for?",
    options: [
      "Central Processing Unit",
      "Computer Processing Unit",
      "Central Performance Unit",
      "Control Processing Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question: "Which device connects computers in a LAN?",
    options: ["Switch", "Router", "Modem", "Hub"],
    answer: "Switch",
  },
  {
    question: "Which protocol is used to send emails?",
    options: ["SMTP", "HTTP", "FTP", "DNS"],
    answer: "SMTP",
  },
  {
    question: "IP address identifies a computer on which network?",
    options: ["Internet", "LAN", "Both", "None"],
    answer: "Both",
  },
  {
    question: "Which one is a wireless network technology?",
    options: ["Wi-Fi", "Ethernet", "USB", "Bluetooth Cable"],
    answer: "Wi-Fi",
  },
  {
    question: "HTTP is used for?",
    options: ["Web pages", "Emails", "File Transfer", "DNS Lookup"],
    answer: "Web pages",
  },
  {
    question: "What is the main function of a router?",
    options: [
      "Connect different networks",
      "Store data",
      "Process data",
      "Display webpages",
    ],
    answer: "Connect different networks",
  },
  {
    question: "Which of the following is non-volatile memory?",
    options: ["ROM", "RAM", "Cache", "Registers"],
    answer: "ROM",
  },
  {
    question: "Which protocol is used to transfer files?",
    options: ["FTP", "HTTP", "SMTP", "IMAP"],
    answer: "FTP",
  },
  {
    question: "What is the main function of DNS?",
    options: [
      "Translate domain names to IP addresses",
      "Transfer files",
      "Send emails",
      "Route packets",
    ],
    answer: "Translate domain names to IP addresses",
  },
  {
    question:
      "Which device is used to connect multiple devices to the Internet?",
    options: ["Router", "Monitor", "Printer", "Keyboard"],
    answer: "Router",
  },
  {
    question: "Which type of network covers a city or campus?",
    options: ["MAN", "LAN", "WAN", "PAN"],
    answer: "MAN",
  },
  // logical questions
  // ===== Logical Questions (9) =====
  {
    question:
      "If all cats are animals and all animals are mortal, then all cats are?",
    options: ["Mortal", "Immortal", "Reptiles", "Mammals"],
    answer: "Mortal",
  },
  {
    question: "Find the next number: 2, 6, 12, 20, 30, ?",
    options: ["42", "40", "36", "38"],
    answer: "42",
  },
  {
    question: "Which of the following is a contradiction?",
    options: [
      "All birds can fly and some birds cannot fly",
      "Some birds can fly",
      "All birds have wings",
      "All of these",
    ],
    answer: "All birds can fly and some birds cannot fly",
  },
  {
    question: "If today is Monday, what day will it be 100 days later?",
    options: ["Wednesday", "Thursday", "Friday", "Tuesday"],
    answer: "Wednesday",
  },
  {
    question: "Find the odd one out: 2, 3, 5, 7, 9, 11",
    options: ["9", "2", "5", "7"],
    answer: "9",
  },
  {
    question:
      "A clock shows 3:15. What is the angle between hour and minute hands?",
    options: ["7.5°", "30°", "52.5°", "45°"],
    answer: "7.5°",
  },
  {
    question: "Which number replaces the question mark? 1, 4, 9, 16, 25, ?",
    options: ["36", "30", "32", "35"],
    answer: "36",
  },
  {
    question:
      "If all roses are flowers and some flowers fade quickly, which is correct?",
    options: [
      "Some roses fade quickly",
      "All roses fade quickly",
      "No rose fades",
      "Cannot be determined",
    ],
    answer: "Cannot be determined",
  },
  {
    question:
      "John is taller than Mike. Mike is taller than Sam. Who is shortest?",
    options: ["Sam", "John", "Mike", "Cannot be determined"],
    answer: "Sam",
  },
];
