import { Modal, Typography } from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import './ProductModalInfo.css'

const ProductModalInfo = ({ products, open, setOpen }) => {
  const { id, image, name, model, category, price, itHasDues, isAnnOffer } = products
  //seteo del open.
  const handleClose = () =>{
    setOpen(prev => !prev)
  }
  
  return ( 
  <>
  <Modal open={open} onClose={handleClose}>
    <div className="product-modal-container">
      <img src={image}/>
      <Typography variant="h3">{name}</Typography>
      <Typography>{model}</Typography>
      <Typography variant="h5">${price.toFixed(2)}</Typography>
      <div className="product-modal-content">
        <Typography variant="body3">
          {
            itHasDues && (
              <><PaymentIcon /> producto con 3 cuotas sin interés </>
            )
          }
        </Typography>
        <Typography>
          {
            isAnnOffer && (
              <><LocalOfferIcon /> oferta limitada 20% OFF  </>
            )
          }
        </Typography>
      </div>
    </div>
  </Modal>
  </> 
  );
}
 
export default ProductModalInfo;