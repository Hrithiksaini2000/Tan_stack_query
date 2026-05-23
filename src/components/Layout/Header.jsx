import { NavLink } from "react-router-dom"

export const Header=()=>{
    return(
        <>
            <header>
                <div>
                    <NavLink to="/">React Query Or Tanc Stack</NavLink>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/trad">Fetchold</NavLink>
                        </li>
                        <li>
                            <NavLink to="/rq">Fetchrq</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}