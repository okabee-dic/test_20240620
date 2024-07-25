export default function NewsCard(props){
    

    return <div className={props.color}>
            <div className="newsCard bg-gray-100 grid-item">
        
            <h3 className="cardTitle">{props.title}</h3>
            <div className="cardContent">{props.children}</div>
            </div>
    </div>
};