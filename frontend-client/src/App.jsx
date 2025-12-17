
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

const appStyle={fontFamily:"Arial",padding:20,maxWidth:500,margin:"auto"};
const cardStyle={border:"1px solid #ddd",borderRadius:8,padding:15,marginBottom:15};
const buttonStyle={padding:"10px 15px",border:"none",borderRadius:5,backgroundColor:"#ff4d4d",color:"#fff"};
const secondaryButton={...buttonStyle,backgroundColor:"#555",marginLeft:10};

function Home(){const n=useNavigate();return(<div style={appStyle}><h1>Plateforme de livraison locale</h1><p>Localisation obligatoire</p><button style={buttonStyle} onClick={()=>n("/restaurants")}>Continuer</button></div>);}
function Restaurants(){const n=useNavigate();const r=[{id:1,name:"Pizza Milano",type:"Pizzeria",distance:"0.5 km"}];return(<div style={appStyle}><h1>Restaurants</h1>{r.map(x=>(<div key={x.id} style={cardStyle}><h3>{x.name}</h3><button style={buttonStyle} onClick={()=>n("/menu")}>Menu</button></div>))}</div>);}
function Menu(){const n=useNavigate();const[p,setP]=useState([]);const m=[{id:1,name:"Pizza",price:800,available:true}];return(<div style={appStyle}><h1>Menu</h1>{m.map(x=>(<div key={x.id} style={cardStyle}><h3>{x.name}</h3>{x.available&&<button style={buttonStyle} onClick={()=>setP([...p,x])}>Ajouter</button>}</div>))}<button style={secondaryButton} onClick={()=>n("/cart")}>Panier ({p.length})</button></div>);}
function Cart(){return(<div style={appStyle}><h1>Panier</h1><button style={buttonStyle}>Commander</button></div>);}
function RestaurantDashboard(){return(<div style={appStyle}><h1>Restaurant</h1></div>);}
function LivreurDashboard(){return(<div style={appStyle}><h1>Livreur</h1></div>);}
function AdminDashboard(){return(<div style={appStyle}><h1>Admin</h1></div>);}
function Abonnement({actif,children}){if(!actif)return(<div style={appStyle}><h2>Abonnement requis</h2></div>);return children;}

export default function App(){return(<BrowserRouter><Routes>
<Route path="/" element={<Home/>}/>
<Route path="/restaurants" element={<Restaurants/>}/>
<Route path="/menu" element={<Menu/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/restaurant" element={<Abonnement actif={true}><RestaurantDashboard/></Abonnement>}/>
<Route path="/livreur" element={<Abonnement actif={true}><LivreurDashboard/></Abonnement>}/>
<Route path="/admin" element={<AdminDashboard/>}/>
</Routes></BrowserRouter>);}
