export function TitleCard(props) {
    return (
        <Title className="rounded-2xl p-4 text-center bg-rose-100 text-2xl">{props.children}</Title>
    );
}

function Title(props) {
    const classList = "font-semibold mb-4 " + (props.className ? props.className : "text-5xl mt-2");
    return (
        <h1 className={classList}>{props.children}</h1>
    );
}

export default Title;