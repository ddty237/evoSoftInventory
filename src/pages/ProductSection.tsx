import Table from "../components/Table"
import {produits} from '../utils/data'

const ProductSection = () => {
  return (
    <div className='bg-gray-50 min-h-screen px-10 grid items-center'>
      <div className="">
        <span className="text-3xl py-4 font-sans flex justify-center items-center">Liste des produits</span>
        <Table data={produits} />
      </div>
    </div>
  )
}

export default ProductSection