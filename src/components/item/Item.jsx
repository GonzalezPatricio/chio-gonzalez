import React from "react";
import { Link } from "react-router-dom";
import { Button, CardGroup, Card } from "react-bootstrap";



function Item({item}) {
    return (
        <React.Fragment>
        <div className="container1" key={item.id}>
            <CardGroup>
                <Card>
                   <Card.Img variant="top" src={item.pictureUrl} alt="foto"/>
                        <Card.Body>
                            <Card.Title className="title"><h2>{item.title}</h2></Card.Title>
                            <Card.Text className="description">Description: "{item.description}</Card.Text>
                                <div className="id">
                                    <Link to = {`/item/${item.id}`}>
                                        <Button variant="primary">
                                            Detalle del Producto y comprar
                                        </Button>
                                    </Link>
                                </div>
                                    <div className="price">$ {item.price}.-</div>
                                        <Link to = {`/categoria/${item.categoria}`} >
                                            <div className="categoria"><span>{item.categoria}</span></div>
                                        </Link>
                        </Card.Body>
                </Card>
            </CardGroup>
        </div>
        </React.Fragment>
    );
}

export default Item