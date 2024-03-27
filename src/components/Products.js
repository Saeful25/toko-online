
const Product = (props) => {
    const {gambar,nama,harga} = props ;
    return (
        <div>
            <ul>
            <img src={gambar} alt="" width={200}></img>
                <li>{nama} - Rp {harga}.000</li>
            </ul>
        </div>
    );
};

export default Product;