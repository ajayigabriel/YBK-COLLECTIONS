 const data = { 
    products: [
        {
            id: '1',
            name: 'Bridal',
            price: 100000,
            image: 'https://res.cloudinary.com/dndqd8roa/image/upload/v1702341899/igbo_bridal_wzwadi.jpg',
        },
        
        {
            id: '2',
            name: 'Bridal',
            price: 100000,
            image: 'https://res.cloudinary.com/dndqd8roa/image/upload/v1702341882/igbo_bridal_sz87cj.jpg',
        },
        
        {
            id: '3',
            name: 'Bridal',
            price: 100000,
            image: 'https://res.cloudinary.com/dndqd8roa/image/upload/v1702341868/coralbeads_tvrqoc.jpg',
        },
        {
            id: '4',
            name: 'Bridal',
            price: 100000,
            image: 'https://res.cloudinary.com/dndqd8roa/image/upload/v1702341831/Bridal_hgnix9.jpg',
        },
        {
            id: '5',
            name: 'Bridal',
            price: 100000,
            image: 'https://res.cloudinary.com/dndqd8roa/image/upload/v1702050999/YBK%20COLLECTIONS/kwvufarmvb0xpw9atpal.jpg',
        },
        {
            id: '6',
            name: 'Maasal beads',
            price: 100000,
            image: 'https://res.cloudinary.com/dndqd8roa/image/upload/v1702311690/YBK%20COLLECTIONS/vxtjanaebyceyiaruk6e.jpg',
        },
        {
            id: '7',
            name: 'Bridal',
            price: 100000,
            image: 'https://res.cloudinary.com/dndqd8roa/image/upload/v1702050873/YBK%20COLLECTIONS/nron2epcy2ixm8tnb2cq.jpg',
        },
            
        {
            id: '8',
            name: 'Bracelet',
            price: 100000,
            image: 'https://res.cloudinary.com/dndqd8roa/image/upload/v1702050969/YBK%20COLLECTIONS/z2dctpxh5hgze1wldwav.jpg',
        },
    ],
    
 };
 function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  data.products.forEach(product => {
    product.price = formatNumberWithCommas(product.price);
  });
  export default data;