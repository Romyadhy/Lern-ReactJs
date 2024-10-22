export default function List(props) {
    
    const NameCategory = props.category;
    const LEGlists = props.items;
    // Legends.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABECTIC
    // Legends.sort((a, b) => b.name.localeCompare(a.name));  //REVERSE ALPHABETS
    // Legends.sort((a, b) => a.age - b.age); //numeric 
    // Legends.sort((a, b) => b.age - a.age); // reverse numeric 


    const listLeg = LEGlists.map(legend  => <li key={legend.name}>
                                                    {legend.name}:&nbsp;
                                                    {legend.age}
                                            </li>); 

    return(
        <>
            <h1 className="text-5xl font-bold m-4">{NameCategory}</h1>
            <ol className="text-2xl mx-4">{listLeg}</ol>
        </>

);
}