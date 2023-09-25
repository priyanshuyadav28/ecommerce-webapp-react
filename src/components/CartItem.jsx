import {RiDeleteBin5Fill} from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice';

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }


  return (
    <div className="mt-10 max-w-xl relative">
      <div className="flex max-w-xl gap-10 justify-between">
        <div className="w-[150px]">
          <img src={item.image} />
        </div>

        <div>
          <h1 className="text-gray-700 text-xl font-semibold">{item.title}</h1>
          <h1 className="text-gray-500 mt-2">
            {item.description.split(" ").slice(0, 10).join(" ") + "(..."}
          </h1>

          <div className="flex justify-between mt-3">
            <p className="text-green-600 font-semibold">{item.price}</p>

            <div
              className="p-2 cursor-pointer rounded-full text-red-700 bg-red-200"
              onClick={removeFromCart}
            >
              <RiDeleteBin5Fill />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-5 outline outline-gray-300"></div>
    </div>
  );
};

export default CartItem;
