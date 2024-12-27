
const menuData = {
    hamburguesas: [
      { name: 'Hamburguesa Clásica Simple', price: 5900.00 },
      { name: 'Hamburguesa Clasica Doble', price: 7000.00 },
      { name: 'Hamburguesa Clásica Compl. Simple', price: 7100.00 },
      { name: 'Hamburguesa Clasica Compl. Doble', price: 8100.00 },
      { name: 'Hamburguesa Americana Simple', price: 7300.00 },
      { name: 'Hamburguesa Americana Doble', price: 8300.00 },
      { name: 'Hamburguesa Argenta Simple', price: 7200.00 },
      { name: 'Hamburguesa Argenta Doble', price: 8200.00 },
      { name: 'Hamburguesa Pollo Crispy', price: 6900.00 },
      { name: 'Hamburguesa de Pollo', price: 7500.00 },
      { name: 'Hamburguesa Azul Simple', price: 7500.00 },
      { name: 'Hamburguesa Azul Doble', price: 8500.00 },
      { name: ' + Estuche de Fritas', price: 2000.00 },
      { name: ' + Extra Cheddar', price: 1000.00 },
      { name: ' + Extra Bacon', price: 1200.00 },
      { name: ' + Medallon C/Cheddar', price: 1600.00 },
      { name: ' + Huevo a la Plancha', price: 200.00 },
      { name: ' + Verduras', price: 300.00 }
    ],
    pizzas: [
      { name: 'Pizza Muzza', price: 7900.00 },
      { name: 'Pizza Capresse', price: 8700.00 },
      { name: 'Pizza Guovo', price: 8600.00 },
      { name: 'Pizza Fugazza Argentina', price: 8700.00 },
      { name: 'Pizza Pallerosa', price: 9900.00 },
      { name: 'Pizza Fugazza Azul', price: 10300.00 },
      { name: 'Pizza Especial J y Q', price: 9900.00 },
      { name: 'Pizza Calabreza', price: 10300.00 },
      { name: 'Mitad Pizza Muzza', price: 3950.00 },
      { name: 'Mitad Pizza Capresse', price: 4350.00 },
      { name: 'Mitad Pizza Guovo', price: 4300.00 },
      { name: 'Mitad Pizza Fugazza Argentina', price: 4350.00 },
      { name: 'Mitad Pizza Pallerosa', price: 4950.00 },
      { name: 'Mitad Pizza Fugazza Azul', price: 5150.00 },
      { name: 'Mitad Pizza Especial J y Q', price: 4950.00 },
      { name: 'Mitad Pizza Calabreza', price: 5150.00 }
    ],
    bebidas: [
      { name: 'Cerveza Lata 470', price: 2400 },
      { name: 'Stella Artois 470', price: 2900 },
      { name: 'Corona Porron', price: 2900 },
      { name: 'CocaCola 1,75L', price: 3500 },
      { name: 'Sprite 1,5L', price: 3000 },
      { name: 'CocaCola 1,5L', price: 3000 },
      { name: 'Manaos 2L', price: 2500 },
      { name: 'Agua Saborizada 1,5L', price: 2000 },
      { name: 'Agua 2L', price: 1800 },
      { name: 'Agua Chica 1200', price: 1200 }
    ],
    sandwiches: [
      { name: 'Sanw Lomo Quincho', price: 6600 },
      { name: 'Sanw Lomo Super Completo', price: 7000 },
      { name: 'Sanw Milanesa a la Pizza', price: 6600 },
      { name: 'Sanw Milanesa Super Completo', price: 7000 },
      { name: 'Sanw Bondiola Braseada', price: 6300 }
    ],
    vegetariano: [
      { name: 'Ens Mix de verduras, huevo y queso', price: 4500 },
      { name: 'Milanesa de Verd', price: 4800 },
      { name: 'Milanesa de Verd a la pizza', price: 5400 },
      { name: 'Sandwich de Mila Veg', price: 6000 },
      { name: 'Wok', price: 4800 }
    ],
    fritas: [
      { name: 'Fritas', price: 3900 },
      { name: 'Salchipapa', price: 4500 },
      { name: 'Fritas con Cheddar y verdeo', price: 4900 },
      { name: 'Papas Quincho', price: 5700 },
      { name: 'Papas Titi', price: 5700 },
      { name: 'Fritas con Patitas de Pollo', price: 5200 },
      { name: '+ Extra Bacon', price: 1200 },
      { name: '+ Extra Cheddar', price: 1000 }
    ],
    superpanchos: [
      { name: 'superpancho Americano', price: 3000 },
      { name: 'superpancho Azul', price: 3000 },
      { name: 'superpancho Buenos Aires', price: 3000 },
      { name: 'superpancho Pikancho', price: 3000 },
      { name: '+ Extra Bacon', price: 1200 },
      { name: '+ Extra Cheddar', price: 1000 },
      { name: '+ Papas Pay', price: 500 },
      { name: '+ Berenjena Escabeche', price: 500 },
      { name: '+ Cebolla Caramelizada', price: 500 },
      { name: '+ Estuche de Fritas', price: 2000 }
    ],
    minutas: [
      { name: 'Tortilla Grande', price: 4500 },
      { name: 'Tortilla Chica', price: 4000 },
      { name: 'Gramajo', price: 5000 },
      { name: 'Tortilla Rellena Grande', price: 5500 },
      { name: 'Tortilla Rellena Chica', price: 4900 },
      { name: 'Omelette con Ensalada', price: 4700 },
      { name: 'Wok de Pollo', price: 5500 },
      { name: 'Wok de Lomo', price: 5500 },
      { name: 'Chuleta de Cerdo', price: 5500 },
      { name: 'Pechuga A la Plancha', price: 5300 },
      { name: 'Pechuga Crispy', price: 5600 },
      { name: 'Mila', price: 4900 },
      { name: 'Mila a la Pizza', price: 5500 },
      { name: 'Mila Napo', price: 6100 },
      { name: 'Mila Fugazza Azul C/Fritas a Caballo', price: 6700 },
      { name: 'Mila con Cheddar a Caballo', price: 6700 },
      { name: 'Ens Mix Verduras y pollo', price: 4600 },
      { name: 'Ens Mix Verduras, Jamon, queso y huevo', price: 4600 },
      { name: 'Ens Arroz y Mix de verduras y pollo', price: 4600 },
      { name: 'Tarta de Verd', price: 4600 },
      { name: 'Tarta de Verd con Ensalada', price: 5200 },
      { name: 'Tarta Jam, Ques, Huev, Tomate', price: 4900 },
      { name: 'Tarta Jam, Ques, Huev, Tomate con Ensalada', price: 5500 },
      { name: 'Cubiertos Descartables', price: 300 }
    ],
    envios: [{ name: 'Envio', price: 300 },
      { name: 'Envio', price: 400 },
      { name: 'Envio', price: 500 },
      { name: 'Envio', price: 600 },
           { name: 'Envio', price: 700 }  
    ]
  };


  function loadMenu(category) {

    const menuButtons = document.getElementById("menuBotones");
    const backButton = document.getElementById("back-button");
    const menuItems = document.getElementById("menu-items");

    // Ocultar botones del menú y mostrar "Atrás"
    menuButtons.style.display = "none";
    backButton.style.display = "block";

    // Mostrar artículos de la categoría seleccionada
    menuItems.innerHTML = '';
    menuData[category].forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';
      div.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      div.onclick = () => addItemToOrder(item);
      menuItems.appendChild(div);
    });
  }

  function goBack() {
    const menuButtons = document.getElementById("menuBotones");
    const backButton = document.getElementById("back-button");
    const menuItems = document.getElementById("menu-items");

    // Mostrar botones del menú y ocultar "Atrás"
    menuButtons.style.display = "flex";
    backButton.style.display = "none";

    // Limpiar lista de artículos
    menuItems.innerHTML = '';
  }
  function showAddItemForm() {
    const menuButtons = document.getElementById("menuBotones");
    const backButton = document.getElementById("back-button");
    const menuItems = document.getElementById("menu-items");

    // Ocultar botones del menú y mostrar "Atrás"
    menuButtons.style.display = "none";
    backButton.style.display = "block";
menuItems.innerHTML = `
  <div>
    <label for="custom-item-name">Nombre del artículo:</label>
    <input type="text" id="custom-item-name" placeholder="Ej. Torta personalizada" required>
  </div>
  <div>
    <label for="custom-item-price">Precio:</label>
    <input type="number" id="custom-item-price" placeholder="Ej. 5000" required>
  </div>
  <button onclick="addCustomItem()">Agregar</button>
`;
}

