
// import React from 'react';
import LoginTes from "./props/Logintes";
import List from "./renderingList/List";

function ProductTable({products, filterText, inStockOnly}){
  const rows = [];
  let lastCategory = null;
  products.forEach((product) => {
    if(product.name.toLowerCase().indexOf(
      filterText.toLowerCase()
    ) === -1){
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push();
    }
    rows.push();
    lastCategory == product.category;
  });
  return (
    <table>
      <thead>
        <tr>Name</tr>
        <tr>Price</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}


function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}


function Project() {
  return (
    <section className="min-h-screen">
      {/* <div className="font-bold text-4xl text-gray-900 text-center m-4 p-4 cursor-pointer">
        <h1 className="">My<span className="text-green-500">Project</span></h1>
      </div>
     */}
      <LoginTes isLogin={true} userName="Romss"/>
      <List />
    </section>
  );
};

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];
export default Project;
