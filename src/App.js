
import Footer from './components/Footer';
import ListProductComponent from './components/ListProductComponent';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import AddProduct from './components/AddProduct';
import UpdateProductComponent from './components/UpdateProductComponent';

function App() {
  return (
    <div>
      <Router>
      <div className="container"></div>  
        <Header/>
        <div className="container">
          <Switch> 
            <Route path = "/" exact component = {ListProductComponent}></Route>
            <Route path = "/products" component = {ListProductComponent}></Route>
            <Route path = "/add-product" component = {AddProduct}></Route>
            <Route path = "/update-product" component = {UpdateProductComponent}></Route>
            <ListProductComponent/>
          </Switch>
        </div>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
