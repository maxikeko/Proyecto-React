import { useContext } from "react"
import { cartContext } from "../../CartContext/CartContextComponent"

function CartWidget() {

  const {totalCount} = useContext(cartContext);

  return (
    <div>
        🛒{totalCount}
    </div>
  )
}

export default CartWidget