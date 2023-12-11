export default function Header(props) {
    const { countCartItems} = props;
    return (
        <div className="row center block">
        <div>
            <a href="#/">
                <h2>YBK COLLECTIONS</h2>
            </a>
        </div>
        <div>
            <a href="#/cart">Cart
            {countCartItems? (
            <button className="badge">{countCartItems}</button>
    ) : (
        ''
    )}

            </a> <a href="#/signin">Sign In</a>
        </div>
        </div>
    );
}