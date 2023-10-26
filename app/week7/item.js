export default function Item({name, quantity, category, onSelect}) {
  const handleClick = () => {
    onSelect(name);
  }
  return (
    <ul className="text-center">
        <li 
          onClick={handleClick}
          className="text-lg m-4 p-2 bg-slate-600 text-slate-100 w-1/2 rounded-lg cursor-pointer hover:bg-red-600">{name}
        <p className="text-sm">Buy {quantity} in {category}</p>
        </li>
    </ul>
    
  )
}