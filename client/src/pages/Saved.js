import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import BookCard from "../components/BookCard"

// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [books, setBook] = useState({})

  useEffect(() => {
    API.getBooks()
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <div >
    <Container >
    <Row>
        <Col size="md-12">
           
            {books.length? (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
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
                            


                         

                        </BookCard>
                        
                    ))}
                </div>
                
            ) : (
                    <h3 >No books saved</h3>
                )}




        </Col>
    </Row>





</Container>
</div>
    );
  }


export default Detail;
