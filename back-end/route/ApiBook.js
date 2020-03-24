var express = require("express");
var router = express.Router();

let books = [
  { bookid: 001, bookname: "ฟิสิกส์ ม.1", group: "วิทยาศาสตร์" ,status: 0},
  { bookid: 002, bookname: "หน้าที่พลเมือง", group: "สังคมศึกษา" , status: 1 }
];

router
  .route("/")
  // get all bookF
  .get((req, res) => res.json(books))
  // insert a new bear
  .post((req, res) => {
    var book = {};
    book.bookid = books.length > 0 ? books[books.length - 1].bookid + 1 : 0;
    book.bookid = req.body.bookid;
    book.bookname = req.body.bookname;
    book.group = req.body.group;
    book.status = 0 ;
    books.push(book);
    res.json({ message: "book created!" });
  });

router
  .route("/:book_id")
  // get a book
  .get((req, res) => {
    console.log(req.params.book_id);

    let id = req.params.book_id;
    let index = books.findIndex(book => book.bookid === +id);
    res.json(books[index]);
  })

  // Update a book
  .put((req, res) => {
    let id = req.params.book_id;
    let index = books.findIndex(book => book.id === +id);
    bears[index].bookid = req.body.bookid;
    bears[index].bookname = req.body.bookname;
    bears[index].group = req.body.group;
    res.json({ message: "book updated!" + req.params.book_id });
  })

  // Delete a book
  .delete((req, res) => {
    let id = req.params.book_id;
    let index = books.findIndex(book => book.id === +id);
    books.splice(index, 1);
    res.json({ message: "book deleted: " + req.params.book_id });
  });

  // cheng status

  router
  .route("/changestatus/:book_id")
  .put((req, res) => {
    let id = req.params.book_id;
    let index = books.findIndex(book => book.bookid     === +id);
    console.log(books[index]    );
    if(!books[index]) res.json({message : "not found"})
    else{
        books[index].status = (books[index].status + 1)%2;
        res.json({ message: "book updated!" , book : books[index] });
    }
    
  })
  router
  .route("/changestatus")
  .post((req, res) => {
    let id = req.body.book_id;
    let result = id.map(item=>{
        let index = books.findIndex(book => book.bookid     === item);
        console.log(books[index]    );
        if(!books[index]) {
            return null
        }
        else{
            books[index].status = (books[index].status + 1)%2;
            return books[index]
        }
    })
   
    res.json({ message: "book updated!" , book : result });
  })

  
module.exports = router;