import React, { useState } from "react";
import { ListGroup, Button, Spinner } from "react-bootstrap";
import "./styles.css";

const List = () => {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRepositories = async () => {
    // TODO
  };

  return (
    <div className="list">
      <div className="container">
        <h2 className="title">Devpass Repositories</h2>

        { isLoading ?
        ( <Spinner/> ) : 
        ( 
          <ListGroup className="repositoriesList">

          { /* TODO */ }
          
          </ListGroup> )}
      <Button data-testid="button" className="button" variant="primary" onClick={() => fetchRepositories()}>Fetch repositories</Button>
      </div>
    </div>
  );
};

export default List;
