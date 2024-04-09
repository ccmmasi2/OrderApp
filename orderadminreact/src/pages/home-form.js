import HeaderForm from './../components/layout/header/header-form';

export default function Home() {
    return (
        <>
            <HeaderForm />
            <div className="matrix-info">
                <div className="separator"></div>
                <div>
                    <h3>In the upper side you will find a Select control:</h3>
                    <p>1 - Select Catalog option to watch all products and select amount to add to the cart</p> 
                    <p>2 - Select Shoping cart to validate your order</p>
                    <p>3 - Select Order list to view your orders generated</p>
                    <br></br>
                    <br></br>
                    <p>The Products' descriptions were obtained from Wikipedia</p>
                </div>
            </div>
        </>
    )
};