/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import datamenu from "./menu.json"
import { MenuNavItem} from "./MenuNavItem"

export const MenuNavigation = () => (
    <ul css={css`
        display: flex;
    `}>
        {datamenu.map((item) => 
        <MenuNavItem key={item.id} item={item}/>
        )}
    </ul>
    
)