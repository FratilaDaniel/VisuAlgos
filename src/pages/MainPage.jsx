import "./mainPage.css";
import Header from "../components/Header/Header";
import GeneralContainer from "../components/GeneralContainer/GeneralContainer";
import Footer from "../components/Footer/Footer";

function MainPage(){
    return (
        <div id="main-page-container">
            <Header/>
            <GeneralContainer/>
            <Footer/>
        </div>
    );
}

export default MainPage;
