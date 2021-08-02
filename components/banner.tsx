import Menu from './menu'

export default function Banner() {
    return (
        <>
        <div className="banner w-full">
            <Menu />
        </div>
        <style jsx>
            {`
                .banner{
                    background-color:#013148;
                }
            `}
        </style>
        </>
    )
}
