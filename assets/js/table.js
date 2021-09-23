const Table = (questions, history, onclick=()=>{}) => tag("tbody", { children: [

  // headers
  tag("tr", { children: [
    tag("th", { children: [
      tag("div", { text: "Date" })
    ]}),
    ...filter(questions, (_, question) => 
      tag("th", { children: [
        tag("div", { text: question })
      ]})
    ),
  ]}),

  // answers
  ...filter(Object.entries(history)
  .sort(([timeA], [timeB]) => new Date(timeA).getTime() < new Date(timeB).getTime()),
  (_, [timestamp, answers]) => 
    tag("tr", { children: [
        tag("td", { children: [
          tag("div", { text: timeSince(new Date(timestamp)) }),
        ]}),
        ...filter(answers, (_, answer) => tag("td", { children: [
          tag("div", { text: answer }),
        ]}))
      ],

      // actions
      onclick: () => onclick(timestamp),
    })
  )
]})

// collect questions
const questions = () => filter(
  document.getElementsByClassName("question"),
  (_, questionElem) => questionElem.textContent
);

// show history
const updateHistoryView = (table, elem, questions) => {
  // download everything from localstorage
  const history = getItems(table);
  
  // clear table
  elem.innerHTML = "";

  // add header
  elem.appendChild(
    tag("h3", { text: "Memory" })
  )

  // assemble results table
  elem.appendChild(Table(questions, history, timestamp => {
    if (confirm(`Delete submission from ${new Date(timestamp).toLocaleString()}?`)) {
      deleteItem(table, timestamp);
      updateHistoryView(elem, questions);
    }
  }));
};
