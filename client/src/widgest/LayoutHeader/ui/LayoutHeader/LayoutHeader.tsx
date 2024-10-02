// import { skipToken } from '@reduxjs/toolkit/dist/query'
// import { useCartQuery } from '@/entities/cart/api/cartApi'
// import { useFeatureToggle } from '@/entities/featureToggle'
// import { selectIsAuthorized } from '@/entities/session'
// import { useWishlistProductsQuery } from '@/entities/wishlist'
// import { ChangeTheme } from '@/features/theme/changeTheme'
// import { useFeatureSlicedDebug } from '@/shared/lib'
// import { useAppSelector } from '@/shared/model'
// import { Logo } from '../Logo/Logo'
import s from './LayoutHeader.module.css'
import clsx from "clsx";
import {Link} from "@/shared/ui";

type Props = {
    className?: string
}

export function LayoutHeader(props: Props) {
    const {className} = props
    // const { rootAttributes } = useFeatureSlicedDebug('widget/LayoutHeader')
    // const darkModeIsEnabled = useFeatureToggle('darkMode')
    // const isAuthorized = useAppSelector(selectIsAuthorized)
    //
    // useWishlistProductsQuery(isAuthorized ? undefined : skipToken, {
    //   skip: !isAuthorized,
    // })
    //
    // useCartQuery(isAuthorized ? undefined : skipToken, {
    //   skip: !isAuthorized,
    // })

    return (
        <header className={clsx(className, s.header)}>
            <nav className={s.navigation}>
                <ul className={s.navigationList}>
                    <li>
                        <Link to="/">главная</Link>
                    </li>
                    <li>
                        <Link to="/todo">todo</Link>
                    </li>
                </ul>
            </nav>
            {/*{darkModeIsEnabled && <ChangeTheme />}*/}
        </header>
    )
}
