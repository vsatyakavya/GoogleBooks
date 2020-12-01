
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom"
import { Col, Row, Container } from "../components/Grid"
import { Input, Btn } from "../components/Form"
import { List, ListItem } from "../components/List"
import BookCard from "../components/BookCard"

function Search() {
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState({})


    function handleInputChange(event) {
        const { name, value } = event.target;
        setSearch({...search, [name]: value })
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if(search.title) {
            API.getBooks(search.title)
                .then(res => setBooks(res.data.items),
                console.log(books)
                
                )
                .catch(err => console.log(err))
        }
    }

    function handleSaveBook( ){
        API.saveBook({
            title : books.title
        })
        
    }






    return (
        
            <Container fluid  style={{background:"#ffffff"}}>
                <Row>
                    <Col size="md-10">
                        <form>
                            <Input
                                onChange={handleInputChange}
                                name="title"
                                placeholder="Title (required)"

                            />
                            <Btn

                                disabled={!(search.title)}
                                onClick={handleFormSubmit}
                            >Submit</Btn>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-10">
                       
                        {books.length? (
                            <div>
                                {books.map(book => (
                                    <BookCard key={book._id}
                                        thumbnail={book.volumeInfo.imageLinks.thumbnail}
                                         href= {book.volumeInfo.canonicalVolumeLink}
                                         title={book.volumeInfo.title}
                                         authors ={book.volumeInfo.authors}>



                                        {/* <a href={book.link}><button>view  book</button></a> */}
                                       
                                         onClick={handleSaveBook}


                                    </BookCard>
                                    
                                ))}
                            </div>
                            
                        ) : (
                                <h3>No results</h3>
                            )}




                    </Col>
                </Row>





            </Container>
        
    )
}
export default Search;