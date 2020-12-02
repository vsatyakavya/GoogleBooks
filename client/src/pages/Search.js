
import React, { useState } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom"
import { Col, Row, Container } from "../components/Grid"
import { Input, Btn } from "../components/Form"
// import { List, ListItem } from "../components/List"
import BookCard from "../components/BookCard"
import Background from "../Assets/books.jpg"

const styles ={
    bg :{
      backgroundImage: "url(" +  Background  + ")",
  
     
      width: '100vw',
      height: '50vh',
  
      backgroundPosition: "center",
      backgroundRepeat: "repeat",
      backgroundSize: "cover",
  
    }
  }
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
            API.getGoogleBooks(search.title)
                .then(res => setBooks(res.data.items||[]),
                console.log(books)
                
                )
                .catch(err => console.log(err))
        }
    }

    function handleSaveBook(saveingBook){
   console.log(saveingBook)
        
    }

// {books.map(book =>(
//    console.log(book.id) ,
//    console.log(book.volumeInfo.imageLinks.thumbnail)
// ))}




    return (
        <div   style={styles.bg}>
            <Container fluid >
                <Row>
                    <Col size="md-10">
                        <form style={{marginTop:80}}>
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
                </Container>
                <Container>
                <Row>
                    <Col size="md-10">
                       
                        {books.length? (
                            <div>
                                {books.map(book => (
                                                        

                                    <BookCard key={book.id} type="save"
                                        thumbnail={book.volumeInfo.imageLinks?.thumbnail}
                                         href= {book.volumeInfo.canonicalVolumeLink}
                                         title={book.volumeInfo.title}
                                         authors ={book.volumeInfo.authors}
                                         description ={book.volumeInfo.description}
                                        //  onClick={handleSaveBook(book)}
                                        >
                                        


                                        {/* <a href={book.link}><button>view  book</button></a> */}
                                       
                                         {/* <Btn className="btn btn-secondary"  onClick={()=>handleSaveBook(book)}>Save</Btn> */}


                                    </BookCard>
                                    
                                ))}
                            </div>
                            
                        ) : (
                                <h3 style={{color:"white"}}>No results</h3>
                            )}




                    </Col>
                </Row>





            </Container>
        </div>
    )
}
export default Search;