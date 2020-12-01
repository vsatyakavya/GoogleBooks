import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function List({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function ListItem({
  thumbnail,

  
  href,
  onClick
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail || "https://placehold.it/300x300"} />
          </Col>
          </Row>
          <Row>
          <Col size="xs-4 sm-2">
            
            <a rel="noreferrer noopener" target="_blank" href={href}>
              <button>view book</button>
            
            </a>
            <button onClick={onClick}>Save Book</button>
            {/* <a href={book.link}><button>view  book</button></a> */}

          </Col>
        </Row>
      </Container>
    </li>
  );
}
