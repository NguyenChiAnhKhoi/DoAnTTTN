import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../../api/BaseUrl';
import { Link } from 'react-router-dom';

function AllProductt() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [priceFilter, setPriceFilter] = useState(null); // Thêm state cho giá trị lọc
    const ImgUrl = "http://localhost:8080/upload/";

    useEffect(() => {
        // Gọi API để lấy danh sách sản phẩm khi component được render
        axios.get(baseURL + 'products')
            .then(response => {
                setProducts(response.data);
                setFilteredProducts(response.data); // Lưu danh sách sản phẩm gốc
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    // Hàm xử lý khi thay đổi giá trị lọc
    useEffect(() => {
        if (priceFilter) {
            const filtered = products.filter(product => {
                return (
                    product.regularPrice >= priceFilter.min &&
                    product.regularPrice <= priceFilter.max
                );
            });
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products); // Trường hợp không có giá trị lọc, hiển thị tất cả sản phẩm
        }
    }, [priceFilter, products]);

    // Hàm xử lý khi thay đổi giá trị lọc
    const handlePriceFilterChange = (min, max) => {
        setPriceFilter({ min, max });
    };

    return (
        <>
            {/* Filter by price */}
            <div className="filter-by-price">
                <h5>Filter by price</h5>
                <div>
                    <button onClick={() => handlePriceFilterChange(0, 9999999)}>All Price</button>
                    <button onClick={() => handlePriceFilterChange(0, 500000)}>0 - 500000</button>
                    <button onClick={() => handlePriceFilterChange(500000, 2000000)}>500000 - 2000000</button>
                    {/* Add more price range buttons */}
                </div>
            </div>

            {/* List of Products */}
            <div className="product-list">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-item">
                        <img src={`${ImgUrl}${product.imagePath}`} alt={product.productName} />
                        <h3>{product.productName}</h3>
                        <p>${product.regularPrice}</p>
                        <Link to={`/chi-tiet-san-pham/${product.id}`}>View Detail</Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AllProductt;
