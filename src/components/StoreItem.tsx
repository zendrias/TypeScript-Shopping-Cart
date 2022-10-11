import { Card, Button } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'

type storeItemProps = {
  id: number,
  name: string,
  price: number,
  imgUrl: string
}


export default function StoreItem({ id, name, price, imgUrl }: storeItemProps) {
  const quantity = 1
  return (
    <Card className='h-100'>
      < Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover" }} />
      < Card.Body className=" d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className='w-100'>Add To Cart +</Button>
          ) : (
            <div className="d-flex align-items-center flex-column" style={{ gap: '.5rem' }}>
              <div className="d-flex align-items-center justify-content-center" style={{ gap: '.5rem' }}>
                <Button>-</Button>
                <div>
                  <span className="fs-3"> {quantity} </span>
                  <span>In Cart</span>
                </div>
                <Button>+</Button>
              </div>
              <div className="d-flex align-items-center justify-content-center" style={{ gap: '.5rem' }}>
                <Button variant="danger">Remove</Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}