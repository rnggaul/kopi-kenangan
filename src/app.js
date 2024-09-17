document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Biji Kopi Toraja",
        img: "biji-kopi-1.jpg",
        price: 55000,
        priceDis: 75000,
      },
      {
        id: 2,
        name: "Biji Kopi Robusta",
        img: "biji-kopi-2.jpg",
        price: 35000,
        priceDis: 58000,
      },
      {
        id: 3,
        name: "Biji Kopi Gayo",
        img: "biji-kopi-3.jpg",
        price: 62000,
        priceDis: 79000,
      },
      {
        id: 4,
        name: "Biji Kopi Arabika",
        img: "biji-kopi-4.jpg",
        price: 40000,
        priceDis: 59000,
      },
      {
        id: 5,
        name: "Biji Kopi Colombian",
        img: "biji-kopi-5.jpg",
        price: 70000,
        priceDis: 85000,
      },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,

    add(newItem) {
      // cek apakah ada barang yang sama
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika masih kosong
      if(!cartItem){
        this.items.push({...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      }else{
        // jika barang sudah ada, cek apakah barang beda atau sama dengan yang di cart
        this.items = this.items.map((item) =>{
          // jika barang berbeda
          if(item.id !== newItem.id){
            return item;
          }else{
            // jika barang sudah ada, tambah quantity dan sub total
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        })
      }
    },

    // remove item
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);

      if(cartItem.quantity > 1){
        this.items = this.items.map((item) =>{
          if(item.id !== id){
            return item;
          }else{
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        })
      }else if(cartItem.quantity === 1){
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
