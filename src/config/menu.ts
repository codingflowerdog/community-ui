import {INavigationMenu} from "@/type/INavigationMenu";

// 네이게이션 메뉴 리스트
const menu: Array<INavigationMenu> = [
    {
        icon: "assignment",
        text: "게시판",
        link: "/"
    }, {
        icon: "inventory",
        text: "아카이브",
        link: "/archive"
    }, {
        icon: "leaderboard",
        text: "차트",
        link: "/chart"
    }, {
        icon: "settings",
        text: "관리",
        link: "/setting"
    }
]

export { menu }