function addCustomItem() {
const nameInput = document.getElementById('custom-item-name');
const priceInput = document.getElementById('custom-item-price');

const name = nameInput.value.trim();
const price = parseFloat(priceInput.value);

if (!name || isNaN(price) || price <= 0) {
  alert('Por favor ingresa un nombre válido y un precio mayor a 0.');
  return;
}

const customItem = { name, price };
addItemToOrder(customItem);

nameInput.value = '';
priceInput.value = '';

}


  function addItemToOrder(item) {
    const orderList = document.getElementById('order-list');

    const listItem = document.createElement('li');

    const itemName = document.createElement('span');
    itemName.textContent = `${item.name} - $${item.price.toFixed(2)}`;

    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.value = 1;
    quantityInput.min = 1;
    quantityInput.onchange = updateTotal;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = () => {
      listItem.remove();
      updateTotal();
    };

    listItem.appendChild(itemName);
    listItem.appendChild(quantityInput);
    listItem.appendChild(deleteButton);
    orderList.appendChild(listItem);

    updateTotal();
  }

  function updateTotal() {
    const orderList = document.getElementById('order-list');
    const items = orderList.children;
    let total = 0;

    Array.from(items).forEach(item => {
      const priceText = item.querySelector('span').textContent;
      const price = parseFloat(priceText.split('$')[1]);
      const quantity = parseInt(item.querySelector('input').value);
      total += price * quantity;
    });

    document.getElementById('order-total').textContent = total.toFixed(2);
  }

  function saveOrder() {
    const name = document.getElementById('order-name').value;
    const address = document.getElementById('order-address').value;
    const orderList = document.getElementById('order-list').cloneNode(true);
    const total = document.getElementById('order-total').textContent;

    if (!name || !address || orderList.children.length === 0) {
      alert('Por favor completa todos los campos antes de guardar el pedido.');
      return;
    }

    const historyList = document.getElementById('history-list');
    const historyItem = document.createElement('li');
    historyItem.innerHTML = `<strong>${name}</strong> (${address}) - Total: $${total}`;
    const details = document.createElement('ul');
    Array.from(orderList.children).forEach(item => {
      const detailItem = document.createElement('li');
      const text = item.querySelector('span').textContent;
      const quantity = item.querySelector('input').value;
      detailItem.textContent = `${text} x${quantity}`;
      details.appendChild(detailItem);
    });
    historyItem.appendChild(details);
    historyList.appendChild(historyItem);

    document.getElementById('order-form').reset();
    document.getElementById('order-list').innerHTML = '';
    document.getElementById('order-total').textContent = '0.00';
  }

  function printOrder() {
    const orderName = document.getElementById('order-name').value;
    const orderAddress = document.getElementById('order-address').value;
    const orderItems = document.getElementById('order-list').cloneNode(true);
    const orderTotal = document.getElementById('order-total').textContent;

    if (!orderName || !orderAddress || orderItems.children.length === 0) {
      alert('Por favor completa todos los campos antes de imprimir el pedido.');
      return;
    }

    const printWindow = window.open('', '', 'width=400,height=600');
    printWindow.document.write(`
<html>
<head>
<title>Recibo de Pedido</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 20px;
    line-height: 1.6;
    color: #333;
  }

  .header {
    display: flex;
    justify-content: space-between; /* Alinea el contenido a los extremos */
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }

  .header img {
    max-width: 80px; /* Aumenta el tamaño del logo */
    margin-left: 20px; /* Espaciado desde el borde izquierdo */
  }

  .header h1 {
    font-size: 1.7em; /* Tamaño de fuente más pequeño para el nombre */
    margin: 0;
    font-weight: normal;
    text-align: left;
  }

  .order-details {
    margin-bottom: 5px;
    border-top: 1px solid #ccc;
    padding-bottom: 0px;
  }

  .order-details p {
    font-size: 0.9em; /* Reducir el tamaño de la dirección */
    margin: 5px 0;
  }

  .order-items {
    list-style: none;
    padding: 0;
    margin: 0 0 20px 0;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }

  .order-items li {
    margin-bottom: 5px;
    font-size: 0.9em; /* Reducir el tamaño de los elementos del pedido */
  }

  .total {
    font-size: 1.2em;
    font-weight: bold;
    text-align: right;
    border-top: 1px solid #ccc;
    padding-top: 10px;
  }
    .encabezado{
    display: flex;
     flex-direction: column;
    }
</style>
</head>
<body>
<div class="header">
  <div class="encabezado" >
  <h1>${orderName}</h1>
  
   <div class="order-details">
  <p><strong>Dirección:</strong> ${orderAddress}</p>
</div> </div>

  <img src="img/QUINCHOICONO.png" alt="Logo">
</div>

<ul class="order-items">
  ${Array.from(orderItems.children).map(item => {
      const text = item.querySelector('span').textContent;
      const quantity = item.querySelector('input').value;
      return `<li>${text} x${quantity}</li>`;
    }).join('')}
</ul>
<p class="total">Total: $${orderTotal}</p>
</body>
</html>

`);

    printWindow.document.close();
    printWindow.print();

  };
