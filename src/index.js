import ReactDom from "react-dom";
import App from "./components/App";

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <table border='1'>
        <tr>
            <td><Lorem/></td>
            <td><App/></td>
        </tr>
    </table>
)
function Lorem(){
        return <p>lorem</p>
    }