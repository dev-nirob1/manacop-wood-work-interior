import Navbar from "../components/layout/Navbar";

export default function FrontLayout({ children }) {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
}