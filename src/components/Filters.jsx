import { useFilters } from '../hooks/useFilters';
import './Filters.css';
import {  useId } from 'react';

export function Filters () {
    const {filters, setFilters} = useFilters()
   /*  const [minPrice, setMinPrice] = useState(0) //estado local */
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        // hay algo raro en este evento, demasiadas props
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">

            {/* <div>
                <label htmlFor={minPriceFilterId}>Precio Mínimo</label>
                <input type="range" id={minPriceFilterId} min='0' max='1000' onChange={handleChangeMinPrice} 
                value={filters.minPrice}/>
                <span>${filters.minPrice}</span>
            </div> */}
{/* 'Cárnicos', 'Lácteos', 'Cereales', 'Enlatados', 'Panaderia', 'Bebidas', 'Condimentos',
      'Snacks' */}
            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todo</option>
                    <option value="Cárnicos">Cárnicos</option>
                    <option value="Bebidas">Bebidas</option>
                    <option value="Panaderia">Panadería</option>
                    <option value="Lácteos">Lácteos</option>
                </select>
            </div>
        </section>
    )
}