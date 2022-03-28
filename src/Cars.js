import { useEffect, useState } from 'react';
import axios from 'axios';

function Cars() {
    const [cars, setCars] = useState([]);
    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);
    const [id, setId] = useState(null);
    const [color, setColor] = useState(null);
    const [stock, setStock] = useState(null);
    const getCars = () => {
        axios
            .get('/car')
            .then((res) => {
                setCars(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getCars();
    }, []);
    const addCar = (event) => {
        event.preventDefault();
        const categoryObj = {
            name: event.target.name.value,
            price: event.target.price.value,
            color: event.target.color.value,
            in_stock: event.target.stock.value,
        };
        axios.post('/car', categoryObj).then((res) => {
            getCars();
            console.log(res.data);
        });
    };
    const deleteCar = (cid) => {
        axios.delete(`/car/${cid}`).then((res) => {
            console.log(res.data);
            getCars();
        });
    };
    const deleteAll = () => {
        axios.delete('/car').then((res) => {
            console.log(res.data);
            getCars();
        });
    };
    return (
        <div>
            <div>
                <h1>Add Category</h1>
                <form onSubmit={addCar}>
                    <input
                        type='text'
                        name='name'
                        placeholder='name..'
                        className='form-control'
                    />
                    <input
                        type='number'
                        name='price'
                        placeholder='price..'
                        className='form-control'
                    />
                    <select
                        name='color'
                        placeholder='color..'
                        className='form-control'
                    >
                        <option value='black'>Black</option>
                        <option value='blue'>Blue</option>
                        <option value='grey'>Grey</option>
                    </select>
                    <select
                        name='stock'
                        placeholder='In Stock'
                        className='form-control my-2'
                    >
                        <option value='0'>Available</option>
                        <option value='1'>Not Available</option>
                    </select>
                    <button type='submit'>Add Car</button>
                </form>
            </div>
            <div className='text-center'>
                <h1>Showing all cars</h1>
                <button type='button' onClick={() => deleteAll()}>
                    Delete all Cars
                </button>
                <table>
                    <thead>
                        <tr>
                            <th>Car Id</th>
                            <th>Car Name</th>
                            <th>Price</th>
                            <th>Color</th>
                            <th>In Stock</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((val) => (
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.price}</td>
                                <td>{val.color}</td>
                                <td>{val.in_stock}</td>

                                <td>
                                    <button
                                        type='button'
                                        onClick={() => deleteCar(val.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Cars;
