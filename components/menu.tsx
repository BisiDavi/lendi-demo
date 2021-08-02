import classNames from 'classnames'
import Button from './button'
import s from '../styles/button.module.scss'

export default function Menu() {
    const menuLinks = [
        {name: "HOME LOANS", submenu:[
            {name:"Find your home loan", link: "#home-loan"},
            {name:"Invest in property", link: "#invest-in-property"},
            {name:"Refinance your loan", link: "#refinance-your-loan"},
            {name:"Build your home", link: "#build-your-home"},
            {name:"Buy your first home", link: "#buy-your-first-home"},
            {name:"Property value report", link: "#property-value-report"},
            {name:"Buy your next home", link: "#buy-your-next-home"},
        ]
        },
        {name: "CALCULATORS", submenu:[
            {name:"Property Report", link: "#property-report"},
            {name:"Offset calculator", link: "#property-report"},
            {name:"Borrowing Power calculator Report", link: "#property-report"},
            {name:"Equity calculator", link: "#property-report"},
            {name:"Repayment calculator", link: "#property-report"},
            {name:"LMI calculator", link: "#property-report"},
            {name:"Stamp duty calculator", link: "#property-report"},
            {name:"Debt consolidation calculator", link: "#property-report"}
        ]},              
        

    ]
    return (
        <nav className="flex items-center justify-between"> 
            <ul className="text-white flex item-center" >
            {menuLinks.map((menuLink,index) => (
                    <li className="m-4" key={index}>{menuLink.name}</li>
                ))}
            </ul>
            <div className="button-group flex items-center">
                <Button className={`${classNames(s.button, s.white)} p-4 m-7 w-44`} text="TALK TO AN EXPERT" />
                <Button className={`${classNames(s.button, s.green)} p-4 m-7 w-44`} text="SIGN IN" />
            </div>
        </nav>
    )
}
