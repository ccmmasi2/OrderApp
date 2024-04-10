import HeaderForm from './../components/layout/header/header-form';

export default function ShoppingCart({selectedOption, handleOptionChange} ) {
    return (
        <>
            <HeaderForm selectedOption={selectedOption} handleOptionChange={handleOptionChange} />
            <div className="separator"></div>
            <h2>Shopping page</h2>
        </>
    )
};