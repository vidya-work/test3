import  './index.module.css';
import Header from "../../component/header";
import Sidebar from "../../component/sidebar";
import TableView from "./table";
function Index(){
    return(
    <div className={'body'}>
    <div className={'row'}>
        <Header/>
    </div>
    <div className={'row'}>
    <div className={'col-2'}>
        <Sidebar/>
    </div>
    <div className={'col-10'}>
        <TableView/>
    </div>
    </div> 
    </div>
    )
}
export default Index;