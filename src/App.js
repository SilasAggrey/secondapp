import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
	<nav className="navbar navbar-expand-lg navbar-light  bg-light nav-home">
		<a className="navbar-brand nav-brand" href="#">PIZZAMANIA</a>
    <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggle-icon"></span>    	
     </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      	<ul className="navbar-nav ml-auto">
      		<li className="nav-item">
      			<a className="nav-link nav-color" href="#">Home</a>
      		</li>
      		<li className="nav-item">
      			<a className="nav-link nav-color" href="#">About Pizza</a>
      		</li>
      		<li className="nav-item">
      			<a className="nav-link nav-color" href="#">Pizza Types</a>
      		</li>
      	</ul>
      </div>
	</nav>

   <div className="container-fluid">
   	 <div className="row">
       <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
       	<ol className="carousel-indicators">
       		<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active">	
       		</li>
       		<li data-target="#carouselExampleCaptions" data-slide-to="1">	
       		</li>
       		<li data-target="#carouselExampleCaptions" data-slide-to="2" >	
       		</li>
       	</ol>
       <div className="carousel-inner carousel-page">
       	 <div className="carousel-item active">
       	 	<img src="pizza img/pizzahome.jpg"  className="d-block w-200" alt="pizza" width="1345" height="600"/>    
       	 </div>
         <div className="carousel-item">
       	 	<img src=""  className="d-block w-100" alt="pizza"/>    
       	 </div>
          <div className="carousel-item">
       	 	<img src=""  className="d-block w-100" alt="pizza"/>    
       	 </div>
       </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="sr-only">Previous</span></a>

        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="prev"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="sr-only">Next</span></a>
       </div>
   	 </div>
   </div>

   <div className="container">
   	    <h2 className="text-center he2">About Pizza</h2>
   </div>

   <div className="container">
   	 <div className="col-md-6">
   	 	<img src="pizza img/piz.jpg" alt="about pizza" style={{float:"right",width:190,height:184}}/>
   	 </div>
   	 <div className="col-md-6">
   	 	<h3>Pizza Is Awesome</h3>
   	 	<p> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
   	 	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
   	 	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
   	 	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
   	 	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
   	 	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   	 	</p>
   	 	<p> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
   	 	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
   	 	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
   	 	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
   	 	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
   	 	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   	 	</p>
   	 	<p> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
   	 	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
   	 	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
   	 	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
   	 	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
   	 	proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
   	 	</p>  	 	
   	 </div>
   	 </div>

  <div className="container">
  	<h3 className="text-center he2">Pizza Types</h3>
  </div>
  <div className="container">
  	<div className="row">
  		<div className="col-md-3">
  			<div className="card" style={{width: "19rem"}}>
  				<img src="pizza img/pizza1.webp" className="card-img-top" alt="Detroit Pizza" height="225"/>
  				<div className="card-body">
  					<h4 className="card-title">DEROIT PIZZA</h4>
  					<p className="card-text">
  						psum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
   	 	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
   	 	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
   	 	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
   	 	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
   	 	proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
  					</p>
  				</div>
  			</div>
  		</div>
<div className="col-md-3">
	<div className="card" style={{width: "19rem"}}>
      <img src="pizza img/pizza2.jpeg" className="card-img-top" alt="CHICKEN TIKKA MASALA PIZZA"/>
		<div className="card-body">
			<h4 className="card-title">CHICKEN TIKKA MASALA PIZZA</h4>
            <p className="card-text">
            	psum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
   	 	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
   	 	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
   	 	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
   	 	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
   	 	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
		</div>
	</div>
</div>
<div className="col-md-3">
	<div className="card" style={{width: "19rem"}}>
      <img src="pizza img/pizza3.jpg" className="card-img-top" alt="mango pizza"  height="225"/>
		<div className="card-body">
			<h4 className="card-title">MANGO PIZZA</h4>
            <p className="card-text">
            	psum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
   	 	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
   	 	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
   	 	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
   	 	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
   	 	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
		</div>
	</div>
</div>
<div className="col-md-3">
	<div className="card" style={{width: "19rem"}}>
      <img src="pizza img/pizza4.jpg" className="card-img-top" alt="Cheese pizza"  height="225"/>
		<div className="card-body">
			<h4 className="card-title">CHEESE PIZZA</h4>
            <p className="card-text">
            	psum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
   	 	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
   	 	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
   	 	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
   	 	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
   	 	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
		  </div>
	   </div>
     </div>

  	</div>
  </div>
<div className="footer">
	<div className="container">
		<p className="text-center">
			&copy;2055 Pizzamanina All Rights
		</p>
	</div>
</div>

    </div>
  );
}

export default App;
