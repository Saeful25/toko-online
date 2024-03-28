import Product from "../Products/Products.js";
import "./Main.css"
const Main = () => {
    return (
        <div className="container">
      <Product nama="Kursi Gaming Fantech" harga={2.350}  gambar="https://asterindoshop.com/gambar/produk/large-kursi-gaming-fantech-chair-alpha-gc-182-191221040522-47.jpg" message={() => alert("Beli Sekarang ?")}></Product>
      <Product nama="Poco X6 Pro" harga={4.999} gambar="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/95/MTA-155504090/br-m036969-03591_poco-x6-pro_full01-a6020a2c.jpg" message={() => alert("Beli Sekarang ?")}></Product>
      <Product nama="SSD Seagate 1 TB Gen 4" harga={2.450} gambar="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/10/25/299501ce-f220-487d-addc-a0c2f925a2e2.jpg" message={() => alert("Beli Sekarang ?")}></Product>
      <Product nama="Poco X6 Pro" harga={4.999} gambar="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/95/MTA-155504090/br-m036969-03591_poco-x6-pro_full01-a6020a2c.jpg" message={() => alert("Beli Sekarang ?")}></Product>
      <Product nama="SSD Seagate 1 TB Gen 4" harga={2.450} gambar="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/10/25/299501ce-f220-487d-addc-a0c2f925a2e2.jpg" message={() => alert("Beli Sekarang ?")}></Product>
      
        </div>
    )
}

export default Main ;