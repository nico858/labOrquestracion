import { useState } from 'react'
import './App.css'
import superstoreimg from './superstore.png';


const CategoryList = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      // Realizar petición GET para obtener la lista de categorías cuando el componente se monte
      fetch("http://localhost:4000/categories/list")
        .then((response) => response.json())
        .then((data) => setCategories(data))
        .catch((error) => console.error("Error fetching categories:", error));
    }, []);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // No es necesario realizar una solicitud POST aquí, ya que queremos mostrar todas las categorías.
      // Simplemente actualiza el estado con las categorías existentes.
      fetch("http://localhost:4000/categories/list")
        .then((response) => response.json())
        .then((data) => setCategories(data))
        .catch((error) => console.error("Error fetching categories:", error));
    };
  
    return (
      <div className="App">
        <img src={superstoreimg} alt="Super Store" className="imagen" />
  
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <th>{category.name}</th>
                <th>{category.description}</th>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };

export default CategoryList;