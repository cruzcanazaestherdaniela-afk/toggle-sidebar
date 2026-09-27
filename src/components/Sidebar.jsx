import useSidebarStore from '../store/sidebarStore';

function Sidebar() {

    const abierto = useSidebarStore((state) => state.abierto);
    const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

    return (

        <div className={abierto ? 'sidebar abierto' : 'sidebar cerrado'}>

            <div>

                <div className="logo">
                    🍜
                    {abierto && <span>Seul Sabor</span>}
                </div>

                <div className="opciones">

                    <div className="opcion">
                        🏠︎
                        {abierto && <span>Inicio</span>}
                    </div>

                    <div className="opcion">
                        🍜
                        {abierto && <span>Menu</span>}
                    </div>

                    <div className="opcion">
                        ♨
                        {abierto && <span>Especialidades</span>}
                    </div>

                    <div className="opcion">
                        𓐐𓎩
                        {abierto && <span>Pedidos</span>}
                    </div>

                    <hr />

                    <div className="opcion">
                        👨🏻‍🍳
                        {abierto && <span>Nuestros chefs</span>}
                    </div>

                    <div className="opcion">
                        ★
                        {abierto && <span>Favoritos</span>}
                    </div>

                    <hr />

                    <div className="opcion">
                        📍
                        {abierto && <span>Ubicación</span>}
                    </div>

                </div>

            </div>

            <div className="parte-inferior">

                <button onClick={toggleSidebar}>
                    ☰
                    {abierto && <span>Toggle-sidebar</span>}
                </button>

                <div className="opcion">
                    ⏻
                    {abierto && <span>Salir</span>}
                </div>

            </div>

        </div>
    );
}

export default Sidebar;