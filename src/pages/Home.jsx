import Navbar from "../components/Navbar";

const Home = () =>
{
    return(
        <div className="home">
            <Navbar/>
            <h1 className="Greeting">Hello!</h1>
            <h2>I'm <b>Ntsako Ngoveni</b></h2>
            <p className="my_title">Frontend developer</p>
        </div>
        )
}
export default Home;