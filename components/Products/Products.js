import { Card, CardGroup } from "react-bootstrap";

const Products = (props) => {
    const {name,mediaUrl,description, price} =props.product;
    return (
        <CardGroup>
        <Card>
        <Card.Img variant="top" src={mediaUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{price}</small>
        </Card.Footer>
      </Card>
      </CardGroup>
    );
};

export default Products;