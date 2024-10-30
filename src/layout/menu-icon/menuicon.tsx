interface MenuIconProps {
    iconUrl: string;
    menuName: string;
}

function MenuIcon(props: MenuIconProps) {
    const { iconUrl, menuName } = props
    return (
        <div className='h-[60px] w-full bg-[#2b9ced75] rounded-full flex items-center justify-center border-primary-bule border-2'>
            <img src={iconUrl} alt={menuName} className="h-10 w-10" />
        </div>
    )
}
export default MenuIcon