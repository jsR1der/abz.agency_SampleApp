import './Header.scss';
import Button from "../button/Button.tsx";

import {Color} from "../../utils/types.ts";
import Logo from '../Logo/Logo.tsx';
import {useAuth0} from "@auth0/auth0-react";

function Header() {
    const {loginWithRedirect, logout: auth0Logout, isAuthenticated} = useAuth0()
    const login = async () => {
        await loginWithRedirect()
    }
    const logout = async () => {
        await auth0Logout()
    }
    return <nav className="header flex items-center justify-between">
        <Logo></Logo>
        <div className='buttons flex'>
            {isAuthenticated ?
                <Button colorClass={Color.primary} action={logout} text="Logout"></Button>
                :
                <Button colorClass={Color.primary} action={login} text="Login"></Button>
            }
        </div>

    </nav>
}

export default Header;