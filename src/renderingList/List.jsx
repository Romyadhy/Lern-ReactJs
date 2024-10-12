export default function List() {
    const Legends = [
                    {id: 1, name: "hattori", weapon: "sword&spear"}, 
                    {id: 2, name: "gnar", weapon: "hammer&spear"}, 
                    {id: 3, name: "wushang", weapon: "spear&gauntles"}, 
                    {id: 4, name: "mordex", weapon: "scyte&gauntles"}
                ];

    const listLeg = Legends.map(legend  => <li key={legend.name}>
                                                    {legend.name}:&nbsp;
                                                    {legend.weapon}
                                            </li>); 

    return(<ol className="text-2xl mx-4">{listLeg}</ol>);
}