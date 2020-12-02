import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import BookCard from "../components/BookCard"

// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [books, setBook] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  useEffect(() => {
    API.getBooks()
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <Container>
    <Row>
        <Col size="md-10">
           
            {books.length? (
                <div>
                    {books.map(book => (
                                            

                        <BookCard key={book._id}  type="delete"
                             id ={book._id}
                            thumbnail={book.image}
                             href= {book.link}
                             title={book.title}
                             authors ={book.authors}
                             description ={book.description}
                            //  onClick={handleSaveBook(book)}
                            >
                            


                            {/* <a href={book.link}><button>view  book</button></a> */}
                           
                             {/* <Btn className="btn btn-secondary"  onClick={()=>handleSaveBook(book)}>Save</Btn> */}


                        </BookCard>
                        
                    ))}
                </div>
                
            ) : (
                    <h3 >No books saved</h3>
                )}




        </Col>
    </Row>





</Container>
    );
  }


export default Detail;
