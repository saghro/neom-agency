import Routers from '../Routes/routes';

const Layout = ({ children }) => {
    return (
             <div className="relative">
           <main>
               {children}
           </main>
           <Routers />
        </div>
    );
}

export default Layout;