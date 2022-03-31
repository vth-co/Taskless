import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";


const ProfileButton = ({}) => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory();

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    }

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);
    }, [showMenu])
}
