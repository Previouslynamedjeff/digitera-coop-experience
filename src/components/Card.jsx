function Card(props) {
    let classList = props.className !== undefined ? props.className : "bg-white rounded-xl p-8 pr-16 my-6 mx-2";
    let titleClassList = "text-3xl font-semibold mb-4 " + 
        (props.title !== undefined ? "after:h-1 after:w-20 after:block after:bg-rose-200 after:rounded-full after:mt-1" : "");
    return (
        <div className={classList}>
            <h1 className={titleClassList}>
                {props.title !== undefined ? props.title : undefined}
            </h1>
            {props.children}
        </div>
    );
}

export default Card;