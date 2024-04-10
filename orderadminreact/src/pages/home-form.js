import HeaderForm from './../components/layout/header/header-form';

export default function Home({selectedOption, handleOptionChange}) {
    return (
        <>
            <HeaderForm selectedOption={selectedOption} handleOptionChange={handleOptionChange} />
            <div className="separator"></div>
            <div className="matrix-info">
                <div className="separator"></div>
                <div>
                    <pre>
                        <h3>In the upper side you will find a Select control:</h3>
                        <h3>1 - Select Catalog option to watch all products and select amount to add to the cart</h3> 
                        <p>         - Here you can Add or Subtract products amount and add item to the cart</p>
                        <p>         - You can only add one product to the cart before add the second one</p>
                        <p>         - When you have already added an product to the cart an message is shown on the top page</p>
                        <p>         - If the order qty is zero or if is bigger than stock, you can add this item to the cart</p>
                        <h3>2 - Select Shoping cart to validate the items in your cart</h3>
                        <p>         - Here you can also handle products amount</p>
                        <p>         - You can delete the item from the cart</p>
                        <p>         - Validate both total amount and price before continue with the order generation</p>
                        <p>         - If you have all your cart ready, select button at the bottom to save your cart to an order</p>
                        <h3>         2.1 - An modal page is loaded to insert necessary data to create the order</h3>
                        <p>             - Here you can also handle products amount</p>
                        <p>             - Validate both total amount and price before continue with the order generation</p>
                        <h3>3 - Select Order list to view your orders generated</h3>
                        <br></br>
                        <h3>The Products' descriptions were obtained from Wikipedia</h3>
                    </pre>
                </div>
            </div>
        </>
    )
};